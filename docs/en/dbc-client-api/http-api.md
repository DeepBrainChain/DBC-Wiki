# HTTP client request API
#### ( The dbc_client_ip and dbc_client_port in the following HTTP request are the DBC client access addresses deployed by the user )
---

## 1. Querying GPU Node Machine Configuration Information
>`request method`：POST
>
>`request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/mining_nodes
>
>`request body`：
>    ```
>    {
>        "peer_nodes_list": [
>            // The node_id of the requesting machine
>            "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>        ],
>        "additional": {
>
>        }
>    }
>    ```
Example：
<img src="./assets/query_machine_info.png" width = "500" height = "160"  align=center />

<br/>

## 2. Tenant query to get session_id
>`request method`：POST
>
>`request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/mining_nodes/session_id
>
>`request body`：
>    ```
>    {
>        "peer_nodes_list": [
>            // The node_id of the requesting machine
>            "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>        ],
>        "additional": {
>
>        },
>       //Identity authentication information, use tenant signature or multi-signature account signature (refer to the description of HTTP request format), choose one of the two
>       ...
>    }
>    ```
Example (the tenant's signature is used here, and a multi-signature account signature can also be used)：
<img src="./assets/query_session_id.png" width = "500" height = "180"  align=center />

<br/>

## 3. Create a virtual machine
>`request method`：POST
>
>`request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/start
>
>`request body`：
>    ```
>    {
>        "peer_nodes_list": [
>            // The node_id of the requesting machine
>            "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>        ],
>        "additional": {
>            // The port number when logging into the virtual machine (set a different value for each virtual machine)
>            "ssh_port": "5684",
>            // Image name (fill in according to the image owned by the machine or the image existing in the image management center)
>            "image_name": "ubuntu.qcow2",
>            // Number of gpus (greater than or equal to 0)
>            "gpu_count": "0",
>            // Number of CPUs (greater than 0)
>            "cpu_cores": "4",
>            // Memory size (greater than 0, unit: G)
>            "mem_size": "8",
>            // Disk size (greater than 0, unit: G)
>            "disk_size": "10",
>            // The port number when connecting to this virtual machine using vnc (set a different value for each virtual machine)
>            "vnc_port": "5904"
>        },
>
>        "session_id": "The session_id distributed by the renter",
>        "session_id_sign": "session_id_sign distributed by the renter"
>    }
>    ```
Example：
<img src="./assets/create_task.png" width = "500" height = "240"  align=center />

* The length of the creation process will vary depending on the configuration, ranging from five to fifteen minutes.
* You can query the `login method` of the virtual machine and the `current status` of the virtual machine by requesting `virtual machine details` (when the status value is "creating", it means that the virtual machine is in the process of being created)

<br/>

## 4. Querying Virtual Machine Details
>`request method`：POST
>
>`request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/<task_id value to query>
>
>`request body`：
>   ```
>   {
>       "peer_nodes_list": [
>           // The node_id of the requesting machine
>           "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>       ],
>       "additional": {
>            
>       },
>
>       "session_id": "The session_id distributed by the renter",
>       "session_id_sign": "session_id_sign distributed by the renter"
>  }
>  ```

Example：
<img src="./assets/query_task_info.png" width = "500" height = "240"  align=center />

## 5. Query the list of virtual machines
>`request method`：POST
>
>`request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks
>
>`request body`：
>   ```
>   {
>       "peer_nodes_list": [
>           // The node_id of the requesting machine
>           "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>       ],
>       "additional": {
>            
>       },
>
>       "session_id": "The session_id distributed by the renter",
>       "session_id_sign": "session_id_sign distributed by the renter"
>  }
>  ```
Example：
<img src="./assets/list_task.png" width = "500" height = "200"  align=center />

## 6. delete virtual machine
>`request method`：POST
>
>`request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/tasks/<要删除的task_id值>
>
>`request body`：
>   ```
>   {
>       "peer_nodes_list": [
>           // The node_id of the requesting machine
>           "58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45"
>       ],
>       "additional": {
>            
>       },
>
>       "session_id": "The session_id distributed by the renter",
>       "session_id_sign": "session_id_sign distributed by the renter"
>  }
>  ```
Example：
<img src="./assets/delete_task.png" width = "500" height = "200"  align=center />

