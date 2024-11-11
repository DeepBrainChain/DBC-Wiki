import{_ as l,H as o,W as r,X as c,a0 as n,Y as i,Z as a,$ as s,a1 as u}from"./framework-cd0f4961.js";const p="/DBC-Wiki/assets/image-20210126021938613-ed5880e3.png",b="/DBC-Wiki/assets/image-20210121194808850-652c90b7.png",g="/DBC-Wiki/assets/image-20210323095232363-8bf4ed5d.png",m="/DBC-Wiki/assets/image-20210121195033167-2f9f22c6.png",h="/DBC-Wiki/assets/image-20210121195307711-9ce5490a.png",f="/DBC-Wiki/assets/image-20210121200709277-b82ea79b.png",v="/DBC-Wiki/assets/image-20210121234945030-f232b1a0.png",k="/DBC-Wiki/assets/image-20210121235144583-06df3d13.png",x="/DBC-Wiki/assets/image-20210121235217665-a5da9a91.png",_="/DBC-Wiki/assets/image-20210121235451552-5c7ff86d.png",y="/DBC-Wiki/assets/image-20210329095613442-b9531339.png",C={},B={href:"http://mirrors.aliyun.com/ubuntu/",target:"_blank",rel:"noopener noreferrer"},D={href:"http://archive.ubuntu.com/ubuntu/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io#/accounts",target:"_blank",rel:"noopener noreferrer"},w={href:"https://telemetry.polkadot.io/#list/0xd523fa2e0581f069b4f0c7b5944c21e9abc72305a08067868c91b898d1bf1dff",target:"_blank",rel:"noopener noreferrer"};function z(W,e){const d=o("RouterLink"),t=o("ExternalLinkIcon");return r(),c("div",null,[e[13]||(e[13]=n('<h1 id="成为-dbc-验证节点" tabindex="-1"><a class="header-anchor" href="#成为-dbc-验证节点" aria-hidden="true">#</a> 成为 DBC 验证节点</h1><h2 id="_0-机器配置" tabindex="-1"><a class="header-anchor" href="#_0-机器配置" aria-hidden="true">#</a> 0. 机器配置</h2><ul><li>内存：8G</li><li>CPU：2 核</li><li>硬盘：100G</li><li>系统： Ubuntu22.04</li></ul><h2 id="_1-生成资金账户-已有资金账户可以略过" tabindex="-1"><a class="header-anchor" href="#_1-生成资金账户-已有资金账户可以略过" aria-hidden="true">#</a> 1. 生成资金账户（已有资金账户可以略过）</h2>',4)),i("p",null,[e[1]||(e[1]=a("参考： ")),s(d,{to:"/staking-model/generate-new-account.html"},{default:u(()=>e[0]||(e[0]=[a("如何生成账户")])),_:1})]),e[14]||(e[14]=n(`<h2 id="_2-获取-dbc-chain-二进制" tabindex="-1"><a class="header-anchor" href="#_2-获取-dbc-chain-二进制" aria-hidden="true">#</a> 2. 获取 dbc-chain 二进制</h2><h3 id="方式-1-使用预编译版本" tabindex="-1"><a class="header-anchor" href="#方式-1-使用预编译版本" aria-hidden="true">#</a> 方式 1: 使用预编译版本</h3><blockquote><p>如果不能正常运行，请使用方式 2 自行编译：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> dbc-chain-mainnet <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> dbc-chain-mainnet
<span class="token function">wget</span> https://github.com/DeepBrainChain/DeepBrainChain-MainChain/releases/download/v3.3/dbc-daily-release.tar.gz <span class="token parameter variable">-O</span> dbc_chain_linux_x64.tar.gz

<span class="token function">tar</span> xf dbc_chain_linux_x64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方式-2-从源码进行编译" tabindex="-1"><a class="header-anchor" href="#方式-2-从源码进行编译" aria-hidden="true">#</a> 方式 2：从源码进行编译</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
<span class="token function">curl</span> https://getsubstrate.io <span class="token parameter variable">-sSf</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> -- <span class="token parameter variable">--fast</span>
<span class="token builtin class-name">source</span> ~/.cargo/env

<span class="token comment"># 编译dbc-chain</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DeepBrainChain-MainChain.git
<span class="token builtin class-name">cd</span> DeepBrainChain-MainChain <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> checkout v3.3
<span class="token function">cargo</span> build <span class="token parameter variable">--release</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-运行同步节点" tabindex="-1"><a class="header-anchor" href="#_3-运行同步节点" aria-hidden="true">#</a> 3. 运行同步节点</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./dbc-chain --base-path ./db_data <span class="token parameter variable">--pruning</span> archive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>如果你是从源码进行编译，可执行文件路径为：<code>./target/release/dbc-chain</code></p></li><li><p>同步完成后，<code>Control + C</code>关掉程序。你可以根据<code>target</code>与<code>best</code>的比较来判断是否同步已经完成。当 target 与 best 相差不大（如 100 以内）时，可以认为已经完成同步。</p></li></ul><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><strong>参数说明：</strong><ul><li><code>--base-path</code>：指定该区块链存储数据的目录。如果不指定，将使用默认路径。如果目录不存在，将会为你自动创建。如果该目录已经有了区块链数据，将会报错，这时应该选择不同的目录或清除该目录内容</li><li><code>--pruning=archive</code>：以归档的方式启动区块链</li><li><code>--bootnodes</code>：指定引导节点地址。（如果遇到0 peers的同步状态，可以尝试指定--bootnodes /ip4/122.99.183.53/tcp/3308/p2p/12D3KooWDx4pgzT2RAPF12QkmiBZy6BUsTtPt7JgiYxgFm6Z5Hc5 或者其他已知同步节点）</li></ul></li></ul><h2 id="_4-以验证人的方式运行节点" tabindex="-1"><a class="header-anchor" href="#_4-以验证人的方式运行节点" aria-hidden="true">#</a> 4. 以验证人的方式运行节点</h2><p>#启动节点 nohup ./dbc-chain --base-path ./db_data --chain dbcSpecRaw.json --validator --name YourNodeName 1&gt;dbc_node.log 2&gt;&amp;1 &amp;</p><p>#如果遇到启动报错 ./dbc-chain: /lib/x86_64-linux-gnu/libstdc++.so.6: version <code>GLIBCXX_3.4.30&#39; not found (required by ./dbc-chain) ./dbc-chain: /lib/x86_64-linux-gnu/libstdc++.so.6: version </code>GLIBCXX_3.4.29&#39; not found (required by ./dbc-chain) ./dbc-chain: /lib/x86_64-linux-gnu/libc.so.6: version <code>GLIBC_2.32&#39; not found (required by ./dbc-chain) ./dbc-chain: /lib/x86_64-linux-gnu/libc.so.6: version </code>GLIBC_2.34&#39; not found (required by ./dbc-chain) ./dbc-chain: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.33&#39; not found (required by ./dbc-chain)</p>',14)),i("p",null,[e[4]||(e[4]=a('#解决方案： #1.中国地区的设备： echo "deb ')),i("a",B,[e[2]||(e[2]=a("http://mirrors.aliyun.com/ubuntu/")),s(t)]),e[5]||(e[5]=a(' jammy main" >> /etc/apt/sources.list sudo apt update sudo apt install libc6 libstdc++6 -y #2. 非中国地区设备： echo "deb ')),i("a",D,[e[3]||(e[3]=a("http://archive.ubuntu.com/ubuntu/")),s(t)]),e[6]||(e[6]=a(' jammy main" >> /etc/apt/sources.list sudo apt update sudo apt install libc6 libstdc++6 -y'))]),e[15]||(e[15]=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
- 如果你是从源码进行编译，可执行文件路径为：\`./target/release/dbc-chain\`

- 注意，这里 **\`--name YourNodeName\` 是设置你的节点名称**，你可以为你的节点起一个独一无二容易辨认的名称，别人将能在网络上看到它。
  

## 5. 生成\`rotateKey\`

在运行验证人节点命令的机器上运行下面命令

\`\`\`bash
curl -H &quot;Content-Type: application/json&quot; -d &#39;{&quot;id&quot;:1, &quot;jsonrpc&quot;:&quot;2.0&quot;, &quot;method&quot;: &quot;author_rotateKeys&quot;, &quot;params&quot;:[]}&#39; http://localhost:9933
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-设置绑定-bond-金额" tabindex="-1"><a class="header-anchor" href="#_6-设置绑定-bond-金额" aria-hidden="true">#</a> 6. 设置绑定（bond）金额</h2>`,2)),i("ul",null,[i("li",null,[e[8]||(e[8]=a("打开")),i("a",q,[e[7]||(e[7]=a("https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io#/accounts")),s(t)]),e[9]||(e[9]=a(" 你将能看到你的余额："))])]),e[16]||(e[16]=n('<figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>导航到<code>网络</code> &gt;<code>质押</code> &gt; <code>账户操作</code> &gt; <code>存储账户</code>，</li></ul><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>设置 bond 的金额（确保除了 bond 的数额，您的账户中还有余额以用来发送交易）：</li></ul><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>说明：</strong></p><ul><li><p><code>Stash account</code>：你的资金账户，这里我们 bond 45 DBC，确保账户中余额至少有这么多</p></li><li><p><code>controller account</code>：这个账户也应该有少量的 DBC 来发送开始和停止验证人的交易</p></li><li><p><code>value bonded</code>：你想要 bond/stake 多少 DBC, 请注意，你不需要 bond 账户中所有的余额，另外你随后可以增加 bond 的数额。</p></li><li><p><code>payment destination</code>：验证人获得的奖励将会被发给这个账户。这个账户可以设置成任何账户。其中，</p></li><li><p><code>Stash account(increase the amount at stake)</code>: 收益发放到 stash 账户，并质押</p></li><li><p><code>Stash account(do not increase the amount at stake)</code>：收益发放到 stash 账户，不进行质押</p></li></ul><h2 id="_7-设置rotatekey" tabindex="-1"><a class="header-anchor" href="#_7-设置rotatekey" aria-hidden="true">#</a> 7. 设置<code>rotateKey</code></h2><ul><li>在执行了 bond 之后，您将能够在 Polkadot 上看到<code>Session Key</code>的按钮：</li></ul><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>点击它，并将步骤 5 生成的<code>rotateKeys</code>填入。</li></ul><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',12)),i("ul",null,[i("li",null,[e[11]||(e[11]=a("现在，你可以到 ")),i("a",w,[e[10]||(e[10]=a("Telemetry")),s(t)]),e[12]||(e[12]=a("看到你的节点了！"))])]),e[17]||(e[17]=n('<figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_8-设置参加验证人选举" tabindex="-1"><a class="header-anchor" href="#_8-设置参加验证人选举" aria-hidden="true">#</a> 8. 设置参加验证人选举</h2><ul><li>完成了上述步骤后，你将能看到<code>Validate</code>的按钮。点击<code>Validate</code> 按钮，</li></ul><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>这时你将需要设置验证人偏好：</li></ul><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>在 <code>reward commission percentage</code>栏目中，你将需要输入你作为验证人的收益偏好。然后点击右下角<code>Validate</code>，并发送交易。在<code>Waiting</code>界面，你将能看到你的账户正在等待下个<code>Era</code>，来参加选举成为验证人节点。</li></ul><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_9-领取节点奖励" tabindex="-1"><a class="header-anchor" href="#_9-领取节点奖励" aria-hidden="true">#</a> 9. 领取节点奖励</h2><p>在浏览器插件 polkadot 中登陆你的 stash 账户，在 <code>质押 &gt; 支付 &gt; 最大84 eras</code> 中，你将能看到所有待领取的奖励：</p><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击右侧的<code>支付所有</code>，发送交易即可。</p>',12))])}const N=l(C,[["render",z],["__file","join-dbc-network.html.vue"]]);export{N as default};
