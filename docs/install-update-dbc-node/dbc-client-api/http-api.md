# HTTP客户端请求API
:::tip 注意！
以下HTTP请求其中的dbc_client_ip和dbc_client_port为用户自己部署的DBC客户端访问地址
:::

---

## 1. 查询GPU节点机器配置信息
>`请求方式`：POST
>
>`请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/mining_nodes
>
>`请求body`：
>    ```
>    {
>        "peer_nodes_list": [
>            // 请求机器的node_id
>            "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>        ],
>        "additional": {
>
>        }
>    }
>    ```
示例：
<img src="./assets/query_machine_info.png" width = "500" height = "160"  align=center />

<br/>

## 2. 租用者查询获取session_id
>`请求方式`：POST
>
>`请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/mining_nodes/session_id
>
>`请求body`：
>    ```
>    {
>        "peer_nodes_list": [
>            // 请求机器的node_id
>            "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>        ],
>        "additional": {
>
>        },
>       //身份认证信息，使用租用者签名或者多签账户签名（参考HTTP请求格式说明），两者选一
>       ...
>    }
>    ```
示例（此处使用的是租用者签名，也可以使用多签账户签名）：
<img src="./assets/query_session_id.png" width = "500" height = "180"  align=center />

<br/>

## 3. 创建虚拟机
>`请求方式`：POST
>
>`请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/start
>
>`请求body`：
>    ```
>    {
>        "peer_nodes_list": [
>            // 请求机器的node_id
>            "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>        ],
>        "additional": {
>            // 登录虚拟机时的端口号（每个虚拟机设置一个不同的值）
>            "ssh_port": "5684",
>            // 镜像名字
>            "image_name": "ubuntu.qcow2",
>            // gpu数量（大于等于 0）
>            "gpu_count": "0",
>            // cpu数量（大于0）
>            "cpu_cores": "4",
>            // 内存大小（大于0，单位：G）
>            "mem_size": "8",
>            // 磁盘大小（大于0，单位：G）
>            "disk_size": "10",
>            // 使用vnc连接该虚拟机时的端口号（每个虚拟机设置一个不同的值）
>            "vnc_port": "5904"
>        },
>
>        "session_id": "租用者分发的session_id",
>        "session_id_sign": "租用者分发的session_id_sign"
>    }
>    ```
示例：
<img src="./assets/create_task.png" width = "500" height = "240"  align=center />

* 创建过程的时间长短，会根据配置的不同而不同，大约在五分钟到十五分钟之间。
* 可以通过请求`虚拟机详细信息`，查询到虚拟机`登录方式`以及虚拟机的`当前状态`（当状态值为"creating"，表示虚拟机正在创建过程中）

<br/>

## 4. 查询虚拟机详细信息
>`请求方式`：POST
>
>`请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/<要查询的task_id值>
>
>`请求body`：
>   ```
>   {
>       "peer_nodes_list": [
>           // 请求机器的node_id
>           "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>       ],
>       "additional": {
>            
>       },
>
>       "session_id": "租用者分发的session_id",
>       "session_id_sign": "租用者分发的session_id_sign"
>  }
>  ```

示例：
<img src="./assets/query_task_info.png" width = "500" height = "240"  align=center />

## 5. 查询虚拟机列表
>`请求方式`：POST
>
>`请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks
>
>`请求body`：
>   ```
>   {
>       "peer_nodes_list": [
>           // 请求机器的node_id
>           "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>       ],
>       "additional": {
>            
>       },
>
>       "session_id": "租用者分发的session_id",
>       "session_id_sign": "租用者分发的session_id_sign"
>  }
>  ```
示例：
<img src="./assets/list_task.png" width = "500" height = "200"  align=center />

## 6. 删除虚拟机
>`请求方式`：POST
>
>`请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/<要删除的task_id值>
>
>`请求body`：
>   ```
>   {
>       "peer_nodes_list": [
>           // 请求机器的node_id
>           "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>       ],
>       "additional": {
>            
>       },
>
>       "session_id": "租用者分发的session_id",
>       "session_id_sign": "租用者分发的session_id_sign"
>  }
>  ```
示例：
<img src="./assets/delete_task.png" width = "500" height = "200"  align=center />

