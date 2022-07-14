# DBC 컴퓨팅 노드 설치

## 【A】설치전 준비 (구성된 고정 공용 IP 주소 기반),KVM설치 환경 배포

시스템은 ubuntu18.04 LTS 또는 20.04LTS를 채택하고 시작하기 전에 기존 설치된 그래픽 카드 드라이버를 제거하십시오. 이 작업에는 그래픽 카드 드라이버가 포함될 수 없습니다.

```shell
sudo echo "140.82.114.4 gitub.com" >> /etc/hosts
sudo echo "199.232.5.194 github.global.ssl.fastly.net" >> /etc/hosts
sudo echo "nameserver 8.8.4.4" | sudo tee /etc/resolv.conf > /dev/null
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install qemu-kvm libvirt-clients libvirt-daemon-system bridge-utils virt-manager ovmf cpu-checker vim expect -y
```

## 【B】XFS 파일 시스템 생성 및 마운트

1.하드디스크 파티션 보기

`lsblk`

2.데이터 디스크 파일 생성 및 하드디스크 격식화, 하드디스크 마운드(데이터디스크 마운트 목차 필수/data)

```shell
sudo mkdir /data
sudo apt-get install xfsprogs -y
sudo mkfs.xfs -n ftype=1 -f /dev/sdb （여기서sdb인지 여부는lsblk상황에 따라 다릅니다）
sudo mount -o pquota /dev/sdb /data
sudo chmod 777 /data
sudo echo "/dev/sdb /data xfs pquota 0 1" >> /etc/fstab
sudo mount -a
```

## 【C】기기 가상화 지원 여부 판정

1.하드웨어 지원 활성화

BIOS VT-d활성화 (AMD플랫폼일 경우,AMD-Vi를 켜야합니다, 구체적인 작업은 메인보드 유형 브라우저에 따라 검색할 수 있습니다)VT(VT-x) 및 VT-d 지원.AMD는 AMD-Vi로 부릅니다.관련 지원을 enable 설치진행 ,기본적으로 켜짐)

일반적 경로:Processor—IIO Configuration—Intel@ VT for Directed I/O(VT-d)

2.환경 의존, CPU가 가상화를 지원하는지, KVM을 사용할 수 있는지 확인합니다

egrep -c '(svm|vm)' /proc/cpuinfo

CPU검사 , 0으로 표시되면, 가상화 지원이 안됩니다

kvm-ok

kvm 사용가능 여부 검사

INFO 표시 : /dev/kvm exists

KVM acceleration can be used 후속 작업을 수행할 수 있음을 표시합니다, 표시가 일치하지 않으면 VT-d가 정상적으로 켜져 있는지 확인하십시오.

3.ip_forward전달 오픈여부 검사

/proc/sys/net/ipv4/ip_forward 1인지 확인 , 1아닐경우 집행합니다:

```shell
sudo sh -c 'echo "net.ipv4.ip_forward=1" >> /etc/sysctl.conf'
sudo sysctl -p
```

lsmod | grep br_netfilter수출여부 확인, 수출 안될경우 집행합니다 :

1.sudo sh -c 'echo "br_netfilter" > /etc/modules-load.d/br_netfilter.conf'

집행완료 후 다시 시작 필요 ,혹은 그래픽카드 설치 직통 후 동시 다시 시작 합니다

20.04 시스템인 경우 다음을 수행하십시오. vfio-pci에 대해 다른 단계를 수행할 필요가 없습니다. ubuntu18.04 시스템인 경우 네 번째 단계에 따라 작업을 시작하십시오.

- 블랙리스트 설정 , 카드 공간 확보

```shell
sudo vim /etc/modprobe.d/blacklist.conf
#최종 추가 내용：
blacklist snd_hda_intel
blacklist amd76x_edac
blacklist vga16fb
blacklist nouveau
blacklist rivafb
blacklist nvidiafb
blacklist rivatv
```

- 그래픽 카드 직통 설정

```shell
#그래픽카드 ID  검색
lspci -nnv | grep NVIDIA
그래픽카드id 복제，예 10de:2231 10de:1aef，중복 내용은 오직 한번만  저장
#커널 파일 수정
sudo vim /etc/default/grub
#GRUB_CMDLINE_LINUX_DEFAULT문구에 추가（MD플랫폼 일 경우，intel_iommu=on을 amd_iommu=on으로 수정)
quiet splash intel_iommu=on kvm.ignore_msrs=1 vfio-pci.ids=<그래픽 카드id，쉼표로 중간 구분>
#커널 업데이트
sudo update-grub
#기기 다시 시작
#그래픽 카드 사용량 검색
lspci -vv -s <그래픽 카드 PCI인터페이스> | grep driver
```

vfio-pci가 표시되면 정상입니다, vfio-pci가 아니면 돌아가서 grub 파일이 올바르게 작성되었는지 확인하거나 여섯 번째 단계 2에 따라 수동으로 바인딩하십시오.

- ip_forward전달 오픈여부 검사

/proc/sys/net/bridge/bridge-nf-call-iptables 및 /proc/sys/net/bridge/bridge-nf-call-ip6tables 모두 =1 여부 검사

20.04LTS시스템 그래픽 카드 격리 단계 여기서 마무리 됩니다, 단계 7로 돌아가 실행 하십시오.

## 【D】시스템 그룹화 활성

1. iommu그룹화 구성

(다음 내용에서 서버 플랫폼에 따라 iommu를 교체하십시오. intel은 intel_iommu를 사용하고 AMD는 amd_iommu를 사용하십시오.)

```shell
sudo vim /etc/default/grub
#GRUB_CMDLINE_LINUX_DEFAULT문구에 추가 (quiet splash 이두가지 있으면 중복 추가 필요없습니다 ）
quiet splash intel_iommu=on iommu=pt rd.driver.pre=vfio-pci
#GRUB_CMDLINE_LINUX문구에 추가
intel_iommu=on iommu=pt rd.driver.pre=vfio-pci
```

2.구성 도뮬 파일

```shell
sudo vim /etc/modules
#하기 내용 추가：
pci_stub
vfio
vfio_iommu_type1
vfio_pci
kvm
kvm_intel
#grub.cfg파일 업데이트
sudo update-grub
#기기 다시 시작，iommu정상 오픈 여부 검사（혹은 추후 실행 완료 후 동시 다시시작 검사합니다 ）
dmesg | grep -i iommu
```

[ 3.887539] pci 0000:83:00.1: Adding to iommu group 46 와 같이 유사 표시 되면,오픈 성공됬음을 뜻합니다

## 【E】GPU 리소스 격리

1. 블랙리스트 설정, 카드 공간 확보

```bash
sudo vim /etc/modprobe.d/blacklist.conf
#최종 추가 내용 ：
blacklist snd_hda_intel
blacklist amd76x_edac
blacklist vga16fb
blacklist nouveau
blacklist rivafb
blacklist nvidiafb
blacklist rivatv
```

2.PCI 설비정보 수집

```bash
lspci -nnv | grep NVIDIA
#유사 표시
17:00.0 VGA compatible controller [0300]: NVIDIA Corporation TU104 [GeForce RTX 2080] [10de:1e82] (rev a1) (prog-if 00 [VGA controller])
17:00.1 Audio device [0403]: NVIDIA Corporation TU104 HD Audio Controller [10de:10f8] (rev a1)
17:00.2 USB controller [0c03]: NVIDIA Corporation TU104 USB 3.1 Host Controller [10de:1ad8] (rev a1) (prog-if 30 [XHCI])
17:00.3 Serial bus controller [0c80]: NVIDIA Corporation TU104 USB Type-C UCSI Controller [10de:1ad9] (rev a1)
65:00.0 VGA compatible controller [0300]: NVIDIA Corporation TU104 [GeForce RTX 2080] [10de:1e82] (rev a1) (prog-if 00 [VGA controller])
65:00.1 Audio device [0403]: NVIDIA Corporation TU104 HD Audio Controller [10de:10f8] (rev a1)
65:00.2 USB controller [0c03]: NVIDIA Corporation TU104 USB 3.1 Host Controller [10de:1ad8] (rev a1) (prog-if 30 [XHCI])
65:00.3 Serial bus controller [0c80]: NVIDIA Corporation TU104 USB Type-C UCSI Controller [10de:1ad9] (rev a1)
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
#모든 설비 코드 및 PCI id 기록(중복 코드 오직 한번 얻음)
#예：
#설비코드：
10de:1e82,10de:10f8,10de:1ad8,10de:1ad9 （중복 오직 한번 기록이면 됩니다 ）
#PCI id인터페이스（기기별 PCI인터페이스 다릅니다, 주의하여 기록하십시오）
17:00.0
17:00.1
17:00.2
17:00.3
65:00.0
65:00.1
65:00.2
65:00.3
```

3.vfio설정 및 직통용 GPU 분리

```bash
sudo vim /etc/modprobe.d/vfio.conf
#상기 수집한 설비 코드 정보 기입 (중복될겨우, 한번만 기입하면 됩니다)：
options vfio-pci ids=10de:1e82,10de:10f8,10de:1ad8,10de:1ad9
sudo vim /etc/modules-load.d/vfio-pci.conf
#이하 내용 기입
vfio-pci kvmgt vfio-iommu-type1 vfio-mdev
#기기 다시 시작
sudo reboot
```

4.GPU상태 확인 (모든 인터페이스 모두 검색 , vfio-pci점유되지 안는것을 방지합니다

```bash
#PCI인터페이스 내용 교체 주의 하십시오 ！
lspci -vv -s <PCI接口> | grep driver
#예：
lspci -vv -s 17:00.0 | grep driver
lspci -vv -s 17:00.1 | grep driver
lspci -vv -s 17:00.2 | grep driver
lspci -vv -s 17:00.3 | grep driver

#출력이 없으면 드라이버가 없을을 의미합니다.
#만약 Kernel driver in use: vfio-pci표시되면 불리 성공을 의미 합니다
#만약 Kernel driver in user: snd_hda_intel와 유사내용 표시되면 설비는 다른 드라이버에 점유 됬음을 의미합니다
```

PCI가 vfio-pci에 의해 점유되지 않은 경우 다음 단계로 진행하고, vfio-pci에 의해 점유된 PCI가 있으면 다음 단계를 건너뜁니다.

- ip_forward전달 오픈여부 검사

/proc/sys/net/bridge/bridge-nf-call-iptables 및 /proc/sys/net/bridge/bridge-nf-call-ip6tables 모두 1인지 검사합니다

## 【F】 드라이버 Kernel driver in use: vfio-pci인 경우 다음 작업을 수행할 필요가 없습니다 ,단 바인딩 실패했을경우 계속 실행하십시오

1.기기 바인딩 해제

드라이버 Kernel driver in use: vfio-pci이 아닌 경우 기기 바인딩 해제(각 그룹 id 모두 바인딩 해제되어야 합니다. 다음은 예제입니다. 자체 검색된 pci 인터페이스에 따라 수정하십시오)

```bash
#내용 교체에 주의 하십시오, 다음 명령은 데모용입니다 (점유된 모든 그래픽 카드 pci 인터페이스를 바인딩 해제해야합니다)
sudo -i
sudo echo 0000:17:00.0 > /sys/bus/pci/devices/0000\:17\:00.0/driver/unbind
sudo echo 0000:83:00.0 > /sys/bus/pci/devices/0000\:83\:00.0/driver/unbind
sudo modprobe vfio
sudo modprobe vfio-pci
sudo reboot
#기기 다시 시작 및 GPU가 다른 OMMU그룹에서 분리되였는지 및 현재 사용중인 vfio 구동프로그램을 검사합니다
#실행 명령 검사 GPU가 다른 IOMMU그룹에서 분리되였는지
find /sys/kernel/iommu_groups/*/devices/*
#그룹화 표시되면 정상입니다
# PCI다시 검색（교체 주의），만약 아직도 vfio-pci로 검색 혹은 다른 내용 표시되면, 다음 단계를 진행하십시오
lspci -vv -s 17:00.0 | grep driver
```

2.GPU수동 바인딩

```bash
#명령실행하여 바인딩 진행 (주의：echo뒤 내용은 기기에서 검색한 그래픽 카드id입니다 ）이미 점유된 PCI는 추가 수동 바인딩 필요없습니다
sudo -i
sudo echo 10de 1e82 > /sys/bus/pci/drivers/vfio-pci/new_id
sudo echo 10de 2206 >> /sys/bus/pci/drivers/vfio-pci/new_id
.…………

#바인딩 완성후 다시 검사 （카드별 모든 항목 검사 필요 ）
lspci -vv -s 17:00.0 | grep driver
#만약Kernel driver in use : vfio-pci 표시되면,바인딩 성공을 의미합니다. 성공안됬으면 다시 돌아가서 검사합세요
```

## 【G】기기그래픽 카드가 vfio-pci에 의해 점유되고 있음을 확인한 후 libvirtd 서비스를 시작하고 기기 자동 시작을 설정합니다(이 설정 단계는 매우 중요합니다 , 올바르게 구성되지 않은 경우 정확한 요청을 수신할 수 없습니다. 기계의 온체인 상태에 직접적인 영향을 미치고 임대에 영향을 미치며 손실발생합니다)

1.virt tcp 수신 (감청)서비스 활성화

```bash
설정 파일 수정：
sudo vim /etc/libvirt/libvirtd.conf
아래 두줄 못찾으면, 앞부분 # 부호 삭제:
#listen_tls = 0
#listen_tcp = 1

이줄 찾으면,앞부분 # 부호 삭세 ,sasl을 none으로 수정：
#auth_tcp = "sasl" ======> auth_tcp = "none"

sudo vim /etc/default/libvirtd
#이에 따가 다음 설정으로 수정 (소문자 L)
libvirtd_opts="-l"
ubuntu 20.04관련，이하 단계 실행 필요 ：
systemctl mask libvirtd.socket libvirtd-ro.socket libvirtd-admin.socket libvirtd-tls.socket libvirtd-tcp.socket
```

2.libvirtd를 시작하여 자동 시작 설정 및 서비스 상태 확인

```bash
sudo systemctl restart libvirtd.service
sudo systemctl enable libvirtd.service
systemctl status libvirtd
```

3.libvirtd 정상 작동 성공여부 테스트 진행

- virsh connect qemu+tcp://localhost:16509/system

- 출력 잘못이 없을경우 작동 성공을 의마합니다 ;

## 【H】DBC유저 생성

```bash
sudo wget http://116.85.24.172:20444/static/add_dbc_user.sh
sudo chmod +x add_dbc_user.sh
sudo ./add_dbc_user.sh dbc
#dbc유저 비밀번호 자체 설정
```

## 【I】DBC성능노드 프로그램 설치

- 주의: DBC유저 설치 전환 필요

  1.dbc성능 노드 설치 스크립트 다운로드:http://119.6.235.169:9000/dbc/install_update_script/mainnet/install_mining.sh

  2.설치 스크립트에 실행가능 권한 추가:명령줄에서 실행 :chmod +x ./install_mining.sh

  3.설치 스크립트 운행 :명령줄에서 실행 ./install_mining.sh [설치목차] (설치 과정중, 유저가 2개의 로컬 수신감청 포트 번호 입력해야합니다)

## 【J】미러이미지 모델 다운로드(/data 목차에 넣으면 dbc가 가상 기기 시작하고 /data 목차로 이동하여 검색합니다)

http://119.6.235.169:9000/image 다운로드：ubuntu.qcow2 和 ubuntu-2004.qcow2 이두개의 미러이미지#

## 【K】기기 아이디 및 개인키 백업(매우 중요합니다, 개인키 분실 시 담보된 코인의 50%가 손실되므로 여러곳에 백업해 두시기 바랍니다)

목차에 dat/node.dat 파일을 설치 백업하여 안전한 곳에 보관하시고, 추후 리부팅하거나 DBC를 재설치 하실 경우에는 기존 아이디와 개인키를 사용하셔야 하며, 그렇지 않을 경우 담보된 코인이 차감됩니다.

## 【L】앞부분 정상 설정 여부 검사 하기 위해 , 그래픽카드 직통의 가상기기 생성 및 테스트합니다

- 테스트 프로그램 다운로드 주소 :http://119.6.235.169:9000/dbc/package/check_env

- 바이너리 파일, 실행 권한 추가 및 직접 실행: chmod 777 chec_env ; ./check_env

- check vm domain_test successful녹색 표시되면 성공 의미, 표시 안되면 앞부분 설치 정확여부 검사 확인 합니다​

## 【M】기기의 각종 하드웨이 파라미터 지침 정상여부 검사

- 만약 O단계 검사 성공하면, 한개의 가상기기가 성공적으로 생성됩니다, ssh통해 등록하여 이 가상기기 내부에 진입합니다, 이중 : vm_local_ip는 가상기기 내부네트웍의 ip주소입니다，유저는 dbc,pwd후에는 등록 비밀번호 입니다

 <img width="542" alt="1629202906(1)" src="https://user-images.githubusercontent.com/32829693/129724788-d50728cd-913b-4e91-8d0b-e53a098da091.png">

이후 cd 테스트 스크립트 목차로 이동, 운행: 【pytest .】，

▶cd /test/dbc_gpu_server_test/

▶sudo -i (root유저로 전환)

▶pytest .

- 총 18항목 테스트 :

▶10항목 유닛 테스트, CPU, 메모리, 하드 디스크, 그래픽 카드, 비디오 메모리, cuda 사용성 등 테스트;

▶7항목 통합 테스트, 다양한 실제 사용 조건(예: pytorch 컴퓨팅, 교육 및 추론)이 정상적인지 테스트하고 잠재적인 하드웨어 오류 제거;

▶1항목 벤치마크 속도테스트,열몇가지의 CNN네트웍 훈련 및 추론 테스트,10분동안 지속;

▶ 빨간색 오류가 없으면 통과하고 빨간색 F / 오류가 있으면 오류에 해당하는 테스트 항목이 표시되며 정보에 따라 확인 가능;

▶2080ti 카드 4개의 전체 테스트 과정은 약 10분 정도 소요되며, 테스트 시간 너무 길고 30분 이상초과시 기기에 문제가 있을 수 있으며 테스트가 사전에 종료될 수 있습니다. (종료되지 않은 경우 테스트가 완료된 후 오류가 보고됩니다);

▶테스트 결과에서 short test summary info: 모두 통과하면 테스트가 통과되었음을 의미하고 한 항목이 실패할 경우 테스트가 실패했음을 의미하며 고장을 확인해야 합니다;

▶종료 후 결과 폴더 생성 및 성능 보고서 내보내기;

- 호스트 기기로 돌아가 테스트한 가상 기기를 종료하고 삭제합니다：./check_env --localip x.x.x.x （x.x.x.x는 가상기기 내부 네트웍 ip주소입니다,이단계 진행 안할경우, dbc프로그램에서 새로운 가상기기 작동이 불가합니다, 하여 메인넷 올릴수 없으며 검증도 못받습니다 )

- iptable명령 실행，기기 네트웍 방문 권한 오픈:（이단계 진행 안할경우, 외부에서 가상기기 방문 불가입니다 )

  ▶iptables -D LIBVIRT_FWI 2 -t filter

▶iptables -D LIBVIRT_FWO 2 -t filter

## 【N】기기가 컴퓨팅 네트워크에 정상적으로 연결되었는지 확인합니다

- 클라이언트 노드를 구축하기위한 컴퓨팅 풀은 다음을 참조하십시오 :install_update_dbc_client_cn.md

* 1분 후 클라이언트를 통해 기계 정보를 요청합니다. 기계 정보를 찾을 수 있으면 기계가 네트워크에 연결된 것입니다. 기계 정보를 요청하려면 다음을 참조하십시오:dbc_client_http_api

* 클라이언트 노드 관련:각 컴퓨팅풀은 2개 이상의 클라이언트 노드를 구축하여 주주최측 또는 다른 컴퓨팅 풀에서 제공하는 노드가 오프라인 상태일지라도 네트워크가 정상임을 보장할 것을 권장합니다.만약 네트웍중 클라이언트 노드가 너무 적어 혹은 자주 오프상태일경우, 기기 임대에 영향을 미칩니다.클라이언트 노드 구축은 다른 서버의 컨테이너 작동으로 진행할수있으며, 많은 리소스를 차지하지 않습니다.

- 클라이언트 노드는 컴퓨팅 파워 노드와 동일 기기에 배포할 수 있으므로 각 노드의 conf/core.conf 설정 파일에서 포트 번호를 중복되지 않도록 주의하십시오.

## 【O】기기 온체인

https://github.com/DeepBrainChain/DBC-DOC/blob/master/chain_ops/bonding_machine.md#%E6%9C%BA%E5%99%A8%E4%B8%8A%E7%BA%BF%E6%AD%A5%E9%AA%A4
