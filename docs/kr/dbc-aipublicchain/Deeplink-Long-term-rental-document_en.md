# Deeplink long-term operation process

## 1. List equipment that meets Deeplink mining requirements on the DBC chain

### 1.1 Equipment requirements

+ Reference: https://orion.deeplink.cloud/longterm

### 1.2 Install Deeplink software

+ Software download address: https://www.deeplink.cloud/software

+ If you are using a local disk device, just download and install Deeplink and log in to your wallet

+ If you are using a diskless system to drive a GPU device, please pay attention to the following operations:

+  Install Deeplink in super mode
+ Open the configuration file (%appdata%\deeplink\config.ini)
+ Delete the "uuid" \ "machine_id" in the "[host]" option, keep the token, and delete all the contents of the "[device]" option (the token must be kept, otherwise the GPU device under this diskless server cannot be associated with your wallet)

![image-20250317155921525](/Users/totus/Library/Application Support/typora-user-images/image-20250317155921525.png)

+ Save and shut down, then package this image as a boot image
+ GPU device startup verification, confirm that your GPU device does not use the same ID and password

### 1.3 Add the device to the DBC network

+ Reference: https://deepbrainchain.github.io/DBC-Wiki/onchain-guide/bonding-machine.html

## 2. Rent your device on the DBC chain and bind the EVM wallet address

### 2.1 Rent equipment (Note: Users participating in DeepLink mining must use the fund account address of the listed device to rent, otherwise the launch of the deeplink contract will fail)

![](/Users/totus/Library/Application Support/typora-user-images/image-20250317160654632.png)

### 2.2 Confirm the rental

> Tip: Confirm the rental within 15 minutes after the rental

+ Check the rental order number

![image-20250317160941750](/Users/totus/Library/Application Support/typora-user-images/image-20250317160941750.png)

+ Enter the rental order number to confirm the rental

![image-20250317160850254](/Users/totus/Library/Application Support/typora-user-images/image-20250317160850254.png)

+ Relet machine

![image-20250317161215125](/Users/totus/Library/Application Support/typora-user-images/image-20250317161215125.png)

+ Bond EVM wallet address

![image-20250317161421163](/Users/totus/Library/Application Support/typora-user-images/image-20250317161421163.png)

## 3. Add the device to Deeplink long-term rental mode mining

### 3.1 GPU mining page

+ https://www.dbcscan.io/en/mining/DeepLink (mainnet)

### 3.2 Stake NFT and DLC to start mining

+ Stake NFT

![image-20250317161643208](/Users/totus/Library/Application Support/typora-user-images/image-20250317161643208.png)

+ Pledge DLC (you don’t have to pledge, but the more you pledge, the higher your returns will be)

![image-20250317161807044](/Users/totus/Library/Application Support/typora-user-images/image-20250317161807044.png)

### 3.3 After the pledge is completed, enter the competition page to query your device

+ Competition page: https://orion.deeplink.cloud/device