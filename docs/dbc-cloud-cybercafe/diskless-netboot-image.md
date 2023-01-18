# 无盘网起镜像

部署好无盘网起服务器之后，就可以制作无盘启动的镜像了。

## Windows 镜像

1. 设置无盘控制台的镜像和主机列表

1.1 在浏览器中打开无盘控制台，在`Image`页面创建镜像

这个页面有三张表格。

- Operation System: 系统盘。name(磁盘名称)，例如`win10`; description(磁盘描述)，例如`windows 10 21H1`; capacity(磁盘容量)，例如100G。
- Data Disk: 数据盘或者游戏盘等非系统盘。name(磁盘名称)，例如`game`; description(磁盘描述)，例如`game disk`; capacity(磁盘容量)，例如200G。
- Boot Menu: 一个系统盘和多个数据盘的启动项组合。name(启动项名称)，例如`win10test`; operation system(启动项的系统盘名称); data disk(启动项的数据盘名称集合)。

`Boot Menu` 中的 `name` 列的集合就是 `Hosts` 页面的 `default menu`的选项集合。

请在 `Image` 页面创建一个系统盘，至少一个数据盘，至少添加一个 Boot Menu。

1.2 添加GPU机器，绑定机器的IP地址，设置启动的镜像

切换到`Hosts`页面，添加至少一条数据，例如`host name`填写`test1`,`ip address`填写`192.168.1.101`,`mac address`填写某台GPU机器的MAC地址,`default menu`选择上面创建的其中一个，`super tube`勾选。

点击`Add/Modify Row`把填写的数据添加进表格中，列表选择添加的那一行，点击`Reset Host iSCSI`重置iSCSI设置。

注意: 添加修改删除 `host name`, `ip address`, `mac address` 需要重启 DHCP 服务才能生效。

2. 设置GPU机器的BIOS

一般机器的BIOS设置中网络启动选项是关闭的，需要手动开启，此处以ASUS主板为例，开启BIOS中的网络启动设置，并设置legacy启动，不要使用UEFI，其他型号主板请参考其供应商的产品手册。

2.1. Boot -> CSM 要开启，boot from network devices 要设置成 legacy。
2.2. Advanced -> Onboard devices configuration 中 Realtek LAN controller 和 Realtek LAN OPROM 要开启。
2.3. Advanced -> Network Stack configuration 中 Network Stack 和 ipv4 PXE support 要开启，ipv6 开关无所谓。
2.4. Boot option priorities 设置启动项的优先级。给本地硬盘安装系统时要把本地硬盘设置成第一个，无盘镜像准备好后要设置网络启动(网卡设备)为第一个。

3. 接下来给GPU机器本地磁盘安装系统

推荐使用 Windows 10 系统，且事先准备好微软官方镜像文件。

3.1. 先在本地硬盘上安装 Windows 10 系统和必要的网卡、显卡等硬件驱动。在测试的时候请不要安装多余的软件，只要能够从无盘启动，后面随时都可以继续安装其他软件。目前仅支持MBR分区格式，不支持GUID分区(对应UEFI启动)。
3.2. 将注册表`HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\Session Manager\Memory Management`的`PagingFiles`字段值清空。
3.3. 在Windows搜索框中输入`iSCSI 发起程序`，启动`iSCSI 发起程序`，首次启动时会提醒开启相应的服务，点击同意，然后在`iSCSI 发起程序`的配置页面修改`iSCSI 发起程序名称`为`iqn.2022-10.org.dbc.iscsi:global.client`。
3.4. 重启机器后将本地硬盘中的系统克隆到无盘网起服务器上。

4. 将本地硬盘上安装的系统克隆到无盘网起服务器上

4.1. 启动`iSCSI 发起程序`，在目标页面输入iSCSI服务器的IP地址，可以看到第一步中创建的`Boot Menu`，点击连接，可以看到磁盘管理器中多出了这个启动项的系统盘和数据盘。
4.2. 下载并运行[DiskGenius](https://www.diskgenius.cn/)，在菜单栏`工具`打开`克隆磁盘`，按照步骤将本地磁盘中的系统克隆到iSCSI映射的系统盘中。

5. 重启GPU机器从网络启动无盘系统

5.1. 设置BIOS中`Boot option priorities`的第一项为网卡，保存并重启。
5.2. 自动重启并进入 iPXE 启动界面，加载显示`menu iPXE boot menu build 20220717`菜单，自动倒计时结束后进入克隆后的无盘系统。

如果一切正常，能够进入无盘系统并登录，此时使用与本地磁盘一样，还可以继续安装需要的软件和远程控制等。如果遇到蓝屏，或者中间步骤有疑问，请咨询 DBC 技术支持。

## Ubuntu 18.04 镜像

制作 Ubuntu 18.04 系统的镜像，前两步与 Windows 系统类似，需要创建ubuntu的系统盘和`Boot Menu`，设置BIOS，后面的区别在于无需在本地安装和克隆系统，因为 Ubuntu 系统支持网络直接安装到 iSCSI 磁盘中。

1. ubuntu netboot

ubuntu 18.04 官方 netboot: http://www.archive.ubuntu.com/ubuntu/dists/bionic-updates/main/installer-amd64/current/images/netboot/netboot.tar.gz
清华源下载地址: https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ubuntu/dists/bionic/main/installer-amd64/current/images/netboot/netboot.tar.gz

Ubuntu 20.04 或者阿里云源类似。

下载`netboot.tar.gz`到HTTP服务目录`/var/www/file`中并解压。

2. 修改ubuntu无人值守配置文件

打开HTTP服务目录中的`ubuntu/preseed.cfg`文件，根据实际需要修改其中的 locale, language, country, timezone, mirror, partman-iscsi 和所有IP地址。

3. 从网络启动GPU机器后手动进入 ubuntu 的网络安装界面。

启动机器进入`menu iPXE boot menu build 20220717`菜单时，要在5秒钟倒计时内手动选择`Installing Ubuntu to iSCSI target`，然后按回车键进入网络安装界面。

在安装界面可能仍需手动输入一些无人值守加载失败的选项，在安装到磁盘时选择正确的iSCSI磁盘，一路执行即可。

4. 安装结束重启自动进入安装好的ubuntu系统。
