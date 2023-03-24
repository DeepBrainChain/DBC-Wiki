# diskless netboot mirroring

After deploying the diskless netboot server, you can create a diskless boot image.

## Windows mirroring

1. Set mirror and host list for diskless console

- 1.1 Open the diskless console in the browser and create an image on the `Image` page

  This page has three tables.

  - Operation System: system disk. name(disk name), such as `win10`; description(disk description), such as `windows 10 21H1`; capacity(disk capacity), such as 100G.
  - Data Disk: Non-system disks such as data disks or game disks. name(disk name), such as `game`; description(disk description), such as `game disk`; capacity(disk capacity), such as 200G.
  - Boot Menu: A combination of boot items for a system disk and multiple data disks. name (the name of the startup item), such as `win10test`; operation system (the system disk name of the startup item); data disk (the collection of data disk names of the startup item).

  The collection of `name` column in `Boot Menu` is the collection of options of `default menu` of `Hosts` page.

  Please create a system disk, at least one data disk, and add at least one Boot Menu on the `Image` page.

- 1.2 Add a GPU machine, bind the IP address of the machine, and set the image to start.

  Switch to the `Hosts` page and add at least one piece of data, for example, `host name` fills in `test1`, `ip address` fills in `192.168.1.101`, `mac address` fills in the MAC address of a certain GPU machine, `default menu` Select one of the ones created above, `super tube` is checked.

  Click `Add/Modify Row` to add the filled data into the form, select the added row from the list, and click `Reset Host iSCSI` to reset the iSCSI settings.

  Note: Adding, modifying and deleting `host name`, `ip address`, `mac address` needs to restart the DHCP service to take effect.

2. Set the BIOS of the GPU machine

   Generally, the network boot option in the BIOS settings of the machine is turned off and needs to be turned on manually. Here, taking the ASUS motherboard as an example, turn on the network boot setting in the BIOS and set legacy boot, do not use UEFI. For other types of motherboards, please refer to the product manuals of their suppliers.

- 2.1. Boot -> CSM should be enabled, and `boot from network devices` should be set to legacy.
- 2.2. In Advanced -> Onboard devices configuration, Realtek LAN controller and Realtek LAN OPROM should be enabled.
- 2.3. In Advanced -> Network Stack configuration, Network Stack and ipv4 PXE support must be enabled, and the ipv6 switch does not matter.
- 2.4. `Boot option priorities` set the priority of boot items. When installing the system on the local hard disk, set the local hard disk as the first one, and set the network boot (network card device) as the first one after the diskless image is ready.

3. Install the system on the local disk of the GPU machine

   It is recommended to use the Windows 10 system, and prepare the official Microsoft image file in advance.

- 3.1. First install the Windows 10 system and the necessary network card, graphics card and other hardware drivers on the local hard disk. Please do not install redundant software during the test, as long as it can be booted from no disk, you can continue to install other software at any time later. Currently only supports MBR partition format, does not support GUID partition (corresponding to UEFI boot).
- 3.2. Clear the `PagingFiles` field value of the registry `HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\Session Manager\Memory Management`.
- 3.3. Enter `iSCSI Initiator` in the Windows search box to start `iSCSI Initiator`. When you start it for the first time, you will be prompted to start the corresponding service. Click Agree, and then modify the `iSCSI Initiator Name` on the configuration page of `iSCSI Initiator` to `<iscsi target prefix>:sn.<boot menu name>`, such as `iqn.2022-10.org.dbc.iscsi:global.client`.
- 3.4. After restarting the machine, clone the system in the local hard disk to the diskless netboot server.

4. Clone the system installed on the local hard disk to the diskless netboot server

- 4.1. Start the `iSCSI Initiator`, enter the IP address of the iSCSI server on the target page, you can see the `Boot Menu` created in the first step, click Connect, and you can see the system disk and data disk of this startup item in the disk manager.
- 4.2. Download and run [DiskGenius](https://www.diskgenius.cn/), open `Clone Disk` in the menu bar `Tools`, and follow the steps to clone the system in the local disk to the system disk mapped by iSCSI.

5. Restart the GPU machine to boot the diskless system from the network

- 5.1. Set the first item of `Boot option priorities` in the BIOS to the network card, save and restart.
- 5.2. Automatically restart and enter the iPXE boot interface, load and display the `menu iPXE boot menu build 20220717` menu, and enter the cloned diskless system after the automatic countdown ends.

If everything is normal, you can enter the diskless system and log in. At this time, the use is the same as the local disk, and you can continue to install the required software and remote control. If you encounter a blue screen, or have questions about intermediate steps, please consult DBC technical support.

## Ubuntu 18.04 mirroring

Make a mirror image of Ubuntu 18.04 system, the first two steps are similar to Windows system, you need to create ubuntu system disk and `Boot Menu`, set up BIOS, the difference is that there is no need to install and clone the system locally, because the Ubuntu system supports direct network installation to iSCSI disk.

1. ubuntu netboot

- ubuntu 18.04 official netboot: http://www.archive.ubuntu.com/ubuntu/dists/bionic-updates/main/installer-amd64/current/images/netboot/netboot.tar.gz
- Tsinghua source download address: https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ubuntu/dists/bionic/main/installer-amd64/current/images/netboot/netboot.tar.gz

  Ubuntu 20.04 or Aliyun source is similar.

  Download `netboot.tar.gz` to the HTTP service directory `/var/www/file` and decompress it.

2. Modify the ubuntu unattended configuration file

   Open the `ubuntu/preseed.cfg` file in the HTTP service directory, and modify the locale, language, country, timezone, mirror, partman-iscsi and all IP addresses according to actual needs.

3. Manually enter the network installation interface of ubuntu after booting the GPU machine from the network.

   When starting the machine and entering the `menu iPXE boot menu build 20220717` menu, manually select `Installing Ubuntu to iSCSI target` within the 5-second countdown, and then press the Enter key to enter the network installation interface.

   In the installation interface, you may still need to manually enter some unattended loading options. When installing to the disk, select the correct iSCSI disk and execute it all the way.

4. After the installation is complete, restart and automatically enter the installed ubuntu system.
