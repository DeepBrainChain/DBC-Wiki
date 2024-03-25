# How to run a synchronization node?

> Note: The current mainnet Polkadot version is 3.0. You still need to use the original 2.0 version for synchronization. The latest 3.0 program cannot yet be directly synchronized.

## 1. Configure environment

### 1.1 Use precompiled version

```bash
wget https://github.com/DeepBrainChain/DeepBrainChain-MainChain/releases/download/v2.6/dbc_chain_linux_x64.tar.gz -O dbc_chain_linux_x64.tar.gz
tar xf dbc_chain_linux_x64.tar.gz && cd dbc-chain-mainnet
```

### 1.2 Manual compilation

```bash
# Install dependencies
curl https://getsubstrate.io -sSf | bash -s -- --fast
source ~/.cargo/env

# Compile dbc-chain
git clone https://github.com/DeepBrainChain/DeepBrainChain-MainChain.git
cd DeepBrainChain-MainChain
git checkout v2.6
cargo build --release
```

## 2. Run the synchronization node

```bash
# Execute using precompilation
./dbc-chain --base-path ./db_data --pruning archive
```

```bash
# Manual compilation and execution:
./target/release/dbc-chain --base-path ./db_data --pruning archive
```

> Port parameters:
>
> ```
> --rpc-port 9933 # Specify the port on which your node listens for RPC. 9933 is the default value, so this parameter can also be ignored
> --ws-port 9945 # Specify the port your node uses to listen to WebSocket. The default port is 9944
> --port 30333 # Specify the node port you use to listen for p2p traffic. 30333 is the default port. You can ignore this flag if there is no need to change it.
> ```
>
> Other parameters reference:
>
> ```
> --ws-max-connections 2000
> --in-peers 200
> --out-peers 200
> ```
>
> When encountering the phenomenon of 0 peers during synchronization, you need to specify bootnodes for synchronization. Old users can find it by querying the previous synchronization node logs. New users can try to specify
> ```` --bootnodes /ip4/122.99.183.53/tcp/3308/p2p/12D3KooWDx4pgzT2RAPF12QkmiBZy6BUsTtPt7JgiYxgFm6Z5Hc5````

## 3. After synchronization is completed, upgrade to 3.0 synchronization node

```shell
# Execute in the folder generated in step 2
wget https://github.com/DeepBrainChain/DeepBrainChain-MainChain/releases/download/v3.2/dbc-chain-v3.tar.gz -O dbc_chain_linux_x64.tar.gz

tar xf dbc_chain_linux_x64.tar.gz

#Run verification node
# Query and stop the old version of the synchronization node
ps aux | grep dbc-chain

#The result is similar to the following display
root 761495 0.0 0.0 9584 2588 pts/0 S+ 17:07 0:00 grep --color=auto -w dbc-chain
root 926101 2.0 5.1 4295592 1650640 ? Sl 2023 5320:10 ./dbc-chain --base-path ./db_data --port 30337 --ws-port 9948 --rpc-port 9937 --pruning archive

# Stop old node
sudo kill -9 926101 (note to replace with the actual queried PID)

#Start new version node
nohup ./dbc-chain --base-path ./db_data --chain dbcSpecRaw.json --validator --name YourNodeName 1>dbc_node.log 2>&1 &

#If you encounter a startup error
./dbc-chain: /lib/x86_64-linux-gnu/libstdc++.so.6: version `GLIBCXX_3.4.30' not found (required by ./dbc-chain)
./dbc-chain: /lib/x86_64-linux-gnu/libstdc++.so.6: version `GLIBCXX_3.4.29' not found (required by ./dbc-chain)
./dbc-chain: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32' not found (required by ./dbc-chain)
./dbc-chain: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.34' not found (required by ./dbc-chain)
./dbc-chain: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.33' not found (required by ./dbc-chain)

#solution:
#1. Equipment in China:
echo "deb http://mirrors.aliyun.com/ubuntu/ jammy main" >> /etc/apt/sources.list
sudo apt update
sudo apt install libc6 libstdc++6 -y
#2. Non-China equipment:
echo "deb http://archive.ubuntu.com/ubuntu/ jammy main" >> /etc/apt/sources.list
sudo apt update
sudo apt install libc6 libstdc++6 -y
```
