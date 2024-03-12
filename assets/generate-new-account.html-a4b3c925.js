import{_ as c,W as r,X as i,Y as e,Z as a,$ as s,a0 as t,H as l}from"./framework-5cecf6de.js";const o="/DBC-Wiki/assets/2021-09-13_09-58-38362ca5.png",d="/DBC-Wiki/assets/2021-09-13_09-59-963eef16.png",p={},u=t('<h1 id="生成新账户" tabindex="-1"><a class="header-anchor" href="#生成新账户" aria-hidden="true">#</a> 生成新账户</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>无论以哪种方式生成账户，请务必保存好助记词和私钥。</p></div><h2 id="方式-1-通过polkadot-js-浏览器插件生成" tabindex="-1"><a class="header-anchor" href="#方式-1-通过polkadot-js-浏览器插件生成" aria-hidden="true">#</a> 方式 1： 通过<code>polkadot{.js}</code>浏览器插件生成</h2>',3),b={href:"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd",target:"_blank",rel:"noopener noreferrer"},h={href:"https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension/",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>安装完成后，通过浏览器插件生成即可</p><h2 id="方式-2-通过命令行生成账户" tabindex="-1"><a class="header-anchor" href="#方式-2-通过命令行生成账户" aria-hidden="true">#</a> 方式 2: 通过命令行生成账户</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--proto</span> <span class="token string">&#39;=https&#39;</span> <span class="token parameter variable">--tlsv1.2</span> <span class="token parameter variable">-sSf</span> https://sh.rustup.rs <span class="token operator">|</span> <span class="token function">sh</span>
<span class="token function">cargo</span> <span class="token function">install</span> <span class="token parameter variable">--force</span> subkey <span class="token parameter variable">--git</span> https://github.com/paritytech/substrate <span class="token parameter variable">--version</span> <span class="token number">2.0</span>.2 <span class="token parameter variable">--locked</span>
subkey generate <span class="token parameter variable">--scheme</span> sr25519 <span class="token comment"># 生成账户，输出内容如下：</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Secret phrase \`final huge obscure action vacuum public banner autumn remove close exotic rotate\` is account:
  Secret seed:       0x4b6490134a277f9d4ba36a5671eefa122159dbdecb1fb5f4e937bb8c3f0d2474
  Public key (hex):  0xbae85335116a2f65417d26226ac7d3de188c5160915378ceb4dd7e59a1f0c873
  Public key (SS58): 5GHmn7gTjf7JsXCdieFj7Ypu8gibCXdroU2jG182H2e3zMkf
  Account ID:        0xbae85335116a2f65417d26226ac7d3de188c5160915378ceb4dd7e59a1f0c873
  SS58 Address:      5GHmn7gTjf7JsXCdieFj7Ypu8gibCXdroU2jG182H2e3zMkf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=e("p",null,"其中，Secret phrase 为 助记词；Secret seed，即是私钥种子",-1),m=e("code",null,"subkey",-1),g={href:"https://substrate.dev/docs/en/knowledgebase/integrate/subkey",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"方式-3-通过网页生成账户",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#方式-3-通过网页生成账户","aria-hidden":"true"},"#"),a(" 方式 3: 通过网页生成账户")],-1),_={href:"https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io#/explorer",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"添加账户",-1),S=e("code",null,"助记词",-1),w=e("strong",null,[a("点击右侧"),e("code",null,"助记词")],-1),y=e("strong",null,[a("切换到"),e("code",null,"原始种子"),a("，即为需要保存的私钥，妥善保存！")],-1),j=t('<figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="使用命令行工具-subkey-将助记词转私钥种子" tabindex="-1"><a class="header-anchor" href="#使用命令行工具-subkey-将助记词转私钥种子" aria-hidden="true">#</a> 使用命令行工具 subkey,将助记词转私钥种子</h2><p>链上的一些操作，有时候会需要使用私钥来签名。在保存了助记词时，可以通过 subkey 来将助记词转换成私钥。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>subkey inspect <span class="token string">&quot;grief cabin hint replace chalk recall alpha crunch vacant range success rent&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Secret phrase <span class="token variable"><span class="token variable">\`</span>grief cabin hint replace chalk recall alpha crunch vacant range success rent<span class="token variable">\`</span></span> is account:
  Secret seed:       0xb4789ce6da4c3eece566ae7848f91822079d7e9b07e4cb77f00beafcb28fb611
  Public key <span class="token punctuation">(</span>hex<span class="token punctuation">)</span>:  0xfabef9d9550ecc3247035be7091ea7d8b384cfdeb1dfae3ff80ba9515cca2570
  Public key <span class="token punctuation">(</span>SS58<span class="token punctuation">)</span>: 5HjUZSGCZgBN86syLVRrW1mAHE6nFZcxK5AFephzoj5xc1FN
  Account ID:        0xfabef9d9550ecc3247035be7091ea7d8b384cfdeb1dfae3ff80ba9515cca2570
  SS58 Address:      5HjUZSGCZgBN86syLVRrW1mAHE6nFZcxK5AFephzoj5xc1FN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>Secret seed</code>即为私钥种子</p>`,9);function C(F,A){const n=l("ExternalLinkIcon");return r(),i("div",null,[u,e("ul",null,[e("li",null,[e("p",null,[a("Chrome 安装链接："),e("a",b,[a("Chrome web store"),s(n)])])]),e("li",null,[e("p",null,[a("Firefox 安装链接："),e("a",h,[a("Firefox add-ons"),s(n)])])])]),f,e("blockquote",null,[v,e("p",null,[m,a("的安装及其他用法，请参考："),e("a",g,[a("https://substrate.dev/docs/en/knowledgebase/integrate/subkey"),s(n)])])]),k,e("p",null,[a("到"),e("a",_,[a("网页钱包 https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io#/explorer"),s(n)]),a("，点击"),x,a("，在弹出框中会提示"),S,a("，"),w,a("，可以"),y]),j])}const N=c(p,[["render",C],["__file","generate-new-account.html.vue"]]);export{N as default};