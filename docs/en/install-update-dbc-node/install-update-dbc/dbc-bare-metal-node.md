# DBC Bare Metal Node

## Introduction

1. The bare metal node of DBC is only responsible for generating the node id for the bare metal server, and controlling the bare metal server to perform limited operations such as switching on and off.
2. Bare metal nodes do not support functions related to virtual machines. Because the requirements for the hardware equipment of the machine where the node is deployed are very low, the resources such as memory and hard disk used are very small, as long as the IPMI tool can be used for the bare metal server and the network service is normal.

:::tip 注意！
The bare metal node of DBC itself has a "node_id", which does not need to be uploaded to the chain, and is only used to generate a "node_id" for the bare metal server.

For example, send a request to add a bare metal server to a bare metal node. The parameter needs to tell the client node which bare metal node to send to, and fill in the information for IPMI control. The request will return a new "node_id", that is the "node_id" of the added bare metal server. This "node_id" needs to be on the chain, and then the user can rent it on the chain, and use it to send the request of switching on and off.

This article mentions two kinds of node_id, which are distinguished here:

- "The node_id of the bare metal node" refers to the "node_id" field in the "dat/node.dat" file in the node installation directory.
- "The node_id of the bare metal server" is the "node_id" field returned by sending the request to add the bare metal server.
  :::

## install node

1. Download the installation script：http://112.192.16.27:9000/dbc/install_update_script/mainnet/install_baremetal.sh
2. run the install script:

```
sudo bash ./install_baremetal.sh <installation directory>
```

The installation script will automatically install the IPMI tool, and like the script for installing the DBC client node, you need to enter 2 port numbers.

## upgrade node

1. Download upgrade script：http://112.192.16.27:9000/dbc/install_update_script/mainnet/update_baremetal.sh
2. Run the upgrade script：

```
sudo bash update_baremetal.sh <installation directory>
```

## Add a bare metal server

- request method：POST

- request URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal/add
```

- request Body:

```json
{
  "peer_nodes_list": [
    // node_id of bare metal node
    "ccd9a2118ba3c95cd458302601f15281edc39d72dcf11a07527893d97ac1a573"
  ],
  "additional": {
    // Informations of bare metal server
    "bare_metal_nodes": [
      {
        // The unique ID of the machine supplier to identify the bare metal, required.
        "uuid": "3156995b-da18-4268-9734-f8d168e90a7d",
        // The connection method provided by the bare metal server to the user. Required. A fixed IP address is recommended.
        "ip": "175.221.204.110",
        // Operating system of the bare metal server, optional.
        "os": "Ubuntu 20.04.3 LTS (Focal Fossa) 5.4.0-121-generic GNU/Linux",
        // A description customized by the machine owner, not required.
        "desc": "在xxx平台租用的裸金属服务器，用于xxx业务，机房id是9f01ca9c-38bd-46a9-9637-dac92b352a63",
        // The host ID of ipmi, required. A fixed IP address is recommended.
        "ipmi_hostname": "192.168.0.110",
        // ipmi username, required.
        "ipmi_username": "admin",
        // ipmi user password, required.
        "ipmi_password": "dbtu2017"
      }
    ]
  }
}
```

- return example：

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

## Query the list of bare metal servers

- request method：POST

- request URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal
```

- request Body:

```json
{
  "peer_nodes_list": [
    // node_id of bare metal node
    "ccd9a2118ba3c95cd458302601f15281edc39d72dcf11a07527893d97ac1a573"
  ],
  "additional": {}
}
```

- return example：

```json
{
  "errcode": 0,
  "message": {
    "bare_metal_nodes": [
      {
        "node_id": "fcf2cd8b99958606d260ca00c5ac00c88c242bcf8eb38e7cc3f29e9719a73f39",
        "node_private_key": "4c2e7133834d6d7dd35088beda5556215f6f5b15d2cd3c3153f117aaeec2c28b",
        "uuid": "3156995b-da18-4268-9734-f8d168e90a7d",
        "ip": "175.221.204.110",
        "os": "Ubuntu 20.04.3 LTS (Focal Fossa) 5.4.0-121-generic GNU/Linux",
        "description": "在xxx平台租用的裸金属服务器，用于xxx业务，机房id是9f01ca9c-38bd-46a9-9637-dac92b352a63",
        "ipmi_hostname": "192.168.0.110",
        "ipmi_username": "admin",
        "ipmi_password": "dbtu2017"
      }
    ]
  }
}
```

## Bare metal server on-chain

Use the "node_id" and "node_private_key" queried above to upload the bare metal server to the chain. Refer to [Machine Onchain steps](https://deepbrainchain.github.io/DBC-Wiki/en/onchain-guide/bonding-machine.html)

After being on-chain, you can rent a bare metal server on the chain just like renting an ordinary computing machine.

:::tip 注意！
The "node_id" used by the bare metal server on the chain is the "node_id" returned by the request to add the bare metal server, and the "node_private_key" is obtained by querying the bare metal server above.
:::

## Use of Bare Metal Servers

By renting a bare metal server on the chain, you can query its machine information, and use the IP and port in the machine information to connect (ssh or Windows remote connection tool) to access.

If the bare metal server is not powered on, you can control its power to be powered on by sending a request.

- request method：POST

- request URL：

```
http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal/power
```

- request Body:

```json
{
  "peer_nodes_list": [
    // node_id of bare metal server
    "fcf2cd8b99958606d260ca00c5ac00c88c242bcf8eb38e7cc3f29e9719a73f39"
  ],
  "additional": {
    // power control command
    // "on"     - power on
    // "off"    - power off
    // "reset"  - power reset
    // "status" - get power status
    "command": "on"
  },
  "session_id": "The session_id distributed by the renter",
  "session_id_sign": "session_id_sign distributed by the renter"
}
```

For other API interfaces, please refer to [Bare Metal Node Operations](https://deepbrainchain.github.io/DBC-Wiki/en/install-update-dbc-node/dbc-client-api/http-api.html#bare-metal-node-operations)
