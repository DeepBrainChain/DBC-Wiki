# 如何运行同步节点？

## 1. 配置环境

### 1.1 使用预编译版本

```bash
  sudo mkdir dbc-chain-mainnet && cd dbc-chain-mainnet
  wget https://github.com/DeepBrainChain/DeepBrainChain-MainChain/releases/download/v3.3/dbc_chain_linux_x64.tar.gz -O dbc_chain_linux_x64.tar.gz
  tar xf dbc_chain_linux_x64.tar.gz 
```

### 1.2 手动编译

```bash
# 安装依赖
curl https://getsubstrate.io -sSf | bash -s -- --fast
source ~/.cargo/env

# 编译dbc-chain
git clone https://github.com/DeepBrainChain/DeepBrainChain-MainChain.git
cd DeepBrainChain-MainChain
git checkout v3.3
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

## 3. 运行错误解决方案

```shell
  #如果您是ubuntu20.04或以下版本遇到启动报错
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

