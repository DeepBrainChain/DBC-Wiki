# 监控项

## 宿主机的监控项列表

<table>
  <tr>
    <td>分类</td>
    <td>key</td>
    <td>描述</td>
    <td>类型</td>
    <td>单位</td>
  </tr>
  <tr>
    <td></td>
    <td>host.gpuCount</td>
    <td>GPU数量</td>
    <td>unsigned int</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>host.gpuUsed</td>
    <td>已使用的GPU个数</td>
    <td>unsigned int</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="10">GPU</td>
    <td>host.gpu.0.name</td>
    <td>第一块GPU的名称，中间的数字是编号，从0开始，下同</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>host.gpu.0.busId</td>
    <td>GPU的总线ID</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>host.gpu.0.memTotal</td>
    <td>GPU显存大小</td>
    <td>unsigned long long</td>
    <td>B</td>
  </tr>
  <tr>
    <td>host.gpu.0.memFree</td>
    <td>GPU显存空闲大小</td>
    <td>unsigned long long</td>
    <td>B</td>
  </tr>
  <tr>
    <td>host.gpu.0.memUsed</td>
    <td>GPU显存已占用大小</td>
    <td>unsigned long long</td>
    <td>B</td>
  </tr>
  <tr>
    <td>host.gpu.0.gpuUtilization</td>
    <td>GPU利用率：在过去的采样周期中，一个或多个内核在 GPU 上执行的时间百分比</td>
    <td>unsigned int</td>
    <td></td>
  </tr>
  <tr>
    <td>host.gpu.0.memUtilization</td>
    <td>显存利用率：在过去的采样周期中读取或写入全局（设备）内存的时间百分比</td>
    <td>unsigned int</td>
    <td></td>
  </tr>
  <tr>
    <td>host.gpu.0.powerUsage</td>
    <td>GPU使用功率</td>
    <td>unsigned int</td>
    <td>milliwatt 毫瓦（特）</td>
  </tr>
  <tr>
    <td>host.gpu.0.powerCap</td>
    <td>GPU最大功率</td>
    <td>unsigned int</td>
    <td>milliwatt 毫瓦（特）</td>
  </tr>
  <tr>
    <td>host.gpu.0.temperature</td>
    <td>GPU当前温度</td>
    <td>unsigned int</td>
    <td>degrees C</td>
  </tr>
  <tr>
    <td></td>
    <td>host.vmCount</td>
    <td>虚拟机数量</td>
    <td>unsigned int</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>host.vmRunning</td>
    <td>正在运行的虚拟机个数</td>
    <td>unsigned int</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>host.cpuUsage</td>
    <td>CPU使用率</td>
    <td>float</td>
    <td>%</td>
  </tr>
  <tr>
    <td></td>
    <td>host.memTotal</td>
    <td>总内存</td>
    <td>unsigned long long</td>
    <td>KB</td>
  </tr>
  <tr>
    <td></td>
    <td>host.memFree</td>
    <td>空闲内存</td>
    <td>unsigned long long</td>
    <td>KB</td>
  </tr>
  <tr>
    <td></td>
    <td>host.memUsage</td>
    <td>内存使用率</td>
    <td>float</td>
    <td>%</td>
  </tr>
  <tr>
    <td></td>
    <td>host.rxFlow</td>
    <td>接收总流量</td>
    <td>long long</td>
    <td>B</td>
  </tr>
  <tr>
    <td></td>
    <td>host.txFlow</td>
    <td>发送总流量</td>
    <td>long long</td>
    <td>B</td>
  </tr>
  <tr>
    <td></td>
    <td>host.diskTotal</td>
    <td>硬盘容量</td>
    <td>unsigned long long</td>
    <td>KB</td>
  </tr>
  <tr>
    <td></td>
    <td>host.diskFree</td>
    <td>硬盘空闲容量</td>
    <td>unsigned long long</td>
    <td>KB</td>
  </tr>
  <tr>
    <td></td>
    <td>host.diskUsage</td>
    <td>硬盘使用率</td>
    <td>float</td>
    <td>%</td>
  </tr>
  <tr>
    <td></td>
    <td>host.loadAverage.1</td>
    <td>过去的1分钟内的平均负载</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>host.loadAverage.5</td>
    <td>过去的5分钟内的平均负载</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>host.loadAverage.15</td>
    <td>过去的15分钟内的平均负载</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>host.dbcVersion</td>
    <td>DBC版本号</td>
    <td>string</td>
    <td></td>
  </tr>
</table>

## 虚拟机的监控项列表

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
    <td rowspan="46">虚拟机监控</td>
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
    <td>%</td>
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
    <td>%</td>
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
    <td rowspan="13">GPU</td>
    <td>gpu.graphicsDriverVersion</td>
    <td>图形驱动程序版本号</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>gpu.nvmlVersion</td>
    <td>NVML库版本号</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>gpu.cudaVersion</td>
    <td>cuda驱动版本号</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>gpu.0.name</td>
    <td>第一块GPU的名称，中间的数字是编号，从0开始，下同</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>gpu.0.busId</td>
    <td>GPU的总线ID</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>gpu.0.memTotal</td>
    <td>GPU显存大小</td>
    <td>unsigned long long</td>
    <td>B</td>
  </tr>
  <tr>
    <td>gpu.0.memFree</td>
    <td>GPU显存空闲大小</td>
    <td>unsigned long long</td>
    <td>B</td>
  </tr>
  <tr>
    <td>gpu.0.memUsed</td>
    <td>GPU显存已占用大小</td>
    <td>unsigned long long</td>
    <td>B</td>
  </tr>
  <tr>
    <td>gpu.0.gpuUtilization</td>
    <td>GPU利用率：在过去的采样周期中，一个或多个内核在 GPU 上执行的时间百分比</td>
    <td>unsigned int</td>
    <td></td>
  </tr>
  <tr>
    <td>gpu.0.memUtilization</td>
    <td>显存利用率：在过去的采样周期中读取或写入全局（设备）内存的时间百分比</td>
    <td>unsigned int</td>
    <td></td>
  </tr>
  <tr>
    <td>gpu.0.powerUsage</td>
    <td>GPU使用功率</td>
    <td>unsigned int</td>
    <td>milliwatt 毫瓦（特）</td>
  </tr>
  <tr>
    <td>gpu.0.powerCap</td>
    <td>GPU最大功率</td>
    <td>unsigned int</td>
    <td>milliwatt 毫瓦（特）</td>
  </tr>
  <tr>
    <td>gpu.0.temperature</td>
    <td>GPU当前温度</td>
    <td>unsigned int</td>
    <td>degrees C</td>
  </tr>
  <tr>
    <td>协议</td>
    <td>version</td>
    <td>dbc的版本号</td>
    <td>string</td>
    <td></td>
  </tr>
</table>

## 显卡监控必读

因为宿主机上对显卡设备的隔离，导致 dbc 无法直接获取显卡的具体信息。因此我们在 qemu guest agent 的基础上，集成了 NVIDIA Management Library 的功能，实现了一套独立的服务，即 dbc guest agent，通过与虚拟机的通信，来获取虚拟机里面的显卡详细信息。

对于自定义的镜像，想要监控显卡信息，请在虚拟机内部安装 dbc guest agent 服务，安装脚本：http://116.169.53.132:9000/dbc_guest_agent/install.sh

:::tip 注意！

1. 显卡监控暂时只支持 NVIDIA 显卡。

2. 显卡监控只能看到已被虚拟机使用的显卡设备。
   :::

## 使用率和速度的计算

- CPU 使用率 = (cpuTime2 - cpuTime1) / (实际时间 2 - 实际时间 1) / CPU 个数
- 内存使用率 = (total - unused) / total
- 磁盘平均读取速度 = (rd_bytes2 - rd_bytes1) / (实际时间 2 - 实际时间 1)
- 平均接收速度 = (rx_bytes2 - rx_bytes1) / (实际时间 2 - 实际时间 1)

:::tip 注意！
当两次采集数据间隔时间很长，比如每分钟采集一次，则磁盘读写速度和网络传输速度只能代表平均速度，无法表示实时速度。
:::
