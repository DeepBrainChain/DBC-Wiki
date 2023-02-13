import{_ as d,W as l,X as c,Y as e,Z as o,$ as i,a0 as n,H as a}from"./framework-5cecf6de.js";const s={},u=n('<h1 id="无盘网起镜像" tabindex="-1"><a class="header-anchor" href="#无盘网起镜像" aria-hidden="true">#</a> 无盘网起镜像</h1><p>部署好无盘网起服务器之后，就可以制作无盘启动的镜像了。</p><h2 id="windows-镜像" tabindex="-1"><a class="header-anchor" href="#windows-镜像" aria-hidden="true">#</a> Windows 镜像</h2><ol><li>设置无盘控制台的镜像和主机列表</li></ol><ul><li><p>1.1 在浏览器中打开无盘控制台，在<code>Image</code>页面创建镜像</p><p>这个页面有三张表格。</p><ul><li>Operation System: 系统盘。name(磁盘名称)，例如<code>win10</code>; description(磁盘描述)，例如<code>windows 10 21H1</code>; capacity(磁盘容量)，例如 100G。</li><li>Data Disk: 数据盘或者游戏盘等非系统盘。name(磁盘名称)，例如<code>game</code>; description(磁盘描述)，例如<code>game disk</code>; capacity(磁盘容量)，例如 200G。</li><li>Boot Menu: 一个系统盘和多个数据盘的启动项组合。name(启动项名称)，例如<code>win10test</code>; operation system(启动项的系统盘名称); data disk(启动项的数据盘名称集合)。</li></ul><p><code>Boot Menu</code> 中的 <code>name</code> 列的集合就是 <code>Hosts</code> 页面的 <code>default menu</code>的选项集合。</p><p>请在 <code>Image</code> 页面创建一个系统盘，至少一个数据盘，至少添加一个 Boot Menu。</p></li><li><p>1.2 添加 GPU 机器，绑定机器的 IP 地址，设置启动的镜像</p><p>切换到<code>Hosts</code>页面，添加至少一条数据，例如<code>host name</code>填写<code>test1</code>,<code>ip address</code>填写<code>192.168.1.101</code>,<code>mac address</code>填写某台 GPU 机器的 MAC 地址,<code>default menu</code>选择上面创建的其中一个，<code>super tube</code>勾选。</p><p>点击<code>Add/Modify Row</code>把填写的数据添加进表格中，列表选择添加的那一行，点击<code>Reset Host iSCSI</code>重置 iSCSI 设置。</p><p>注意: 添加修改删除 <code>host name</code>, <code>ip address</code>, <code>mac address</code> 需要重启 DHCP 服务才能生效。</p></li></ul><ol start="2"><li><p>设置 GPU 机器的 BIOS</p><p>一般机器的 BIOS 设置中网络启动选项是关闭的，需要手动开启，此处以 ASUS 主板为例，开启 BIOS 中的网络启动设置，并设置 legacy 启动，不要使用 UEFI，其他型号主板请参考其供应商的产品手册。</p></li></ol><ul><li>2.1. Boot -&gt; CSM 要开启，boot from network devices 要设置成 legacy。</li><li>2.2. Advanced -&gt; Onboard devices configuration 中 Realtek LAN controller 和 Realtek LAN OPROM 要开启。</li><li>2.3. Advanced -&gt; Network Stack configuration 中 Network Stack 和 ipv4 PXE support 要开启，ipv6 开关无所谓。</li><li>2.4. Boot option priorities 设置启动项的优先级。给本地硬盘安装系统时要把本地硬盘设置成第一个，无盘镜像准备好后要设置网络启动(网卡设备)为第一个。</li></ul><ol start="3"><li><p>接下来给 GPU 机器本地磁盘安装系统</p><p>推荐使用 Windows 10 系统，且事先准备好微软官方镜像文件。</p></li></ol><ul><li>3.1. 先在本地硬盘上安装 Windows 10 系统和必要的网卡、显卡等硬件驱动。在测试的时候请不要安装多余的软件，只要能够从无盘启动，后面随时都可以继续安装其他软件。目前仅支持 MBR 分区格式，不支持 GUID 分区(对应 UEFI 启动)。</li><li>3.2. 将注册表<code>HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet001\\Control\\Session Manager\\Memory Management</code>的<code>PagingFiles</code>字段值清空。</li><li>3.3. 在 Windows 搜索框中输入<code>iSCSI 发起程序</code>，启动<code>iSCSI 发起程序</code>，首次启动时会提醒开启相应的服务，点击同意，然后在<code>iSCSI 发起程序</code>的配置页面修改<code>iSCSI 发起程序名称</code>为<code>iqn.2022-10.org.dbc.iscsi:global.client</code>。</li><li>3.4. 重启机器后将本地硬盘中的系统克隆到无盘网起服务器上。</li></ul><ol start="4"><li>将本地硬盘上安装的系统克隆到无盘网起服务器上</li></ol>',10),r=e("li",null,[o("4.1. 启动"),e("code",null,"iSCSI 发起程序"),o("，在目标页面输入 iSCSI 服务器的 IP 地址，可以看到第一步中创建的"),e("code",null,"Boot Menu"),o("，点击连接，可以看到磁盘管理器中多出了这个启动项的系统盘和数据盘。")],-1),p={href:"https://www.diskgenius.cn/",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"工具",-1),m=e("code",null,"克隆磁盘",-1),h=n('<ol start="5"><li>重启 GPU 机器从网络启动无盘系统</li></ol><ul><li>5.1. 设置 BIOS 中<code>Boot option priorities</code>的第一项为网卡，保存并重启。</li><li>5.2. 自动重启并进入 iPXE 启动界面，加载显示<code>menu iPXE boot menu build 20220717</code>菜单，自动倒计时结束后进入克隆后的无盘系统。</li></ul><p>如果一切正常，能够进入无盘系统并登录，此时使用与本地磁盘一样，还可以继续安装需要的软件和远程控制等。如果遇到蓝屏，或者中间步骤有疑问，请咨询 DBC 技术支持。</p><h2 id="ubuntu-18-04-镜像" tabindex="-1"><a class="header-anchor" href="#ubuntu-18-04-镜像" aria-hidden="true">#</a> Ubuntu 18.04 镜像</h2><p>制作 Ubuntu 18.04 系统的镜像，前两步与 Windows 系统类似，需要创建 ubuntu 的系统盘和<code>Boot Menu</code>，设置 BIOS，后面的区别在于无需在本地安装和克隆系统，因为 Ubuntu 系统支持网络直接安装到 iSCSI 磁盘中。</p><ol><li>ubuntu netboot</li></ol>',6),_={href:"http://www.archive.ubuntu.com/ubuntu/dists/bionic-updates/main/installer-amd64/current/images/netboot/netboot.tar.gz",target:"_blank",rel:"noopener noreferrer"},S={href:"https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ubuntu/dists/bionic/main/installer-amd64/current/images/netboot/netboot.tar.gz",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"Ubuntu 20.04 或者阿里云源类似。",-1),I=e("p",null,[o("下载"),e("code",null,"netboot.tar.gz"),o("到 HTTP 服务目录"),e("code",null,"/var/www/file"),o("中并解压。")],-1),w=n('<ol start="2"><li><p>修改 ubuntu 无人值守配置文件</p><p>打开 HTTP 服务目录中的<code>ubuntu/preseed.cfg</code>文件，根据实际需要修改其中的 locale, language, country, timezone, mirror, partman-iscsi 和所有 IP 地址。</p></li><li><p>从网络启动 GPU 机器后手动进入 ubuntu 的网络安装界面。</p><p>启动机器进入<code>menu iPXE boot menu build 20220717</code>菜单时，要在 5 秒钟倒计时内手动选择<code>Installing Ubuntu to iSCSI target</code>，然后按回车键进入网络安装界面。</p><p>在安装界面可能仍需手动输入一些无人值守加载失败的选项，在安装到磁盘时选择正确的 iSCSI 磁盘，一路执行即可。</p></li><li><p>安装结束重启自动进入安装好的 ubuntu 系统。</p></li></ol>',1);function f(k,C){const t=a("ExternalLinkIcon");return l(),c("div",null,[u,e("ul",null,[r,e("li",null,[o("4.2. 下载并运行"),e("a",p,[o("DiskGenius"),i(t)]),o("，在菜单栏"),b,o("打开"),m,o("，按照步骤将本地磁盘中的系统克隆到 iSCSI 映射的系统盘中。")])]),h,e("ul",null,[e("li",null,[e("p",null,[o("ubuntu 18.04 官方 netboot: "),e("a",_,[o("http://www.archive.ubuntu.com/ubuntu/dists/bionic-updates/main/installer-amd64/current/images/netboot/netboot.tar.gz"),i(t)])])]),e("li",null,[e("p",null,[o("清华源下载地址: "),e("a",S,[o("https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ubuntu/dists/bionic/main/installer-amd64/current/images/netboot/netboot.tar.gz"),i(t)])]),g,I])]),w])}const P=d(s,[["render",f],["__file","diskless-netboot-image.html.vue"]]);export{P as default};
