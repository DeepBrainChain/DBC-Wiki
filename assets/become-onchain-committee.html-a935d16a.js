import{_ as n,W as a,X as o,Y as e,Z as t,$ as r,a0 as s,H as c}from"./framework-5cecf6de.js";const d="/DBC-Wiki/assets/image-20210623145108399-fd331f21.png",l={},m=e("h1",{id:"dbc-on-chain-committee",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbc-on-chain-committee","aria-hidden":"true"},"#"),t(" DBC On-chain committee")],-1),h={href:"https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io#/explorer",target:"_blank",rel:"noopener noreferrer"},p=s(`<h2 id="_1-responsibilities-of-the-committee" tabindex="-1"><a class="header-anchor" href="#_1-responsibilities-of-the-committee" aria-hidden="true">#</a> 1. Responsibilities of the committee</h2><p>In order to maintain the DBC network, we have set up a &quot;committee&quot; role. The committee has two main responsibilities:</p><ol><li><p>Perform the task of machine verification when the machine is online. When a new machine wants to join the DBC network, three committees in normal state will be randomly selected. The selected committee can verify the machine configuration and submit it to the chain at a designated time.</p></li><li><p>Deal with the report of the renter during the renting period. When the renter encounters a machine fault, the problem will be reported to the chain. If the committee handles the report and the report is confirmed by other committee, the machine will be punished and a fine will be issued to the committee dealing with the problem.</p></li></ol><h2 id="_2-become-a-member-of-the-verification-committee" tabindex="-1"><a class="header-anchor" href="#_2-become-a-member-of-the-verification-committee" aria-hidden="true">#</a> 2. Become a member of the verification committee</h2><p>You can participate in the committee through democracy voting (submission of proposals).</p><h2 id="_3-committee-s-rewards-and-punishments" tabindex="-1"><a class="header-anchor" href="#_3-committee-s-rewards-and-punishments" aria-hidden="true">#</a> 3. Committee&#39;s rewards and punishments</h2><p>In order to encourage committee members to actively maintain the DBC network, committees participating in the work will receive a portion of rewards.</p><ol><li><p>Reward rules for machine verification: After the machine goes online, you will get &quot;online rewards&quot; every day, of which 25% of the rewards are released immediately, and 75% of the rewards are released in the subsequent 150 days. The committee reviewing the machine will share 1% of the machine unlocking reward. The reward time is 2 years. After the reward expires, it will stop and continue to release immediately.</p></li><li><p>(TODO) Rewards for handling reports from hirers:</p></li></ol><h2 id="_4-generate-box-pubkey-for-information-encryption" tabindex="-1"><a class="header-anchor" href="#_4-generate-box-pubkey-for-information-encryption" aria-hidden="true">#</a> 4. Generate box_pubkey for information encryption</h2><p>After passing the community vote, the applicant will be added to the committee module. Committee members need to submit the public key used for information encryption in order to dispatch and grab orders normally.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Install node.js v14 by yourself</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DeepBrainChain-MainChain.git <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> DeepBrainChain-MainChain
<span class="token builtin class-name">cd</span> scripts/test_script/ <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment"># To generate a public key, you need to use a script to specify your own private key</span>
<span class="token function">node</span> gen_boxpubkey.js <span class="token parameter variable">--key</span> <span class="token string">&quot;0x868020ae0687dda7d57565093a69090211449845a7e11453612800b663307246&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-add-box-pubkey-to-the-chain" tabindex="-1"><a class="header-anchor" href="#_5-add-box-pubkey-to-the-chain" aria-hidden="true">#</a> 5. Add box_pubkey to the chain</h2><p>After generating the public key, go to <code>committee</code> --&gt; <code>committeeSetBoxPubkey</code> and click &quot;Submit Transaction&quot; to set.</p><p>When this step is performed, 20000 DBC will be staked, and every time an order is dispatched, &quot;1000 DBC used&quot; will be recorded. After completing the dispatch task, &quot;1000 DBC&quot; will be refunded</p><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',15);function u(b,f){const i=c("ExternalLinkIcon");return a(),o("div",null,[m,e("blockquote",null,[e("p",null,[t("Please go to the mainnet to perform on-chain operations: "),e("a",h,[t("https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io#/explorer"),r(i)])])]),p])}const g=n(l,[["render",u],["__file","become-onchain-committee.html.vue"]]);export{g as default};
