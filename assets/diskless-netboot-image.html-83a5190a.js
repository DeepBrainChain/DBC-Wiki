import{_ as s,W as a,X as d,Y as e,Z as t,$ as n,a0 as i,H as r}from"./framework-5cecf6de.js";const l={},c=i('<h1 id="diskless-netboot-mirroring" tabindex="-1"><a class="header-anchor" href="#diskless-netboot-mirroring" aria-hidden="true">#</a> diskless netboot mirroring</h1><p>After deploying the diskless netboot server, you can create a diskless boot image.</p><h2 id="windows-mirroring" tabindex="-1"><a class="header-anchor" href="#windows-mirroring" aria-hidden="true">#</a> Windows mirroring</h2><ol><li>Set mirror and host list for diskless console</li></ol><ul><li><p>1.1 Open the diskless console in the browser and create an image on the <code>Image</code> page</p><p>This page has three tables.</p><ul><li>Operation System: system disk. name(disk name), such as <code>win10</code>; description(disk description), such as <code>windows 10 21H1</code>; capacity(disk capacity), such as 100G.</li><li>Data Disk: Non-system disks such as data disks or game disks. name(disk name), such as <code>game</code>; description(disk description), such as <code>game disk</code>; capacity(disk capacity), such as 200G.</li><li>Boot Menu: A combination of boot items for a system disk and multiple data disks. name (the name of the startup item), such as <code>win10test</code>; operation system (the system disk name of the startup item); data disk (the collection of data disk names of the startup item).</li></ul><p>The collection of <code>name</code> column in <code>Boot Menu</code> is the collection of options of <code>default menu</code> of <code>Hosts</code> page.</p><p>Please create a system disk, at least one data disk, and add at least one Boot Menu on the <code>Image</code> page.</p></li><li><p>1.2 Add a GPU machine, bind the IP address of the machine, and set the image to start.</p><p>Switch to the <code>Hosts</code> page and add at least one piece of data, for example, <code>host name</code> fills in <code>test1</code>, <code>ip address</code> fills in <code>192.168.1.101</code>, <code>mac address</code> fills in the MAC address of a certain GPU machine, <code>default menu</code> Select one of the ones created above, <code>super tube</code> is checked.</p><p>Click <code>Add/Modify Row</code> to add the filled data into the form, select the added row from the list, and click <code>Reset Host iSCSI</code> to reset the iSCSI settings.</p><p>Note: Adding, modifying and deleting <code>host name</code>, <code>ip address</code>, <code>mac address</code> needs to restart the DHCP service to take effect.</p></li></ul><ol start="2"><li><p>Set the BIOS of the GPU machine</p><p>Generally, the network boot option in the BIOS settings of the machine is turned off and needs to be turned on manually. Here, taking the ASUS motherboard as an example, turn on the network boot setting in the BIOS and set legacy boot, do not use UEFI. For other types of motherboards, please refer to the product manuals of their suppliers.</p></li></ol><ul><li>2.1. Boot -&gt; CSM should be enabled, and <code>boot from network devices</code> should be set to legacy.</li><li>2.2. In Advanced -&gt; Onboard devices configuration, Realtek LAN controller and Realtek LAN OPROM should be enabled.</li><li>2.3. In Advanced -&gt; Network Stack configuration, Network Stack and ipv4 PXE support must be enabled, and the ipv6 switch does not matter.</li><li>2.4. <code>Boot option priorities</code> set the priority of boot items. When installing the system on the local hard disk, set the local hard disk as the first one, and set the network boot (network card device) as the first one after the diskless image is ready.</li></ul><ol start="3"><li><p>Install the system on the local disk of the GPU machine</p><p>It is recommended to use the Windows 10 system, and prepare the official Microsoft image file in advance.</p></li></ol><ul><li>3.1. First install the Windows 10 system and the necessary network card, graphics card and other hardware drivers on the local hard disk. Please do not install redundant software during the test, as long as it can be booted from no disk, you can continue to install other software at any time later. Currently only supports MBR partition format, does not support GUID partition (corresponding to UEFI boot).</li><li>3.2. Clear the <code>PagingFiles</code> field value of the registry <code>HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet001\\Control\\Session Manager\\Memory Management</code>.</li><li>3.3. Enter <code>iSCSI Initiator</code> in the Windows search box to start <code>iSCSI Initiator</code>. When you start it for the first time, you will be prompted to start the corresponding service. Click Agree, and then modify the <code>iSCSI Initiator Name</code> on the configuration page of <code>iSCSI Initiator</code> to <code>iqn.2022-10.org.dbc.iscsi:global.client</code>.</li><li>3.4. After restarting the machine, clone the system in the local hard disk to the diskless netboot server.</li></ul><ol start="4"><li>Clone the system installed on the local hard disk to the diskless netboot server</li></ol>',10),h=e("li",null,[t("4.1. Start the "),e("code",null,"iSCSI Initiator"),t(", enter the IP address of the iSCSI server on the target page, you can see the "),e("code",null,"Boot Menu"),t(" created in the first step, click Connect, and you can see the system disk and data disk of this startup item in the disk manager.")],-1),u={href:"https://www.diskgenius.cn/",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"Clone Disk",-1),p=e("code",null,"Tools",-1),f=i('<ol start="5"><li>Restart the GPU machine to boot the diskless system from the network</li></ol><ul><li>5.1. Set the first item of <code>Boot option priorities</code> in the BIOS to the network card, save and restart.</li><li>5.2. Automatically restart and enter the iPXE boot interface, load and display the <code>menu iPXE boot menu build 20220717</code> menu, and enter the cloned diskless system after the automatic countdown ends.</li></ul><p>If everything is normal, you can enter the diskless system and log in. At this time, the use is the same as the local disk, and you can continue to install the required software and remote control. If you encounter a blue screen, or have questions about intermediate steps, please consult DBC technical support.</p><h2 id="ubuntu-18-04-mirroring" tabindex="-1"><a class="header-anchor" href="#ubuntu-18-04-mirroring" aria-hidden="true">#</a> Ubuntu 18.04 mirroring</h2><p>Make a mirror image of Ubuntu 18.04 system, the first two steps are similar to Windows system, you need to create ubuntu system disk and <code>Boot Menu</code>, set up BIOS, the difference is that there is no need to install and clone the system locally, because the Ubuntu system supports direct network installation to iSCSI disk.</p><ol><li>ubuntu netboot</li></ol>',6),b={href:"http://www.archive.ubuntu.com/ubuntu/dists/bionic-updates/main/installer-amd64/current/images/netboot/netboot.tar.gz",target:"_blank",rel:"noopener noreferrer"},g={href:"https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ubuntu/dists/bionic/main/installer-amd64/current/images/netboot/netboot.tar.gz",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"Ubuntu 20.04 or Aliyun source is similar.",-1),y=e("p",null,[t("Download "),e("code",null,"netboot.tar.gz"),t(" to the HTTP service directory "),e("code",null,"/var/www/file"),t(" and decompress it.")],-1),w=i('<ol start="2"><li><p>Modify the ubuntu unattended configuration file</p><p>Open the <code>ubuntu/preseed.cfg</code> file in the HTTP service directory, and modify the locale, language, country, timezone, mirror, partman-iscsi and all IP addresses according to actual needs.</p></li><li><p>Manually enter the network installation interface of ubuntu after booting the GPU machine from the network.</p><p>When starting the machine and entering the <code>menu iPXE boot menu build 20220717</code> menu, manually select <code>Installing Ubuntu to iSCSI target</code> within the 5-second countdown, and then press the Enter key to enter the network installation interface.</p><p>In the installation interface, you may still need to manually enter some unattended loading options. When installing to the disk, select the correct iSCSI disk and execute it all the way.</p></li><li><p>After the installation is complete, restart and automatically enter the installed ubuntu system.</p></li></ol>',1);function S(I,_){const o=r("ExternalLinkIcon");return a(),d("div",null,[c,e("ul",null,[h,e("li",null,[t("4.2. Download and run "),e("a",u,[t("DiskGenius"),n(o)]),t(", open "),m,t(" in the menu bar "),p,t(", and follow the steps to clone the system in the local disk to the system disk mapped by iSCSI.")])]),f,e("ul",null,[e("li",null,[e("p",null,[t("ubuntu 18.04 official netboot: "),e("a",b,[t("http://www.archive.ubuntu.com/ubuntu/dists/bionic-updates/main/installer-amd64/current/images/netboot/netboot.tar.gz"),n(o)])])]),e("li",null,[e("p",null,[t("Tsinghua source download address: "),e("a",g,[t("https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ubuntu/dists/bionic/main/installer-amd64/current/images/netboot/netboot.tar.gz"),n(o)])]),k,y])]),w])}const C=s(l,[["render",S],["__file","diskless-netboot-image.html.vue"]]);export{C as default};
