import{_ as o,V as s,W as l,X as e,Y as i,Z as n,$ as a,F as c}from"./framework-1d64dffd.js";const r={},h=e("h1",{id:"dbc-chain-module-description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbc-chain-module-description","aria-hidden":"true"},"#"),i(" DBC chain module description")],-1),d={href:"https://github.com/DeepBrainChain/DeepBrainChain-MainChain",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[e("p",null,[i("Github branch："),e("code",null,"master")])],-1),p={href:"https://github.com/paritytech/substrate/releases/tag/v3.0.0",target:"_blank",rel:"noopener noreferrer"},u=a(`<li><p>Project structure description</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># The main logic of the project is located in the pallets folder, and the hierarchical relationship of the modules is as follows:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Test: According to the dependencies between pallets modules, testcase located in <code>maintain-committee</code>, <code>online-committee</code>, <code>rent-machine</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cargo</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-p</span> online-committee
<span class="token function">cargo</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-p</span> rent-machine
<span class="token function">cargo</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-p</span> maintain-committee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),f=a('<h2 id="dbc-chain-main-module-function-description" tabindex="-1"><a class="header-anchor" href="#dbc-chain-main-module-function-description" aria-hidden="true">#</a> dbc-chain main module function description</h2><ol><li><p>Committee module (<code>committee</code> pallet): add a committee through a referendum (Root authority), committee members (committee) stake a certain DBC, participate in the management of the machine and obtain DBC rewards</p></li><li><p>Main logic of machine online (<code>online-profile</code> pallet and <code>online-committee</code> pallet)</p><ol><li><p>stash account(stash) bond machine controller account (controller)</p></li><li><p>The control account submits the machine online request (submit the machine private key signature for machine authentication stash account), and stake the stash account to a certain DBC</p></li><li><p>The machine is dispatched to the committee in a normal state, and it is allowed to log in to the machine at a specific time for verification. The committee that was dispatched was recorded as “using part of the pledge”</p></li><li><p>The committee <strong>in turn</strong> verifies the machine information (off-chain verification) and submits the Hash of the confirmed result (approved to go online/rejected to go online)</p></li><li><p>At a specific time/after all committees submit Hash, the committee is allowed to submit the original confirmation result (agree/reject the machine to go online)</p><p>5.1 The machine goes online successfully (committees that agree to go online&gt;committees that decline): Starting from the next day, machines and committees will be rewarded. At the same time, committees that refuse to go online/submit information different from other committees will be recorded by the system and a penalty to be executed will be added</p><p>5.2 The machine is refused to go online (committees that agree to go online&lt;=committees that are rejected): The committee and machine stash that support going online will be recorded, and a penalty to be executed will be added</p></li><li><p>Enforcement of punishment: There is a penalty in the system. Before the penalty is executed (two days), the punished person is allowed to make an appeal (additional stake of DBC). The technical committee can cancel the penalty before the penalty is executed. If the appeal is passed, the penalty will be imposed. Otherwise, the punishment will be executed after two days (counting from the occurrence of the punishment).</p></li><li><p>After the machine is successfully online, control the operation of the account</p></li><li><p>Claim the rewards from the fund account</p></li><li><p>Take the machine offline (when rented/online) to handle the fault (to avoid being reported). In this case, when the machine is online (the amount of penalty to be pledged), the offline time of the machine is counted, and the penalty is based on the offline state.</p></li><li><p>Go offline to modify the machine configuration. Different from direct offline, in this case, the committee needs to review before going online.</p></li></ol></li><li><p>The main logic of the machine maintenance module (<code>maintain-committee</code>)</p><ol><li><p>The successfully online machine can be rented by ordinary users. If you find any problems before/during the rental process, you can report it through <code>maintain-committee</code>.</p></li><li><p>Circumstances that can be reported:</p><p>1). When the machine is rented, the machine cannot be accessed</p><p>2). When the machine is in the rent state, the machine hardware fault</p><p>3). When the machine is in the rent state, it is found that the hardware parameter configuration is falsified</p><p>4). When the machine is idle, the machine cannot be rented</p></li></ol></li></ol><h2 id="rewards-and-penalties" tabindex="-1"><a class="header-anchor" href="#rewards-and-penalties" aria-hidden="true">#</a> Rewards and penalties</h2><h3 id="reward" tabindex="-1"><a class="header-anchor" href="#reward" aria-hidden="true">#</a> reward</h3><p>stash account rewards:</p><ol><li><p>If the machine is online/rented, the daily rewards will be distributed proportionally.</p></li><li><p>Before <strong><em>Galaxy Race</em></strong> starts (the number of online GPUs in the system reaches a certain number), the rent will be paid to the stash account.</p></li></ol><p>committee reward</p><ol><li><p>When the machine is successfully launched for the first time, the effective review committee will be recorded, and for the following two years, 1% of the machine will be awarded every day</p></li><li><p>When the machine fails to go online, the committee that refuses to go online will receive a certain percentage of rewards from the pledge of the stash account when the machine goes online</p></li><li><p>When the machine goes offline due to modified configuration, stash is required to stake a certain amount and the committee will review it. When the machine is successfully launched, the effective review committee will receive the staked amount.</p></li><li><p>When the machine is reported, and the report is approved, the committee will receive a certain percentage of stash punishment</p></li></ol><h3 id="punish" tabindex="-1"><a class="header-anchor" href="#punish" aria-hidden="true">#</a> punish</h3><p>stash account penalty</p><ol><li><p>Machine online rejected</p></li><li><p>Go offline after the machine goes online</p></li><li><p>Reported and offline</p></li><li><p>Modify configuration information offline, but the review fails</p></li></ol><p>committee Punishment</p><ol><li><p>Failure to complete the assigned task: When the machine goes online, a committee will be randomly selected for verification. Failure to complete the verification task will be punished</p></li><li><p>Disagreement with other committees: When review is required (including the automatic dispatch of orders when the machine is online, and the committee actively grabs orders when the machine is reported), it is usually necessary for the committee to submit the hash of the result first, and then wait until all committees have submitted the hash. Submit original information. If the original information submitted is inconsistent with most committees, it will be punished</p></li></ol><h3 id="representations-of-punishment" tabindex="-1"><a class="header-anchor" href="#representations-of-punishment" aria-hidden="true">#</a> Representations of punishment</h3><p>All punishments will be recorded and their execution will be delayed. The punished person is allowed to stake and make representations. The Technical Committee has the authority to cancel the penalty.</p>',15);function b(g,v){const t=c("ExternalLinkIcon");return s(),l("div",null,[h,e("ul",null,[e("li",null,[e("p",null,[i("Github Repo："),e("a",d,[i("https://github.com/DeepBrainChain/DeepBrainChain-MainChain"),n(t)])])]),m,e("li",null,[e("p",null,[i("Project is based on substrate "),e("a",p,[i("v3.0.0"),n(t)])])]),u]),f])}const y=o(r,[["render",b],["__file","dbc-chain-logic.html.vue"]]);export{y as default};
