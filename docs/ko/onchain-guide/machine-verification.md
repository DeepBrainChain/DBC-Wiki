# The committee handles the machine on-chain request

## 1. View the orders assigned to you by the system

Navigate to `Developer`-->`Chain Status`-->`Storage`, select the `committeeMachine` storage of the `onlineCommittee` module, and click the `+` sign on the right to see the committee's order status. As is shown, the committee has an order assigned by the system

![](./assets/machine_verification.assets/image-20210601164137286.png)

## 2. View the time interval allocated by the system to the committee for verification

Navigate to `Developer`--`Chain Storage`--`Storage`, select the `committeeOps` method of `onlineCommittee`, and enter your committee account, and the machine ID assigned in the previous step, you can find information similar to the following :

![](./assets/machine_verification.assets/image-20210601164631426.png)

Among them, booked_time represents the order dispatch time. Note that the committee submits the original information between 36 and 48 hours after dispatching the order (that is, the block height booked_time + 4320 ~ booked_time + 5760).

`verify_time` represents the start time assigned by the system to verify the machine information by the committee. As shown in the figure, the committee was assigned 9 opportunities to verify the machine, each with a duration of 4 hours, which is 480 blocks high. At this time, the committee can choose its own convenient time, query the login information of the machine through the front end, and log in to the system to verify the machine.

## 3. Query machine information

### 3.1 Download Postman

Download and install postman. Please go to the official website and install it according to the operating system.

Download json file：http://114.116.21.175:22244/dbc-develop-0.3.7.5.postman_collection.json

Import json file: fiel----import----select json file to import import

![](./assets/machine_verification.assets/133870420-b790637c-cab6-44f9-ba00-493eadc951cd.png)

Replace the client ip address and port with `121.57.95.175:5679`

### 3.2 View detailed host information:

```bash
Signing tool download address: https://github.com/DeepBrainChain/DBC-AIComputingNet/releases/download/0.3.7.3/sign_tool

# Installation dependencies libvirt：
## Ubuntu
sudo apt-get install libvirt
## Arch
yay -S libvirt

# Add execution permissions: ：
chmod +x sign_tool
 # Then execute to sign：
./sign_tool `Wallet address` `private key`
```

![](./assets/machine_verification.assets/133870889-61976abb-ae6b-4cd6-97e3-9e9205745346.png)

Replace in the following figure: sign, nonce, wallet (note: the sign and nonce of the same machine can only be used once), the machine information can be queried

![](./assets/machine_verification.assets/133870573-04dbcb84-9112-4837-b8e4-20db8538c079.png)

![](./assets/machine_verification.assets/133871452-06dde25a-9691-44dc-b35b-124dbece44fd.png)

View machine GPU information

### 3.3 Create a virtual machine

![](./assets/machine_verification.assets/test_create.png)

The creation process is relatively slow, about five minutes to fifteen minutes, check the virtual machine login information and virtual machine status in the view task details of postman. For example, in the returned result, "status": "creating" means that the virtual machine is being created , Just wait

![](./assets/machine_verification.assets/task_info.png)

### 3.4 Enter the created virtual machine and execute `nvidia-smi -L` to view the graphics card type

![](./assets/machine_verification.assets/nvidia.png)

After the query is completed, the virtual machine is deleted, and OK appears, indicating that the deletion is successful

![](./assets/machine_verification.assets/delete.png)

## 4. The committee calculates the hash of the machine information

We have provided a script to calculate the Hash of the information that needs to be filled in:

`https://github.com/DeepBrainChain/DeepBrainChain-MainChain/blob/master/scripts/hash_machine_info.py`

After obtaining the required information, modify the script and execute it to get the hash value. **Please save the information you filled in until the machine is successfully online or fails to go online**

```bash
python3 hash_machine_info.py
```

## 5. The Hash of the machine information submitted by the committee

As shown in the figure, submit the Hash of the machine information 36 hours ago (note that 0x must not be removed when submitting)

Note: In the picture, **leaseCommittee is replaced with onlineCommittee!!!** Others remain unchanged.

![](./assets/machine_verification.assets/image-20210601165736511.png)

## 6. The committee submits the original information of the machine

**Please make sure to submit the original information of the machine within 36~48 hours after the order is dispatched!**

![](./assets/machine_verification.assets/image-20210601165851303.png)

## 7. Inquiry and collection of committee awards

### 7.1 Check rewards

Navigate to Developer--Chain Status--Storage, and query the rewards corresponding to the committee account (committee module committeeStake method). As shown in the figure, `can_claim_reward` is the reward that can be claimed; `claimed_reward` is the reward that has been claimed.

![](./assets/machine_verification.assets/image-20211020112744070.png)

### 7.2 Claim award

Navigate to Developer-Transaction, select the committee account, select the claimReward method of the committee module, and submit the transaction.

![](./assets/machine_verification.assets/image-20211020112948942.png)

## 8. Other operations

### 8.1 The committee adds staking

You can call the `committee` --> `committeeAddStake` method. When (Staking Quantity-Pledge Used) > Staking Quantity\*40%, the committee status is "Order Available"

### 8.2 Committee reduces staking

Call the `committee` --> `committeeReduceStake` method. Note that the minimum pledge is currently 20,000 DBC. If it is less than the minimum pledge after reduction, it will not be possible to reduce the pledge.

### 8.3 Query Penalty (TODO)

The committee can query the rewards by Developer -> ChainStatus, then select method of the committee module. Among them, SlashId is self-incrementing, and this value may not be included, and all the penalties that have not been executed are queried.

As shown in the figure below, you can view the penalty amount (slash_amount), reason (slash_reason), penalty execution time (slash_exec_time), penalty generation time (slash_time) and other information.

![](./assets/machine_verification.assets/image-20211020113330231.png)

### 8.4 Punishment Appeal (TODO)
