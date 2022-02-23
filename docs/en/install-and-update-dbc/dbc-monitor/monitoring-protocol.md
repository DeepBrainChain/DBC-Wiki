# 监控数据交换协议
数据交换主要基于JSON格式，请求和相应消息必须以header和data length开头。

本协议和文档主要参考[zabbix doc](https://www.zabbix.com/documentation/5.0/zh/manual/appendix/protocols)。

## header 和 data length
Zabbix 组件之间的响应和请求消息中存在标头和数据长度。 需要确定消息的长度。
```
<HEADER> - "ZBXD\x01" (5 字节)
<DATALEN> - data length (8 字节). 1 被转换为 01/00/00/00/00/00/00/00 (8个字节，64位小端存储)
```

## 协议转换示例
```
/**
 * @brief 将JSON字符串转换成zabbix需要的协议数据
 * @param json_data JSON格式字符串
 * 
 * @return 符合zabbix协议的字符串
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

## 数据交换过程
1. dbc 打开一个TCP连接(已知server的ip和端口)；
2. dbc 发送符合协议的数据(`<HEADER><DATALEN><JSON>`)；
3. server 处理数据并将结果返回；
4. dbc 解析返回的结果；
5. TCP 关闭连接。

## 主动检查
>`请求目的`：dbc向server端询问是否接收某个虚拟机的监控数据
>
>`请求body`：
>    ```
>    <HEADER><DATALEN>{
>        "request":"active checks",
>        // hostname 表示虚拟机的ID
>        "host":"<hostname>"
>    }
>    ```
>
>`返回结果示例`：
>    ```
>    <HEADER><DATALEN>{
>        "response":"success",
>        // data部分省略，暂时不做校验
>        "data":[......]
>    }
>    ```

::: warning
server必须响应成功。"response"字段为"success"表示成功，其他一律视为失败。
:::

## 发送收集的监控数据
>`请求目的`：dbc向server端询发送收集的虚拟机监控数据
>
>`请求body`：
>    ```
>    <HEADER><DATALEN>{
>        "request":"agent data",
>        "data":[
>            {
>                "host":"<虚拟机ID>",
>                "key":"dom.state",
>                "value":"running",
>                "clock":1400675595,
>                "ns":76808644,
>            },
>            ......
>            {
>                "host":"<虚拟机ID>",
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
>`返回结果示例`：
>    ```
>    <HEADER><DATALEN>{
>        "response":"success",
>        // info部分不做校验
>        "info":"processed: 3; failed: 0; total: 3; seconds spent: 0.003534"
>    }
>    ```

## zabbix server 设置
server端若想接收dbc发送的数据，需要做到以下设置：
1. 在zabbix中导入dbc监控项模板"DBC VM Template"；
2. 创建虚拟机；
3. 在zabbix中使用模板"DBC VM Template"添加主机，主机名称填写虚拟机的task id；
4. 等待虚拟机创建完成后即可发送监控数据。
