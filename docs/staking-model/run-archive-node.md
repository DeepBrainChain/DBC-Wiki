# 如何运行同步节点？

## 1. 配置环境

### 1.1 使用预编译版本

```bash
wget https://github.com/DeepBrainChain/DeepBrainChain-MainChain/releases/download/v2.3/dbc_chain_linux_x64.tar.gz -O dbc_chain_linux_x64.tar.gz
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
git checkout v2.3
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
