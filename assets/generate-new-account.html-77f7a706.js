import{_ as o,V as c,W as r,X as e,Y as a,Z as s,$ as t,F as i}from"./framework-1d64dffd.js";const l="/assets/2021-09-13_09-58-38362ca5.png",d="/assets/2021-09-13_09-59-963eef16.png",p={},h=t('<h1 id="generate-new-dbc-account" tabindex="-1"><a class="header-anchor" href="#generate-new-dbc-account" aria-hidden="true">#</a> Generate new DBC account</h1><div class="hint-container warning"><p class="hint-container-title">Note</p><p>No matter which method is used to generate the account, be sure to keep the mnemonic phrase and private key.</p></div><h2 id="option-1-by-polkadot-js-adds-on" tabindex="-1"><a class="header-anchor" href="#option-1-by-polkadot-js-adds-on" aria-hidden="true">#</a> Option 1: By <code>polkadot{.js}</code> adds-on</h2>',3),u={href:"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd",target:"_blank",rel:"noopener noreferrer"},b={href:"https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension/",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>After the installation is complete, new account can be generated through the browser plug-in.</p><h2 id="option-2-by-command-line" tabindex="-1"><a class="header-anchor" href="#option-2-by-command-line" aria-hidden="true">#</a> Option 2: By command line</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--proto</span> <span class="token string">&#39;=https&#39;</span> <span class="token parameter variable">--tlsv1.2</span> <span class="token parameter variable">-sSf</span> https://sh.rustup.rs <span class="token operator">|</span> <span class="token function">sh</span>
<span class="token function">cargo</span> <span class="token function">install</span> <span class="token parameter variable">--force</span> subkey <span class="token parameter variable">--git</span> https://github.com/paritytech/substrate <span class="token parameter variable">--version</span> <span class="token number">2.0</span>.1 <span class="token parameter variable">--locked</span>
subkey generate <span class="token parameter variable">--scheme</span> sr25519 <span class="token comment"># 生成账户，输出内容如下：</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Secret phrase \`final huge obscure action vacuum public banner autumn remove close exotic rotate\` is account:
  Secret seed:       0x4b6490134a277f9d4ba36a5671eefa122159dbdecb1fb5f4e937bb8c3f0d2474
  Public key (hex):  0xbae85335116a2f65417d26226ac7d3de188c5160915378ceb4dd7e59a1f0c873
  Public key (SS58): 5GHmn7gTjf7JsXCdieFj7Ypu8gibCXdroU2jG182H2e3zMkf
  Account ID:        0xbae85335116a2f65417d26226ac7d3de188c5160915378ceb4dd7e59a1f0c873
  SS58 Address:      5GHmn7gTjf7JsXCdieFj7Ypu8gibCXdroU2jG182H2e3zMkf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=e("code",null,"subkey",-1),f={href:"https://substrate.dev/docs/en/knowledgebase/integrate/subkey",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"option-3-by-browser-wallet",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#option-3-by-browser-wallet","aria-hidden":"true"},"#"),a(" Option 3: By browser wallet")],-1),k={href:"https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io#/explorer",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"Add Account",-1),x=e("code",null,"mnemonic phrase",-1),w=e("strong",null,[a("click on the right side "),e("code",null,"mnemonic phrase")],-1),y=e("code",null,"original seed",-1),S=t('<figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="how-to-convert-secret-phrase-to-private-key" tabindex="-1"><a class="header-anchor" href="#how-to-convert-secret-phrase-to-private-key" aria-hidden="true">#</a> How to convert <code>secret phrase</code> to <code>private key</code></h2><p>Some operations on the chain sometimes need to be signed with a private key. When the mnemonic phrase is saved, you can use subkey to convert the mnemonic phrase into a private key.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>subkey inspect <span class="token string">&quot;grief cabin hint replace chalk recall alpha crunch vacant range success rent&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The message generated is as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Secret phrase <span class="token variable"><span class="token variable">\`</span>grief cabin hint replace chalk recall alpha crunch vacant range success rent<span class="token variable">\`</span></span> is account:
  Secret seed:       0xb4789ce6da4c3eece566ae7848f91822079d7e9b07e4cb77f00beafcb28fb611
  Public key <span class="token punctuation">(</span>hex<span class="token punctuation">)</span>:  0xfabef9d9550ecc3247035be7091ea7d8b384cfdeb1dfae3ff80ba9515cca2570
  Public key <span class="token punctuation">(</span>SS58<span class="token punctuation">)</span>: 5HjUZSGCZgBN86syLVRrW1mAHE6nFZcxK5AFephzoj5xc1FN
  Account ID:        0xfabef9d9550ecc3247035be7091ea7d8b384cfdeb1dfae3ff80ba9515cca2570
  SS58 Address:      5HjUZSGCZgBN86syLVRrW1mAHE6nFZcxK5AFephzoj5xc1FN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function j(A,C){const n=i("ExternalLinkIcon");return c(),r("div",null,[h,e("ul",null,[e("li",null,[e("p",null,[a("Chrome, install via "),e("a",u,[a("Chrome web store"),s(n)])])]),e("li",null,[e("p",null,[a("Firefox, install via "),e("a",b,[a("Firefox add-ons"),s(n)])])])]),m,e("blockquote",null,[e("p",null,[a("Install "),v,a(" and other flags, please reference："),e("a",f,[a("https://substrate.dev/docs/en/knowledgebase/integrate/subkey"),s(n)])])]),g,e("p",null,[a("Go to DBC wallet: "),e("a",k,[a("https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io#/explorer"),s(n)]),a(", Click "),_,a(", a pop-up box will prompt "),x,a(", "),w,a(", you can **switch to "),y,a(", which is the private key that needs to be saved, properly save! **")]),S])}const F=o(p,[["render",j],["__file","generate-new-account.html.vue"]]);export{F as default};
