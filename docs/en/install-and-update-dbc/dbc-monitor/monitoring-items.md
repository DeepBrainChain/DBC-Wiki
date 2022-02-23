# 监控项

## 监控项列表
<table>
  <tr>
    <td></td>
    <td>分类</td>
    <td>key</td>
    <td>描述</td>
    <td>类型</td>
    <td>单位</td>
  </tr>
  <tr>
    <td rowspan="33">虚拟机监控</td>
    <td rowspan="6">基本信息</td>
    <td>dom.state</td>
    <td>虚拟机状态，例如running</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>dom.maxMem</td>
    <td>虚拟机允许的最大内存</td>
    <td>unsigned int</td>
    <td>KB</td>
  </tr>
  <tr>
    <td>dom.memory</td>
    <td>虚拟机已使用的内存大小</td>
    <td>unsigned int</td>
    <td>KB</td>
  </tr>
  <tr>
    <td>dom.nrVirtCpu</td>
    <td>虚拟机的vCPU个数</td>
    <td>unsigned int</td>
    <td></td>
  </tr>
  <tr>
    <td>dom.cpuTime</td>
    <td>虚拟机的CPU时间</td>
    <td>unsigned long long</td>
    <td></td>
  </tr>
  <tr>
    <td>dom.cpuUsage</td>
    <td>虚拟机的CPU平均使用率</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="4">内存信息</td>
    <td>memory.total</td>
    <td>内存total</td>
    <td>unsigned long long</td>
    <td>KB</td>
  </tr>
  <tr>
    <td>memory.unused</td>
    <td>内存实时unused</td>
    <td>unsigned long long</td>
    <td>KB</td>
  </tr>
  <tr>
    <td>memory.available</td>
    <td>内存实时avaliable</td>
    <td>unsigned long long</td>
    <td>KB</td>
  </tr>
  <tr>
    <td>memory.usage</td>
    <td>内存实时使用率</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="11">磁盘信息</td>
    <td>disk.0.name</td>
    <td>第一块磁盘的名称，中间的数字是编号，从0开始，下同</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>disk.0.capacity</td>
    <td>磁盘逻辑大小</td>
    <td>unsigned long long</td>
    <td>KB</td>
  </tr>
  <tr>
    <td>disk.0.allocation</td>
    <td>磁盘存储大小，类似'du'命令</td>
    <td>unsigned long long</td>
    <td>KB</td>
  </tr>
  <tr>
    <td>disk.0.physical</td>
    <td>磁盘物理大小，类似'ls'命令</td>
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
    <td>磁盘平均读取速度</td>
    <td>float</td>
    <td>B/s</td>
  </tr>
  <tr>
    <td>disk.0.wr_speed</td>
    <td>磁盘平均写入速度</td>
    <td>float</td>
    <td>B/s</td>
  </tr>
  <tr>
    <td rowspan="11">网络信息</td>
    <td>net.0.name</td>
    <td>第一块网卡的名称，中间的数字是编号，从0开始，下同</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>net.0.rx_bytes</td>
    <td>接收的字节数</td>
    <td>long long</td>
    <td>B</td>
  </tr>
  <tr>
    <td>net.0.rx_packets</td>
    <td>接收的包</td>
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
    <td>发送的字节数</td>
    <td>long long</td>
    <td>B</td>
  </tr>
  <tr>
    <td>net.0.tx_packets</td>
    <td>发送的包</td>
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
    <td>平均接收速度</td>
    <td>float</td>
    <td>B/s</td>
  </tr>
  <tr>
    <td>net.0.tx_speed</td>
    <td>平均发送速度</td>
    <td>float</td>
    <td>B/s</td>
  </tr>
  <tr>
    <td>协议</td>
    <td>version</td>
    <td>dbc的版本号</td>
    <td>string</td>
    <td></td>
  </tr>
</table>

## 使用率和速度的计算
- CPU使用率 = (cpuTime2 - cpuTime1) / (实际时间2 - 实际时间1) / CPU个数
- 内存使用率 = (total - unused) / total
- 磁盘平均读取速度 = (rd_bytes2 - rd_bytes1) / (实际时间2 - 实际时间1)
- 平均接收速度 = (rx_bytes2 - rx_bytes1) / (实际时间2 - 实际时间1)

:::tip 注意！
当两次采集数据间隔时间很长，比如每分钟采集一次，则磁盘读写速度和网络传输速度只能代表平均速度，无法表示实时速度。
:::
