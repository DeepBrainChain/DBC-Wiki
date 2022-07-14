# Install DBC computing node

## Prepare before installation (based on the fixed public IP address that has been configured), deploy the KVM installation environment

:::tip Notice!
The system uses the 20.04 server version
:::

```shell
sudo echo "140.82.114.4 gitub.com"   >> /etc/hosts
sudo echo "199.232.5.194 github.global.ssl.fastly.net"   >> /etc/hosts
sudo echo "nameserver 8.8.4.4" | sudo tee /etc/resolv.conf > /dev/null
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get  install qemu-kvm libvirt-clients libvirt-daemon-system bridge-utils virt-manager ovmf cpu-checker vim expect -y
```

## create and mount the XFS file system

### Check the hard disk partition

`lsblk`

### Create a data disk folder, format the hard disk, and mount the hard disk (the data disk mounting directory must be /data)

```shell
sudo mkdir /data
sudo apt-get install xfsprogs -y
sudo mkfs.xfs -n ftype=1 -f /dev/sdb  （Whether it is sdb here depends on the situation of lsblk）
sudo mount  -o pquota /dev/sdb /data
sudo chmod 777 /data
sudo echo "/dev/sdb /data     xfs pquota 0 1" >> /etc/fstab
sudo mount -a
```

## Determine whether the machine supports virtualization

### Turn on hardware support

> BIOS open VT-d (search according to the motherboard type browser)
> VT (VT-x) and VT-d support, you need to set related support to enable, which is enabled by default
>
> Path under normal circumstances: Processor—IIO Configuration—Intel@ VT for Directed I/O(VT-d)

### Environment dependence, check whether the CPU supports virtualization and whether KVM is available

`egrep -c '(svm|vm)' /proc/cpuinfo`

> CPU detection, if it is displayed as 0, virtualization is not supported

`kvm-ok`

> Check if kvm is available
>
> display INFO: /dev/kvm exists  
> KVM acceleration can be used
> Indicates that subsequent operations can be performed. If the display does not match it, please check whether VT-d is turned on correctly

### 3.Check whether ip_forward forwarding is enabled

> Check if /proc/sys/net/ipv4/ip_forward is 1, if not, execute:
>
> ```
> sudo sh -c 'echo "net.ipv4.ip_forward=1" >> /etc/sysctl.conf'
> sudo sysctl -p
> ```
>
> Check if there is output from lsmod | grep br_netfilter If there is no output then execute:
>
> ```
> sudo sh -c 'echo "br_netfilter" > /etc/modules-load.d/br_netfilter.conf'
> ```
>
> It needs to be restarted after execution, or it can be restarted after setting the graphics card pass-through

### vfio environment preparation

- Set a blacklist so that the card is not occupied

```shell
sudo vim /etc/modprobe.d/blacklist.conf
#Finally add content:
blacklist snd_hda_intel
blacklist amd76x_edac
blacklist vga16fb
blacklist nouveau
blacklist rivafb
blacklist nvidiafb
blacklist rivatv
```

- Setting up graphics card passthrough

```shell
# Querying the graphics card ID
lspci -nnv | grep NVIDIA
Copy the graphics card id, such as 10de:2231 10de:1aef, the duplicate content can be kept only once

#Modify the kernel file
sudo vim /etc/default/grub
#Add in the GRUB_CMDLINE_LINUX_DEFAULT field (if it is an AMD platform, change intel_iommu=on to amd_iommu=on)
quiet splash intel_iommu=on kvm.ignore_msrs=1 vfio-pci.ids=Graphics card ids, separated by commas
#Add in GRUB_CMDLINE_LINUX field
quiet splash intel_iommu=on iommu=pt rd.driver.pre=vfio-pci


#update the kernel
sudo update-grub

#reboot the machine
reboot
#Query graphics card usage
lspci -vv -s <graphics card PCI interface, eg 00:01.0> | grep driver
```

> If vfio-pci is displayed, it is normal. If it is not vfio-pci, please check whether the grub file is correct. If there is no output, please perform the following manual binding

- Check kernel parameters:

> Check that both `/proc/sys/net/bridge/bridge-nf-call-iptables` and `/proc/sys/net/bridge/bridge-nf-call-ip6tables`=1

**Manually bind the GPU (only if there is no output from the previous query, the following example is only for demonstration, please replace it according to the actual query result)**

```shell
#Execute the command to bind (note: the content after echo is the graphics card id queried by the machine) The already occupied PCI does not need to be bound manually.
sudo -i
sudo echo 10de 1e82 > /sys/bus/pci/drivers/vfio-pci/new_id
sudo echo 10de 2206 >> /sys/bus/pci/drivers/vfio-pci/new_id
…………


#Check again after the binding is completed (all items of each card must be checked)
lspci -vv -s 17:00.0 | grep driver
#If Kernel driver in use : vfio-pci appears, the binding is successful. If still unsuccessful, go back and check
```

## After confirming that the graphics card of the machine is occupied by vfio-pci, start the libvirtd service and set the boot to start automatically

### 1. Turn on the virt tcp monitoring service:

```shell
sudo vim /etc/libvirt/libvirtd.conf
#After the arrow is the modified content: remove the # in front of these three lines, and change sasl to none

#listen_tls = 0	=======>	listen_tls = 0
#listen_tcp = 1	=======>	listen_tcp = 1
#auth_tcp = "sasl"	======>	auth_tcp = "none"

sudo vim /etc/default/libvirtd
#Corresponding modification to the following configuration
libvirtd_opts="-l"

#After modification, please execute:
systemctl mask libvirtd.socket libvirtd-ro.socket libvirtd-admin.socket libvirtd-tls.socket libvirtd-tcp.socket
```

### 2. Start libvirtd and set up auto-start & check service status

- sudo systemctl restart libvirtd.service
- sudo systemctl enable libvirtd.service
- systemctl status libvirtd

**3、Test whether libvirtd is started successfully**

- virsh connect qemu+tcp://localhost:16509/system
- If there is no output error, it means the startup is successful

## Create a dbc user

```shell
sudo wget http://116.85.24.172:20444/static/add_dbc_user.sh
sudo chmod +x add_dbc_user.sh
sudo ./add_dbc_user.sh dbc
#dbcUser password is set by yourself
```

## Install the DBC node program

- **Note**: need to switch to dbc user installation

1. download install script: install_mining.sh
   http://119.6.235.169:9000/dbc/install_update_script/mainnet/install_mining.sh
2. add executable permissions
   `chmod +x ./install_mining.sh`
3. run install_mining.sh
   `./install_mining.sh [install_dir]`

(During the installation process, you need to input two listen port)

## Download the mirror template

- http://119.6.235.169:9000/image

Download: ubuntu.qcow2 and ubuntu-2004.qcow2 these two mirrors

## Back up the machine id and private key (very important,if this private key is lost, 50% of the pledged coins will be lost, please pay attention to multiple backups)

Back up the contents of the following file: ` /home/dbc/0.3.7.3/dbc_repo/dat/node.dat`, put it in a safe place, and use it later If you reinstall the system or reinstall DBC later, you need to use the original id and private key, otherwise the pledged coins will be deducted

## Test to create a virtual machine with graphics card pass-through to check whether the previous configuration is correct

- Test program download address: http://119.6.235.169:9000/dbc/package/check_env
- Binary file, add execute permission and execute directly: chmod 777 chec_env ; ./check_env
- If the green check 'vm domain_test successful' appears, it means success. If it does not appear, please check whether the previous configurations are correct.

## Check whether the various hardware parameters of the machine are normal

- If the previous step is successful, a virtual machine will be successfully created, and log in to the virtual machine through ssh, where: vm_local_ip is the virtual machine's intranet ip address, the user name is dbc, and pwd is the login password
- ![image](https://user-images.githubusercontent.com/32829693/129731433-3e01b669-f274-419e-9ea0-d7891705a12e.png)
- Then cd to the test script directory and run:【pytest .】，
  - cd /test/dbc_gpu_server_test/
  - sudo -i (Switch to root user)
  - pytest .
- A total of 18 tests;
  - 10 unit tests, testing CPU, memory, hard disk, graphics card, video memory, cuda usability, etc.;
  - 7 integration tests to test whether the actual usage conditions are normal (such as pytorch calculation, training and inference), and eliminate potential hardware failures;
  - 1 benchmark speed test, testing the training and inference of dozens of CNN networks, lasting about ten minutes;
  - If there is no red error, it will pass. If there is a red F/error, the test item corresponding to the error will be displayed, which can be checked according to the information;
  - The full test process of 4 cards 2080ti is about 10 minutes. If the test time is too long, such as more than half an hour, there may be a problem with the machine, and the test can be aborted in advance.
  - Short test summary info in the test result: If all are passed, it means the test passed, as long as one item is failed, it means the test failed and the fault needs to be checked;
  - After the end, the 'result' folder is generated to export the performance report;
- Back to the host, shut down and delete the tested virtual machine: ./check_env --localip x.x.x.x (x.x.x.x is the internal network ip address of the virtual machine. If you do not operate this step, the dbc program will not be able to start the new virtual machine. Passed on-chain verification)

## If the execution of pytest is stuck or nvidia does not have any calls, please troubleshoot according to the following ideas

```shell
# Check if vfio reports an error dmesg | grep vfio-pci

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

# vfio-pci has an obvious bug, look further

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



#  As you can see above, 90000000-9fffffff is occupied by vesafb, not vfio-pci

# Modify /etc/default/grub, close vga,
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash intel_iommu=on iommu=pt pcie_acs_override=multifunction nofb video=vesafb:off video=efifb:off vga=off"
GRUB_CMDLINE_LINUX="quiet splash intel_iommu=on iommu=pt rd.driver.pre=vfio-pci"


update and restart
update-initramfs -u -k all
update-grub
reboot
```

## Check whether the machine is correctly added to the computing power network

- Use the official client node to view
- Mine pool build client node
  For the above two points, please see: install_update_dbc_client_en.md
- After 1 minute, the machine information is requested through the client, and if the machine information can be found, the machine has been added to the network.
  quest machine info，refer to：dbc_client_http_api
- About client nodes: It is recommended that each mining pool set up 2 or more client nodes to ensure that the network can still be normal when the official nodes or other mining pools provide nodes are offline. If there are too few client nodes in the network or hang Too much drop will affect the rental situation of the machine. The client node construction can start a container to deploy on other servers without taking up too much resources.
- **_The client node can be deployed on the same machine as the computing power node. Be careful not to repeat the port number in the conf/core.conf configuration file of each node._**

## Machine on the chain

https://github.com/DeepBrainChain/DBC-DOC/blob/master/chain_ops/machine_online_en.md

## Monitoring setting

- Set the monitoring server address of DBC：add configuration "dbc_monitor_server=ip:port" in conf/core.conf
- Set the miner's monitoring server address：add configuration "miner_monitor_server=ip:port" in conf/core.conf
- Set the renter's monitoring server address：https://deepbrainchain.github.io/DBC-Wiki/en/install-and-update-dbc/dbc-monitor/http-monitor-api.html
