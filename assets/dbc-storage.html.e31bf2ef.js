import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as l,a}from"./app.38166bb6.js";const d={},n=a('<h1 id="onchain-storage" tabindex="-1"><a class="header-anchor" href="#onchain-storage" aria-hidden="true">#</a> Onchain Storage</h1><h2 id="onlineprofile-module" tabindex="-1"><a class="header-anchor" href="#onlineprofile-module" aria-hidden="true">#</a> onlineProfile Module</h2><h3 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> value</h3><table><thead><tr><th style="text-align:left;">Storage</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">onlineStakeParams</td><td style="text-align:left;">OnlineStakeParamsInfo</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">standardGpuPointPrice</td><td style="text-align:left;">StandardGpuPointPrice</td><td style="text-align:left;">A standard example for rent fee calculation(price: USD*10^6)</td></tr><tr><td style="text-align:left;">galaxyIsOn</td><td style="text-align:left;">bool</td><td style="text-align:left;">If galaxy competition is begin: switch 5000 gpu</td></tr><tr><td style="text-align:left;">galaxyOnGpuThreshold</td><td style="text-align:left;">5000</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">sysInfo</td><td style="text-align:left;">SysInfoDetail</td><td style="text-align:left;">Statistics of gpu and stake</td></tr><tr><td style="text-align:left;">nextSlashId</td><td style="text-align:left;">u64</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">allMachineIdSnap</td><td style="text-align:left;">AllMachineIdSnapDetail</td><td style="text-align:left;">The machine that will give out rewards</td></tr><tr><td style="text-align:left;">phaseRewardInfo</td><td style="text-align:left;">PhaseRewardInfoDetail</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">liveMachines</td><td style="text-align:left;">LiveMachine</td><td style="text-align:left;">Machine with data stored in the system</td></tr><tr><td style="text-align:left;">currentEra</td><td style="text-align:left;">EraIndex</td><td style="text-align:left;">Current day in this Module \uFF082880 Block/Era\uFF09</td></tr></tbody></table><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h3><table><thead><tr><th style="text-align:left;">Storage</th><th style="text-align:left;">KeyType</th><th style="text-align:left;">ValueType</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">stashController</td><td style="text-align:left;">AccountId</td><td style="text-align:left;">AccountId</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">controllerStash</td><td style="text-align:left;">AccountId</td><td style="text-align:left;">AccountId</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">machinesInfo</td><td style="text-align:left;">MachineId</td><td style="text-align:left;">MachineInfo</td><td style="text-align:left;">Detail info of machines</td></tr><tr><td style="text-align:left;">stashMachines</td><td style="text-align:left;">AccountId</td><td style="text-align:left;">StashMachine</td><td style="text-align:left;">Statistics of stash account</td></tr><tr><td style="text-align:left;">stashServerRooms</td><td style="text-align:left;">AccountId</td><td style="text-align:left;"><code>Vec&lt;H256&gt;</code></td><td style="text-align:left;">Server rooms in stash account</td></tr><tr><td style="text-align:left;">controllerMachines</td><td style="text-align:left;">AccountId</td><td style="text-align:left;"><code>Vec&lt;MachineId&gt;</code></td><td style="text-align:left;">All machines controlled by controller</td></tr><tr><td style="text-align:left;">erasStashPoints</td><td style="text-align:left;">EraIndex</td><td style="text-align:left;">EraStashPoints</td><td style="text-align:left;">Current Era snapshot of score for each stash account</td></tr><tr><td style="text-align:left;">erasMachinePoints</td><td style="text-align:left;">EraIndex</td><td style="text-align:left;"><code>BTreeMap&lt;MachineId, MachineGradeStatus&gt;</code></td><td style="text-align:left;">Current Era snapshot of the score of each machine</td></tr><tr><td style="text-align:left;">stashStake</td><td style="text-align:left;">AccountId</td><td style="text-align:left;">Balance</td><td style="text-align:left;">Total staking of funds account</td></tr><tr><td style="text-align:left;">machineRecentReward</td><td style="text-align:left;">MachineId</td><td style="text-align:left;">MachineRecentRewardInfo</td><td style="text-align:left;">store max 150 era reward</td></tr><tr><td style="text-align:left;">eraReward</td><td style="text-align:left;">EraIndex</td><td style="text-align:left;">Balance</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">pendingSlash</td><td style="text-align:left;">u64</td><td style="text-align:left;">OPPendingSlashInfo</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">pendingSlashReview</td><td style="text-align:left;">SlashId</td><td style="text-align:left;">OPPendingSlashReviewInfo</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">rentedFinished</td><td style="text-align:left;">MachineId</td><td style="text-align:left;">AccountId</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="doublemap" tabindex="-1"><a class="header-anchor" href="#doublemap" aria-hidden="true">#</a> DoubleMap</h3><table><thead><tr><th style="text-align:left;">\u5B58\u50A8</th><th style="text-align:left;">\u952E\u7C7B\u578B</th><th style="text-align:left;">\u503C\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">userMutHardwareStake</td><td style="text-align:left;">(AccountId,MachineId)</td><td style="text-align:left;">UserMutHardwareStakeInfo</td><td style="text-align:left;">Reonline to change hardware, should stake some balance</td></tr><tr><td style="text-align:left;">posGpuInfo</td><td style="text-align:left;">(Longitude, Latitude)</td><td style="text-align:left;">PosInfo</td><td style="text-align:left;">Statistics of gpu in one position</td></tr><tr><td style="text-align:left;">erasMachineReward</td><td style="text-align:left;">(EraIndex, MachineId)</td><td style="text-align:left;">Balance</td><td style="text-align:left;">Total rewards obtained by machine in an Era</td></tr><tr><td style="text-align:left;">erasMachineReleasedReward</td><td style="text-align:left;">(EraIndex,MachineId)</td><td style="text-align:left;">Balance</td><td style="text-align:left;">The total machine reward released in an Era</td></tr><tr><td style="text-align:left;">erasStashReward</td><td style="text-align:left;">(EraIndex, AccountId)</td><td style="text-align:left;">Balance</td><td style="text-align:left;">Total stash rewards received by a certain Era</td></tr><tr><td style="text-align:left;">erasStashReleasedReward</td><td style="text-align:left;">(EraIndex, AccountId)</td><td style="text-align:left;">Balance</td><td style="text-align:left;">Total stash rewards unlocked by a certain Era</td></tr></tbody></table><h2 id="onlinecommittee-\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#onlinecommittee-\u6A21\u5757" aria-hidden="true">#</a> onlineCommittee \u6A21\u5757</h2><h3 id="value-1" tabindex="-1"><a class="header-anchor" href="#value-1" aria-hidden="true">#</a> Value</h3><table><thead><tr><th style="text-align:left;">Storage</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">nextSlashId</td><td style="text-align:left;">u64</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">unhandledSlash</td><td style="text-align:left;"><code>Vec&lt;SlashId&gt;</code></td><td style="text-align:left;"></td></tr></tbody></table><h3 id="map-1" tabindex="-1"><a class="header-anchor" href="#map-1" aria-hidden="true">#</a> Map</h3><table><thead><tr><th style="text-align:left;">Storage</th><th style="text-align:left;">KeyType</th><th style="text-align:left;">ValueType</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">committeeMachine</td><td style="text-align:left;">AccountId</td><td style="text-align:left;">OCCommitteeMachineList</td><td style="text-align:left;">A machine that stores the different confirmation stages of the user&#39;s subscription</td></tr><tr><td style="text-align:left;">machineCommittee</td><td style="text-align:left;">MachineId</td><td style="text-align:left;">OCMachineCommitteeList</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">machineSubmitedHash</td><td style="text-align:left;">MachineId</td><td style="text-align:left;"><code>Vec&lt;[u8; 16]&gt;</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">committeeOps</td><td style="text-align:left;"><code>(AccountId,MachineId)</code></td><td style="text-align:left;">OCCommitteeOps</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">pendingSlash</td><td style="text-align:left;">SlashId</td><td style="text-align:left;">OCPendingSlashInfo</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">pendingSlashReview</td><td style="text-align:left;">SlashId</td><td style="text-align:left;">OCPendingSlashReviewInfo</td><td style="text-align:left;"></td></tr></tbody></table><h2 id="rentmachine-module" tabindex="-1"><a class="header-anchor" href="#rentmachine-module" aria-hidden="true">#</a> rentMachine Module</h2><h3 id="map-2" tabindex="-1"><a class="header-anchor" href="#map-2" aria-hidden="true">#</a> Map</h3><table><thead><tr><th style="text-align:left;">Storage</th><th style="text-align:left;">KeyType</th><th style="text-align:left;">ValueType</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">userRented</td><td style="text-align:left;">AccountId</td><td style="text-align:left;"><code>Vec&lt;MachineId&gt;</code></td><td style="text-align:left;">Store the list of machines currently rented by the user</td></tr><tr><td style="text-align:left;">rentOrder</td><td style="text-align:left;">MachineId</td><td style="text-align:left;">RentOrderDetail</td><td style="text-align:left;">Details of a machine currently rented by the user</td></tr><tr><td style="text-align:left;">pendingConfirming</td><td style="text-align:left;">MachineId</td><td style="text-align:left;">AccountId</td><td style="text-align:left;">Waiting for the user to confirm the successful rent of the machine</td></tr><tr><td style="text-align:left;">pending_rent_ending</td><td style="text-align:left;">BlockNumber</td><td style="text-align:left;"><code>Vec&lt;MachineId&gt;</code></td><td style="text-align:left;">Record the machine that will end the rent at each block</td></tr><tr><td style="text-align:left;">userTotalStake</td><td style="text-align:left;">AccountId</td><td style="text-align:left;">Balance</td><td style="text-align:left;">Store the total pledge amount of each user in the module</td></tr></tbody></table><h3 id="value-2" tabindex="-1"><a class="header-anchor" href="#value-2" aria-hidden="true">#</a> Value</h3><table><thead><tr><th style="text-align:left;">storage</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">rentFeePot</td><td style="text-align:left;">AccountId</td><td style="text-align:left;">Rent payment destination address (after the Galaxy Contest is opened, use this account to destroy the rent)</td></tr></tbody></table>',18),i=[n];function s(r,h){return e(),l("div",null,i)}var g=t(d,[["render",s],["__file","dbc-storage.html.vue"]]);export{g as default};
