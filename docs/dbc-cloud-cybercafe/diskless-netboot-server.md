# 无盘网起服务器

DBC-CloudCyberCafe 项目使用 iPXE 引导启动，使用 iSCSI 做无盘服务，使用 lvm2 做存储管理，使用 thrift 做 API 接口，使用 plotly 提供控制台界面，共同组合为客户提供无盘启动服务，因此部署无盘网起服务器也就是分别部署这些模块。服务器系统使用 ubuntu 20.04。

## iPXE

PXE 是 Intel 提出的，用以网卡启动。通过 DHCP 获取 IP 以及 TFTP 获取启动文件。iPXE 是 PXE 的增强扩展版，支持 HTTP 等多种获取手段，因此需要部署 DHCP，TFTP 和 HTTP 服务。

### DHCP

动态主机配置协议 DHCP（Dynamic Host Configuration Protocol） 是 RFC 1541（已被 RFC 2131 取代）定义的标准协议，该协议允许服务器向客户端动态分配 IP 地址和配置信息。
而且 PXE 服务需要使用 DHCP 协议的 bootfile 字段告诉机器 PXE 的启动文件。如果网吧等场所已经存在 DHCP 服务(路由器提供的 DHCP 地址分配)，推荐使用 dnsmasq 做 DHCP 代理，如果没有 DHCP 服务，推荐直接使用 isc-dhcp-server 配置自己的子网。DBC-CloudCyberCafe 项目默认使用 dnsmasq 服务，因为很多客户环境已经存在路由器，只需要 dnsmasq 做 DHCP 协议代理提供 bootfile 等字段，此时只需安装 dnsmasq 并能成功启动 dnsmasq.service 即可，具体的配置将于项目的控制台自动生成。

```
# 安装 dnsmasq
sudo apt install dnsmasq
# 查看 dnsmasq 服务运行情况
systemctl status dnsmasq.service
```

:::tip 注意！
ubuntu 系统默认的 systemd-resolved 会监听 53 端口做 DNS 解析，启动 dnsmasq.service 服务可能会失败，解决办法有很多，这里提供一种参考：使用命令 systemd-resolve --interface=eno1 --set-dns=223.5.5.5 手动为网卡 eno1 设置 dns 地址为 223.5.5.5，然后重启 systemd-resolved.service 服务，此时再去启动 dnsmasq.service 服务就能成功了。
:::

另外，若需要安装 isc-dhcp-server 可参考下面的步骤。

```
# 安装 isc-dhcp-server
sudo apt install isc-dhcp-server
# 查看 isc-dhcp-server 服务运行情况
systemctl status isc-dhcp-server.service
```

:::tip 注意！
使用 isc-dhcp-server 服务需要在 /etc/default/isc-dhcp-server 文件中设置具体的网卡，指定为哪个网卡启用 DHCP 服务。
:::

### TFTP

```
# 安装 TFTP 服务
sudo apt install tftpd-hpa
# 查看 tftpd-hpa 服务运行情况
systemctl status tftpd-hpa.service
```

tftpd-hpa 默认使用 /srv/tftp 文件夹作为存储目录，需要在此目录中放入 undionly.kpxe 和 ipxe.efi，这两个文件可以使用 ipxe 官网提供的文件，我们推荐使用自定义脚本自行编译文件，后面将介绍如何编译 iPXE。

iPXE 官网提供的启动文件下载地址如下：

- undionly.kpxe: https://boot.ipxe.org/undionly.kpxe
- ipxe.efi: https://boot.ipxe.org/ipxe.efi

### HTTP

iPXE 可以使用更加稳定可靠的 HTTP 协议下载需要的文件，可以使用 apache 或者 nginx 搭建 HTTP 服务器，下面以 nginx 为例：

```
# 安装 nginx，参考 http://nginx.org/en/linux_packages.html#Ubuntu
sudo apt install nginx
```

在 /etc/nginx/nginx.conf 文件中 http 块添加以下 server 块：

```
    server {
        listen    8080;
        root      /var/www/file;
        location / {
            autoindex on;# 显示目录
            autoindex_exact_size on;# 显示文件大小
            autoindex_localtime on;# 显示文件时间
        }
    }
```

最后重启 nginx 就能把 /var/www/file 目录搭建成文件服务器，使用 8080 端口的 url 在浏览器中访问。

/var/www/file 目录结构如下：

```
dbtu@dbtu:/var/www/file$ tree
.
├── ipxe
│   ├── boot.ipxe
│   ├── boot.ipxe.cfg
│   ├── cfg
│   │   ├── 404.html
│   │   ├── mac-0050562ca04b.ipxe.cfg
│   │   ├── mac-40b0767ee231.ipxe.cfg
│   │   └── mac-88aedd0508fa.ipxe.cfg
│   └── wimboot
├── netboot
│   ├── ldlinux.c32 -> ubuntu-installer/amd64/boot-screens/ldlinux.c32
│   ├── netboot.tar.gz
│   ├── pxelinux.0 -> ubuntu-installer/amd64/pxelinux.0
│   ├── pxelinux.cfg -> ubuntu-installer/amd64/pxelinux.cfg
│   ├── ubuntu-installer
│   │   └── amd64
│   │       ├── boot-screens
│   │       │   ├── adtxt.cfg
│   │       │   ├── exithelp.cfg
│   │       │   ├── f10.txt
│   │       │   ├── f1.txt
│   │       │   ├── f2.txt
│   │       │   ├── f3.txt
│   │       │   ├── f4.txt
│   │       │   ├── f5.txt
│   │       │   ├── f6.txt
│   │       │   ├── f7.txt
│   │       │   ├── f8.txt
│   │       │   ├── f9.txt
│   │       │   ├── ldlinux.c32
│   │       │   ├── libcom32.c32
│   │       │   ├── libutil.c32
│   │       │   ├── menu.cfg
│   │       │   ├── prompt.cfg
│   │       │   ├── rqtxt.cfg
│   │       │   ├── splash.png
│   │       │   ├── stdmenu.cfg
│   │       │   ├── syslinux.cfg
│   │       │   ├── txt.cfg
│   │       │   └── vesamenu.c32
│   │       ├── initrd.gz
│   │       ├── linux
│   │       ├── pxelinux.0
│   │       └── pxelinux.cfg
│   │           └── default -> ../boot-screens/syslinux.cfg
│   └── version.info
├── ubuntu
│   └── preseed.cfg
└── winpe
    ├── amd64
    │   ├── fwfiles
    │   │   ├── efisys.bin
    │   │   └── etfsboot.com
    │   ├── media
    │   │   ├── bg-bg
    │   │   │   └── bootmgr.efi.mui
    │   │   ├── Boot
    │   │   │   ├── BCD
    │   │   │   ├── bg-bg
    │   │   │   │   └── bootmgr.exe.mui
    │   │   │   ├── bootfix.bin
    │   │   │   ├── boot.sdi
    │   │   │   ├── en-us
    │   │   │   │   ├── bootmgr.exe.mui
    │   │   │   │   └── memtest.exe.mui
    │   │   │   ├── Fonts
    │   │   │   │   ├── chs_boot.ttf
    │   │   │   │   ├── cht_boot.ttf
    │   │   │   │   ├── jpn_boot.ttf
    │   │   │   │   ├── kor_boot.ttf
    │   │   │   │   ├── malgun_boot.ttf
    │   │   │   │   ├── malgunn_boot.ttf
    │   │   │   │   ├── meiryo_boot.ttf
    │   │   │   │   ├── meiryon_boot.ttf
    │   │   │   │   ├── msjh_boot.ttf
    │   │   │   │   ├── msjhn_boot.ttf
    │   │   │   │   ├── msyh_boot.ttf
    │   │   │   │   ├── msyhn_boot.ttf
    │   │   │   │   ├── segmono_boot.ttf
    │   │   │   │   ├── segoen_slboot.ttf
    │   │   │   │   ├── segoe_slboot.ttf
    │   │   │   │   └── wgl4_boot.ttf
    │   │   │   ├── memtest.exe
    │   │   │   ├── Resources
    │   │   │   │   └── bootres.dll
    │   │   │   ├── zh-cn
    │   │   │   │   ├── bootmgr.exe.mui
    │   │   │   │   └── memtest.exe.mui
    │   │   │   └── zh-tw
    │   │   │       ├── bootmgr.exe.mui
    │   │   │       └── memtest.exe.mui
    │   │   ├── bootmgr
    │   │   ├── bootmgr.efi
    │   │   ├── EFI
    │   │   │   ├── Boot
    │   │   │   │   ├── bootx64.efi
    │   │   │   │   └── en-us
    │   │   │   │       └── bootx64.efi.mui
    │   │   │   └── Microsoft
    │   │   │       └── Boot
    │   │   │           ├── BCD
    │   │   │           ├── en-us
    │   │   │           │   └── memtest.efi.mui
    │   │   │           ├── Fonts
    │   │   │           │   ├── chs_boot.ttf
    │   │   │           │   ├── cht_boot.ttf
    │   │   │           │   ├── jpn_boot.ttf
    │   │   │           │   ├── kor_boot.ttf
    │   │   │           │   ├── malgun_boot.ttf
    │   │   │           │   ├── meiryo_boot.ttf
    │   │   │           │   ├── msjh_boot.ttf
    │   │   │           │   ├── msyh_boot.ttf
    │   │   │           │   ├── segmono_boot.ttf
    │   │   │           │   ├── segoe_slboot.ttf
    │   │   │           │   └── wgl4_boot.ttf
    │   │   │           ├── memtest.efi
    │   │   │           ├── Resources
    │   │   │           │   └── bootres.dll
    │   │   │           ├── zh-cn
    │   │   │           │   └── memtest.efi.mui
    │   │   │           └── zh-tw
    │   │   │               └── memtest.efi.mui
    │   │   ├── en-us
    │   │   │   └── bootmgr.efi.mui
    │   │   ├── sources
    │   │   │   └── boot.wim
    │   └── mount
    ├── lightningWinPE
    │   ├── boot
    │   │   ├── bcd
    │   │   └── boot.sdi
    │   ├── bootmgr
    │   ├── bootmgr.efi
    │   ├── efi
    │   │   ├── boot
    │   │   │   └── bootx64.efi
    │   │   └── microsoft
    │   │       └── boot
    │   │           └── bcd
    │   └── sources
    │       └── BOOT.WIM
    ├── wepe
    │   ├── EFI
    │   │   ├── BOOT
    │   │   │   └── bootx64.efi
    │   │   └── MICROSOFT
    │   │       └── BOOT
    │   │           ├── BCD
    │   │           └── FONTS
    │   │               └── wgl4_boot.ttf
    │   ├── WEIPE
    │   └── WEPE
    │       ├── B64
    │       ├── FONTS
    │       │   └── wgl4_boot.ttf
    │       ├── MESSAGE
    │       ├── PELOAD
    │       ├── WEIPE
    │       ├── WEPE64
    │       ├── WEPE64.WIM
    │       ├── WEPE.INI
    │       ├── WEPE.SDI
    │       └── WEPE.TXT
    └── WePE64_V2.2.iso
```

- ipxe 文件夹下存放的是 iPXE 的启动脚本，其中 mac-000c29c63944.ipxe.cfg 以 MAC 地址去除冒号全小写格式命名，每个被引导的机器都需要有一个对应的配置文件，由控制台程序自动生成。
- wimboot 文件从 https://github.com/ipxe/wimboot/releases 下载。
- winpe 下面存放安装 Windows 系统所用的 PE 文件，暂时不需要，开发测试使用。
- netboot 是网络安装 ubuntu 所用的文件，可以从阿里云或者清华源下面，如果客户需要 ubuntu 系统镜像就需要下载此文件。
- ubuntu/preseed.cfg 是网络安装 ubuntu 使用的无人值守配置文件。

其中 ipxe/boot.ipxe 文件内容如下：

```
#!ipxe
chain --autofree boot.ipxe.cfg
chain --replace cfg/mac-${mac:hexraw}.ipxe.cfg
```

其中 ipxe/boot.ipxe.cfg 文件内容如下：

```
#!ipxe
set iscsi-server 192.168.1.159
set base-url http://192.168.1.159:8080
set menu-timeout 5000
```

其中 iscsi-server 的 IP 地址即无盘网起服务器的 IP 地址，base-url 即 HTTP 服务的 url，这些内容请根据实际情况自行设置。

### iPXE 的文件配置

编译 iPXE 的过程可以参考: https://ipxe.org/download

```
git clone https://github.com/ipxe/ipxe.git
cd ipxe/src
```

在 ipxe/src 文件夹中创建 script.ipxe,文件内容为：

```
#!ipxe
dhcp
chain --autofree http://192.168.1.2:8080/ipxe/boot.ipxe
```

此处 192.168.1.2 为无盘网起服务器的 IP 地址，8080 端口为 nginx 配置的 HTTP 服务的端口，请根据各自的实际配置填写。

然后使用 script.ipxe 编译 iPXE 启动文件，就能在启动 PXE 引导后自动加载 HTTP 服务提供的 boot.ipxe 配置，使用以下命令编译：

```
make bin-x86_64-pcbios/undionly.kpxe EMBED=script.ipxe
make bin-x86_64-efi/ipxe.efi EMBED=script.ipxe
```

将编译好的 undionly.kpxe 和 ipxe.efi 文件拷贝到 TFTP 服务目录。

```
sudo cp bin-x86_64-pcbios/undionly.kpxe /srv/tftp/
sudo cp bin-x86_64-efi/ipxe.efi /srv/tftp/
```

## iSCSI

iSCSI（Internet Small Computer System Interface，发音为/ˈаɪskʌzi/），Internet 小型计算机系统接口，又称为 IP-SAN，是一种基于因特网及 SCSI-3 协议下的存储技术，由 IETF 提出，并于 2003 年 2 月 11 日成为正式的标准。

iSCSI 利用了 TCP/IP 的 port 860 和 3260 作为沟通的渠道。透过两部计算机之间利用 iSCSI 的协议来交换 SCSI 命令，让计算机可以透过高速的局域网集线来把 SAN 模拟成为本地的储存装置。

本质上，iSCSI 让两个主机通过 IP 网络相互协商然后交换 SCSI 命令。这样一来，iSCSI 就是用广域网仿真了一个常用的高性能本地存储总线，从而创建了一个存储局域网（SAN）。不像某些 SAN 协议，iSCSI 不需要专用的电缆；它可以在已有的交换和 IP 基础架构上运行。

对于配有支持网络引导的网络接口设备（网卡）的计算机，可以另外配置一台 DHCP 服务器来协助“iSCSI 启动”。 这种情况下，网卡会寻找一个提供 PXE 或 BOOTP 引导映像的 DHCP 服务器。该 DHCP 服务器会根据启动网卡的 MAC 地址提供对应的 iSCSI 启动目标设备/卷信息，然后计算机便可以开始从 iSCSI 远程启动的进程了。

iSCSI 分为服务端和客户端，服务端需要安装 scsi target 用来共享存储设备，客户端需要安装 iscsi initiator 用来连接 target 端，将 target 端共享的设备挂载到 initiator 本地，可以对其进行分区，格式化等操作。

### iSCSI 客户端

iSCSI initiator 是发起 I/O 操作的启动者；需要通过发现过程请求远端块设备；可以与 target 进行持久连接；在 Linux 系统中可以使用 open-iscsi 软件包来模拟实现，在 Windows 10 及以上版本系统中内置的 iSCSI 发起程序 实现。

### iSCSI 服务器端

iSCSI target 是 I/O 操作的执行者；需要导出一个或多个块设备供启动者（initiator）使用；在 Linux 系统中可以使用两种 target 工具，分别为 tgt，和 targetcli，这里先介绍 TGT 的方法，TGT 是 Fujita Tomonori 于 2006 年底将 SCSI Target Framework (STGT/TGT) 引入 Linux 内核。它在内核中有一个库，可协助内核控制目标驱动程序，TGT 是用户态实现的 iscsi target，所有目标处理都在用户空间进行。在 2010 年底，LIO(Linux-IO)项目被选择来代替 TGT 作为内核态实现的 iscsi target。当选择 LIO 替换 TGT 时，它的实现已经进行了调整，以允许 TGT 用户空态模块继续运行，因此 TGT 社区支持在内核中包含 LIO。在 Linux 内核 2.6.38 之前都是 TGT。

### Linux-IO

Linux-IO Target 在 Linux 内核中（linux 2.6.38 后），用软件实现各种 SCSI Target，其支持的 SAN 技术中所有流行的存储协议包括 Fibre Channel（Qlogic，linux3.5）、FCoE（linux3.0）、iSCSI（linux 3.1）、iSER (Mellanox InfiniBand，linux3.10), SRP (Mellanox InfiniBand，linux3.3), USB 等，同时还能为本机生成模拟的 SCSI 设备，以及为虚拟机提供基于 virtio 的 SCSI 设备。Linux-IO Target 使用户能够使用相对廉价的 Linux 系统实现 SCSI、SAN 的各种功能，而不用购买昂贵的专业设备。

Linux-IO Target 则在内核态实现了对 Target 的模拟，配置管理则采用了更为“现代化”的基于 sysfs 的方式，提供了友好的用户态管理工具。从内核的 2.6.38 版起，Linux 内核都包含 Linux-IO Target 的相关模块。在用户态，各大发行版都打包了 targetcli 和 rtslib，其中 targetcli 程序用于配置、管理，rtslib 则提供 Python 编程接口。

使用以下命令安装 iSCSI 服务器端：

```
sudo apt install targetcli-fb open-iscsi
```

## lvm2

LVM(Logical Volume Manager)是逻辑卷管理的意思，是 linux 环境下对磁盘分区进行管理的一种机制，lvm 是建立在硬盘和分区之上的一个逻辑层，来提高磁盘分区管理的灵活性。

- PV(physical volume)- 物理卷: 通常是一个分区，也可以是整个物理硬盘，也可以是 raid 设备。
- VG(volume group)- 卷组: 多个物理卷的集合，创建在物理卷之上，在卷组创建时候，可以动态添加物理卷到卷组中。一个逻辑卷系统工程中可以只有一个卷组，也可以有多个卷组。
- LV(logical volume)- 逻辑卷: 创建在卷组之上，逻辑卷也可以动态的扩展或缩小空间。卷组中未被分配的卷组空间可以用于创建新的逻辑卷。多个逻辑卷可以属于同一个卷组，也可以属于不同的卷组。

安装 lvm2 命令如下：

```
sudo apt install lvm2
```

此处推荐使用`pvcreate`命令将安全快速的 RAID 设备初始化为物理卷，使用`vgcreate`命令在物理卷上创建卷组，然后把卷组名称填写到无盘控制台的设置中，无盘控制台程序会自动在卷组之上创建逻辑卷，在逻辑卷上创建无盘的镜像，以镜像文件作为 iSCSI 的后端存储，最后由 iPXE 引导程序连接 iSCSI 后端附加成为网络磁盘，我们就可以像本地磁盘一样启动磁盘中的系统和存储数据。

## thrift

DBC-CloudCyberCafe 项目使用 thrift rpc 框架对外提供 API 接口，以方便第三方程序(主要是指 dbc 程序)设置机器进入 Windows 还是 Ubuntu 系统，修改系统的登录密码和关闭无盘的客户机等操作。因此无盘网起服务器需要安装必要的 thrift 工具。

```
sudo apt install thrift-compiler python3-pip
sudo pip3 install thrift
```

## 无盘网起管理控制台

DBC-CloudCyberCafe 项目使用 plotly 实现了一个无盘管理控制台，以方便客户的管理人员添加机器，绑定 MAC 地址和 IP 地址，修改机器的启动项等。

因为对 lvm2 和 iSCSI 的操作都需要无盘网起服务器的 root 用户权限，无盘控制台可能会因为请求输入 root 用户密码而一直等待导致后续很多操作失败，所以建议设置服务器的用户在执行 sudo 命令时无需输入密码，在 `/etc/sudoers` 中添加内容 `dbc	ALL=(ALL) NOPASSWD:ALL`，`/etc/sudoers` 文件内容如下：

```
#
# This file MUST be edited with the 'visudo' command as root.
#
# Please consider adding local content in /etc/sudoers.d/ instead of
# directly modifying this file.
#
# See the man page for details on how to write a sudoers file.
#
Defaults	env_reset
Defaults	mail_badpass
Defaults	secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin"

# Host alias specification

# User alias specification

# Cmnd alias specification

# User privilege specification
root	ALL=(ALL:ALL) ALL

# Members of the admin group may gain root privileges
%admin ALL=(ALL) ALL

# Allow members of group sudo to execute any command
%sudo	ALL=(ALL:ALL) ALL
dbc  ALL=(ALL) NOPASSWD:ALL

# See sudoers(5) for more information on "#include" directives:

#includedir /etc/sudoers.d
```

部署无盘控制台的命令如下:

```
# 下载 DBC-CloudCyberCafe 项目代码
git clone https://github.com/DeepBrainChain/DBC-CloudCyberCafe.git
cd DBC-CloudCyberCafe/preset/
thrift --gen py preset.thrift
cd ../plotly/
sudo python3 home.py
```

只要在项目代码的 `DBC-CloudCyberCafe/plotly/` 目录下执行 `sudo python3 home.py` 命令，就能启动无盘服务的控制台程序，然后浏览器中输入 `http://localhost:8050/` 即可访问控制台。切忌不要忘了将 `localhost` 换成无盘网起服务器的 IP 地址。

在浏览器中打开无盘控制台后，需要在`Setting`页面填写一些设置。

- Storage
  - Volume Group: 填写上述 lvm2 步骤中创建的卷组。
- DHCP
  - network name: 网络或者子网名称，默认`dbc`。
  - interface: 网卡设备名称，连接在一个局域网中的那个网卡，例如`eno1`。
  - subnet: 网段，IP 地址段，例如`192.168.1.0`。
  - subnet mask: 子网掩码，例如`255.255.255.0`。
  - range: 起始 IP 地址和终止 IP 地址范围，例如`192.168.1.100`-`192.168.1.200`。
  - routers: 网关 IP 地址，例如`192.168.1.1`。
  - dns servers: DNS 服务器地址，例如`114.114.114.114`和阿里云公共 DNS`223.5.5.5`。
  - broadcast address: 广播地址，例如`192.168.1.255`。
  - filename: iPXE 启动后加载的脚本文件地址，例如`http://192.168.1.2:8080/ipxe/boot.ipxe`。
  - next server: 上述部署的 TFTP 服务器的 IP 地址，例如`192.168.1.2`。
- HTTP
  - root path: 上述部署的 HTTP 文件服务的存储目录，控制台程序会在其 ipxe/cfg 文件夹下生成对应机器 MAC 地址的配置。
  - http ip:port: 上述部署的 HTTP 服务的 IP 地址和端口，例如`http://192.168.1.2:8080`。
- iSCSI
  - iscsi server: 上述部署的 iSCSI 服务器的 IP 地址。例如`192.168.1.2`。
  - initiator iqn: 公共的 iSCSI initiator name，例如`iqn.2022-10.org.dbc.iscsi:global.client`。
  - target prefix: 公共的 iSCSI target 名称前缀，例如`iqn.2022-10.org.dbc.iscsi`。

:::tip 注意！

1. 理论上 TFTP，HTTP，iSCSI 等服务是可以分别部署到不同的服务器上，所以 Setting 设置区分了很多服务器地址，建议使用一台服务器，并给 lvm2 使用安全的 RAID。
2. DHCP 里面的 filename 是 iPXE 启动后加载的脚本，如果已经使用自定义的脚本编译的 undionly.kpxe 和 ipxe.efi，此项可以忽略。
   :::
