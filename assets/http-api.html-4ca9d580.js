import{_ as i,W as l,X as c,Y as s,Z as n,$ as t,a0 as a,H as d}from"./framework-5cecf6de.js";const u="/DBC-Wiki/assets/query_machine_info-4e40c27c.png",r="/DBC-Wiki/assets/query_session_id-4a7d3922.png",v="/DBC-Wiki/assets/create_task-3ddee2d1.png",k="/DBC-Wiki/assets/query_task_info-e24f4642.png",m="/DBC-Wiki/assets/list_task-90d6f04c.png",o="/DBC-Wiki/assets/stop_task-2fdd0060.jpg",b="/DBC-Wiki/assets/start_task-ef0ff630.jpg",q="/DBC-Wiki/assets/delete_task-02556d3a.png",g="/DBC-Wiki/assets/all_images-64dbe357.png",p="/DBC-Wiki/assets/snap_list-826edd5e.png",_={},h=a(`<h1 id="http-客户端请求-api" tabindex="-1"><a class="header-anchor" href="#http-客户端请求-api" aria-hidden="true">#</a> HTTP 客户端请求 API</h1><div class="hint-container tip"><p class="hint-container-title">注意！</p><p>以下 HTTP 请求其中的 dbc_client_ip 和 dbc_client_port 为用户自己部署的 DBC 客户端访问地址</p></div><hr><h2 id="gpu-节点管理" tabindex="-1"><a class="header-anchor" href="#gpu-节点管理" aria-hidden="true">#</a> GPU 节点管理</h2><h3 id="_1-查询-gpu-节点机器配置信息" tabindex="-1"><a class="header-anchor" href="#_1-查询-gpu-节点机器配置信息" aria-hidden="true">#</a> 1. 查询 GPU 节点机器配置信息</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/mining_nodes</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+u+`" width="500" height="160" align="center"></p></blockquote><br><h3 id="_2-租用者查询获取-session-id" tabindex="-1"><a class="header-anchor" href="#_2-租用者查询获取-session-id" aria-hidden="true">#</a> 2. 租用者查询获取 session_id</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/mining_nodes/session_id</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">//GPU节点的node_id</span>
        <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token comment">//身份认证信息，使用租用者签名或者多签账户签名（参考HTTP请求格式说明），两者选一</span>
   ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例（此处使用的是租用者签名，也可以使用多签账户签名）： <img src="`+r+`" width="500" height="180" align="center"></p></blockquote><br><h2 id="虚拟机管理" tabindex="-1"><a class="header-anchor" href="#虚拟机管理" aria-hidden="true">#</a> 虚拟机管理</h2><h3 id="_1-创建虚拟机" tabindex="-1"><a class="header-anchor" href="#_1-创建虚拟机" aria-hidden="true">#</a> 1. 创建虚拟机</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/start</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
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

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+v+`" width="500" height="240" align="center"></p></blockquote><ul><li>创建过程的时间长短，会根据配置的不同而不同，大约需要几分钟时间。</li><li>可以通过请求<code>虚拟机详细信息</code>，查询到虚拟机<code>登录方式</code>以及虚拟机的<code>当前状态</code>（当状态值为&quot;creating&quot;，表示虚拟机正在创建过程中）</li></ul><br><h3 id="_2-查询虚拟机详细信息" tabindex="-1"><a class="header-anchor" href="#_2-查询虚拟机详细信息" aria-hidden="true">#</a> 2. 查询虚拟机详细信息</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/&lt;要查询的 task_id 值&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>示例： <img src="`+k+`" width="500" height="240" align="center"></p><h3 id="_3-查询虚拟机列表" tabindex="-1"><a class="header-anchor" href="#_3-查询虚拟机列表" aria-hidden="true">#</a> 3. 查询虚拟机列表</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+m+`" width="500" height="200" align="center"></p></blockquote><h3 id="_4-关闭虚拟机-shutdown" tabindex="-1"><a class="header-anchor" href="#_4-关闭虚拟机-shutdown" aria-hidden="true">#</a> 4. 关闭虚拟机(shutdown)</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/shutdown/&lt;要停止的 task_id 值&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+o+`" width="500" height="200" align="center"></p></blockquote><h3 id="_5-关闭虚拟机-强制断电" tabindex="-1"><a class="header-anchor" href="#_5-关闭虚拟机-强制断电" aria-hidden="true">#</a> 5. 关闭虚拟机(强制断电)</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/poweroff/&lt;要停止的 task_id 值&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+o+`" width="500" height="200" align="center"></p></blockquote><h3 id="_6-启动虚拟机" tabindex="-1"><a class="header-anchor" href="#_6-启动虚拟机" aria-hidden="true">#</a> 6. 启动虚拟机</h3><blockquote><p><strong>唤醒处于睡眠状态的虚拟机，也是用此接口</strong></p><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/start/&lt;要启动的 task_id 值&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+b+`" width="500" height="200" align="center"></p></blockquote><h3 id="_7-删除虚拟机" tabindex="-1"><a class="header-anchor" href="#_7-删除虚拟机" aria-hidden="true">#</a> 7. 删除虚拟机</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/delete/&lt;要删除的 task_id 值&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+q+`" width="500" height="200" align="center"></p></blockquote><h3 id="_8-重启虚拟机" tabindex="-1"><a class="header-anchor" href="#_8-重启虚拟机" aria-hidden="true">#</a> 8. 重启虚拟机</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/restart/&lt;要重启的 task_id 值&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="hint-container warning"><p class="hint-container-title">注意</p><p>发送重启请求后，管理程序将选择它认为最好的关闭方法。请注意，虚拟机可能会忽略该请求。若要强制重启虚拟机，请给 url 加上 force_reboot 参数，参数等于 true 或者 1 即强制重启，等于 false 或者 0 或者不带参数则仍旧使用上面传统的方式重启。强制重启虚拟机的请求 url 如下：</p><p>http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/restart/&lt;要重启的 task_id 值&gt;?force_reboot=true</p></div><h3 id="_9-查询虚拟机日志" tabindex="-1"><a class="header-anchor" href="#_9-查询虚拟机日志" aria-hidden="true">#</a> 9. 查询虚拟机日志</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/logs/&lt;要查询的 task_id 值&gt;?flag=tail&amp;line_num=10</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="hint-container tip"><p class="hint-container-title">注意！</p><p>查询虚拟机日志的请求 url 有两个参数，flag 表示查询日志的方向，参数等于 tail 即从日志文件的尾部开始查询，等于 head 即从日志文件的头部开始查询。line_num 表示要查询的日志行数，如果超过文件的实际行数，则以文件实际行数为准。最后，此请求最多返回 1024 个字节，超出范围的日志会被截断。</p></div><h3 id="_10-修改虚拟机配置" tabindex="-1"><a class="header-anchor" href="#_10-修改虚拟机配置" aria-hidden="true">#</a> 10. 修改虚拟机配置</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>有些修改需要重启虚拟机才能生效</p></div><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/modify/&lt;task_id&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
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
    <span class="token property">&quot;new_cpu_cores&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span> <span class="token comment">// &gt; 0, 单位:G</span>
    <span class="token property">&quot;new_mem_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// &gt; 0, 单位:G</span>
    <span class="token string">&quot;new_public_ip: &quot;</span>&quot;<span class="token punctuation">,</span>   <span class="token comment">// 公网ip地址</span>
    <span class="token property">&quot;new_network_filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token comment">// 安全组</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_11-修改虚拟机登录密码" tabindex="-1"><a class="header-anchor" href="#_11-修改虚拟机登录密码" aria-hidden="true">#</a> 11. 修改虚拟机登录密码</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/passwd/&lt;task_id&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dbc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vm123456&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="hint-container warning"><p class="hint-container-title">注意</p><ol><li><p>只有正在运行的虚拟机才能修改密码。</p></li><li><p>虚拟机内必须安装了 qemu guest agent 或者 dbc guest agent 才支持使用此 API 修改密码。</p></li><li><p>Ubuntu 系统默认使用用户名&quot;dbc&quot;, windows 系统默认使用用户名&quot;Administrator&quot;，自定义镜像请自行设置用户名。</p></li></ol></div><br><h2 id="磁盘管理" tabindex="-1"><a class="header-anchor" href="#磁盘管理" aria-hidden="true">#</a> 磁盘管理</h2><h3 id="_1-查询磁盘列表" tabindex="-1"><a class="header-anchor" href="#_1-查询磁盘列表" aria-hidden="true">#</a> 1.查询磁盘列表</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/disk/list/&lt;task_id&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_2-数据盘扩容" tabindex="-1"><a class="header-anchor" href="#_2-数据盘扩容" aria-hidden="true">#</a> 2.数据盘扩容</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/disk/resize/&lt;task_id&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;disk&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vdb&quot;</span><span class="token punctuation">,</span> <span class="token comment">//盘符</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token comment">//单位: G</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_3-添加新的数据盘" tabindex="-1"><a class="header-anchor" href="#_3-添加新的数据盘" aria-hidden="true">#</a> 3.添加新的数据盘</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/disk/add/&lt;task_id&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">//单位: G</span>
    <span class="token property">&quot;mount_dir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/data&quot;</span> <span class="token comment">//挂载目录，默认：/data</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_4-删除数据盘" tabindex="-1"><a class="header-anchor" href="#_4-删除数据盘" aria-hidden="true">#</a> 4.删除数据盘</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/disk/delete/&lt;task_id&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;disk&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vdb&quot;</span> <span class="token comment">//盘符</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><br><h2 id="快照管理" tabindex="-1"><a class="header-anchor" href="#快照管理" aria-hidden="true">#</a> 快照管理</h2><h3 id="_1-查询快照列表" tabindex="-1"><a class="header-anchor" href="#_1-查询快照列表" aria-hidden="true">#</a> 1.查询快照列表</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/snapshot/list/&lt;task_id&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_2-查询快照详细信息" tabindex="-1"><a class="header-anchor" href="#_2-查询快照详细信息" aria-hidden="true">#</a> 2.查询快照详细信息</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/snapshot/list/&lt;task_id&gt;/&lt;snapshot_name&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_3-创建快照" tabindex="-1"><a class="header-anchor" href="#_3-创建快照" aria-hidden="true">#</a> 3.创建快照</h3><div class="hint-container tip"><p class="hint-container-title">注意！</p><p>创建快照是请确保虚拟机为关闭状态</p></div><ul><li><p>请求方式： POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/create/&lt;task_id&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;snapshot_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;snap1&quot;</span><span class="token punctuation">,</span> <span class="token comment">//快照名</span>
    <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span> <span class="token comment">//描述</span>
    <span class="token property">&quot;image_server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ID_2&quot;</span> <span class="token comment">//创建的快照上传到此镜像中心</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的 session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的 session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-删除快照" tabindex="-1"><a class="header-anchor" href="#_4-删除快照" aria-hidden="true">#</a> 4.删除快照</h3><ul><li><p>请求方式： POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/delete/&lt;task_id&gt;/&lt;snapshot_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的 session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的 session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="镜像管理" tabindex="-1"><a class="header-anchor" href="#镜像管理" aria-hidden="true">#</a> 镜像管理</h2><h3 id="_1-查询镜像中心-id-列表" tabindex="-1"><a class="header-anchor" href="#_1-查询镜像中心-id-列表" aria-hidden="true">#</a> 1. 查询镜像中心 ID 列表</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/servers\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-查询镜像列表" tabindex="-1"><a class="header-anchor" href="#_2-查询镜像列表" aria-hidden="true">#</a> 2.查询镜像列表</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><p><strong>1. 查询镜像中心的镜像列表</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 【必填】指定要查询的镜像中心ID</span>
    <span class="token property">&quot;image_server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ID_1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 查询 GPU 节点的镜像列表</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 【可选】指定要查询的镜像中心ID</span>
    <span class="token property">&quot;image_server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ID_1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 查询 GPU 节点上某个用户的镜像列表</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 指定要查询的镜像中心ID</span>
    <span class="token property">&quot;image_server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ID_1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实例：</li></ul><figure><img src="`+g+`" alt="all_images" tabindex="0" loading="lazy"><figcaption>all_images</figcaption></figure><h3 id="_3-上传镜像" tabindex="-1"><a class="header-anchor" href="#_3-上传镜像" aria-hidden="true">#</a> 3.上传镜像</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/upload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><p><strong>1. 将 GPU 节点上的某个镜像上传到镜像中心</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 指定要查询的镜像中心ID</span>
    <span class="token property">&quot;image_server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ID_1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 将客户端节点上的某个镜像上传到镜像中心</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 指定要查询的镜像中心ID</span>
    <span class="token property">&quot;image_server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ID_1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实例：</li></ul><figure><img src="`+p+`" alt="snap_list" tabindex="0" loading="lazy"><figcaption>snap_list</figcaption></figure><h3 id="_4-下载镜像" tabindex="-1"><a class="header-anchor" href="#_4-下载镜像" aria-hidden="true">#</a> 4.下载镜像</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/download
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><p><strong>从镜像中心下载镜像到 GPU 节点</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 指定要查询的镜像中心ID</span>
    <span class="token property">&quot;image_server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ID_1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 本地存储路径</span>
    <span class="token property">&quot;local_dir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/my_local_dir&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实例：</li></ul><figure><img src="`+p+`" alt="snap_list" tabindex="0" loading="lazy"><figcaption>snap_list</figcaption></figure><h3 id="_5-查询下载进度" tabindex="-1"><a class="header-anchor" href="#_5-查询下载进度" aria-hidden="true">#</a> 5.查询下载进度</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/downloadprogress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-查询上传进度" tabindex="-1"><a class="header-anchor" href="#_6-查询上传进度" aria-hidden="true">#</a> 6.查询上传进度</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/uploadprogress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-停止下载" tabindex="-1"><a class="header-anchor" href="#_7-停止下载" aria-hidden="true">#</a> 7.停止下载</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/download_stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-停止上传" tabindex="-1"><a class="header-anchor" href="#_8-停止上传" aria-hidden="true">#</a> 8.停止上传</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/upload_stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-删除镜像文件" tabindex="-1"><a class="header-anchor" href="#_9-删除镜像文件" aria-hidden="true">#</a> 9.删除镜像文件</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="虚拟机组网" tabindex="-1"><a class="header-anchor" href="#虚拟机组网" aria-hidden="true">#</a> 虚拟机组网</h2><h3 id="_1-创建网络" tabindex="-1"><a class="header-anchor" href="#_1-创建网络" aria-hidden="true">#</a> 1. 创建网络</h3><div class="hint-container tip"><p class="hint-container-title">注意！</p><p>创建的网络只能在同一机房内使用</p></div><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/lan/create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// GPU节点的node_id</span>
    <span class="token string">&quot;441f631da912b2186a3ef0452430f139cf01641bf4e2dce07e06103d8d70e533&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建网络的名称(6-10位字母或者数字组合)</span>
    <span class="token property">&quot;network_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;testnet&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 网段/ 掩码位数</span>
    <span class="token property">&quot;ip_cidr&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192.168.66.0/24&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-删除网络" tabindex="-1"><a class="header-anchor" href="#_2-删除网络" aria-hidden="true">#</a> 2. 删除网络</h3><div class="hint-container tip"><p class="hint-container-title">注意！</p><p>DBC 会自动清理长时间没有虚拟机使用的网络</p></div><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/lan/delete/&lt;network_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// GPU节点的node_id</span>
    <span class="token string">&quot;441f631da912b2186a3ef0452430f139cf01641bf4e2dce07e06103d8d70e533&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="裸金属节点操作" tabindex="-1"><a class="header-anchor" href="#裸金属节点操作" aria-hidden="true">#</a> 裸金属节点操作</h2><p>想要控制一台裸金属服务器的开关机等操作，需要一台跟裸金属服务器在同一个网络中的 CPU 服务器。在此 CPU 服务器上运行 dbc 的裸金属节点程序，然后将裸金属服务器的相关信息(IP 地址和 IPMI 控制信息)添加到节点中，节点会为裸金属服务器生成一个对应的 &quot;node_id&quot; 加入到 dbc 的网络中，就可以通过 &quot;node_id&quot; 来租用和控制裸金属服务器了。</p>`,144),f={href:"https://deepbrainchain.github.io/DBC-Wiki/install-update-dbc-node/install-update-dbc/dbc-bare-metal-node.html",target:"_blank",rel:"noopener noreferrer"},y=a(`<h3 id="_1-查询裸金属服务器列表" tabindex="-1"><a class="header-anchor" href="#_1-查询裸金属服务器列表" aria-hidden="true">#</a> 1. 查询裸金属服务器列表</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 裸金属节点的node_id</span>
    <span class="token string">&quot;ccd9a2118ba3c95cd458302601f15281edc39d72dcf11a07527893d97ac1a573&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-添加裸金属服务器" tabindex="-1"><a class="header-anchor" href="#_2-添加裸金属服务器" aria-hidden="true">#</a> 2. 添加裸金属服务器</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal/add
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 裸金属节点的node_id</span>
    <span class="token string">&quot;ccd9a2118ba3c95cd458302601f15281edc39d72dcf11a07527893d97ac1a573&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 裸金属服务器的信息列表</span>
    <span class="token property">&quot;bare_metal_nodes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 机器供应商的识别裸金属的唯一ID，必填。</span>
        <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3156995b-da18-4268-9734-f8d168e90a7d&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 裸金属服务器给用户提供的连接方式，必填。建议固定IP地址。</span>
        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;175.221.204.110&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 裸金属服务器的操作系统，非必填。</span>
        <span class="token property">&quot;os&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ubuntu 20.04.3 LTS (Focal Fossa) 5.4.0-121-generic GNU/Linux&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 机器所有者自定义的描述，非必填。</span>
        <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在xxx平台租用的裸金属服务器，用于xxx业务，机房id是9f01ca9c-38bd-46a9-9637-dac92b352a63&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// ipmi的主机标识，必填。建议固定IP地址。</span>
        <span class="token property">&quot;ipmi_hostname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192.168.0.110&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// ipmi的用户名，必填。</span>
        <span class="token property">&quot;ipmi_username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// ipmi的用户密码，必填。</span>
        <span class="token property">&quot;ipmi_password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dbtu2017&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// ipmi的端口号，非必填。v0.4.0.9 版本增加。</span>
        <span class="token property">&quot;ipmi_port&quot;</span><span class="token operator">:</span> <span class="token number">623</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回示例：</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;errcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bare_metal_nodes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;node_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fcf2cd8b99958606d260ca00c5ac00c88c242bcf8eb38e7cc3f29e9719a73f39&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3156995b-da18-4268-9734-f8d168e90a7d&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-删除裸金属服务器" tabindex="-1"><a class="header-anchor" href="#_3-删除裸金属服务器" aria-hidden="true">#</a> 3. 删除裸金属服务器</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal/delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 裸金属节点的node_id</span>
    <span class="token string">&quot;ccd9a2118ba3c95cd458302601f15281edc39d72dcf11a07527893d97ac1a573&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 裸金属服务器对应的 node_id 列表</span>
    <span class="token property">&quot;bare_metal_node_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 添加裸金属服务器时返回的 node_id</span>
      <span class="token string">&quot;8c29b20da3fdb2d6c5ad7c2c85b303d9d337a1b82fa584a6b6cf1303331efd16&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-裸金属服务器电源控制" tabindex="-1"><a class="header-anchor" href="#_4-裸金属服务器电源控制" aria-hidden="true">#</a> 4. 裸金属服务器电源控制</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal/power
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 裸金属服务器对应的node_id</span>
    <span class="token string">&quot;fcf2cd8b99958606d260ca00c5ac00c88c242bcf8eb38e7cc3f29e9719a73f39&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 电源控制命令</span>
    <span class="token comment">// &quot;on&quot;     - 开机</span>
    <span class="token comment">// &quot;off&quot;    - 关机</span>
    <span class="token comment">// &quot;reset&quot;  - 重启</span>
    <span class="token comment">// &quot;status&quot; - 获取电源状态</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-修改裸金属服务器引导启动顺序" tabindex="-1"><a class="header-anchor" href="#_5-修改裸金属服务器引导启动顺序" aria-hidden="true">#</a> 5. 修改裸金属服务器引导启动顺序</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/bare_metal/bootdev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 裸金属服务器对应的node_id</span>
    <span class="token string">&quot;fcf2cd8b99958606d260ca00c5ac00c88c242bcf8eb38e7cc3f29e9719a73f39&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 引导启动顺序</span>
    <span class="token comment">// &quot;pxe&quot;    - 从PXE启动</span>
    <span class="token comment">// &quot;disk&quot;   - 从硬盘启动</span>
    <span class="token comment">// &quot;cdrom&quot;  - 从CD/DVD启动</span>
    <span class="token comment">// &quot;bios&quot;   - 启动进入BIOS设置</span>
    <span class="token property">&quot;device&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pxe&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deeplink-设备信息" tabindex="-1"><a class="header-anchor" href="#deeplink-设备信息" aria-hidden="true">#</a> DeepLink 设备信息</h2>`,28),x={href:"https://deeplink.cloud/",target:"_blank",rel:"noopener noreferrer"},j=a(`<p>相应的，使用 DeepLink 远程控制，需要获得 GPU 机器上运行的 DeepLink 软件的设备码和设备验证码(后面统称为 DeepLink 设备信息)。为此，我们增加通过 dbc 节点来查询 DeepLink 设备信息的接口。</p><p>为了保证安全，建议云网吧场景中的 GPU 机器每次开机后都有不同的设备验证码，并且在开机后的第一时间使用设置 DeepLink 设备信息的接口将设备信息告知 dbc 的裸金属节点。</p><p>另外，需要将裸金属节点的配置文件 <code>dbc_baremetal_node/conf/core.conf</code> 中的 <code>http_ip=127.0.0.1</code> 修改为 <code>http_ip=0.0.0.0</code>，这样设置将使得裸金属节点可以直接接受 HTTP 请求。</p><p>当 GPU 机器和 dbc 的裸金属节点位于同一个网络中的时候，可以直接使用裸金属节点的 HTTP 服务来获取/设置设备信息，而且此时的请求不需要 <code>session_id</code> 和 <code>session_id_sign</code> 参数。当租用人通过客户端节点的 HTTP 服务查询设备信息时，就必需带有 <code>session_id</code> 和 <code>session_id_sign</code> 参数了。</p><h3 id="_1-查询-deeplink-设备信息" tabindex="-1"><a class="header-anchor" href="#_1-查询-deeplink-设备信息" aria-hidden="true">#</a> 1. 查询 DeepLink 设备信息</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/deeplink
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// GPU 机器对应的 node_id</span>
    <span class="token string">&quot;fcf2cd8b99958606d260ca00c5ac00c88c242bcf8eb38e7cc3f29e9719a73f39&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回示例：</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;errcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;device_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456789&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;device_password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aAbBcC&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-设置-deeplink-设备信息" tabindex="-1"><a class="header-anchor" href="#_2-设置-deeplink-设备信息" aria-hidden="true">#</a> 2. 设置 DeepLink 设备信息</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/deeplink/set
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// GPU 机器对应的 node_id</span>
    <span class="token string">&quot;fcf2cd8b99958606d260ca00c5ac00c88c242bcf8eb38e7cc3f29e9719a73f39&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;device_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456789&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;device_password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aAbBcC&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回示例：</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;errcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function P(U,w){const e=d("ExternalLinkIcon");return l(),c("div",null,[h,s("p",null,[n("如需安装 dbc 裸金属节点，请参考 "),s("a",f,[n("DBC 裸金属节点"),t(e)])]),y,s("p",null,[n("在云网吧场景中，一台 GPU 机器以裸金属服务器的方式上链后，想要获得电竞级的游戏体验，还需要使用基于云游戏的低延迟远程控制软件 "),s("a",x,[n("DeepLink"),t(e)]),n("。")]),j])}const L=i(_,[["render",P],["__file","http-api.html.vue"]]);export{L as default};
