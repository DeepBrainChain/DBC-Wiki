# The committee handles the renter’s report

## TODO

### Supplementary staking

> When the machine is bound for the first time, pledge the DBC required to bind a card. After the machine is approved by the committee, the system will check and increase the pledge corresponding to the number of cards based on the information submitted by the committee (the number of GPUs).
>
> At this time, when the staking is not enough, the machine ID will be placed in the `fulfilling_machine` field of the `online_profile module`--`live_machine` variable, indicating that it needs **supplemental pledge** to go online.

Operation of supplementary pledge:

<img src="./assets/maintain_machine.assets/image-20210628174246842.png" width="50%" height="50%">

### Rebind

> When the machine is rejected by the committee, there are 10 days to declare rebinding.

<img src="./assets/maintain_machine.assets/image-20210628173325854.png" width="50%" height="50%">

### The machine is declared offline due to a fault

> When a machine has fault, in order to avoid being reported, the machine maintainer needs to promptly declare the **machine is offline** to deal with the machine problem in time.

Operation：`onlineProfile` -- `controllerReportOffline`

<img src="./assets/maintain_machine.assets/image-20210628174652781.png" width="50%" height="50%">

### (After being declared offline due to failure) Declaring that the machine is online

> When the machine recovers from the failure, it is necessary to declare that the machine is online in time.

Operation：`onlineProfile`--`controllerReportOnline`

<img src="./assets/maintain_machine.assets/image-20210628174734910.png" width="50%" height="50%">

### Modify the machine configuration offline (will be re-verified)

Operation： onlineProfile -- offlineMachineChangeHardwareInfo

<img src="./assets/maintain_machine.assets/2021-12-15_14-12.png" width="50%" height="50%">

Then execute: onlineProfile - addMachineInfo After re-adding the machine information, it will be reassigned for verification

