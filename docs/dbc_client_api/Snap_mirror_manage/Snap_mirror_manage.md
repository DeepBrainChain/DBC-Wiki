### 快照/镜像管理

------

#### 1.创建快照(创建快照是请确保虚拟机为关闭状态)：

`请求方式`：POST

`请求url`：http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/<task_id>/create

`请求body`:
>    ```
>    {
>
>       "peer_nodes_list": [
>
>        //请求的机器id
> 
>     "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
>
>   ],
>
>      "additional": {
>
>      "snapshot_name":"snap2",    //自定义的镜像名
>
>     "description":"finish hello world",  // 自定义的镜像描述（可不写）
> 
>     "disks":[  //选择磁盘创建（可以不写，如果没有"disks"，则默认对所有磁盘做外部增量快照，快照文件由libvirt自动生成）
>
>      {
>
>        "disk_name":"vda",   //磁盘名称
>
>        "snapshot_type":"external"  //external创建外部快照
>
>      },
>
>      {
>
>        "disk_name":"vdb",  //磁盘名称
>
>        "snapshot_type":"no"  //no不创建快照
>
>      }
>
>    ]
>
>  },
>
>  "session_id": "租用者分发的session_id",
>
>   "session_id_sign":"租用者分发的session_id_sign"
>
>     }
>    ```
实例：

![create_snap](create_snap.png)

#### 2.查看快照列表

`请求方式`：POST

`请求url`：http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/<task_id>

`请求body`:
>    ```
> {
>
>  "peer_nodes_list": [
>
>    // 请求的机器id
>
>    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
>
>  ],
>
>  "additional": {
>
>  },
>
>   "session_id": "租用者分发的session_id",
>
>   "session_id_sign":"租用者分发的session_id_sign"
>
>}
>    ```
实例：

![snap_list](snap_list.png)

#### 3.查看快照详情信息

`请求方式`：POST

`请求url`：http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/<task_id>/<snap_name>

`请求body`:
>    ```
> {
>
>  "peer_nodes_list": [
>
>    // 请求的机器id
>
>    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
>
>  ],
>
>  "additional": {
>
>  },
>
>   "session_id": "租用者分发的session_id",
>
>   "session_id_sign":"租用者分发的session_id_sign"
>
>}
>    ```

实例：![snap_list](snap_list.png)

#### 4.查询镜像管理中心的镜像列表(查看所有上传的镜像)

`请求方式`：POST

`请求url`：http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images

`请求body`:
>    ```
>
>  "peer_nodes_list": [
>
>  ],
>
>  "additional": {
>
>  }
>
>}
>    ```
实例：

![all_images](all_images.png)

#### 5.上传镜像

`请求方式`：POST

`请求url`：http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/upload/<images_name>

`请求body`:
>    ```
> {
>
>  "peer_nodes_list": [
>
>    // 请求的机器id
>
>    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
>
>  ],
>
>  "additional": {
>
>  },
>
>   "session_id": "租用者分发的session_id",
>
>   "session_id_sign":"租用者分发的session_id_sign"
>
>}
>    ```

实例：

![snap_list](snap_list.png)

#### 6.下载镜像

`请求方式`：POST

`请求url`：http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/download/<images_name>

`请求body`:	
>    ```
> {
>
>  "peer_nodes_list": [
>
>    // 请求的机器id
>
>    "80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965"
>
>  ],
>
>  "additional": {
>
>  },
>
>   "session_id": "租用者分发的session_id",
>
>   "session_id_sign":"租用者分发的session_id_sign"
>
>}
>    ```

实例：

![snap_list](snap_list.png)
