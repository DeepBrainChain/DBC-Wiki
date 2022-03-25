# HTTP client request API

#### ( The dbc_client_ip and dbc_client_port in the following HTTP request are the DBC client access addresses deployed by the user )

---

## GPU Node Manage

### 1. Querying GPU Node Machine Configuration Information

> `request method`：POST
>
> `request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/mining_nodes
>
> `request body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     // node_id of GPU Node
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {}
> }
> ```
>
> Example：
> <img src="./assets/query_machine_info.png" width = "500" height = "160"  align=center />

<br/>

### 2. Tenant query to get session_id

> `request method`：POST
>
> `request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/mining_nodes/session_id
>
> `request body`：
>
> ```json
> {
>     "peer_nodes_list": [
>         // node_id of GPU Node
>         "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>     ],
>     "additional": {
>
>     },
>    //Identity authentication information, use tenant signature or multi-signature account signature (refer to the description of HTTP request format), choose one of the two
>    ...
> }
> ```
>
> Example (the tenant's signature is used here, and a multi-signature account signature can also be used)：
> <img src="./assets/query_session_id.png" width = "500" height = "180"  align=center />

<br/>

## Virtual Machine Manage

### 1. Create a virtual machine

> `request method`：POST
>
> `request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/start
>
> `request body`：
>
> ```json
>    {
>        "peer_nodes_list": [
>            // node_id of GPU Node
>            "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>        ],
>        "additional": {
>            // remote login linux virtual machine, ssh port (linux)
>            "ssh_port": "5684",
>            // remote login windows virtual machine, rdp port (windows)
>            "rdp_port": "5685",
>            // vnc connect port
>            "vnc_port": "5904",
>            "custom_port": [
>               // 宿主机的123转发到虚拟机的123
>               "tcp/udp,123",
>               // 宿主机的111转发到虚拟机的222
>               "tcp/udp,111:222",
>               // 宿主机的333-444转发到虚拟机的444
>               "tcp/udp,333-444",
>               // 宿主机的[555-666]转发到虚拟机的[777-888]
>               "tcp/udp,555-666:777-888"
>            ],
>            // image name
>            "image_name": "ubuntu.qcow2",
>            // custom image name/ID, such as: my-ubuntu-1804
>            "custom_image_name": "my-ubuntu-1804"
>            // operation system type: ubuntu、win
>            "operation_system": "ubuntu",
>            // bios mode:
>            //   linux: "legacy"
>            // windows: "uefi"
>            "bios_mode": "legacy",
>            // multicast address: 224.0.0.0~239.0.0.0
>            "multicast":["230.0.0.1:5558"]
>            // Number of gpus (greater than or equal to 0)
>            "gpu_count": "0",
>            // Number of CPUs (greater than 0)
>            "cpu_cores": "4",
>            // Memory size (greater than 0, unit: G)
>            "mem_size": "8",
>            // Disk size (greater than 0, unit: G)
>            "disk_size": "10",
>        },
>
>        "session_id": "The session_id distributed by the renter",
>        "session_id_sign": "session_id_sign distributed by the renter"
>    }
> ```
>
> Example：
> <img src="./assets/create_task.png" width = "500" height = "240"  align=center />

- The length of the creation process will vary depending on the configuration, ranging from five to fifteen minutes.
- You can query the `login method` of the virtual machine and the `current status` of the virtual machine by requesting `virtual machine details` (when the status value is "creating", it means that the virtual machine is in the process of being created)

<br/>

### 2. Querying Virtual Machine Details

> `request method`：POST
>
> `request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/<task_id value to query>
>
> `request body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     // node_id of GPU Node
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "The session_id distributed by the renter",
>   "session_id_sign": "session_id_sign distributed by the renter"
> }
> ```

Example：
<img src="./assets/query_task_info.png" width = "500" height = "240"  align=center />

### 3. Query the list of virtual machines

> `request method`：POST
>
> `request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks
>
> `request body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     // node_id of GPU Node
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "The session_id distributed by the renter",
>   "session_id_sign": "session_id_sign distributed by the renter"
> }
> ```
>
> Example：
> <img src="./assets/list_task.png" width = "500" height = "200"  align=center />

### 4. Stop Virtual Machine

> `request method`：POST
>
> `request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/stop/<task_id>
>
> `request body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     // node_id of GPU Node
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "The session_id distributed by the renter",
>   "session_id_sign": "session_id_sign distributed by the renter"
> }
> ```
>
> Example：
> <img src="./assets/stop_task.jpg" width = "500" height = "200"  align=center />

### 5. Start Virtual Machine

> **Wakes a sleeping virtual machine， also use this api**
>
> `request method`：POST
>
> `request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/start/<task_id>
>
> `request body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     // node_id of GPU Node
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "The session_id distributed by the renter",
>   "session_id_sign": "session_id_sign distributed by the renter"
> }
> ```
>
> Example：
> <img src="./assets/start_task.jpg" width = "500" height = "200"  align=center />

### 6. delete virtual machine

> `request method`：POST
>
> `request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/delete/<task_id>
>
> `request body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     // node_id of GPU Node
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "The session_id distributed by the renter",
>   "session_id_sign": "session_id_sign distributed by the renter"
> }
> ```
>
> Example：
> <img src="./assets/delete_task.png" width = "500" height = "200"  align=center />

### 7. Restart Virtual Machine

> `request method`：POST
>
> `request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/restart/<task_id>
>
> `request body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     // node_id of GPU Node
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>   "session_id": "The session_id distributed by the renter",
>   "session_id_sign": "session_id_sign distributed by the renter"
> }
> ```
>
> ::: warning
> After sending the restart request, the hypervisor will choose what it thinks is the best shutdown method. Note that the request may be ignored by the virtual machine. To force restart the virtual machine, please add the force_reboot parameter to the url. If the parameter is equal to true or 1, it will be forced to restart. If it is equal to false or 0 or no parameter, it will still use the above traditional method to restart. The request url to force restart the virtual machine is as follows:

http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/restart/<task_id>?force_reboot=true
:::

### 8. Query Virtual Machine Logs

> `request method`：POST
>
> `request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/logs/<task_id>?flag=tail&line_num=10
>
> `request body`：
>
> ```json
> {
>   "peer_nodes_list": [
>     //GPU节点的node_id
>     "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>   ],
>   "additional": {},
>
>   "session_id": "The session_id distributed by the renter",
>   "session_id_sign": "session_id_sign distributed by the renter"
> }
> ```

:::tip
The request url for querying virtual machine logs has two parameters. The flag indicates the direction of the query log. If the parameter is equal to tail, the query starts from the end of the log file. If it is equal to head, the query starts from the head of the log file. line_num indicates the number of log lines to be queried. If it exceeds the actual number of lines in the file, the actual number of lines in the file shall prevail. Finally, this request returns up to 1024 bytes, and logs that are out of range are truncated.
:::

### 9. 修改虚拟机配置

:::tip
需要先关闭虚拟机
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
>     "new_cpu_cores": "8", // > 0, 单位G
>     "new_mem_size": "8", // > 0, 单位G
>     "increase_disk_size": "10" // > 0, 单位G
>   },
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```

<br/>

## Snapshot Manage

### 1.创建快照

:::tip 注意！
创建快照是请确保虚拟机为关闭状态
:::

- 请求方式： POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/<task_id>/create
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    //GPU节点的node_id
    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
  ],
  "additional": {
    "snapshot_name": "snap2", //自定义的镜像名
    "description": "finish hello world", // 自定义的镜像描述（可不写）
    "disks": [
      //选择磁盘创建（可以不写，如果没有"disks"，则默认对所有磁盘做外部增量快照，快照文件由 libvirt 自动生成）
      {
        "disk_name": "vda", //磁盘名称
        "snapshot_type": "external" //external创建外部快照
      },
      {
        "disk_name": "vdb", //磁盘名称
        "snapshot_type": "no" //no不创建快照(不填写默认使用external)
      }
    ]
  },
  "session_id": "租用者分发的 session_id",
  "session_id_sign": "租用者分发的 session_id_sign"
}
```

- 实例：

![create_snap](./assets/snap_mirror_manage.assets/create_snap.png)

### 2.查看快照列表

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/<task_id>
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    //GPU节点的node_id
    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
  ],
  "additional": {},
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

- 实例：

![snap_list](./assets/snap_mirror_manage.assets/snap_list.png)

### 3.查看快照详情信息

- 请求方式：POST

- 请求 URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/<task_id>/<snap_name>
```

- 请求 Body:

```json
{
  "peer_nodes_list": [
    //GPU节点的node_id
    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
  ],
  "additional": {},
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

- 实例：

![snap_list](./assets/snap_mirror_manage.assets/snap_list.png)

## Image Manage

### 1. 查询镜像中心 ID 列表

- 请求方式：POST

- 请求 URl：

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

- 请求 URl：

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
    // 【选填】指定要查询的镜像中心ID
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
