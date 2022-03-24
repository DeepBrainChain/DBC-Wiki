# HTTP client request API for virtual machine monitoring
:::tip
The dbc_client_ip and dbc_client_port in the following HTTP request are the DBC client access addresses deployed by the user
:::

---
### 1. Query the list of monitoring servers
>`request method`：POST
>
>`request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/monitor
>
>`request body`：
>    ```json
>    {
>        "peer_nodes_list": [
>            // node_id of GPU Node
>            "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>        ],
>        "additional": {
>
>        },
>
>        "session_id": "The session_id distributed by the renter",
>        "session_id_sign": "session_id_sign distributed by the renter"
>    }
>    ```
>
>`request result example`：
>    ```json
>    {
>        "errcode": 0,
>        "message": {
>            "servers": ["116.169.53.132:10051"]
>        }
>    }
>    ```

### 2. Set the monitoring server list
>`request method`：POST
>
>`request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/monitor/set
>
>`request body`：
>    ```json
>    {
>        "peer_nodes_list": [
>            // node_id of GPU Node
>            "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>        ],
>        "additional": {
>            "servers" : ["116.169.53.132:10051"]
>        },
>
>        "session_id": "The session_id distributed by the renter",
>        "session_id_sign": "session_id_sign distributed by the renter"
>    }
>    ```
>
>`request result example`：
>    ```json
>    {
>        "errcode": 0,
>        "message": "ok"
>    }
>    ```

::: warning
The "servers" field in "additional" is an array, the user can fill in at most two services, please refer to the format:["ip:port","ip:port"].

If you need to clear the monitoring service, the array can be empty, for example:[].
:::
