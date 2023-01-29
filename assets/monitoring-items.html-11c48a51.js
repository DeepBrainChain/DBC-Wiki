import{_ as i,V as o,W as a,X as t,Y as d,Z as r,$ as n,F as s}from"./framework-1d64dffd.js";const l={},m=n('<h1 id="monitoring-items" tabindex="-1"><a class="header-anchor" href="#monitoring-items" aria-hidden="true">#</a> monitoring items</h1><h2 id="monitoring-item-list-of-the-host" tabindex="-1"><a class="header-anchor" href="#monitoring-item-list-of-the-host" aria-hidden="true">#</a> monitoring item list of the host</h2><table><tr><td>classification</td><td>key</td><td>description</td><td>data type</td><td>unit</td></tr><tr><td></td><td>host.gpuCount</td><td>total number of GPUs</td><td>unsigned int</td><td></td></tr><tr><td></td><td>host.gpuUsed</td><td>number of GPUs used</td><td>unsigned int</td><td></td></tr><tr><td rowspan="10">GPU</td><td>host.gpu.0.name</td><td>The product name of the first GPU device, the number in the middle is the number, starting from 0, the same below</td><td>string</td><td></td></tr><tr><td>host.gpu.0.busId</td><td>The tuple domain:bus:device.function PCI identifier</td><td>string</td><td></td></tr><tr><td>host.gpu.0.memTotal</td><td>Total physical device memory</td><td>unsigned long long</td><td>B</td></tr><tr><td>host.gpu.0.memFree</td><td>Unallocated device memory</td><td>unsigned long long</td><td>B</td></tr><tr><td>host.gpu.0.memUsed</td><td>Sum of Reserved and Allocated device memory</td><td>unsigned long long</td><td>B</td></tr><tr><td>host.gpu.0.gpuUtilization</td><td>gpu utilization：Percent of time over the past sample period during which one or more kernels was executing on the GPU</td><td>unsigned int</td><td></td></tr><tr><td>host.gpu.0.memUtilization</td><td>mem utilization：Percent of time over the past sample period during which global (device) memory was being read or written</td><td>unsigned int</td><td></td></tr><tr><td>host.gpu.0.powerUsage</td><td>the power usage information in milliwatts</td><td>unsigned int</td><td>milliwatt</td></tr><tr><td>host.gpu.0.powerCap</td><td>the power management limit in milliwatts</td><td>unsigned int</td><td>milliwatt</td></tr><tr><td>host.gpu.0.temperature</td><td>the current temperature readings for the device</td><td>unsigned int</td><td>degrees C</td></tr><tr><td rowspan="2">virtual machine</td><td>host.vmCount</td><td>total number of virtual machines</td><td>unsigned int</td><td></td></tr><tr><td>host.vmRunning</td><td>number of running virtual machines</td><td>unsigned int</td><td></td></tr><tr><td>CPU</td><td>host.cpuUsage</td><td>CPU usage</td><td>float</td><td>%</td></tr><tr><td rowspan="3">memory</td><td>host.memTotal</td><td>total memory</td><td>unsigned long long</td><td>KB</td></tr><tr><td>host.memFree</td><td>free memory</td><td>unsigned long long</td><td>KB</td></tr><tr><td>host.memUsage</td><td>memory usage</td><td>float</td><td>%</td></tr><tr><td rowspan="2">flow</td><td>host.rxFlow</td><td>receive total flow</td><td>long long</td><td>B</td></tr><tr><td>host.txFlow</td><td>total flow sent</td><td>long long</td><td>B</td></tr><tr><td rowspan="4">data disk</td><td>host.diskTotal</td><td>data disk capacity</td><td>unsigned long long</td><td>KB</td></tr><tr><td>host.diskFree</td><td>data disk free capacity</td><td>unsigned long long</td><td>KB</td></tr><tr><td>host.diskUsage</td><td>data disk usage</td><td>float</td><td>%</td></tr><tr><td>host.diskMountStatus</td><td>The mount status of the data disk，&quot;lost&quot; or &quot;normal&quot;</td><td>string</td><td></td></tr><tr><td rowspan="3">load average</td><td>host.loadAverage.1</td><td>Average load over the past 1 minute</td><td>float</td><td></td></tr><tr><td>host.loadAverage.5</td><td>Average load over the past 5 minute</td><td>float</td><td></td></tr><tr><td>host.loadAverage.15</td><td>Average load over the past 15 minute</td><td>float</td><td></td></tr><tr><td></td><td>host.dbcVersion</td><td>DBC version number</td><td>string</td><td></td></tr></table><h2 id="monitoring-item-list-of-the-virtual-machine" tabindex="-1"><a class="header-anchor" href="#monitoring-item-list-of-the-virtual-machine" aria-hidden="true">#</a> monitoring item list of the virtual machine</h2><table><tr><td></td><td>classification</td><td>key</td><td>description</td><td>data type</td><td>unit</td></tr><tr><td rowspan="46">virtual machine monitoring</td><td rowspan="6">basic information</td><td>dom.state</td><td>the running state of virtual machine, such as running</td><td>string</td><td></td></tr><tr><td>dom.maxMem</td><td>the maximum memory in KBytes allowed</td><td>unsigned int</td><td>KB</td></tr><tr><td>dom.memory</td><td>the memory in KBytes used by the domain</td><td>unsigned int</td><td>KB</td></tr><tr><td>dom.nrVirtCpu</td><td>the number of virtual CPUs for the domain</td><td>unsigned int</td><td></td></tr><tr><td>dom.cpuTime</td><td>the CPU time used in nanoseconds</td><td>unsigned long long</td><td></td></tr><tr><td>dom.cpuUsage</td><td>average CPU usage</td><td>float</td><td>%</td></tr><tr><td rowspan="4">memory information</td><td>memory.total</td><td>memory total</td><td>unsigned long long</td><td>KB</td></tr><tr><td>memory.unused</td><td>real-time memory unused</td><td>unsigned long long</td><td>KB</td></tr><tr><td>memory.available</td><td>real-time memory avaliable</td><td>unsigned long long</td><td>KB</td></tr><tr><td>memory.usage</td><td>real-time memory usage</td><td>float</td><td>%</td></tr><tr><td rowspan="11">disk information</td><td>disk.0.name</td><td>The name of the first disk, the number in the middle is the number, starting from 0, the same below</td><td>string</td><td></td></tr><tr><td>disk.0.capacity</td><td>logical size in bytes of the image (how much storage the guest will see)</td><td>unsigned long long</td><td>KB</td></tr><tr><td>disk.0.allocation</td><td>host storage in bytes occupied by the image (such as highest allocated extent if there are no holes, similar to &#39;du&#39;)</td><td>unsigned long long</td><td>KB</td></tr><tr><td>disk.0.physical</td><td>host physical size in bytes of the image container (last offset, similar to &#39;ls&#39;)</td><td>unsigned long long</td><td>KB</td></tr><tr><td>disk.0.rd_req</td><td>number of read requests</td><td>long long</td><td></td></tr><tr><td>disk.0.rd_bytes</td><td>number of read bytes</td><td>long long</td><td>B</td></tr><tr><td>disk.0.wr_req</td><td>number of write requests</td><td>long long</td><td></td></tr><tr><td>disk.0.wr_bytes</td><td>number of written bytes</td><td>long long</td><td>B</td></tr><tr><td>disk.0.errs</td><td>In Xen this returns the mysterious &#39;oo_req&#39;</td><td>long long</td><td></td></tr><tr><td>disk.0.rd_speed</td><td>disk average read speed</td><td>float</td><td>B/s</td></tr><tr><td>disk.0.wr_speed</td><td>disk average write speed</td><td>float</td><td>B/s</td></tr><tr><td rowspan="11">internet information</td><td>net.0.name</td><td>The name of the first network card, the number in the middle is the number, starting from 0, the same below</td><td>string</td><td></td></tr><tr><td>net.0.rx_bytes</td><td>bytes received</td><td>long long</td><td>B</td></tr><tr><td>net.0.rx_packets</td><td>received package</td><td>long long</td><td></td></tr><tr><td>net.0.rx_errs</td><td></td><td>long long</td><td></td></tr><tr><td>net.0.rx_drop</td><td></td><td>long long</td><td></td></tr><tr><td>net.0.tx_bytes</td><td>bytes sent</td><td>long long</td><td>B</td></tr><tr><td>net.0.tx_packets</td><td>package sent</td><td>long long</td><td></td></tr><tr><td>net.0.tx_errs</td><td></td><td>long long</td><td></td></tr><tr><td>net.0.tx_drop</td><td></td><td>long long</td><td></td></tr><tr><td>net.0.rx_speed</td><td>average reception speed</td><td>float</td><td>B/s</td></tr><tr><td>net.0.tx_speed</td><td>average sending speed</td><td>float</td><td>B/s</td></tr><tr><td rowspan="13">GPU</td><td>gpu.graphicsDriverVersion</td><td>the version of the system&#39;s graphics driver</td><td>string</td><td></td></tr><tr><td>gpu.nvmlVersion</td><td>the version of the NVML library</td><td>string</td><td></td></tr><tr><td>gpu.cudaVersion</td><td>the version of the CUDA driver</td><td>string</td><td></td></tr><tr><td>gpu.0.name</td><td>The product name of the first GPU device, the number in the middle is the number, starting from 0, the same below</td><td>string</td><td></td></tr><tr><td>gpu.0.busId</td><td>The tuple domain:bus:device.function PCI identifier</td><td>string</td><td></td></tr><tr><td>gpu.0.memTotal</td><td>Total physical device memory</td><td>unsigned long long</td><td>B</td></tr><tr><td>gpu.0.memFree</td><td>Unallocated device memory</td><td>unsigned long long</td><td>B</td></tr><tr><td>gpu.0.memUsed</td><td>Sum of Reserved and Allocated device memory</td><td>unsigned long long</td><td>B</td></tr><tr><td>gpu.0.gpuUtilization</td><td>gpu utilization：Percent of time over the past sample period during which one or more kernels was executing on the GPU</td><td>unsigned int</td><td></td></tr><tr><td>gpu.0.memUtilization</td><td>mem utilization：Percent of time over the past sample period during which global (device) memory was being read or written</td><td>unsigned int</td><td></td></tr><tr><td>gpu.0.powerUsage</td><td>the power usage information in milliwatts</td><td>unsigned int</td><td>milliwatt</td></tr><tr><td>gpu.0.powerCap</td><td>the power management limit in milliwatts</td><td>unsigned int</td><td>milliwatt</td></tr><tr><td>gpu.0.temperature</td><td>the current temperature readings for the device</td><td>unsigned int</td><td>degrees C</td></tr><tr><td>protocol</td><td>version</td><td>version number of dbc</td><td>string</td><td></td></tr></table><h2 id="gpu-monitoring-must-read" tabindex="-1"><a class="header-anchor" href="#gpu-monitoring-must-read" aria-hidden="true">#</a> gpu monitoring must read</h2><p>Video card monitoring must read Because of the isolation of the graphics card device on the host computer, dbc cannot directly obtain the specific information of the graphics card. Therefore, based on the qemu guest agent, we integrated the functions of the NVIDIA Management Library and implemented a set of independent services, namely the dbc guest agent, which obtains the detailed information of the graphics card in the virtual machine through communication with the virtual machine.</p><p>For custom images, to monitor graphics card information, please install the dbc guest agent service inside the virtual machine.</p>',8),g={href:"http://119.6.235.169:9000/dbc_guest_agent/install.sh",target:"_blank",rel:"noopener noreferrer"},u={href:"http://119.6.235.169:9000/dbc_guest_agent/qemu-ga-x86_64.msi",target:"_blank",rel:"noopener noreferrer"},h=n('<div class="hint-container tip"><p class="hint-container-title">注意！</p><ol><li><p>Graphics card monitoring currently only supports NVIDIA graphics cards.</p></li><li><p>The graphics card monitor can only see the graphics card devices that have been used by the virtual machine.</p></li></ol></div><h2 id="calculation-of-usage-and-speed" tabindex="-1"><a class="header-anchor" href="#calculation-of-usage-and-speed" aria-hidden="true">#</a> Calculation of usage and speed</h2><ul><li>CPU usage = (cpuTime2 - cpuTime1) / (realTime2 - realTime1) / Number of CPUs</li><li>memory usage = (total - unused) / total</li><li>disk average read speed = (rd_bytes2 - rd_bytes1) / (realTime2 - realTime1)</li><li>average reception speed = (rx_bytes2 - rx_bytes1) / (realTime2 - realTime1)</li></ul><div class="hint-container tip"><p class="hint-container-title">注意！</p><p>When the interval between two data collections is very long, such as once every minute, the disk read/write speed and network transmission speed can only represent the average speed, not the real-time speed.</p></div>',4);function c(p,f){const e=s("ExternalLinkIcon");return o(),a("div",null,[m,t("ul",null,[t("li",null,[d("Ubuntu virtual machine installation script: "),t("a",g,[d("http://119.6.235.169:9000/dbc_guest_agent/install.sh"),r(e)])]),t("li",null,[d("Windows 64-bit virtual machine installer: "),t("a",u,[d("http://119.6.235.169:9000/dbc_guest_agent/qemu-ga-x86_64.msi"),r(e)])])]),h])}const b=i(l,[["render",c],["__file","monitoring-items.html.vue"]]);export{b as default};