import{_ as n,V as r,W as s,X as e,Y as o,Z as t,$ as i,F as p}from"./framework-1d64dffd.js";const d="/assets/1-8431ad99.png",c="/assets/2-ffe4f98b.png",l="/assets/3-083e5f0d.png",h="/assets/4-7bcc890f.png",g="/assets/5-e3ed5af9.png",u="/assets/6-e06122b0.png",m="/assets/7-04bf4d0a.png",f={},b=i('<h1 id="guide-proposing-a-referendum" tabindex="-1"><a class="header-anchor" href="#guide-proposing-a-referendum" aria-hidden="true">#</a> Guide | Proposing a referendum</h1><p>Referenda are discrete events, have a fixed period where voting happens, and then are tallied and the function call is made if the vote is approved.</p><p>Referenda can be started in one of several ways for example, from the public and council. This guide shows how the general public can propose a referendum.</p><p>Anyone can propose a referendum by depositing the minimum amount of tokens for a certain period (number of blocks). If someone agrees with the proposal, they may deposit tokens to support it — this action is called second. The proposal with the highest amount of bonded support will be selected to be a referendum in the next voting cycle.</p><h2 id="_1-submitting-a-preimage" tabindex="-1"><a class="header-anchor" href="#_1-submitting-a-preimage" aria-hidden="true">#</a> 1. Submitting a Preimage</h2><p>Before submitting a proposal, you need to submit a preimage first.</p><p>Click on the “Submit preimage” button</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Choose the system you want to change, fill in the required set code, and <strong>copy the preimage hash</strong>.</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>For example, if someone wants to propose a force transfer, he needs to choose a “balances” system and provide the source, dest and value.</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2-submitting-a-proposal" tabindex="-1"><a class="header-anchor" href="#_2-submitting-a-proposal" aria-hidden="true">#</a> 2. Submitting a proposal</h2><p>After submitting the preimage, click on “submit proposal”, and paste the preimage hash here.</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Once the transaction is included you should see the information for your already submitted proposal.</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',17),_={href:"https://www.reddit.com/r/DBC_Council/",target:"_blank",rel:"noopener noreferrer"},y=i('<h2 id="_3-seconding-a-proposal" tabindex="-1"><a class="header-anchor" href="#_3-seconding-a-proposal" aria-hidden="true">#</a> 3. Seconding a Proposal</h2><p>Seconding a proposal means that you are agreeing with the proposal and backing it with tokens. The bonded tokens will be released once the proposal is tabled (that is, brought to a vote), just like the original proposer’s bond. By seconding a proposal you will move it higher up the rank of proposals. The most seconded proposal — in value, not number of supporters — will be brought to a referendum every launch period. Note that it is possible for a single account to second a proposal multiple times.</p><p>To second a proposal, navigate to the proposal you want to second and click on the “Second” button.</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Once successful you will see your second appear in the proposal details.</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_4-more-details-about-the-mechanism" tabindex="-1"><a class="header-anchor" href="#_4-more-details-about-the-mechanism" aria-hidden="true">#</a> 4. More Details about the mechanism</h2><p>DBC mainnet is developed through Polkadot substrate, so the democracy mechanism of DBC is similar to that of Polkadot. To learn more about the referendum system, you can see</p>',8),k={href:"https://wiki.polkadot.network/docs/learn-governance#referenda",target:"_blank",rel:"noopener noreferrer"},w={href:"https://wiki.polkadot.network/docs/maintain-guides-democracy",target:"_blank",rel:"noopener noreferrer"};function x(v,B){const a=p("ExternalLinkIcon");return r(),s("div",null,[b,e("p",null,[o("You can post detailed proposals to our reddit community "),e("a",_,[o("https://www.reddit.com/r/DBC_Council/"),t(a)])]),y,e("p",null,[e("a",k,[o("https://wiki.polkadot.network/docs/learn-governance#referenda"),t(a)])]),e("p",null,[e("a",w,[o("https://wiki.polkadot.network/docs/maintain-guides-democracy"),t(a)])])])}const z=n(f,[["render",x],["__file","proposing-referenda.html.vue"]]);export{z as default};
