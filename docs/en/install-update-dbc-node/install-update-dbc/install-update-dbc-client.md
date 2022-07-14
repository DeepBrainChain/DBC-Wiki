# Install And Update DBC Client Node

- The DBC client node acts as the identity of the trustee in the entire network, and can query the machine where the function node is correctly deployed in the current network. When the function node is deployed, you can request the client node through http to check whether your function node is successfully connected to the client node. When the machine ID of your function node can be successfully seen through the client request, it means that you have successfully deployed the function node.
- Suggestion: Since the official client nodes cannot remain stable online forever, it is recommended that each mining pool set up two client nodes as a backup, and at the same time, it can also strengthen the DBC network.
- Tip: The client node has very low requirements for hardware equipment. Any public network server that can run normally can be built(container mode can also be used), and the memory is very small, as long as it can be accessed through the public network.

## (一) Install DBC Client

- **install environment**

  `sudo apt-get install libvirt-clients libvirt-daemon-system expect -y`

- **download install script：**

  http://119.6.235.169:9000/dbc/install_update_script/mainnet/install_client.sh

- **add executable permission：**

  `chmod +x install_client.sh`

- **run the script:**

  `./install_client.sh [install_dir]`

  During the installation process, you need to input two listen port:
  <img src="./assets/install_dbc_client.png" width = "500" height = "260"  align=center />

<br/>

## (二) Update DBC Client

- **download update client script：**

  http://119.6.235.169:9000/dbc/install_update_script/mainnet/update_client.sh

- **add executable permission：**

  `chmod +x update_client.sh`

- **run the script:**

  `./update_client.sh [install_dir]`

    <img src="./assets/update_dbc_client.png" width = "500" height = "260"  align=center />
