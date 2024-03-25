# 如何运行同步节点？

> 注意： 当前主网polkadot版本为3.0， 仍需使用原先2.0版本的同步，3.0最新程序目前还无法直接进行同步

## 1. 配置环境

### 1.1 使用预编译版本

```bash
wget https://github.com/DeepBrainChain/DeepBrainChain-MainChain/releases/download/v2.6/dbc_chain_linux_x64.tar.gz -O dbc_chain_linux_x64.tar.gz
tar xf dbc_chain_linux_x64.tar.gz && cd dbc-chain-mainnet
```

### 1.2 手动编译

```bash
# 安装依赖
curl https://getsubstrate.io -sSf | bash -s -- --fast
source ~/.cargo/env

# 编译dbc-chain
git clone https://github.com/DeepBrainChain/DeepBrainChain-MainChain.git
cd DeepBrainChain-MainChain
git checkout v2.6
cargo build --release
```

## 2. 运行同步节点

```bash
# 使用预先编译执行
./dbc-chain --base-path ./db_data --pruning archive
```

```bash
# 手动编译执行：
./target/release/dbc-chain --base-path ./db_data --pruning archive
```

> 端口参数：
>
> ```
> --rpc-port 9933 #  指定你的节点监听RPC的端口。 9933 是默认值，因此该参数也可忽略
> --ws-port 9945 # 指定你的节点用于监听 WebSocket 的端口。 默认端口为 9944
> --port 30333 # 指定你用于监听 p2p 流量的节点端口。 30333 是默认端口，若无需更改，可以忽略该 flag
> ```
>
> 其他参数参考：
>
> ```
> --ws-max-connections 2000
> --in-peers 200
> --out-peers 200
> ```
>
> 当遇到同步出现0 peers现象时，需要指定bootnodes进行同步，老用户可以通过查询以前的同步节点log日志找到，新用户可以尝试指定
> ``` --bootnodes /ip4/122.99.183.53/tcp/3308/p2p/12D3KooWDx4pgzT2RAPF12QkmiBZy6BUsTtPt7JgiYxgFm6Z5Hc5```

## 3. 同步完成后升级到3.0同步节点

```shell
# 在第2步生成的文件夹下执行
wget https://github.com/DeepBrainChain/DeepBrainChain-MainChain/releases/download/v3.2/dbc-chain-v3.tar.gz -O dbc_chain_linux_x64.tar.gz

tar xf dbc_chain_linux_x64.tar.gz

#运行验证节点
# 查询并停止旧版本的同步节点
ps aux | grep dbc-chain

#结果类似于如下显示
root      761495  0.0  0.0   9584  2588 pts/0    S+   17:07   0:00 grep --color=auto -w dbc-chain
root      926101  2.0  5.1 4295592 1650640 ?     Sl    2023 5320:10 ./dbc-chain --base-path ./db_data --port 30337 --ws-port 9948 --rpc-port 9937 --pruning archive

# 停止旧节点
sudo kill -9 926101 (注意替换为实际查询到的PID)

#启动新版本节点
nohup ./dbc-chain --base-path ./db_data --chain dbcSpecRaw.json --validator --name YourNodeName 1>dbc_node.log 2>&1 &

#如果遇到启动报错
./dbc-chain: /lib/x86_64-linux-gnu/libstdc++.so.6: version `GLIBCXX_3.4.30' not found (required by ./dbc-chain)
./dbc-chain: /lib/x86_64-linux-gnu/libstdc++.so.6: version `GLIBCXX_3.4.29' not found (required by ./dbc-chain)
./dbc-chain: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32' not found (required by ./dbc-chain)
./dbc-chain: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.34' not found (required by ./dbc-chain)
./dbc-chain: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.33' not found (required by ./dbc-chain)

#解决方案：
#1.中国地区的设备：
echo "deb http://mirrors.aliyun.com/ubuntu/ jammy main" >> /etc/apt/sources.list
sudo apt update
sudo apt install libc6 libstdc++6 -y
#2. 非中国地区设备：
echo "deb http://archive.ubuntu.com/ubuntu/ jammy main" >> /etc/apt/sources.list
sudo apt update
sudo apt install libc6 libstdc++6 -y
```

