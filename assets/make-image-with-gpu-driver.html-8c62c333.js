import{_ as i,W as t,X as l,Y as e,Z as a,$ as r,a0 as n,H as o}from"./framework-5cecf6de.js";const c="/DBC-Wiki/assets/image-e41b1805.png",d="/DBC-Wiki/assets/image_1-057465a8.png",p="/DBC-Wiki/assets/image_2-f3582d90.png",u="/DBC-Wiki/assets/image_3-1c9e612e.png",m="/DBC-Wiki/assets/image_4-a9040961.png",v="/DBC-Wiki/assets/image_5-383206e2.png",h="/DBC-Wiki/assets/image_6-b36d4e00.png",g="/DBC-Wiki/assets/image_7-3e4ac7b9.png",b="/DBC-Wiki/assets/image_8-8ffde053.png",k={},f=n(`<h1 id="make-image-steps-with-gpu-driver" tabindex="-1"><a class="header-anchor" href="#make-image-steps-with-gpu-driver" aria-hidden="true">#</a> Make image steps (with gpu driver)</h1><p>Make a user&#39;s own virtual machine image that can be used to create multiple instances of a virtual machine. To create a virtual machine template follow the steps below</p><h2 id="step-1-installing-kvm-in-linux" tabindex="-1"><a class="header-anchor" href="#step-1-installing-kvm-in-linux" aria-hidden="true">#</a> Step 1: Installing KVM in Linux</h2><h3 id="_1-install-kvm-and-other-software-on-linux-host" tabindex="-1"><a class="header-anchor" href="#_1-install-kvm-and-other-software-on-linux-host" aria-hidden="true">#</a> 1. Install kvm and other software on linux host</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> qemu-kvm libvirt-clients libvirt-daemon-system bridge-utils virt-manager ovmf cpu-checker <span class="token function">vim</span> <span class="token function">expect</span> <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-check-virtualization-support" tabindex="-1"><a class="header-anchor" href="#_2-check-virtualization-support" aria-hidden="true">#</a> 2. Check virtualization support</h3><p>After installing kvm and other software, you need to make sure the current machine supports kvm, use the following command to check virtualization support</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">egrep</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;(vmx|svm)&#39;</span> /proc/cpuinfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Any non-zero result means virtualization is supported. From the output below, we have confirmed that our server is working properly.</p><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Then check the system support for kvm virtualization, using the following command</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> kvm-ok
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="image_1" tabindex="0" loading="lazy"><figcaption>image_1</figcaption></figure><p>If you have the output of the above picture, you can proceed, if not please check the host bios settings</p><h3 id="_3-vfio-preparation" tabindex="-1"><a class="header-anchor" href="#_3-vfio-preparation" aria-hidden="true">#</a> 3. VFIO Preparation</h3><p>Set kernel module blacklist</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/modprobe.d/blacklist.conf
<span class="token comment">#Add these at the bottom of the file：</span>
blacklist snd_hda_intel
blacklist amd76x_edac
blacklist vga16fb
blacklist nouveau
blacklist rivafb
blacklist nvidiafb
blacklist rivatv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Set gpu passthrough</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#search gpu ID</span>
lspci -nnv<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-i</span> NVIDIA
<span class="token comment">#Record the graphics ID as shown below ,like 10de:2204 10de:1aef</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="image_2" tabindex="0" loading="lazy"><figcaption>image_2</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#Modify kernel file</span>
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/default/grub
<span class="token comment">#Add in GRUB_CMDLINE_LINUX_DEFAULT field (if AMD platform, intel_iommu=on to amd_iommu=on)</span>
<span class="token comment">#”quiet splash intel_iommu=on kvm.ignore_msrs=1 vfio-pci.ids=graphics ID &lt;--Separated by commas“</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="image_3" tabindex="0" loading="lazy"><figcaption>image_3</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#update kernel</span>
<span class="token function">sudo</span> <span class="token function">update-grub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Then restart the machine and check the graphics card usage after the machine starts</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#4f:00.0 as an example</span>
lspci <span class="token parameter variable">-vv</span> <span class="token parameter variable">-s</span> 4f:00 <span class="token operator">|</span><span class="token function">grep</span> driver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If vfio-pci is shown after driver, it is correct</p><figure><img src="`+m+`" alt="image_4" tabindex="0" loading="lazy"><figcaption>image_4</figcaption></figure><h3 id="_4-checking-libvirt-running" tabindex="-1"><a class="header-anchor" href="#_4-checking-libvirt-running" aria-hidden="true">#</a> 4. Checking libvirt running</h3><p>Check that the libvirt service is running, if it is not, you need to start it manually</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl status libvirtd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="image_5" tabindex="0" loading="lazy"><figcaption>image_5</figcaption></figure><p>You can enable it to start if not running:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> libvirtd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="step-2-create-a-kvm-virtual-image" tabindex="-1"><a class="header-anchor" href="#step-2-create-a-kvm-virtual-image" aria-hidden="true">#</a> Step 2: Create a KVM Virtual Image</h2><p>Before we get to creating a template, we need to, first of all, have an installation instance. On the command-line, we are going to create a 50G Ubuntu KVM image using the qemu-img command as shown.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> qemu-img create <span class="token parameter variable">-f</span> qcow2 /data/ubuntu.qcow2 50G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then create the ubuntu virtual machine with the virt-install command as shown below. Note that the iso file after the &quot;--cdrom&quot; is the installation image of the OS you want to install, you need to download it yourself</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>virt-install --virt-type kvm <span class="token parameter variable">--name</span> ubuntu <span class="token parameter variable">--memory</span> <span class="token number">4096</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--vcpus</span> <span class="token number">4</span> <span class="token parameter variable">--cpu</span><span class="token operator">=</span>host-passthrough <span class="token punctuation">\\</span>
<span class="token parameter variable">--cdrom</span><span class="token operator">=</span>/data/ubuntu_install_dvd_base.iso <span class="token punctuation">\\</span>
--os-variant<span class="token operator">=</span>auto <span class="token punctuation">\\</span>
<span class="token parameter variable">--disk</span> /data/ubuntu.qcow2,bus<span class="token operator">=</span>virtio <span class="token punctuation">\\</span>
<span class="token parameter variable">--network</span> <span class="token assign-left variable">network</span><span class="token operator">=</span>default <span class="token punctuation">\\</span>
<span class="token parameter variable">--graphics</span> vnc,listen<span class="token operator">=</span><span class="token number">0.0</span>.0.0 <span class="token parameter variable">--noautoconsole</span> <span class="token punctuation">\\</span>
--host-device 4f:00.0 <span class="token punctuation">\\</span>
--host-device 4f:00.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+'" alt="image_6" tabindex="0" loading="lazy"><figcaption>image_6</figcaption></figure>',39),_={href:"https://www.tecmint.com/create-virtual-machines-in-kvm-using-virt-manager/",target:"_blank",rel:"noopener noreferrer"},w=n('<figure><img src="'+g+`" alt="image_7" tabindex="0" loading="lazy"><figcaption>image_7</figcaption></figure><h2 id="step-3-create-kvm-virtual-machine-template-image" tabindex="-1"><a class="header-anchor" href="#step-3-create-kvm-virtual-machine-template-image" aria-hidden="true">#</a> Step 3: Create KVM Virtual Machine Template Image</h2><p>Once the installation is complete, log into the VM and update all the system packages.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Install the prerequisite packages that you feel are essential to get started with.(Be sure to install qemu-guest-agent and nvidia gpu driver)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> qemu-guest-agent
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> qemu-guest-agent <span class="token parameter variable">--now</span>
<span class="token comment">#NVIDIA graphics card drivers need to go to the official website to download the corresponding version</span>
<span class="token comment">#Or use apt install to install nvidia drivers</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once you are done, be sure to power off your virtual machine and clean up the VM template image as shown.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> virt-sysprep <span class="token parameter variable">--enable</span> bash-history,tmp-files,machine-id <span class="token parameter variable">-d</span> ubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+b+'" alt="image_8" tabindex="0" loading="lazy"><figcaption>image_8</figcaption></figure><p>Lastly, invoke the command shown to undefine the VM domain. And he template image is now ready for cloning and deployment.</p>',10);function x(y,I){const s=o("ExternalLinkIcon");return t(),l("div",null,[f,e("p",null,[a("This launches the virtual machine instance. You can confirm this by heading over to the "),e("a",_,[a("v"),r(s)]),a("nc viewer and opening the console window as shown. What you can see is the default welcome page for the installer. Be sure to complete the installation to the very end.")]),w])}const z=i(k,[["render",x],["__file","make-image-with-gpu-driver.html.vue"]]);export{z as default};