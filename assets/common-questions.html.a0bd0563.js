import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as c,c as s,b as e,d as a,a as n,e as o}from"./app.38166bb6.js";var d="/DBC-Wiki/assets/staking_action.f2d8073a.png",h="/DBC-Wiki/assets/unbond.8bc8218a.png",l="/DBC-Wiki/assets/remove_council_voting.5a6118bb.png",u="/DBC-Wiki/assets/exit_candidate.2e52278f.png";const p={},m=n('<h1 id="staking-unbond-common-questions" tabindex="-1"><a class="header-anchor" href="#staking-unbond-common-questions" aria-hidden="true">#</a> Staking/Unbond common questions</h1><h2 id="_1-how-do-validators-nominator-increase-decrease-staking" tabindex="-1"><a class="header-anchor" href="#_1-how-do-validators-nominator-increase-decrease-staking" aria-hidden="true">#</a> 1. How do validators/nominator increase/decrease staking?</h2><p>On the web browser, navigate to:</p><ol><li><p>Go to <code>Network-Stakign-Account Operation</code>, find the account you want to operate.</p></li><li><p>On the right side of the account, click the <code>\u205D</code> symbol, and select according to your needs in the menu:</p></li><li><p>&quot;Bond more&quot;: used to increase staking</p></li><li><p>&quot;Unbound funds&quot;: used to reduce pledge</p></li></ol><p><img src="'+d+'" alt=""></p><ol start="3"><li>In case after clicking <code>Unbind Funds</code>, an interface for unbinding funds appears, select the amount you want to unbind, and click Unbind.</li></ol><p><img src="'+h+'" alt=""></p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>To release the staking, you need to wait 14 days. After 14 days, you need to go to Figure 1 and choose to withdraw the bound funds. Or perform withdrawal of bound funds on the account page</p></div><h2 id="_2-the-election-of-new-validator-candidates-is-currently-underway-because-such-staking-operations-are-not-allowed" tabindex="-1"><a class="header-anchor" href="#_2-the-election-of-new-validator-candidates-is-currently-underway-because-such-staking-operations-are-not-allowed" aria-hidden="true">#</a> 2. &quot;The election of new validator candidates is currently underway. Because such staking operations are not allowed.&quot;</h2><p>In the <code>Network-Staking-Account Operation</code> page, sometimes you will see such information</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>The election of new validator candidates is currently underway. So such staking operations are not allowed.</p></div><p>This is because there is half an hour every day to elect the block producer for the next day. During the election process, pledge-related operations cannot be performed.</p><p>Operate outside of this period (approximately between 10:00~10:30AM (Peking time)).</p><h2 id="_3-how-to-exit-the-validator" tabindex="-1"><a class="header-anchor" href="#_3-how-to-exit-the-validator" aria-hidden="true">#</a> 3. How to exit the validator</h2><p>Go to <code>Network-Staking-Account Operation</code>, find the account you want to operate, and click the &quot;Stop&quot; button on the right side of the account.</p><h2 id="_4-how-to-release-the-staking-in-the-council" tabindex="-1"><a class="header-anchor" href="#_4-how-to-release-the-staking-in-the-council" aria-hidden="true">#</a> 4. How to release the staking in the council</h2><p>When you vote for the council candidates on the page of <code>democracy-council</code>, DBC will be staked to this module, and you need to manually cancel the vote to unbind.</p><p><img src="'+l+'" alt=""></p><h2 id="_5-how-to-release-the-staking-in-democracy" tabindex="-1"><a class="header-anchor" href="#_5-how-to-release-the-staking-in-democracy" aria-hidden="true">#</a> 5. How to release the staking in democracy</h2>',19),_={id:"_5-1-go-to-subscan-to-query-your-own-democratic-voting-records",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#_5-1-go-to-subscan-to-query-your-own-democratic-voting-records","aria-hidden":"true"},"#",-1),w=o(" 5.1 Go to "),f={href:"https://dbc.subscan.io",target:"_blank",rel:"noopener noreferrer"},b=o("Subscan"),k=o(" to query your own democratic voting records"),y={href:"https://dbc.subscan.io",target:"_blank",rel:"noopener noreferrer"},v=o("subscan"),x=n('<ul><li><p>5.2 On the <code>Developer-Transaction</code> page, select <code>democracy</code>-<code>removeVote</code> and execute.</p></li><li><p>5.3 Then, on the <code>Developer-Transaction</code> page, select <code>democracy</code>-<code>unlock</code> and execute.</p></li></ul><h2 id="_6-how-to-withdraw-a-candidate-from-the-committee" tabindex="-1"><a class="header-anchor" href="#_6-how-to-withdraw-a-candidate-from-the-committee" aria-hidden="true">#</a> 6. How to withdraw a candidate from the committee</h2><p><img src="'+u+'" alt=""></p>',3);function q(B,D){const t=r("ExternalLinkIcon");return c(),s("div",null,[m,e("h3",_,[g,w,e("a",f,[b,a(t)]),k]),e("p",null,[e("a",y,[v,a(t)])]),x])}var T=i(p,[["render",q],["__file","common-questions.html.vue"]]);export{T as default};
