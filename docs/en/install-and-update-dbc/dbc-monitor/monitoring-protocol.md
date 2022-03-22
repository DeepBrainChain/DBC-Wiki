# monitoring protocol
Server - dbc data exchange is based on JSON format, Request and response messages must begin with header and data length.

This agreement and documentation mainly refer to [zabbix doc](https://www.zabbix.com/documentation/5.0/zh/manual/appendix/protocols).

## header 和 data length
The header is present in response and request messages between Zabbix components. It is required to determine the length of message, if it is compressed or not and the format of message length fields. The header consists of:
```
<HEADER> - "ZBXD\x01" (5 bytes)
<DATALEN> - data length (8 bytes). 1 will be formatted as 01/00/00/00/00/00/00/00 (eight bytes, 64 bit number in little-endian format)
```

## Protocol conversion example
```
/**
 * @brief Convert JSON string to protocol data required by zabbix
 * @param json_data JSON format string
 * 
 * @return A string that conforms to the zabbix protocol
 */
std::string formatJsonData(const std::string &json_data) {
  std::string data = "ZBXD\x01";
  unsigned long long data_len = json_data.length();
  char* arrLen = reinterpret_cast<char*>(&data_len);
  data.append(arrLen, 8);
  data.append(json_data);
  return data;
}
```

## data exchange process
1. dbc opens a TCP connection(Known server ip and port)；
2. dbc send protocol-compliant data(`<HEADER><DATALEN><JSON>`)；
3. server process the data and return the result；
4. dbc parse the returned result；
5. TCP connection is closed.

## Active checks
>`request purpose`：dbc asks the server whether to receive monitoring data of a virtual machine
>
>`request body`：
>    ```
>    <HEADER><DATALEN>{
>        "request":"active checks",
>        // hostname represents the ID of the virtual machine
>        "host":"<hostname>"
>    }
>    ```
>
>`request result example`：
>    ```
>    <HEADER><DATALEN>{
>        "response":"success",
>        // The data part is omitted, and no verification is performed for the time being
>        "data":[......]
>    }
>    ```

::: warning
The server must respond successfully. If the "response" field is "success", it means success, otherwise it will be regarded as failure.
:::

## Send collected monitoring data
>`request purpose`：dbc sends the collected virtual machine monitoring data to the server
>
>`request body`：
>    ```
>    <HEADER><DATALEN>{
>        "request":"agent data",
>        "data":[
>            {
>                "host":"<ID of the virtual machine>",
>                "key":"dom.state",
>                "value":"running",
>                "clock":1400675595,
>                "ns":76808644,
>            },
>            ......
>            {
>                "host":"<ID of the virtual machine>",
>                "key":"version",
>                "value":"0.3.9.2",
>                "clock":1400675595,
>                "ns":77053975,
>            }
>        ],
>        "clock": 1400675595,
>        "ns": 78211329
>    }
>    ```
>
>`request result example`：
>    ```
>    <HEADER><DATALEN>{
>        "response":"success",
>        // The info part is not checked
>        "info":"processed: 3; failed: 0; total: 3; seconds spent: 0.003534"
>    }
>    ```

## zabbix server settings
If the server side wants to receive the data sent by dbc, it needs to do the following settings：
1. Import the dbc item template "DBC VM Template" in zabbix；
2. Create a virtual machine；
3. Use the template "DBC VM Template" to add a host in zabbix, fill in the id of the virtual machine for the host name；
4. After the virtual machine is created, the monitoring data can be sent.
  
  DBC VM Template:
  https://github.com/DeepBrainChain/DBC-Wiki/blob/main/docs/en/install-and-update-dbc/dbc-monitor/DBC_Host_Templates.xml
  
  
