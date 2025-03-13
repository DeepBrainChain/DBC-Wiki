# 链上机器租用

## 步骤一: 确定要租用的机器

- 打开[主网钱包](https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io)

- 创建钱包：账户-->添加账户 （助记词一定要保存好，丢失了助记词，账户就无法找回，币就丢失掉了）

- 到 [银河竞赛机器列表](https://galaxyrace.deepbrainchain.org/table) 找到对应类型的空闲机器

  ![find_machine](./assets/rent_machine.assets/find_machine.png)

## 步骤二：租用链上机器

- 导航到 `开发者`---`交易`---`rentMachine` ----`rentMachine(machine_id, duration)`

- machine_id 输入要租用的机器 id，输入框里面的`0x`要先删除掉

- duration 输入需要租用的时间(单位：1 BlockNumber = 6 seconds, 最低租用半小时起，租用时间也是300个块高的倍数，即300 * N )

- 输入完成后点击提交交易，并在三十分钟内确认机器是否可用。（如果 15 分钟内不确认租用，支付的`dbc`会退回，但是交易手续费 10 `dbc`是无法退回的）

- 创建虚拟机等相关操作请[参考](https://github.com/DeepBrainChain/DBC-DOC/blob/master/creat_macine/create_macine.md)

## 步骤三：确认可用并租赁

::: warning
确认之前必须要确认虚拟机能够正常启动。确认租用成功过后，表示机器租用成功，DBC 租金无法退回
:::

- 导航到`开发者`----`交易`----`rentMachine`----`confirmRent(machine_id)`

- 输入机器 id 并提交交易即可

## 步骤四：机器续租

::: warning
机器到期会自动停止虚拟机，确保在租用到期之前续租成功
:::

- 导航到`开发者`----`交易`----`rentMachine`----`reletMachine(machine_id, add_duration)`

- 输入机器 id 以及续租天数，提交交易
