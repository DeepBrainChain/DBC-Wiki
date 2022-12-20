# DBC-Blockchain 主网 RPC

> 发送 RPC 请求的方式，请参考上一篇文章。
>
> 并不是所有的链上数据都有 RPC 接口。如果想要查询的数据（包括历史数据）没有通过 RPC 暴露出来，可以通过查询链上存储来获取对应数据。

## 1. onlineProfile 模块

onlineProfile 模块记录了机器在线奖励的信息

### 1.1 查询某个资金账户控制的所有机器

- 示例

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getStakerInfo",
  "params": ["5FEio5dgXeXsASdo3Wh5DQ8zfbRfQJTXYmFkCbSCFk2qsTt6"] # 资金账户 (stash account)
}
```

- 结果说明

```json
{
  "jsonrpc": "2.0",
  "result": {
    "bondedMachines": [
      {
        "calcPoint": 51775, # 机器算力点数
        "gpuNum": 4, # 机器GPU数量
        "machineId": "7a79fd95e89c3db2e8bc052cb307d4130f6750cb715c44639e2c3faa7217ef1f", # 机器ID
        "machineStatus": "online" # 机器当前状态
      },
      {
        "calcPoint": 51775,
        "gpuNum": 4,
        "machineId": "8a79fd95e89c3db2e8bc052cb307d4130f6750cb715c44639e2c3faa7217ef1f",
        "machineStatus": "online"
      },
      {
        "calcPoint": 94143,
        "gpuNum": 4,
        "machineId": "9a79fd95e89c3db2e8bc052cb307d4130f6750cb715c44639e2c3faa7217ef1f",
        "machineStatus": "online"
      }
    ],
    "stashStatistic": {
      "canClaimReward": "664079816723400000", # 可以领取的DBC奖励
      "onlineMachine": [ # 在线的机器
        "7a79fd95e89c3db2e8bc052cb307d4130f6750cb715c44639e2c3faa7217ef1f"
      ],
      "totalBurnFee": "0", # 银河竞赛开启后，销毁的租金数
      "totalCalcPoints": 197930, # 总算力点数
      "totalClaimedReward": "0", # 已经领取的奖励
      "totalEarnedReward": "2656319266893600000", # 已经获得的奖励
      "totalGpuNum": 12, # 总绑定的GPU数量
      "totalMachine": [
        "7a79fd95e89c3db2e8bc052cb307d4130f6750cb715c44639e2c3faa7217ef1f"
      ],
      "totalRentFee": "0", # 获得的机器租金
      "totalRentedGpu": 0 # 被租用的GPU数量
    }
  },
  "id": 1
}
```

### 1.2 查询机器某个 Era 获得收益

- 示例

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getMachineEraReward",
  "params": [
    "ee0d003006f8ddbccb97dff96bcb4bee1b8c1aeaf7c64e0ca9d0f31752d17875",
    1
  ] # 机器ID, 第几个Era
}
```

- 结果说明

```json
{
  "jsonrpc": "2.0",
  "result": "123456", # Era 1该机器获取的总奖励数量
  "id": 1
}
```

### 1.3. 查询机器某个 Era 解锁收益

- 示例

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getMachineEraReleasedReward",
  "params": [
    "ee0d003006f8ddbccb97dff96bcb4bee1b8c1aeaf7c64e0ca9d0f31752d17875",
    1
  ] # 机器ID；第几个Era
}
```

- 结果

```json
{
  "jsonrpc": "2.0",
  "result": "123456", # Era 1 该机器解锁的奖励
  "id": 1
}
```

### 1.4. 查询资金账户某个 Era 获得收益

- 示例：

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getStashEraReward",
  "params": ["5DhR2dxiPZquPhFjfPzFg5jZENdr375hbX643kr9FBXMVa2z", 1] # 资金账户； 第几个Era
}
```

- 结果：

```json
{
  "jsonrpc": "2.0",
  "result": "123456", # Era 1 该资金账户获得的奖励
  "id": 1
}
```

### 1.5. 查询资金账户某个 Era 解锁奖励

- 示例：

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getStashEraReward",
  "params": ["5DhR2dxiPZquPhFjfPzFg5jZENdr375hbX643kr9FBXMVa2z", 1] # 资金账户； 第几个Era
}
```

- 结果：

```json
{
  "jsonrpc": "2.0",
  "result": "123456", # Era 1 该资金账户解锁的奖励
  "id": 1
}
```

### 1.6. 查询机器详细信息

- 示例：

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getMachineInfo",
  "params": ["ee0d003006f8ddbccb97dff96bcb4bee1b8c1aeaf7c64e0ca9d0f31752d17875"] # 机器ID
}
```

- 结果

```json
{
  "jsonrpc": "2.0",
  "result": {
    "bondingHeight": 531155, # 开始上链时间
    "controller": "5FTWuKEDhPsRWaeK5Jfn68a6rEFPsW8AAVF5YtfqNrznTWfv", # 机器控制账户
    "initStakePerGpu": "100000000000000000000", # 上链时每卡质押数量
    "lastMachineRenter": "5D45i3Ac4fXoimZQETJVMyYu79tAYzt4xQzEwzNLfirhsbg5", # 最后一个机器租用人
    "lastMachineRestake": 537808, # 机器付全部质押时间
    "lastOnlineHeight": 580412, # 机器最后一次状态为online的时间
    "machineInfoDetail": { # 机器详细信息
      "committee_upload_info": {
        "calc_point": 60775,
        "cpu_core_num": 64,
        "cpu_rate": 2900,
        "cpu_type": "Intel(R) Xeon(R) Silver 4214R",
        "cuda_core": 8704,
        "data_disk": 1800,
        "gpu_mem": 10,
        "gpu_num": 4,
        "gpu_type": "GeForceRTX2080Ti",
        "is_support": true,
        "machine_id": "7a79fd95e89c3db2e8bc052cb307d4130f6750cb715c44639e2c3faa7217ef1f",
        "mem_num": 471,
        "rand_str": "",
        "sys_disk": 350
      },
      "staker_customize_info": { # 机器其他信息
        "download_net": 20,
        "latitude": {
          "North": 306667
        },
        "longitude": {
          "East": 1040667
        },
        "server_room": "0x6465f54d26f4b406261e7e5201a4a17551ad4d27448609f2d7cdcb75b413524c",
        "telecom_operators": ["China Unicom"],
        "upload_net": 20
      }
    },
    "machineStash": "5HWSG8FXkCSe4NgwzbnA64nT5bmRFKRKgbSKj2X8Pe7KyYcQ", # 机器资金账户
    "machineStatus": "rented", # 机器当前状态
    "onlineHeight": 537808, # 机器上线时间
    "rewardCommittee": [ # 可以获得机器在线奖励的委员会列表
      "5EfFToHMVc3SEzJCiSisAMMu3zVMsufaxWwNECUM3k2qUEFQ",
      "5G3oJ8cGv4mhzRvtoBtGG9cX3MTNKxNTcMNAVykxA5ZFz8wi",
      "5GGcwSx1xb4tpCfopfk8kSmJNQ6qpH38yjFVLEYYqdnECwcX"
    ],
    "rewardDeadline": 733, # 委员会奖励结束时间（era）
    "stakeAmount": "400000000000000000000", # 机器质押数量
    "totalBurnFee": "0", # 因银河竞赛开启，销毁的租金数
    "totalRentFee": "60329673396778369975", # 总租金数
    "totalRentedDuration": 14, # 被租用时长
    "totalRentedTimes": 2 # 被租用次数
  },
  "id": 1
}
```

### 1.7. 查看矿工个数

示例：

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getStakerNum",
  "params": []
}
```

结果说明：

```json
{
  "jsonrpc": "2.0",
  "result": 13,  # 矿工个数（>=1台机器）
  "id": 1
}
```

### 1.8. 查看所有机器列表

- 示例：

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getMachineList",
  "params": []
}
```

- 结果说明：

```json
{
  "jsonrpc": "2.0",
  "result": {
    "bondingMachine": [],
    "bookedMachine": [
      "7a79fd95e89c3db2e8bc052cb307d4130f6750cb715c44639e2c3faa7217ef12"
      "9a79fd95e89c3db2e8bc052cb307d4130f6750cb715c44639e2c3faa7217ef1f"
      "aa79fd95e89c3db2e8bc052cb307d4130f6750cb715c44639e2c3faa7217ef1d"
    ],
    "confirmedMachine": [],
    "fulfillingMachine": [],
    "offlineMachine": [],
    "onlineMachine": [],
    "refusedMachine": [],
    "refusedMutHardwareMachine": [],
    "rentedMachine": []
  },
  "id": 1
}
```

### 1.9 查看 onlineProfile 模块统计信息

- 示例

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getOpInfo",
  "params": []
}
```

- 结果说明：

```json
{
  "jsonrpc": "2.0",
  "result": {
    "totalBurnFee": "0",
    "totalCalcPoints": 21389044,
    "totalGpuNum": 961,
    "totalRentFee": "15509145941941806044301",
    "totalRentedGpu": 937,
    "totalStake": "96215000000000000000000",
    "totalStaker": 13
  },
  "id": 1
}
```

### 1.10 获取账户链上身份

- 示例

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getStakerIdentity",
  "params": ["5CqTCD23gTbfmP8s6g1ehbJ66i6wi4Er4AguAw7yggDAKmPu"]
}
```

- 结果说明：

```json
{
  "jsonrpc": "2.0",
  "result": "Alice",
  "id": 1
}
```

### 1.11 获取矿工统计信息

- 示例

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getStakerListInfo",
  "params": [0, 5]
}
```

- 结果说明

```json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "calcPoints": 10045876,
      "index": 0,
      "stakerAccount": "5CsRZJCDiFJbZas6m2NnuYpBqo9gYv2nixHbzGLUVGdgx94w",
      "stakerName": "Alice",
      "totalBurnFee": "0",
      "totalGpuNum": 400,
      "totalReleasedReward": "3058070375932000902000",
      "totalRentFee": "6923734258518997224842",
      "totalRentedGpu": 400,
      "totalReward": "10311175917767854800000"
    },
    {
      "calcPoints": 3153803,
      "index": 2,
      "stakerAccount": "5HJugpuDxQGKLJwmv6K5eWFepDPkhPbwyTDR5vKjCv1MwUcS",
      "stakerName": "Bob",
      "totalBurnFee": "0",
      "totalGpuNum": 132,
      "totalReleasedReward": "1392103944062414253000",
      "totalRentFee": "2669666089085907226556",
      "totalRentedGpu": 132,
      "totalReward": "4458201216316382700000"
    },
    {
      "calcPoints": 617340,
      "index": 4,
      "stakerAccount": "5Gg1z77NCrUNyV4c5rm9tb3x27rYjBVYh74UrVNJh1TJGsx4",
      "stakerName": "Eve",
      "totalBurnFee": "0",
      "totalGpuNum": 28,
      "totalReleasedReward": "279809088882620814000",
      "totalRentFee": "527263236025890876875",
      "totalRentedGpu": 28,
      "totalReward": "893193550619416200000"
    }
  ],
  "id": 1
}
```

### 1.12 按位置获取统计信息

- 示例

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineProfile_getPosGpuInfo",
  "params": []
}
```

- 结果说明

```json
{
  "jsonrpc": "2.0",
  "result": [
    [
      {
        "East": 1182946
      },
      {
        "North": 340643
      },
      {
        "offlineGpu": 0,
        "onlineGpu": 400,
        "onlineGpuCalcPoints": 7496900,
        "rentedGpu": 400
      }
    ],
    [
      {
        "East": 1399262
      },
      {
        "North": 353817
      },
      {
        "offlineGpu": 0,
        "onlineGpu": 1,
        "onlineGpuCalcPoints": 21029,
        "rentedGpu": 1
      }
    ]
  ],
  "id": 1
}
```

## 2. Committee 模块

### 2.1 committee_getCommitteeList

- 示例：

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "committee_getCommitteeList",
  "params": []
}
```

- 结果说明：

```json
{
  "jsonrpc": "2.0",
  "result": {
    "chillList": ["5GGcwSx1xb4tpCfopfk8kSmJNQ6qpH38yjFVLEYYqdnECwcX"],  # 当前停止接单的委员会
    "fulfillingList": [],
    "normal": [ # 当前状态正常的委员会
      "5D1vwMoK1DjBF7pfApKjT9Gi5C4DKHvZMztFRhTsMqo71B8r",
      "5DdA3eHdWKuHLjqEquKQzyvhumNBEN32RxRWkuuaFvda474S",
      "5EfFToHMVc3SEzJCiSisAMMu3zVMsufaxWwNECUM3k2qUEFQ",
      "5EhZqXq9objj6Qf7DzCxmjZfUHUbZh9JK5Xb3DgKmpvjyMMV",
      "5FyU86E1arMRNwdxtRJvBs6qX4Y1o1UB2TXHUV3ZJcmQVkQK",
      "5G3oJ8cGv4mhzRvtoBtGG9cX3MTNKxNTcMNAVykxA5ZFz8wi",
      "5GFCgrhHv2jwimWZAgnDzSdvJocDzEadCk78B5AZJc5tYSYp",
      "5Gy6ANnyoWwo6WxuN5Vxz5hogY2JXg51FZbR99gYtQ49qckW",
      "5HDjo1p7DNmfXsjvcAjFogQ8Ue8fNb26Z1RAD9XqmWrKETFk"
    ],
    "waitingBoxPubkey": ["5Gv3FyFA7bFbUqqgXWXwkgCkazMaaBpfbVnwtVVRP5vgUYRs"] # 还没设置boxPubkey的委员会
  },
  "id": 1
}
```

## 3. OnlineCommittee 模块

### 3.1 获取机器分配的委员会列表

- 示例：

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineCommittee_getMachineCommitteeList",
  "params": ["38f4a824e0dc1fc5a9a7dccff53417b300fc0edad208176d8770597d98f6eb5c"]  # 机器ID
}
```

- 结果说明

```json
{
  "jsonrpc": "2.0",
  "result": {
    "bookTime": 533682, # 派单时间
    "bookedCommittee": [ # 派单委员会
      "5D1vwMoK1DjBF7pfApKjT9Gi5C4DKHvZMztFRhTsMqo71B8r",
      "5DdA3eHdWKuHLjqEquKQzyvhumNBEN32RxRWkuuaFvda474S",
      "5Gy6ANnyoWwo6WxuN5Vxz5hogY2JXg51FZbR99gYtQ49qckW"
    ],
    "confirmStartTime": 538002, # 开始提交原始机器信息时间
    "confirmedCommittee": [ # 已提交了原始值的委员会
      "5D1vwMoK1DjBF7pfApKjT9Gi5C4DKHvZMztFRhTsMqo71B8r",
      "5DdA3eHdWKuHLjqEquKQzyvhumNBEN32RxRWkuuaFvda474S",
      "5Gy6ANnyoWwo6WxuN5Vxz5hogY2JXg51FZbR99gYtQ49qckW"
    ],
    "hashedCommittee": [ # 已提交了机器信息Hash的委员会
      "5D1vwMoK1DjBF7pfApKjT9Gi5C4DKHvZMztFRhTsMqo71B8r",
      "5DdA3eHdWKuHLjqEquKQzyvhumNBEN32RxRWkuuaFvda474S",
      "5Gy6ANnyoWwo6WxuN5Vxz5hogY2JXg51FZbR99gYtQ49qckW"
    ],
    "onlinedCommittee": [ # 机器上线成功，将会获得奖励的委员会
      "5D1vwMoK1DjBF7pfApKjT9Gi5C4DKHvZMztFRhTsMqo71B8r",
      "5DdA3eHdWKuHLjqEquKQzyvhumNBEN32RxRWkuuaFvda474S",
      "5Gy6ANnyoWwo6WxuN5Vxz5hogY2JXg51FZbR99gYtQ49qckW"
    ],
    "status": "finished" # 派单状态
  },
  "id": 1
}
```

### 3.2 获取委员会对机器的审核时间

- 示例：

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onlineCommittee_getCommitteeOps",
  "params": [
    "5D1vwMoK1DjBF7pfApKjT9Gi5C4DKHvZMztFRhTsMqo71B8r",
    "74339d3413c1386d23d92e55586ccf25090c7eb762928f9bc69799b677f65f51"
  ] # 委员会ID； 机器ID
}
```

- 结果说明：

```json
{
  "jsonrpc": "2.0",
  "result": {
    "bookedTime": 600340, # 派单时间
    "confirmHash": "0x00000000000000000000000000000000", # 提交的机器信息Hash
    "confirmTime": 0,
    "hashTime": 0,
    "machineInfo": { # 提交的机器信息
      "calc_point": 0,
      "cpu_core_num": 0,
      "cpu_rate": 0,
      "cpu_type": "AMD 5900x",
      "cuda_core": 0,
      "data_disk": 0,
      "gpu_mem": 0,
      "gpu_num": 0,
      "gpu_type": "NVIDIA GeForce GTX 3080",
      "is_support": false,
      "machine_id": "74339d3413c1386d23d92e55586ccf25090c7eb762928f9bc69799b677f65f51",
      "mem_num": 0,
      "rand_str": "abc",
      "sys_disk": 0
    },
    "machineStatus": "booked",
    "stakedDbc": "1000000000000000000",
    "verifyTime": [600820, 602260, 603700]
  },
  "id": 1
}
```

### 3.3 获取委员会所有派单的机器列表

- 示例：

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "onilneCommittee_getCommitteeMachineList",
  "params": ["5Gv3FyFA7bFbUqqgXWXwkgCkazMaaBpfbVnwtVVRP5vgUYRs"] # 委员会ID
}
```

- 结果说明：

```json
{
  "jsonrpc": "2.0",
  "result": {
    "bookedMachine": [], # 当前的派单
    "confirmedMachine": [], # 提交了原始值的机器列表
    "hashedMachine": [], # 提交了Hash的机器列表
    "onlineMachine": [], # 现在已经在线的机器
  },
  "id": 1
}
```

## 4. RentMachine 模块

### 4.1 查看机器对应的订单

说明：由于当前支持单卡租用，一台多卡机器可能对应多个订单

- 示例

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "rentMachine_getMachineRentId",
  "params": ["0edac3b0263dd09538717bb0f5bf3f1bced70d7e017239d6f307b0801220c022"] # MachineID
}
```

- 结果说明
```json
{
  "jsonrpc": "2.0",
  "result": {
    "rentOrder": [889], # 机器订单
    "usedGpu": [0, 1, 2, 3] # 机器已使用GPU
  },
  "id": 1
}
```

### 4.2 查看租用的详情

- 示例

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "rentMachine_getRentOrder",
  "params": [1] # RentID
}
```

- 结果说明

```json
{
  "jsonrpc": "2.0",
  "result": {
    "confirmRent": 1600590, # 确认租用块高
    "gpuIndex": [0, 1, 2, 3], # 当前订单使用的GPU序号
    "gpuNum": 4, # 当前订单租用GPU个数
    "machineId": "0edac3b0263dd09538717bb0f5bf3f1bced70d7e017239d6f307b0801220c022", # 机器ID
    "rentEnd": 1635148, # 租用结束块高
    "rentStart": 1600588, # 租用开始时间
    "rentStatus": "renting", # 当前租用状态
    "renter": "5GETYD36iceKpKf1fpKdTwtToh4MskTt5RsuouYTGxmrcouC", # 租用人
    "stakeAmount": "0" # 租用人质押金额
  },
  "id": 1
}
```

### 4.3 查看某个账户租用的订单列表

- 示例

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "rentMachine_getRentList",
  "params": ["5E7123qZExgZaYKnmTcJacu68c2GbLeSHo9qNWmUWcaw4RSR"] # 账户地址
}
```

- 结果说明

```json
{
  "jsonrpc": "2.0",
  "result": [0, 1], # 订单ID
  "id": 1
}
```
