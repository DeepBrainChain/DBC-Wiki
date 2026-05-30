import{_ as s,W as a,X as e,a0 as i}from"./framework-da9a5fc7.js";const c={};function l(t,n){return a(),e("div",null,[...n[0]||(n[0]=[i(`<h1 id="dbc-chain-验证节点升级教程" tabindex="-1"><a class="header-anchor" href="#dbc-chain-验证节点升级教程" aria-hidden="true">#</a> DBC-Chain 验证节点升级教程</h1><blockquote><p>请注意：为了维持出块的稳定性以及防止因为升级过程中导致因节点离线过多触发惩罚机制，在此建议升级节点前请先停止参与超级节点竞选，当升级完成后再继续参与竞选 请注意：系统最好使用Ubuntu22.04及以上版本</p></blockquote><h2 id="_1-获取新的dbc-chain-二进制" tabindex="-1"><a class="header-anchor" href="#_1-获取新的dbc-chain-二进制" aria-hidden="true">#</a> 1. 获取新的dbc-chain 二进制</h2><h3 id="方式-1-使用预编译版本" tabindex="-1"><a class="header-anchor" href="#方式-1-使用预编译版本" aria-hidden="true">#</a> 方式 1: 使用预编译版本</h3><blockquote><p>如果不能正常运行，请使用方式 2 自行编译：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> dbc-chain-mainnet <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> dbc-chain-mainnet
<span class="token function">wget</span> https://github.com/DeepBrainChain/DeepBrainChain-MainChain/releases/download/v3.2/dbc-chain-v3.tar.gz <span class="token parameter variable">-O</span> dbc_chain_linux_x64.tar.gz

<span class="token function">tar</span> xf dbc_chain_linux_x64.tar.gz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方式2-从源码进行编译" tabindex="-1"><a class="header-anchor" href="#方式2-从源码进行编译" aria-hidden="true">#</a> 方式2: 从源码进行编译</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
<span class="token function">curl</span> https://getsubstrate.io <span class="token parameter variable">-sSf</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> -- <span class="token parameter variable">--fast</span>
<span class="token builtin class-name">source</span> ~/.cargo/env

<span class="token comment"># 编译dbc-chain</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DeepBrainChain-MainChain.git
<span class="token builtin class-name">cd</span> DeepBrainChain-MainChain <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> checkout v3.2-dev
<span class="token function">cargo</span> build <span class="token parameter variable">--release</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-重新运行验证节点" tabindex="-1"><a class="header-anchor" href="#_2-重新运行验证节点" aria-hidden="true">#</a> 2.重新运行验证节点</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查询并停止旧版本的同步节点</span>
<span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> dbc-chain

<span class="token comment">#结果一般如下显示</span>
root      <span class="token number">761495</span>  <span class="token number">0.0</span>  <span class="token number">0.0</span>   <span class="token number">9584</span>  <span class="token number">2588</span> pts/0    S+   <span class="token number">17</span>:07   <span class="token number">0</span>:00 <span class="token function">grep</span> <span class="token parameter variable">--color</span><span class="token operator">=</span>auto <span class="token parameter variable">-w</span> dbc-chain
root      <span class="token number">926101</span>  <span class="token number">2.0</span>  <span class="token number">5.1</span> <span class="token number">4295592</span> <span class="token number">1650640</span> ?     Sl    <span class="token number">2023</span> <span class="token number">5320</span>:10 ./dbc-chain --base-path ./db_data <span class="token parameter variable">--port</span> <span class="token number">30337</span> --ws-port <span class="token number">9948</span> --rpc-port <span class="token number">9937</span> <span class="token parameter variable">--pruning</span> archive

<span class="token comment"># 停止旧节点</span>
<span class="token function">sudo</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token number">926101</span> <span class="token punctuation">(</span>注意替换为实际查询到的PID<span class="token punctuation">)</span>

<span class="token comment">#启动新版本节点</span>
<span class="token function">nohup</span> ./dbc-chain --base-path ./db_data <span class="token parameter variable">--chain</span> dbcSpecRaw.json <span class="token parameter variable">--validator</span> <span class="token parameter variable">--name</span> YourNodeName <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>dbc_node.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

<span class="token comment">#如果遇到启动报错</span>
./dbc-chain: /lib/x86_64-linux-gnu/libstdc++.so.6: version <span class="token variable"><span class="token variable">\`</span>GLIBCXX_3.4.30&#39; not found <span class="token punctuation">(</span>required by ./dbc-chain<span class="token punctuation">)</span>
./dbc-chain: /lib/x86_64-linux-gnu/libstdc++.so.6: version <span class="token variable">\`</span></span>GLIBCXX_3.4.29<span class="token string">&#39; not found (required by ./dbc-chain)
./dbc-chain: /lib/x86_64-linux-gnu/libc.so.6: version \`GLIBC_2.32&#39;</span> not found <span class="token punctuation">(</span>required by ./dbc-chain<span class="token punctuation">)</span>
./dbc-chain: /lib/x86_64-linux-gnu/libc.so.6: version <span class="token variable"><span class="token variable">\`</span>GLIBC_2.34&#39; not found <span class="token punctuation">(</span>required by ./dbc-chain<span class="token punctuation">)</span>
./dbc-chain: /lib/x86_64-linux-gnu/libc.so.6: version <span class="token variable">\`</span></span>GLIBC_2.33&#39; not found <span class="token punctuation">(</span>required by ./dbc-chain<span class="token punctuation">)</span>

<span class="token comment">#解决方案：</span>
<span class="token comment">#1.中国地区的用户：</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb http://mirrors.aliyun.com/ubuntu/ jammy main&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/apt/sources.list
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> libc6 libstdc++6 <span class="token parameter variable">-y</span>
<span class="token comment">#2. 非中国地区用户</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb http://archive.ubuntu.com/ubuntu/ jammy main&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/apt/sources.list
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> libc6 libstdc++6 <span class="token parameter variable">-y</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-验证节点运行是否正常" tabindex="-1"><a class="header-anchor" href="#_3-验证节点运行是否正常" aria-hidden="true">#</a> 3.验证节点运行是否正常</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#正常运行的节点log日志查询如下：</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> dbc_node.log

<span class="token comment">#日志滚动输出，正常出块即可</span>
<span class="token number">2024</span>-01-16 02:36:30 ✨ Imported <span class="token comment">#2747461 (0x653a…4bd3)</span>
<span class="token number">2024</span>-01-16 02:36:31 💤 Idle <span class="token punctuation">(</span><span class="token number">20</span> peers<span class="token punctuation">)</span>, best: <span class="token comment">#2747461 (0x653a…4bd3), finalized #2747458 (0x06e1…2301), ⬇ 6.6kiB/s ⬆ 3.6kiB/s</span>
<span class="token number">2024</span>-01-16 02:36:36 💤 Idle <span class="token punctuation">(</span><span class="token number">20</span> peers<span class="token punctuation">)</span>, best: <span class="token comment">#2747461 (0x653a…4bd3), finalized #2747459 (0x91e2…44c5), ⬇ 20.7kiB/s ⬆ 11.9kiB/s</span>
<span class="token number">2024</span>-01-16 02:36:41 💤 Idle <span class="token punctuation">(</span><span class="token number">20</span> peers<span class="token punctuation">)</span>, best: <span class="token comment">#2747461 (0x653a…4bd3), finalized #2747459 (0x91e2…44c5), ⬇ 4.8kiB/s ⬆ 2.5kiB/s</span>
<span class="token number">2024</span>-01-16 02:36:46 💤 Idle <span class="token punctuation">(</span><span class="token number">20</span> peers<span class="token punctuation">)</span>, best: <span class="token comment">#2747461 (0x653a…4bd3), finalized #2747459 (0x91e2…44c5), ⬇ 4.9kiB/s ⬆ 5.3kiB/s</span>
<span class="token number">2024</span>-01-16 02:36:51 💤 Idle <span class="token punctuation">(</span><span class="token number">20</span> peers<span class="token punctuation">)</span>, best: <span class="token comment">#2747461 (0x653a…4bd3), finalized #2747459 (0x91e2…44c5), ⬇ 3.9kiB/s ⬆ 0.8kiB/s</span>
<span class="token number">2024</span>-01-16 02:36:56 💤 Idle <span class="token punctuation">(</span><span class="token number">20</span> peers<span class="token punctuation">)</span>, best: <span class="token comment">#2747461 (0x653a…4bd3), finalized #2747459 (0x91e2…44c5), ⬇ 4.2kiB/s ⬆ 6.5kiB/s</span>
<span class="token number">2024</span>-01-16 02:37:00 ✨ Imported <span class="token comment">#2747462 (0xab90…ecb0)</span>
<span class="token number">2024</span>-01-16 02:37:01 💤 Idle <span class="token punctuation">(</span><span class="token number">20</span> peers<span class="token punctuation">)</span>, best: <span class="token comment">#2747462 (0xab90…ecb0), finalized #2747459 (0x91e2…44c5), ⬇ 7.2kiB/s ⬆ 25.1kiB/s</span>
<span class="token number">2024</span>-01-16 02:37:06 💤 Idle <span class="token punctuation">(</span><span class="token number">20</span> peers<span class="token punctuation">)</span>, best: <span class="token comment">#2747462 (0xab90…ecb0), finalized #2747460 (0xcd3a…fb6d), ⬇ 27.2kiB/s ⬆ 21.6kiB/s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-使用脚本辅助自动重启" tabindex="-1"><a class="header-anchor" href="#_4-使用脚本辅助自动重启" aria-hidden="true">#</a> 4.使用脚本辅助自动重启</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> start.sh</span>
#!/usr/bin/env sh

panicCount=0
while true; do
    #注意！！！！以下启动命令内容根据自己的实际情况进行替换！！！！
    cd /data/dbc-chain &amp;&amp; nohup ./dbc-chain_V3.2_latest --base-path ./db_data --chain dbcSpecRaw_main.json --validator --name Heaven  1&gt;std.log 2&gt;&amp;1

    exit_status=<span class="token variable">$?</span>

    if [ <span class="token variable">$exit_status</span> -eq 0 ]; then
        break
    else
        echo &quot;Command exited with non-zero status. Restarting in 5 seconds...&quot;
        mv std.log std.log.<span class="token variable">$panicCount</span>
        panicCount=<span class="token variable"><span class="token variable">$((</span>panicCount<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span>
        sleep 5
    fi
done
EOF</span>


<span class="token comment">#添加执行权限</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> +x start.sh
<span class="token comment">#启动命令</span>
<span class="token function">nohup</span> ./start.sh <span class="token operator">&amp;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14)])])}const o=s(c,[["render",l],["__file","dbc-chain-upgrade.html.vue"]]);export{o as default};
