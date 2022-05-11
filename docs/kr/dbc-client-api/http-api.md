# HTTP고객측 API요청

**다음 HTTP 요청의 dbc_client_ip 및 dbc_client_port는 사용자 자신이 배포한 DBC 고객측 액세스 주소입니다.**

---

## GPU노드 관리

### 1.GPU노드 기기 설정 정보 확인

요청방식: POST

URL요청: http://<dbc_client_ip>:<dbc_client_port>/api/v1/mining_nodes

body요청:

```json
{
  "peer_nodes_list": [
    //GPU노드의node_id
    "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
  ],
  "additional": {}
}
```

예:
<img src="./assets/query_machine_info.png" width = "500" height = "160"  align=center />

<br/>

### 2. 임대자 session_id 확인 및 획득

요청방식： POST

URL요청： http://<dbc_client_ip>:<dbc_client_port>/api/v1/mining_nodes/session_id

body요청 ：

```
{
  "peer_nodes_list": [
  //GPU노드의 node_id
  "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
  ],
  "additional": {
  },
  //신분 인증 정보，임대자 서명 사용 혹은  다명의계정 서명 사용（HTTP여청 형식 설명 참조 바랍니다），둘중하나 선택
  ...
}
```

예 (이부분은 임대자 서명 사용 해도 되고, 다명의계정 서명 사용해도 됩니다 ) :
<img src="./assets/query_session_id.png" width = "500" height = "180"  align=center />

<br/>

## 가상기기 관리

### 1. 가상기기 생성

요청방식： POST

URL요청： http://<dbc_client_ip>:<dbc_client_port>/api/v1/tasks/start

body요청：

```json
{
  "peer_nodes_list": [
    //GPU노드의node_id
    "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
  ],
  "additional": {
         // 镜像名字
         "image_name": "ubuntu.qcow2",
         // 描述
         "desc": "...",
         // 操作系统类型: linux、windows (默认值：linux)
         "operation_system": "linux",
         // 引导方式:（默认值：legacy）
         //   linux系统设置: legacy
         // windows系统设置: uefi
         //        pxe方式: pxe
         "bios_mode": "legacy",
         // 远程登录linux虚拟机，ssh端口号（linux）
         "ssh_port": "5684",
         // 远程登录windows虚拟机，rdp端口号（windows）
         "rdp_port": "5685",
         // vnc连接端口号
         "vnc_port": "5904",
         //自定义端口映射
         // [
         //    宿主机的123转发到虚拟机的123
         //    "tcp/udp,123",
         //    宿主机的111转发到虚拟机的222
         //    "tcp/udp,111:222",
         //    宿主机的333-444转发到虚拟机的444
         //    "tcp/udp,333-444",
         //    宿主机的[555-666]转发到虚拟机的[777-888]
         //    "tcp/udp,555-666:777-888"
         // ]
         "custom_port": [
             
         ],
 
         // gpu数量（大于等于 0）
         "gpu_count": "2",
         // cpu数量（大于0）
         "cpu_cores": "8",
         // 内存大小（大于0，单位：G）
         "mem_size": "8",
         // 磁盘大小（大于0，单位：G）
         "disk_size": "10",
         // 已存在的数据盘文件（如：xxx.qcow2）
         "data_file_name": "xxx.qcow2",

         // 不同虚拟机之间互相传输的组播地址,范围为224.0.0.0~239.0.0.0
         // 添加多组播地址续在括号中用","相隔,也可不填
         "multicast":["230.0.0.1:5558"]
         //内网名称（创建虚拟机网络时填的名称）
         "network_name": "test",
  },
  "session_id": "임대자가 배포한 session_id",
  "session_id_sign": "임대자가 배포한 session_id_sign"
}
```

예 :
<img src="./assets/create_task.png" width = "500" height = "240"  align=center />

- 생성 프로세스의 시간은 설정 구성에 따라 5분에서 15분까지 진행됩니다.

- 가상 기기 상세 정보를 요청하여 가상 기기의 로그인 방식과 가상 기기의 현재 상태를 조회할 수 있습니다.(상태값이 "creating"이면, 가상기기가 생성 진행중임을 의마합니다 .)

### 2.가상기기 상세정보 확인

요청 방식： POST

URL요청： http://<dbc_client_ip>:<dbc_client_port>/api/v1/tasks/<확인 할task_id값>

body요청：

```json
{
  "peer_nodes_list": [
    //GPU노드의node_id
    "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
  ],
  "additional": {},
  "session_id": "임대자 배포한 session_id",
  "session_id_sign": "임대자 배포한 session_id_sign"
}
```

예:
<img src="./assets/query_task_info.png" width = "500" height = "240"  align=center />

### 3.가상기기 목록 확인

방식 요청： POST

URL 요청： http://<dbc_client_ip>:<dbc_client_port>/api/v1/tasks

body 요청：

```json
{
  "peer_nodes_list": [
    //GPU노드의 node_id
    "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
  ],
  "additional": {},
  "session_id": "임대자 배포한session_id",
  "session_id_sign": "임대자 배포한session_id_sign"
}
```

예:
<img src="./assets/list_task.png" width = "500" height = "200"  align=center />

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

### 6.가상기기 작동

이 인터페이스는 휴면 상태의 가상 머신을 깨우는 데에도 사용됩니다.

방식 요청： POST

URL 요청： http://<dbc_client_ip>:<dbc_client_port>/api/v1/tasks/start/<작동할 task_id값>

body 요청

```json
{
  "peer_nodes_list": [
    //GPU노드의 node_id
    "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
  ],
  "additional": {},
  "session_id": "임대자 배포한session_id",
  "session_id_sign": "임대자 배포한 session_id_sign"
}
```

예:
<img src="./assets/start_task.jpg" width = "500" height = "200"  align=center />

### 7.가상기기 삭제

방식 요청： POST

URL 요청： http://<dbc_client_ip>:<dbc_client_port>/api/v1/tasks/delete/<삭제 할task_id값>

body 요청：

```json
{
  "peer_nodes_list": [
    //GPU노드의 node_id
    "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
  ],
  "additional": {},
  "session_id": "임대자 배포한session_id",
  "session_id_sign": "임대자 배포한 session_id_sign"
}
```

예:
<img src="./assets/delete_task.png" width = "500" height = "200"  align=center />

### 8.가상기기 다시시작

방식 요청： POST

URL 요청： http://<dbc_client_ip>:<dbc_client_port>/api/v1/tasks/restart/<다시 시작할task_id값>

body요청：

```json
{
  "peer_nodes_list": [
    //GPU노드의 node_id
    "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
  ],
  "additional": {},
  "session_id": "임대자 배포한 session_id",
  "session_id_sign": "임대자 배포한 session_id_sign"
}
```

::: warning
**경 보:**
다시 시작 요청을 보낸 후 관리프로그램은 최선이라고 생각하는 종료 방법을 선택합니다. 가상 기기에서 요청을 무시할 수 있습니다. 가상기기를 강제로 다시 시작하려면 url에 force_reboot 파라미터를 추가하십시오. 파라미터가 true 또는 1이면 강제로 다시 시작됩니다. false 또는 0이거나 파라미터가 없으면 상기 전통 방식으로 다시 시작합니다 계. 가상 기기 강제로 다시 시작하기 위한 요청 URL은 다음과 같습니다:

http://<dbc_client_ip>:<dbc_client_port>/api/v1/tasks/restart/<다시 시작할 task_id값>?force_reboot=true
:::

### 9.가상기기 일지 확인

방식 요청： POST

URL 요청： http://<dbc_client_ip>:<dbc_client_port>/api/v1/tasks/logs/<확인할task_id값>?flag=tail&line_num=10

body 요청：

```json
{
  "peer_nodes_list": [
    //GPU노드의 node_id
    "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
  ],
  "additional": {},
  "session_id": "임대자 배포한session_id",
  "session_id_sign": "임대자 배포한session_id_sign"
}
```

:::tip
가상기기 일지 확인을위한 url요청은 2개의 파라미터를 가지고 있으며, 플래그는 일지의 방향을 나타내며, 파라미터가 tail일 경우 일지파일의 끝부분부터 확인 시작하며, head일 경우 일지파일의 시작단계 부터 확인합니다 . line_num은일지 라인의 수를 나타내며 파일의 실제 라인 수를 초과하는 경우 파일의 실제 라인 수로 우선 진행합니다. 마지막으로 이 요청은 최대 1024바이트를 반환하고 범위를 벗어난 일지는 잘립니다.
:::

### 10.가상 머신 구성 수정

:::tip
먼저 가상 머신을 종료해야 합니다.
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
>     "new_mem_size": "8" // > 0, 单位G
>   },
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```

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
>   "additional": {
>
>   },
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
>       "disk": "vdb",  //盘符
>       "size": 20  //单位: G
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
>       "size": 20,  //单位: G
>       "mount_dir": "/data"  //挂载目录，默认：/data
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
>       "disk": "vdb",  //盘符
>   },
>
>   "session_id": "租用者分发的session_id",
>   "session_id_sign": "租用者分发的session_id_sign"
> }
> ```

<br />

## 스냅샷/ 이미지 관리


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
>   "additional": {
>       
>   },
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
>   "additional": {
>       
>   },
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
    "desc": "...",  //描述
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
  "additional": {

  },
  "session_id": "租用者分发的 session_id",
  "session_id_sign": "租用者分发的 session_id_sign"
}
```
<br />

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
    "image_filename": "ubuntu.qcow2",
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
    "image_filename": "ubuntu.qcow2",
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
    "image_filename": "ubuntu.qcow2",
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
    "image_filename": "ubuntu.qcow2",
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
    "image_filename": "ubuntu.qcow2",
  },
  "session_id": "租用者分发的session_id",
  "session_id_sign": "租用者分发的session_id_sign"
}
```

## 虚拟机组网

### 1.创建网络（创建的网络只能在同一机房内使用）

- 请求方式：POST

- 请求 URl：

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
        "network_name":"testnet",
        // 网段/ 掩码位数
        "ip_cidr":"192.168.66.0/24"
    },
    "session_id":"租用者分发的session_id",
    "session_id_sign":"租用者分发的session_id_sign"
}
```

### 2.删除网络（DBC 会自动清理长时间没有虚拟机使用的网络）

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
    "additional": {

    },
    "session_id":"租用者分发的session_id",
    "session_id_sign":"租用者分发的session_id_sign"
}
```
