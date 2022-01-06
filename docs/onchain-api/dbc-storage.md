# 链上存储

## onlineProfile 模块

### value

| 存储                  | 类型                   | 说明                                                          |
| :-------------------- | :--------------------- | :------------------------------------------------------------ |
| onlineStakeParams     | OnlineStakeParamsInfo  |                                                               |
| standardGpuPointPrice | StandardGpuPointPrice  | A standard example for rent fee calculation(price: USD\*10^6) |
| galaxyIsOn            | bool                   | If galaxy competition is begin: switch 5000 gpu               |
| galaxyOnGpuThreshold  | 5000                   |                                                               |
| sysInfo               | SysInfoDetail          | Statistics of gpu and stake                                   |
| nextSlashId           | u64                    |                                                               |
| allMachineIdSnap      | AllMachineIdSnapDetail | 将要发放奖励的机器                                            |
| phaseRewardInfo       | PhaseRewardInfoDetail  |                                                               |
| liveMachines          | LiveMachine            | 系统中存储有数据的机器                                        |
| currentEra            | EraIndex               | 模块当前是第几天（2880 Block/Era）                            |

### Map

| 存储                | 键类型    | 值类型                                    | 说明                                  |
| :------------------ | :-------- | :---------------------------------------- | :------------------------------------ |
| stashController     | AccountId | AccountId                                 |                                       |
| controllerStash     | AccountId | AccountId                                 |                                       |
| machinesInfo        | MachineId | MachineInfo                               | Detail info of machines               |
| stashMachines       | AccountId | StashMachine                              | Statistics of stash account           |
| stashServerRooms    | AccountId | `Vec<H256>`                               | Server rooms in stash account         |
| controllerMachines  | AccountId | `Vec<MachineId>`                          | All machines controlled by controller |
| erasStashPoints     | EraIndex  | EraStashPoints                            | 每个 Era 资金账户的得分快照           |
| erasMachinePoints   | EraIndex  | `BTreeMap<MachineId, MachineGradeStatus>` | 每个 Era 机器的得分快照               |
| stashStake          | AccountId | Balance                                   | 资金账户的质押总计                    |
| machineRecentReward | MachineId | MachineRecentRewardInfo                   | store max 150 era reward              |
| eraReward           | EraIndex  | Balance                                   |                                       |
| pendingSlash        | u64       | OPPendingSlashInfo                        |                                       |
| pendingSlashReview  | SlashId   | OPPendingSlashReviewInfo                  |                                       |
| rentedFinished      | MachineId | AccountId                                 |                                       |

### DoubleMap

| 存储                      | 键类型                | 值类型                   | 说明                                                   |
| :------------------------ | :-------------------- | :----------------------- | :----------------------------------------------------- |
| userMutHardwareStake      | (AccountId,MachineId) | UserMutHardwareStakeInfo | Reonline to change hardware, should stake some balance |
| posGpuInfo                | (Longitude, Latitude) | PosInfo                  | Statistics of gpu in one position                      |
| erasMachineReward         | (EraIndex, MachineId) | Balance                  | 某个 Era 机器获得的总奖励                              |
| erasMachineReleasedReward | (EraIndex,MachineId)  | Balance                  | 某个 Era 机器释放的总奖励                              |
| erasStashReward           | (EraIndex, AccountId) | Balance                  | 某个 Era Stash 获得的总奖励                            |
| erasStashReleasedReward   | (EraIndex, AccountId) | Balance                  | 某个 Era Stash 解锁的总奖励                            |

## onlineCommittee 模块

### Value

| 存储           | 类型           | 说明 |
| :------------- | :------------- | :--- |
| nextSlashId    | u64            |      |
| unhandledSlash | `Vec<SlashId>` |      |

### Map

| 存储                | 键类型                  | 值类型                   | 说明                             |
| :------------------ | :---------------------- | :----------------------- | :------------------------------- |
| committeeMachine    | AccountId               | OCCommitteeMachineList   | 存储用户订阅的不同确认阶段的机器 |
| machineCommittee    | MachineId               | OCMachineCommitteeList   |                                  |
| machineSubmitedHash | MachineId               | `Vec<[u8; 16]>`          |                                  |
| committeeOps        | `(AccountId,MachineId)` | OCCommitteeOps           |                                  |
| pendingSlash        | SlashId                 | OCPendingSlashInfo       |                                  |
| pendingSlashReview  | SlashId                 | OCPendingSlashReviewInfo |                                  |

## rentMachine 模块

### Map

| 存储                | 键类型      | 值类型           | 说明                             |
| :------------------ | :---------- | :--------------- | :------------------------------- | -------------------------- |
| userRented          | AccountId   | `Vec<MachineId>` | 存储用户当前租用的机器列表       |
| rentOrder           | MachineId   | RentOrderDetail  | 用户当前租用的某个机器的详情     |
| pendingConfirming   | MachineId   | AccountId        |                                  | 等待用户确认租用成功的机器 |
| pending_rent_ending | BlockNumber | `Vec<MachineId>` | 记录每个区块将要结束租用的机器   |
| userTotalStake      | AccountId   | Balance          | 存储每个用户在该模块中的总质押量 |

### Value

| 存储       | 类型      | 说明                                               |
| :--------- | :-------- | :------------------------------------------------- |
| rentFeePot | AccountId | 租金支付目标地址(银河竞赛开启后，用该账户销毁租金) |
