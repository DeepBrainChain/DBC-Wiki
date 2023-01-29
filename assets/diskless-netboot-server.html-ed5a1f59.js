import{_ as l,V as a,W as t,X as i,Y as e,Z as s,$ as d,F as r}from"./framework-1d64dffd.js";const c={},v=d(`<h1 id="无盘网起服务器" tabindex="-1"><a class="header-anchor" href="#无盘网起服务器" aria-hidden="true">#</a> 无盘网起服务器</h1><p>DBC-CloudCyberCafe 项目使用 iPXE 引导启动，使用 iSCSI 做无盘服务，使用 lvm2 做存储管理，使用 thrift 做API接口，使用 plotly 提供控制台界面，共同组合为客户提供无盘启动服务，因此部署无盘网起服务器也就是分别部署这些模块。服务器系统使用 ubuntu 20.04。</p><h2 id="ipxe" tabindex="-1"><a class="header-anchor" href="#ipxe" aria-hidden="true">#</a> iPXE</h2><p>PXE是 Intel 提出的，用以网卡启动。通过DHCP获取IP以及TFTP获取启动文件。iPXE 是 PXE 的增强扩展版，支持HTTP等多种获取手段，因此需要部署 DHCP，TFTP和HTTP服务。</p><h3 id="dhcp" tabindex="-1"><a class="header-anchor" href="#dhcp" aria-hidden="true">#</a> DHCP</h3><p>动态主机配置协议 DHCP（Dynamic Host Configuration Protocol） 是 RFC 1541（已被 RFC 2131 取代）定义的标准协议，该协议允许服务器向客户端动态分配 IP 地址和配置信息。 而且PXE服务需要使用DHCP协议的bootfile字段告诉机器PXE的启动文件。如果网吧等场所已经存在 DHCP 服务(路由器提供的DHCP地址分配)，推荐使用 dnsmasq 做 DHCP 代理，如果没有 DHCP 服务，推荐直接使用 isc-dhcp-server 配置自己的子网。DBC-CloudCyberCafe 项目默认使用 dnsmasq 服务，因为很多客户环境已经存在路由器，只需要 dnsmasq 做 DHCP 协议代理提供 bootfile 等字段，此时只需安装 dnsmasq 并能成功启动 dnsmasq.service 即可，具体的配置将于项目的控制台自动生成。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 安装 dnsmasq
sudo apt install dnsmasq
# 查看 dnsmasq 服务运行情况
systemctl status dnsmasq.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">注意！</p><p>ubuntu 系统默认的systemd-resolved会监听53端口做DNS解析，启动dnsmasq.service服务可能会失败，解决办法有很多，这里提供一种参考：使用命令 systemd-resolve --interface=eno1 --set-dns=223.5.5.5 手动为网卡eno1设置dns地址为223.5.5.5，然后重启 systemd-resolved.service 服务，此时再去启动dnsmasq.service服务就能成功了。</p></div><p>另外，若需要安装 isc-dhcp-server 可参考下面的步骤。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 安装 isc-dhcp-server
sudo apt install isc-dhcp-server
# 查看 isc-dhcp-server 服务运行情况
systemctl status isc-dhcp-server.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">注意！</p><p>使用 isc-dhcp-server 服务需要在 /etc/default/isc-dhcp-server 文件中设置具体的网卡，指定为哪个网卡启用 DHCP 服务。</p></div><h3 id="tftp" tabindex="-1"><a class="header-anchor" href="#tftp" aria-hidden="true">#</a> TFTP</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 安装 TFTP 服务
sudo apt install tftpd-hpa
# 查看 tftpd-hpa 服务运行情况
systemctl status tftpd-hpa.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tftpd-hpa 默认使用 /srv/tftp 文件夹作为存储目录，需要在此目录中放入 undionly.kpxe 和 ipxe.efi，这两个文件可以使用ipxe官网提供的文件，我们推荐使用自定义脚本自行编译文件，后面将介绍如何编译 iPXE。</p><p>iPXE 官网提供的启动文件下载地址如下：</p>`,15),u={href:"https://boot.ipxe.org/undionly.kpxe",target:"_blank",rel:"noopener noreferrer"},o={href:"https://boot.ipxe.org/ipxe.efi",target:"_blank",rel:"noopener noreferrer"},m=d(`<h3 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h3><p>iPXE 可以使用更加稳定可靠的 HTTP 协议下载需要的文件，可以使用 apache 或者 nginx 搭建 HTTP 服务器，下面以 nginx 为例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 安装 nginx，参考 http://nginx.org/en/linux_packages.html#Ubuntu
sudo apt install nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 /etc/nginx/nginx.conf 文件中 http 块添加以下 server 块：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    server {
        listen    8080;
        root      /var/www/file;
        location / {
            autoindex on;# 显示目录
            autoindex_exact_size on;# 显示文件大小
            autoindex_localtime on;# 显示文件时间
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后重启nginx就能把 /var/www/file 目录搭建成文件服务器，使用8080端口的url在浏览器中访问。</p><p>/var/www/file目录结构如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dbtu@dbtu:/var/www/file$ tree
.
├── ipxe
│   ├── boot.ipxe
│   ├── boot.ipxe.cfg
│   ├── cfg
│   │   ├── 404.html
│   │   ├── mac-0050562ca04b.ipxe.cfg
│   │   ├── mac-40b0767ee231.ipxe.cfg
│   │   └── mac-88aedd0508fa.ipxe.cfg
│   └── wimboot
├── netboot
│   ├── ldlinux.c32 -&gt; ubuntu-installer/amd64/boot-screens/ldlinux.c32
│   ├── netboot.tar.gz
│   ├── pxelinux.0 -&gt; ubuntu-installer/amd64/pxelinux.0
│   ├── pxelinux.cfg -&gt; ubuntu-installer/amd64/pxelinux.cfg
│   ├── ubuntu-installer
│   │   └── amd64
│   │       ├── boot-screens
│   │       │   ├── adtxt.cfg
│   │       │   ├── exithelp.cfg
│   │       │   ├── f10.txt
│   │       │   ├── f1.txt
│   │       │   ├── f2.txt
│   │       │   ├── f3.txt
│   │       │   ├── f4.txt
│   │       │   ├── f5.txt
│   │       │   ├── f6.txt
│   │       │   ├── f7.txt
│   │       │   ├── f8.txt
│   │       │   ├── f9.txt
│   │       │   ├── ldlinux.c32
│   │       │   ├── libcom32.c32
│   │       │   ├── libutil.c32
│   │       │   ├── menu.cfg
│   │       │   ├── prompt.cfg
│   │       │   ├── rqtxt.cfg
│   │       │   ├── splash.png
│   │       │   ├── stdmenu.cfg
│   │       │   ├── syslinux.cfg
│   │       │   ├── txt.cfg
│   │       │   └── vesamenu.c32
│   │       ├── initrd.gz
│   │       ├── linux
│   │       ├── pxelinux.0
│   │       └── pxelinux.cfg
│   │           └── default -&gt; ../boot-screens/syslinux.cfg
│   └── version.info
├── ubuntu
│   └── preseed.cfg
└── winpe
    ├── amd64
    │   ├── fwfiles
    │   │   ├── efisys.bin
    │   │   └── etfsboot.com
    │   ├── media
    │   │   ├── bg-bg
    │   │   │   └── bootmgr.efi.mui
    │   │   ├── Boot
    │   │   │   ├── BCD
    │   │   │   ├── bg-bg
    │   │   │   │   └── bootmgr.exe.mui
    │   │   │   ├── bootfix.bin
    │   │   │   ├── boot.sdi
    │   │   │   ├── en-us
    │   │   │   │   ├── bootmgr.exe.mui
    │   │   │   │   └── memtest.exe.mui
    │   │   │   ├── Fonts
    │   │   │   │   ├── chs_boot.ttf
    │   │   │   │   ├── cht_boot.ttf
    │   │   │   │   ├── jpn_boot.ttf
    │   │   │   │   ├── kor_boot.ttf
    │   │   │   │   ├── malgun_boot.ttf
    │   │   │   │   ├── malgunn_boot.ttf
    │   │   │   │   ├── meiryo_boot.ttf
    │   │   │   │   ├── meiryon_boot.ttf
    │   │   │   │   ├── msjh_boot.ttf
    │   │   │   │   ├── msjhn_boot.ttf
    │   │   │   │   ├── msyh_boot.ttf
    │   │   │   │   ├── msyhn_boot.ttf
    │   │   │   │   ├── segmono_boot.ttf
    │   │   │   │   ├── segoen_slboot.ttf
    │   │   │   │   ├── segoe_slboot.ttf
    │   │   │   │   └── wgl4_boot.ttf
    │   │   │   ├── memtest.exe
    │   │   │   ├── Resources
    │   │   │   │   └── bootres.dll
    │   │   │   ├── zh-cn
    │   │   │   │   ├── bootmgr.exe.mui
    │   │   │   │   └── memtest.exe.mui
    │   │   │   └── zh-tw
    │   │   │       ├── bootmgr.exe.mui
    │   │   │       └── memtest.exe.mui
    │   │   ├── bootmgr
    │   │   ├── bootmgr.efi
    │   │   ├── EFI
    │   │   │   ├── Boot
    │   │   │   │   ├── bootx64.efi
    │   │   │   │   └── en-us
    │   │   │   │       └── bootx64.efi.mui
    │   │   │   └── Microsoft
    │   │   │       └── Boot
    │   │   │           ├── BCD
    │   │   │           ├── en-us
    │   │   │           │   └── memtest.efi.mui
    │   │   │           ├── Fonts
    │   │   │           │   ├── chs_boot.ttf
    │   │   │           │   ├── cht_boot.ttf
    │   │   │           │   ├── jpn_boot.ttf
    │   │   │           │   ├── kor_boot.ttf
    │   │   │           │   ├── malgun_boot.ttf
    │   │   │           │   ├── meiryo_boot.ttf
    │   │   │           │   ├── msjh_boot.ttf
    │   │   │           │   ├── msyh_boot.ttf
    │   │   │           │   ├── segmono_boot.ttf
    │   │   │           │   ├── segoe_slboot.ttf
    │   │   │           │   └── wgl4_boot.ttf
    │   │   │           ├── memtest.efi
    │   │   │           ├── Resources
    │   │   │           │   └── bootres.dll
    │   │   │           ├── zh-cn
    │   │   │           │   └── memtest.efi.mui
    │   │   │           └── zh-tw
    │   │   │               └── memtest.efi.mui
    │   │   ├── en-us
    │   │   │   └── bootmgr.efi.mui
    │   │   ├── sources
    │   │   │   └── boot.wim
    │   └── mount
    ├── lightningWinPE
    │   ├── boot
    │   │   ├── bcd
    │   │   └── boot.sdi
    │   ├── bootmgr
    │   ├── bootmgr.efi
    │   ├── efi
    │   │   ├── boot
    │   │   │   └── bootx64.efi
    │   │   └── microsoft
    │   │       └── boot
    │   │           └── bcd
    │   └── sources
    │       └── BOOT.WIM
    ├── wepe
    │   ├── EFI
    │   │   ├── BOOT
    │   │   │   └── bootx64.efi
    │   │   └── MICROSOFT
    │   │       └── BOOT
    │   │           ├── BCD
    │   │           └── FONTS
    │   │               └── wgl4_boot.ttf
    │   ├── WEIPE
    │   └── WEPE
    │       ├── B64
    │       ├── FONTS
    │       │   └── wgl4_boot.ttf
    │       ├── MESSAGE
    │       ├── PELOAD
    │       ├── WEIPE
    │       ├── WEPE64
    │       ├── WEPE64.WIM
    │       ├── WEPE.INI
    │       ├── WEPE.SDI
    │       └── WEPE.TXT
    └── WePE64_V2.2.iso
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),b=i("li",null,"ipxe文件夹下存放的是iPXE的启动脚本，其中mac-000c29c63944.ipxe.cfg以MAC地址去除冒号全小写格式命名，每个被引导的机器都需要有一个对应的配置文件，由控制台程序自动生成。",-1),p={href:"https://github.com/ipxe/wimboot/releases",target:"_blank",rel:"noopener noreferrer"},x=i("li",null,"winpe 下面存放安装Windows系统所用的PE文件，暂时不需要，开发测试使用。",-1),h=i("li",null,"netboot 是网络安装 ubuntu 所用的文件，可以从阿里云或者清华源下面，如果客户需要 ubuntu 系统镜像就需要下载此文件。",-1),g=i("li",null,"ubuntu/preseed.cfg 是网络安装 ubuntu 使用的无人值守配置文件。",-1),f=d(`<p>其中 ipxe/boot.ipxe 文件内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!ipxe
chain --autofree boot.ipxe.cfg
chain --replace cfg/mac-\${mac:hexraw}.ipxe.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 ipxe/boot.ipxe.cfg 文件内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!ipxe
set iscsi-server 192.168.1.159
set base-url http://192.168.1.159:8080
set menu-timeout 5000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 iscsi-server 的IP地址即无盘网起服务器的IP地址，base-url 即 HTTP 服务的 url，这些内容请根据实际情况自行设置。</p><h3 id="ipxe的文件配置" tabindex="-1"><a class="header-anchor" href="#ipxe的文件配置" aria-hidden="true">#</a> iPXE的文件配置</h3>`,6),S={href:"https://ipxe.org/download",target:"_blank",rel:"noopener noreferrer"},C=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://github.com/ipxe/ipxe.git
cd ipxe/src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 ipxe/src 文件夹中创建 script.ipxe,文件内容为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!ipxe
dhcp
chain --autofree http://192.168.1.2:8080/ipxe/boot.ipxe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此处 192.168.1.2 为无盘网起服务器的IP地址，8080端口为nginx配置的HTTP服务的端口，请根据各自的实际配置填写。</p><p>然后使用 script.ipxe 编译 iPXE 启动文件，就能在启动 PXE 引导后自动加载 HTTP 服务提供的 boot.ipxe 配置，使用以下命令编译：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make bin-x86_64-pcbios/undionly.kpxe EMBED=script.ipxe
make bin-x86_64-efi/ipxe.efi EMBED=script.ipxe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将编译好的 undionly.kpxe 和 ipxe.efi 文件拷贝到 TFTP 服务目录。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo cp bin-x86_64-pcbios/undionly.kpxe /srv/tftp/
sudo cp bin-x86_64-efi/ipxe.efi /srv/tftp/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iscsi" tabindex="-1"><a class="header-anchor" href="#iscsi" aria-hidden="true">#</a> iSCSI</h2><p>iSCSI（Internet Small Computer System Interface，发音为/ˈаɪskʌzi/），Internet小型计算机系统接口，又称为IP-SAN，是一种基于因特网及SCSI-3协议下的存储技术，由IETF提出，并于2003年2月11日成为正式的标准。</p><p>iSCSI利用了TCP/IP的port 860 和 3260 作为沟通的渠道。透过两部计算机之间利用iSCSI的协议来交换SCSI命令，让计算机可以透过高速的局域网集线来把SAN模拟成为本地的储存装置。</p><p>本质上，iSCSI 让两个主机通过 IP 网络相互协商然后交换SCSI命令。这样一来，iSCSI 就是用广域网仿真了一个常用的高性能本地存储总线，从而创建了一个存储局域网（SAN）。不像某些 SAN 协议，iSCSI 不需要专用的电缆；它可以在已有的交换和 IP 基础架构上运行。</p><p>对于配有支持网络引导的网络接口设备（网卡）的计算机，可以另外配置一台 DHCP 服务器来协助“iSCSI 启动”。 这种情况下，网卡会寻找一个提供PXE或BOOTP引导映像的 DHCP 服务器。该 DHCP 服务器会根据启动网卡的MAC地址提供对应的 iSCSI 启动目标设备/卷信息，然后计算机便可以开始从 iSCSI 远程启动的进程了。</p><p>iSCSI分为服务端和客户端，服务端需要安装scsi target用来共享存储设备，客户端需要安装iscsi initiator用来连接target端，将target端共享的设备挂载到initiator本地，可以对其进行分区，格式化等操作。</p><h3 id="iscsi-客户端" tabindex="-1"><a class="header-anchor" href="#iscsi-客户端" aria-hidden="true">#</a> iSCSI 客户端</h3><p>iSCSI initiator是发起I/O操作的启动者；需要通过发现过程请求远端块设备；可以与target进行持久连接；在Linux系统中可以使用open-iscsi软件包来模拟实现，在 Windows 10 及以上版本系统中内置的 iSCSI发起程序 实现。</p><h3 id="iscsi-服务器端" tabindex="-1"><a class="header-anchor" href="#iscsi-服务器端" aria-hidden="true">#</a> iSCSI 服务器端</h3><p>iSCSI target是I/O操作的执行者；需要导出一个或多个块设备供启动者（initiator）使用；在Linux系统中可以使用两种target工具，分别为tgt，和targetcli，这里先介绍TGT的方法，TGT是Fujita Tomonori于2006年底将SCSI Target Framework (STGT/TGT) 引入Linux内核。它在内核中有一个库，可协助内核控制目标驱动程序，TGT是用户态实现的iscsi target，所有目标处理都在用户空间进行。在2010年底，LIO(Linux-IO)项目被选择来代替TGT作为内核态实现的iscsi target。当选择LIO替换TGT时，它的实现已经进行了调整，以允许TGT用户空态模块继续运行，因此TGT社区支持在内核中包含LIO。在Linux内核 2.6.38 之前都是TGT。</p><h3 id="linux-io" tabindex="-1"><a class="header-anchor" href="#linux-io" aria-hidden="true">#</a> Linux-IO</h3><p>Linux-IO Target在Linux内核中（linux 2.6.38后），用软件实现各种SCSI Target，其支持的SAN技术中所有流行的存储协议包括Fibre Channel（Qlogic，linux3.5）、FCoE（linux3.0）、iSCSI（linux 3.1）、iSER (Mellanox InfiniBand，linux3.10), SRP (Mellanox InfiniBand，linux3.3), USB等，同时还能为本机生成模拟的SCSI设备，以及为虚拟机提供基于virtio的SCSI设备。Linux-IO Target使用户能够使用相对廉价的Linux系统实现SCSI、SAN的各种功能，而不用购买昂贵的专业设备。</p><p>Linux-IO Target则在内核态实现了对Target的模拟，配置管理则采用了更为“现代化”的基于sysfs的方式，提供了友好的用户态管理工具。从内核的2.6.38版起，Linux内核都包含Linux-IO Target的相关模块。在用户态，各大发行版都打包了targetcli和rtslib，其中targetcli程序用于配置、管理，rtslib则提供Python编程接口。</p><p>使用以下命令安装 iSCSI 服务器端：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt install targetcli-fb open-iscsi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="lvm2" tabindex="-1"><a class="header-anchor" href="#lvm2" aria-hidden="true">#</a> lvm2</h2><p>LVM(Logical Volume Manager)是逻辑卷管理的意思，是linux环境下对磁盘分区进行管理的一种机制，lvm是建立在硬盘和分区之上的一个逻辑层，来提高磁盘分区管理的灵活性。</p><ul><li>PV(physical volume)- 物理卷: 通常是一个分区，也可以是整个物理硬盘，也可以是raid设备。</li><li>VG(volume group)- 卷组: 多个物理卷的集合，创建在物理卷之上，在卷组创建时候，可以动态添加物理卷到卷组中。一个逻辑卷系统工程中可以只有一个卷组，也可以有多个卷组。</li><li>LV(logical volume)- 逻辑卷: 创建在卷组之上，逻辑卷也可以动态的扩展或缩小空间。卷组中未被分配的卷组空间可以用于创建新的逻辑卷。多个逻辑卷可以属于同一个卷组，也可以属于不同的卷组。</li></ul><p>安装 lvm2 命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt install lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此处推荐使用<code>pvcreate</code>命令将安全快速的RAID设备初始化为物理卷，使用<code>vgcreate</code>命令在物理卷上创建卷组，然后把卷组名称填写到无盘控制台的设置中，无盘控制台程序会自动在卷组之上创建逻辑卷，在逻辑卷上创建无盘的镜像，以镜像文件作为 iSCSI 的后端存储，最后由 iPXE 引导程序连接 iSCSI 后端附加成为网络磁盘，我们就可以像本地磁盘一样启动磁盘中的系统和存储数据。</p><h2 id="thrift" tabindex="-1"><a class="header-anchor" href="#thrift" aria-hidden="true">#</a> thrift</h2><p>DBC-CloudCyberCafe 项目使用 thrift rpc 框架对外提供 API 接口，以方便第三方程序(主要是指dbc程序)设置机器进入Windows还是Ubuntu系统，修改系统的登录密码和关闭无盘的客户机等操作。因此无盘网起服务器需要安装必要的 thrift 工具。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt install thrift-compiler python3-pip
sudo pip3 install thrift
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="无盘网起管理控制台" tabindex="-1"><a class="header-anchor" href="#无盘网起管理控制台" aria-hidden="true">#</a> 无盘网起管理控制台</h2><p>DBC-CloudCyberCafe 项目使用 plotly 实现了一个无盘管理控制台，以方便客户的管理人员添加机器，绑定MAC地址和IP地址，修改机器的启动项等。</p><p>因为对 lvm2 和 iSCSI 的操作都需要无盘网起服务器的root用户权限，无盘控制台可能会因为请求输入root用户密码而一直等待导致后续很多操作失败，所以建议设置服务器的用户在执行 sudo 命令时无需输入密码，在 <code>/etc/sudoers</code> 中添加内容 <code>dbc ALL=(ALL) NOPASSWD:ALL</code>，<code>/etc/sudoers</code> 文件内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#
# This file MUST be edited with the &#39;visudo&#39; command as root.
#
# Please consider adding local content in /etc/sudoers.d/ instead of
# directly modifying this file.
#
# See the man page for details on how to write a sudoers file.
#
Defaults	env_reset
Defaults	mail_badpass
Defaults	secure_path=&quot;/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin&quot;

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

# See sudoers(5) for more information on &quot;#include&quot; directives:

#includedir /etc/sudoers.d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署无盘控制台的命令如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 下载 DBC-CloudCyberCafe 项目代码
git clone https://github.com/DeepBrainChain/DBC-CloudCyberCafe.git
cd DBC-CloudCyberCafe/preset/
thrift --gen py preset.thrift
cd ../plotly/
sudo python3 home.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要在项目代码的 <code>DBC-CloudCyberCafe/plotly/</code> 目录下执行 <code>sudo python3 home.py</code> 命令，就能启动无盘服务的控制台程序，然后浏览器中输入 <code>http://localhost:8050/</code> 即可访问控制台。切忌不要忘了将 <code>localhost</code> 换成无盘网起服务器的IP地址。</p><p>在浏览器中打开无盘控制台后，需要在<code>Setting</code>页面填写一些设置。</p><ul><li>Storage <ul><li>Volume Group: 填写上述 lvm2 步骤中创建的卷组。</li></ul></li><li>DHCP <ul><li>network name: 网络或者子网名称，默认<code>dbc</code>。</li><li>interface: 网卡设备名称，连接在一个局域网中的那个网卡，例如<code>eno1</code>。</li><li>subnet: 网段，IP地址段，例如<code>192.168.1.0</code>。</li><li>subnet mask: 子网掩码，例如<code>255.255.255.0</code>。</li><li>range: 起始IP地址和终止IP地址范围，例如<code>192.168.1.100</code>-<code>192.168.1.200</code>。</li><li>routers: 网关IP地址，例如<code>192.168.1.1</code>。</li><li>dns servers: DNS服务器地址，例如<code>114.114.114.114</code>和阿里云公共DNS<code>223.5.5.5</code>。</li><li>broadcast address: 广播地址，例如<code>192.168.1.255</code>。</li><li>filename: iPXE启动后加载的脚本文件地址，例如<code>http://192.168.1.2:8080/ipxe/boot.ipxe</code>。</li><li>next server: 上述部署的TFTP服务器的IP地址，例如<code>192.168.1.2</code>。</li></ul></li><li>HTTP <ul><li>root path: 上述部署的HTTP文件服务的存储目录，控制台程序会在其 ipxe/cfg 文件夹下生成对应机器MAC地址的配置。</li><li>http ip:port: 上述部署的HTTP服务的IP地址和端口，例如<code>http://192.168.1.2:8080</code>。</li></ul></li><li>iSCSI <ul><li>iscsi server: 上述部署的iSCSI服务器的IP地址。例如<code>192.168.1.2</code>。</li><li>initiator iqn: 公共的iSCSI initiator name，例如<code>iqn.2022-10.org.dbc.iscsi:global.client</code>。</li><li>target prefix: 公共的iSCSI target 名称前缀，例如<code>iqn.2022-10.org.dbc.iscsi</code>。</li></ul></li></ul><div class="hint-container tip"><p class="hint-container-title">注意！</p><ol><li>理论上TFTP，HTTP，iSCSI等服务是可以分别部署到不同的服务器上，所以Setting设置区分了很多服务器地址，建议使用一台服务器，并给lvm2使用安全的RAID。</li><li>DHCP里面的filename是iPXE启动后加载的脚本，如果已经使用自定义的脚本编译的 undionly.kpxe 和 ipxe.efi，此项可以忽略。</li></ol></div>`,42);function P(I,_){const n=r("ExternalLinkIcon");return a(),t("div",null,[v,i("ul",null,[i("li",null,[e("undionly.kpxe: "),i("a",u,[e("https://boot.ipxe.org/undionly.kpxe"),s(n)])]),i("li",null,[e("ipxe.efi: "),i("a",o,[e("https://boot.ipxe.org/ipxe.efi"),s(n)])])]),m,i("ul",null,[b,i("li",null,[e("wimboot 文件从 "),i("a",p,[e("https://github.com/ipxe/wimboot/releases"),s(n)]),e(" 下载。")]),x,h,g]),f,i("p",null,[e("编译 iPXE 的过程可以参考: "),i("a",S,[e("https://ipxe.org/download"),s(n)])]),C])}const L=l(c,[["render",P],["__file","diskless-netboot-server.html.vue"]]);export{L as default};
