# DBC 链上委员会

> 链上操作请到主网执行：https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io#/explorer

## 1. 委员会的职责

为了维护 DBC 网络，我们设置了“委员会”的角色。委员会主要有两方面的职责：

1. 机器上线时执行机器验证的任务。当有新的机器想要加入到 DBC 网络中时，会随机选择状态正常的三个委员会。被选中的委员会可以在指定时间验证机器配置并提交到链上。

2. 租用过程中处理租用人的举报。当租用人遇到机器故障时，将会向链上报告该问题。如果委员会处理了该举报，且该举报被其他委员会确认，则该机器会被惩罚，而罚金将会发放给处理该问题的委员会。

## 2. 成为验证委员会成员

可以通过社区投票（提交议案）参加委员会。

## 3. 委员会的奖惩

为了鼓励委员会成员积极维护 DBC 网络，参与工作的委员会将会得到一部分奖励。

1. 机器验证时的奖励规则：机器上线后，每天将会获得”在线奖励“，其中 25%的奖励立即释放，75%的奖励在随后的 150 天线性释放。而审核该机器的委员会，将会共同分享机器解锁奖励的 1%. 奖励时间为 2 年。奖励到期后，立即停止继续释放。

2. （TODO）处理租用人的举报时的奖励：

## 4. 生成 box_pubkey 用于信息加密

在通过了社区投票后，申请人将会被添加到委员会(committee)模块。委员会成员需要提交用于信息加密的公钥，才能正常的派单与抢单。

```bash
# 自行安装node.js v14
git clone https://github.com/DeepBrainChain/DeepBrainChain-MainChain.git && cd DeepBrainChain-MainChain
cd scripts/test_script/ && npm install

# 生成公钥，需要利用脚本，指定自己的私钥
node gen_boxpubkey.js --key "0x868020ae0687dda7d57565093a69090211449845a7e11453612800b663307246"
```

## 5. 链上添加 box_pubkey

生成了公钥之后，到`committee` --> `committeeSetBoxPubkey` 点击"提交交易"进行设定。

执行此步骤时，会质押 20000 DBC，每次被派单时，将会记录下“使用 1000 DBC”。完成派单任务，则退还"1000 DBC"

![](./assets/machine_verification.assets/image-20210623145108399.png)
