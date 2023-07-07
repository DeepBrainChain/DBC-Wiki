# DBC 裸金属节点

## 简介

1. DBC 的裸金属节点只负责为裸金属服务器生成 "node_id", 控制裸金属服务器进行开关机等有限的操作。
2. 裸金属节点不支持虚拟机相关功能，因为对部署节点的机器硬件设备要求很低，使用的内存硬盘等资源非常小，只要能对裸金属服务器使用 IPMI 工具且网络服务正常即可。

:::tip 注意！
DBC 的裸金属节点本身有个 "node_id"，不需要上链，只用来为裸金属服务器生成 "node_id"。

例如向裸金属节点发送添加裸金属服务器的请求，参数需要告诉客户端节点发给哪个裸金属节点，并且填上用于 IPMI 控制的信息，请求会返回一个新的 "node_id"，即要添加的裸金属服务器的 "node_id"，这个 "node_id" 需要上链，然后用户才能在链上租用它，使用它发送开关机的请求。

本文提到两种 "node_id"，在此区分：

- “裸金属节点的 node_id”即节点安装目录下“dat/node.dat”文件中“node_id”字段。
- “裸金属服务器的 node_id”即发送添加裸金属服务器的请求返回的“node_id”字段。
  :::

## 安装节点

1. 下载安装脚本：http://112.192.16.27:9000/dbc/install_update_script/mainnet/install_baremetal.sh
2. 运行安装脚本:

```
sudo bash ./install_baremetal.sh 安装目录
```

安装脚本会自动安装 IPMI 工具，并且会像安装 DBC 客户端节点的脚本一样，需要输入 2 个端口号。

## 升级节点

1. 下载升级脚本：http://112.192.16.27:9000/dbc/install_update_script/mainnet/update_baremetal.sh
2. 运行升级脚本：

```
sudo bash update_baremetal.sh 安装目录
```

## 添加裸金属服务器

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal/add
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    // 裸金属节点的 node_id
    "ccd9a2118ba3c95cd458302601f15281edc39d72dcf11a07527893d97ac1a573"
  ],
  "additional": {
    // 裸金属服务器的信息列表
    "bare_metal_nodes": [
      {
        // 机器供应商的识别裸金属的唯一ID，必填。
        "uuid": "3156995b-da18-4268-9734-f8d168e90a7d",
        // 裸金属服务器给用户提供的连接方式，必填。建议固定IP地址。
        "ip": "175.221.204.110",
        // 裸金属服务器的操作系统，非必填。
        "os": "Ubuntu 20.04.3 LTS (Focal Fossa) 5.4.0-121-generic GNU/Linux",
        // 机器所有者自定义的描述，非必填。
        "desc": "在xxx平台租用的裸金属服务器，用于xxx业务，机房id是9f01ca9c-38bd-46a9-9637-dac92b352a63",
        // ipmi的主机标识，必填。建议固定IP地址。
        "ipmi_hostname": "192.168.0.110",
        // ipmi的用户名，必填。
        "ipmi_username": "admin",
        // ipmi的用户密码，必填。
        "ipmi_password": "dbtu2017",
        // ipmi的端口号，非必填。v0.4.0.9 版本增加。
        "ipmi_port": 623
      }
    ]
  }
}
```

- 返回示例：

```json
{
  "errcode": 0,
  "message": {
    "bare_metal_nodes": [
      {
        "node_id": "fcf2cd8b99958606d260ca00c5ac00c88c242bcf8eb38e7cc3f29e9719a73f39",
        "uuid": "3156995b-da18-4268-9734-f8d168e90a7d"
      }
    ]
  }
}
```

## 查询裸金属服务器

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    // 裸金属节点的node_id
    "ccd9a2118ba3c95cd458302601f15281edc39d72dcf11a07527893d97ac1a573"
  ],
  "additional": {}
}
```

- 返回示例：

```json
{
  "errcode": 0,
  "message": {
    "bare_metal_nodes": [
      {
        "node_id": "fcf2cd8b99958606d260ca00c5ac00c88c242bcf8eb38e7cc3f29e9719a73f39",
        "node_private_key": "4c2e7133834d6d7dd35088beda5556215f6f5b15d2cd3c3153f117aaeec2c28b",
        "uuid": "3156995b-da18-4268-9734-f8d168e90a7d",
        "ip": "175.221.204.110",
        "os": "Ubuntu 20.04.3 LTS (Focal Fossa) 5.4.0-121-generic GNU/Linux",
        "description": "在xxx平台租用的裸金属服务器，用于xxx业务，机房id是9f01ca9c-38bd-46a9-9637-dac92b352a63",
        "ipmi_hostname": "192.168.0.110",
        "ipmi_username": "admin",
        "ipmi_password": "dbtu2017"
      }
    ]
  }
}
```

## 裸金属服务器上链

使用上面查询到的"node_id"和"node_private_key"，将裸金属服务器上链。参考[机器上链步骤](https://deepbrainchain.github.io/DBC-Wiki/onchain-guide/bonding-machine.html)

上链后，就可以用像租用普通算力机器一样在链上租用裸金属服务器。

:::tip 注意！
裸金属服务器上链用到的 “node_id” 即添加裸金属服务器的请求返回的“node_id”，"node_private_key"则由上面的查询裸金属服务器获取。
:::

## 裸金属服务器的使用

在链上租用裸金属服务器，就可以查询到它的机器信息，使用机器信息中的 IP 和端口进行连接(ssh 或者 Windows 的远程连接工具)。

如果裸金属服务器没有开机，则可以通过发送请求控制其电源开机。

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal/power
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    // 裸金属服务器的 node_id
    "fcf2cd8b99958606d260ca00c5ac00c88c242bcf8eb38e7cc3f29e9719a73f39"
  ],
  "additional": {
    // 电源控制命令
    // "on"     - 开机
    // "off"    - 关机
    // "reset"  - 重启
    // "status" - 获取电源状态
    "command": "on"
  },
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

其他 API 接口请参考[裸金属节点操作](https://deepbrainchain.github.io/DBC-Wiki/install-update-dbc-node/dbc-client-api/http-api.html#%E8%A3%B8%E9%87%91%E5%B1%9E%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C)
