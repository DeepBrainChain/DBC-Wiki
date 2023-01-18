# 디스크가 없는 네트워크 부트 서버

DBC-CloudCyberCafe 프로젝트는 iPXE를 사용하여 부팅하고, 디스크 없는 서비스에 iSCSI를 사용하고, 스토리지 관리에 lvm2를 사용하고, API 인터페이스에 thrift를 사용하고, 콘솔 인터페이스를 제공하기 위해 plotly를 사용합니다. 이들은 함께 고객에게 디스크 없는 네트워크 부팅 서비스를 제공하므로 디스크 없는 네트워크 부팅 서버를 배포하는 것은 이러한 모듈을 별도로 배포하는 것입니다. 서버 시스템은 Ubuntu 20.04를 사용합니다.

## iPXE

PXE는 인텔이 네트워크 카드에서 부팅하도록 제안했습니다. DHCP를 통해 IP를 얻고 TFTP를 통해 시작 파일을 얻습니다. iPXE는 PXE의 향상된 확장 버전으로 HTTP와 같은 여러 획득 방법을 지원하므로 DHCP, TFTP 및 HTTP 서비스를 배포해야 합니다.

### DHCP

동적 호스트 구성 프로토콜 DHCP는 RFC 1541(RFC 2131로 대체됨)에서 정의한 표준 프로토콜로, 서버에서 IP 주소 및 구성 정보를 클라이언트에 동적으로 할당할 수 있습니다.
그리고 PXE 서비스는 DHCP 프로토콜의 bootfile 필드를 사용하여 시스템에 PXE 시작 파일을 알려야 합니다. PC방 등에서 이미 DHCP 서비스(라우터에서 제공하는 DHCP 주소 할당)가 있는 경우 dnsmasq를 DHCP 프록시로 사용하는 것이 좋습니다. DHCP 서비스가 없는 경우 isc-dhcp-server를 직접 사용하여 자체 서브넷을 구성하는 것이 좋습니다. DBC-CloudCyberCafe 프로젝트는 기본적으로 dnsmasq 서비스를 사용합니다. 많은 고객 환경에 이미 라우터가 있고 부트 파일과 같은 필드를 제공하기 위해 DHCP 프로토콜 에이전트 역할을 하는 데 dnsmasq만 필요하기 때문입니다. 현재 dnsmasq를 설치하고 dnsmasq.service를 성공적으로 시작하기만 하면 됩니다. 특정 구성은 DBC-CloudCyberCafe 프로젝트의 콘솔 프로그램에 의해 자동으로 생성됩니다.

```
# install dnsmasq
sudo apt install dnsmasq
# view dnsmasq service status
systemctl status dnsmasq.service
```

:::tip 注意！
우분투 시스템의 기본 systemd-resolved는 DNS 확인을 위해 포트 53을 수신합니다. dnsmasq.service 서비스 시작이 실패할 수 있습니다. 많은 솔루션이 있습니다. 참조: `systemd-resolve --interface=eno1 --set-dns=223.5.5.5` 명령을 사용하십시오. 네트워크 카드 eno1의 DNS 주소를 223.5.5.5로 수동 설정한 다음 systemd-resolved.service를 다시 시작하십시오. 서비스를 시작한 다음 dnsmasq.service 서비스를 시작하여 성공하십시오.
:::

또한 isc-dhcp-server를 설치해야 하는 경우 다음 단계를 참조하십시오.

```
# install isc-dhcp-server
sudo apt install isc-dhcp-server
# view isc-dhcp-server service status
systemctl status isc-dhcp-server.service
```

:::tip 注意！
isc-dhcp-server 서비스를 사용하려면 /etc/default/isc-dhcp-server 파일에서 특정 네트워크 카드를 설정하고 DHCP 서비스를 활성화할 네트워크 카드를 지정해야 합니다.
:::

### TFTP

```
# install TFTP
sudo apt install tftpd-hpa
# view tftpd-hpa service status
systemctl status tftpd-hpa.service
```

tftpd-hpa는 기본적으로 /srv/tftp 폴더를 스토리지 디렉토리로 사용합니다. 이 디렉토리에 undionly.kpxe 및 ipxe.efi를 넣어야 합니다. 이 두 파일은 ipxe 공식 홈페이지에서 제공하는 파일을 사용하시면 됩니다. 사용자 지정 스크립트를 사용하여 직접 파일을 컴파일하는 것이 좋으며 iPXE를 컴파일하는 방법은 나중에 소개합니다.

iPXE 공식 웹사이트에서 제공하는 시작 파일의 다운로드 주소는 다음과 같습니다:
- undionly.kpxe: https://boot.ipxe.org/undionly.kpxe
- ipxe.efi: https://boot.ipxe.org/ipxe.efi

### HTTP

iPXE는 보다 안정적이고 신뢰할 수 있는 HTTP 프로토콜을 사용하여 필요한 파일을 다운로드할 수 있습니다. apache 또는 nginx를 사용하여 HTTP 서버를 구축할 수 있습니다. 아래 예를 들어 nginx를 사용하십시오.

```
# install nginx，refer to http://nginx.org/en/linux_packages.html#Ubuntu
sudo apt install nginx
```

/etc/nginx/nginx.conf 파일의 http 블록에 다음 서버 블록을 추가합니다：

```
    server {
        listen    8080;
        root      /var/www/file;
        location / {
            autoindex on;# 디렉토리 표시
            autoindex_exact_size on;# 파일 크기 표시
            autoindex_localtime on;# 파일 시간 표시
        }
    }
```

마지막으로 nginx를 다시 시작하여 /var/www/file 디렉토리를 파일 서버로 빌드하고 8080 포트 URL을 사용하여 브라우저에서 액세스합니다.

/var/www/file 디렉토리 구조는 다음과 같습니다.

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

- iPXE 시작 스크립트는 ipxe 폴더에 저장됩니다. 여기서 mac-000c29c63944.ipxe.cfg는 콜론 없이 모두 소문자 형식의 MAC 주소 이름을 따릅니다. 부팅된 각 머신에는 콘솔 프로그램에 의해 자동으로 구성되는 해당 구성 파일이 있어야 합니다.
- wimboot 파일은 https://github.com/ipxe/wimboot/releases에서 다운로드됩니다.
- 윈도 시스템 설치에 사용되는 PE 파일은 winpe에 저장되는데 당분간은 필요하지 않으며 개발 및 테스트용으로 사용된다.
- netboot는 네트워크에 우분투를 설치하는 데 사용되는 파일입니다. Alibaba Cloud 또는 Tsinghua University에서 다운로드할 수 있습니다. 고객이 우분투 시스템 이미지가 필요한 경우 이 파일을 다운로드해야 합니다.
- ubuntu/preseed.cfg는 우분투의 네트워크 설치에서 사용하는 무인 구성 파일입니다.

ipxe/boot.ipxe 파일의 내용은 다음과 같습니다.

```
#!ipxe
chain --autofree boot.ipxe.cfg
chain --replace cfg/mac-${mac:hexraw}.ipxe.cfg
```

ipxe/boot.ipxe.cfg 파일의 내용은 다음과 같습니다.

```
#!ipxe
set iscsi-server 192.168.1.159
set base-url http://192.168.1.159:8080
set menu-timeout 5000
```

그 중 iscsi-server의 IP 주소는 디스크가 없는 netboot 서버의 IP 주소이고 base-url은 HTTP 서비스의 url입니다. 실제 상황에 따라 이러한 내용을 설정하십시오.

### iPXE file configuration

iPXE를 컴파일하는 과정은 https://ipxe.org/download를 참조할 수 있습니다.

```
git clone https://github.com/ipxe/ipxe.git
cd ipxe/src
```

ipxe/src 폴더에 script.ipxe를 생성합니다. 파일 내용은 다음과 같습니다.

```
#!ipxe
dhcp
chain --autofree http://192.168.1.2:8080/ipxe/boot.ipxe
```

여기서 192.168.1.2는 디스크 없는 netboot 서버의 IP 주소이고 포트 8080은 nginx에서 구성한 HTTP 서비스의 포트입니다. 실제 구성에 따라 입력하십시오.

그런 다음 script.ipxe를 사용하여 iPXE 부팅 파일을 컴파일하고 HTTP 서비스에서 제공하는 boot.ipxe 구성을 PXE 부팅이 시작된 후 자동으로 로드할 수 있습니다. 다음 명령을 사용하여 컴파일합니다.

```
make bin-x86_64-pcbios/undionly.kpxe EMBED=script.ipxe
make bin-x86_64-efi/ipxe.efi EMBED=script.ipxe
```

컴파일된 undionly.kpxe 및 ipxe.efi 파일을 TFTP 서비스 디렉터리에 복사합니다.

```
sudo cp bin-x86_64-pcbios/undionly.kpxe /srv/tftp/
sudo cp bin-x86_64-efi/ipxe.efi /srv/tftp/
```

## iSCSI

iSCSI (Internet Small Computer System Interface, pronounced /ˈаɪskʌzi/), IP-SAN이라고도 하는 Internet Small Computer System Interface는 IETF에서 제안하고 2003년에 발표한 SCSI-3 프로토콜과 인터넷 기반의 스토리지 기술입니다. 2010년 2월 11일에 공식 표준이 되었습니다.

iSCSI는 TCP/IP 포트 860 및 3260을 통신 채널로 사용합니다. iSCSI 프로토콜을 사용하여 두 대의 컴퓨터 간에 SCSI 명령을 교환함으로써 컴퓨터는 고속 LAN 허브를 통해 SAN을 로컬 저장 장치로 에뮬레이트할 수 있습니다.

기본적으로 iSCSI를 사용하면 두 호스트가 IP 네트워크를 통해 서로 협상한 다음 SCSI 명령을 교환할 수 있습니다. 이러한 방식으로 iSCSI는 SAN(Storage Area Network)을 생성하는 광역 네트워크로 일반적인 고성능 로컬 스토리지 버스를 에뮬레이션합니다. 일부 SAN 프로토콜과 달리 iSCSI에는 전용 케이블 연결이 필요하지 않습니다. 기존 스위칭 및 IP 인프라에서 실행할 수 있습니다.

네트워크 부팅을 지원하는 NIC(네트워크 인터페이스 장치)가 있는 컴퓨터의 경우 iSCSI 부팅을 지원하도록 추가 DHCP 서버를 구성할 수 있습니다. 이 경우 NIC는 PXE 또는 BOOTP 부팅 이미지를 제공하는 DHCP 서버를 찾습니다. DHCP 서버는 부팅 네트워크 카드의 MAC 주소에 따라 해당 iSCSI 부팅 대상 장치/볼륨 정보를 제공하고 컴퓨터는 iSCSI에서 원격 부팅 프로세스를 시작할 수 있습니다.

iSCSI는 서버와 클라이언트로 나눌 수 있습니다. 저장 장치를 공유하려면 서버에 scsi 대상을 설치해야 하며 대상에 연결하려면 클라이언트에 iscsi 초기자를 설치해야 합니다. 대상이 공유하는 디바이스는 로컬 이니시에이터에 마운트해야 하며 분할 및 포맷할 수 있습니다.

### iSCSI 클라이언트

iSCSI 초기자는 I/O 작업을 시작하는 것입니다. 탐색 프로세스를 통해 원격 블록 장치를 요청해야 합니다. 대상과 지속적인 연결을 설정할 수 있습니다. Linux 시스템에서는 open-iscsi 소프트웨어 패키지를 사용하여 구현을 시뮬레이션할 수 있으며 Windows 10 이상 시스템에서는 내장된 iSCSI 초기자를 사용하여 달성할 수 있습니다.

### iSCSI 서버측

iSCSI 대상은 I/O 작업의 실행자입니다. 이니시에이터(이니시에이터)를 위해 하나 이상의 블록 장치를 내보내야 합니다. Linux 시스템에서는 두 개의 대상 도구, 즉 tgt와 targetcli를 사용할 수 있습니다. 여기서는 먼저 TGT 방법을 소개합니다. TGT는 Fujita Tomonori가 2006년 말 Linux 커널에 SCSI 대상 프레임워크(STGT/TGT)를 도입한 것입니다. 커널이 대상 드라이버를 제어하도록 도울 수 있는 커널의 라이브러리. TGT는 사용자 모드에서 구현된 iscsi 대상이며 모든 대상 처리는 사용자 공간에서 수행됩니다. 2010년 말에 LIO(Linux-IO) 프로젝트가 선택되어 커널 상태에서 구현된 iscsi 대상으로 TGT를 대체했습니다. LIO가 TGT를 대체하도록 선택되었을 때 TGT 사용자 빈 모듈이 계속 실행될 수 있도록 구현이 조정되었으므로 TGT 커뮤니티는 커널에 LIO 포함을 지원합니다. Linux 커널 2.6.38 이전에는 TGT였습니다.

### Linux-IO

Linux 커널(linux 2.6.38 이후)에서 Linux-IO Target은 소프트웨어를 사용하여 다양한 SCSI Target을 구현합니다. Fibre Channel(Qlogic, linux3.5), FCoE(linux3.0), iSCSI(linux 3.1), iSER(Mellanox InfiniBand, linux3.10), SRP(Mellanox InfiniBand, linux3)를 포함하여 SAN 기술에서 널리 사용되는 모든 스토리지 프로토콜을 지원합니다. .3), USB 등. 동시에 이 머신에 대해 시뮬레이션된 SCSI 디바이스를 생성하고 Virtio의 SCSI 디바이스를 기반으로 가상 머신을 제공할 수도 있습니다. Linux-IO Target은 사용자가 값비싼 전문 장비를 구입하지 않고도 상대적으로 저렴한 Linux 시스템을 사용하여 SCSI 및 SAN의 다양한 기능을 구현할 수 있도록 합니다.

Linux-IO Target은 커널 상태에서 Target의 시뮬레이션을 실현하고 보다 "현대적인" sysfs 기반 구성 관리 방법을 채택하여 친숙한 사용자 모드 관리 도구를 제공합니다. 커널 버전 2.6.38부터 Linux 커널에는 Linux-IO Target의 관련 모듈이 포함됩니다. 사용자 모드에서 targetcli 및 rtslib는 모든 주요 릴리스에 패키징됩니다. targetcli 프로그램은 구성 및 관리에 사용되며 rtslib는 Python 프로그래밍 인터페이스를 제공합니다.

다음 명령을 사용하여 iSCSI 서버 측을 설치합니다.

```
sudo apt install targetcli-fb open-iscsi
```

## lvm2

LVM(Logical Volume Manager)은 논리적 볼륨 관리를 의미합니다. Linux 환경에서 디스크 파티션을 관리하기 위한 메커니즘입니다. LVM은 디스크 파티션 관리의 유연성을 향상시키기 위해 하드 디스크 및 파티션에 구축된 논리적 계층입니다.

- PV(physical volume): 일반적으로 파티션, 전체 물리적 하드 디스크 또는 RAID 장치입니다.
- VG(volume group): 물리 볼륨 위에 생성된 여러 물리 볼륨 모음입니다. 볼륨 그룹이 생성되면 물리적 볼륨을 볼륨 그룹에 동적으로 추가할 수 있습니다. 논리 볼륨 시스템 프로젝트에는 하나의 볼륨 그룹만 있거나 여러 볼륨 그룹이 있을 수 있습니다.
- LV(logical volume): 볼륨 그룹 위에 생성된 논리적 볼륨은 크기를 동적으로 확장하거나 축소할 수도 있습니다. 볼륨 그룹의 할당되지 않은 볼륨 그룹 공간을 사용하여 새 논리 볼륨을 생성할 수 있습니다. 여러 논리 볼륨은 동일한 볼륨 그룹이나 다른 볼륨 그룹에 속할 수 있습니다.

lvm2를 설치하는 명령은 다음과 같습니다.

```
sudo apt install lvm2
```

여기서는 `pvcreate` 명령을 사용하여 안전하고 빠른 RAID 장치를 물리 볼륨으로 초기화하고 `vgcreate` 명령을 사용하여 물리 볼륨에 볼륨 그룹을 생성한 다음 볼륨 그룹 이름을 입력하는 것이 좋습니다. 디스크 없는 콘솔 설정. 데스크톱 프로그램은 자동으로 볼륨 그룹에 논리 볼륨을 만들고, 논리 볼륨에 디스크 없는 미러를 만들고, 미러 파일을 iSCSI의 백엔드 스토리지로 사용하고, 마지막으로 iSCSI 백엔드를 iPXE 부팅 프로그램과 연결하여 네트워크 디스크로 연결하면 디스크에서 시스템을 시작하고 로컬 디스크처럼 디스크에 데이터를 저장할 수 있습니다.

## thrift

DBC-CloudCyberCafe 프로젝트는 thrift rpc 프레임워크를 사용하여 타사 프로그램(주로 dbc 프로그램)을 용이하게 하는 API 인터페이스를 제공하여 시스템이 Windows 또는 Ubuntu 시스템에 들어가도록 설정하고 시스템 로그인 암호를 수정하며 디스크가 없는 클라이언트를 닫습니다. 따라서 디스크가 없는 네트워크 부트 서버는 필요한 절약 도구를 설치해야 합니다.

```
sudo apt install thrift-compiler python3-pip
sudo pip3 install thrift
```

## diskless console

DBC-CloudCyberCafe 프로젝트는 고객 관리자가 머신을 추가하고, MAC 주소와 IP 주소를 바인딩하고, 머신 시작 항목을 수정할 수 있도록 디스크 없는 콘솔을 구현하기 위해 plotly를 사용합니다.

lvm2 및 iSCSI의 작업에는 디스크 없는 네트워크 부트 서버의 루트 사용자 권한이 필요하기 때문에 디스크 없는 콘솔은 루트 사용자 암호가 입력될 때까지 대기할 수 있으며 이로 인해 많은 후속 작업이 실패할 수 있습니다. 서버는 `/etc/sudoers`에 `dbc ALL=(ALL) NOPASSWD:ALL` 내용을 추가하여 sudo 명령을 실행할 때 암호를 입력할 필요가 없습니다. `/etc/sudoers` 파일의 내용은 다음과 같습니다.

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

디스크 없는 콘솔을 배포하는 명령은 다음과 같습니다.

```
# Download the DBC-CloudCyberCafe project code
git clone https://github.com/DeepBrainChain/DBC-CloudCyberCafe.git
cd DBC-CloudCyberCafe/preset/
thrift --gen py preset.thrift
cd ../plotly/
sudo python3 home.py
```

프로젝트 코드의 `DBC-CloudCyberCafe/plotly/` 디렉토리에서 `sudo python3 home.py` 명령을 실행하는 한 디스크 없는 서비스의 콘솔 프로그램을 시작한 다음 `http://localhost를 입력할 수 있습니다. :8050/` 브라우저에서 콘솔에 액세스합니다. `localhost`를 디스크가 없는 네트워크 부팅 서버의 IP 주소로 바꾸는 것을 잊지 마십시오.

브라우저에서 디스크 없는 콘솔을 연 후 `설정` 페이지에서 일부 설정을 입력해야 합니다.

- Storage
    - Volume Group: 위의 lvm2 단계에서 생성한 볼륨 그룹을 입력합니다.
- DHCP
    - network name: 네트워크 또는 서브넷 이름, 기본값 `dbc`.
    - interface: 네트워크 카드 장치 이름, `eno1`과 같이 LAN에 연결된 네트워크 카드.
    - subnet: 네트워크 세그먼트, IP 주소 세그먼트(예: `192.168.1.0`).
    - subnet mask: `255.255.255.0`과 같은 서브넷 마스크입니다.
    - range: 시작 IP 주소 및 종료 IP 주소 범위(예: `192.168.1.100`-`192.168.1.200`).
    - routers: 게이트웨이 IP 주소(예: `192.168.1.1`).
    - dns servers: `114.114.114.114` 및 Alibaba Cloud 공용 DNS `223.5.5.5`와 같은 DNS 서버 주소입니다.
    - broadcast address: 브로드캐스트 주소(예: `192.168.1.255`).
    - filename: iPXE가 시작된 후 로드된 스크립트 파일의 주소(예: `http://192.168.1.2:8080/ipxe/boot.ipxe`).
    - next server: 위에서 배포한 TFTP 서버의 IP 주소(예: `192.168.1.2`).
- HTTP
    - root path: 위에 배포된 HTTP 파일 서비스의 저장소 디렉터리인 콘솔 프로그램은 ipxe/cfg 폴더 아래에 있는 시스템의 MAC 주소에 해당하는 구성을 생성합니다.
    - http ip:port: `http://192.168.1.2:8080`과 같이 위에서 배포한 HTTP 서비스의 IP 주소 및 포트입니다.
- iSCSI
    - iscsi server: 위에 배포된 iSCSI 서버의 IP 주소입니다. 예를 들어 `192.168.1.2`.
    - initiator iqn: 공개 iSCSI 초기자 이름(예: `iqn.2022-10.org.dbc.iscsi:global.client`).
    - target prefix: 공용 iSCSI 대상 이름 접두사(예: `iqn.2022-10.org.dbc.iscsi`).

:::tip 注意！
1. 이론적으로 TFTP, HTTP 및 iSCSI와 같은 서비스는 서로 다른 서버에 배포될 수 있으므로 설정은 많은 서버 주소를 구분합니다. 하나의 서버를 사용하고 lvm2에 보안 RAID를 사용하는 것이 좋습니다.
2. DHCP의 파일 이름은 iPXE 시작 후 로드되는 스크립트입니다. undionly.kpxe 및 ipxe.efi가 사용자 지정 스크립트로 컴파일된 경우 이 항목을 무시할 수 있습니다.
:::
