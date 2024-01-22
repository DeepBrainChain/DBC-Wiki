# DBC-Chain verification node upgrade 


> Note:In order to maintain the stability of block production and prevent the penalty mechanism from being triggered due to excessive node offline during the upgrade process, it is recommended that you stop participating in the super node election before upgrading the node, and then continue to participate in the election after the upgrade is completed.

## 1. Get the new dbc-chain binary

### Method 1: Use precompiled version

> If it does not work properly, please use method 2 to compile it yourself:

```shell
mkdir dbc-chain-mainnet && cd dbc-chain-mainnet
wget https://github.com/DeepBrainChain/DeepBrainChain-MainChain/releases/download/v3.2/dbc-chain-v3.tar.gz -O dbc_chain_linux_x64.tar.gz

tar xf dbc_chain_linux_x64.tar.gz

```

### Method 2: Compile from source code

```shell
# Install dependencies
curl https://getsubstrate.io -sSf | bash -s -- --fast
source ~/.cargo/env

# Compile dbc-chain
git clone https://github.com/DeepBrainChain/DeepBrainChain-MainChain.git
cd DeepBrainChain-MainChain && git checkout v3.2-dev
cargo build --release

```

## 2. Rerun the verification node

```shell
# Query and stop the old version of the synchronization node
ps aux | grep dbc-chain

#The results are generally displayed as follows
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
#1. Users in China:
echo "deb http://mirrors.aliyun.com/ubuntu/ jammy main" >> /etc/apt/sources.list
sudo apt update
sudo apt install libc6 libstdc++6 -y
#2. Non-China users
echo "deb http://archive.ubuntu.com/ubuntu/ jammy main" >> /etc/apt/sources.list
sudo apt update
sudo apt install libc6 libstdc++6 -y

```

## 3. Verify whether the node is running normally

```shell
#Normal running node log query is as follows:
tail -f dbc_node.log

#Log rolling output, just generate blocks normally
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
