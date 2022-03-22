# DBC Mainnet Launch and Galaxy Race AMA

1、Where can I buy DeepBrain Chain mining machine?

If you want to participate in mining, you can contact DeepBrain Chain mining machine brands or mining pools, you can buy GPU servers from them, and they can also help the machine in IDC hosting, technical operation and maintenance, etc.

2、Where can I buy DeepBrain Chain mining machine?

If you want to participate in mining, you can contact DeepBrain Chain mining machine brands or mining pools, you can buy GPU servers from them, and they can also help the machine in IDC hosting, technical operation and maintenance, etc.

3、What is the penalty mechanism for machine(s) going offline abnormally (bad connection)?

According to whether the machine is in the rented state the penalty is divided into the following cases:
(1) The machine is in the leased state

- Offline for 3 minutes, deduct 3 days of remaining rewards

- 7 minutes offline, 7 days remaining rewards will be deducted

- 48h offline, all remaining rewards will be deducted

- 120h offline, 50% of the deposit will be deducted

2）The machine is idle

- If the machine is in idle state more than 10 days, at this time offline 7 minutes, machine will automatically be regarded as offline, no new online rewards, the old rewards are still linearly released

- If the machine has been idle for less than 10 days, and it is offline for 7 minutes, the machine will be automatically regarded as offline without new online rewards, and the remaining 7 days rewards will be deducted.

If you are punished, you can appeal within 48 hours, and the appeal will be automatically evaluated by the technical committee

Whether the machine is online or not is automatically reported to the chain through the reporter, and then the supernode will automatically query the machine status.

Any independent individual can be a reporter.

4、What is the configuration of the mining machine? How to purchase? How are hosting issues resolved?

Minimum requirements for GPU server parameters:

1. GPU hardware: 4 GPUs or 2 GPUs, 2080ti/3070/3080/3080ti/3090 (must be Nvidia graphics card, GPU video memory minimum requirement of 8G)

2. Memory: 800g (4 GPUs) or 400g (2 GPUs)

3. CPU: SMP CPU (2.5Ghz and above)

4. hard disk: system disk 600g (SSD), data disk 2T (can be mechanical hard disk)

5. network bandwidth: upstream and downstream 20M or more (4 GPUs) or 10M or more (2 GPUs)

6. have independent fixed IP

7. The machine is placed in the standard data center T3 level or higher to maintain the stability of the network and electricity

you can buy gpu servers on Amazon or from Super micro

5、According to the pledging rules, after 365 days of being online and no user use the machine, the pledged coins can be released after 10 days, but if there are still customers using them, what are the rules of pledge release and what is the exact definition of "user using the machine"?

Each machine is either rented or not, there are records of on-chain renting and DBC rent payment, when the time of on-chain renting is not expired, it is considered to be in use.

6、Suppose a card pledges 100,000 DBCs and the user has used it after one year, the total amount of DBCs cannot be lower than the total amount of coins pledged in the mining pool regardless of how the rent is burnt, is that so?

The burning of DBC is a long-term, continuous act, and the total value of DBCs destroyed by a single GPU is definitely more than the total value of DBCs pledged by a single GPU, given a complete GPU usage cycle (3-5 years).

7、Is it possible to set a reference computing value/output value for each GPU? So that we can choose what GPU to buy.

Computing nodes points calculation rules: Only GPU servers that meet the minimum requirements can be rewarded

A single GPU computing nodes points is calculated based on two indicators: the number of GPU Cuda Core and video memory size, the number of GPU Cuda Core accounts for 80%, the video memory accounts for 20%.

Nvidia's 2080ti model graphics card is the reference standard, the following is the formula for calculating the number of computing nodes points for various models of graphics GPUs.

2080ti computing nodes points: 4352=4352*80%+4352*11/11\*20%

3070 computing nodes points: 5302=5608*80%+5608*8/11\*20%

3070Ti 8G memory version computing nodes points: 5734=6144*80%+6144*8/11\*20%

3070Ti 16G memory version computing nodes points: 6703=6144*80%+6144*16/11\*20%

3080 computing nodes points: 8546=8704*80%+8704*10/11\*20%

3080Ti computing nodes points: 10426=10240*80%+10240*12/11\*20%

3090 computing nodes points: 12977=10496*80%+10496*24/11\*20%.
At present, it is recommended to use 3080ti graphics card, you can quickly rent and get higher returns

8、A single GPU needs to pledge 100,000 DBC, is this 100,000 DBC pledged as a nominator or other pledge methods?

According to the rules, if you want to participate in mining and provide computing resources for the network, in order to ensure the stability and continuity of the service, a single GPU needs to pledge 100,000 DBC. This pledged DBC is the pledge needed to participate in DBC mining, and has nothing to do with the nominator. The nominator is part of the supernode matter, and anyone can vote for the supernode no matter how many DBC they hold.

9、 If miners give their GPU(s) to DBC to unified the deployment, in the situation of an idle GPU how do you count the revenue?

It’s not a unified deployment, but just a unified pricing of DBC network system, the DeepBrain Chain foundation is not responsible for expanding customers, but many GPU cloud platforms deployed on top of the DeepBrain Chain they will expand customers; for a specific GPU server, when the machine is rented, the revenue will be 30% higher than the idle state. So in order to keep the machine as high rental rate as possible, you can refer to the parameters of the machine with high rental rate in the network to configure your mining machine.

10、 if in the future the online GPU supply is greater than demand, if a monthly, annual billing method is adopted, is it possible to determine whether customers use the machine? But if the user rent by time, it is difficult to determine whether the machine is rented. Suppose from the historical data to see the user’s monthly rental frequency is very low, such as 1 time, 1 hour last month, in this situation how to determine whether the GPU can be stopped and ask for the pledged coins to be released?

Each machine is either rented or not, there will be on-chain rental records and payment of DBC rental records, when on the chain the rental time is not due, then the machines are considered to be in a ‘’used’’ state.

If the user is renting by the time, it is also easy to determine whether it is being rented or not, which requires checking the data on the chain.

When the machine is online for more than 365 days and no user uses it for more than 10 consecutive days, you can quit pledging to stop mining and release the pledged DBCs within 3 days, and the previously obtained rewards continue to be released linearly.
