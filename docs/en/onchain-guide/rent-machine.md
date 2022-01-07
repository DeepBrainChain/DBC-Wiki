# # On-chain rent machine

## Step 1: Determine the machine to be rented

-Open [Mainnet Wallet](https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io)

-Create a wallet: Account-->Add account (The mnemonic phrase must be saved, if the mnemonic phrase is lost, the account cannot be retrieved, and the currency is lost)

-Go to [Galactic Race Machine List](https://galaxyrace.deepbrainchain.org/table) to find the corresponding type of idle machine

![find_machine](./assets/rent_machine.assets/find_machine.png)

## Step 2: Rent a machine on the chain

- Navigate to `Developer`---`Transactions`---`rentMachine` ----`rentMachine(machine_id, duration)`

- machine_id Enter the id of the machine to be rented, the `0x` in the input box must be deleted first

- duration enter the number of days you need to rent

- After the input is complete, click Submit Transaction, and confirm whether the machine is available within 30 minutes. (If the lease is not confirmed within 30 minutes, the payment of `dbc` will be refunded, but the transaction fee of 10 `dbc` cannot be refunded)

- For related operations such as creating a virtual machine, please [reference](https://github.com/DeepBrainChain/DBC-DOC/blob/master/creat_macine/create_macine.md)

## Step 3: Confirm availability and lease

::: warning
Before confirming, you must confirm that the virtual machine can start normally. After confirming that the lease is successful, it means that the machine is successfully leased, and the DBC rent cannot be refunded
:::

- Navigate to `Developer`----`Transactions`----`rentMachine`----`confirmRent(machine_id)`

- Enter the machine id and submit the transaction

## Step 4: Relet Machine Rent

::: warning
The virtual machine will be automatically stopped when the machine expires to ensure that the lease is renewed successfully before the lease expires
:::

- Navigate to `Developer`----`Transactions`----`rentMachine`----`reletMachine(machine_id, add_duration)`

- Enter the machine id and the number of days to renew the lease, and submit the transaction
