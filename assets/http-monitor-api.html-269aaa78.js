import{_ as s,W as e,X as a,a0 as t}from"./framework-2c7d842c.js";const o={};function i(p,n){return e(),a("div",null,n[0]||(n[0]=[t(`<h1 id="http-client-request-api-for-virtual-machine-monitoring" tabindex="-1"><a class="header-anchor" href="#http-client-request-api-for-virtual-machine-monitoring" aria-hidden="true">#</a> HTTP client request API for virtual machine monitoring</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>The dbc_client_ip and dbc_client_port in the following HTTP request are the DBC client access addresses deployed by the user</p></div><hr><h3 id="_1-query-the-list-of-monitoring-servers" tabindex="-1"><a class="header-anchor" href="#_1-query-the-list-of-monitoring-servers" aria-hidden="true">#</a> 1. Query the list of monitoring servers</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/monitor</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>request result example</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;errcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;119.6.235.169:10051&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_2-set-the-monitoring-server-list" tabindex="-1"><a class="header-anchor" href="#_2-set-the-monitoring-server-list" aria-hidden="true">#</a> 2. Set the monitoring server list</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/monitor/set</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;119.6.235.169:10051&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>request result example</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;errcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="hint-container warning"><p class="hint-container-title">注意</p><p>The &quot;servers&quot; field in &quot;additional&quot; is an array, the user can fill in at most two services, please refer to the format:[&quot;ip:port&quot;,&quot;ip:port&quot;].</p><p>If you need to clear the monitoring service, the array can be empty, for example:[].</p></div>`,8)]))}const c=s(o,[["render",i],["__file","http-monitor-api.html.vue"]]);export{c as default};