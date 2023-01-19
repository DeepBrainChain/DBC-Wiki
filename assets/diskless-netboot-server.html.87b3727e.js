import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as n,a as s}from"./app.38166bb6.js";const d={},l=s(`<h1 id="\u65E0\u76D8\u7F51\u8D77\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u65E0\u76D8\u7F51\u8D77\u670D\u52A1\u5668" aria-hidden="true">#</a> \u65E0\u76D8\u7F51\u8D77\u670D\u52A1\u5668</h1><p>DBC-CloudCyberCafe \u9879\u76EE\u4F7F\u7528 iPXE \u5F15\u5BFC\u542F\u52A8\uFF0C\u4F7F\u7528 iSCSI \u505A\u65E0\u76D8\u670D\u52A1\uFF0C\u4F7F\u7528 lvm2 \u505A\u5B58\u50A8\u7BA1\u7406\uFF0C\u4F7F\u7528 thrift \u505AAPI\u63A5\u53E3\uFF0C\u4F7F\u7528 plotly \u63D0\u4F9B\u63A7\u5236\u53F0\u754C\u9762\uFF0C\u5171\u540C\u7EC4\u5408\u4E3A\u5BA2\u6237\u63D0\u4F9B\u65E0\u76D8\u542F\u52A8\u670D\u52A1\uFF0C\u56E0\u6B64\u90E8\u7F72\u65E0\u76D8\u7F51\u8D77\u670D\u52A1\u5668\u4E5F\u5C31\u662F\u5206\u522B\u90E8\u7F72\u8FD9\u4E9B\u6A21\u5757\u3002\u670D\u52A1\u5668\u7CFB\u7EDF\u4F7F\u7528 ubuntu 20.04\u3002</p><h2 id="ipxe" tabindex="-1"><a class="header-anchor" href="#ipxe" aria-hidden="true">#</a> iPXE</h2><p>PXE\u662F Intel \u63D0\u51FA\u7684\uFF0C\u7528\u4EE5\u7F51\u5361\u542F\u52A8\u3002\u901A\u8FC7DHCP\u83B7\u53D6IP\u4EE5\u53CATFTP\u83B7\u53D6\u542F\u52A8\u6587\u4EF6\u3002iPXE \u662F PXE \u7684\u589E\u5F3A\u6269\u5C55\u7248\uFF0C\u652F\u6301HTTP\u7B49\u591A\u79CD\u83B7\u53D6\u624B\u6BB5\uFF0C\u56E0\u6B64\u9700\u8981\u90E8\u7F72 DHCP\uFF0CTFTP\u548CHTTP\u670D\u52A1\u3002</p><h3 id="dhcp" tabindex="-1"><a class="header-anchor" href="#dhcp" aria-hidden="true">#</a> DHCP</h3><p>\u52A8\u6001\u4E3B\u673A\u914D\u7F6E\u534F\u8BAE DHCP\uFF08Dynamic Host Configuration Protocol\uFF09 \u662F RFC 1541\uFF08\u5DF2\u88AB RFC 2131 \u53D6\u4EE3\uFF09\u5B9A\u4E49\u7684\u6807\u51C6\u534F\u8BAE\uFF0C\u8BE5\u534F\u8BAE\u5141\u8BB8\u670D\u52A1\u5668\u5411\u5BA2\u6237\u7AEF\u52A8\u6001\u5206\u914D IP \u5730\u5740\u548C\u914D\u7F6E\u4FE1\u606F\u3002 \u800C\u4E14PXE\u670D\u52A1\u9700\u8981\u4F7F\u7528DHCP\u534F\u8BAE\u7684bootfile\u5B57\u6BB5\u544A\u8BC9\u673A\u5668PXE\u7684\u542F\u52A8\u6587\u4EF6\u3002\u5982\u679C\u7F51\u5427\u7B49\u573A\u6240\u5DF2\u7ECF\u5B58\u5728 DHCP \u670D\u52A1(\u8DEF\u7531\u5668\u63D0\u4F9B\u7684DHCP\u5730\u5740\u5206\u914D)\uFF0C\u63A8\u8350\u4F7F\u7528 dnsmasq \u505A DHCP \u4EE3\u7406\uFF0C\u5982\u679C\u6CA1\u6709 DHCP \u670D\u52A1\uFF0C\u63A8\u8350\u76F4\u63A5\u4F7F\u7528 isc-dhcp-server \u914D\u7F6E\u81EA\u5DF1\u7684\u5B50\u7F51\u3002DBC-CloudCyberCafe \u9879\u76EE\u9ED8\u8BA4\u4F7F\u7528 dnsmasq \u670D\u52A1\uFF0C\u56E0\u4E3A\u5F88\u591A\u5BA2\u6237\u73AF\u5883\u5DF2\u7ECF\u5B58\u5728\u8DEF\u7531\u5668\uFF0C\u53EA\u9700\u8981 dnsmasq \u505A DHCP \u534F\u8BAE\u4EE3\u7406\u63D0\u4F9B bootfile \u7B49\u5B57\u6BB5\uFF0C\u6B64\u65F6\u53EA\u9700\u5B89\u88C5 dnsmasq \u5E76\u80FD\u6210\u529F\u542F\u52A8 dnsmasq.service \u5373\u53EF\uFF0C\u5177\u4F53\u7684\u914D\u7F6E\u5C06\u4E8E\u9879\u76EE\u7684\u63A7\u5236\u53F0\u81EA\u52A8\u751F\u6210\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5B89\u88C5 dnsmasq
sudo apt install dnsmasq
# \u67E5\u770B dnsmasq \u670D\u52A1\u8FD0\u884C\u60C5\u51B5
systemctl status dnsmasq.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\uFF01</p><p>ubuntu \u7CFB\u7EDF\u9ED8\u8BA4\u7684systemd-resolved\u4F1A\u76D1\u542C53\u7AEF\u53E3\u505ADNS\u89E3\u6790\uFF0C\u542F\u52A8dnsmasq.service\u670D\u52A1\u53EF\u80FD\u4F1A\u5931\u8D25\uFF0C\u89E3\u51B3\u529E\u6CD5\u6709\u5F88\u591A\uFF0C\u8FD9\u91CC\u63D0\u4F9B\u4E00\u79CD\u53C2\u8003\uFF1A\u4F7F\u7528\u547D\u4EE4 systemd-resolve --interface=eno1 --set-dns=223.5.5.5 \u624B\u52A8\u4E3A\u7F51\u5361eno1\u8BBE\u7F6Edns\u5730\u5740\u4E3A223.5.5.5\uFF0C\u7136\u540E\u91CD\u542F systemd-resolved.service \u670D\u52A1\uFF0C\u6B64\u65F6\u518D\u53BB\u542F\u52A8dnsmasq.service\u670D\u52A1\u5C31\u80FD\u6210\u529F\u4E86\u3002</p></div><p>\u53E6\u5916\uFF0C\u82E5\u9700\u8981\u5B89\u88C5 isc-dhcp-server \u53EF\u53C2\u8003\u4E0B\u9762\u7684\u6B65\u9AA4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5B89\u88C5 isc-dhcp-server
sudo apt install isc-dhcp-server
# \u67E5\u770B isc-dhcp-server \u670D\u52A1\u8FD0\u884C\u60C5\u51B5
systemctl status isc-dhcp-server.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\uFF01</p><p>\u4F7F\u7528 isc-dhcp-server \u670D\u52A1\u9700\u8981\u5728 /etc/default/isc-dhcp-server \u6587\u4EF6\u4E2D\u8BBE\u7F6E\u5177\u4F53\u7684\u7F51\u5361\uFF0C\u6307\u5B9A\u4E3A\u54EA\u4E2A\u7F51\u5361\u542F\u7528 DHCP \u670D\u52A1\u3002</p></div><h3 id="tftp" tabindex="-1"><a class="header-anchor" href="#tftp" aria-hidden="true">#</a> TFTP</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5B89\u88C5 TFTP \u670D\u52A1
sudo apt install tftpd-hpa
# \u67E5\u770B tftpd-hpa \u670D\u52A1\u8FD0\u884C\u60C5\u51B5
systemctl status tftpd-hpa.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tftpd-hpa \u9ED8\u8BA4\u4F7F\u7528 /srv/tftp \u6587\u4EF6\u5939\u4F5C\u4E3A\u5B58\u50A8\u76EE\u5F55\uFF0C\u9700\u8981\u5728\u6B64\u76EE\u5F55\u4E2D\u653E\u5165 undionly.kpxe \u548C ipxe.efi\uFF0C\u8FD9\u4E24\u4E2A\u6587\u4EF6\u53EF\u4EE5\u4F7F\u7528ipxe\u5B98\u7F51\u63D0\u4F9B\u7684\u6587\u4EF6\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528\u81EA\u5B9A\u4E49\u811A\u672C\u81EA\u884C\u7F16\u8BD1\u6587\u4EF6\uFF0C\u540E\u9762\u5C06\u4ECB\u7ECD\u5982\u4F55\u7F16\u8BD1 iPXE\u3002</p><p>iPXE \u5B98\u7F51\u63D0\u4F9B\u7684\u542F\u52A8\u6587\u4EF6\u4E0B\u8F7D\u5730\u5740\u5982\u4E0B\uFF1A</p><ul><li>undionly.kpxe: https://boot.ipxe.org/undionly.kpxe</li><li>ipxe.efi: https://boot.ipxe.org/ipxe.efi</li></ul><h3 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h3><p>iPXE \u53EF\u4EE5\u4F7F\u7528\u66F4\u52A0\u7A33\u5B9A\u53EF\u9760\u7684 HTTP \u534F\u8BAE\u4E0B\u8F7D\u9700\u8981\u7684\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528 apache \u6216\u8005 nginx \u642D\u5EFA HTTP \u670D\u52A1\u5668\uFF0C\u4E0B\u9762\u4EE5 nginx \u4E3A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5B89\u88C5 nginx\uFF0C\u53C2\u8003 http://nginx.org/en/linux_packages.html#Ubuntu
sudo apt install nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 /etc/nginx/nginx.conf \u6587\u4EF6\u4E2D http \u5757\u6DFB\u52A0\u4EE5\u4E0B server \u5757\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    server {
        listen    8080;
        root      /var/www/file;
        location / {
            autoindex on;# \u663E\u793A\u76EE\u5F55
            autoindex_exact_size on;# \u663E\u793A\u6587\u4EF6\u5927\u5C0F
            autoindex_localtime on;# \u663E\u793A\u6587\u4EF6\u65F6\u95F4
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u91CD\u542Fnginx\u5C31\u80FD\u628A /var/www/file \u76EE\u5F55\u642D\u5EFA\u6210\u6587\u4EF6\u670D\u52A1\u5668\uFF0C\u4F7F\u75288080\u7AEF\u53E3\u7684url\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE\u3002</p><p>/var/www/file\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dbtu@dbtu:/var/www/file$ tree
.
\u251C\u2500\u2500 ipxe
\u2502   \u251C\u2500\u2500 boot.ipxe
\u2502   \u251C\u2500\u2500 boot.ipxe.cfg
\u2502   \u251C\u2500\u2500 cfg
\u2502   \u2502   \u251C\u2500\u2500 404.html
\u2502   \u2502   \u251C\u2500\u2500 mac-0050562ca04b.ipxe.cfg
\u2502   \u2502   \u251C\u2500\u2500 mac-40b0767ee231.ipxe.cfg
\u2502   \u2502   \u2514\u2500\u2500 mac-88aedd0508fa.ipxe.cfg
\u2502   \u2514\u2500\u2500 wimboot
\u251C\u2500\u2500 netboot
\u2502   \u251C\u2500\u2500 ldlinux.c32 -&gt; ubuntu-installer/amd64/boot-screens/ldlinux.c32
\u2502   \u251C\u2500\u2500 netboot.tar.gz
\u2502   \u251C\u2500\u2500 pxelinux.0 -&gt; ubuntu-installer/amd64/pxelinux.0
\u2502   \u251C\u2500\u2500 pxelinux.cfg -&gt; ubuntu-installer/amd64/pxelinux.cfg
\u2502   \u251C\u2500\u2500 ubuntu-installer
\u2502   \u2502   \u2514\u2500\u2500 amd64
\u2502   \u2502       \u251C\u2500\u2500 boot-screens
\u2502   \u2502       \u2502   \u251C\u2500\u2500 adtxt.cfg
\u2502   \u2502       \u2502   \u251C\u2500\u2500 exithelp.cfg
\u2502   \u2502       \u2502   \u251C\u2500\u2500 f10.txt
\u2502   \u2502       \u2502   \u251C\u2500\u2500 f1.txt
\u2502   \u2502       \u2502   \u251C\u2500\u2500 f2.txt
\u2502   \u2502       \u2502   \u251C\u2500\u2500 f3.txt
\u2502   \u2502       \u2502   \u251C\u2500\u2500 f4.txt
\u2502   \u2502       \u2502   \u251C\u2500\u2500 f5.txt
\u2502   \u2502       \u2502   \u251C\u2500\u2500 f6.txt
\u2502   \u2502       \u2502   \u251C\u2500\u2500 f7.txt
\u2502   \u2502       \u2502   \u251C\u2500\u2500 f8.txt
\u2502   \u2502       \u2502   \u251C\u2500\u2500 f9.txt
\u2502   \u2502       \u2502   \u251C\u2500\u2500 ldlinux.c32
\u2502   \u2502       \u2502   \u251C\u2500\u2500 libcom32.c32
\u2502   \u2502       \u2502   \u251C\u2500\u2500 libutil.c32
\u2502   \u2502       \u2502   \u251C\u2500\u2500 menu.cfg
\u2502   \u2502       \u2502   \u251C\u2500\u2500 prompt.cfg
\u2502   \u2502       \u2502   \u251C\u2500\u2500 rqtxt.cfg
\u2502   \u2502       \u2502   \u251C\u2500\u2500 splash.png
\u2502   \u2502       \u2502   \u251C\u2500\u2500 stdmenu.cfg
\u2502   \u2502       \u2502   \u251C\u2500\u2500 syslinux.cfg
\u2502   \u2502       \u2502   \u251C\u2500\u2500 txt.cfg
\u2502   \u2502       \u2502   \u2514\u2500\u2500 vesamenu.c32
\u2502   \u2502       \u251C\u2500\u2500 initrd.gz
\u2502   \u2502       \u251C\u2500\u2500 linux
\u2502   \u2502       \u251C\u2500\u2500 pxelinux.0
\u2502   \u2502       \u2514\u2500\u2500 pxelinux.cfg
\u2502   \u2502           \u2514\u2500\u2500 default -&gt; ../boot-screens/syslinux.cfg
\u2502   \u2514\u2500\u2500 version.info
\u251C\u2500\u2500 ubuntu
\u2502   \u2514\u2500\u2500 preseed.cfg
\u2514\u2500\u2500 winpe
    \u251C\u2500\u2500 amd64
    \u2502   \u251C\u2500\u2500 fwfiles
    \u2502   \u2502   \u251C\u2500\u2500 efisys.bin
    \u2502   \u2502   \u2514\u2500\u2500 etfsboot.com
    \u2502   \u251C\u2500\u2500 media
    \u2502   \u2502   \u251C\u2500\u2500 bg-bg
    \u2502   \u2502   \u2502   \u2514\u2500\u2500 bootmgr.efi.mui
    \u2502   \u2502   \u251C\u2500\u2500 Boot
    \u2502   \u2502   \u2502   \u251C\u2500\u2500 BCD
    \u2502   \u2502   \u2502   \u251C\u2500\u2500 bg-bg
    \u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 bootmgr.exe.mui
    \u2502   \u2502   \u2502   \u251C\u2500\u2500 bootfix.bin
    \u2502   \u2502   \u2502   \u251C\u2500\u2500 boot.sdi
    \u2502   \u2502   \u2502   \u251C\u2500\u2500 en-us
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 bootmgr.exe.mui
    \u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 memtest.exe.mui
    \u2502   \u2502   \u2502   \u251C\u2500\u2500 Fonts
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 chs_boot.ttf
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 cht_boot.ttf
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 jpn_boot.ttf
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 kor_boot.ttf
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 malgun_boot.ttf
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 malgunn_boot.ttf
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 meiryo_boot.ttf
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 meiryon_boot.ttf
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 msjh_boot.ttf
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 msjhn_boot.ttf
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 msyh_boot.ttf
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 msyhn_boot.ttf
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 segmono_boot.ttf
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 segoen_slboot.ttf
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 segoe_slboot.ttf
    \u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 wgl4_boot.ttf
    \u2502   \u2502   \u2502   \u251C\u2500\u2500 memtest.exe
    \u2502   \u2502   \u2502   \u251C\u2500\u2500 Resources
    \u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 bootres.dll
    \u2502   \u2502   \u2502   \u251C\u2500\u2500 zh-cn
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 bootmgr.exe.mui
    \u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 memtest.exe.mui
    \u2502   \u2502   \u2502   \u2514\u2500\u2500 zh-tw
    \u2502   \u2502   \u2502       \u251C\u2500\u2500 bootmgr.exe.mui
    \u2502   \u2502   \u2502       \u2514\u2500\u2500 memtest.exe.mui
    \u2502   \u2502   \u251C\u2500\u2500 bootmgr
    \u2502   \u2502   \u251C\u2500\u2500 bootmgr.efi
    \u2502   \u2502   \u251C\u2500\u2500 EFI
    \u2502   \u2502   \u2502   \u251C\u2500\u2500 Boot
    \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 bootx64.efi
    \u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 en-us
    \u2502   \u2502   \u2502   \u2502       \u2514\u2500\u2500 bootx64.efi.mui
    \u2502   \u2502   \u2502   \u2514\u2500\u2500 Microsoft
    \u2502   \u2502   \u2502       \u2514\u2500\u2500 Boot
    \u2502   \u2502   \u2502           \u251C\u2500\u2500 BCD
    \u2502   \u2502   \u2502           \u251C\u2500\u2500 en-us
    \u2502   \u2502   \u2502           \u2502   \u2514\u2500\u2500 memtest.efi.mui
    \u2502   \u2502   \u2502           \u251C\u2500\u2500 Fonts
    \u2502   \u2502   \u2502           \u2502   \u251C\u2500\u2500 chs_boot.ttf
    \u2502   \u2502   \u2502           \u2502   \u251C\u2500\u2500 cht_boot.ttf
    \u2502   \u2502   \u2502           \u2502   \u251C\u2500\u2500 jpn_boot.ttf
    \u2502   \u2502   \u2502           \u2502   \u251C\u2500\u2500 kor_boot.ttf
    \u2502   \u2502   \u2502           \u2502   \u251C\u2500\u2500 malgun_boot.ttf
    \u2502   \u2502   \u2502           \u2502   \u251C\u2500\u2500 meiryo_boot.ttf
    \u2502   \u2502   \u2502           \u2502   \u251C\u2500\u2500 msjh_boot.ttf
    \u2502   \u2502   \u2502           \u2502   \u251C\u2500\u2500 msyh_boot.ttf
    \u2502   \u2502   \u2502           \u2502   \u251C\u2500\u2500 segmono_boot.ttf
    \u2502   \u2502   \u2502           \u2502   \u251C\u2500\u2500 segoe_slboot.ttf
    \u2502   \u2502   \u2502           \u2502   \u2514\u2500\u2500 wgl4_boot.ttf
    \u2502   \u2502   \u2502           \u251C\u2500\u2500 memtest.efi
    \u2502   \u2502   \u2502           \u251C\u2500\u2500 Resources
    \u2502   \u2502   \u2502           \u2502   \u2514\u2500\u2500 bootres.dll
    \u2502   \u2502   \u2502           \u251C\u2500\u2500 zh-cn
    \u2502   \u2502   \u2502           \u2502   \u2514\u2500\u2500 memtest.efi.mui
    \u2502   \u2502   \u2502           \u2514\u2500\u2500 zh-tw
    \u2502   \u2502   \u2502               \u2514\u2500\u2500 memtest.efi.mui
    \u2502   \u2502   \u251C\u2500\u2500 en-us
    \u2502   \u2502   \u2502   \u2514\u2500\u2500 bootmgr.efi.mui
    \u2502   \u2502   \u251C\u2500\u2500 sources
    \u2502   \u2502   \u2502   \u2514\u2500\u2500 boot.wim
    \u2502   \u2514\u2500\u2500 mount
    \u251C\u2500\u2500 lightningWinPE
    \u2502   \u251C\u2500\u2500 boot
    \u2502   \u2502   \u251C\u2500\u2500 bcd
    \u2502   \u2502   \u2514\u2500\u2500 boot.sdi
    \u2502   \u251C\u2500\u2500 bootmgr
    \u2502   \u251C\u2500\u2500 bootmgr.efi
    \u2502   \u251C\u2500\u2500 efi
    \u2502   \u2502   \u251C\u2500\u2500 boot
    \u2502   \u2502   \u2502   \u2514\u2500\u2500 bootx64.efi
    \u2502   \u2502   \u2514\u2500\u2500 microsoft
    \u2502   \u2502       \u2514\u2500\u2500 boot
    \u2502   \u2502           \u2514\u2500\u2500 bcd
    \u2502   \u2514\u2500\u2500 sources
    \u2502       \u2514\u2500\u2500 BOOT.WIM
    \u251C\u2500\u2500 wepe
    \u2502   \u251C\u2500\u2500 EFI
    \u2502   \u2502   \u251C\u2500\u2500 BOOT
    \u2502   \u2502   \u2502   \u2514\u2500\u2500 bootx64.efi
    \u2502   \u2502   \u2514\u2500\u2500 MICROSOFT
    \u2502   \u2502       \u2514\u2500\u2500 BOOT
    \u2502   \u2502           \u251C\u2500\u2500 BCD
    \u2502   \u2502           \u2514\u2500\u2500 FONTS
    \u2502   \u2502               \u2514\u2500\u2500 wgl4_boot.ttf
    \u2502   \u251C\u2500\u2500 WEIPE
    \u2502   \u2514\u2500\u2500 WEPE
    \u2502       \u251C\u2500\u2500 B64
    \u2502       \u251C\u2500\u2500 FONTS
    \u2502       \u2502   \u2514\u2500\u2500 wgl4_boot.ttf
    \u2502       \u251C\u2500\u2500 MESSAGE
    \u2502       \u251C\u2500\u2500 PELOAD
    \u2502       \u251C\u2500\u2500 WEIPE
    \u2502       \u251C\u2500\u2500 WEPE64
    \u2502       \u251C\u2500\u2500 WEPE64.WIM
    \u2502       \u251C\u2500\u2500 WEPE.INI
    \u2502       \u251C\u2500\u2500 WEPE.SDI
    \u2502       \u2514\u2500\u2500 WEPE.TXT
    \u2514\u2500\u2500 WePE64_V2.2.iso
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ipxe\u6587\u4EF6\u5939\u4E0B\u5B58\u653E\u7684\u662FiPXE\u7684\u542F\u52A8\u811A\u672C\uFF0C\u5176\u4E2Dmac-000c29c63944.ipxe.cfg\u4EE5MAC\u5730\u5740\u53BB\u9664\u5192\u53F7\u5168\u5C0F\u5199\u683C\u5F0F\u547D\u540D\uFF0C\u6BCF\u4E2A\u88AB\u5F15\u5BFC\u7684\u673A\u5668\u90FD\u9700\u8981\u6709\u4E00\u4E2A\u5BF9\u5E94\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u7531\u63A7\u5236\u53F0\u7A0B\u5E8F\u81EA\u52A8\u751F\u6210\u3002</li><li>wimboot \u6587\u4EF6\u4ECE https://github.com/ipxe/wimboot/releases \u4E0B\u8F7D\u3002</li><li>winpe \u4E0B\u9762\u5B58\u653E\u5B89\u88C5Windows\u7CFB\u7EDF\u6240\u7528\u7684PE\u6587\u4EF6\uFF0C\u6682\u65F6\u4E0D\u9700\u8981\uFF0C\u5F00\u53D1\u6D4B\u8BD5\u4F7F\u7528\u3002</li><li>netboot \u662F\u7F51\u7EDC\u5B89\u88C5 ubuntu \u6240\u7528\u7684\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4ECE\u963F\u91CC\u4E91\u6216\u8005\u6E05\u534E\u6E90\u4E0B\u9762\uFF0C\u5982\u679C\u5BA2\u6237\u9700\u8981 ubuntu \u7CFB\u7EDF\u955C\u50CF\u5C31\u9700\u8981\u4E0B\u8F7D\u6B64\u6587\u4EF6\u3002</li><li>ubuntu/preseed.cfg \u662F\u7F51\u7EDC\u5B89\u88C5 ubuntu \u4F7F\u7528\u7684\u65E0\u4EBA\u503C\u5B88\u914D\u7F6E\u6587\u4EF6\u3002</li></ul><p>\u5176\u4E2D ipxe/boot.ipxe \u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!ipxe
chain --autofree boot.ipxe.cfg
chain --replace cfg/mac-\${mac:hexraw}.ipxe.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D ipxe/boot.ipxe.cfg \u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!ipxe
set iscsi-server 192.168.1.159
set base-url http://192.168.1.159:8080
set menu-timeout 5000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D iscsi-server \u7684IP\u5730\u5740\u5373\u65E0\u76D8\u7F51\u8D77\u670D\u52A1\u5668\u7684IP\u5730\u5740\uFF0Cbase-url \u5373 HTTP \u670D\u52A1\u7684 url\uFF0C\u8FD9\u4E9B\u5185\u5BB9\u8BF7\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u81EA\u884C\u8BBE\u7F6E\u3002</p><h3 id="ipxe\u7684\u6587\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#ipxe\u7684\u6587\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> iPXE\u7684\u6587\u4EF6\u914D\u7F6E</h3><p>\u7F16\u8BD1 iPXE \u7684\u8FC7\u7A0B\u53EF\u4EE5\u53C2\u8003: https://ipxe.org/download</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone https://github.com/ipxe/ipxe.git
cd ipxe/src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 ipxe/src \u6587\u4EF6\u5939\u4E2D\u521B\u5EFA script.ipxe,\u6587\u4EF6\u5185\u5BB9\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!ipxe
dhcp
chain --autofree http://192.168.1.2:8080/ipxe/boot.ipxe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u5904 192.168.1.2 \u4E3A\u65E0\u76D8\u7F51\u8D77\u670D\u52A1\u5668\u7684IP\u5730\u5740\uFF0C8080\u7AEF\u53E3\u4E3Anginx\u914D\u7F6E\u7684HTTP\u670D\u52A1\u7684\u7AEF\u53E3\uFF0C\u8BF7\u6839\u636E\u5404\u81EA\u7684\u5B9E\u9645\u914D\u7F6E\u586B\u5199\u3002</p><p>\u7136\u540E\u4F7F\u7528 script.ipxe \u7F16\u8BD1 iPXE \u542F\u52A8\u6587\u4EF6\uFF0C\u5C31\u80FD\u5728\u542F\u52A8 PXE \u5F15\u5BFC\u540E\u81EA\u52A8\u52A0\u8F7D HTTP \u670D\u52A1\u63D0\u4F9B\u7684 boot.ipxe \u914D\u7F6E\uFF0C\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u7F16\u8BD1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>make bin-x86_64-pcbios/undionly.kpxe EMBED=script.ipxe
make bin-x86_64-efi/ipxe.efi EMBED=script.ipxe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06\u7F16\u8BD1\u597D\u7684 undionly.kpxe \u548C ipxe.efi \u6587\u4EF6\u62F7\u8D1D\u5230 TFTP \u670D\u52A1\u76EE\u5F55\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo cp bin-x86_64-pcbios/undionly.kpxe /srv/tftp/
sudo cp bin-x86_64-efi/ipxe.efi /srv/tftp/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iscsi" tabindex="-1"><a class="header-anchor" href="#iscsi" aria-hidden="true">#</a> iSCSI</h2><p>iSCSI\uFF08Internet Small Computer System Interface\uFF0C\u53D1\u97F3\u4E3A/\u02C8\u0430\u026Ask\u028Czi/\uFF09\uFF0CInternet\u5C0F\u578B\u8BA1\u7B97\u673A\u7CFB\u7EDF\u63A5\u53E3\uFF0C\u53C8\u79F0\u4E3AIP-SAN\uFF0C\u662F\u4E00\u79CD\u57FA\u4E8E\u56E0\u7279\u7F51\u53CASCSI-3\u534F\u8BAE\u4E0B\u7684\u5B58\u50A8\u6280\u672F\uFF0C\u7531IETF\u63D0\u51FA\uFF0C\u5E76\u4E8E2003\u5E742\u670811\u65E5\u6210\u4E3A\u6B63\u5F0F\u7684\u6807\u51C6\u3002</p><p>iSCSI\u5229\u7528\u4E86TCP/IP\u7684port 860 \u548C 3260 \u4F5C\u4E3A\u6C9F\u901A\u7684\u6E20\u9053\u3002\u900F\u8FC7\u4E24\u90E8\u8BA1\u7B97\u673A\u4E4B\u95F4\u5229\u7528iSCSI\u7684\u534F\u8BAE\u6765\u4EA4\u6362SCSI\u547D\u4EE4\uFF0C\u8BA9\u8BA1\u7B97\u673A\u53EF\u4EE5\u900F\u8FC7\u9AD8\u901F\u7684\u5C40\u57DF\u7F51\u96C6\u7EBF\u6765\u628ASAN\u6A21\u62DF\u6210\u4E3A\u672C\u5730\u7684\u50A8\u5B58\u88C5\u7F6E\u3002</p><p>\u672C\u8D28\u4E0A\uFF0CiSCSI \u8BA9\u4E24\u4E2A\u4E3B\u673A\u901A\u8FC7 IP \u7F51\u7EDC\u76F8\u4E92\u534F\u5546\u7136\u540E\u4EA4\u6362SCSI\u547D\u4EE4\u3002\u8FD9\u6837\u4E00\u6765\uFF0CiSCSI \u5C31\u662F\u7528\u5E7F\u57DF\u7F51\u4EFF\u771F\u4E86\u4E00\u4E2A\u5E38\u7528\u7684\u9AD8\u6027\u80FD\u672C\u5730\u5B58\u50A8\u603B\u7EBF\uFF0C\u4ECE\u800C\u521B\u5EFA\u4E86\u4E00\u4E2A\u5B58\u50A8\u5C40\u57DF\u7F51\uFF08SAN\uFF09\u3002\u4E0D\u50CF\u67D0\u4E9B SAN \u534F\u8BAE\uFF0CiSCSI \u4E0D\u9700\u8981\u4E13\u7528\u7684\u7535\u7F06\uFF1B\u5B83\u53EF\u4EE5\u5728\u5DF2\u6709\u7684\u4EA4\u6362\u548C IP \u57FA\u7840\u67B6\u6784\u4E0A\u8FD0\u884C\u3002</p><p>\u5BF9\u4E8E\u914D\u6709\u652F\u6301\u7F51\u7EDC\u5F15\u5BFC\u7684\u7F51\u7EDC\u63A5\u53E3\u8BBE\u5907\uFF08\u7F51\u5361\uFF09\u7684\u8BA1\u7B97\u673A\uFF0C\u53EF\u4EE5\u53E6\u5916\u914D\u7F6E\u4E00\u53F0 DHCP \u670D\u52A1\u5668\u6765\u534F\u52A9\u201CiSCSI \u542F\u52A8\u201D\u3002 \u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u7F51\u5361\u4F1A\u5BFB\u627E\u4E00\u4E2A\u63D0\u4F9BPXE\u6216BOOTP\u5F15\u5BFC\u6620\u50CF\u7684 DHCP \u670D\u52A1\u5668\u3002\u8BE5 DHCP \u670D\u52A1\u5668\u4F1A\u6839\u636E\u542F\u52A8\u7F51\u5361\u7684MAC\u5730\u5740\u63D0\u4F9B\u5BF9\u5E94\u7684 iSCSI \u542F\u52A8\u76EE\u6807\u8BBE\u5907/\u5377\u4FE1\u606F\uFF0C\u7136\u540E\u8BA1\u7B97\u673A\u4FBF\u53EF\u4EE5\u5F00\u59CB\u4ECE iSCSI \u8FDC\u7A0B\u542F\u52A8\u7684\u8FDB\u7A0B\u4E86\u3002</p><p>iSCSI\u5206\u4E3A\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\uFF0C\u670D\u52A1\u7AEF\u9700\u8981\u5B89\u88C5scsi target\u7528\u6765\u5171\u4EAB\u5B58\u50A8\u8BBE\u5907\uFF0C\u5BA2\u6237\u7AEF\u9700\u8981\u5B89\u88C5iscsi initiator\u7528\u6765\u8FDE\u63A5target\u7AEF\uFF0C\u5C06target\u7AEF\u5171\u4EAB\u7684\u8BBE\u5907\u6302\u8F7D\u5230initiator\u672C\u5730\uFF0C\u53EF\u4EE5\u5BF9\u5176\u8FDB\u884C\u5206\u533A\uFF0C\u683C\u5F0F\u5316\u7B49\u64CD\u4F5C\u3002</p><h3 id="iscsi-\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#iscsi-\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> iSCSI \u5BA2\u6237\u7AEF</h3><p>iSCSI initiator\u662F\u53D1\u8D77I/O\u64CD\u4F5C\u7684\u542F\u52A8\u8005\uFF1B\u9700\u8981\u901A\u8FC7\u53D1\u73B0\u8FC7\u7A0B\u8BF7\u6C42\u8FDC\u7AEF\u5757\u8BBE\u5907\uFF1B\u53EF\u4EE5\u4E0Etarget\u8FDB\u884C\u6301\u4E45\u8FDE\u63A5\uFF1B\u5728Linux\u7CFB\u7EDF\u4E2D\u53EF\u4EE5\u4F7F\u7528open-iscsi\u8F6F\u4EF6\u5305\u6765\u6A21\u62DF\u5B9E\u73B0\uFF0C\u5728 Windows 10 \u53CA\u4EE5\u4E0A\u7248\u672C\u7CFB\u7EDF\u4E2D\u5185\u7F6E\u7684 iSCSI\u53D1\u8D77\u7A0B\u5E8F \u5B9E\u73B0\u3002</p><h3 id="iscsi-\u670D\u52A1\u5668\u7AEF" tabindex="-1"><a class="header-anchor" href="#iscsi-\u670D\u52A1\u5668\u7AEF" aria-hidden="true">#</a> iSCSI \u670D\u52A1\u5668\u7AEF</h3><p>iSCSI target\u662FI/O\u64CD\u4F5C\u7684\u6267\u884C\u8005\uFF1B\u9700\u8981\u5BFC\u51FA\u4E00\u4E2A\u6216\u591A\u4E2A\u5757\u8BBE\u5907\u4F9B\u542F\u52A8\u8005\uFF08initiator\uFF09\u4F7F\u7528\uFF1B\u5728Linux\u7CFB\u7EDF\u4E2D\u53EF\u4EE5\u4F7F\u7528\u4E24\u79CDtarget\u5DE5\u5177\uFF0C\u5206\u522B\u4E3Atgt\uFF0C\u548Ctargetcli\uFF0C\u8FD9\u91CC\u5148\u4ECB\u7ECDTGT\u7684\u65B9\u6CD5\uFF0CTGT\u662FFujita Tomonori\u4E8E2006\u5E74\u5E95\u5C06SCSI Target Framework (STGT/TGT) \u5F15\u5165Linux\u5185\u6838\u3002\u5B83\u5728\u5185\u6838\u4E2D\u6709\u4E00\u4E2A\u5E93\uFF0C\u53EF\u534F\u52A9\u5185\u6838\u63A7\u5236\u76EE\u6807\u9A71\u52A8\u7A0B\u5E8F\uFF0CTGT\u662F\u7528\u6237\u6001\u5B9E\u73B0\u7684iscsi target\uFF0C\u6240\u6709\u76EE\u6807\u5904\u7406\u90FD\u5728\u7528\u6237\u7A7A\u95F4\u8FDB\u884C\u3002\u57282010\u5E74\u5E95\uFF0CLIO(Linux-IO)\u9879\u76EE\u88AB\u9009\u62E9\u6765\u4EE3\u66FFTGT\u4F5C\u4E3A\u5185\u6838\u6001\u5B9E\u73B0\u7684iscsi target\u3002\u5F53\u9009\u62E9LIO\u66FF\u6362TGT\u65F6\uFF0C\u5B83\u7684\u5B9E\u73B0\u5DF2\u7ECF\u8FDB\u884C\u4E86\u8C03\u6574\uFF0C\u4EE5\u5141\u8BB8TGT\u7528\u6237\u7A7A\u6001\u6A21\u5757\u7EE7\u7EED\u8FD0\u884C\uFF0C\u56E0\u6B64TGT\u793E\u533A\u652F\u6301\u5728\u5185\u6838\u4E2D\u5305\u542BLIO\u3002\u5728Linux\u5185\u6838 2.6.38 \u4E4B\u524D\u90FD\u662FTGT\u3002</p><h3 id="linux-io" tabindex="-1"><a class="header-anchor" href="#linux-io" aria-hidden="true">#</a> Linux-IO</h3><p>Linux-IO Target\u5728Linux\u5185\u6838\u4E2D\uFF08linux 2.6.38\u540E\uFF09\uFF0C\u7528\u8F6F\u4EF6\u5B9E\u73B0\u5404\u79CDSCSI Target\uFF0C\u5176\u652F\u6301\u7684SAN\u6280\u672F\u4E2D\u6240\u6709\u6D41\u884C\u7684\u5B58\u50A8\u534F\u8BAE\u5305\u62ECFibre Channel\uFF08Qlogic\uFF0Clinux3.5\uFF09\u3001FCoE\uFF08linux3.0\uFF09\u3001iSCSI\uFF08linux 3.1\uFF09\u3001iSER (Mellanox InfiniBand\uFF0Clinux3.10), SRP (Mellanox InfiniBand\uFF0Clinux3.3), USB\u7B49\uFF0C\u540C\u65F6\u8FD8\u80FD\u4E3A\u672C\u673A\u751F\u6210\u6A21\u62DF\u7684SCSI\u8BBE\u5907\uFF0C\u4EE5\u53CA\u4E3A\u865A\u62DF\u673A\u63D0\u4F9B\u57FA\u4E8Evirtio\u7684SCSI\u8BBE\u5907\u3002Linux-IO Target\u4F7F\u7528\u6237\u80FD\u591F\u4F7F\u7528\u76F8\u5BF9\u5EC9\u4EF7\u7684Linux\u7CFB\u7EDF\u5B9E\u73B0SCSI\u3001SAN\u7684\u5404\u79CD\u529F\u80FD\uFF0C\u800C\u4E0D\u7528\u8D2D\u4E70\u6602\u8D35\u7684\u4E13\u4E1A\u8BBE\u5907\u3002</p><p>Linux-IO Target\u5219\u5728\u5185\u6838\u6001\u5B9E\u73B0\u4E86\u5BF9Target\u7684\u6A21\u62DF\uFF0C\u914D\u7F6E\u7BA1\u7406\u5219\u91C7\u7528\u4E86\u66F4\u4E3A\u201C\u73B0\u4EE3\u5316\u201D\u7684\u57FA\u4E8Esysfs\u7684\u65B9\u5F0F\uFF0C\u63D0\u4F9B\u4E86\u53CB\u597D\u7684\u7528\u6237\u6001\u7BA1\u7406\u5DE5\u5177\u3002\u4ECE\u5185\u6838\u76842.6.38\u7248\u8D77\uFF0CLinux\u5185\u6838\u90FD\u5305\u542BLinux-IO Target\u7684\u76F8\u5173\u6A21\u5757\u3002\u5728\u7528\u6237\u6001\uFF0C\u5404\u5927\u53D1\u884C\u7248\u90FD\u6253\u5305\u4E86targetcli\u548Crtslib\uFF0C\u5176\u4E2Dtargetcli\u7A0B\u5E8F\u7528\u4E8E\u914D\u7F6E\u3001\u7BA1\u7406\uFF0Crtslib\u5219\u63D0\u4F9BPython\u7F16\u7A0B\u63A5\u53E3\u3002</p><p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5 iSCSI \u670D\u52A1\u5668\u7AEF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt install targetcli-fb open-iscsi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="lvm2" tabindex="-1"><a class="header-anchor" href="#lvm2" aria-hidden="true">#</a> lvm2</h2><p>LVM(Logical Volume Manager)\u662F\u903B\u8F91\u5377\u7BA1\u7406\u7684\u610F\u601D\uFF0C\u662Flinux\u73AF\u5883\u4E0B\u5BF9\u78C1\u76D8\u5206\u533A\u8FDB\u884C\u7BA1\u7406\u7684\u4E00\u79CD\u673A\u5236\uFF0Clvm\u662F\u5EFA\u7ACB\u5728\u786C\u76D8\u548C\u5206\u533A\u4E4B\u4E0A\u7684\u4E00\u4E2A\u903B\u8F91\u5C42\uFF0C\u6765\u63D0\u9AD8\u78C1\u76D8\u5206\u533A\u7BA1\u7406\u7684\u7075\u6D3B\u6027\u3002</p><ul><li>PV(physical volume)- \u7269\u7406\u5377: \u901A\u5E38\u662F\u4E00\u4E2A\u5206\u533A\uFF0C\u4E5F\u53EF\u4EE5\u662F\u6574\u4E2A\u7269\u7406\u786C\u76D8\uFF0C\u4E5F\u53EF\u4EE5\u662Fraid\u8BBE\u5907\u3002</li><li>VG(volume group)- \u5377\u7EC4: \u591A\u4E2A\u7269\u7406\u5377\u7684\u96C6\u5408\uFF0C\u521B\u5EFA\u5728\u7269\u7406\u5377\u4E4B\u4E0A\uFF0C\u5728\u5377\u7EC4\u521B\u5EFA\u65F6\u5019\uFF0C\u53EF\u4EE5\u52A8\u6001\u6DFB\u52A0\u7269\u7406\u5377\u5230\u5377\u7EC4\u4E2D\u3002\u4E00\u4E2A\u903B\u8F91\u5377\u7CFB\u7EDF\u5DE5\u7A0B\u4E2D\u53EF\u4EE5\u53EA\u6709\u4E00\u4E2A\u5377\u7EC4\uFF0C\u4E5F\u53EF\u4EE5\u6709\u591A\u4E2A\u5377\u7EC4\u3002</li><li>LV(logical volume)- \u903B\u8F91\u5377: \u521B\u5EFA\u5728\u5377\u7EC4\u4E4B\u4E0A\uFF0C\u903B\u8F91\u5377\u4E5F\u53EF\u4EE5\u52A8\u6001\u7684\u6269\u5C55\u6216\u7F29\u5C0F\u7A7A\u95F4\u3002\u5377\u7EC4\u4E2D\u672A\u88AB\u5206\u914D\u7684\u5377\u7EC4\u7A7A\u95F4\u53EF\u4EE5\u7528\u4E8E\u521B\u5EFA\u65B0\u7684\u903B\u8F91\u5377\u3002\u591A\u4E2A\u903B\u8F91\u5377\u53EF\u4EE5\u5C5E\u4E8E\u540C\u4E00\u4E2A\u5377\u7EC4\uFF0C\u4E5F\u53EF\u4EE5\u5C5E\u4E8E\u4E0D\u540C\u7684\u5377\u7EC4\u3002</li></ul><p>\u5B89\u88C5 lvm2 \u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt install lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B64\u5904\u63A8\u8350\u4F7F\u7528<code>pvcreate</code>\u547D\u4EE4\u5C06\u5B89\u5168\u5FEB\u901F\u7684RAID\u8BBE\u5907\u521D\u59CB\u5316\u4E3A\u7269\u7406\u5377\uFF0C\u4F7F\u7528<code>vgcreate</code>\u547D\u4EE4\u5728\u7269\u7406\u5377\u4E0A\u521B\u5EFA\u5377\u7EC4\uFF0C\u7136\u540E\u628A\u5377\u7EC4\u540D\u79F0\u586B\u5199\u5230\u65E0\u76D8\u63A7\u5236\u53F0\u7684\u8BBE\u7F6E\u4E2D\uFF0C\u65E0\u76D8\u63A7\u5236\u53F0\u7A0B\u5E8F\u4F1A\u81EA\u52A8\u5728\u5377\u7EC4\u4E4B\u4E0A\u521B\u5EFA\u903B\u8F91\u5377\uFF0C\u5728\u903B\u8F91\u5377\u4E0A\u521B\u5EFA\u65E0\u76D8\u7684\u955C\u50CF\uFF0C\u4EE5\u955C\u50CF\u6587\u4EF6\u4F5C\u4E3A iSCSI \u7684\u540E\u7AEF\u5B58\u50A8\uFF0C\u6700\u540E\u7531 iPXE \u5F15\u5BFC\u7A0B\u5E8F\u8FDE\u63A5 iSCSI \u540E\u7AEF\u9644\u52A0\u6210\u4E3A\u7F51\u7EDC\u78C1\u76D8\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u50CF\u672C\u5730\u78C1\u76D8\u4E00\u6837\u542F\u52A8\u78C1\u76D8\u4E2D\u7684\u7CFB\u7EDF\u548C\u5B58\u50A8\u6570\u636E\u3002</p><h2 id="thrift" tabindex="-1"><a class="header-anchor" href="#thrift" aria-hidden="true">#</a> thrift</h2><p>DBC-CloudCyberCafe \u9879\u76EE\u4F7F\u7528 thrift rpc \u6846\u67B6\u5BF9\u5916\u63D0\u4F9B API \u63A5\u53E3\uFF0C\u4EE5\u65B9\u4FBF\u7B2C\u4E09\u65B9\u7A0B\u5E8F(\u4E3B\u8981\u662F\u6307dbc\u7A0B\u5E8F)\u8BBE\u7F6E\u673A\u5668\u8FDB\u5165Windows\u8FD8\u662FUbuntu\u7CFB\u7EDF\uFF0C\u4FEE\u6539\u7CFB\u7EDF\u7684\u767B\u5F55\u5BC6\u7801\u548C\u5173\u95ED\u65E0\u76D8\u7684\u5BA2\u6237\u673A\u7B49\u64CD\u4F5C\u3002\u56E0\u6B64\u65E0\u76D8\u7F51\u8D77\u670D\u52A1\u5668\u9700\u8981\u5B89\u88C5\u5FC5\u8981\u7684 thrift \u5DE5\u5177\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt install thrift-compiler python3-pip
sudo pip3 install thrift
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65E0\u76D8\u7F51\u8D77\u7BA1\u7406\u63A7\u5236\u53F0" tabindex="-1"><a class="header-anchor" href="#\u65E0\u76D8\u7F51\u8D77\u7BA1\u7406\u63A7\u5236\u53F0" aria-hidden="true">#</a> \u65E0\u76D8\u7F51\u8D77\u7BA1\u7406\u63A7\u5236\u53F0</h2><p>DBC-CloudCyberCafe \u9879\u76EE\u4F7F\u7528 plotly \u5B9E\u73B0\u4E86\u4E00\u4E2A\u65E0\u76D8\u7BA1\u7406\u63A7\u5236\u53F0\uFF0C\u4EE5\u65B9\u4FBF\u5BA2\u6237\u7684\u7BA1\u7406\u4EBA\u5458\u6DFB\u52A0\u673A\u5668\uFF0C\u7ED1\u5B9AMAC\u5730\u5740\u548CIP\u5730\u5740\uFF0C\u4FEE\u6539\u673A\u5668\u7684\u542F\u52A8\u9879\u7B49\u3002</p><p>\u56E0\u4E3A\u5BF9 lvm2 \u548C iSCSI \u7684\u64CD\u4F5C\u90FD\u9700\u8981\u65E0\u76D8\u7F51\u8D77\u670D\u52A1\u5668\u7684root\u7528\u6237\u6743\u9650\uFF0C\u65E0\u76D8\u63A7\u5236\u53F0\u53EF\u80FD\u4F1A\u56E0\u4E3A\u8BF7\u6C42\u8F93\u5165root\u7528\u6237\u5BC6\u7801\u800C\u4E00\u76F4\u7B49\u5F85\u5BFC\u81F4\u540E\u7EED\u5F88\u591A\u64CD\u4F5C\u5931\u8D25\uFF0C\u6240\u4EE5\u5EFA\u8BAE\u8BBE\u7F6E\u670D\u52A1\u5668\u7684\u7528\u6237\u5728\u6267\u884C sudo \u547D\u4EE4\u65F6\u65E0\u9700\u8F93\u5165\u5BC6\u7801\uFF0C\u5728 <code>/etc/sudoers</code> \u4E2D\u6DFB\u52A0\u5185\u5BB9 <code>dbc ALL=(ALL) NOPASSWD:ALL</code>\uFF0C<code>/etc/sudoers</code> \u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90E8\u7F72\u65E0\u76D8\u63A7\u5236\u53F0\u7684\u547D\u4EE4\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4E0B\u8F7D DBC-CloudCyberCafe \u9879\u76EE\u4EE3\u7801
git clone https://github.com/DeepBrainChain/DBC-CloudCyberCafe.git
cd DBC-CloudCyberCafe/preset/
thrift --gen py preset.thrift
cd ../plotly/
sudo python3 home.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EA\u8981\u5728\u9879\u76EE\u4EE3\u7801\u7684 <code>DBC-CloudCyberCafe/plotly/</code> \u76EE\u5F55\u4E0B\u6267\u884C <code>sudo python3 home.py</code> \u547D\u4EE4\uFF0C\u5C31\u80FD\u542F\u52A8\u65E0\u76D8\u670D\u52A1\u7684\u63A7\u5236\u53F0\u7A0B\u5E8F\uFF0C\u7136\u540E\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165 <code>http://localhost:8050/</code> \u5373\u53EF\u8BBF\u95EE\u63A7\u5236\u53F0\u3002\u5207\u5FCC\u4E0D\u8981\u5FD8\u4E86\u5C06 <code>localhost</code> \u6362\u6210\u65E0\u76D8\u7F51\u8D77\u670D\u52A1\u5668\u7684IP\u5730\u5740\u3002</p><p>\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u65E0\u76D8\u63A7\u5236\u53F0\u540E\uFF0C\u9700\u8981\u5728<code>Setting</code>\u9875\u9762\u586B\u5199\u4E00\u4E9B\u8BBE\u7F6E\u3002</p><ul><li>Storage <ul><li>Volume Group: \u586B\u5199\u4E0A\u8FF0 lvm2 \u6B65\u9AA4\u4E2D\u521B\u5EFA\u7684\u5377\u7EC4\u3002</li></ul></li><li>DHCP <ul><li>network name: \u7F51\u7EDC\u6216\u8005\u5B50\u7F51\u540D\u79F0\uFF0C\u9ED8\u8BA4<code>dbc</code>\u3002</li><li>interface: \u7F51\u5361\u8BBE\u5907\u540D\u79F0\uFF0C\u8FDE\u63A5\u5728\u4E00\u4E2A\u5C40\u57DF\u7F51\u4E2D\u7684\u90A3\u4E2A\u7F51\u5361\uFF0C\u4F8B\u5982<code>eno1</code>\u3002</li><li>subnet: \u7F51\u6BB5\uFF0CIP\u5730\u5740\u6BB5\uFF0C\u4F8B\u5982<code>192.168.1.0</code>\u3002</li><li>subnet mask: \u5B50\u7F51\u63A9\u7801\uFF0C\u4F8B\u5982<code>255.255.255.0</code>\u3002</li><li>range: \u8D77\u59CBIP\u5730\u5740\u548C\u7EC8\u6B62IP\u5730\u5740\u8303\u56F4\uFF0C\u4F8B\u5982<code>192.168.1.100</code>-<code>192.168.1.200</code>\u3002</li><li>routers: \u7F51\u5173IP\u5730\u5740\uFF0C\u4F8B\u5982<code>192.168.1.1</code>\u3002</li><li>dns servers: DNS\u670D\u52A1\u5668\u5730\u5740\uFF0C\u4F8B\u5982<code>114.114.114.114</code>\u548C\u963F\u91CC\u4E91\u516C\u5171DNS<code>223.5.5.5</code>\u3002</li><li>broadcast address: \u5E7F\u64AD\u5730\u5740\uFF0C\u4F8B\u5982<code>192.168.1.255</code>\u3002</li><li>filename: iPXE\u542F\u52A8\u540E\u52A0\u8F7D\u7684\u811A\u672C\u6587\u4EF6\u5730\u5740\uFF0C\u4F8B\u5982<code>http://192.168.1.2:8080/ipxe/boot.ipxe</code>\u3002</li><li>next server: \u4E0A\u8FF0\u90E8\u7F72\u7684TFTP\u670D\u52A1\u5668\u7684IP\u5730\u5740\uFF0C\u4F8B\u5982<code>192.168.1.2</code>\u3002</li></ul></li><li>HTTP <ul><li>root path: \u4E0A\u8FF0\u90E8\u7F72\u7684HTTP\u6587\u4EF6\u670D\u52A1\u7684\u5B58\u50A8\u76EE\u5F55\uFF0C\u63A7\u5236\u53F0\u7A0B\u5E8F\u4F1A\u5728\u5176 ipxe/cfg \u6587\u4EF6\u5939\u4E0B\u751F\u6210\u5BF9\u5E94\u673A\u5668MAC\u5730\u5740\u7684\u914D\u7F6E\u3002</li><li>http ip:port: \u4E0A\u8FF0\u90E8\u7F72\u7684HTTP\u670D\u52A1\u7684IP\u5730\u5740\u548C\u7AEF\u53E3\uFF0C\u4F8B\u5982<code>http://192.168.1.2:8080</code>\u3002</li></ul></li><li>iSCSI <ul><li>iscsi server: \u4E0A\u8FF0\u90E8\u7F72\u7684iSCSI\u670D\u52A1\u5668\u7684IP\u5730\u5740\u3002\u4F8B\u5982<code>192.168.1.2</code>\u3002</li><li>initiator iqn: \u516C\u5171\u7684iSCSI initiator name\uFF0C\u4F8B\u5982<code>iqn.2022-10.org.dbc.iscsi:global.client</code>\u3002</li><li>target prefix: \u516C\u5171\u7684iSCSI target \u540D\u79F0\u524D\u7F00\uFF0C\u4F8B\u5982<code>iqn.2022-10.org.dbc.iscsi</code>\u3002</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\uFF01</p><ol><li>\u7406\u8BBA\u4E0ATFTP\uFF0CHTTP\uFF0CiSCSI\u7B49\u670D\u52A1\u662F\u53EF\u4EE5\u5206\u522B\u90E8\u7F72\u5230\u4E0D\u540C\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u6240\u4EE5Setting\u8BBE\u7F6E\u533A\u5206\u4E86\u5F88\u591A\u670D\u52A1\u5668\u5730\u5740\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u5E76\u7ED9lvm2\u4F7F\u7528\u5B89\u5168\u7684RAID\u3002</li><li>DHCP\u91CC\u9762\u7684filename\u662FiPXE\u542F\u52A8\u540E\u52A0\u8F7D\u7684\u811A\u672C\uFF0C\u5982\u679C\u5DF2\u7ECF\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u811A\u672C\u7F16\u8BD1\u7684 undionly.kpxe \u548C ipxe.efi\uFF0C\u6B64\u9879\u53EF\u4EE5\u5FFD\u7565\u3002</li></ol></div>`,74),a=[l];function t(r,c){return e(),n("div",null,a)}var o=i(d,[["render",t],["__file","diskless-netboot-server.html.vue"]]);export{o as default};
