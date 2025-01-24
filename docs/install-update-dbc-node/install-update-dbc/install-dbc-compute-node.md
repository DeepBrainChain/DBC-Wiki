# 安装 DBC 算力节点

## (一) 安装前准备(基于已配置好固定公网 ip 地址），部署 KVM 安装环境

:::tip 注意！
系统采用 20.04 server 版本 或者22.04版本
:::

```shell
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get  install qemu-kvm libvirt-clients libvirt-daemon-system bridge-utils virt-manager ovmf cpu-checker vim expect -y
```

## (二) 创建和挂载 XFS 文件系统

**1、查看硬盘分区情况**

`lsblk`

**2、创建数据盘文件夹并且格式化硬盘、挂载硬盘(数据盘挂载目录务必为/data)**

```shell
sudo mkdir /data
sudo apt-get install xfsprogs -y
sudo mkfs.xfs -n ftype=1 -f /dev/sdb  （此处是否为sdb需要根据lsblk查看情况而定）
sudo mount  -o pquota /dev/sdb /data
sudo chmod 777 /data
sudo echo "/dev/sdb /data     xfs pquota 0 1" >> /etc/fstab
sudo mount -a
```

## (三) 判断机器是否支持虚拟化

**1、开启硬件支持**

> BIOS 开启IOMMU 以及 VT-d（如果是 AMD 平台，需要开启 AMD-Vi 具体操作根据主板类型浏览器搜索即可）
> VT（VT-x）及 VT-d 支持，AMD 叫 AMD-Vi。需要将相关支持设置为 enable，默认开启
>
> 一般情况下路径：Processor—IIO Configuration—Intel@ VT for Directed I/O(VT-d)

**2、环境依赖，检查 CPU 是否支持虚拟化以及 KVM 是否可用**

`egrep -c '(svm|vm)' /proc/cpuinfo`

> CPU 检测，如果显示为 0，则不支持虚拟化

`kvm-ok`

> 检查 kvm 是否可用
>
> 显示 INFO: /dev/kvm exists
> KVM acceleration can be used
> 表示可以进行后续操作，如果显示与其不相符，请检查 VT-d 是否正确开启

**3、检查 ip_forward 转发是否开启**

> 查看/proc/sys/net/ipv4/ip_forward 是否为 1
> 如果不为 1 则执行:
>
> ```
> sudo sh -c 'echo "net.ipv4.ip_forward=1" >> /etc/sysctl.conf'
> sudo sysctl -p
> ```
>
> 查看 lsmod | grep br_netfilter 是否有输出
> 如果没有输出则执行：
>
> ```
> sudo sh -c 'echo "br_netfilter" > /etc/modules-load.d/br_netfilter.conf'
> ```
>
> 执行完后需要重启，也可以与设置完显卡直通后一起重启

**vfio 环境准备**

- 设置黑名单，使卡不被占用

```shell
sudo vim /etc/modprobe.d/blacklist.conf
#最后添加内容：
blacklist snd_hda_intel
blacklist amd76x_edac
blacklist vga16fb
blacklist nouveau
blacklist rivafb
blacklist nvidiafb
blacklist rivatv
```

- 设置显卡直通

```shell
#查询显卡ID
lspci -nnv | grep NVIDIA
复制显卡id，例如10de:2231  10de:1aef，重复内容仅保留一次即可

#修改内核文件
sudo vim /etc/default/grub
#在GRUB_CMDLINE_LINUX_DEFAULT字段添加（如果是AMD平台，intel_iommu=on改为amd_iommu=on)
quiet splash intel_iommu=on kvm.ignore_msrs=1 vfio-pci.ids=显卡id，中间以逗号隔开
#在GRUB_CMDLINE_LINUX字段添加
quiet splash intel_iommu=on iommu=pt rd.driver.pre=vfio-pci


#更新内核
sudo update-grub

#重启机器
reboot
#查询显卡占用情况
lspci -vv -s <显卡PCI接口,例如00：01.0> | grep driver
```

> 显示 vfio-pci 即为正常，非 vfio-pci 请返回查看 grub 文件是否正确，如果无任何输出，请执行下面的手动绑定

- 检查内核参数：

> 检查`/proc/sys/net/bridge/bridge-nf-call-iptables`和`/proc/sys/net/bridge/bridge-nf-call-ip6tables`是否都=1

**手动绑定 GPU（仅限上一步查询没有输出的情况，以下示例仅作演示请根据实际查询结果进行替换）**

```shell
#执行命令进行绑定(注意：echo后的内容为机器查询到的显卡id）已经被占用的PCI可不用再手动绑定
sudo -i
sudo echo 10de 1e82 > /sys/bus/pci/drivers/vfio-pci/new_id
sudo echo 10de 2206 >> /sys/bus/pci/drivers/vfio-pci/new_id
…………


#绑定完成后再次查询（每张卡的所有项都要查一下）
lspci -vv -s 17:00.0 | grep driver
#如果出现 Kernel driver in use : vfio-pci 说明绑定成功。如果仍未成功，请返回检查
```

## (四) 确认机器显卡被 vfio-pci 占用后，启动 libvirtd 服务并设置开机自启

::: warning
这一步配置非常重要! **如果没有正确配置将无法正确接收请求，会直接影响机器在链状态，影响出租，造成损失**
:::

**1、开启 virt tcp 监听服务：**

```shell
修改配置文件：
sudo vim /etc/libvirt/libvirtd.conf

找到下边这2行，去掉开头的#号：
#listen_tls = 0
#listen_tcp = 1

找到这一行，去掉开头#号，并且将sasl改为none：
#auth_tcp = "sasl"	======>	auth_tcp = "none"

sudo vim /etc/default/libvirtd
#对应修改为如下配置（这个是小写L）
libvirtd_opts="-l"
#如果是ubuntu22.04级以上版本，则是
LIBVIRT_ARGS="-l"

#修改完成后请执行：
systemctl mask libvirtd.socket libvirtd-ro.socket libvirtd-admin.socket libvirtd-tls.socket libvirtd-tcp.socket
```

**2、启动 libvirtd 并设置开机自启&检查服务状态**

- sudo systemctl restart libvirtd.service
- sudo systemctl enable libvirtd.service
- systemctl status libvirtd

**3、测试 libvirtd 是否启动成功**

- virsh connect qemu+tcp://localhost:16509/system
- 如果没有输出错误，就说明启动成功了；

## (五) 安装 DBC 功能节点程序

- **注意**：需要切换到 dbc 用户安装

1. 下载 dbc 功能节点的安装脚本：
   http://112.192.16.27:9000/dbc/install_update_script/mainnet/install_mining.sh
2. 给安装脚本添加可执行权限：
   命令行下执行：`chmod +x ./install_mining.sh`
3. 运行安装脚本：
   命令行下执行：`./install_mining.sh [安装目录]`

(安装过程中，需要用户输入 2 个本地监听端口号)

## (六) 下载镜像模板（请放置于/data 目录下，dbc 启动虚拟机会去/data 目录搜寻）

http://112.192.16.27:9000/image/
下载：ubuntu.qcow2(此版本带有测试脚本，ubuntu2204.qcow2是纯净版） 和 windows_1909.qcow2 镜像

## (七) 备份机器 id 以及私钥

::: warning
非常重要，如果此私钥丢失会损失 50%的质押币，请注意多个地方备份
:::

> 备份安装目录下的 dat/node.dat 文件，放到安全的位置，后面如果重装系统或者重装 DBC 需要用原来的 id 和私钥，否则质押币会被扣除

## (八) 测试创建带有显卡直通的虚拟机,用来检测前面是否正确配置

- 测试程序下载地址：http://112.192.16.27:9000/dbc/package/check_env
- 二进制文件，添加执行权限直接执行即可: chmod 777 chec_env ; ./check_env
- 出现绿色`check vm domain_test successful`即为成功，若没有出现，请排查前面各项配置是否正确。

## (九) 检测机器的各种硬件参数指标是否正常

- 如果第八步检测成功，会成功创建一个虚拟机，通过 ssh 登陆进入这个虚拟机内部，其中：vm_local_ip 是虚拟机的内网 ip 地址，用户名是 dbc，pwd 后面的是登陆密码
  <img width="542" alt="1629202906(1)" src="https://user-images.githubusercontent.com/32829693/129724788-d50728cd-913b-4e91-8d0b-e53a098da091.png">

- 然后 cd 到测试脚本目录，运行: 【pytest .】，
  - cd /test/dbc_gpu_server_test/
  - sudo -i (切换到 root 用户)
  - pytest .
- 测试共 18 项；
  - 10 项单元测试，测试 CPU，内存，硬盘，显卡，显存，cuda 可用性等；
  - 7 项集成测试，测试实际各种使用情况是否正常（如 pytorch 计算 训练 推理）, 排除潜在硬件故障；
  - 1 项 benchmark 速度测试，测试数十种 CNN 网络的训练和推理，持续约十分钟；
  - 无红色 error 则通过，有红色 F / error 会显示报错对应测试项，可根据信息排查;
  - 4 卡 2080ti 全测试过程约 10 分钟，若测试时间过长如超过半小时，则机器可能存在问题可以提前中止测试（不中止则需要等测试完成后才会报 error）;
  - 测试结果中 short test summary info：如果全部是 passed，表示测试通过，只要有一项是 failed 表示测试不通过，需要排查故障；
  - 结束后生成 result 文件夹导出性能报告;
- 回到宿主机关闭并删除测试的虚拟机：./check_env --localip x.x.x.x （x.x.x.x 为虚拟机的内网 ip 地址，这一步不操作，会导致 dbc 程序无法启动新的虚拟机，从而无法上链验证通过）

## (十一) 如果执行 pytest 卡住或者 nvidia 没有任何调用，请按照以下思路排查

```shell
# 查看是否是vfio报错  dmesg | grep vfio-pci

root@HJICT:~# dmesg | grep vfio-pci
[   42.583025] vfio-pci 0000:01:00.0: vgaarb: changed VGA decodes: olddecodes=io+mem,decodes=io+mem:owns=io+mem
[   79.128425] vfio-pci 0000:01:00.0: vfio_ecap_init: hiding ecap 0x1e@0x258
[   79.128446] vfio-pci 0000:01:00.0: vfio_ecap_init: hiding ecap 0x19@0x900
[   79.128454] vfio-pci 0000:01:00.0: vfio_ecap_init: hiding ecap 0x26@0xc1c
[   79.128457] vfio-pci 0000:01:00.0: vfio_ecap_init: hiding ecap 0x27@0xd00
[   79.128461] vfio-pci 0000:01:00.0: vfio_ecap_init: hiding ecap 0x25@0xe00
[   79.129879] vfio-pci 0000:01:00.0: BAR 1: can't reserve [mem 0x90000000-0x9fffffff 64bit pref]
[   79.148593] vfio-pci 0000:01:00.1: vfio_ecap_init: hiding ecap 0x25@0x160
[  183.031546] vfio-pci 0000:01:00.0: BAR 1: can't reserve [mem 0x90000000-0x9fffffff 64bit pref]
[  183.031575] vfio-pci 0000:01:00.0: BAR 1: can't reserve [mem 0x90000000-0x9fffffff 64bit pref]
[  183.049344] vfio-pci 0000:01:00.0: BAR 1: can't reserve [mem 0x90000000-0x9fffffff 64bit pref]
[  183.049375] vfio-pci 0000:01:00.0: BAR 1: can't reserve [mem 0x90000000-0x9fffffff 64bit pref]

# vfio-pci 有一个明显的错误，进一步查看

root@HJICT:~# cat /proc/iomem
00000000-00000fff : Reserved
00001000-0009d3ff : System RAM
0009d400-0009ffff : Reserved
000a0000-000bffff : PCI Bus 0000:00
000c0000-000cf3ff : Video ROM
000e0000-000fffff : Reserved
  000f0000-000fffff : System ROM
00100000-8ceacfff : System RAM
8cead000-8e718fff : Reserved
8e719000-8e895fff : System RAM
8e896000-8ec98fff : ACPI Non-volatile Storage
8ec99000-8f40efff : Reserved
8f40f000-8f40ffff : System RAM
8f410000-8fffffff : Reserved
90000000-dfffffff : PCI Bus 0000:00
  90000000-a1ffffff : PCI Bus 0000:01
    90000000-9fffffff : 0000:01:00.0
      90000000-9fffffff : vesafb
    a0000000-a1ffffff : 0000:01:00.0
      a0000000-a1ffffff : vfio-pci
  a2000000-a30fffff : PCI Bus 0000:01
    a2000000-a2ffffff : 0000:01:00.0
      a2000000-a2ffffff : vfio-pci
    a3080000-a3083fff : 0000:01:00.1
      a3080000-a3083fff : vfio-pci
  a3100000-a31fffff : 0000:00:1f.3
  a3200000-a32fffff : PCI Bus 0000:02
    a3200000-a32001ff : 0000:02:00.0
      a3200000-a32001ff : ahci



#  上面可以看到，90000000-9fffffff  被vesafb占用，并非vfio-pci

# 修改/etc/default/grub，关闭vga，
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash intel_iommu=on iommu=pt pcie_acs_override=multifunction nofb video=vesafb:off video=efifb:off vga=off"
GRUB_CMDLINE_LINUX="quiet splash intel_iommu=on iommu=pt rd.driver.pre=vfio-pci"


更新并重启
update-initramfs -u -k all
update-grub
reboot
```

## (十二) 查看机器是否正确加入到算力网络

- 矿池搭建客户端节点
  请参考 [install_update_dbc_client_cn.md](https://deepbrainchain.github.io/DBC-Wiki/install-update-dbc-node/install-update-dbc/install-update-dbc-client.html)
- 1 分钟后，通过客户端请求机器信息，如果能够查到机器信息，说明机器已加入到网络中
  请求机器信息，请参考：[dbc_client_http_api](https://deepbrainchain.github.io/DBC-Wiki/install-update-dbc-node/dbc-client-api/http-api.html)
- 关于客户端节点：建议每家矿池搭建 2 个及以上客户端节点，保证在官方提供节点或者其他矿池提供节点掉线情况下依旧可以保证网络正常，如果网络中客户端节点过少或者挂掉过多，会影响机器出租情况。客户端节点搭建可以在其他服务器启动一个容器来部署，并不会占用太多资源。
- **_客户端节点可以与算力节点部署在同一台机器，注意每个节点的 conf/core.conf 配置文件中的端口号不要重复_**

## (十三) 机器上链

[https://deepbrainchain.github.io/DBC-Wiki/onchain-guide/bonding-machine.html](https://deepbrainchain.github.io/DBC-Wiki/onchain-guide/bonding-machine.html)

## (十四) 设置监控服务

- 设置 DBC 的监控服务器地址：在 conf/core.conf 中添加配置"dbc_monitor_server=ip:port"
- 设置矿工的监控服务器地址：在 conf/core.conf 中添加配置"miner_monitor_server=ip:port"
- 设置租用人的监控服务器地址：https://deepbrainchain.github.io/DBC-Wiki/install-update-dbc-node/dbc-monitor/http-monitor-api.html

## （十五）监听DBC广播

> 矿工可以机器闲置的时候启动虚拟机自己使用，但是需要在用户租用的时候10s内关闭正在使用的虚拟机， 这样就不会被用户举报受到惩罚，UDP 广播相关消息如下： 

+ dbc节点会在内网广播设备node_id 及其对应的状态
+ 广播地址：UDP 广播 255.255.255.255 端口 55555
+ 广播内容：{ "node_id": "xxx", "status": "renting" }
  { "node_id": "xxx", "status": "empty" }
+ 加密方式：base64 加密

