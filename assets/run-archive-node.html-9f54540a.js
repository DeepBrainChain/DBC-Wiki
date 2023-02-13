import{_ as a,W as e,X as n,a0 as s}from"./framework-5cecf6de.js";const i={},d=s(`<h1 id="如何运行同步节点" tabindex="-1"><a class="header-anchor" href="#如何运行同步节点" aria-hidden="true">#</a> 如何运行同步节点？</h1><h2 id="_1-配置环境" tabindex="-1"><a class="header-anchor" href="#_1-配置环境" aria-hidden="true">#</a> 1. 配置环境</h2><h3 id="_1-1-使用预编译版本" tabindex="-1"><a class="header-anchor" href="#_1-1-使用预编译版本" aria-hidden="true">#</a> 1.1 使用预编译版本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/DeepBrainChain/DeepBrainChain-MainChain/releases/download/v2.3/dbc_chain_linux_x64.tar.gz <span class="token parameter variable">-O</span> dbc_chain_linux_x64.tar.gz
<span class="token function">tar</span> xf dbc_chain_linux_x64.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> dbc-chain-mainnet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-手动编译" tabindex="-1"><a class="header-anchor" href="#_1-2-手动编译" aria-hidden="true">#</a> 1.2 手动编译</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
<span class="token function">curl</span> https://getsubstrate.io <span class="token parameter variable">-sSf</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> -- <span class="token parameter variable">--fast</span>
<span class="token builtin class-name">source</span> ~/.cargo/env

<span class="token comment"># 编译dbc-chain</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DeepBrainChain-MainChain.git
<span class="token builtin class-name">cd</span> DeepBrainChain-MainChain
<span class="token function">git</span> checkout v2.3
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,10),r=[d];function c(l,t){return e(),n("div",null,r)}const p=a(i,[["render",c],["__file","run-archive-node.html.vue"]]);export{p as default};
