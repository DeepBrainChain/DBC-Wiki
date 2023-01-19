import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as c,o as i,c as r,b as e,d as a,a as t,e as n}from"./app.38166bb6.js";var d="/DBC-Wiki/assets/2021-09-13_09-58.38362ca5.png",l="/DBC-Wiki/assets/2021-09-13_09-59.963eef16.png";const p={},h=t('<h1 id="generate-new-dbc-account" tabindex="-1"><a class="header-anchor" href="#generate-new-dbc-account" aria-hidden="true">#</a> Generate new DBC account</h1><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>No matter which method is used to generate the account, be sure to keep the mnemonic phrase and private key.</p></div><h2 id="option-1-by-polkadot-js-adds-on" tabindex="-1"><a class="header-anchor" href="#option-1-by-polkadot-js-adds-on" aria-hidden="true">#</a> Option 1: By <code>polkadot{.js}</code> adds-on</h2>',3),u=n("Chrome, install via "),b={href:"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd",target:"_blank",rel:"noopener noreferrer"},m=n("Chrome web store"),v=n("Firefox, install via "),_={href:"https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension/",target:"_blank",rel:"noopener noreferrer"},f=n("Firefox add-ons"),g=t(`<p>After the installation is complete, new account can be generated through the browser plug-in.</p><h2 id="option-2-by-command-line" tabindex="-1"><a class="header-anchor" href="#option-2-by-command-line" aria-hidden="true">#</a> Option 2: By command line</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> --proto <span class="token string">&#39;=https&#39;</span> --tlsv1.2 -sSf https://sh.rustup.rs <span class="token operator">|</span> <span class="token function">sh</span>
cargo <span class="token function">install</span> --force subkey --git https://github.com/paritytech/substrate --version <span class="token number">2.0</span>.1 --locked
subkey generate --scheme sr25519 <span class="token comment"># \u751F\u6210\u8D26\u6237\uFF0C\u8F93\u51FA\u5185\u5BB9\u5982\u4E0B\uFF1A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Secret phrase \`final huge obscure action vacuum public banner autumn remove close exotic rotate\` is account:
  Secret seed:       0x4b6490134a277f9d4ba36a5671eefa122159dbdecb1fb5f4e937bb8c3f0d2474
  Public key (hex):  0xbae85335116a2f65417d26226ac7d3de188c5160915378ceb4dd7e59a1f0c873
  Public key (SS58): 5GHmn7gTjf7JsXCdieFj7Ypu8gibCXdroU2jG182H2e3zMkf
  Account ID:        0xbae85335116a2f65417d26226ac7d3de188c5160915378ceb4dd7e59a1f0c873
  SS58 Address:      5GHmn7gTjf7JsXCdieFj7Ypu8gibCXdroU2jG182H2e3zMkf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),k=n("Install "),w=e("code",null,"subkey",-1),x=n(" and other flags, please reference\uFF1A"),y={href:"https://substrate.dev/docs/en/knowledgebase/integrate/subkey",target:"_blank",rel:"noopener noreferrer"},S=n("https://substrate.dev/docs/en/knowledgebase/integrate/subkey"),j=e("h2",{id:"option-3-by-browser-wallet",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#option-3-by-browser-wallet","aria-hidden":"true"},"#"),n(" Option 3: By browser wallet")],-1),C=n("Go to DBC wallet: "),B={href:"https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io#/explorer",target:"_blank",rel:"noopener noreferrer"},A=n("https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io#/explorer"),F=n(", Click "),N=e("code",null,"Add Account",-1),H=n(", a pop-up box will prompt "),G=e("code",null,"mnemonic phrase",-1),D=n(", "),V=e("strong",null,[n("click on the right side "),e("code",null,"mnemonic phrase")],-1),Z=n(", you can **switch to "),z=e("code",null,"original seed",-1),E=n(", which is the private key that needs to be saved, properly save! **"),I=t('<p><img src="'+d+'" alt=""></p><br><p><img src="'+l+`" alt=""></p><h2 id="how-to-convert-secret-phrase-to-private-key" tabindex="-1"><a class="header-anchor" href="#how-to-convert-secret-phrase-to-private-key" aria-hidden="true">#</a> How to convert <code>secret phrase</code> to <code>private key</code></h2><p>Some operations on the chain sometimes need to be signed with a private key. When the mnemonic phrase is saved, you can use subkey to convert the mnemonic phrase into a private key.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>subkey inspect <span class="token string">&quot;grief cabin hint replace chalk recall alpha crunch vacant range success rent&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The message generated is as follows:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Secret phrase <span class="token variable"><span class="token variable">\`</span>grief cabin hint replace chalk recall alpha crunch vacant range success rent<span class="token variable">\`</span></span> is account:
  Secret seed:       0xb4789ce6da4c3eece566ae7848f91822079d7e9b07e4cb77f00beafcb28fb611
  Public key <span class="token punctuation">(</span>hex<span class="token punctuation">)</span>:  0xfabef9d9550ecc3247035be7091ea7d8b384cfdeb1dfae3ff80ba9515cca2570
  Public key <span class="token punctuation">(</span>SS58<span class="token punctuation">)</span>: 5HjUZSGCZgBN86syLVRrW1mAHE6nFZcxK5AFephzoj5xc1FN
  Account ID:        0xfabef9d9550ecc3247035be7091ea7d8b384cfdeb1dfae3ff80ba9515cca2570
  SS58 Address:      5HjUZSGCZgBN86syLVRrW1mAHE6nFZcxK5AFephzoj5xc1FN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function U(W,L){const s=c("ExternalLinkIcon");return i(),r("div",null,[h,e("ul",null,[e("li",null,[e("p",null,[u,e("a",b,[m,a(s)])])]),e("li",null,[e("p",null,[v,e("a",_,[f,a(s)])])])]),g,e("blockquote",null,[e("p",null,[k,w,x,e("a",y,[S,a(s)])])]),j,e("p",null,[C,e("a",B,[A,a(s)]),F,N,H,G,D,V,Z,z,E]),I])}var X=o(p,[["render",U],["__file","generate-new-account.html.vue"]]);export{X as default};
