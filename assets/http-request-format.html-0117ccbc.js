import{_ as s,W as a,X as e,a0 as t}from"./framework-0c0bf18e.js";const o="/DBC-Wiki/assets/wallet_sign-8ad9bef3.png",p="/DBC-Wiki/assets/session_id_sign-1a41ce4c.png",i={};function c(l,n){return a(),e("div",null,n[0]||(n[0]=[t(`<h1 id="http-请求格式说明" tabindex="-1"><a class="header-anchor" href="#http-请求格式说明" aria-hidden="true">#</a> Http 请求格式说明</h1><p><code>请求方式</code>：POST</p><p><code>URL格式</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/<strong>具体请求路径</strong></p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// DBC节点的node_id，目前仅支持填写1个</span>
        <span class="token string">&quot;460e56d4cdade97065ddf4d0dfeee7ab7e6e77d0058fad07e43123fadd1d8d2a&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 每个请求要传递的各种参数</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token comment">// 身份认证信息</span>
   ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>身份认证信息</strong>一共有 3 种类型，请求时，填写任意一种即可：</p><blockquote><p><strong>第 1 种类型：租用者钱包签名</strong></p><p><strong><em>说明</em></strong>: 需要知道租用者的<code>钱包地址</code>和<code>对应的钱包私钥</code>，所以，使用此方式的一般是<code>租用者本人</code>。</p><ul><li>签名方法：<code>./sign_tool [钱包地址] [钱包私钥]</code></li></ul><blockquote><p>输出： <img src="`+o+`" alt="import" loading="lazy"></p></blockquote><ul><li><p>将生成的 3 个值填写到请求 body 中，最终的请求 body 格式：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;460e56d4cdade97065ddf4d0dfeee7ab7e6e77d0058fad07e43123fadd1d8d2a&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;wallet&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5Dy8ULx1De6u3WE9ixpy1VKK2CVssvsjQT15qcmQsG662Zj4&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;nonce&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5q7KRn4d8EmXFFsim8vHBp23N2CpERbD2mWR3WCo1o3teZnGxYEh4N6&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2460725b2f5e737cd810c773be61b9b27c3b9dbdac4af9cf25c7be9949ad7202a0b7467f71ad843888f482662d3ae2e4fa566d3c1930a3fa90f3dcb97ea4098d&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></blockquote><blockquote><p><strong>第 2 种类型：多签钱包签名</strong></p><p><strong><em>说明</em></strong>: 需要知道多签账户的所有<code>钱包地址</code>，以及<code>阈值(threshold)</code>数量个账户的钱包签名。</p><ul><li><p>以 3 签 2 为例，各字段的释义：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;multisig_accounts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 多签账户的所有钱包地址</span>
    <span class="token property">&quot;wallets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;5Dy8ULx1De6u3WE9ixpy1VKK2CVssvsjQT15qcmQsG662Zj4&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;5HgVTsXnUBmaL5F2RBjKmXMoAeG9Avuyk9tmgnnVx28u2ZrS&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;5DhBmvUkj9YWvdDtJWJwaGrFRpzeqW4Ch5oTyTamXG2LMHVQ&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 创建多签钱包时的阈值(threshold)</span>
    <span class="token property">&quot;threshold&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 使用多签账户中的任意2个钱包私钥签名（签名方法与第1种类型中的签名方法相同）</span>
    <span class="token property">&quot;signs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;wallet&quot;</span><span class="token operator">:</span><span class="token string">&quot;5Dy8ULx1De6u3WE9ixpy1VKK2CVssvsjQT15qcmQsG662Zj4&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;nonce&quot;</span><span class="token operator">:</span><span class="token string">&quot;5q7KRn4d8EmXFFsim8vHBp23N2CpERbD2mWR3WCo1o3teZnGxYEh4N6&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;sign&quot;</span><span class="token operator">:</span><span class="token string">&quot;2460725b2f5e737cd810c773be61b9b27c3b9dbdac4af9cf25c7be9949ad7202a0b7467f71ad843888f482662d3ae2e4fa566d3c1930a3fa90f3dcb97ea4098d&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;wallet&quot;</span><span class="token operator">:</span><span class="token string">&quot;5HgVTsXnUBmaL5F2RBjKmXMoAeG9Avuyk9tmgnnVx28u2ZrS&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;nonce&quot;</span><span class="token operator">:</span><span class="token string">&quot;5t1mv263Qpnu5tk5xPDk86oXGUX8yXaYGpAWj2n6gU45HNmsQqLaAU7&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sign&quot;</span><span class="token operator">:</span><span class="token string">&quot;c494cc517f3c181fd7206d03175b5c0c29d162e53aa88c557887241d104456272dc313501c8ae4e71dbcbae183942a119713974aff87aa1ef3870aa505be6384&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>最终的请求 body 格式：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;460e56d4cdade97065ddf4d0dfeee7ab7e6e77d0058fad07e43123fadd1d8d2a&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;multisig_accounts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;wallets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;5Dy8ULx1De6u3WE9ixpy1VKK2CVssvsjQT15qcmQsG662Zj4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;5HgVTsXnUBmaL5F2RBjKmXMoAeG9Avuyk9tmgnnVx28u2ZrS&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;5DhBmvUkj9YWvdDtJWJwaGrFRpzeqW4Ch5oTyTamXG2LMHVQ&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;threshold&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;signs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;wallet&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5Dy8ULx1De6u3WE9ixpy1VKK2CVssvsjQT15qcmQsG662Zj4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;nonce&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5q7KRn4d8EmXFFsim8vHBp23N2CpERbD2mWR3WCo1o3teZnGxYEh4N6&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2460725b2f5e737cd810c773be61b9b27c3b9dbdac4af9cf25c7be9949ad7202a0b7467f71ad843888f482662d3ae2e4fa566d3c1930a3fa90f3dcb97ea4098d&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;wallet&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5HgVTsXnUBmaL5F2RBjKmXMoAeG9Avuyk9tmgnnVx28u2ZrS&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;nonce&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5t1mv263Qpnu5tk5xPDk86oXGUX8yXaYGpAWj2n6gU45HNmsQqLaAU7&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c494cc517f3c181fd7206d03175b5c0c29d162e53aa88c557887241d104456272dc313501c8ae4e71dbcbae183942a119713974aff87aa1ef3870aa505be6384&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></blockquote><blockquote><p><strong>第 3 种类型：使用机器租用者分发的 session_id 和 session_id_sign</strong></p><p><strong><em>说明</em></strong>: session_id 和 session_id_sign 是<code>租用者</code>给其他想要使用该机器的<code>第三方用户</code>的<code>身份凭证</code>，第三方用户可以使用该 session_id 访问该机器。</p><p><strong><em>注意</em></strong>：session_id 只能由<code>租用者</code>向机器请求获取和修改（请求方式：参考上述第 1 种和第 2 种类型）</p><ul><li><p>机器租用者请求机器获取 session_id（请求方式：参考上述第 1 种和第 2 种类型; 此处以第 1 种方式为例），返回值为 session_id：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;460e56d4cdade97065ddf4d0dfeee7ab7e6e77d0058fad07e43123fadd1d8d2a&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;wallet&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5Dy8ULx1De6u3WE9ixpy1VKK2CVssvsjQT15qcmQsG662Zj4&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;nonce&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5q7KRn4d8EmXFFsim8vHBp23N2CpERbD2mWR3WCo1o3teZnGxYEh4N6&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2460725b2f5e737cd810c773be61b9b27c3b9dbdac4af9cf25c7be9949ad7202a0b7467f71ad843888f482662d3ae2e4fa566d3c1930a3fa90f3dcb97ea4098d&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>机器租用者对 session_id 进行签名： <img src="`+p+`" alt="import" loading="lazy"> 将生成的 session_id 和 session_id_sign 分发给第三方用户即可。</p></li><li><p><code>第三方用户</code>拿到这个 session_id 和 session_id_sign 后，请求的 body 格式为：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;460e56d4cdade97065ddf4d0dfeee7ab7e6e77d0058fad07e43123fadd1d8d2a&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3QRjS1PsbDReGJKVBBRqxUh9RqXB5jbfHJ8bMgGoJ3C9HHHHm9rCmmh&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ca89d0adb44a03c6f22a9205a06e22f682805f8c8ee25dd182e36ceb581899001196ce94c40e2147247f967256d7e010318e4387853939d94ba99c81f16a358f&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></blockquote>`,9)]))}const d=s(i,[["render",c],["__file","http-request-format.html.vue"]]);export{d as default};
