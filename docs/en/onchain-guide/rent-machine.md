# On-chain rent machine

## Step 1: Determine the machine to be rented

- Open [Mainnet Wallet](https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io)

- Create a wallet: Account-->Add account (The mnemonic phrase must be saved, if the mnemonic phrase is lost, the account cannot be retrieved, and the currency is lost)

- Go to [Galactic Race Machine List](https://galaxyrace.deepbrainchain.org/table) to find the corresponding type of idle machine

![find_machine](./assets/rent_machine.assets/find_machine.png)

## Step 2: Rent a machine on the chain

- Navigate to `Developer`---`Transactions`---`rentMachine` ----`rentMachine(machine_id, rent_gpu_num, duration)`

- `machine_id`: Enter the id of the machine to be rented, the `0x` in the input box must be deleted first

- `rent_gpu_num`: Enter the number of GPUs to rent this time (no more than the machine's free GPU count; billing is per-GPU and one machine can be rented by multiple renters)

- `duration`: Enter the time to be rented (unit: 1 BlockNumber = 6 seconds, the minimum rental time is 300 blocks. If it exceeds half an hour, it must be a multiple of 300 blocks. )

- After the input is complete, click Submit Transaction. On success a **rent order id `rent_id`** is generated (see it in the `rentMachine.Rent` event, or query `Developer`-`Chain state`-`rentMachine`-`userOrder(your account)`). Use this `rent_id` for confirm and relet below.

- After submitting, confirm whether the machine is available within 30 minutes. (If the lease is not confirmed within 30 minutes, the payment of `dbc` will be refunded, but the transaction fee of 10 `dbc` cannot be refunded)

- For related operations such as creating a virtual machine, please [reference](https://github.com/DeepBrainChain/DBC-DOC/blob/master/creat_macine/create_macine.md)

## Step 3: Confirm availability and lease

::: warning
Before confirming, you must confirm that the virtual machine can start normally. After confirming that the lease is successful, it means that the machine is successfully leased, and the DBC rent cannot be refunded
:::

- Navigate to `Developer`----`Transactions`----`rentMachine`----`confirmRent(rent_id)`

- Enter the `rent_id` obtained in Step 2 and submit the transaction

## Step 4: Relet Machine Rent

::: warning
The virtual machine will be automatically stopped when the machine expires to ensure that the lease is renewed successfully before the lease expires
:::

- Navigate to `Developer`----`Transactions`----`rentMachine`----`reletMachine(rent_id, relet_duration)`

- Enter the `rent_id` and the renew duration (`relet_duration`, in blocks, must be a multiple of 300; e.g. 14400 for one more day), and submit the transaction
