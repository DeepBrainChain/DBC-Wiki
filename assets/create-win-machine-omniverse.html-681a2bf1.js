import{_ as o,V as i,W as p,X as n,Y as s,Z as e,$ as t,F as l}from"./framework-1d64dffd.js";const c="/assets/find_machine-a06ade5a.png",r="/assets/create_win-2d9a3a58.png",u="/assets/connect-45a80476.png",d="/assets/install-da853f67.png",m="/assets/face_info-9d12704d.png",_={},h=n("h1",{id:"windows가상기기-만들기-omniverse응용",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#windows가상기기-만들기-omniverse응용","aria-hidden":"true"},"#"),s(" windows가상기기 만들기(omniverse응용)")],-1),v=n("hr",null,null,-1),k=n("h2",{id:"단계1-임대-확정-기기",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#단계1-임대-확정-기기","aria-hidden":"true"},"#"),s(" 단계1 : 임대 확정 기기")],-1),b=n("ul",null,[n("li",null,"메인넷 지갑 열기")],-1),q={href:"https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io#/explorer",target:"_blank",rel:"noopener noreferrer"},g=n("ul",null,[n("li",null,[n("p",null,"지갑 만들기:계정-->계정추가 (니모닉 워드는 꼭 잘 보관하세요, 니모닉 워드 분실 경우 계정도 다시 찾을수 없습니다, 코인도 분실됩니다)")]),n("li",null,[n("p",null,"갤럭시레이스목차 클릭하여, 필요한 유휴기기 찾습니다.")])],-1),f={href:"https://galaxyrace.deepbrainchain.org/table",target:"_blank",rel:"noopener noreferrer"},w=t('<figure><img src="'+c+`" alt="find_machine" tabindex="0" loading="lazy"><figcaption>find_machine</figcaption></figure><h2 id="단계2-온첸인-기기-임대" tabindex="-1"><a class="header-anchor" href="#단계2-온첸인-기기-임대" aria-hidden="true">#</a> 단계2:온첸인 기기 임대</h2><ul><li><p>개발자---거래---rentMachine ----rentMachine(machine_id, duration) 순차적 클릭</p></li><li><p>machine_id 임대할 기기id 입력，입력 칸 안에 0x 우선 삭제 필요합니다</p></li><li><p>duration임대 일수 입력</p></li><li><p>입력 완료 후 거래 제출 클릭, 30분안에 기기 사용 가능여부 확인. ( 30분내 임대 확인 불가이면, 지불한 dbc는 환불 됩니다 . 하지만 거래 수수료 10개 dbc는 환불 불가입니다 )</p></li><li><p>windows 가상기기 만들기:</p></li></ul><p>방식 요청 ：POST</p><p>URL 요청：http://&lt;dbc_client_ip&gt;:&lt;dbc_client_port&gt;/api/v1/tasks/start</p><p>body 요청 ：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 기기의node_id 요청</span>
    <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ssh_port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//원격등록시 인지한 포트(가상기기별 다른 값 설정)</span>
    <span class="token property">&quot;rdp_port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3389&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//가상기기 이미지명(가상기기 혹은 이미지 관리중심에 이미지명 보유 확보)</span>
    <span class="token property">&quot;image_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;windows_1909.qcow2&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 데이터디스크 이름 입력(입력 안해도 됩니다, dbc입력안하면, 인지한 형식은data_1_&lt;task_id&gt;.qcow2의 이름 존재 , 입력하면, 파일 존재여부 검사,존재하면 데이터디스크는 파일의 예.qcow2형식 존재)</span>
    <span class="token property">&quot;data_file_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// gpu수량（ 0보다 크거나 같음）</span>
    <span class="token property">&quot;gpu_count&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// cpu수량（0보다 큰）</span>
    <span class="token property">&quot;cpu_cores&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 메모리 사이즈（0보다큰，단위：G）</span>
    <span class="token property">&quot;mem_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;32&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 디스크 사이즈（0보다 큰，단위：G）</span>
    <span class="token property">&quot;disk_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// vnc사용하여 가상기기 포트 넘버 연결 （가상기기 별 다른 값 설정）</span>
    <span class="token property">&quot;vnc_port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5907&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// windowns 시스템(필수)</span>
    <span class="token property">&quot;operation_system&quot;</span><span class="token operator">:</span> <span class="token string">&quot;win10&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;bios_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uefi&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vm_xml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vm_xml_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;임대자 배포한session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;임대자 배포한session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예 : <img src="`+r+'" alt="create_win" loading="lazy"></p><ul><li><p>설정에 따라 만드는 과정 시간 차이가 있습니다,대략 5분에서 15분사이에 완성 됩니다</p></li><li><p>가상기기 상세 정보 요청 통해 , 가상기기 등록방식 및 가상기기 현재 상태 확인할 수 있습니다 (상태값이&quot;creating&#39;일경우, 가상기기 현재 만드는 중으로 의미됩니다 )</p></li></ul><p>관련 작업 참고:</p>',10),y={href:"https://github.com/DeepBrainChain/DBC-DOC/blob/master/creat_macine/create_macine.md",target:"_blank",rel:"noopener noreferrer"},x=t('<h2 id="단계-3-가상기기-원격-연결" tabindex="-1"><a class="header-anchor" href="#단계-3-가상기기-원격-연결" aria-hidden="true">#</a> 단계 3:가상기기 원격 연결</h2><ul><li><p>가상기기 등록 방식 확인후,현지에서 원격연결 열기</p><figure><img src="'+u+'" alt="connect" tabindex="0" loading="lazy"><figcaption>connect</figcaption></figure></li></ul><h2 id="단계4-사용가능-확인-후-임대" tabindex="-1"><a class="header-anchor" href="#단계4-사용가능-확인-후-임대" aria-hidden="true">#</a> 단계4: 사용가능 확인 후 임대</h2><div class="hint-container warning"><p class="hint-container-title">경고</p><p>확인전 가상기기 정상 작동 여부 꼭 확인하세요 . 임대확인 완료 후 기기 임대완료 되며,DBC임대료는 환불 안됩니다</p></div><ul><li><p>개발자----거래----rentMachine----confirmRent(machine_id)순차적으로 진행하세요</p></li><li><p>기기 id 입력 및 거래 제출 하세요</p></li></ul><h2 id="단계-5-omniverse다운로드-audio2face설치" tabindex="-1"><a class="header-anchor" href="#단계-5-omniverse다운로드-audio2face설치" aria-hidden="true">#</a> 단계 5: omniverse다운로드 Audio2Face설치</h2>',6),C={href:"https://www.nvidia.cn/omniverse/#",target:"_blank",rel:"noopener noreferrer"},D=n("li",null,[n("p",null,"홈페이지 문서참고하여 설치 하십시오:EXCHANGE(거래소),Apps（응용）부분에서 Audio2Face찾음,이후 순차적으로 “Install”（설치）및“Launch”（작동）설치합니다。"),n("figure",null,[n("img",{src:d,alt:"install",tabindex:"0",loading:"lazy"}),n("figcaption",null,"install")])],-1),B=n("li",null,[n("p",null,"작동후 ,기본인지 아바타와 함께 제공되는 음성 및 템플릿 파라미터를 볼수있습니다 (템플릿 엔진을 로드하는데 몇분 정도 소유 됩니다 )")],-1),z=n("p",null,"더많은 관련 작업 참고:",-1),I={href:"https://docs.omniverse.nvidia.com/app_audio2face/app_audio2face/overview.html",target:"_blank",rel:"noopener noreferrer"},N=n("figure",null,[n("img",{src:m,alt:"face_info",tabindex:"0",loading:"lazy"}),n("figcaption",null,"face_info")],-1),V=n("p",null,"단계 6: 기기 추가 임대",-1),A=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"경고"),n("p",null,"기기 만료되면 가상기기는 자동으로 중지됩니다,만료되기 전에 추가 임대가 하십시오")],-1),M=n("ul",null,[n("li",null,[n("p",null,"개발자----거래----rentMachine----reletMachine(machine_id, add_duration) 순차적 클릭")]),n("li",null,[n("p",null,"기기id 및 추가 임대 일수 입력, 거래 제출합니다")])],-1);function E(L,O){const a=l("ExternalLinkIcon");return i(),p("div",null,[h,v,k,b,n("p",null,[n("a",q,[s("https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io#/explorer"),e(a)])]),g,n("p",null,[n("a",f,[s("https://galaxyrace.deepbrainchain.org/table"),e(a)])]),w,n("p",null,[n("a",y,[s("https://github.com/DeepBrainChain/DBC-DOC/blob/master/creat_macine/create_macine.md"),e(a)])]),x,n("ul",null,[n("li",null,[n("p",null,[s("NVIDIA홈페이지 열어 NVIDIA omniverse다운 받습니다 ："),n("a",C,[s("https://www.nvidia.cn/omniverse/#"),e(a)])])]),D,B]),z,n("p",null,[n("a",I,[s("https://docs.omniverse.nvidia.com/app_audio2face/app_audio2face/overview.html"),e(a)])]),N,V,A,M])}const F=o(_,[["render",E],["__file","create-win-machine-omniverse.html.vue"]]);export{F as default};