import{_ as p,V as l,W as c,X as s,Y as n,Z as e,$ as i,F as r}from"./framework-1d64dffd.js";const d="/assets/query_machine_info-4e40c27c.png",u="/assets/query_session_id-4a7d3922.png",v="/assets/create_task-3ddee2d1.png",m="/assets/query_task_info-e24f4642.png",b="/assets/list_task-90d6f04c.png",t="/assets/stop_task-2fdd0060.jpg",k="/assets/start_task-ef0ff630.jpg",q="/assets/delete_task-02556d3a.png",g="/assets/all_images-64dbe357.png",o="/assets/snap_list-826edd5e.png",h={},_=i(`<h1 id="http-client-request-api" tabindex="-1"><a class="header-anchor" href="#http-client-request-api" aria-hidden="true">#</a> HTTP client request API</h1><h4 id="the-dbc-client-ip-and-dbc-client-port-in-the-following-http-request-are-the-dbc-client-access-addresses-deployed-by-the-user" tabindex="-1"><a class="header-anchor" href="#the-dbc-client-ip-and-dbc-client-port-in-the-following-http-request-are-the-dbc-client-access-addresses-deployed-by-the-user" aria-hidden="true">#</a> ( The dbc_client_ip and dbc_client_port in the following HTTP request are the DBC client access addresses deployed by the user )</h4><hr><h2 id="gpu-node-manage" tabindex="-1"><a class="header-anchor" href="#gpu-node-manage" aria-hidden="true">#</a> GPU Node Manage</h2><h3 id="_1-querying-gpu-node-machine-configuration-information" tabindex="-1"><a class="header-anchor" href="#_1-querying-gpu-node-machine-configuration-information" aria-hidden="true">#</a> 1. Querying GPU Node Machine Configuration Information</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/mining_nodes</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example： <img src="`+d+`" width="500" height="160" align="center"></p></blockquote><br><h3 id="_2-tenant-query-to-get-session-id" tabindex="-1"><a class="header-anchor" href="#_2-tenant-query-to-get-session-id" aria-hidden="true">#</a> 2. Tenant query to get session_id</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/mining_nodes/session_id</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// node_id of GPU Node</span>
        <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token comment">//Identity authentication information, use tenant signature or multi-signature account signature (refer to the description of HTTP request format), choose one of the two</span>
   ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example (the tenant&#39;s signature is used here, and a multi-signature account signature can also be used)： <img src="`+u+`" width="500" height="180" align="center"></p></blockquote><br><h2 id="virtual-machine-manage" tabindex="-1"><a class="header-anchor" href="#virtual-machine-manage" aria-hidden="true">#</a> Virtual Machine Manage</h2><h3 id="_1-create-a-virtual-machine" tabindex="-1"><a class="header-anchor" href="#_1-create-a-virtual-machine" aria-hidden="true">#</a> 1. Create a virtual machine</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/start</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 镜像名字</span>
    <span class="token property">&quot;image_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 描述</span>
    <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 操作系统类型: linux、windows (默认值：linux)</span>
    <span class="token property">&quot;operation_system&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linux&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 引导方式:（默认值：legacy）</span>
    <span class="token comment">//   linux系统设置: legacy</span>
    <span class="token comment">// windows系统设置: uefi</span>
    <span class="token comment">//        pxe方式: pxe</span>
    <span class="token property">&quot;bios_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;legacy&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 远程登录linux虚拟机，ssh端口号（linux）</span>
    <span class="token property">&quot;ssh_port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5684&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 远程登录windows虚拟机，rdp端口号（windows）</span>
    <span class="token property">&quot;rdp_port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5685&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// vnc连接端口号</span>
    <span class="token property">&quot;vnc_port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5904&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//自定义端口映射</span>
    <span class="token comment">// [</span>
    <span class="token comment">//    宿主机的123转发到虚拟机的123</span>
    <span class="token comment">//    &quot;tcp/udp,123&quot;,</span>
    <span class="token comment">//    宿主机的111转发到虚拟机的222</span>
    <span class="token comment">//    &quot;tcp/udp,111:222&quot;,</span>
    <span class="token comment">//    宿主机的333-444转发到虚拟机的444</span>
    <span class="token comment">//    &quot;tcp/udp,333-444&quot;,</span>
    <span class="token comment">//    宿主机的[555-666]转发到虚拟机的[777-888]</span>
    <span class="token comment">//    &quot;tcp/udp,555-666:777-888&quot;</span>
    <span class="token comment">// ]</span>
    <span class="token property">&quot;custom_port&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// gpu数量（大于等于 0）</span>
    <span class="token property">&quot;gpu_count&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// cpu数量（大于0）</span>
    <span class="token property">&quot;cpu_cores&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 内存大小（大于0，单位：G）</span>
    <span class="token property">&quot;mem_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 磁盘大小（大于0，单位：G）</span>
    <span class="token property">&quot;disk_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 已存在的数据盘文件（如：xxx.qcow2）</span>
    <span class="token property">&quot;data_file_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx.qcow2&quot;</span><span class="token punctuation">,</span>

    <span class="token comment">// 不同虚拟机之间互相传输的组播地址,范围为224.0.0.0~239.0.0.0</span>
    <span class="token comment">// 添加多组播地址续在括号中用&quot;,&quot;相隔,也可不填</span>
    <span class="token property">&quot;multicast&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;230.0.0.1:5558&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//内网名称（创建虚拟机网络时填的名称）</span>
    <span class="token property">&quot;network_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 公网ip地址</span>
    <span class="token property">&quot;public_ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 安全组</span>
    <span class="token comment">// [</span>
    <span class="token comment">//    使 TCP 端口 22 (ssh) 和 3389 (rdp) 可访问</span>
    <span class="token comment">//    &quot;in,tcp,22,0.0.0.0/0,accept&quot;,</span>
    <span class="token comment">//    &quot;in,tcp,3389,0.0.0.0/0,accept&quot;,</span>
    <span class="token comment">//    接受所有流出虚拟机的流量</span>
    <span class="token comment">//    &quot;out,all,all,0.0.0.0/0,accept&quot;,</span>
    <span class="token comment">//    丢弃其他所有流入虚拟机的流量</span>
    <span class="token comment">//    &quot;in,all,all,0.0.0.0/0,drop&quot;</span>
    <span class="token comment">// ]</span>
    <span class="token property">&quot;network_filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example： <img src="`+v+`" width="500" height="240" align="center"></p></blockquote><ul><li>The length of the creation process will vary depending on the configuration, ranging from five to fifteen minutes.</li><li>You can query the <code>login method</code> of the virtual machine and the <code>current status</code> of the virtual machine by requesting <code>virtual machine details</code> (when the status value is &quot;creating&quot;, it means that the virtual machine is in the process of being created)</li></ul><br><h3 id="_2-querying-virtual-machine-details" tabindex="-1"><a class="header-anchor" href="#_2-querying-virtual-machine-details" aria-hidden="true">#</a> 2. Querying Virtual Machine Details</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/&lt;task_id value to query&gt;</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>Example： <img src="`+m+`" width="500" height="240" align="center"></p><h3 id="_3-query-the-list-of-virtual-machines" tabindex="-1"><a class="header-anchor" href="#_3-query-the-list-of-virtual-machines" aria-hidden="true">#</a> 3. Query the list of virtual machines</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example： <img src="`+b+`" width="500" height="200" align="center"></p></blockquote><h3 id="_4-shut-down-the-virtual-machine" tabindex="-1"><a class="header-anchor" href="#_4-shut-down-the-virtual-machine" aria-hidden="true">#</a> 4. Shut down the virtual machine</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/shutdown/&lt;task_id&gt;</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+t+`" width="500" height="200" align="center"></p></blockquote><h3 id="_5-shut-down-the-virtual-machine-forced-power-off" tabindex="-1"><a class="header-anchor" href="#_5-shut-down-the-virtual-machine-forced-power-off" aria-hidden="true">#</a> 5. Shut down the virtual machine (forced power off)</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/poweroff/&lt;task_id&gt;</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+t+`" width="500" height="200" align="center"></p></blockquote><h3 id="_6-start-virtual-machine" tabindex="-1"><a class="header-anchor" href="#_6-start-virtual-machine" aria-hidden="true">#</a> 6. Start Virtual Machine</h3><blockquote><p><strong>Wakes a sleeping virtual machine， also use this api</strong></p><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/start/&lt;task_id&gt;</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example： <img src="`+k+`" width="500" height="200" align="center"></p></blockquote><h3 id="_7-delete-virtual-machine" tabindex="-1"><a class="header-anchor" href="#_7-delete-virtual-machine" aria-hidden="true">#</a> 7. delete virtual machine</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/delete/&lt;task_id&gt;</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example： <img src="`+q+`" width="500" height="200" align="center"></p></blockquote><h3 id="_8-restart-virtual-machine" tabindex="-1"><a class="header-anchor" href="#_8-restart-virtual-machine" aria-hidden="true">#</a> 8. Restart Virtual Machine</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/restart/&lt;task_id&gt;</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>After sending the restart request, the hypervisor will choose what it thinks is the best shutdown method. Note that the request may be ignored by the virtual machine. To force restart the virtual machine, please add the force_reboot parameter to the url. If the parameter is equal to true or 1, it will be forced to restart. If it is equal to false or 0 or no parameter, it will still use the above traditional method to restart. The request url to force restart the virtual machine is as follows:</p></div></blockquote><p>http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/restart/&lt;task_id&gt;?force_reboot=true :::</p><h3 id="_9-query-virtual-machine-logs" tabindex="-1"><a class="header-anchor" href="#_9-query-virtual-machine-logs" aria-hidden="true">#</a> 9. Query Virtual Machine Logs</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/logs/&lt;task_id&gt;?flag=tail&amp;line_num=10</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>The request url for querying virtual machine logs has two parameters. The flag indicates the direction of the query log. If the parameter is equal to tail, the query starts from the end of the log file. If it is equal to head, the query starts from the head of the log file. line_num indicates the number of log lines to be queried. If it exceeds the actual number of lines in the file, the actual number of lines in the file shall prevail. Finally, this request returns up to 1024 bytes, and logs that are out of range are truncated.</p></div><h3 id="_10-modify-virtual-machine-configuration" tabindex="-1"><a class="header-anchor" href="#_10-modify-virtual-machine-configuration" aria-hidden="true">#</a> 10. Modify virtual machine configuration</h3><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Some changes require a restart of the virtual machine to take effect</p></div><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/modify/&lt;task_id&gt;</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;new_ssh_port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5586&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;new_vnc_port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5986&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;new_rdp_port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5786&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;new_custom_port&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;tcp,123&quot;</span><span class="token punctuation">,</span> <span class="token comment">// host的123转发到guest的123</span>
      <span class="token string">&quot;udp,111:222&quot;</span><span class="token punctuation">,</span> <span class="token comment">// host的111转发到guest的222</span>
      <span class="token string">&quot;tcp,333-444&quot;</span><span class="token punctuation">,</span> <span class="token comment">// host的333-444转发到guest的444</span>
      <span class="token string">&quot;udp,555-666:777-888&quot;</span> <span class="token comment">// host的[555-666]转发到guest的[777-888]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;new_gpu_count&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token comment">// &gt;= 0</span>
    <span class="token property">&quot;new_cpu_cores&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span> <span class="token comment">// &gt; 0, 单位G</span>
    <span class="token property">&quot;new_mem_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span> <span class="token comment">// &gt; 0, 单位G</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_11-modifying-the-virtual-machine-login-password" tabindex="-1"><a class="header-anchor" href="#_11-modifying-the-virtual-machine-login-password" aria-hidden="true">#</a> 11. Modifying the virtual machine login password</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/passwd/&lt;task_id&gt;</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dbc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vm123456&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="hint-container warning"><p class="hint-container-title">Note</p><ol><li><p>Only the running virtual machine can change the password.</p></li><li><p>The qemu guest agent or dbc guest agent must be installed in the virtual machine to support using this API to change the password.</p></li><li><p>The Ubuntu system uses the default username &quot;dbc&quot;, and the Windows system uses the default username &quot;Administrator&quot;. For custom images, please set your own username.</p></li></ol></div><br><h2 id="disk-management" tabindex="-1"><a class="header-anchor" href="#disk-management" aria-hidden="true">#</a> Disk management</h2><h3 id="_1-query-disk-list" tabindex="-1"><a class="header-anchor" href="#_1-query-disk-list" aria-hidden="true">#</a> 1. Query disk list</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/disk/list/&lt;task_id&gt;</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_2-data-disk-expansion" tabindex="-1"><a class="header-anchor" href="#_2-data-disk-expansion" aria-hidden="true">#</a> 2. Data disk expansion</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/disk/resize/&lt;task_id&gt;</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;disk&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vdb&quot;</span><span class="token punctuation">,</span> <span class="token comment">//盘符</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token comment">//单位: G</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_3-add-a-new-data-disk" tabindex="-1"><a class="header-anchor" href="#_3-add-a-new-data-disk" aria-hidden="true">#</a> 3. Add a new data disk</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/disk/add/&lt;task_id&gt;</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">//单位: G</span>
    <span class="token property">&quot;mount_dir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/data&quot;</span> <span class="token comment">//挂载目录，默认：/data</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_4-delete-data-disk" tabindex="-1"><a class="header-anchor" href="#_4-delete-data-disk" aria-hidden="true">#</a> 4. Delete data disk</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/disk/delete/&lt;task_id&gt;</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;disk&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vdb&quot;</span> <span class="token comment">//盘符</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><br><h2 id="snapshot-manage" tabindex="-1"><a class="header-anchor" href="#snapshot-manage" aria-hidden="true">#</a> Snapshot Manage</h2><h3 id="_1-query-snapshot-list" tabindex="-1"><a class="header-anchor" href="#_1-query-snapshot-list" aria-hidden="true">#</a> 1. Query snapshot list</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/snapshot/list/&lt;task_id&gt;</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_2-querying-snapshot-details" tabindex="-1"><a class="header-anchor" href="#_2-querying-snapshot-details" aria-hidden="true">#</a> 2. Querying snapshot details</h3><blockquote><p><code>request method</code>：POST</p><p><code>request URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/snapshot/list/&lt;task_id&gt;/&lt;snapshot_name&gt;</p><p><code>request body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_3-create-snapshot" tabindex="-1"><a class="header-anchor" href="#_3-create-snapshot" aria-hidden="true">#</a> 3. Create snapshot</h3><div class="hint-container tip"><p class="hint-container-title">注意！</p><p>To create a snapshot, make sure the virtual machine is powered off.</p></div><ul><li><p>request method： POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/create/&lt;task_id&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;snapshot_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;snap1&quot;</span><span class="token punctuation">,</span> <span class="token comment">//快照名</span>
    <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span> <span class="token comment">//描述</span>
    <span class="token property">&quot;image_server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ID_2&quot;</span> <span class="token comment">//创建的快照上传到此镜像中心</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-delete-snapshot" tabindex="-1"><a class="header-anchor" href="#_4-delete-snapshot" aria-hidden="true">#</a> 4. Delete snapshot</h3><ul><li><p>request method： POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/delete/&lt;task_id&gt;/&lt;snapshot_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="image-manage" tabindex="-1"><a class="header-anchor" href="#image-manage" aria-hidden="true">#</a> Image Manage</h2><h3 id="_1-query-the-mirror-center-id-list" tabindex="-1"><a class="header-anchor" href="#_1-query-the-mirror-center-id-list" aria-hidden="true">#</a> 1. Query the mirror center ID list</h3><ul><li><p>request method：POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/servers\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-query-image-list" tabindex="-1"><a class="header-anchor" href="#_2-query-image-list" aria-hidden="true">#</a> 2. Query image list</h3><ul><li><p>request method：POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><p><strong>1. Query the image list of the image center</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 【必填】指定要查询的镜像中心ID</span>
    <span class="token property">&quot;image_server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ID_1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. Query the image list of GPU nodes</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 【选填】指定要查询的镜像中心ID</span>
    <span class="token property">&quot;image_server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ID_1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. Query the image list of a user on a GPU node</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 指定要查询的镜像中心ID</span>
    <span class="token property">&quot;image_server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ID_1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>examples：</li></ul><figure><img src="`+g+`" alt="all_images" tabindex="0" loading="lazy"><figcaption>all_images</figcaption></figure><h3 id="_3-upload-image" tabindex="-1"><a class="header-anchor" href="#_3-upload-image" aria-hidden="true">#</a> 3. Upload image</h3><ul><li><p>request method：POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/upload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><p><strong>1. Upload an image on the GPU node to the image center</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 指定要查询的镜像中心ID</span>
    <span class="token property">&quot;image_server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ID_1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. Upload an image on the client node to the image center</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 指定要查询的镜像中心ID</span>
    <span class="token property">&quot;image_server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ID_1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>examples：</li></ul><figure><img src="`+o+`" alt="snap_list" tabindex="0" loading="lazy"><figcaption>snap_list</figcaption></figure><h3 id="_4-download-image" tabindex="-1"><a class="header-anchor" href="#_4-download-image" aria-hidden="true">#</a> 4. Download image</h3><ul><li><p>request method：POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/download
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><p><strong>Download the image from the image center to the GPU node</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 指定要查询的镜像中心ID</span>
    <span class="token property">&quot;image_server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ID_1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 本地存储路径</span>
    <span class="token property">&quot;local_dir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/my_local_dir&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>examples：</li></ul><figure><img src="`+o+`" alt="snap_list" tabindex="0" loading="lazy"><figcaption>snap_list</figcaption></figure><h3 id="_5-query-download-progress" tabindex="-1"><a class="header-anchor" href="#_5-query-download-progress" aria-hidden="true">#</a> 5. Query download progress</h3><ul><li><p>request method：POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/downloadprogress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-query-upload-progress" tabindex="-1"><a class="header-anchor" href="#_6-query-upload-progress" aria-hidden="true">#</a> 6. Query upload progress</h3><ul><li><p>request method：POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/uploadprogress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-stop-download" tabindex="-1"><a class="header-anchor" href="#_7-stop-download" aria-hidden="true">#</a> 7. Stop download</h3><ul><li><p>request method：POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/download_stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-stop-upload" tabindex="-1"><a class="header-anchor" href="#_8-stop-upload" aria-hidden="true">#</a> 8. Stop upload</h3><ul><li><p>request method：POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/upload_stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-delete-image-file" tabindex="-1"><a class="header-anchor" href="#_9-delete-image-file" aria-hidden="true">#</a> 9. Delete image file</h3><ul><li><p>request method：POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//node_id of GPU Node</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="virtual-lan-networking" tabindex="-1"><a class="header-anchor" href="#virtual-lan-networking" aria-hidden="true">#</a> Virtual LAN networking</h2><h3 id="_1-create-a-network" tabindex="-1"><a class="header-anchor" href="#_1-create-a-network" aria-hidden="true">#</a> 1. Create a network</h3><div class="hint-container tip"><p class="hint-container-title">注意！</p><p>the created network can only be used in the same computer room</p></div><ul><li><p>request method：POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/lan/create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// node_id of GPU Node</span>
    <span class="token string">&quot;441f631da912b2186a3ef0452430f139cf01641bf4e2dce07e06103d8d70e533&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建网络的名称(6-10位字母或者数字组合)</span>
    <span class="token property">&quot;network_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;testnet&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 网段/ 掩码位数</span>
    <span class="token property">&quot;ip_cidr&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192.168.66.0/24&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-delete-the-network" tabindex="-1"><a class="header-anchor" href="#_2-delete-the-network" aria-hidden="true">#</a> 2. Delete the network</h3><div class="hint-container tip"><p class="hint-container-title">注意！</p><p>DBC will automatically clean up the network that has not been used by the virtual machine for a long time</p></div><ul><li><p>request method：POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/lan/delete/&lt;network_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// node_id of GPU Node</span>
    <span class="token string">&quot;441f631da912b2186a3ef0452430f139cf01641bf4e2dce07e06103d8d70e533&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bare-metal-node-operations" tabindex="-1"><a class="header-anchor" href="#bare-metal-node-operations" aria-hidden="true">#</a> Bare Metal Node Operations</h2><p>To control operations such as switching on and off a bare metal server, you need a CPU server that is on the same network as the bare metal server. Run the bare metal node program of dbc on this CPU server, and then add the relevant information of the bare metal server (IP address and IPMI control information) to the node, and the node will generate a corresponding NodeID for the bare metal server to join the dbc network. , you can control the bare metal server through NodeID.</p>`,144),f={href:"https://deepbrainchain.github.io/DBC-Wiki/install-update-dbc-node/install-update-dbc/install-dbc-compute-node.html#%E4%BA%94-%E5%AE%89%E8%A3%85-dbc-%E5%8A%9F%E8%83%BD%E8%8A%82%E7%82%B9%E7%A8%8B%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"},y={href:"http://119.6.235.169:9000/dbc/install_update_script/mainnet/install_baremetal.sh",target:"_blank",rel:"noopener noreferrer"},x=i(`<h3 id="_1-query-the-list-of-bare-metal-machines" tabindex="-1"><a class="header-anchor" href="#_1-query-the-list-of-bare-metal-machines" aria-hidden="true">#</a> 1. Query the list of bare metal machines</h3><ul><li><p>request method：POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// node_id of bare metal node</span>
    <span class="token string">&quot;441f631da912b2186a3ef0452430f139cf01641bf4e2dce07e06103d8d70e533&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-on-line-bare-metal-machines" tabindex="-1"><a class="header-anchor" href="#_2-on-line-bare-metal-machines" aria-hidden="true">#</a> 2. On-Line Bare Metal Machines</h3><ul><li><p>request method：POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal/add
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// node_id of bare metal node</span>
    <span class="token string">&quot;441f631da912b2186a3ef0452430f139cf01641bf4e2dce07e06103d8d70e533&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Informations of bare metal server node</span>
    <span class="token property">&quot;bare_metal_nodes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// The unique ID of the machine supplier to identify the bare metal, required.</span>
        <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3156995b-da18-4268-9734-f8d168e90a7d&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// The connection method provided by the bare metal server to the user. Required. A fixed IP address is recommended.</span>
        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;175.221.204.110&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// Operating system of the bare metal server, optional.</span>
        <span class="token property">&quot;os&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ubuntu 20.04.3 LTS (Focal Fossa) 5.4.0-121-generic GNU/Linux&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// A description customized by the machine owner, not required.</span>
        <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在xxx平台租用的裸金属服务器，用于xxx业务，机房id是9f01ca9c-38bd-46a9-9637-dac92b352a63&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// The host ID of ipmi, required. A fixed IP address is recommended.</span>
        <span class="token property">&quot;ipmi_hostname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192.168.0.110&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// ipmi username, required.</span>
        <span class="token property">&quot;ipmi_username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// ipmi user password, required.</span>
        <span class="token property">&quot;ipmi_password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dbtu2017&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-offline-bare-metal-machines" tabindex="-1"><a class="header-anchor" href="#_3-offline-bare-metal-machines" aria-hidden="true">#</a> 3. Offline Bare Metal Machines</h3><ul><li><p>request method：POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal/delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// node_id of bare metal node</span>
    <span class="token string">&quot;441f631da912b2186a3ef0452430f139cf01641bf4e2dce07e06103d8d70e533&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// NodeID list of bare metal server node</span>
    <span class="token property">&quot;bare_metal_node_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// The corresponding NodeID generated when the bare metal machine goes online</span>
      <span class="token string">&quot;8c29b20da3fdb2d6c5ad7c2c85b303d9d337a1b82fa584a6b6cf1303331efd16&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-bare-metal-machine-power-control" tabindex="-1"><a class="header-anchor" href="#_4-bare-metal-machine-power-control" aria-hidden="true">#</a> 4. Bare Metal Machine Power Control</h3><ul><li><p>request method：POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal/power
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// node_id of bare metal server node</span>
    <span class="token string">&quot;441f631da912b2186a3ef0452430f139cf01641bf4e2dce07e06103d8d70e533&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// power control command</span>
    <span class="token comment">// &quot;on&quot;     - power on</span>
    <span class="token comment">// &quot;off&quot;    - power off</span>
    <span class="token comment">// &quot;reset&quot;  - power reset</span>
    <span class="token comment">// &quot;status&quot; - get power status</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-modifying-the-boot-device-order-of-bare-metal-machines" tabindex="-1"><a class="header-anchor" href="#_5-modifying-the-boot-device-order-of-bare-metal-machines" aria-hidden="true">#</a> 5. Modifying the Boot device order of Bare Metal Machines</h3><ul><li><p>request method：POST</p></li><li><p>request URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal/bootdev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>request body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// node_id of bare metal server node</span>
    <span class="token string">&quot;441f631da912b2186a3ef0452430f139cf01641bf4e2dce07e06103d8d70e533&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// boot device order</span>
    <span class="token comment">// &quot;pxe&quot;    - Force PXE boot</span>
    <span class="token comment">// &quot;disk&quot;   - Force boot from default Hard-drive</span>
    <span class="token comment">// &quot;cdrom&quot;  - Force boot from CD/DVD</span>
    <span class="token comment">// &quot;bios&quot;   - Force boot into BIOS Setup</span>
    <span class="token property">&quot;device&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pxe&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function j(w,T){const a=r("ExternalLinkIcon");return l(),c("div",null,[_,s("p",null,[n("To install dbc bare metal node, please refer to "),s("a",f,[n("Install dbc computer node"),e(a)]),n(" Installation script using bare metal nodes "),s("a",y,[n("install_baremetal.sh"),e(a)])]),x])}const U=p(h,[["render",j],["__file","http-api.html.vue"]]);export{U as default};
