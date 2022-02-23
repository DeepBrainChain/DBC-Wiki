# 虚拟机监控的HTTP客户端API
:::tip 注意！
以下HTTP请求其中的dbc_client_ip和dbc_client_port为用户自己部署的DBC客户端访问地址
:::

---
### 1. 查询监控服务列表
>`请求方式`：POST
>
>`请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/monitor
>
>`请求body`：
>    ```json
>    {
>        "peer_nodes_list": [
>            // GPU节点的node_id
>            "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>        ],
>        "additional": {
>
>        },
>
>        "session_id": "租用者分发的session_id",
>        "session_id_sign": "租用者分发的session_id_sign"
>    }
>    ```
>
>`返回结果示例`：
>    ```json
>    {
>        "errcode": 0,
>        "message": {
>            "servers": ["116.169.53.132:10051"]
>        }
>    }
>    ```

### 2. 设置监控服务列表
>`请求方式`：POST
>
>`请求URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/monitor/set
>
>`请求body`：
>    ```json
>    {
>        "peer_nodes_list": [
>            // GPU节点的node_id
>            "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>        ],
>        "additional": {
>            "servers" : ["116.169.53.132:10051"]
>        },
>
>        "session_id": "租用者分发的session_id",
>        "session_id_sign": "租用者分发的session_id_sign"
>    }
>    ```
>
>`返回结果示例`：
>    ```json
>    {
>        "errcode": 0,
>        "message": "ok"
>    }
>    ```

::: warning
"additional"中的"servers"字段是个数组，用户最多可以填写两个服务，格式参考:["ip:port","ip:port"]。

假如需要清空监控服务，数组为空即可，例如:[]。
:::
