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
        "ipmi_password": "dbtu2017",
        "deeplink_device_id": "123456789",
        "deeplink_device_password": "******"
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

## 云网吧

在云网吧场景中，一台 GPU 机器以裸金属服务器的方式上链后，想要获得电竞级的游戏体验，还需要使用基于云游戏的低延迟远程控制软件 [DeepLink](https://deeplink.cloud/)。

相应的，使用 DeepLink 远程控制，需要获得 GPU 机器上运行的 DeepLink 软件的设备码和设备验证码(后面统称为 DeepLink 设备信息)。为此，我们增加通过 dbc 节点来查询 DeepLink 设备信息的接口。

为了保证安全，建议云网吧场景中的 GPU 机器每次开机后都有不同的设备验证码，并且在开机后的第一时间使用设置 DeepLink 设备信息的接口将设备信息告知 dbc 的裸金属节点。

另外，需要将裸金属节点的配置文件 `dbc_baremetal_node/conf/core.conf` 中的 `http_ip=127.0.0.1` 修改为 `http_ip=0.0.0.0`，这样设置将使得裸金属节点可以直接接受 HTTP 请求。

当 GPU 机器和 dbc 的裸金属节点位于同一个网络中的时候，可以直接使用裸金属节点的 HTTP 服务来获取/设置设备信息，而且此时的请求不需要 `session_id` 和 `session_id_sign` 参数。当租用人通过客户端节点的 HTTP 服务查询设备信息时，就必需带有 `session_id` 和 `session_id_sign` 参数了。

具体的使用流程如下:
1. 在 GPU 机器开机后，云网吧的服务程序第一时间调用裸金属节点的设置 DeepLink 设备信息接口。

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_baremetal_ip}}:{{dbc_baremetal_port}}/api/v1/deeplink/set
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    // GPU 机器对应的 node_id
    "fcf2cd8b99958606d260ca00c5ac00c88c242bcf8eb38e7cc3f29e9719a73f39"
  ],
  "additional": {
    "device_id": "123456789",
    "device_password": "aAbBcC"
  }
}
```

- 返回示例：

```json
{
  "errcode": 0,
  "message": "ok"
}
```

注意此请求的 URL 是 `http://{{dbc_baremetal_ip}}:{{dbc_baremetal_port}}/api/v1/deeplink/set`，而不是 `http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/deeplink/set`，而且请求内容不需要 `session_id` 和 `session_id_sign` 参数。

同理，此时也可以调用 `http://{{dbc_baremetal_ip}}:{{dbc_baremetal_port}}/api/v1/deeplink` 查询裸金属节点的设备信息。

2. 租用人查询 DeepLink 设备信息。

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/deeplink
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    // GPU 机器对应的 node_id
    "fcf2cd8b99958606d260ca00c5ac00c88c242bcf8eb38e7cc3f29e9719a73f39"
  ],
  "additional": {},
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

- 返回示例：

```json
{
  "errcode": 0,
  "message": {
    "device_id": "123456789",
    "device_password": "aAbBcC"
  }
}
```

注意此请求的 URL 是 `http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/deeplink`，而且请求内容需要 `session_id` 和 `session_id_sign` 参数。
