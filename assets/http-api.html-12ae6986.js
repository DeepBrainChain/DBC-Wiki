import{_ as a,V as e,W as t,$ as o}from"./framework-1d64dffd.js";const p="/DBC-Wiki/assets/query_machine_info-4e40c27c.png",i="/DBC-Wiki/assets/query_session_id-4a7d3922.png",l="/DBC-Wiki/assets/create_task-3ddee2d1.png",c="/DBC-Wiki/assets/query_task_info-e24f4642.png",d="/DBC-Wiki/assets/list_task-90d6f04c.png",n="/DBC-Wiki/assets/stop_task-2fdd0060.jpg",u="/DBC-Wiki/assets/start_task-ef0ff630.jpg",r="/DBC-Wiki/assets/delete_task-02556d3a.png",v="/DBC-Wiki/assets/all_images-64dbe357.png",s="/DBC-Wiki/assets/snap_list-826edd5e.png",k={},m=o(`<h1 id="http고객측-api요청" tabindex="-1"><a class="header-anchor" href="#http고객측-api요청" aria-hidden="true">#</a> HTTP고객측 API요청</h1><p><strong>다음 HTTP 요청의 dbc_client_ip 및 dbc_client_port는 사용자 자신이 배포한 DBC 고객측 액세스 주소입니다.</strong></p><hr><h2 id="gpu노드-관리" tabindex="-1"><a class="header-anchor" href="#gpu노드-관리" aria-hidden="true">#</a> GPU노드 관리</h2><h3 id="_1-gpu노드-기기-설정-정보-확인" tabindex="-1"><a class="header-anchor" href="#_1-gpu노드-기기-설정-정보-확인" aria-hidden="true">#</a> 1.GPU노드 기기 설정 정보 확인</h3><p>요청방식: POST</p><p>URL요청: http://&lt;dbc_client_ip&gt;:&lt;dbc_client_port&gt;/api/v1/mining_nodes</p><p>body요청:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU노드의node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예: <img src="`+p+`" width="500" height="160" align="center"></p><br><h3 id="_2-임대자-session-id-확인-및-획득" tabindex="-1"><a class="header-anchor" href="#_2-임대자-session-id-확인-및-획득" aria-hidden="true">#</a> 2. 임대자 session_id 확인 및 획득</h3><p>요청방식： POST</p><p>URL요청： http://&lt;dbc_client_ip&gt;:&lt;dbc_client_port&gt;/api/v1/mining_nodes/session_id</p><p>body요청 ：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;peer_nodes_list&quot;: [
  //GPU노드의 node_id
  &quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;
  ],
  &quot;additional&quot;: {
  },
  //신분 인증 정보，임대자 서명 사용 혹은  다명의계정 서명 사용（HTTP여청 형식 설명 참조 바랍니다），둘중하나 선택
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예 (이부분은 임대자 서명 사용 해도 되고, 다명의계정 서명 사용해도 됩니다 ) : <img src="`+i+`" width="500" height="180" align="center"></p><br><h2 id="가상기기-관리" tabindex="-1"><a class="header-anchor" href="#가상기기-관리" aria-hidden="true">#</a> 가상기기 관리</h2><h3 id="_1-가상기기-생성" tabindex="-1"><a class="header-anchor" href="#_1-가상기기-생성" aria-hidden="true">#</a> 1. 가상기기 생성</h3><p>요청방식： POST</p><p>URL요청： http://&lt;dbc_client_ip&gt;:&lt;dbc_client_port&gt;/api/v1/tasks/start</p><p>body요청：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU노드의node_id</span>
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
         <span class="token property">&quot;custom_port&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>

         <span class="token punctuation">]</span><span class="token punctuation">,</span>

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
         <span class="token property">&quot;multicast&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;230.0.0.1:5558&quot;</span><span class="token punctuation">]</span>
         <span class="token comment">//内网名称（创建虚拟机网络时填的名称）</span>
         <span class="token property">&quot;network_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;임대자가 배포한 session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;임대자가 배포한 session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예 : <img src="`+l+`" width="500" height="240" align="center"></p><ul><li><p>생성 프로세스의 시간은 설정 구성에 따라 5분에서 15분까지 진행됩니다.</p></li><li><p>가상 기기 상세 정보를 요청하여 가상 기기의 로그인 방식과 가상 기기의 현재 상태를 조회할 수 있습니다.(상태값이 &quot;creating&quot;이면, 가상기기가 생성 진행중임을 의마합니다 .)</p></li></ul><h3 id="_2-가상기기-상세정보-확인" tabindex="-1"><a class="header-anchor" href="#_2-가상기기-상세정보-확인" aria-hidden="true">#</a> 2.가상기기 상세정보 확인</h3><p>요청 방식： POST</p><p>URL요청： http://&lt;dbc_client_ip&gt;:&lt;dbc_client_port&gt;/api/v1/tasks/&lt;확인 할task_id값&gt;</p><p>body요청：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU노드의node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;임대자 배포한 session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;임대자 배포한 session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예: <img src="`+c+`" width="500" height="240" align="center"></p><h3 id="_3-가상기기-목록-확인" tabindex="-1"><a class="header-anchor" href="#_3-가상기기-목록-확인" aria-hidden="true">#</a> 3.가상기기 목록 확인</h3><p>방식 요청： POST</p><p>URL 요청： http://&lt;dbc_client_ip&gt;:&lt;dbc_client_port&gt;/api/v1/tasks</p><p>body 요청：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU노드의 node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;임대자 배포한session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;임대자 배포한session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예: <img src="`+d+`" width="500" height="200" align="center"></p><h3 id="_4-关闭虚拟机-shutdown" tabindex="-1"><a class="header-anchor" href="#_4-关闭虚拟机-shutdown" aria-hidden="true">#</a> 4. 关闭虚拟机(shutdown)</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/shutdown/&lt;要停止的 task_id 值&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+n+`" width="500" height="200" align="center"></p></blockquote><h3 id="_5-关闭虚拟机-强制断电" tabindex="-1"><a class="header-anchor" href="#_5-关闭虚拟机-强制断电" aria-hidden="true">#</a> 5. 关闭虚拟机(强制断电)</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/poweroff/&lt;要停止的 task_id 值&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU节点的node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： <img src="`+n+`" width="500" height="200" align="center"></p></blockquote><h3 id="_6-가상기기-작동" tabindex="-1"><a class="header-anchor" href="#_6-가상기기-작동" aria-hidden="true">#</a> 6.가상기기 작동</h3><p>이 인터페이스는 휴면 상태의 가상 머신을 깨우는 데에도 사용됩니다.</p><p>방식 요청： POST</p><p>URL 요청： http://&lt;dbc_client_ip&gt;:&lt;dbc_client_port&gt;/api/v1/tasks/start/&lt;작동할 task_id값&gt;</p><p>body 요청</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU노드의 node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;임대자 배포한session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;임대자 배포한 session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예: <img src="`+u+`" width="500" height="200" align="center"></p><h3 id="_7-가상기기-삭제" tabindex="-1"><a class="header-anchor" href="#_7-가상기기-삭제" aria-hidden="true">#</a> 7.가상기기 삭제</h3><p>방식 요청： POST</p><p>URL 요청： http://&lt;dbc_client_ip&gt;:&lt;dbc_client_port&gt;/api/v1/tasks/delete/&lt;삭제 할task_id값&gt;</p><p>body 요청：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU노드의 node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;임대자 배포한session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;임대자 배포한 session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예: <img src="`+r+`" width="500" height="200" align="center"></p><h3 id="_8-가상기기-다시시작" tabindex="-1"><a class="header-anchor" href="#_8-가상기기-다시시작" aria-hidden="true">#</a> 8.가상기기 다시시작</h3><p>방식 요청： POST</p><p>URL 요청： http://&lt;dbc_client_ip&gt;:&lt;dbc_client_port&gt;/api/v1/tasks/restart/&lt;다시 시작할task_id값&gt;</p><p>body요청：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU노드의 node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;임대자 배포한 session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;임대자 배포한 session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">경고</p><p><strong>경 보:</strong> 다시 시작 요청을 보낸 후 관리프로그램은 최선이라고 생각하는 종료 방법을 선택합니다. 가상 기기에서 요청을 무시할 수 있습니다. 가상기기를 강제로 다시 시작하려면 url에 force_reboot 파라미터를 추가하십시오. 파라미터가 true 또는 1이면 강제로 다시 시작됩니다. false 또는 0이거나 파라미터가 없으면 상기 전통 방식으로 다시 시작합니다 계. 가상 기기 강제로 다시 시작하기 위한 요청 URL은 다음과 같습니다:</p><p>http://&lt;dbc_client_ip&gt;:&lt;dbc_client_port&gt;/api/v1/tasks/restart/&lt;다시 시작할 task_id값&gt;?force_reboot=true</p></div><h3 id="_9-가상기기-일지-확인" tabindex="-1"><a class="header-anchor" href="#_9-가상기기-일지-확인" aria-hidden="true">#</a> 9.가상기기 일지 확인</h3><p>방식 요청： POST</p><p>URL 요청： http://&lt;dbc_client_ip&gt;:&lt;dbc_client_port&gt;/api/v1/tasks/logs/&lt;확인할task_id값&gt;?flag=tail&amp;line_num=10</p><p>body 요청：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU노드의 node_id</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;임대자 배포한session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;임대자 배포한session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">팁</p><p>가상기기 일지 확인을위한 url요청은 2개의 파라미터를 가지고 있으며, 플래그는 일지의 방향을 나타내며, 파라미터가 tail일 경우 일지파일의 끝부분부터 확인 시작하며, head일 경우 일지파일의 시작단계 부터 확인합니다 . line_num은일지 라인의 수를 나타내며 파일의 실제 라인 수를 초과하는 경우 파일의 실제 라인 수로 우선 진행합니다. 마지막으로 이 요청은 최대 1024바이트를 반환하고 범위를 벗어난 일지는 잘립니다.</p></div><h3 id="_10-가상-머신-구성-수정" tabindex="-1"><a class="header-anchor" href="#_10-가상-머신-구성-수정" aria-hidden="true">#</a> 10.가상 머신 구성 수정</h3><div class="hint-container tip"><p class="hint-container-title">팁</p><p>먼저 가상 머신을 종료해야 합니다.</p></div><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/modify/&lt;task_id&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
    <span class="token property">&quot;new_mem_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span> <span class="token comment">// &gt; 0, 单位G</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="磁盘管理" tabindex="-1"><a class="header-anchor" href="#磁盘管理" aria-hidden="true">#</a> 磁盘管理</h2><h3 id="_1-查询磁盘列表" tabindex="-1"><a class="header-anchor" href="#_1-查询磁盘列表" aria-hidden="true">#</a> 1.查询磁盘列表</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/disk/list/&lt;task_id&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><br><h2 id="스냅샷-이미지-관리" tabindex="-1"><a class="header-anchor" href="#스냅샷-이미지-관리" aria-hidden="true">#</a> 스냅샷/ 이미지 관리</h2><h3 id="_1-查询快照列表" tabindex="-1"><a class="header-anchor" href="#_1-查询快照列表" aria-hidden="true">#</a> 1.查询快照列表</h3><blockquote><p><code>请求方式</code>：POST</p><p><code>请求URL</code>：http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/snapshot/list/&lt;task_id&gt;</p><p><code>请求body</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="image-manage" tabindex="-1"><a class="header-anchor" href="#image-manage" aria-hidden="true">#</a> Image Manage</h2><h3 id="_1-查询镜像中心-id-列表" tabindex="-1"><a class="header-anchor" href="#_1-查询镜像中心-id-列表" aria-hidden="true">#</a> 1. 查询镜像中心 ID 列表</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URl：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/servers\`
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实例：</li></ul><figure><img src="`+v+`" alt="all_images" tabindex="0" loading="lazy"><figcaption>all_images</figcaption></figure><h3 id="_3-上传镜像" tabindex="-1"><a class="header-anchor" href="#_3-上传镜像" aria-hidden="true">#</a> 3.上传镜像</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/upload
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实例：</li></ul><figure><img src="`+s+`" alt="snap_list" tabindex="0" loading="lazy"><figcaption>snap_list</figcaption></figure><h3 id="_4-下载镜像" tabindex="-1"><a class="header-anchor" href="#_4-下载镜像" aria-hidden="true">#</a> 4.下载镜像</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/download
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实例：</li></ul><figure><img src="`+s+`" alt="snap_list" tabindex="0" loading="lazy"><figcaption>snap_list</figcaption></figure><h3 id="_5-查询下载进度" tabindex="-1"><a class="header-anchor" href="#_5-查询下载进度" aria-hidden="true">#</a> 5.查询下载进度</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/downloadprogress
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="虚拟机组网" tabindex="-1"><a class="header-anchor" href="#虚拟机组网" aria-hidden="true">#</a> 虚拟机组网</h2><h3 id="_1-创建网络-创建的网络只能在同一机房内使用" tabindex="-1"><a class="header-anchor" href="#_1-创建网络-创建的网络只能在同一机房内使用" aria-hidden="true">#</a> 1.创建网络（创建的网络只能在同一机房内使用）</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URl：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/lan/create
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-删除网络-dbc-会自动清理长时间没有虚拟机使用的网络" tabindex="-1"><a class="header-anchor" href="#_2-删除网络-dbc-会自动清理长时间没有虚拟机使用的网络" aria-hidden="true">#</a> 2.删除网络（DBC 会自动清理长时间没有虚拟机使用的网络）</h3><ul><li><p>请求方式：POST</p></li><li><p>请求 URL：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/lan/delete/&lt;network_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求 Body:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// GPU节点的node_id</span>
    <span class="token string">&quot;441f631da912b2186a3ef0452430f139cf01641bf4e2dce07e06103d8d70e533&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;租用者分发的session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,169),b=[m];function q(_,g){return e(),t("div",null,b)}const f=a(k,[["render",q],["__file","http-api.html.vue"]]);export{f as default};
