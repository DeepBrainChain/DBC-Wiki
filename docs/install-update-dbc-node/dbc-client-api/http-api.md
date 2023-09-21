# HTTP 客户端请求 API

:::tip 注意！
以下 HTTP 请求其中的 dbc_client_ip 和 dbc_client_port 为用户自己部署的 DBC 客户端访问地址
:::

---

## GPU 节点管理

### 1. 查询 GPU 节点机器配置信息

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/mining_nodes
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {}
> }
> ```
>
> 示例：
> <img src="./assets/query_machine_info.png" width = "500" height = "160"  align=center />

<br/>

### 2. 租用者查询获取 session_id

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/mining_nodes/session_id
>
> `请求body`：
>
> ```json
> {
>     "peer_nodes_list": [
>         //GPU节点的node_id
>         "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>     ],
>     "additional": {
>
>     },
>    //身份认证信息，使用租用者签名或者多签账户签名（参考HTTP请求格式说明），两者选一
>    ...
> }
> ```
>
> 示例（此处使用的是租用者签名，也可以使用多签账户签名）：
> <img src="./assets/query_session_id.png" width = "500" height = "180"  align=center />

<br/>

## 虚拟机管理

### 1. 创建虚拟机

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/start
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {
>     // 镜像名字
>     "image_name": "ubuntu.qcow2",
>     // 描述
>     "desc": "...",
>     // 操作系统类型: linux、windows (默认值：linux)
>     "operation_system": "linux",
>     // 引导方式:（默认值：legacy）
>     //   linux系统设置: legacy
>     // windows系统设置: uefi
>     //        pxe方式: pxe
>     "bios_mode": "legacy",
>     // 远程登录linux虚拟机，ssh端口号（linux）
>     "ssh_port": "5684",
>     // 远程登录windows虚拟机，rdp端口号（windows）
>     "rdp_port": "5685",
>     // vnc连接端口号
>     "vnc_port": "5904",
>     //自定义端口映射
>     // [
>     //    宿主机的123转发到虚拟机的123
>     //    "tcp/udp,123",
>     //    宿主机的111转发到虚拟机的222
>     //    "tcp/udp,111:222",
>     //    宿主机的333-444转发到虚拟机的444
>     //    "tcp/udp,333-444",
>     //    宿主机的[555-666]转发到虚拟机的[777-888]
>     //    "tcp/udp,555-666:777-888"
>     // ]
>     "custom_port": [],
>
>     // gpu数量（大于等于 0）
>     "gpu_count": "2",
>     // cpu数量（大于0）
>     "cpu_cores": "8",
>     // 内存大小（大于0，单位：G）
>     "mem_size": "8",
>     // 磁盘大小（大于0，单位：G）
>     "disk_size": "10",
>     // 已存在的数据盘文件（如：xxx.qcow2）
>     "data_file_name": "xxx.qcow2",
>
>     // 不同虚拟机之间互相传输的组播地址,范围为224.0.0.0~239.0.0.0
>     // 添加多组播地址续在括号中用","相隔,也可不填
>     "multicast": ["230.0.0.1:5558"],
>     //内网名称（创建虚拟机网络时填的名称）
>     "network_name": "test",
>     // 公网ip地址
>     "public_ip": "",
>     // 安全组
>     // [
>     //    使 TCP 端口 22 (ssh) 和 3389 (rdp) 可访问
>     //    "in,tcp,22,0.0.0.0/0,accept",
>     //    "in,tcp,3389,0.0.0.0/0,accept",
>     //    接受所有流出虚拟机的流量
>     //    "out,all,all,0.0.0.0/0,accept",
>     //    丢弃其他所有流入虚拟机的流量
>     //    "in,all,all,0.0.0.0/0,drop"
>     // ]
>     "network_filters": []
>   },
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```
>
> 示例：
> <img src="./assets/create_task.png" width = "500" height = "240"  align=center />

- 创建过程的时间长短，会根据配置的不同而不同，大约需要几分钟时间。
- 可以通过请求`虚拟机详细信息`，查询到虚拟机`登录方式`以及虚拟机的`当前状态`（当状态值为"creating"，表示虚拟机正在创建过程中）

<br/>

### 2. 查询虚拟机详细信息

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/<要查询的 task_id 值>
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```

示例：
<img src="./assets/query_task_info.png" width = "500" height = "240"  align=center />

### 3. 查询虚拟机列表

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```
>
> 示例：
> <img src="./assets/list_task.png" width = "500" height = "200"  align=center />

### 4. 关闭虚拟机(shutdown)

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/shutdown/<要停止的 task_id 值>
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```
>
> 示例：
> <img src="./assets/stop_task.jpg" width = "500" height = "200"  align=center />

### 5. 关闭虚拟机(强制断电)

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/poweroff/<要停止的 task_id 值>
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```
>
> 示例：
> <img src="./assets/stop_task.jpg" width = "500" height = "200"  align=center />

### 6. 启动虚拟机

> **唤醒处于睡眠状态的虚拟机，也是用此接口**
>
> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/start/<要启动的 task_id 值>
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```
>
> 示例：
> <img src="./assets/start_task.jpg" width = "500" height = "200"  align=center />

### 7. 删除虚拟机

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/delete/<要删除的 task_id 值>
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```
>
> 示例：
> <img src="./assets/delete_task.png" width = "500" height = "200"  align=center />

### 8. 重启虚拟机

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/restart/<要重启的 task_id 值>
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```

::: warning
发送重启请求后，管理程序将选择它认为最好的关闭方法。请注意，虚拟机可能会忽略该请求。若要强制重启虚拟机，请给 url 加上 force_reboot 参数，参数等于 true 或者 1 即强制重启，等于 false 或者 0 或者不带参数则仍旧使用上面传统的方式重启。强制重启虚拟机的请求 url 如下：

http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/restart/<要重启的 task_id 值>?force_reboot=true
:::

### 9. 查询虚拟机日志

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/logs/<要查询的 task_id 值>?flag=tail&line_num=10
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```

:::tip 注意！
查询虚拟机日志的请求 url 有两个参数，flag 表示查询日志的方向，参数等于 tail 即从日志文件的尾部开始查询，等于 head 即从日志文件的头部开始查询。line_num 表示要查询的日志行数，如果超过文件的实际行数，则以文件实际行数为准。最后，此请求最多返回 1024 个字节，超出范围的日志会被截断。
:::

### 10. 修改虚拟机配置

:::tip
有些修改需要重启虚拟机才能生效
:::

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/modify/<task_id>
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {
>     "new_ssh_port": "5586",
>     "new_vnc_port": "5986",
>     "new_rdp_port": "5786",
>     "new_custom_port": [
>       "tcp,123", // host的123转发到guest的123
>       "udp,111:222", // host的111转发到guest的222
>       "tcp,333-444", // host的333-444转发到guest的444
>       "udp,555-666:777-888" // host的[555-666]转发到guest的[777-888]
>     ],
>     "new_gpu_count": "2", // >= 0
>     "new_cpu_cores": "8", // > 0, 单位:G
>     "new_mem_size": "8",  // > 0, 单位:G
>     "new_public_ip: "",   // 公网ip地址
>     "new_network_filters": []  // 安全组
>   },
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```

### 11. 修改虚拟机登录密码

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/passwd/<task_id>
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {
>     "username": "dbc",
>     "password": "vm123456"
>   },
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```

:::warning

1. 只有正在运行的虚拟机才能修改密码。

2. 虚拟机内必须安装了 qemu guest agent 或者 dbc guest agent 才支持使用此 API 修改密码。

3. Ubuntu 系统默认使用用户名"dbc", windows 系统默认使用用户名"Administrator"，自定义镜像请自行设置用户名。
   :::

<br/>

## 磁盘管理

### 1.查询磁盘列表

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/disk/list/<task_id>
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```

### 2.数据盘扩容

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/disk/resize/<task_id>
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {
>     "disk": "vdb", //盘符
>     "size": 20 //单位: G
>   },
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```

### 3.添加新的数据盘

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/disk/add/<task_id>
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {
>     "size": 20, //单位: G
>     "mount_dir": "/data" //挂载目录，默认：/data
>   },
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```

### 4.删除数据盘

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/disk/delete/<task_id>
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {
>     "disk": "vdb" //盘符
>   },
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```

<br />

## 快照管理

### 1.查询快照列表

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/snapshot/list/<task_id>
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```

### 2.查询快照详细信息

> `请求方式`：POST
>
> `请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/snapshot/list/<task_id>/<snapshot_name>
>
> `请求body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```

### 3.创建快照

:::tip 注意！
创建快照是请确保虚拟机为关闭状态
:::

- 请求方式： POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/create/<task_id>
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    //GPU节点的node_id
    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
  ],
  "additional": {
    "snapshot_name": "snap1", //快照名
    "desc": "...", //描述
    "image_server": "ID_2" //创建的快照上传到此镜像中心
  },
  "session_id": "租用者分发的 session_id",
  "session_id_sign": "租用者分发的 session_id_sign"
}
```

### 4.删除快照

- 请求方式： POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/delete/<task_id>/<snapshot_name>
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    //GPU节点的node_id
    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
  ],
  "additional": {},
  "session_id": "租用者分发的 session_id",
  "session_id_sign": "租用者分发的 session_id_sign"
}
```

<br />

## 镜像管理

### 1. 查询镜像中心 ID 列表

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/servers`
```

- 请求 Body:

```json
{
  "peer_nodes_list": [],
  "additional": {}
}
```

### 2.查询镜像列表

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images`
```

- 请求 Body:

**1. 查询镜像中心的镜像列表**

```json
{
  "peer_nodes_list": [],
  "additional": {
    // 【必填】指定要查询的镜像中心ID
    "image_server": "ID_1"
  }
}
```

**2. 查询 GPU 节点的镜像列表**

```json
{
  "peer_nodes_list": [
    //GPU节点的node_id
    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
  ],
  "additional": {
    // 【可选】指定要查询的镜像中心ID
    "image_server": "ID_1"
  }
}
```

**3. 查询 GPU 节点上某个用户的镜像列表**

```json
{
  "peer_nodes_list": [
    //GPU节点的node_id
    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
  ],
  "additional": {
    // 指定要查询的镜像中心ID
    "image_server": "ID_1"
  },
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

- 实例：

![all_images](./assets/snap_mirror_manage.assets/all_images.png)

### 3.上传镜像

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/upload
```

- 请求 Body:

**1. 将 GPU 节点上的某个镜像上传到镜像中心**

```json
{
  "peer_nodes_list": [
    //GPU节点的node_id
    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
  ],
  "additional": {
    "image_filename": "ubuntu.qcow2",
    // 指定要查询的镜像中心ID
    "image_server": "ID_1"
  },
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

**2. 将客户端节点上的某个镜像上传到镜像中心**

```json
{
  "peer_nodes_list": [],
  "additional": {
    "image_filename": "ubuntu.qcow2",
    // 指定要查询的镜像中心ID
    "image_server": "ID_1"
  }
}
```

- 实例：

![snap_list](./assets/snap_mirror_manage.assets/snap_list.png)

### 4.下载镜像

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/download
```

- 请求 Body:

**从镜像中心下载镜像到 GPU 节点**

```json
{
  "peer_nodes_list": [
    //GPU节点的node_id
    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
  ],
  "additional": {
    // 指定要查询的镜像中心ID
    "image_server": "ID_1",
    "image_filename": "ubuntu.qcow2",
    // 本地存储路径
    "local_dir": "/my_local_dir"
  },
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

- 实例：

![snap_list](./assets/snap_mirror_manage.assets/snap_list.png)

### 5.查询下载进度

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/downloadprogress
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    //GPU节点的node_id
    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
  ],
  "additional": {
    "image_filename": "ubuntu.qcow2"
  },
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

### 6.查询上传进度

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/uploadprogress
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    //GPU节点的node_id
    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
  ],
  "additional": {
    "image_filename": "ubuntu.qcow2"
  },
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

### 7.停止下载

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/download_stop
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    //GPU节点的node_id
    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
  ],
  "additional": {
    "image_filename": "ubuntu.qcow2"
  },
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

### 8.停止上传

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/upload_stop
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    //GPU节点的node_id
    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
  ],
  "additional": {
    "image_filename": "ubuntu.qcow2"
  },
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

### 9.删除镜像文件

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/delete
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    //GPU节点的node_id
    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
  ],
  "additional": {
    "image_filename": "ubuntu.qcow2"
  },
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

## 虚拟机组网

### 1. 创建网络

:::tip 注意！
创建的网络只能在同一机房内使用
:::

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/lan/create
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    // GPU节点的node_id
    "441f631da912b2186a3ef0452430f139cf01641bf4e2dce07e06103d8d70e533"
  ],
  "additional": {
    // 创建网络的名称(6-10位字母或者数字组合)
    "network_name": "testnet",
    // 网段/ 掩码位数
    "ip_cidr": "192.168.66.0/24"
  },
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

### 2. 删除网络

:::tip 注意！
DBC 会自动清理长时间没有虚拟机使用的网络
:::

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/lan/delete/<network_name>
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    // GPU节点的node_id
    "441f631da912b2186a3ef0452430f139cf01641bf4e2dce07e06103d8d70e533"
  ],
  "additional": {},
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

## 裸金属节点操作

想要控制一台裸金属服务器的开关机等操作，需要一台跟裸金属服务器在同一个网络中的 CPU 服务器。在此 CPU 服务器上运行 dbc 的裸金属节点程序，然后将裸金属服务器的相关信息(IP 地址和 IPMI 控制信息)添加到节点中，节点会为裸金属服务器生成一个对应的 "node_id" 加入到 dbc 的网络中，就可以通过 "node_id" 来租用和控制裸金属服务器了。

如需安装 dbc 裸金属节点，请参考 [DBC 裸金属节点](https://deepbrainchain.github.io/DBC-Wiki/install-update-dbc-node/install-update-dbc/dbc-bare-metal-node.html)

### 1. 查询裸金属服务器列表

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    // 裸金属节点的 node_id
    "ccd9a2118ba3c95cd458302601f15281edc39d72dcf11a07527893d97ac1a573"
  ],
  "additional": {},
  // 由裸金属节点的 node_id 和 node_private_key 生成
  "wallet":"ccd9a2118ba3c95cd458302601f15281edc39d72dcf11a07527893d97ac1a573",
  "nonce":"5tYLiAF9vVP8bRqSfV9DfZnizsDNY7dNeEWrSUAY8f1LKiZqBu8zaVs",
  "sign":"3c680ba745af6695981fe2b30aedf6861749f570d9a6fe949930caf4613c225d4a674c33ec3d4af26c20caf871dd0f3a7cb4e0c045f12c211a345781054fc282"
}
```

### 2. 添加裸金属服务器

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
  },
  // 由裸金属节点的 node_id 和 node_private_key 生成
  "wallet":"ccd9a2118ba3c95cd458302601f15281edc39d72dcf11a07527893d97ac1a573",
  "nonce":"5tYLiAF9vVP8bRqSfV9DfZnizsDNY7dNeEWrSUAY8f1LKiZqBu8zaVs",
  "sign":"3c680ba745af6695981fe2b30aedf6861749f570d9a6fe949930caf4613c225d4a674c33ec3d4af26c20caf871dd0f3a7cb4e0c045f12c211a345781054fc282"
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

### 3. 删除裸金属服务器

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal/delete
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    // 裸金属节点的 node_id
    "ccd9a2118ba3c95cd458302601f15281edc39d72dcf11a07527893d97ac1a573"
  ],
  "additional": {
    // 裸金属服务器对应的 node_id 列表
    "bare_metal_node_ids": [
      // 添加裸金属服务器时返回的 node_id
      "8c29b20da3fdb2d6c5ad7c2c85b303d9d337a1b82fa584a6b6cf1303331efd16"
    ]
  },
  // 由裸金属节点的 node_id 和 node_private_key 生成
  "wallet":"ccd9a2118ba3c95cd458302601f15281edc39d72dcf11a07527893d97ac1a573",
  "nonce":"5tYLiAF9vVP8bRqSfV9DfZnizsDNY7dNeEWrSUAY8f1LKiZqBu8zaVs",
  "sign":"3c680ba745af6695981fe2b30aedf6861749f570d9a6fe949930caf4613c225d4a674c33ec3d4af26c20caf871dd0f3a7cb4e0c045f12c211a345781054fc282"
}
```

### 4. 修改裸金属服务器 IPMI 等信息

v0.4.1.1 版本增加。

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal/modify/{{node_id}}
```

URL 中的 node_id 是裸金属服务器对应的node_id，请与 Body 中的 id 做好区分。

- 请求 Body:

```json
{
  "peer_nodes_list": [
    // 裸金属节点的 node_id
    "ccd9a2118ba3c95cd458302601f15281edc39d72dcf11a07527893d97ac1a573"
  ],
  "additional": {
    // 机器供应商的识别裸金属的唯一ID。
    "uuid": "3156995b-da18-4268-9734-f8d168e90a7d",
    // 裸金属服务器给用户提供的连接方式。建议固定IP地址。
    "ip": "175.221.204.110",
    // 裸金属服务器的操作系统。
    "os": "Ubuntu 20.04.3 LTS (Focal Fossa) 5.4.0-121-generic GNU/Linux",
    // 机器所有者自定义的描述。
    "desc": "在xxx平台租用的裸金属服务器，用于xxx业务，机房id是9f01ca9c-38bd-46a9-9637-dac92b352a63",
    // ipmi的主机标识。建议固定IP地址。
    "ipmi_hostname": "192.168.0.110",
    // ipmi的用户名。
    "ipmi_username": "admin",
    // ipmi的用户密码。
    "ipmi_password": "dbtu2017",
    // ipmi的端口号。
    "ipmi_port": 623
  },
  // 由裸金属节点的 node_id 和 node_private_key 生成
  "wallet":"ccd9a2118ba3c95cd458302601f15281edc39d72dcf11a07527893d97ac1a573",
  "nonce":"5tYLiAF9vVP8bRqSfV9DfZnizsDNY7dNeEWrSUAY8f1LKiZqBu8zaVs",
  "sign":"3c680ba745af6695981fe2b30aedf6861749f570d9a6fe949930caf4613c225d4a674c33ec3d4af26c20caf871dd0f3a7cb4e0c045f12c211a345781054fc282"
}
```

### 5. 裸金属服务器电源控制

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal/power
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    // 裸金属服务器对应的 node_id
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

### 6. 修改裸金属服务器引导启动顺序

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal/bootdev
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    // 裸金属服务器对应的 node_id
    "fcf2cd8b99958606d260ca00c5ac00c88c242bcf8eb38e7cc3f29e9719a73f39"
  ],
  "additional": {
    // 引导启动顺序
    // "pxe"    - 从PXE启动
    // "disk"   - 从硬盘启动
    // "cdrom"  - 从CD/DVD启动
    // "bios"   - 启动进入BIOS设置
    "device": "pxe"
  },
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

## DeepLink 设备信息

在云网吧场景中，一台 GPU 机器以裸金属服务器的方式上链后，想要获得电竞级的游戏体验，还需要使用基于云游戏的低延迟远程控制软件 [DeepLink](https://deeplink.cloud/)。

相应的，使用 DeepLink 远程控制，需要获得 GPU 机器上运行的 DeepLink 软件的设备码和设备验证码(后面统称为 DeepLink 设备信息)。为此，我们增加通过 dbc 节点来查询 DeepLink 设备信息的接口。

为了保证安全，建议云网吧场景中的 GPU 机器每次开机后都有不同的设备验证码，并且在开机后的第一时间使用设置 DeepLink 设备信息的接口将设备信息告知 dbc 的裸金属节点。

另外，需要将裸金属节点的配置文件 `dbc_baremetal_node/conf/core.conf` 中的 `http_ip=127.0.0.1` 修改为 `http_ip=0.0.0.0`，这样设置将使得裸金属节点可以直接接受 HTTP 请求。

当 GPU 机器和 dbc 的裸金属节点位于同一个网络中的时候，可以直接使用裸金属节点的 HTTP 服务来获取/设置设备信息，而且此时的请求不需要 `session_id` 和 `session_id_sign` 参数。当租用人通过客户端节点的 HTTP 服务查询设备信息时，就必需带有 `session_id` 和 `session_id_sign` 参数了。

### 1. 查询 DeepLink 设备信息

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

### 2. 设置 DeepLink 设备信息

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/deeplink/set
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
  },
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

- 返回示例：

```json
{
  "errcode": 0,
  "message": "ok"
}
```
