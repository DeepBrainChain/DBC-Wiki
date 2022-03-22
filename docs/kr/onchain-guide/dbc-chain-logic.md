# DBC chain module description

- Github Repo：https://github.com/DeepBrainChain/DeepBrainChain-MainChain

- Github branch：`master`

- Project is based on substrate [v3.0.0](https://github.com/paritytech/substrate/releases/tag/v3.0.0)

- Project structure description

  ```
  # The main logic of the project is located in the pallets folder, and the hierarchical relationship of the modules is as follows:
  # dbc-staking, generic-func, dbc-price-ocw are independent of other modules
  # committee, online-profile depend on generic-func, dbc-price-ocw
  # maintain-committee, online-committee, rent-machine 依赖上一层模块

  pallets
  ├── dbc-staking 	# Used for node POA block verification rewards, modified from the substrate staking module
  ├── generic-func 	# Some helper functions, such as serialization/some common calculations
  ├── dbc-price-ocw 	# offchain-worker，Used to get the real-time price of dbc
  |
  ├── committee 		# Committee module for the management of subsequent machines on the chain
  ├── online-profile 	# Machine management module, mainly used for machine online/offline/online reward distribution
  |
  ├── maintain-committee 	# After the machine is online, the report module that has problems, the renter can report through this module, and the committee will review it
  ├── online-committee 	# The machine online review module, which is mainly used for dispatching to the committee for review when the machine is online
  ├── rent-machine 		# Rent machine/relet
  |
  └── simple-rpc # Only used to provide RPC, in order to make the testcase simpler, put part of the RPC separately under the palelt
  ```

- Test: According to the dependencies between pallets modules, testcase located in `maintain-committee`, `online-committee`, `rent-machine`

  ```bash
  cargo test -p online-committee
  cargo test -p rent-machine
  cargo test -p maintain-committee
  ```

## dbc-chain main module function description

1. Committee module (`committee` pallet): add a committee through a referendum (Root authority), committee members (committee) stake a certain DBC, participate in the management of the machine and obtain DBC rewards

2. Main logic of machine online (`online-profile` pallet and `online-committee` pallet)

   1. stash account(stash) bond machine controller account (controller)

   2. The control account submits the machine online request (submit the machine private key signature for machine authentication stash account), and stake the stash account to a certain DBC

   3. The machine is dispatched to the committee in a normal state, and it is allowed to log in to the machine at a specific time for verification. The committee that was dispatched was recorded as “using part of the pledge”

   4. The committee **in turn** verifies the machine information (off-chain verification) and submits the Hash of the confirmed result (approved to go online/rejected to go online)

   5. At a specific time/after all committees submit Hash, the committee is allowed to submit the original confirmation result (agree/reject the machine to go online)

      5.1 The machine goes online successfully (committees that agree to go online>committees that decline): Starting from the next day, machines and committees will be rewarded. At the same time, committees that refuse to go online/submit information different from other committees will be recorded by the system and a penalty to be executed will be added

      5.2 The machine is refused to go online (committees that agree to go online<=committees that are rejected): The committee and machine stash that support going online will be recorded, and a penalty to be executed will be added

   6. Enforcement of punishment: There is a penalty in the system. Before the penalty is executed (two days), the punished person is allowed to make an appeal (additional stake of DBC). The technical committee can cancel the penalty before the penalty is executed. If the appeal is passed, the penalty will be imposed. Otherwise, the punishment will be executed after two days (counting from the occurrence of the punishment).

   7. After the machine is successfully online, control the operation of the account

   8. Claim the rewards from the fund account

   9. Take the machine offline (when rented/online) to handle the fault (to avoid being reported). In this case, when the machine is online (the amount of penalty to be pledged), the offline time of the machine is counted, and the penalty is based on the offline state.

   10. Go offline to modify the machine configuration. Different from direct offline, in this case, the committee needs to review before going online.

3. The main logic of the machine maintenance module (`maintain-committee`)

   1. The successfully online machine can be rented by ordinary users. If you find any problems before/during the rental process, you can report it through `maintain-committee`.

   2. Circumstances that can be reported:

      1). When the machine is rented, the machine cannot be accessed

      2). When the machine is in the rent state, the machine hardware fault

      3). When the machine is in the rent state, it is found that the hardware parameter configuration is falsified

      4). When the machine is idle, the machine cannot be rented

## Rewards and penalties

### reward

stash account rewards:

1. If the machine is online/rented, the daily rewards will be distributed proportionally.

2. Before **_Galaxy Race_** starts (the number of online GPUs in the system reaches a certain number), the rent will be paid to the stash account.

committee reward

1. When the machine is successfully launched for the first time, the effective review committee will be recorded, and for the following two years, 1% of the machine will be awarded every day

2. When the machine fails to go online, the committee that refuses to go online will receive a certain percentage of rewards from the pledge of the stash account when the machine goes online

3. When the machine goes offline due to modified configuration, stash is required to stake a certain amount and the committee will review it. When the machine is successfully launched, the effective review committee will receive the staked amount.

4. When the machine is reported, and the report is approved, the committee will receive a certain percentage of stash punishment

### punish

stash account penalty

1. Machine online rejected

2. Go offline after the machine goes online

3. Reported and offline

4. Modify configuration information offline, but the review fails

committee Punishment

1. Failure to complete the assigned task: When the machine goes online, a committee will be randomly selected for verification. Failure to complete the verification task will be punished

2. Disagreement with other committees: When review is required (including the automatic dispatch of orders when the machine is online, and the committee actively grabs orders when the machine is reported), it is usually necessary for the committee to submit the hash of the result first, and then wait until all committees have submitted the hash. Submit original information. If the original information submitted is inconsistent with most committees, it will be punished

### Representations of punishment

All punishments will be recorded and their execution will be delayed. The punished person is allowed to stake and make representations. The Technical Committee has the authority to cancel the penalty.
