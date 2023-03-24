# 디스크 없는 네트워크 부트 미러링

디스크 없는 네트워크 부팅 서버를 배포한 후 디스크 없는 부팅 이미지를 만들 수 있습니다.

## Windows 미러링

1. 디스크 없는 콘솔에 대한 미러 및 호스트 목록 설정

- 1.1 브라우저에서 디스크 없는 콘솔을 열고 `Image` 페이지에서 이미지를 생성합니다.

  이 페이지에는 3개의 테이블이 있습니다.

  - Operation System: 시스템 디스크. name(디스크 이름), `win10`과 같은; description(디스크 설명), `windows 10 21H1`과 같은; capacity(디스크 용량), 100G과 같은.
  - Data Disk: 데이터 디스크 또는 게임 디스크와 같은 비시스템 디스크. name(디스크 이름), `game`과 같은; description(디스크 설명), `game disk`과 같은; capacity(디스크 용량), 200G과 같은.
  - Boot Menu: 시스템 디스크와 여러 데이터 디스크의 부팅 항목 조합. name (시작 항목의 이름), `win10test`과 같은; operation system (시작 항목의 시스템 디스크 이름); data disk (시작 항목의 데이터 디스크 이름 모음).

  The collection of `name` column in `Boot Menu` is the collection of options of `default menu` of `Hosts` page.

  시스템 디스크, 하나 이상의 데이터 디스크를 생성하고 `Image` 페이지에 하나 이상의 부팅 메뉴를 추가하십시오.

- 1.2 GPU 머신을 추가하고 머신의 IP 주소를 바인딩하고 이미지를 시작하도록 설정합니다.

  Switch to the `Hosts` page and add at least one piece of data, for example, `host name` fills in `test1`, `ip address` fills in `192.168.1.101`, `mac address` fills in the MAC address of a certain GPU machine, `default menu` Select one of the ones created above, `super tube` is checked.

  Click `Add/Modify Row` to add the filled data into the form, select the added row from the list, and click `Reset Host iSCSI` to reset the iSCSI settings.

  Note: Adding, modifying and deleting `host name`, `ip address`, `mac address` needs to restart the DHCP service to take effect.

2. GPU 머신의 BIOS 설정

   일반적으로 시스템의 BIOS 설정에 있는 네트워크 부팅 옵션은 꺼져 있으며 수동으로 켜야 합니다. 여기서 ASUS 마더보드를 예로 들어 BIOS에서 네트워크 부팅 설정을 켜고 레거시 부팅을 설정하고 UEFI를 사용하지 마십시오. 다른 유형의 마더보드에 대해서는 해당 공급업체의 제품 설명서를 참조하십시오.

- 2.1. Boot -> CSM should be enabled, and `boot from network devices` should be set to legacy.
- 2.2. In Advanced -> Onboard devices configuration, Realtek LAN controller and Realtek LAN OPROM should be enabled.
- 2.3. In Advanced -> Network Stack configuration, Network Stack and ipv4 PXE support must be enabled, and the ipv6 switch does not matter.
- 2.4. `Boot option priorities` set the priority of boot items. When installing the system on the local hard disk, set the local hard disk as the first one, and set the network boot (network card device) as the first one after the diskless image is ready.

3. GPU 머신의 로컬 디스크에 시스템 설치

   Windows 10 시스템 사용을 권장하며, Microsoft 공식 이미지 파일을 미리 준비해 두시기 바랍니다.

- 3.1. 먼저 Windows 10 시스템과 필요한 네트워크 카드, 그래픽 카드 및 기타 하드웨어 드라이버를 로컬 하드 디스크에 설치합니다. 테스트 중에 중복 소프트웨어를 설치하지 마십시오. 디스크 없이 부팅할 수 있는 한 나중에 언제든지 다른 소프트웨어를 계속 설치할 수 있습니다. 현재 MBR 파티션 형식만 지원하고 GUID 파티션(UEFI 부팅에 해당)을 지원하지 않습니다.
- 3.2. 레지스트리 `HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\Session Manager\Memory Management`의 `PagingFiles` 필드 값을 지웁니다.
- 3.3. Windows 검색 상자에 iSCSI 이니시에이터를 입력하고 iSCSI 이니시에이터를 시작하여 처음 시작할 때 적절한 서비스를 시작하도록 경고하고 동의를 클릭한 다음 iSCSI 이니시에이터의 구성 페이지에서 iSCSI 이니시에이터 이름을 `<iscsi target prefix>:sn.<boot menu name>`로 수정합니다. 예를 들어 `iqn.2022-10.org.dbc.iscsi:sn.win10test`.
- 3.4. 시스템을 다시 시작한 후 로컬 하드 디스크의 시스템을 디스크가 없는 네트워크 부팅 서버에 복제합니다.

4. 로컬 하드 디스크에 설치된 시스템을 디스크 없는 네트워크 부팅 서버에 복제

- 4.1. Start the `iSCSI Initiator`, enter the IP address of the iSCSI server on the target page, you can see the `Boot Menu` created in the first step, click Connect, and you can see the system disk and data disk of this startup item in the disk manager.
- 4.2. Download and run [DiskGenius](https://www.diskgenius.cn/), open `Clone Disk` in the menu bar `Tools`, and follow the steps to clone the system in the local disk to the system disk mapped by iSCSI.

5. GPU 시스템을 다시 시작하여 네트워크에서 디스크가 없는 시스템을 부팅합니다.

- 5.1. BIOS에서 `Boot option priorities`의 첫 번째 항목을 네트워크 카드로 설정하고 저장하고 다시 시작합니다.
- 5.2. 자동으로 다시 시작하고 iPXE 부팅 인터페이스에 들어가 `menu iPXE boot menu build 20220717` 메뉴를 로드 및 표시하고 자동 카운트다운이 끝난 후 복제된 디스크 없는 시스템으로 들어갑니다.

모든 것이 정상이면 디스크 없는 시스템에 진입하여 로그인할 수 있습니다. 이때 사용은 로컬 디스크와 동일하며 필요한 소프트웨어 설치 및 원격 제어를 계속할 수 있습니다. 블루 스크린이 발생하거나 중간 단계에 대한 질문이 있는 경우 DBC 기술 지원에 문의하십시오.

## Ubuntu 18.04 미러링

Ubuntu 18.04 시스템의 미러 이미지를 만듭니다. 처음 두 단계는 Windows 시스템과 비슷합니다. 우분투 시스템 디스크와 `Boot Menu`를 만들고 BIOS를 설정해야 합니다. 차이점은 시스템을 설치하고 복제할 필요가 없다는 것입니다. Ubuntu 시스템이 iSCSI 디스크에 대한 직접 네트워크 설치를 지원하기 때문입니다.

1. ubuntu netboot

- ubuntu 18.04 official netboot: http://www.archive.ubuntu.com/ubuntu/dists/bionic-updates/main/installer-amd64/current/images/netboot/netboot.tar.gz
- Tsinghua source download address: https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ubuntu/dists/bionic/main/installer-amd64/current/images/netboot/netboot.tar.gz

  Ubuntu 20.04 or Aliyun source is similar.

  HTTP 서비스 디렉토리 `/var/www/file`에 `netboot.tar.gz`를 다운로드하고 압축을 풉니다.

2. 우분투 무인 구성 파일 수정

   Open the `ubuntu/preseed.cfg` file in the HTTP service directory, and modify the locale, language, country, timezone, mirror, partman-iscsi and all IP addresses according to actual needs.

3. 네트워크에서 GPU 머신을 부팅한 후 우분투의 네트워크 설치 인터페이스에 수동으로 들어갑니다.

   머신을 시작하고 `menu iPXE boot menu build 20220717` 메뉴에 들어갈 때 5초 카운트다운 내에 `Installing Ubuntu to iSCSI target`를 수동으로 선택한 다음 Enter 키를 눌러 네트워크 설치 인터페이스로 들어갑니다.

   설치 인터페이스에서 일부 자동 로드 옵션을 수동으로 입력해야 할 수도 있습니다. 디스크에 설치할 때 올바른 iSCSI 디스크를 선택하고 끝까지 실행하십시오.

4. 설치가 완료되면 다시 시작하고 자동으로 설치된 Ubuntu 시스템으로 들어갑니다.
