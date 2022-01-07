# 机器惩罚机制

Regardless of whether the machine is online or offline, computing workers need to actively send on-chain notifications by themselves. If the machine fails to actively send on-chain notifications, the penalty will be more serious. Once the machine is officially on the chain successfully, you cannot modify any hardware configuration information in the future. When the machine is idle and offline at the same time, the bandwidth and latitude and longitude information can be modified. When the machine receives a penalty, only the pledged coins are deducted. The historical rewards that will be issued in the next 150 days will not be deducted, but there is no new online reward. When the machine deposit is less than 90%, it will be in a warning state, when the machine deposit is less than 80%. %, there will be no online rewards.

Number of pledges:

1). The validator needs to pledge 20,000 dbc in advance

2). The reporter needs to pledge 20,000 dbc in advance, otherwise the report cannot be reported

3). When the validator's deposit is 50% remaining, it will be in a warning state. When the validator's deposit is less than 40%, the validator's qualification will be cancelled. Each time an order is rushed, 1000 pledges are consumed, and the order status is completed, 1000 pledges will be refunded

## 1. In the case that the machine provider takes the initiative to send offline notification:

1). If the machine is in the leased state

The offline machine is more than 3 minutes but not more than 7 minutes, and there is no new online reward, and 2% pledge coins will be deducted. 100% goes to the treasury.

If the machine is offline for more than 7 minutes, 4% pledged coins will be deducted. 100% into the treasury

If the machine is offline for more than 48 hours, 30% of the pledged coins will be deducted, 10% will be given to the user, and 90% will go to the treasury.

If the machine is offline for more than 120 hours, 50% of the deposit will be deducted. 10% goes to users and 90% goes to the treasury.

2). If the machine is in idle state

After being idle for more than 10 days, the machine is offline, and there is no new online reward, and the old reward is still released linearly. (After the machine is offline, if the machine is more than 365 days from the first online time, you can apply for a refund of the deposit)

I have been idle for less than 10 days. At this time, the machine is offline and there is no new online reward. 2% of the pledged coins will be deducted, and all the pledged coins will enter the national treasury.

I have been idle for less than 10 days, when the machine is offline for more than 7 minutes, 4% of pledged coins will be deducted, and all pledged coins will enter the treasury

After being idle for less than 10 days, when the machine is offline for more than 48 hours, 30% of the pledged coins will be deducted, and all the pledged coins will enter the national treasury.

If the machine has been idle for less than 10 days, and the machine is offline for more than 240 hours, 80% of the pledged coins will be deducted. All pledged coins enter the national treasury. If the machine has been online for more than 365 days since the first time it went online, the remaining 20% of the deposit can be refunded.

## 2. If the machine provider does not send an offline notification proactively and is reported instead:

If there is a problem with the machine, but the calculation worker does not send a offline notice, but the reporter has been reported. After the report, the verifier grabs the order and verifies whether there is a problem with the machine. The machine is in a leased state, and only users can report it.

1). When the machine is in a rented state, the machine is not accessible at this time:

The offline machine is more than 3 minutes but not more than 7 minutes, and there is no new online reward, and 4% pledge coins will be deducted. 10% goes to the validator and 90% goes to the treasury.

When offline for more than 7 minutes, 8% pledged coins will be deducted. 10% goes to the validator and 90% goes to the treasury.

When offline for more than 48 hours, 60% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.

When offline for more than 120 hours, 100% deposit will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.

2). When the machine is in a rented state, and at this time it has been determined that the machine has hardware failure:

When offline for less than 4 hours and no new online rewards, 6% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.

When offline for more than 4 hours, 12% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.

When offline for more than 24 hours, 16% of pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.

When offline for more than 48 hours, 60% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.

When offline for more than 120 hours, 100% of the deposit will be deducted, 10% will be given to the user, 20% to the validator, and 70% to the treasury.

3). When the machine is in a leased state, it is determined that the hardware parameter configuration is fraudulent (the actual bandwidth value is less than 30%, the latitude and longitude error is outside 30 kilometers, or other hardware parameters are inconsistent)

When offline for no more than 4 hours, and no new online rewards, 12% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.

When offline for more than 4 hours, 24% of pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.

When offline for more than 24 hours, 32% of pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.

When offline for more than 48 hours, 60% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.

When offline for more than 120 hours, 100% of the deposit will be deducted, 10% will be given to the user, 20% to the validator, and 70% to the treasury.

4). When the machine is in an idle state, and it is determined that the machine can not be rented

When offline for less than 4 hours and no new online rewards, 6% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.

When offline for more than 4 hours, 12% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.

When offline for more than 24 hours, 16% of pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.

When offline for more than 48 hours, 60% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.

When offline for more than 120 hours, 100% of the deposit will be deducted, 10% will be given to the user, 20% to the validator, and 70% to the treasury.

## 3. Grievance rules
1. If the machine is maliciously reported, the machine provider can appeal within 48 hours, otherwise it is invalid. If the complaint is passed, the network will cancel any penalties. If the complaint is not passed, all penalties are doubled.
2. If it is confirmed that the reporter made a malicious report, the 10% equivalent dbc deposit of the reporter will be deducted. Reporters can also appeal within 48 hours
3. If the validator is a minority or malicious verification, the validator's 10% equivalent dbc deposit will be deducted. The verifier can also appeal within 48 hours.
4. In any given report, out of the three parties, machine provider, reporter and validator, as long as one of them has appealed, the other can not appeal again
