import{_ as n,W as s,X as a,a0 as e}from"./framework-5cecf6de.js";const i={},t=e(`<h1 id="dbc-chain-verification-node-upgrade" tabindex="-1"><a class="header-anchor" href="#dbc-chain-verification-node-upgrade" aria-hidden="true">#</a> DBC-Chain verification node upgrade</h1><blockquote><p>Note:In order to maintain the stability of block production and prevent the penalty mechanism from being triggered due to excessive node offline during the upgrade process, it is recommended that you stop participating in the super node election before upgrading the node, and then continue to participate in the election after the upgrade is completed.</p></blockquote><h2 id="_1-get-the-new-dbc-chain-binary" tabindex="-1"><a class="header-anchor" href="#_1-get-the-new-dbc-chain-binary" aria-hidden="true">#</a> 1. Get the new dbc-chain binary</h2><h3 id="method-1-use-precompiled-version" tabindex="-1"><a class="header-anchor" href="#method-1-use-precompiled-version" aria-hidden="true">#</a> Method 1: Use precompiled version</h3><blockquote><p>If it does not work properly, please use method 2 to compile it yourself:</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> dbc-chain-mainnet <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> dbc-chain-mainnet
<span class="token function">wget</span> https://github.com/DeepBrainChain/DeepBrainChain-MainChain/releases/download/v3.2/dbc-chain-v3.tar.gz <span class="token parameter variable">-O</span> dbc_chain_linux_x64.tar.gz

<span class="token function">tar</span> xf dbc_chain_linux_x64.tar.gz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="method-2-compile-from-source-code" tabindex="-1"><a class="header-anchor" href="#method-2-compile-from-source-code" aria-hidden="true">#</a> Method 2: Compile from source code</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Install dependencies</span>
<span class="token function">curl</span> https://getsubstrate.io <span class="token parameter variable">-sSf</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> -- <span class="token parameter variable">--fast</span>
<span class="token builtin class-name">source</span> ~/.cargo/env

<span class="token comment"># Compile dbc-chain</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DeepBrainChain-MainChain.git
<span class="token builtin class-name">cd</span> DeepBrainChain-MainChain <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> checkout v3.2-dev
<span class="token function">cargo</span> build <span class="token parameter variable">--release</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-rerun-the-verification-node" tabindex="-1"><a class="header-anchor" href="#_2-rerun-the-verification-node" aria-hidden="true">#</a> 2. Rerun the verification node</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Query and stop the old version of the synchronization node</span>
<span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> dbc-chain

<span class="token comment">#The results are generally displayed as follows</span>
root <span class="token number">761495</span> <span class="token number">0.0</span> <span class="token number">0.0</span> <span class="token number">9584</span> <span class="token number">2588</span> pts/0 S+ <span class="token number">17</span>:07 <span class="token number">0</span>:00 <span class="token function">grep</span> <span class="token parameter variable">--color</span><span class="token operator">=</span>auto <span class="token parameter variable">-w</span> dbc-chain
root <span class="token number">926101</span> <span class="token number">2.0</span> <span class="token number">5.1</span> <span class="token number">4295592</span> <span class="token number">1650640</span> ? Sl <span class="token number">2023</span> <span class="token number">5320</span>:10 ./dbc-chain --base-path ./db_data <span class="token parameter variable">--port</span> <span class="token number">30337</span> --ws-port <span class="token number">9948</span> --rpc-port <span class="token number">9937</span> <span class="token parameter variable">--pruning</span> archive

<span class="token comment"># Stop old node</span>
<span class="token function">sudo</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token number">926101</span> <span class="token punctuation">(</span>note to replace with the actual queried PID<span class="token punctuation">)</span>

<span class="token comment">#Start new version node</span>
<span class="token function">nohup</span> ./dbc-chain --base-path ./db_data <span class="token parameter variable">--chain</span> dbcSpecRaw.json <span class="token parameter variable">--validator</span> <span class="token parameter variable">--name</span> YourNodeName <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>dbc_node.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

<span class="token comment">#If you encounter a startup error</span>
./dbc-chain: /lib/x86_64-linux-gnu/libstdc++.so.6: version <span class="token variable"><span class="token variable">\`</span>GLIBCXX_3.4.30&#39; not found <span class="token punctuation">(</span>required by ./dbc-chain<span class="token punctuation">)</span>
./dbc-chain: /lib/x86_64-linux-gnu/libstdc++.so.6: version <span class="token variable">\`</span></span>GLIBCXX_3.4.29<span class="token string">&#39; not found (required by ./dbc-chain)
./dbc-chain: /lib/x86_64-linux-gnu/libc.so.6: version \`GLIBC_2.32&#39;</span> not found <span class="token punctuation">(</span>required by ./dbc-chain<span class="token punctuation">)</span>
./dbc-chain: /lib/x86_64-linux-gnu/libc.so.6: version <span class="token variable"><span class="token variable">\`</span>GLIBC_2.34&#39; not found <span class="token punctuation">(</span>required by ./dbc-chain<span class="token punctuation">)</span>
./dbc-chain: /lib/x86_64-linux-gnu/libc.so.6: version <span class="token variable">\`</span></span>GLIBC_2.33&#39; not found <span class="token punctuation">(</span>required by ./dbc-chain<span class="token punctuation">)</span>

<span class="token comment">#solution:</span>
<span class="token comment">#1. Users in China:</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb http://mirrors.aliyun.com/ubuntu/ jammy main&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/apt/sources.list
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> libc6 libstdc++6 <span class="token parameter variable">-y</span>
<span class="token comment">#2. Non-China users</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb http://archive.ubuntu.com/ubuntu/ jammy main&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/apt/sources.list
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> libc6 libstdc++6 <span class="token parameter variable">-y</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-verify-whether-the-node-is-running-normally" tabindex="-1"><a class="header-anchor" href="#_3-verify-whether-the-node-is-running-normally" aria-hidden="true">#</a> 3. Verify whether the node is running normally</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#Normal running node log query is as follows:</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> dbc_node.log

<span class="token comment">#Log rolling output, just generate blocks normally</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-use-script-to-assist-automatic-restart" tabindex="-1"><a class="header-anchor" href="#_4-use-script-to-assist-automatic-restart" aria-hidden="true">#</a> 4. Use script to assist automatic restart</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> start.sh</span>
#!/usr/bin/env sh

panicCount=0
while true; do
     #Notice! ! ! ! Replace the following startup command content according to your actual situation! ! ! !
     cd /data/dbc-chain &amp;&amp; nohup ./dbc-chain_V3.2_latest --base-path ./db_data --chain dbcSpecRaw_main.json --validator --name Heaven 1&gt;std.log 2&gt;&amp;1

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
<span class="token comment">#Add execution permissions</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> +x start.sh
<span class="token comment">#start command</span>
<span class="token function">nohup</span> ./start.sh <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[t];function l(o,p){return s(),a("div",null,c)}const d=n(i,[["render",l],["__file","dbc-chain-upgrade.html.vue"]]);export{d as default};
