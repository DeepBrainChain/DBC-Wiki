# 安装和升级 DBC 客户端

客户端节点的作用

- DBC 客户端节点在整个网络当中作为信任人的身份，可以查询到当前网络中的正确部署功能节点的机器。当功能节点部署完成后，可以通过 http 请求客户端节点来查看您的功能节点是否成功连接到客户端节点。当通过客户端请求能成功看到您的功能节点机器 ID 时，这代表您已经成功部署完成功能节点。
- 建议：由于官方提供的客户端节点也并不能永久保持在线，所以，建议每家矿池搭建两个自己的客户端节点以作备用。
- 提示：客户端节点对硬件设备要求很低，可以正常运行的公网服务器都可以搭建，占用内存非常小，只要可以通过公网访问即可。

## (一) 安装 DBC 客户端

- **安装环境**

  `sudo apt-get install libvirt-clients libvirt-daemon-system expect -y`

- **下载安装脚本：**

  http://116.169.53.132:9000/dbc/install_update_script/mainnet/install_client.sh

- **给 install_client.sh 脚本文件添加执行权限：**

  `chmod +x install_client.sh`

- **运行安装脚本:**

  `./install_client.sh [安装目录]`

  安装过程中会要求用户输入 2 个端口号：

    <img src="./assets/install_dbc_client.png" width = "500" height = "260"  align=center />

<br/>

## (二) 升级 DBC 客户端

- **下载升级脚本：**

  http://116.169.53.132:9000/dbc/install_update_script/mainnet/update_client.sh

- **给 update_client.sh 脚本文件添加执行权限：**

  `chmod +x update_client.sh`

- **运行升级脚本:**

  `./update_client.sh [安装目录]`

    <img src="./assets/update_dbc_client.png" width = "500" height = "260"  align=center />
