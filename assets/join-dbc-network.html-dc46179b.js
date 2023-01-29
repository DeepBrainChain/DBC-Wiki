import{_ as c,V as r,W as l,X as e,Y as a,Z as s,a0 as d,$ as n,F as i}from"./framework-1d64dffd.js";const u="/assets/image-20210126021938613-ed5880e3.png",h="/assets/image-20210121194808850-652c90b7.png",p="/assets/image-20210121194953014-2c0cbcd6.png",m="/assets/image-20210121195033167-2f9f22c6.png",b="/assets/image-20210121195307711-9ce5490a.png",g="/assets/image-20210121200709277-b82ea79b.png",f="/assets/image-20210121234945030-f232b1a0.png",_="/assets/image-20210121235144583-06df3d13.png",v="/assets/image-20210121235217665-a5da9a91.png",y="/assets/image-20210121235451552-5c7ff86d.png",k="/assets/image-20210329095933403-93a21fd2.png",w={},x=n('<h1 id="how-to-run-as-dbc-validator" tabindex="-1"><a class="header-anchor" href="#how-to-run-as-dbc-validator" aria-hidden="true">#</a> How to run as DBC validator?</h1><h2 id="_0-recommended-hardware" tabindex="-1"><a class="header-anchor" href="#_0-recommended-hardware" aria-hidden="true">#</a> 0. Recommended hardware</h2><ul><li>RAM：8G</li><li>CPU：2 cores</li><li>Disk：100G</li></ul><h2 id="_1-generate-stash-account" tabindex="-1"><a class="header-anchor" href="#_1-generate-stash-account" aria-hidden="true">#</a> 1. Generate stash account</h2><p>（If you already have stash account, you can skip this）</p>',5),C=n(`<h2 id="_2-get-dbc-chain-binary" tabindex="-1"><a class="header-anchor" href="#_2-get-dbc-chain-binary" aria-hidden="true">#</a> 2. Get <code>dbc-chain</code> binary</h2><h3 id="option-1-use-pre-build-version-recommended" tabindex="-1"><a class="header-anchor" href="#option-1-use-pre-build-version-recommended" aria-hidden="true">#</a> Option 1: use pre-build version (recommended)</h3><blockquote><p>If any errors, please use Option 2</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> dbc-chain-mainnet <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> dbc-chain-mainnet
<span class="token function">wget</span> https://github.com/DeepBrainChain/DeepBrainChain-MainChain/releases/download/v2.3/dbc_chain_linux_x64.tar.gz <span class="token parameter variable">-O</span> dbc_chain_linux_x64.tar.gz

<span class="token function">tar</span> xf dbc_chain_linux_x64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="option-2-compile-from-source" tabindex="-1"><a class="header-anchor" href="#option-2-compile-from-source" aria-hidden="true">#</a> Option 2: compile from source</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># install dependency</span>
<span class="token function">curl</span> https://getsubstrate.io <span class="token parameter variable">-sSf</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> -- <span class="token parameter variable">--fast</span>
<span class="token builtin class-name">source</span> ~/.cargo/env

<span class="token comment"># compile dbc-chain</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DeepBrainChain-MainChain.git
<span class="token builtin class-name">cd</span> DeepBrainChain-MainChain <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> checkout v2.3
<span class="token function">cargo</span> build <span class="token parameter variable">--release</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-synchronize-chain-data" tabindex="-1"><a class="header-anchor" href="#_3-synchronize-chain-data" aria-hidden="true">#</a> 3. Synchronize Chain Data</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./dbc-chain --base-path ./db_data <span class="token parameter variable">--pruning</span> archive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>If you compile from source, the binary path is <code>./target/release/dbc-chain</code></p></li><li><p>After finished synchronize, type <code>Control + C</code> to close the above command. You can compare <code>target</code> and <code>best</code> to infer if sync is finished. When <code>target</code> is closed (100 blocks, for example) to <code>best</code> , it can be regard sync is finished.</p></li></ul><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><strong>Flags in detail：</strong><ul><li><code>--base-path</code>：Specifies a directory where Substrate should store all the data related to this chain. If this value is not specified, a default path will be used. If the directory does not exist it will be created for you. If other blockchain data already exists there you will get an error. Either clear the directory or choose a different one. <ul><li><code>--chain ./dbcSpecRaw.json</code>：Specifies which chain specification to use.</li><li><code>--pruning=archive</code>：synchronize chain data</li><li><code>--bootnodes</code>：specified a single boot node.</li></ul></li></ul></li></ul><h2 id="_4-then-run-the-node-as-a-validator" tabindex="-1"><a class="header-anchor" href="#_4-then-run-the-node-as-a-validator" aria-hidden="true">#</a> 4.Then run the node as a validator:</h2><p>After synchronizing block data finished, stop the synchronizing command.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> ./dbc-chain --base-path ./db_data <span class="token parameter variable">--validator</span> <span class="token parameter variable">--name</span> YourNodeName <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>dbc_node.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>If you compile from source, the binary path is <code>./target/release/dbc-chain</code></li><li>You can give your validator any name that you like, but note that others will be able to see it, and it will be included in the list of all servers using the same telemetry server. Since numerous people are using telemetry, it is recommended that you choose something likely to be unique.</li></ul><h2 id="_5-generaterotatekey" tabindex="-1"><a class="header-anchor" href="#_5-generaterotatekey" aria-hidden="true">#</a> 5. generate<code>rotateKey</code></h2><p>Run the following command in the terminal, and record the result.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;{&quot;id&quot;:1, &quot;jsonrpc&quot;:&quot;2.0&quot;, &quot;method&quot;: &quot;author_rotateKeys&quot;, &quot;params&quot;:[]}&#39;</span> http://localhost:9933
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-bond-stash" tabindex="-1"><a class="header-anchor" href="#_6-bond-stash" aria-hidden="true">#</a> 6. Bond stash</h2>`,19),z={href:"https://www.dbcwallet.io/?rpc=wss%3A%2F%2Finfo.dbcwallet.io#/accounts",target:"_blank",rel:"noopener noreferrer"},S=e("img",{src:h,alt:"image-20210121194808850",loading:"lazy"},null,-1),q=e("li",null,[e("p",null,[a("navigate to"),e("code",null,"Staking > Account actions"),a("，click "),e("code",null,"stash"),e("img",{src:p,alt:"image-20210121194953014",loading:"lazy"})])],-1),B=e("li",null,[e("p",null,[a("You should set bond balance（Make sure not to bond all your DBC balance since you will be unable to pay transaction fees from your bonded balance.）："),e("img",{src:m,alt:"image-20210121195033167",loading:"lazy"})])],-1),D=n('<p><strong>Description：</strong></p><ul><li><p><code>Stash account</code>：Select your Stash account. In this example, we will bond 45 DBC - make sure that your Stash account contains <em>at least</em> this much. You can, of course, stake more than this.</p></li><li><p><code>controller account</code>：Select the Controller account created earlier. This account will also need a small amount of DBC in order to start and stop validating.</p></li><li><p><code>value bonded</code>：How much DBC from the Stash account you want to bond/stake. Note that you do not need to bond all of the DBC in that account. Also note that you can always bond <em>more</em> DBC later.</p></li><li><p><code>payment destination</code>：The account where the rewards from validating are sent.</p></li></ul><h2 id="_7-set-session-keys" tabindex="-1"><a class="header-anchor" href="#_7-set-session-keys" aria-hidden="true">#</a> 7. Set Session Keys</h2>',3),I=e("li",null,[e("p",null,[a("After bond your stash，you can see in Polkadot UI "),e("code",null,"Session Key"),a("button："),e("img",{src:b,alt:"image-20210121195307711",loading:"lazy"})])],-1),N=e("li",null,[e("p",null,[a("click it and input the result in step 5"),e("code",null,"rotateKeys"),e("img",{src:g,alt:"image-20210121200709277",loading:"lazy"})])],-1),A={href:"https://telemetry.polkadot.io/#list/0xd523fa2e0581f069b4f0c7b5944c21e9abc72305a08067868c91b898d1bf1dff",target:"_blank",rel:"noopener noreferrer"},T=e("img",{src:f,alt:"image-20210121234945030",loading:"lazy"},null,-1),V=n('<h2 id="_8-validate" tabindex="-1"><a class="header-anchor" href="#_8-validate" aria-hidden="true">#</a> 8. Validate</h2><ul><li>After steps above you can see<code>Validate</code> button and click it,</li></ul><figure><img src="'+_+'" alt="image-20210121235144583" tabindex="0" loading="lazy"><figcaption>image-20210121235144583</figcaption></figure><ul><li>You should set your preference as a validator.</li></ul><figure><img src="'+v+'" alt="image-20210121235217665" tabindex="0" loading="lazy"><figcaption>image-20210121235217665</figcaption></figure><ul><li>In <code>reward commission percentage</code> you should input your commission preference. Then clieck <code>Validate</code> to send this transaction。Then，in <code>Waiting</code> page，you are waiting status<code>Era</code> to be a validator.</li></ul><figure><img src="'+y+'" alt="image-20210121235451552" tabindex="0" loading="lazy"><figcaption>image-20210121235451552</figcaption></figure><h2 id="_9-claim-your-rewards-payout" tabindex="-1"><a class="header-anchor" href="#_9-claim-your-rewards-payout" aria-hidden="true">#</a> 9. Claim your rewards payout？</h2><p>Navigate to <code>Staking &gt; Payouts &gt; Max, 84 eras</code> ，you may see all the rewards to be payout：</p><figure><img src="'+k+'" alt="image-20210329095933403" tabindex="0" loading="lazy"><figcaption>image-20210329095933403</figcaption></figure><p>chick <code>Payout all</code> button to send a transaction.</p>',11);function R(Y,F){const o=i("RouterLink"),t=i("ExternalLinkIcon");return r(),l("div",null,[x,e("p",null,[a("Reference: "),s(o,{to:"/en/staking-model/generate-new-account.html"},{default:d(()=>[a("Generate new dbc account")]),_:1})]),C,e("ul",null,[e("li",null,[e("p",null,[a("open "),e("a",z,[a("https://www.dbcwallet.io/?rpc=wss%3A%2F%2Finfo.dbcwallet.io#/accounts"),s(t)]),a(" you will see your balance: "),S])]),q,B]),D,e("ul",null,[I,N,e("li",null,[e("p",null,[a("Now, check in "),e("a",A,[a("Telemetry"),s(t)]),a(" and you can see your node."),T])])]),V])}const j=c(w,[["render",R],["__file","join-dbc-network.html.vue"]]);export{j as default};
