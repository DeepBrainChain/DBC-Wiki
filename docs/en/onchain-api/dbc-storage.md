# Onchain Storage

## onlineProfile Module

### value

| Storage               | Type                   | Description                                                   |
| :-------------------- | :--------------------- | :------------------------------------------------------------ |
| onlineStakeParams     | OnlineStakeParamsInfo  |                                                               |
| standardGpuPointPrice | StandardGpuPointPrice  | A standard example for rent fee calculation(price: USD\*10^6) |
| galaxyIsOn            | bool                   | If galaxy competition is begin: switch 5000 gpu               |
| galaxyOnGpuThreshold  | 5000                   |                                                               |
| sysInfo               | SysInfoDetail          | Statistics of gpu and stake                                   |
| nextSlashId           | u64                    |                                                               |
| allMachineIdSnap      | AllMachineIdSnapDetail | The machine that will give out rewards                        |
| phaseRewardInfo       | PhaseRewardInfoDetail  |                                                               |
| liveMachines          | LiveMachine            | Machine with data stored in the system                        |
| currentEra            | EraIndex               | Current day in this Module （2880 Block/Era）                 |

### Map

| Storage             | KeyType   | ValueType                                 | Description                                          |
| :------------------ | :-------- | :---------------------------------------- | :--------------------------------------------------- |
| stashController     | AccountId | AccountId                                 |                                                      |
| controllerStash     | AccountId | AccountId                                 |                                                      |
| machinesInfo        | MachineId | MachineInfo                               | Detail info of machines                              |
| stashMachines       | AccountId | StashMachine                              | Statistics of stash account                          |
| stashServerRooms    | AccountId | `Vec<H256>`                               | Server rooms in stash account                        |
| controllerMachines  | AccountId | `Vec<MachineId>`                          | All machines controlled by controller                |
| erasStashPoints     | EraIndex  | EraStashPoints                            | Current Era snapshot of score for each stash account |
| erasMachinePoints   | EraIndex  | `BTreeMap<MachineId, MachineGradeStatus>` | Current Era snapshot of the score of each machine    |
| stashStake          | AccountId | Balance                                   | Total staking of funds account                       |
| machineRecentReward | MachineId | MachineRecentRewardInfo                   | store max 150 era reward                             |
| eraReward           | EraIndex  | Balance                                   |                                                      |
| pendingSlash        | u64       | OPPendingSlashInfo                        |                                                      |
| pendingSlashReview  | SlashId   | OPPendingSlashReviewInfo                  |                                                      |
| rentedFinished      | MachineId | AccountId                                 |                                                      |

### DoubleMap

| 存储                      | 键类型                | 值类型                   | 说明                                                   |
| :------------------------ | :-------------------- | :----------------------- | :----------------------------------------------------- |
| userMutHardwareStake      | (AccountId,MachineId) | UserMutHardwareStakeInfo | Reonline to change hardware, should stake some balance |
| posGpuInfo                | (Longitude, Latitude) | PosInfo                  | Statistics of gpu in one position                      |
| erasMachineReward         | (EraIndex, MachineId) | Balance                  | Total rewards obtained by machine in an Era            |
| erasMachineReleasedReward | (EraIndex,MachineId)  | Balance                  | The total machine reward released in an Era            |
| erasStashReward           | (EraIndex, AccountId) | Balance                  | Total stash rewards received by a certain Era          |
| erasStashReleasedReward   | (EraIndex, AccountId) | Balance                  | Total stash rewards unlocked by a certain Era          |

## onlineCommittee 模块

### Value

| Storage        | Type           | Description |
| :------------- | :------------- | :---------- |
| nextSlashId    | u64            |             |
| unhandledSlash | `Vec<SlashId>` |             |

### Map

| Storage             | KeyType                 | ValueType                | Description                                                                        |
| :------------------ | :---------------------- | :----------------------- | :--------------------------------------------------------------------------------- |
| committeeMachine    | AccountId               | OCCommitteeMachineList   | A machine that stores the different confirmation stages of the user's subscription |
| machineCommittee    | MachineId               | OCMachineCommitteeList   |                                                                                    |
| machineSubmitedHash | MachineId               | `Vec<[u8; 16]>`          |                                                                                    |
| committeeOps        | `(AccountId,MachineId)` | OCCommitteeOps           |                                                                                    |
| pendingSlash        | SlashId                 | OCPendingSlashInfo       |                                                                                    |
| pendingSlashReview  | SlashId                 | OCPendingSlashReviewInfo |                                                                                    |

## rentMachine Module

### Map

| Storage             | KeyType     | ValueType        | Description                                                        |
| :------------------ | :---------- | :--------------- | :----------------------------------------------------------------- |
| userRented          | AccountId   | `Vec<MachineId>` | Store the list of machines currently rented by the user            |
| rentOrder           | MachineId   | RentOrderDetail  | Details of a machine currently rented by the user                  |
| pendingConfirming   | MachineId   | AccountId        | Waiting for the user to confirm the successful rent of the machine |
| pending_rent_ending | BlockNumber | `Vec<MachineId>` | Record the machine that will end the rent at each block            |
| userTotalStake      | AccountId   | Balance          | Store the total pledge amount of each user in the module           |

### Value

| storage    | Type      | Description                                                                                                 |
| :--------- | :-------- | :---------------------------------------------------------------------------------------------------------- |
| rentFeePot | AccountId | Rent payment destination address (after the Galaxy Contest is opened, use this account to destroy the rent) |
