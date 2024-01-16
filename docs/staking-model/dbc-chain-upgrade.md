# DBC-Chain 验证节点升级教程



## 1. 获取新的dbc-chain 二进制

### 方式 1: 使用预编译版本

> 如果不能正常运行，请使用方式 2 自行编译：

```shell
mkdir dbc-chain-mainnet && cd dbc-chain-mainnet
wget https://github.com/DeepBrainChain/DeepBrainChain-MainChain/releases/download/v3.2/dbc-chain-v3.tar.gz -O dbc_chain_linux_x64.tar.gz

tar xf dbc_chain_linux_x64.tar.gz

```

### 方式2: 从源码进行编译

```shell
# 安装依赖
curl https://getsubstrate.io -sSf | bash -s -- --fast
source ~/.cargo/env

# 编译dbc-chain
git clone https://github.com/DeepBrainChain/DeepBrainChain-MainChain.git
cd DeepBrainChain-MainChain && git checkout v3.2-dev
cargo build --release

```

## 2.重新运行验证节点

```shell
# 查询并停止旧版本的同步节点
ps aux | grep dbc-chain

#结果一般如下显示
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
#1.中国地区的用户：
echo "deb http://mirrors.aliyun.com/ubuntu/ jammy main" >> /etc/apt/sources.list
sudo apt update
sudo apt install libc6 libstdc++6 -y
#2. 非中国地区用户
echo "deb http://archive.ubuntu.com/ubuntu/ jammy main" >> /etc/apt/sources.list
sudo apt update
sudo apt install libc6 libstdc++6 -y

```

## 3.验证节点运行是否正常

```shell
#正常运行的节点log日志查询如下：
tail -f dbc_node.log

#日志滚动输出，正常出块即可
2024-01-16 02:36:30 ✨ Imported #2747461 (0x653a…4bd3)
2024-01-16 02:36:31 💤 Idle (20 peers), best: #2747461 (0x653a…4bd3), finalized #2747458 (0x06e1…2301), ⬇ 6.6kiB/s ⬆ 3.6kiB/s
2024-01-16 02:36:36 💤 Idle (20 peers), best: #2747461 (0x653a…4bd3), finalized #2747459 (0x91e2…44c5), ⬇ 20.7kiB/s ⬆ 11.9kiB/s
2024-01-16 02:36:41 💤 Idle (20 peers), best: #2747461 (0x653a…4bd3), finalized #2747459 (0x91e2…44c5), ⬇ 4.8kiB/s ⬆ 2.5kiB/s
2024-01-16 02:36:46 💤 Idle (20 peers), best: #2747461 (0x653a…4bd3), finalized #2747459 (0x91e2…44c5), ⬇ 4.9kiB/s ⬆ 5.3kiB/s
2024-01-16 02:36:51 💤 Idle (20 peers), best: #2747461 (0x653a…4bd3), finalized #2747459 (0x91e2…44c5), ⬇ 3.9kiB/s ⬆ 0.8kiB/s
2024-01-16 02:36:56 💤 Idle (20 peers), best: #2747461 (0x653a…4bd3), finalized #2747459 (0x91e2…44c5), ⬇ 4.2kiB/s ⬆ 6.5kiB/s
2024-01-16 02:37:00 ✨ Imported #2747462 (0xab90…ecb0)
2024-01-16 02:37:01 💤 Idle (20 peers), best: #2747462 (0xab90…ecb0), finalized #2747459 (0x91e2…44c5), ⬇ 7.2kiB/s ⬆ 25.1kiB/s
2024-01-16 02:37:06 💤 Idle (20 peers), best: #2747462 (0xab90…ecb0), finalized #2747460 (0xcd3a…fb6d), ⬇ 27.2kiB/s ⬆ 21.6kiB/s
```

