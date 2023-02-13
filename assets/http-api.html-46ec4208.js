import{_ as s,W as a,X as e,a0 as t}from"./framework-5cecf6de.js";const o="/DBC-Wiki/assets/query_machine_info-4e40c27c.png",i="/DBC-Wiki/assets/query_session_id-4a7d3922.png",p="/DBC-Wiki/assets/create_task-3ddee2d1.png",l="/DBC-Wiki/assets/query_task_info-e24f4642.png",c="/DBC-Wiki/assets/list_task-90d6f04c.png",u="/DBC-Wiki/assets/stop_task-2fdd0060.jpg",d="/DBC-Wiki/assets/start_task-ef0ff630.jpg",r="/DBC-Wiki/assets/delete_task-02556d3a.png",v="/DBC-Wiki/assets/create_snap-6b110ffa.png",n="/DBC-Wiki/assets/snap_list-826edd5e.png",k="/DBC-Wiki/assets/all_images-64dbe357.png",m={},b=t(`<h1 id="http-客户端请求-api" tabindex="-1"><a class="header-anchor" href="#http-客户端请求-api" aria-hidden="true">#</a> HTTP 客户端请求 API</h1><div class="hint-container tip"><p class="hint-container-title">注意！</p><p>以下 HTTP 请求其中的 dbc_client_ip 和 dbc_client_port 为用户自己部署的 DBC 客户端访问地址</p></div><hr><h2 id="gpu-节点管理" tabindex="-1"><a class="header-anchor" href="#gpu-节点管理" aria-hidden="true">#</a> GPU 节点管理</h2><h3 id="_1-查询-gpu-节点机器配置信息" tabindex="-1"><a class="header-anchor" href="#_1-查询-gpu-节点机器配置信息" aria-hidden="true">#</a> 1. 查询 GPU 节点机器配置信息</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/mining_nodes</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+o+`" width="500" height="160" align="center"></p></blockquote><br><h3 id="_2-租用者查询获取-session-id" tabindex="-1"><a class="header-anchor" href="#_2-租用者查询获取-session-id" aria-hidden="true">#</a> 2. 租用者查询获取 session_id</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/mining_nodes/session_id</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">//GPU节点的node_id</span>
        <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token comment">//身份认证信息，使用租用者签名或者多签账户签名（参考HTTP请求格式说明），两者选一</span>
   ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例（此处使用的是租用者签名，也可以使用多签账户签名）： <img src="`+i+`" width="500" height="180" align="center"></p></blockquote><br><h2 id="虚拟机管理" tabindex="-1"><a class="header-anchor" href="#虚拟机管理" aria-hidden="true">#</a> 虚拟机管理</h2><h3 id="_1-创建虚拟机" tabindex="-1"><a class="header-anchor" href="#_1-创建虚拟机" aria-hidden="true">#</a> 1. 创建虚拟机</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/start</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">//GPU节点的node_id</span>
        <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 远程登录linux虚拟机，ssh端口号（linux）</span>
        <span class="token property">&quot;ssh_port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5684&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 远程登录windows虚拟机，rdp端口号（windows）</span>
        <span class="token property">&quot;rdp_port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5685&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// vnc连接端口号</span>
        <span class="token property">&quot;vnc_port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5904&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;custom_port&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
           <span class="token comment">// 宿主机的123转发到虚拟机的123</span>
           <span class="token string">&quot;tcp/udp,123&quot;</span><span class="token punctuation">,</span>
           <span class="token comment">// 宿主机的111转发到虚拟机的222</span>
           <span class="token string">&quot;tcp/udp,111:222&quot;</span><span class="token punctuation">,</span>
           <span class="token comment">// 宿主机的333-444转发到虚拟机的444</span>
           <span class="token string">&quot;tcp/udp,333-444&quot;</span><span class="token punctuation">,</span>
           <span class="token comment">// 宿主机的[555-666]转发到虚拟机的[777-888]</span>
           <span class="token string">&quot;tcp/udp,555-666:777-888&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 镜像名字</span>
        <span class="token property">&quot;image_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 自定义虚拟机标识（例如：my-ubuntu-1804）</span>
        <span class="token property">&quot;custom_image_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-ubuntu-1804&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 操作系统类型: ubuntu、win</span>
        <span class="token property">&quot;operation_system&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 引导方式:</span>
        <span class="token comment">//   linux系统设置：legacy</span>
        <span class="token comment">// windows系统设置：uefi</span>
        <span class="token property">&quot;bios_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;legacy&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 不同虚拟机之间互相传输的组播地址,范围为224.0.0.0~239.0.0.0</span>
        <span class="token comment">// 添加多组播地址续在括号中用&quot;,&quot;相隔,也可不填</span>
        <span class="token property">&quot;multicast&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;230.0.0.1:5558&quot;</span><span class="token punctuation">]</span>
        <span class="token comment">// gpu数量（大于等于 0）</span>
        <span class="token property">&quot;gpu_count&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// cpu数量（大于0）</span>
        <span class="token property">&quot;cpu_cores&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 内存大小（大于0，单位：G）</span>
        <span class="token property">&quot;mem_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 磁盘大小（大于0，单位：G）</span>
        <span class="token property">&quot;disk_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span>
        <span class="token comment">//内网名称（创建虚拟机网络时填的名称）</span>
        <span class="token property">&quot;network_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+p+`" width="500" height="240" align="center"></p></blockquote><ul><li>创建过程的时间长短，会根据配置的不同而不同，大约在五分钟到十五分钟之间。</li><li>可以通过请求<code>虚拟机详细信息</code>，查询到虚拟机<code>登录方式</code>以及虚拟机的<code>当前状态</code>（当状态值为&quot;creating&quot;，表示虚拟机正在创建过程中）</li></ul><br><h3 id="_2-查询虚拟机详细信息" tabindex="-1"><a class="header-anchor" href="#_2-查询虚拟机详细信息" aria-hidden="true">#</a> 2. 查询虚拟机详细信息</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/&lt;要查询的 task_id 值&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>示例： <img src="`+l+`" width="500" height="240" align="center"></p><h3 id="_3-查询虚拟机列表" tabindex="-1"><a class="header-anchor" href="#_3-查询虚拟机列表" aria-hidden="true">#</a> 3. 查询虚拟机列表</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+c+`" width="500" height="200" align="center"></p></blockquote><h3 id="_4-停止虚拟机" tabindex="-1"><a class="header-anchor" href="#_4-停止虚拟机" aria-hidden="true">#</a> 4. 停止虚拟机</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/stop/&lt;要停止的 task_id 值&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+u+`" width="500" height="200" align="center"></p></blockquote><h3 id="_5-启动虚拟机" tabindex="-1"><a class="header-anchor" href="#_5-启动虚拟机" aria-hidden="true">#</a> 5. 启动虚拟机</h3><blockquote><p><strong>唤醒处于睡眠状态的虚拟机，也是用此接口</strong></p><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/start/&lt;要启动的 task_id 值&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+d+`" width="500" height="200" align="center"></p></blockquote><h3 id="_6-删除虚拟机" tabindex="-1"><a class="header-anchor" href="#_6-删除虚拟机" aria-hidden="true">#</a> 6. 删除虚拟机</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/delete/&lt;要删除的 task_id 值&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+r+`" width="500" height="200" align="center"></p></blockquote><h3 id="_7-重启虚拟机" tabindex="-1"><a class="header-anchor" href="#_7-重启虚拟机" aria-hidden="true">#</a> 7. 重启虚拟机</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/restart/&lt;要重启的 task_id 值&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="hint-container warning"><p class="hint-container-title">경고</p><p>发送重启请求后，管理程序将选择它认为最好的关闭方法。请注意，虚拟机可能会忽略该请求。若要强制重启虚拟机，请给 url 加上 force_reboot 参数，参数等于 true 或者 1 即强制重启，等于 false 或者 0 或者不带参数则仍旧使用上面传统的方式重启。强制重启虚拟机的请求 url 如下：</p><p>http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/restart/&lt;要重启的 task_id 值&gt;?force_reboot=true</p></div><h3 id="_8-查询虚拟机日志" tabindex="-1"><a class="header-anchor" href="#_8-查询虚拟机日志" aria-hidden="true">#</a> 8. 查询虚拟机日志</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/logs/&lt;要查询的 task_id 值&gt;?flag=tail&amp;line_num=10</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="hint-container tip"><p class="hint-container-title">注意！</p><p>查询虚拟机日志的请求 url 有两个参数，flag 表示查询日志的方向，参数等于 tail 即从日志文件的尾部开始查询，等于 head 即从日志文件的头部开始查询。line_num 表示要查询的日志行数，如果超过文件的实际行数，则以文件实际行数为准。最后，此请求最多返回 1024 个字节，超出范围的日志会被截断。</p></div><h3 id="_9-修改虚拟机配置" tabindex="-1"><a class="header-anchor" href="#_9-修改虚拟机配置" aria-hidden="true">#</a> 9. 修改虚拟机配置</h3><div class="hint-container tip"><p class="hint-container-title">팁</p><p>需要先关闭虚拟机</p></div><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/modify/&lt;task_id&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
    <span class="token property">&quot;new_cpu_cores&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span> <span class="token comment">// &gt; 0, 单位G</span>
    <span class="token property">&quot;new_mem_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span> <span class="token comment">// &gt; 0, 单位G</span>
    <span class="token property">&quot;increase_disk_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span> <span class="token comment">// &gt; 0, 单位G</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><br><h2 id="快照管理" tabindex="-1"><a class="header-anchor" href="#快照管理" aria-hidden="true">#</a> 快照管理</h2><h3 id="_1-创建快照" tabindex="-1"><a class="header-anchor" href="#_1-创建快照" aria-hidden="true">#</a> 1.创建快照</h3><div class="hint-container tip"><p class="hint-container-title">注意！</p><p>创建快照是请确保虚拟机为关闭状态</p></div><ul><li><p>请求方式： POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/&lt;task_id&gt;/create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;snapshot_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;snap2&quot;</span><span class="token punctuation">,</span> <span class="token comment">//自定义的镜像名</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;finish hello world&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 自定义的镜像描述（可不写）</span>
    <span class="token property">&quot;disks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">//选择磁盘创建（可以不写，如果没有&quot;disks&quot;，则默认对所有磁盘做外部增量快照，快照文件由 libvirt 自动生成）</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;disk_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vda&quot;</span><span class="token punctuation">,</span> <span class="token comment">//磁盘名称</span>
        <span class="token property">&quot;snapshot_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;external&quot;</span> <span class="token comment">//external创建外部快照</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;disk_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vdb&quot;</span><span class="token punctuation">,</span> <span class="token comment">//磁盘名称</span>
        <span class="token property">&quot;snapshot_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;no&quot;</span> <span class="token comment">//no不创建快照(不填写默认使用external)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的 session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的 session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实例：</li></ul><figure><img src="`+v+`" alt="create_snap" tabindex="0" loading="lazy"><figcaption>create_snap</figcaption></figure><h3 id="_2-查看快照列表" tabindex="-1"><a class="header-anchor" href="#_2-查看快照列表" aria-hidden="true">#</a> 2.查看快照列表</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/&lt;task_id&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实例：</li></ul><figure><img src="`+n+`" alt="snap_list" tabindex="0" loading="lazy"><figcaption>snap_list</figcaption></figure><h3 id="_3-查看快照详情信息" tabindex="-1"><a class="header-anchor" href="#_3-查看快照详情信息" aria-hidden="true">#</a> 3.查看快照详情信息</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/&lt;task_id&gt;/&lt;snap_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实例：</li></ul><figure><img src="`+n+`" alt="snap_list" tabindex="0" loading="lazy"><figcaption>snap_list</figcaption></figure><h2 id="镜像管理" tabindex="-1"><a class="header-anchor" href="#镜像管理" aria-hidden="true">#</a> 镜像管理</h2><h3 id="_1-查询镜像中心-id-列表" tabindex="-1"><a class="header-anchor" href="#_1-查询镜像中心-id-列表" aria-hidden="true">#</a> 1. 查询镜像中心 ID 列表</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URl：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/servers\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-查询镜像列表" tabindex="-1"><a class="header-anchor" href="#_2-查询镜像列表" aria-hidden="true">#</a> 2.查询镜像列表</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URl：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images\`
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实例：</li></ul><figure><img src="`+k+`" alt="all_images" tabindex="0" loading="lazy"><figcaption>all_images</figcaption></figure><h3 id="_3-上传镜像" tabindex="-1"><a class="header-anchor" href="#_3-上传镜像" aria-hidden="true">#</a> 3.上传镜像</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/upload
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实例：</li></ul><figure><img src="`+n+`" alt="snap_list" tabindex="0" loading="lazy"><figcaption>snap_list</figcaption></figure><h3 id="_4-下载镜像" tabindex="-1"><a class="header-anchor" href="#_4-下载镜像" aria-hidden="true">#</a> 4.下载镜像</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/download
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实例：</li></ul><figure><img src="`+n+`" alt="snap_list" tabindex="0" loading="lazy"><figcaption>snap_list</figcaption></figure><h2 id="虚拟机组网" tabindex="-1"><a class="header-anchor" href="#虚拟机组网" aria-hidden="true">#</a> 虚拟机组网</h2><h3 id="_1-创建网络-创建时请确保发送请求的客户端和机器是在同一机房" tabindex="-1"><a class="header-anchor" href="#_1-创建网络-创建时请确保发送请求的客户端和机器是在同一机房" aria-hidden="true">#</a> 1.创建网络（创建时请确保发送请求的客户端和机器是在同一机房）</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URl：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/lan/create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;peer_nodes_list&quot;: [

    ],
    &quot;additional&quot;: {
        //创建网络的名称
        &quot;network_name&quot;:&quot;test&quot;,
        //vni_ID(不可重复)
        &quot;vxlan_vni&quot;:&quot;5801&quot;,
        //网段/ 掩码位数
        &quot;ip_cidr&quot;:&quot;192.168.66.0/24&quot;
    },
    &quot;session_id&quot;:&quot;租用者分发的session_id&quot;,
    &quot;session_id_sign&quot;:&quot;租用者分发的session_id_sign&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-删除网络-发送请求时请确保发送请求的客户端和机器是在同一机房" tabindex="-1"><a class="header-anchor" href="#_2-删除网络-发送请求时请确保发送请求的客户端和机器是在同一机房" aria-hidden="true">#</a> 2.删除网络（发送请求时请确保发送请求的客户端和机器是在同一机房）</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/lan/delete/&lt;network_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;peer_nodes_list&quot;: [
        //可选（填入id表示删除机器网络，不填入表示删除客户端网络）
        &quot;441f631da912b2186a3ef0452430f139cf01641bf4e2dce07e06103d8d70e533&quot;
    ],
    &quot;additional&quot;: {

    },
    &quot;session_id&quot;:&quot;租用者分发的session_id&quot;,
    &quot;session_id_sign&quot;:&quot;租用者分发的session_id_sign&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,106),q=[b];function g(_,h){return a(),e("div",null,q)}const y=s(m,[["render",g],["__file","http-api.html.vue"]]);export{y as default};
