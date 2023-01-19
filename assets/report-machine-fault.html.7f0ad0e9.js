import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as a,a as i}from"./app.38166bb6.js";var r="/DBC-Wiki/assets/1.ec7214b8.png",o="/DBC-Wiki/assets/2.8df94983.png",n="/DBC-Wiki/assets/3.e103f827.png",s="/DBC-Wiki/assets/4.59a4405d.png",c="/DBC-Wiki/assets/5.f58b612b.png",d="/DBC-Wiki/assets/6.5d23a447.png",h="/DBC-Wiki/assets/7.2144d2e0.png";const l={},p=i('<h1 id="machine-renter-reports-machine-malfunction" tabindex="-1"><a class="header-anchor" href="#machine-renter-reports-machine-malfunction" aria-hidden="true">#</a> Machine renter reports machine malfunction</h1><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>Documentation is under development</p></div><p>The four types of machine faults that can be reported are divided into two categories according to how they are handled:</p><ol><li><p>After the machine is leased <strong>Inaccessible fault(<code>RentedInaccessible(MachineId)</code>)</strong>,</p></li><li><p>Other types of fault, including</p><ul><li><p>The machine is rented, but has a <strong>hardware malfunction(<code>RentedHardwareMalfunction(ReportHash, BoxPubkey)</code>)</strong>;</p></li><li><p>The machine is rented, but <strong>hardware counterfeit(<code>RentedHardwareCounterfeit(ReportHash, BoxPubkey)</code>)</strong>;</p></li><li><p>The machine is online, but <strong>cannot be rented(<code>OnlineRentFailed(ReportHash, BoxPubkey)</code>)</strong></p></li></ul></li></ol><p>Below is a brief description of the two reporting processes:</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>In this document, the validator is the validating committee, so the descriptions validator/committee may be used interchangeably.</p><p>The reporter can cancel the report if and only if someone grabs the order.</p></div><h2 id="_1-the-machine-cannot-be-accessed-after-being-leased" tabindex="-1"><a class="header-anchor" href="#_1-the-machine-cannot-be-accessed-after-being-leased" aria-hidden="true">#</a> 1. The machine cannot be accessed after being leased</h2><p>This type is designed so that the verifier can quickly respond to the report, and the verifier can use the program to monitor this report on the chain and automatically grab the order, automatically determine whether the report is valid, and automatically submit the processing results. Therefore, such reports are the fastest in troubleshooting. Reporting information is submitted on-chain in clear text to accommodate this treatment.</p><h3 id="_1-1-role-reporter-report-to-the-chain" tabindex="-1"><a class="header-anchor" href="#_1-1-role-reporter-report-to-the-chain" aria-hidden="true">#</a> 1.1. [Role: Reporter] Report to the chain</h3><p>Execute <code>report_machine_fault</code>, the reporter needs to select <code>Fault Type</code> as <code>RentedInaccessible</code>, and provide the machine ID</p><p>Payment: 10 DBC (additional fee for this type of report)</p><p>Stake 1000 DBC</p><p><img src="'+r+'" alt=""></p><h3 id="_1-2-role-validator-order-grabbing" tabindex="-1"><a class="header-anchor" href="#_1-2-role-validator-order-grabbing" aria-hidden="true">#</a> 1.2. [Role: Validator] Order grabbing</h3><p>Execute <code>committee_book_report</code></p><p>After the first validator grabs the order, the verification result will be submitted within 5 minutes, and the verification will end in 10 minutes.</p><p>The committee can monitor maintainCommittee.bookableReport to see if there is a bookable report</p><p>You can query maintainCommittee.reportInfo to query the specific information of the report (error type, reporting time, etc.)</p><p>Payout: 10 DBC</p><p>Staking: 0 DBC (No committee pledge is required for this type of report)</p><h3 id="_1-3-role-other-validator-order-grabbing" tabindex="-1"><a class="header-anchor" href="#_1-3-role-other-validator-order-grabbing" aria-hidden="true">#</a> 1.3. [Role: (Other) Validator] Order grabbing</h3><ul><li><p>execute <code>committee_book_report</code></p></li><li><p>Need to grab the order within 5 minutes (10 blocks) after the first validator grabs the order</p></li><li><p>Up to 3 validators to grab orders</p></li><li><p>Consume 10 DBC to pledge 1000DBC</p></li></ul><h3 id="_1-4-role-order-grabbed-validator-submit-hash-of-confirmation-information" tabindex="-1"><a class="header-anchor" href="#_1-4-role-order-grabbed-validator-submit-hash-of-confirmation-information" aria-hidden="true">#</a> 1.4. [Role: (Order grabbed) Validator] Submit Hash of <code>confirmation information</code>:</h3><p>Execute <code>committee_submit_verify_hash</code></p><p><img src="'+o+'" alt=""></p><div class="custom-container tip"><p class="custom-container-title">Hash generation method</p><p>hash(&quot;report_id&quot; + &quot;committee_rand_str&quot; + &quot;is_support&quot;); Please modify the script when generating hash: <code>https://github.com/DeepBrainChain/DeepBrainChain-MainChain/scripts/hash_machine_inaccessible.py</code></p></div><h3 id="_1-5-role-order-grabbed-validator-submit-confirmation-information" tabindex="-1"><a class="header-anchor" href="#_1-5-role-order-grabbed-validator-submit-confirmation-information" aria-hidden="true">#</a> 1.5. [Role: (Order grabbed) Validator] Submit <code>confirmation information</code></h3><ul><li>Validators are allowed to submit original information only if all committees that are vying for the order have submitted the hash or 5 minutes (10 blocks) from the first order rush</li></ul><p>Execute <code>committee_submit_inaccessible_raw</code></p><p><img src="'+n+`" alt=""></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>Waiting for all committees that have successfully grabbed the order to submit the original information or 10 minutes after the first validator grabbed the order, the committee&#39;s verification results will be counted and processed.</p></div><h3 id="_1-6-system-judgment-results" tabindex="-1"><a class="header-anchor" href="#_1-6-system-judgment-results" aria-hidden="true">#</a> 1.6. System Judgment Results</h3><p>TODO</p><h2 id="_2-other-faults" tabindex="-1"><a class="header-anchor" href="#_2-other-faults" aria-hidden="true">#</a> 2. Other faults</h2><p>As mentioned, other failures include:</p><ul><li><p>The machine is rented, but has a <strong>hardware failure(<code>RentedHardwareMalfunction(ReportHash, BoxPubkey)</code>)</strong>;</p></li><li><p>The machine is rented, but <strong>hardware counterfeit(<code>RentedHardwareCounterfeit(ReportHash, BoxPubkey)</code>)</strong>;</p></li><li><p>The machine is online, but <strong>cannot rent(<code>OnlineRentFailed(ReportHash, BoxPubkey)</code>)</strong></p></li></ul><h3 id="_2-1-role-reporter-report-to-the-chain" tabindex="-1"><a class="header-anchor" href="#_2-1-role-reporter-report-to-the-chain" aria-hidden="true">#</a> 2.1. [Role: Reporter] Report to the chain</h3><p>To execute <code>report_machine_fault</code>, the reporter needs to select <code>fault type</code> as one of the above three errors. Here is an example of <code>cannot rent</code>:</p><p>Generate report Hash: According to the report content, modify the <code>machine_id</code> and <code>rand_str</code> in the script, and then execute the following command to generate the report Hash</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u276F python hash_machine_fault.py
ReporterHash: 0x00e8af0f2ad79a07985e42fa5a045a55
CommitteeHash: 0xc45a1e9471d6e0e539febe382b009070
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>At the same time, you also need to provide your own BoxPubkey for decryption after the committee receives the encrypted information:</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>If it is a multi-signature account, or if you do not know the private key, you can regenerate an SS58 account and use the SS58 private key to generate BoxPubkey. Subsequent operations can use this key pair.</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u276F node gen_boxpubkey.js --key 0xeb2a67b0d6d3e457076c3d4f9633e7400921fa49887324131b4a9520e5971c4c
0x20859b983f7f4f3aaf0a41915d0e61b27f90f9b0ffb9310eeee201a997c8b910
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Then call the report function:</p><p><img src="`+s+`" alt=""></p><h3 id="_2-2-role-validator-order-grabbing" tabindex="-1"><a class="header-anchor" href="#_2-2-role-validator-order-grabbing" aria-hidden="true">#</a> 2.2. [Role: Validator] Order grabbing</h3><p>Execute <code>committee_book_report</code></p><p>After the first validator grabs the order, the verification result will be submitted within 5 minutes, and the verification will end in 10 minutes.</p><p>The committee can monitor maintainCommittee.bookableReport to see if there is a bookable report</p><p>You can query maintainCommittee.reportInfo to query the specific information of the report (error type, reporting time, etc.)</p><p>Payout: 10 DBC</p><p>Staking: 1000 DBC</p><h3 id="_2-3-role-reporter-submit-encrypted-information" tabindex="-1"><a class="header-anchor" href="#_2-3-role-reporter-submit-encrypted-information" aria-hidden="true">#</a> 2.3 [Role: Reporter] Submit encrypted information</h3><p>After the validator grabs the order, the reporter needs to submit the encrypted information to the order grabbing committee within 30 minutes (60 blocks). If the encrypted information is not provided over time, the report will fail (the reporter will be punished for this).</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Generate encrypted message</span>
<span class="token function">node</span> seal_msg.js --sender_privkey 0x0cdc17e4cd84743c66bae7761ad354d423c93ac1e398630575d91371d6f713ce --receiver_box_pubkey 0x20da91ba45f5ed8fddd40d5439f817c9f00750694ed5c70d17e421caf15f437b --msg <span class="token string">&quot;abcdefg bcdefa&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>in which,</p><p><code>--sender_privkey</code> is the private key of the whistleblower; <code>--receiver_box_pubkey</code> is the box_pubkey of the committee (receiver), which can be queried in the following ways: <code>--msg</code> is the error message to be encrypted, such as <code>machine_id has a memory failure</code>, note: <strong><code>--msg</code> is the <code>machine_id</code> to be reported + the random string of the reporter + error message</strong>, such as <code>8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48[abcdef] Supplementary information, can be left blank</code></p><h3 id="_2-4-role-committee-decrypt-after-receiving-encrypted-information" tabindex="-1"><a class="header-anchor" href="#_2-4-role-committee-decrypt-after-receiving-encrypted-information" aria-hidden="true">#</a> 2.4 [Role: Committee] Decrypt after receiving encrypted information</h3><p>When the reporter provides the encrypted information, the committee needs to decrypt the information to query the information submitted by the reporter</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">node</span> open_msg.js --sender_box_pubkey 0xe30cac79ec5fe7c9811ed9f1a18ca3806b22798e24b7d9f9424b1a27bde3e866 --receiver_privkey 0x171baa0f7baa4fa7e2dd94b8f9efc0b95034a4ad5f3aba5b6b923e38130c3f0d --sealed_msg 0x01405deeef2a8b0f4a09380d14431dd10fde1ad62b3c27b3fbea4701311d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>in, <code>--sender_box_pubkey</code> is the reporter&#39;s box_pubkey, which can be queried through the information in <code>maintainCommittee.reportInfo.machine_fault_type</code>;</p><p><code>--receiver_privkey</code> is the private key corresponding to the committee&#39;s own box_pubkey <code>--sealed_msg</code> is the encrypted message received by the committee</p><p>After the decryption is completed, the committee needs to judge whether there is a problem with the machine according to the actual situation. and submit it to the chain</p><p>Query Committee BoxPubkey:</p><p><img src="`+c+'" alt=""></p><h3 id="_2-5-role-committee-determine-the-machine-failure-information-and-submit-it-to-the-chain" tabindex="-1"><a class="header-anchor" href="#_2-5-role-committee-determine-the-machine-failure-information-and-submit-it-to-the-chain" aria-hidden="true">#</a> 2.5 [Role: Committee] Determine the machine failure information and submit it to the chain</h3><p><img src="'+d+'" alt=""></p><p>\u5176\u4E2D\uFF0C<code>extra_err_info</code>\u4E3A\u59D4\u5458\u4F1A\u5224\u65AD\u7684\uFF0C\u53EF\u80FD\u4E0D\u540C\u4E8E\u62A5\u544A\u4EBA\u8BA4\u4E3A\u7684\u9519\u8BEF\u539F\u56E0\u3002\u8BE5\u5B57\u6BB5\u4E5F\u53EF\u7559\u7A7A</p><p>Among them, <code>extra_err_info</code> is judged by the committee and may be different from the reason for the error that the reporter believes. This field can also be left blank</p><h2 id="_3-result-execution-and-representation" tabindex="-1"><a class="header-anchor" href="#_3-result-execution-and-representation" aria-hidden="true">#</a> 3. Result execution and representation</h2><h3 id="_3-1-rewards-and-penalties-after-reporting" tabindex="-1"><a class="header-anchor" href="#_3-1-rewards-and-penalties-after-reporting" aria-hidden="true">#</a> 3.1 Rewards and penalties after reporting</h3><p>When the report is completed, penalties and rewards will be given according to the results submitted by the committee. simply put,</p><ul><li><p>For validators,</p><ul><li><p>Committees that do not complete all tasks will be penalized, such as booking a report/submitting a verification hash without final submission confirmation</p></li><li><p>When the verification result is different from the majority of the committees, if 2 committees oppose the report and 1 committee supports the report, the supporting committee will be punished, and the remaining 2 committees will be rewarded</p></li><li><p>Rewarded when successfully completing the verification machine failure task and agreeing with the majority of the rest of the committee (both think the machine is faulty/non-faulty)</p></li></ul></li><li><p>For whistleblowers</p><ul><li><p>When the whistleblower reports the type of failure that requires the submission of encrypted information, if the encrypted information is not submitted within half an hour of the committee&#39;s order grabbing, the report will fail and will be punished</p></li><li><p>Penalties for whistleblowers when their report is disapproved by a majority of the committee</p></li><li><p>Rewarded when a report is supported by a majority of the committee</p></li></ul></li><li><p>for machine_stash,</p><p>When the report is successful, you will be punished</p></li></ul><h3 id="_3-2-claims-after-rewards-and-punishments-occur" tabindex="-1"><a class="header-anchor" href="#_3-2-claims-after-rewards-and-punishments-occur" aria-hidden="true">#</a> 3.2 Claims after Rewards and Punishments Occur</h3><p>When the report occurs, the punishment will be recorded on the chain and executed *<em>two days after the punishment occurs (2880</em>2 blocks), allowing the punished committee/reporter to appeal. Appeals will be handled by the Technical Committee. The penalty will be lifted after the technical committee determines that the appeal is valid.</p><p>Among them, when the machine is successfully taken off the shelf due to the report, it needs to be checked and dealt with, and then put on the shelf as soon as possible to reduce the penalty. When the machine is wrongly punished, maybe after it is put on the shelves, make an appeal (there are also 2 days), and request the technical committee to judge.</p><p>Committees that have not successfully completed their assignments are not allowed to make representations</p><p>Appeals require a certain amount of coins to be pledged. When the appeal fails, the pledged coins will be deducted.</p><h2 id="_4-technical-committee-cancellation-of-penalty" tabindex="-1"><a class="header-anchor" href="#_4-technical-committee-cancellation-of-penalty" aria-hidden="true">#</a> 4. Technical Committee Cancellation of Penalty</h2><p>When the punished person pledges a certain amount of DBC and submits an appeal to the technical committee, the technical committee can cancel the punishment before the punishment is executed.</p><p>Just call the cancellation penalty (<code>cancel_slash</code>) in the corresponding module, where the threshold is set to 1 (1/5), and the <code>slash_id</code> is the penalty that needs to be cancelled. Such as,</p><h3 id="_4-1-role-technical-committee-cancellation-of-penalty-based-on-appeal" tabindex="-1"><a class="header-anchor" href="#_4-1-role-technical-committee-cancellation-of-penalty-based-on-appeal" aria-hidden="true">#</a> 4.1 [Role: Technical Committee] Cancellation of penalty based on appeal</h3><ul><li><p>To cancel the reporter&#39;s penalty, you need to call <code>maintainCommittee--cancelReporterSlash</code></p></li><li><p>To cancel the penalty of stash (caused by the machine being offline and then online), you need to call <code>onlineProfile--cancelSlash</code></p></li><li><p>Cancel the penalty of the online committee (due to no work assigned, or inconsistent with the views of most other committees handling the order), need to call <code>onlineCommittee-cancelSlash</code></p></li></ul><p><img src="'+h+'" alt=""></p>',84),m=[p];function u(f,b){return t(),a("div",null,m)}var _=e(l,[["render",u],["__file","report-machine-fault.html.vue"]]);export{_ as default};
