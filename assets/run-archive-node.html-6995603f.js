import{_ as a,W as s,X as e,a0 as i}from"./framework-cd0f4961.js";const c={};function t(l,n){return s(),e("div",null,n[0]||(n[0]=[i(`<h1 id="如何运行同步节点" tabindex="-1"><a class="header-anchor" href="#如何运行同步节点" aria-hidden="true">#</a> 如何运行同步节点？</h1><blockquote><p>注意： 当前主网polkadot版本为3.0， 仍需使用原先2.0版本的同步，3.0最新程序目前还无法直接进行同步</p></blockquote><h2 id="_1-配置环境" tabindex="-1"><a class="header-anchor" href="#_1-配置环境" aria-hidden="true">#</a> 1. 配置环境</h2><h3 id="_1-1-使用预编译版本" tabindex="-1"><a class="header-anchor" href="#_1-1-使用预编译版本" aria-hidden="true">#</a> 1.1 使用预编译版本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/DeepBrainChain/DeepBrainChain-MainChain/releases/download/v2.6/dbc_chain_linux_x64.tar.gz <span class="token parameter variable">-O</span> dbc_chain_linux_x64.tar.gz
<span class="token function">tar</span> xf dbc_chain_linux_x64.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> dbc-chain-mainnet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-手动编译" tabindex="-1"><a class="header-anchor" href="#_1-2-手动编译" aria-hidden="true">#</a> 1.2 手动编译</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
<span class="token function">curl</span> https://getsubstrate.io <span class="token parameter variable">-sSf</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> -- <span class="token parameter variable">--fast</span>
<span class="token builtin class-name">source</span> ~/.cargo/env

<span class="token comment"># 编译dbc-chain</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DeepBrainChain-MainChain.git
<span class="token builtin class-name">cd</span> DeepBrainChain-MainChain
<span class="token function">git</span> checkout v2.6
<span class="token function">cargo</span> build <span class="token parameter variable">--release</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-运行同步节点" tabindex="-1"><a class="header-anchor" href="#_2-运行同步节点" aria-hidden="true">#</a> 2. 运行同步节点</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用预先编译执行</span>
./dbc-chain --base-path ./db_data <span class="token parameter variable">--pruning</span> archive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 手动编译执行：</span>
./target/release/dbc-chain --base-path ./db_data <span class="token parameter variable">--pruning</span> archive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>端口参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--rpc-port 9933 #  指定你的节点监听RPC的端口。 9933 是默认值，因此该参数也可忽略
--ws-port 9945 # 指定你的节点用于监听 WebSocket 的端口。 默认端口为 9944
--port 30333 # 指定你用于监听 p2p 流量的节点端口。 30333 是默认端口，若无需更改，可以忽略该 flag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他参数参考：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--ws-max-connections 2000
--in-peers 200
--out-peers 200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当遇到同步出现0 peers现象时，需要指定bootnodes进行同步，老用户可以通过查询以前的同步节点log日志找到，新用户可以尝试指定 <code> --bootnodes /ip4/122.99.183.53/tcp/3308/p2p/12D3KooWDx4pgzT2RAPF12QkmiBZy6BUsTtPt7JgiYxgFm6Z5Hc5</code></p></blockquote><h2 id="_3-同步完成后升级到3-0同步节点" tabindex="-1"><a class="header-anchor" href="#_3-同步完成后升级到3-0同步节点" aria-hidden="true">#</a> 3. 同步完成后升级到3.0同步节点</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在第2步生成的文件夹下执行</span>
<span class="token function">wget</span> https://github.com/DeepBrainChain/DeepBrainChain-MainChain/releases/download/v3.2/dbc-chain-v3.tar.gz <span class="token parameter variable">-O</span> dbc_chain_linux_x64.tar.gz

<span class="token function">tar</span> xf dbc_chain_linux_x64.tar.gz

<span class="token comment">#运行验证节点</span>
<span class="token comment"># 查询并停止旧版本的同步节点</span>
<span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> dbc-chain

<span class="token comment">#结果类似于如下显示</span>
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
<span class="token comment">#1.中国地区的设备：</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb http://mirrors.aliyun.com/ubuntu/ jammy main&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/apt/sources.list
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> libc6 libstdc++6 <span class="token parameter variable">-y</span>
<span class="token comment">#2. 非中国地区设备：</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb http://archive.ubuntu.com/ubuntu/ jammy main&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/apt/sources.list
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> libc6 libstdc++6 <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const r=a(c,[["render",t],["__file","run-archive-node.html.vue"]]);export{r as default};
