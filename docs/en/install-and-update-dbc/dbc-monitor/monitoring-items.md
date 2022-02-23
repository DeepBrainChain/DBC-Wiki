# monitoring items

## monitoring item list
<table>
  <tr>
    <td></td>
    <td>classification</td>
    <td>key</td>
    <td>description</td>
    <td>data type</td>
    <td>unit</td>
  </tr>
  <tr>
    <td rowspan="33">virtual machine monitoring</td>
    <td rowspan="6">basic information</td>
    <td>dom.state</td>
    <td>the running state of virtual machine, such as running</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>dom.maxMem</td>
    <td>the maximum memory in KBytes allowed</td>
    <td>unsigned int</td>
    <td>KB</td>
  </tr>
  <tr>
    <td>dom.memory</td>
    <td>the memory in KBytes used by the domain</td>
    <td>unsigned int</td>
    <td>KB</td>
  </tr>
  <tr>
    <td>dom.nrVirtCpu</td>
    <td>the number of virtual CPUs for the domain</td>
    <td>unsigned int</td>
    <td></td>
  </tr>
  <tr>
    <td>dom.cpuTime</td>
    <td>the CPU time used in nanoseconds</td>
    <td>unsigned long long</td>
    <td></td>
  </tr>
  <tr>
    <td>dom.cpuUsage</td>
    <td>average CPU usage</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="4">memory information</td>
    <td>memory.total</td>
    <td>memory total</td>
    <td>unsigned long long</td>
    <td>KB</td>
  </tr>
  <tr>
    <td>memory.unused</td>
    <td>real-time memory unused</td>
    <td>unsigned long long</td>
    <td>KB</td>
  </tr>
  <tr>
    <td>memory.available</td>
    <td>real-time memory avaliable</td>
    <td>unsigned long long</td>
    <td>KB</td>
  </tr>
  <tr>
    <td>memory.usage</td>
    <td>real-time memory usage</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="11">disk information</td>
    <td>disk.0.name</td>
    <td>The name of the first disk, the number in the middle is the number, starting from 0, the same below</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>disk.0.capacity</td>
    <td>logical size in bytes of the image (how much storage the guest will see)</td>
    <td>unsigned long long</td>
    <td>KB</td>
  </tr>
  <tr>
    <td>disk.0.allocation</td>
    <td>host storage in bytes occupied by the image (such as highest allocated extent if there are no holes, similar to 'du')</td>
    <td>unsigned long long</td>
    <td>KB</td>
  </tr>
  <tr>
    <td>disk.0.physical</td>
    <td>host physical size in bytes of the image container (last offset, similar to 'ls')</td>
    <td>unsigned long long</td>
    <td>KB</td>
  </tr>
  <tr>
    <td>disk.0.rd_req</td>
    <td>number of read requests</td>
    <td>long long</td>
    <td></td>
  </tr>
  <tr>
    <td>disk.0.rd_bytes</td>
    <td>number of read bytes</td>
    <td>long long</td>
    <td>B</td>
  </tr>
  <tr>
    <td>disk.0.wr_req</td>
    <td>number of write requests</td>
    <td>long long</td>
    <td></td>
  </tr>
  <tr>
    <td>disk.0.wr_bytes</td>
    <td>number of written bytes</td>
    <td>long long</td>
    <td>B</td>
  </tr>
  <tr>
    <td>disk.0.errs</td>
    <td>In Xen this returns the mysterious 'oo_req'</td>
    <td>long long</td>
    <td></td>
  </tr>
  <tr>
    <td>disk.0.rd_speed</td>
    <td>disk average read speed</td>
    <td>float</td>
    <td>B/s</td>
  </tr>
  <tr>
    <td>disk.0.wr_speed</td>
    <td>disk average write speed</td>
    <td>float</td>
    <td>B/s</td>
  </tr>
  <tr>
    <td rowspan="11">internet information</td>
    <td>net.0.name</td>
    <td>The name of the first network card, the number in the middle is the number, starting from 0, the same below</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>net.0.rx_bytes</td>
    <td>bytes received</td>
    <td>long long</td>
    <td>B</td>
  </tr>
  <tr>
    <td>net.0.rx_packets</td>
    <td>received package</td>
    <td>long long</td>
    <td></td>
  </tr>
  <tr>
    <td>net.0.rx_errs</td>
    <td></td>
    <td>long long</td>
    <td></td>
  </tr>
  <tr>
    <td>net.0.rx_drop</td>
    <td></td>
    <td>long long</td>
    <td></td>
  </tr>
  <tr>
    <td>net.0.tx_bytes</td>
    <td>bytes sent</td>
    <td>long long</td>
    <td>B</td>
  </tr>
  <tr>
    <td>net.0.tx_packets</td>
    <td>package sent</td>
    <td>long long</td>
    <td></td>
  </tr>
  <tr>
    <td>net.0.tx_errs</td>
    <td></td>
    <td>long long</td>
    <td></td>
  </tr>
  <tr>
    <td>net.0.tx_drop</td>
    <td></td>
    <td>long long</td>
    <td></td>
  </tr>
  <tr>
    <td>net.0.rx_speed</td>
    <td>average reception speed</td>
    <td>float</td>
    <td>B/s</td>
  </tr>
  <tr>
    <td>net.0.tx_speed</td>
    <td>average sending speed</td>
    <td>float</td>
    <td>B/s</td>
  </tr>
  <tr>
    <td>protocol</td>
    <td>version</td>
    <td>version number of dbc</td>
    <td>string</td>
    <td></td>
  </tr>
</table>

## Calculation of usage and speed
- CPU usage = (cpuTime2 - cpuTime1) / (realTime2 - realTime1) / Number of CPUs
- memory usage = (total - unused) / total
- disk average read speed = (rd_bytes2 - rd_bytes1) / (realTime2 - realTime1)
- average reception speed = (rx_bytes2 - rx_bytes1) / (realTime2 - realTime1)

:::tip 注意！
When the interval between two data collections is very long, such as once every minute, the disk read/write speed and network transmission speed can only represent the average speed, not the real-time speed.
:::
