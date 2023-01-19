import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.38166bb6.js";var t="/DBC-Wiki/assets/wallet_sign.8ad9bef3.png",o="/DBC-Wiki/assets/session_id_sign.1a41ce4c.png";const p={},c=e(`<h1 id="http-\u8BF7\u6C42\u683C\u5F0F\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#http-\u8BF7\u6C42\u683C\u5F0F\u8BF4\u660E" aria-hidden="true">#</a> Http \u8BF7\u6C42\u683C\u5F0F\u8BF4\u660E</h1><p><code>\u8BF7\u6C42\u65B9\u5F0F</code>\uFF1APOST</p><p><code>URL\u683C\u5F0F</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/<strong>\u5177\u4F53\u8BF7\u6C42\u8DEF\u5F84</strong></p><p><code>\u8BF7\u6C42body</code>\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// DBC\u8282\u70B9\u7684node_id\uFF0C\u76EE\u524D\u4EC5\u652F\u6301\u586B\u51991\u4E2A</span>
        <span class="token string">&quot;460e56d4cdade97065ddf4d0dfeee7ab7e6e77d0058fad07e43123fadd1d8d2a&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6BCF\u4E2A\u8BF7\u6C42\u8981\u4F20\u9012\u7684\u5404\u79CD\u53C2\u6570</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token comment">// \u8EAB\u4EFD\u8BA4\u8BC1\u4FE1\u606F</span>
   ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8EAB\u4EFD\u8BA4\u8BC1\u4FE1\u606F</strong>\u4E00\u5171\u6709 3 \u79CD\u7C7B\u578B\uFF0C\u8BF7\u6C42\u65F6\uFF0C\u586B\u5199\u4EFB\u610F\u4E00\u79CD\u5373\u53EF\uFF1A</p><blockquote><p><strong>\u7B2C 1 \u79CD\u7C7B\u578B\uFF1A\u79DF\u7528\u8005\u94B1\u5305\u7B7E\u540D</strong></p><p><strong><em>\u8BF4\u660E</em></strong>: \u9700\u8981\u77E5\u9053\u79DF\u7528\u8005\u7684<code>\u94B1\u5305\u5730\u5740</code>\u548C<code>\u5BF9\u5E94\u7684\u94B1\u5305\u79C1\u94A5</code>\uFF0C\u6240\u4EE5\uFF0C\u4F7F\u7528\u6B64\u65B9\u5F0F\u7684\u4E00\u822C\u662F<code>\u79DF\u7528\u8005\u672C\u4EBA</code>\u3002</p><ul><li>\u7B7E\u540D\u65B9\u6CD5\uFF1A<code>./sign_tool [\u94B1\u5305\u5730\u5740] [\u94B1\u5305\u79C1\u94A5]</code></li></ul><blockquote><p>\u8F93\u51FA\uFF1A <img src="`+t+`" alt="import"></p></blockquote><ul><li><p>\u5C06\u751F\u6210\u7684 3 \u4E2A\u503C\u586B\u5199\u5230\u8BF7\u6C42 body \u4E2D\uFF0C\u6700\u7EC8\u7684\u8BF7\u6C42 body \u683C\u5F0F\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;460e56d4cdade97065ddf4d0dfeee7ab7e6e77d0058fad07e43123fadd1d8d2a&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;wallet&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5Dy8ULx1De6u3WE9ixpy1VKK2CVssvsjQT15qcmQsG662Zj4&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;nonce&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5q7KRn4d8EmXFFsim8vHBp23N2CpERbD2mWR3WCo1o3teZnGxYEh4N6&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2460725b2f5e737cd810c773be61b9b27c3b9dbdac4af9cf25c7be9949ad7202a0b7467f71ad843888f482662d3ae2e4fa566d3c1930a3fa90f3dcb97ea4098d&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></blockquote><blockquote><p><strong>\u7B2C 2 \u79CD\u7C7B\u578B\uFF1A\u591A\u7B7E\u94B1\u5305\u7B7E\u540D</strong></p><p><strong><em>\u8BF4\u660E</em></strong>: \u9700\u8981\u77E5\u9053\u591A\u7B7E\u8D26\u6237\u7684\u6240\u6709<code>\u94B1\u5305\u5730\u5740</code>\uFF0C\u4EE5\u53CA<code>\u9608\u503C(threshold)</code>\u6570\u91CF\u4E2A\u8D26\u6237\u7684\u94B1\u5305\u7B7E\u540D\u3002</p><ul><li><p>\u4EE5 3 \u7B7E 2 \u4E3A\u4F8B\uFF0C\u5404\u5B57\u6BB5\u7684\u91CA\u4E49\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;multisig_accounts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u591A\u7B7E\u8D26\u6237\u7684\u6240\u6709\u94B1\u5305\u5730\u5740</span>
    <span class="token property">&quot;wallets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;5Dy8ULx1De6u3WE9ixpy1VKK2CVssvsjQT15qcmQsG662Zj4&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;5HgVTsXnUBmaL5F2RBjKmXMoAeG9Avuyk9tmgnnVx28u2ZrS&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;5DhBmvUkj9YWvdDtJWJwaGrFRpzeqW4Ch5oTyTamXG2LMHVQ&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u521B\u5EFA\u591A\u7B7E\u94B1\u5305\u65F6\u7684\u9608\u503C(threshold)</span>
    <span class="token property">&quot;threshold&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4F7F\u7528\u591A\u7B7E\u8D26\u6237\u4E2D\u7684\u4EFB\u610F2\u4E2A\u94B1\u5305\u79C1\u94A5\u7B7E\u540D\uFF08\u7B7E\u540D\u65B9\u6CD5\u4E0E\u7B2C1\u79CD\u7C7B\u578B\u4E2D\u7684\u7B7E\u540D\u65B9\u6CD5\u76F8\u540C\uFF09</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6700\u7EC8\u7684\u8BF7\u6C42 body \u683C\u5F0F\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></blockquote><blockquote><p><strong>\u7B2C 3 \u79CD\u7C7B\u578B\uFF1A\u4F7F\u7528\u673A\u5668\u79DF\u7528\u8005\u5206\u53D1\u7684 session_id \u548C session_id_sign</strong></p><p><strong><em>\u8BF4\u660E</em></strong>: session_id \u548C session_id_sign \u662F<code>\u79DF\u7528\u8005</code>\u7ED9\u5176\u4ED6\u60F3\u8981\u4F7F\u7528\u8BE5\u673A\u5668\u7684<code>\u7B2C\u4E09\u65B9\u7528\u6237</code>\u7684<code>\u8EAB\u4EFD\u51ED\u8BC1</code>\uFF0C\u7B2C\u4E09\u65B9\u7528\u6237\u53EF\u4EE5\u4F7F\u7528\u8BE5 session_id \u8BBF\u95EE\u8BE5\u673A\u5668\u3002</p><p><strong><em>\u6CE8\u610F</em></strong>\uFF1Asession_id \u53EA\u80FD\u7531<code>\u79DF\u7528\u8005</code>\u5411\u673A\u5668\u8BF7\u6C42\u83B7\u53D6\u548C\u4FEE\u6539\uFF08\u8BF7\u6C42\u65B9\u5F0F\uFF1A\u53C2\u8003\u4E0A\u8FF0\u7B2C 1 \u79CD\u548C\u7B2C 2 \u79CD\u7C7B\u578B\uFF09</p><ul><li><p>\u673A\u5668\u79DF\u7528\u8005\u8BF7\u6C42\u673A\u5668\u83B7\u53D6 session_id\uFF08\u8BF7\u6C42\u65B9\u5F0F\uFF1A\u53C2\u8003\u4E0A\u8FF0\u7B2C 1 \u79CD\u548C\u7B2C 2 \u79CD\u7C7B\u578B; \u6B64\u5904\u4EE5\u7B2C 1 \u79CD\u65B9\u5F0F\u4E3A\u4F8B\uFF09\uFF0C\u8FD4\u56DE\u503C\u4E3A session_id\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;460e56d4cdade97065ddf4d0dfeee7ab7e6e77d0058fad07e43123fadd1d8d2a&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;wallet&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5Dy8ULx1De6u3WE9ixpy1VKK2CVssvsjQT15qcmQsG662Zj4&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;nonce&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5q7KRn4d8EmXFFsim8vHBp23N2CpERbD2mWR3WCo1o3teZnGxYEh4N6&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2460725b2f5e737cd810c773be61b9b27c3b9dbdac4af9cf25c7be9949ad7202a0b7467f71ad843888f482662d3ae2e4fa566d3c1930a3fa90f3dcb97ea4098d&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u673A\u5668\u79DF\u7528\u8005\u5BF9 session_id \u8FDB\u884C\u7B7E\u540D\uFF1A <img src="`+o+`" alt="import"> \u5C06\u751F\u6210\u7684 session_id \u548C session_id_sign \u5206\u53D1\u7ED9\u7B2C\u4E09\u65B9\u7528\u6237\u5373\u53EF\u3002</p></li><li><p><code>\u7B2C\u4E09\u65B9\u7528\u6237</code>\u62FF\u5230\u8FD9\u4E2A session_id \u548C session_id_sign \u540E\uFF0C\u8BF7\u6C42\u7684 body \u683C\u5F0F\u4E3A\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;460e56d4cdade97065ddf4d0dfeee7ab7e6e77d0058fad07e43123fadd1d8d2a&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3QRjS1PsbDReGJKVBBRqxUh9RqXB5jbfHJ8bMgGoJ3C9HHHHm9rCmmh&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ca89d0adb44a03c6f22a9205a06e22f682805f8c8ee25dd182e36ceb581899001196ce94c40e2147247f967256d7e010318e4387853939d94ba99c81f16a358f&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></blockquote>`,9),i=[c];function l(u,d){return s(),a("div",null,i)}var k=n(p,[["render",l],["__file","http-request-format.html.vue"]]);export{k as default};
