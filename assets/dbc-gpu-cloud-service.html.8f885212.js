import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as d,c,b as n,d as a,a as i,e as s}from"./app.38166bb6.js";var o="/DBC-Wiki/assets/detail.1ec8de8e.png",r="/DBC-Wiki/assets/paypal1.e109dbc6.png",p="/DBC-Wiki/assets/paypal2.f5a73350.png",u="/DBC-Wiki/assets/paypal3.26f2d400.png",v="/DBC-Wiki/assets/alipay1.c778aa4b.png",m="/DBC-Wiki/assets/alipay2.86d4a038.png",b="/DBC-Wiki/assets/alipay3.c55c9901.png",k="/DBC-Wiki/assets/signle.1da87640.png",h="/DBC-Wiki/assets/error1.333d855e.png";const _={},g=i('<h1 id="dbc-gpu-\u4E91\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#dbc-gpu-\u4E91\u670D\u52A1" aria-hidden="true">#</a> DBC GPU \u4E91\u670D\u52A1</h1><p><img src="'+o+`" alt=""></p><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00\uFF1A</h2><ul><li>\u4EE5\u4E0B\u5185\u5BB9\u4EC5\u4F5C\u6F14\u793A\u7528\u4F8B\uFF0C\u5177\u4F53\u5B9E\u65BD\u8BF7\u6839\u636E\u81EA\u8EAB\u60C5\u51B5\u5B89\u88C5\u9002\u5408\u7684\u8F6F\u4EF6\u7248\u672C\uFF0C\u5E76\u53CA\u65F6\u5173\u6CE8\u76F8\u5173\u4E2D\u95F4\u4EF6\u6F0F\u6D1E\u4FE1\u606F\u8FDB\u884C\u5347\u7EA7\u6216\u8005\u4FEE\u8865\uFF0C\u4EE5\u9632\u88AB\u6076\u610F\u653B\u51FB\u3002</li></ul><h2 id="\u4E00\u3001\u6570\u636E\u5E93\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u6570\u636E\u5E93\u90E8\u7F72" aria-hidden="true">#</a> \u4E00\u3001\u6570\u636E\u5E93\u90E8\u7F72</h2><h3 id="\u5B89\u88C5-\u8BBE\u7F6E\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-\u8BBE\u7F6E\u6570\u636E\u5E93" aria-hidden="true">#</a> \u5B89\u88C5&amp;\u8BBE\u7F6E\u6570\u636E\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1. \u4E0B\u8F7D\uFF1A</span>
<span class="token function">curl</span> -O <span class="token operator">&lt;</span>https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz<span class="token operator">&gt;</span>

<span class="token comment">#2. \u89E3\u538B:</span>
<span class="token function">tar</span> -zxvf mongodb-linux-x86_64-3.0.6.tgz

<span class="token comment">#3. \u5C06\u89E3\u538B\u5305\u62F7\u8D1D\u5230\u6307\u5B9A\u76EE\u5F55:</span>

<span class="token function">mkdir</span> /data
<span class="token function">mkdir</span> /data/mongodb
mongodb-linux-x86_64-3.0.6/ /data/mongodb

<span class="token comment">#4. \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF1A</span>

<span class="token function">sudo</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;export PATH=/data/mongodb/bin:<span class="token environment constant">$PATH</span>&quot;</span>  <span class="token operator">&gt;&gt;</span> /etc/profile
<span class="token builtin class-name">source</span> /etc/profile

<span class="token comment">#5. \u521B\u5EFA\u6570\u636E\u5E93\u76EE\u5F55\uFF1A</span>

<span class="token function">mkdir</span> -p /data/db  <span class="token function">mkdir</span> -p /data/db/master

<span class="token comment">#6. \u521B\u5EFA\uFF1A/etc/mongod.conf \u6DFB\u52A0\u6388\u6743\uFF08\u8FD9\u6837\u6570\u636E\u5E93\u9700\u8981\u5BC6\u7801\u624D\u80FD\u767B\u9646\uFF09</span>

storage:
  dbPath: /data/db/master
  journal:
	enabled: <span class="token boolean">true</span>

net:
  port: <span class="token number">27017</span>
  bindIp: <span class="token number">0.0</span>.0.0

security:
  authorization: enabled

<span class="token comment">#7. \u521B\u5EFAadmin\u548Cidentifier\u6570\u636E\u5E93\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u5BC6\u7801</span>

 <span class="token number">1</span><span class="token punctuation">)</span> mongod --dbpath /data/db/master,\u7136\u540E  mongo
 <span class="token number">2</span><span class="token punctuation">)</span> use admin
 <span class="token number">3</span><span class="token punctuation">)</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span> user: <span class="token string">&quot;admin&quot;</span>, pwd: <span class="token string">&quot;*****&quot;</span>, roles: <span class="token punctuation">[</span><span class="token punctuation">{</span> role: <span class="token string">&quot;root&quot;</span>, db: <span class="token string">&quot;admin&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>  \u8BBE\u7F6E\u7BA1\u7406\u5458\u8D26\u6237
 <span class="token number">4</span><span class="token punctuation">)</span> db.shutdownServer<span class="token punctuation">(</span><span class="token punctuation">)</span>  \u5173\u95EDmongo\u6570\u636E
 <span class="token number">5</span><span class="token punctuation">)</span> <span class="token function">screen</span> -S mongod  \u540E\u53F0\u8FD0\u884C\u547D\u4EE4
 <span class="token number">6</span><span class="token punctuation">)</span> mongod --config /etc/mongod.conf \uFF08\u9700\u8981\u63D0\u524D\u914D\u7F6E\u597Dmongod.conf\u6587\u4EF6\uFF09 \u6B64\u5904\u5982\u679C\u8981\u914D\u7F6E2\u4E2A\u4E0D\u540C\u670D\u52A1\u5668\u7684\u6570\u636E\u5E93\u81EA\u52A8\u5907\u4EFD\uFF0C
    \u5219\u7528\u547D\u4EE4\uFF1Amongod --master --slave --autoresync --config /etc/mongod.conf  --source ip:27017
 <span class="token number">7</span><span class="token punctuation">)</span> mongo,\u7136\u540Euse admin ,\u7136\u540E db.auth<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span>,<span class="token string">&#39;******&#39;</span><span class="token punctuation">)</span>\uFF0C
 <span class="token number">8</span><span class="token punctuation">)</span> use identifier  \u521B\u5EFAidentifier\u6570\u636E\u5E93,\u6B64\u5904\u6570\u636E\u5E93\u540D\u5B57nodejs\u670D\u52A1\u5668\u4EE3\u7801\u4E2D\u540D\u5B57\u9700\u8981\u4FDD\u6301\u4E00\u81F4
 <span class="token number">9</span><span class="token punctuation">)</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user: <span class="token string">&quot;dbc&quot;</span>, pwd: <span class="token string">&quot;*******&quot;</span>, roles: <span class="token punctuation">[</span> <span class="token punctuation">{</span> role: <span class="token string">&quot;dbOwner&quot;</span>, db: <span class="token string">&quot;identifier&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">#\u8BBE\u7F6E\u52A0\u4EF7\u89C4\u5219\uFF0Cpercentage_signle\u4E3A\u5355\u4E2A\u79DF\u7528\u865A\u62DF\u673A\u7684\u52A0\u4EF7\u5927\u5C0F\uFF0Cpercentage_whole\u4E3A\u79DF\u7528\u6574\u673A\u7684\u52A0\u4EF7\u5927\u5C0F\uFF0C\u53C2\u6570\u540E\u8DDF\u6570\u5B57\uFF0C1\u4E3A1%\uFF0C\u793A\u4F8B\u4E3A40%</span>
        db.DBCPercentage.insert<span class="token punctuation">(</span><span class="token punctuation">{</span> _id: <span class="token string">&#39;percentage&#39;</span>,percentage_signle: <span class="token number">40</span>, percentage_whole: <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token number">11</span><span class="token punctuation">)</span> db.DBCPercentage.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.toArray<span class="token punctuation">(</span><span class="token punctuation">)</span>    \u67E5\u770B\u8BBE\u7F6E\u662F\u5426\u751F\u6548
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001\u642D\u5EFA-dbc-\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u642D\u5EFA-dbc-\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u4E8C\u3001\u642D\u5EFA DBC \u5BA2\u6237\u7AEF</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u88C5DBC\u5BA2\u6237\u7AEF</span>
\u5B89\u88C5\u73AF\u5883

<span class="token function">apt-get</span> <span class="token function">install</span> libvirt-clients libvirt-daemon-system

<span class="token number">1</span>. \u4E0B\u8F7D\u5B89\u88C5\u811A\u672C\uFF1A <span class="token operator">&lt;</span>https://github.com/DeepBrainChain/DBC-AIComputingNet/releases/<span class="token operator">&gt;</span>

\u4E0B\u8F7D\u5176\u4E2D\u7684install_client.sh\u811A\u672C\u6587\u4EF6

<span class="token number">2</span>. \u7ED9install_client.sh\u811A\u672C\u6587\u4EF6\u6DFB\u52A0\u6267\u884C\u6743\u9650\uFF1A \u547D\u4EE4\u884C\u4E0B\u6267\u884C\uFF1Achmod +x install_client.sh

<span class="token number">3</span>. \u8FD0\u884C\u5B89\u88C5\u811A\u672C: \u547D\u4EE4\u884C\u4E0B\u6267\u884C\uFF1A./install_client.sh <span class="token punctuation">[</span>\u5B89\u88C5\u76EE\u5F55<span class="token punctuation">]</span>

\u5B89\u88C5\u8FC7\u7A0B\u4E2D\u4F1A\u8981\u6C42\u7528\u6237\u8F93\u51652\u4E2A\u7AEF\u53E3\u53F7\uFF1A\u6839\u636E\u60C5\u51B5\u586B\u5199\u5373\u53EF\uFF0C\u6BD4\u5982:net_listen_port<span class="token operator">=</span><span class="token number">5001</span>\uFF0Chttp_port<span class="token operator">=</span><span class="token number">5002</span>

<span class="token comment">#\u5347\u7EA7DBC\u5BA2\u6237\u7AEF</span>
<span class="token number">1</span>. \u4E0B\u8F7D\u5347\u7EA7\u811A\u672C\uFF1A <span class="token operator">&lt;</span>https://github.com/DeepBrainChain/DBC-AIComputingNet/releases/<span class="token operator">&gt;</span>

\u4E0B\u8F7D\u5176\u4E2D\u7684update_client.sh\u811A\u672C\u6587\u4EF6

<span class="token number">2</span>. \u7ED9update_client.sh\u811A\u672C\u6587\u4EF6\u6DFB\u52A0\u6267\u884C\u6743\u9650\uFF1A \u547D\u4EE4\u884C\u4E0B\u6267\u884C\uFF1Achmod +x update_client.sh

<span class="token number">3</span>. \u8FD0\u884C\u5347\u7EA7\u811A\u672C: \u547D\u4EE4\u884C\u4E0B\u6267\u884C\uFF1A./update_client.sh <span class="token punctuation">[</span>\u539F\u5BA2\u6237\u7AEF\u5B89\u88C5\u76EE\u5F55<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001\u90E8\u7F72-node-\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u90E8\u7F72-node-\u670D\u52A1\u5668" aria-hidden="true">#</a> \u4E09\u3001\u90E8\u7F72 Node \u670D\u52A1\u5668</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u514B\u9686\u4EE3\u7801</span>

<span class="token comment">#\u901A\u8FC7git\u514B\u9686\u94FE\u63A5\u5730\u5740 https://github.com/DeepBrainChain/DBC-NodeScript.git\u5C06\u4EE3\u7801\u514B\u9686\u5230\u672C\u5730\u6216\u670D\u52A1\u5668</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DBC-NodeScript.git

<span class="token comment">### \u90E8\u7F72\u4EE3\u7801</span>

<span class="token comment">#\u4EE3\u7801\u514B\u9686\u4EE5\u540E\uFF0C\u53EF\u4F7F\u7528 forever \u63D2\u4EF6\u521B\u5EFA\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u5C06node\u4EE3\u7801\u8FD0\u884C\u5728\u670D\u52A1\u5668\u540E\u53F0\uFF0C\u901A\u8FC7ip\u52A0\u542F\u52A8router.js\u7684\u542F\u52A8server\u670D\u52A1\u7AEF\u53E3\u53F7\uFF0C\u5373\u53EF\u8BBF\u95EE\u5BF9\u5E94\u7684\u63A5\u53E3\u3002</span>
\u670D\u52A1\u5668\u5B89\u88C5node\u793A\u4F8B\uFF1A<span class="token operator">&lt;</span>https://www.cnblogs.com/niuben/p/12938501.html<span class="token operator">&gt;</span>
forever\u90E8\u7F72\u793A\u4F8B\u8BF7\u53C2\u8003\uFF1A<span class="token operator">&lt;</span>https://blog.csdn.net/superjunjin/article/details/7325219<span class="token operator"><span class="token file-descriptor important">4</span>&gt;</span>
<span class="token punctuation">(</span>\u6CE8\u610F\uFF1A\u5B89\u88C5forever\u4EE5\u540E\u5982\u679C\u672A\u627E\u5230\uFF0C\u53EF\u901A\u8FC7 <span class="token function">npm</span> list -g --depth <span class="token number">0</span> \u67E5\u627Eforever\u6587\u4EF6\u5939\u5B89\u88C5\u76EE\u5F55\uFF0C\u8FDB\u5165forever/bin/\u76EE\u5F55\u4E0B\u5C06forever\u8F6F\u8FDE\u63A5\u5230/usr/bin/forever \u5168\u5C40\u4F7F\u7528<span class="token punctuation">)</span>
<span class="token comment">#\u68C0\u67E5node \u548C forever \u662F\u5426\u5B89\u88C5\u6210\u529F,\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4</span>
<span class="token function">node</span> -v // v16.13.0
forever --version // v4.0.1

<span class="token comment">#\u6267\u884C\u65E0\u8BEF\u540E\uFF0C\u8FDB\u5165DBC-NodeScript\u6587\u4EF6\u5939\u4E0B\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5728\u6587\u4EF6\u5939\u4E0B\u751F\u6210 node_modules \u6587\u4EF6\u5939</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment">#\u6267\u884C\u65E0\u8BEF\u540E\uFF0C\u5728DBC-NodeScript\u6587\u4EF6\u5939\u4E0B\uFF0C\u6253\u5F00publicResource.js\u6587\u4EF6\uFF0C\u4FEE\u6539\u76F8\u5173\u914D\u7F6E\u4FE1\u606F</span>
<span class="token builtin class-name">export</span> const wssChain
<span class="token builtin class-name">export</span> const baseUrl
<span class="token builtin class-name">export</span> const mongoUrlSeed
<span class="token builtin class-name">export</span> const walletInfo
<span class="token builtin class-name">export</span> const designatedWallet
<span class="token comment">#\u6CE8\u610F\uFF1AmongoUrlSeed \u53CA walletInfo \u4E3A\u52A0\u5BC6\u7684\u5B57\u7B26\u4E32\uFF0C\u9700\u8981\u63D0\u524D\u751F\u6210\uFF0C\u751F\u6210\u89C4\u5219\u53CA\u65B9\u6CD5\u9700\u8054\u7CFB\u76F8\u5173\u6280\u672F\u4EBA\u5458</span>

<span class="token comment">#\u8FDB\u5165 DBC-NodeScript\\HttpRequest \u6587\u4EF6\u5939\u4E0B\uFF0C\u6267\u884C</span>
forever start -o http-out.log -e http-err.log router.js //\u542F\u52A8nodejs\u7684server\u670D\u52A1

<span class="token comment">#\u6B64\u65F6\u5DF2\u7ECF\u5C06router.js\u6302\u8F7D\u5230\u540E\u53F0\u8FD0\u884C\uFF0Cserver\u670D\u52A1\u542F\u52A8\uFF0C\u6B64\u65F6\u5373\u53EF\u8BBF\u95EE\u63A5\u53E3</span>
nodeHost <span class="token operator">=</span> http://xxx.xxx.xxx.xxx:8090

<span class="token comment">#\u8FDB\u5165 DBC-NodeScript\\TimedTask \u6587\u4EF6\u5939\u4E0B\uFF0C\u8FD0\u884C\u6587\u4EF6\u5939\u4E0B\u7684js\u6587\u4EF6\uFF0C\u542F\u52A8\u7684\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u5373\u53EF\u5B9E\u65F6\u66F4\u65B0\u6570\u636E\u5E93\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A</span>
forever start -o ver-out.log -e ver-err.log VerificationMachine.js
<span class="token comment">#\u6CE8\u610F\uFF1ATimedTask\u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6\u5FC5\u987B\u5168\u90E8\u8FD0\u884C\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u6570\u636E\u5E93\u6570\u636E\u4E0E\u5B9E\u9645\u6570\u636E\u4E0D\u7B26</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0B\u90E8\u5206\u4E3A\u76EE\u5F55\u89E3\u91CA\uFF1A</p><h3 id="httprequest-\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#httprequest-\u76EE\u5F55" aria-hidden="true">#</a> HttpRequest \u76EE\u5F55</h3><ul><li><p>\u7528\u4E8E\u4E66\u5199\u4E0E\u524D\u7AEF\u4EA4\u4E92\u7684\u8BE6\u7EC6\u63A5\u53E3\u5185\u5BB9</p><ul><li><p><strong>api.js</strong></p><ul><li>\u5B9A\u4E49 express \u8DEF\u7531</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">/**
* \u5B9A\u4E49\u8DEF\u7531\uFF0C\u4FBF\u4E8E\u5206\u8FA8\u5BF9\u5E94\u6A21\u5757
* \u5BFC\u51FA\u8DEF\u7531\u6A21\u5757\uFF0C\u5728router.js\u6587\u4EF6\u4E2D\u5F15\u7528
*/</span>
export const Select = express.Router()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u521B\u5EFA\u8DEF\u7531\u5BF9\u5E94\u63A5\u53E3</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Select.get(&#39;/&#39;, (request, response ,next) =&gt; {
    ******
    \u8C03\u7528\u6570\u636E\u5E93\uFF0C\u5DF2\u7ECF\u6570\u636E\u7684\u5904\u7406\u4E0E\u8FD4\u56DE
    ******
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>router.js</strong></p><ul><li>\u5B9A\u4E49\u8BF7\u6C42\u4FE1\u606F</li><li>\u8BBE\u7F6E\u8BF7\u6C42\u5934</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
* \u5BFC\u5165api.js\u4E2D\u8DEF\u7531\u6A21\u5757
* \u8BBE\u7F6E\u8BF7\u6C42\u5934\uFF0C\u542F\u52A8server\u670D\u52A1
*/
// \u4F7F\u7528 router
serve.use(&#39;/api/select&#39;, Select)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u542F\u52A8 server \u670D\u52A1</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>serve.listen(8090, ()=&gt;{
    console.log(&#39;\u670D\u52A1\u5668\u542F\u52A8\u5B8C\u6BD5&#39;);
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="timedtask-\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#timedtask-\u76EE\u5F55" aria-hidden="true">#</a> TimedTask \u76EE\u5F55</h3><ul><li><strong>\u7528\u4E8E\u521B\u5EFA\u53EA\u4E0E\u6570\u636E\u5E93\u8FDB\u884C\u4EA4\u4E92\u7684 js \u6587\u4EF6\uFF0C\u5B9A\u65F6\u8BF7\u6C42\u6570\u636E\u5B58\u5165\u6570\u636E\u5E93\u4E2D\uFF0C\u4EE5\u4FBF\u6570\u636E\u53CA\u65F6\u66F4\u65B0</strong></li></ul><h3 id="testscript-\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#testscript-\u76EE\u5F55" aria-hidden="true">#</a> testScript \u76EE\u5F55</h3><ul><li><strong>\u7528\u4E8E\u521B\u5EFA node \u53EF\u6267\u884C\u811A\u672C\uFF0C\u4EC5\u4F9B\u6D4B\u8BD5\u4F7F\u7528</strong></li></ul><h3 id="publicresource-js" tabindex="-1"><a class="header-anchor" href="#publicresource-js" aria-hidden="true">#</a> publicResource.js</h3><ul><li><strong>\u7528\u4E8E\u516C\u7528\u57FA\u7840\u4FE1\u606F\u914D\u7F6E\uFF0C\u6CE8\u610F\u4FEE\u6539</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * wssChain \u8C03\u7528\u94FE\u540D\u79F0
 */
export const wssChain = {
  dbc: &#39;wss://info.dbcwallet.io&#39; // \u516C\u94FE\u6B63\u5F0F\u94FE\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u90E8\u7F72DBC\u94B1\u5305\u5BA2\u6237\u7AEF
}

/**
 * baseUrl c++ \u7AEF\u53E3
 */


export const baseUrl = &#39;&lt;http://ip:port&gt;&#39; // \u6B65\u9AA4\u4E09\u4E2D\u7684dbc\u5BA2\u6237\u7AEFip\u548C\u7AEF\u53E3\u53F7


/**
 * \u8FDE\u63A5mongo\u6570\u636E\u5E93
 */
export const mongoUrlSeed = &#39;ba22370884954c456be7fc10cbae7a652fbadfb64e4ab9aab4a8a944f1f8ea052abc8968bfdb05ac1dc0f0842872089e&#39; // \u670D\u52A1\u5668\u8BBF\u95EEmongo\u52A0\u5BC6\u5B57\u6BB5

/**
 * \u94B1\u5305\u6570\u636E
 */
export const walletInfo = &#39;16c2efe71e094d0b3dd7b319da9c6a636cc0c7740cb6e900a40220fc3b77ec8f22a99f79&#39; // \u670D\u52A1\u5668\u8BBF\u95EE\u94B1\u5305\u52A0\u5BC6\u5B57\u6BB5

/**
 * \u5B9A\u4E49\u79DF\u7528\u673A\u5668\u83B7\u53D6\u6536\u76CA\u5DEE\u989D\u7684\u94B1\u5305
 */
export const designatedWallet = &#39;5F7L9bc3q4XdhVstJjVB2o7S8RHz2YKsHUB6k3uQpErTmVWu&#39; // \u7528\u6237\u652F\u4ED8\u7684dbc\u6536\u76CA\u90E8\u5206\u4F1A\u8FDB\u5165\u6B64\u94B1\u5305\uFF0C\u9700\u66FF\u6362\u6210\u81EA\u5DF1\u7684\u94B1\u5305\u5730\u5740
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56DB\u3001\u90E8\u7F72-web-\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u90E8\u7F72-web-\u73AF\u5883" aria-hidden="true">#</a> \u56DB\u3001\u90E8\u7F72 web \u73AF\u5883</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u4E0B\u8F7D\u4EE3\u7801\u5230\u672C\u5730\u6216\u670D\u52A1\u5668(\u6CE8\u610F\uFF1Amaster\u5206\u652F\u4E0B\u7684\u4EE3\u7801\u53EF\u80FD\u4E3A\u6D4B\u8BD5\u7248\uFF0C\u90E8\u7F72\u65F6\u8BF7\u4EE5tags\u6700\u65B0\u7248\u672C\u4EE3\u7801\u4E3A\u51C6)</span>
<span class="token number">1</span>. \u514B\u9686\u4EE3\u7801
<span class="token comment">#\u901A\u8FC7git\u514B\u9686\u94FE\u63A5\u5730\u5740 https://github.com/DeepBrainChain/DBChainWebsite.git \u5C06\u4EE3\u7801\u514B\u9686\u5230\u672C\u5730\u6216\u670D\u52A1\u5668\uFF0C\u8FD0\u884C</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DBChainWebsite.git

<span class="token comment">#\u67E5\u8BE2\u6240\u6709tag</span>
<span class="token function">git</span> tag

<span class="token comment">#\u5207\u6362tag\u4EE3\u7801</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>tag-name<span class="token operator">&gt;</span>

<span class="token comment">#\u68C0\u67E5\u662F\u5426\u5B89\u88C5Node,\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u68C0\u67E5Node\u662F\u5426\u5168\u5C40\u5B89\u88C5</span>
<span class="token function">node</span> -v //v16.13.0

<span class="token comment">#\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u6253\u5F00DBChainWebsite\u6587\u4EF6\u5939\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u751F\u6210node_modules\u6587\u4EF6</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment">#\u6267\u884C\u6210\u529F\u540E\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u53EF\u4EE5\u672C\u5730\u542F\u52A8\u7F51\u9875\u8FD0\u884C\u4E91\u5E73\u53F0\uFF0C\u8FDB\u884C\u6D4B\u8BD5\u3002</span>
<span class="token function">npm</span> run serve

<span class="token number">2</span>. \u4FEE\u6539\u4E91\u5E73\u53F0logo\u56FE\u6848\u914D\u7F6E
<span class="token comment">#\u6253\u5F00\u6587\u4EF6\u5939 src--&gt; locales --&gt; CN.js &amp;&amp; EN.js &amp;&amp; RU.js, \u5C06website_name\u5B57\u6BB5\u8BBE\u7F6E\u4E3A\u81EA\u5DF1\u4E91\u5E73\u53F0\u7684\u540D\u79F0\uFF0C\u672C\u5730\u8FD0\u884C\u5373\u53EF\u67E5\u770B</span>
<span class="token comment">#\u4FEE\u6539website_name</span>

<span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
	\xB7\xB7\xB7
	website_name: <span class="token string">&#39;dbchain&#39;</span>, // dbchain, 1024lab, tycloud
	\xB7\xB7\xB7
<span class="token punctuation">}</span>

<span class="token number">3</span>. \u914D\u7F6E\u63A5\u53E3\u8BBF\u95EE\u57DF\u540D
<span class="token comment">#\u6253\u5F00\u6587\u4EF6\u5939 src--&gt; api --&gt; index.js,\u914D\u7F6E\u81EA\u5DF1\u914D\u7F6E\u7684\u670D\u52A1\u5668\u63A5\u53E3\uFF0C\u5373\u53EF\u4FEE\u6539\u81EA\u5DF1\u6240\u5C5E\u7684node\u63A5\u53E3\u8BBF\u95EE\u57DF\u540D</span>
<span class="token comment">#\u4FEE\u6539\u6587\u4EF6\uFF0C\u4F7F\u7528nodeHost</span>

const nodeHost <span class="token operator">=</span> <span class="token string">&#39;https://xxxxxx&#39;</span>   //nodejs \u670D\u52A1\u5668\u5730\u5740

<span class="token number">4</span>. \u4FEE\u6539\u8BBF\u95EE\u94FE\u5730\u5740
<span class="token comment">#\u6253\u5F00\u6587\u4EF6\u5939 src--&gt; utlis --&gt; dot --&gt; api.ts &amp;&amp; index.ts ,\u914D\u7F6E\u8BBF\u95EE\u94FE</span>
const <span class="token function">node</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    \xB7\xB7\xB7
    dbc: <span class="token string">&#39;wss://info.dbcwallet.io&#39;</span> // \u516C\u94FE\u6B63\u5F0F\u94FE
    \xB7\xB7\xB7
<span class="token punctuation">}</span>

<span class="token number">5</span>. \u751F\u6210dist\u6587\u4EF6\u90E8\u7F72\u670D\u52A1\u5668
<span class="token comment">#\u6253\u5F00DBChainWebsite\u6587\u4EF6\u5939\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u751F\u6210dist\u6587\u4EF6\u5939(DBChainWebsite\u6587\u4EF6\u5939\u4E0B)\uFF0C\u5C06dist\u6587\u4EF6\u5939\u653E\u5728\u6307\u5B9A\u7684\u670D\u52A1\u5668\u6587\u4EF6\uFF0C\u901A\u8FC7\u914D\u7F6Enginx\u6307\u5B9Adist\u6587\u4EF6\u4E2D\u7684index.html\u6587\u4EF6\uFF0C\u5373\u53EF\u8BBF\u95EE\u9875\u9762</span>
<span class="token function">npm</span> run build

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E94\u3001\u90E8\u7F72-nginx" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u90E8\u7F72-nginx" aria-hidden="true">#</a> \u4E94\u3001\u90E8\u7F72 Nginx</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5Nginx</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx -y

<span class="token comment"># \u914D\u7F6Enginx</span>
<span class="token function">mkdir</span> /etc/nginx/gpucloud //\u4E0A\u4F20ssl\u8BC1\u4E66\u5230\u6B64\u6587\u4EF6\u5939\u4E2D
<span class="token function">mkdir</span> /etc/nginx/gpucloud.conf
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/nginx/gpucloud.conf

<span class="token comment">#\u793A\u4F8B\u5982\u4E0B\uFF0C\u5B9E\u9645\u8BF7\u6309\u7167\u81EA\u8EAB\u73AF\u5883\u6539\u52A8\uFF0C\u4EC5\u4F5C\u53C2\u8003</span>

server<span class="token punctuation">{</span>

        listen <span class="token number">443</span><span class="token punctuation">;</span>
        server_name nodejs.xxxx.xxxx<span class="token punctuation">;</span>
        ssl on<span class="token punctuation">;</span>

        ssl_certificate   cert/gpucloud/example.crt<span class="token punctuation">;</span>
        ssl_certificate_key  cert/gpucloud/example.key<span class="token punctuation">;</span>
        ssl_session_timeout 5m<span class="token punctuation">;</span>
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span>
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
        ssl_prefer_server_ciphers on<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>

        proxy_pass http://ip:8090<span class="token punctuation">;</span> <span class="token comment">#nodejs server ip and port</span>
        proxy_set_header   Host             <span class="token variable">$host</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Real-IP        <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Forwarded-For  <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>


        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>


server <span class="token punctuation">{</span>
         listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name nodejs.xxxx.xxxx<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>

         proxy_pass http://ip:8090<span class="token punctuation">;</span> <span class="token comment">#nodejs server ip and port</span>
        proxy_set_header   Host             <span class="token variable">$host</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Real-IP        <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Forwarded-For  <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>

server<span class="token punctuation">{</span>

        listen <span class="token number">443</span><span class="token punctuation">;</span>
        server_name dbcnode.xxxx.xxxx<span class="token punctuation">;</span>
        ssl on<span class="token punctuation">;</span>

        ssl_certificate   cert/gpucloud/example.crt<span class="token punctuation">;</span>
        ssl_certificate_key  cert/gpucloud/example.key<span class="token punctuation">;</span>
        ssl_session_timeout 5m<span class="token punctuation">;</span>
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span>
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
        ssl_prefer_server_ciphers on<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>

        proxy_pass http://ip:5002<span class="token punctuation">;</span> <span class="token comment">#dbc client node ip and port</span>
        proxy_set_header   Host             <span class="token variable">$host</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Real-IP        <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Forwarded-For  <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>


        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>


server <span class="token punctuation">{</span>
         listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name dbcnode.xxxx.xxxx<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>

        proxy_pass http://ip:5002<span class="token punctuation">;</span> <span class="token comment">#dbc client node ip and port</span>
        proxy_set_header   Host             <span class="token variable">$host</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Real-IP        <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Forwarded-For  <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>


server <span class="token punctuation">{</span>
         listen <span class="token number">443</span><span class="token punctuation">;</span>
        server_name www.xxxx.xxx<span class="token punctuation">;</span> <span class="token comment">#gpu cloud website url</span>
        ssl on<span class="token punctuation">;</span>

        ssl_certificate   cert/gpucloud/example.crt<span class="token punctuation">;</span>
        ssl_certificate_key  cert/gpucloud/example.key<span class="token punctuation">;</span>
        ssl_session_timeout 5m<span class="token punctuation">;</span>
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span>
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
        ssl_prefer_server_ciphers on<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>

            root /data/dbc-website<span class="token punctuation">;</span>
            try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
           index index.html index.htm<span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
         listen <span class="token number">443</span><span class="token punctuation">;</span>
        server_name xxxx.xxx<span class="token punctuation">;</span> <span class="token comment">#gpu cloud website url ,no include www</span>
        ssl on<span class="token punctuation">;</span>

        ssl_certificate   cert/gpucloud/example.crt<span class="token punctuation">;</span>
        ssl_certificate_key  cert/gpucloud/example.key<span class="token punctuation">;</span>
        ssl_session_timeout 5m<span class="token punctuation">;</span>
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span>
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
        ssl_prefer_server_ciphers on<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>

            root /data/dbc-website<span class="token punctuation">;</span>
            try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
            index index.html index.htm<span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>


server <span class="token punctuation">{</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name xxxx.xxx<span class="token punctuation">;</span>
        <span class="token builtin class-name">return</span> <span class="token number">301</span> http://www.xxxx.xxx<span class="token variable">$request_uri</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


server <span class="token punctuation">{</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name www.xxxx.xxx<span class="token punctuation">;</span>
        rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ https://<span class="token variable">\${server_name}</span><span class="token variable">$1</span> permanent<span class="token punctuation">;</span>

       <span class="token punctuation">}</span>




<span class="token comment"># \u68C0\u6D4BNginx\u914D\u7F6E\u662F\u5426\u6B63\u786E</span>
<span class="token function">sudo</span> nginx -t

<span class="token comment"># \u542F\u52A8\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u8D77</span>
<span class="token function">sudo</span> nginx -s reload
<span class="token function">sudo</span> systemctl start nginx
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u516D\u3001paypal-\u76F8\u5173\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001paypal-\u76F8\u5173\u6587\u6863" aria-hidden="true">#</a> \u516D\u3001Paypal \u76F8\u5173\u6587\u6863</h2><h3 id="_1-\u6CE8\u518C-paypal-\u8D26\u6237" tabindex="-1"><a class="header-anchor" href="#_1-\u6CE8\u518C-paypal-\u8D26\u6237" aria-hidden="true">#</a> 1.\u6CE8\u518C Paypal \u8D26\u6237</h3>`,27),x=s("\u6CE8\u518C Paypal \u8D26\u6237(\u4E2A\u4EBA\u516C\u53F8\u4E0D\u9650) "),f={href:"https://www.paypal.com/c2/home",target:"_blank",rel:"noopener noreferrer"},y=s("https://www.paypal.com/c2/home"),q=s("\u767B\u5F55 paypal \u5F00\u53D1\u8005\u7F51\u7AD9 "),C={href:"https://developer.paypal.com/developer/applications/",target:"_blank",rel:"noopener noreferrer"},w=s("https://developer.paypal.com/developer/applications/"),D=i('<h3 id="_2-\u83B7\u53D6-client-id-secret" tabindex="-1"><a class="header-anchor" href="#_2-\u83B7\u53D6-client-id-secret" aria-hidden="true">#</a> 2.\u83B7\u53D6 Client ID &amp; Secret</h3><ul><li>\u8FDB\u53BB\u5F00\u53D1\u8005\u9875\u9762\uFF0C\u5982\u4E0B\u56FE\uFF0C\u9009\u62E9 Live \u9009\u9879\uFF0C\u70B9\u51FB Create App \u6309\u94AE\uFF0C\u521B\u5EFA\u5E94\u7528\u7A0B\u5E8F\u6765\u63A5\u6536\u7528\u4E8E\u6D4B\u8BD5\u548C\u5B9E\u65F6\u4EA4\u6613\u7684 REST API \u51ED\u8BC1\u3002 <img src="'+r+'" alt=""></li><li>\u6839\u636E\u9875\u9762\u63D0\u793A\u521B\u5EFA App\uFF0C\u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u5373\u751F\u6210\u81EA\u5DF1\u7684 App\uFF0C\u5982\u4E0B\u56FE\uFF0C\u53EF\u67E5\u770B\u81EA\u5DF1\u7684 Client ID &amp; Secret <img src="'+p+`" alt=""></li></ul><h3 id="_3-\u4FEE\u6539\u4E91\u5E73\u53F0\u4E2D\u76F8\u5173\u7684-paypal-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_3-\u4FEE\u6539\u4E91\u5E73\u53F0\u4E2D\u76F8\u5173\u7684-paypal-\u53C2\u6570" aria-hidden="true">#</a> 3. \u4FEE\u6539\u4E91\u5E73\u53F0\u4E2D\u76F8\u5173\u7684 Paypal \u53C2\u6570</h3><p>\u6253\u5F00\u6587\u4EF6\u5939 src--&gt; views --&gt; trade_io --&gt; buy_3.vue, \u4FEE\u6539\u5176\u4E2D\u7684\u5B57\u6BB5\uFF0C\u5176\u4E2D sandbox \u4E3A\u6C99\u76D2\u6D4B\u8BD5\u7248\uFF0Cproduction \u4E3A\u6B63\u5F0F\u4E0A\u7EBF\u7248</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4FEE\u6539credentials \uFF0C boxEnv

// \u586B\u5165\u6B65\u9AA42\u4E2D\u6240\u83B7\u53D6\u7684Client ID
credentials: {
    sandbox: &#39;&lt;sandbox client id&gt;&#39;, // \u6C99\u76D2\u6D4B\u8BD5\u7248\uFF0C \u4E0A\u6B63\u5F0F\u73AF\u5883\uFF0C\u53EF\u4E0D\u586B\u6B64\u9009\u9879
    production: &#39;&lt;production client id&gt;&#39;  // \u6B63\u5F0F\u7248 \u4E0A\u6B63\u5F0F\u73AF\u5883\uFF0C\u5FC5\u586B\u9879
},
boxEnv: &#39;sandbox&#39;, // \u6C99\u76D2\u6D4B\u8BD5\u7248: sandbox, \u6B63\u5F0F\u7248: production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt=""></p><h3 id="_4-\u4FEE\u6539-node-\u670D\u52A1\u5668\u7AEF\u76F8\u5173\u7684-paypal-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_4-\u4FEE\u6539-node-\u670D\u52A1\u5668\u7AEF\u76F8\u5173\u7684-paypal-\u53C2\u6570" aria-hidden="true">#</a> 4. \u4FEE\u6539 node \u670D\u52A1\u5668\u7AEF\u76F8\u5173\u7684 Paypal \u53C2\u6570</h3><p>\u6253\u5F00\u6587\u4EF6\u5939 DBC-NodeScript--&gt; publicResource.js</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4FEE\u6539paypalUrl
/**
 * paypal\u8BBF\u95EE\u57DF\u540D
 */
 export const paypalUrl = &#39;https://api-m.sandbox.paypal.com&#39; // \u6C99\u76D2\u6D4B\u8BD5
// export const paypalUrl = &#39;https://api-m.paypal.com&#39; // \u6B63\u5F0F\u7248\u672C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u6570\u636E\u5E93\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_5-\u6570\u636E\u5E93\u914D\u7F6E" aria-hidden="true">#</a> 5. \u6570\u636E\u5E93\u914D\u7F6E</h3><ul><li>\u8BBE\u7F6E contractwallet \u96C6\u5408\uFF08\u5B58\u50A8\u7528\u4E8E\u8F6C\u8D26\u7684\u5408\u7EA6\u94B1\u5305\u5730\u5740\u53CA\u79C1\u94A5\uFF09</li><li>\u8BBE\u7F6E paypalInfo \u96C6\u5408\uFF08\u5B58\u50A8 paypal \u67E5\u8BE2\u6240\u9700\u8981\u7684 CLIENT_ID \u4EE5\u53CA SECRET\uFF09</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// contractwallet\u96C6\u5408
db.contractwallet.insert({
    _id:&#39;contractwallet&#39;, // \u4E0D\u80FD\u4FEE\u6539\uFF0C\u56FA\u5B9A_id\u4E3A&#39;contractwallet&#39;
    &quot;wallet&quot;:&#39;your wallet&#39;, // \u8F6C\u8D26\u7528\u7684\u94B1\u5305\u5730\u5740
    &quot;seed&quot;:&#39;your seed&#39; // \u8F6C\u8D26\u7528\u7684\u94B1\u5305\u5730\u5740\u79C1\u94A5
})

// paypalInfo\u96C6\u5408
db.paypalInfo.insert({
    _id:&#39;paypal&#39;, // \u4E0D\u80FD\u4FEE\u6539\uFF0C\u56FA\u5B9A_id\u4E3A&#39;paypal&#39;
    &quot;Client_ID&quot;:&#39;your Client_ID&#39;, // \u81EA\u5DF1app\u5BF9\u5E94\u7684Client_ID
    &quot;Secret&quot;:&#39;your Secret&#39; // \u81EA\u5DF1app\u5BF9\u5E94\u7684Secret
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E03\u3001\u652F\u4ED8\u5B9D\u76F8\u5173\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u4E03\u3001\u652F\u4ED8\u5B9D\u76F8\u5173\u6587\u6863" aria-hidden="true">#</a> \u4E03\u3001\u652F\u4ED8\u5B9D\u76F8\u5173\u6587\u6863</h2><h3 id="_1-\u767B\u5F55\u652F\u4ED8\u5B9D\u5F00\u53D1\u8005\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#_1-\u767B\u5F55\u652F\u4ED8\u5B9D\u5F00\u53D1\u8005\u5E73\u53F0" aria-hidden="true">#</a> 1.\u767B\u5F55\u652F\u4ED8\u5B9D\u5F00\u53D1\u8005\u5E73\u53F0</h3>`,14),S=s("\u6253\u5F00\u652F\u4ED8\u5B9D\u5F00\u653E\u5E73\u53F0 - \u63A7\u5236\u53F0 "),j={href:"https://open.alipay.com/develop/manage",target:"_blank",rel:"noopener noreferrer"},B=s("https://open.alipay.com/develop/manage"),E=n("li",null,[s("\u9009\u62E9 \u7F51\u9875/\u79FB\u52A8\u5E94\u7528 \u680F\uFF0C\u70B9\u51FB \u521B\u5EFA\u7F51\u9875/\u79FB\u52A8\u5E94\u7528 \u6309\u94AE\uFF0C\u6839\u636E\u63D0\u793A\u5B8C\u6210\u5E94\u7528\u521B\u5EFA\u64CD\u4F5C "),n("img",{src:v,alt:""})],-1),H=n("h3",{id:"_2-\u83B7\u53D6\u652F\u4ED8\u6240\u9700\u6570\u636E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-\u83B7\u53D6\u652F\u4ED8\u6240\u9700\u6570\u636E","aria-hidden":"true"},"#"),s(" 2.\u83B7\u53D6\u652F\u4ED8\u6240\u9700\u6570\u636E")],-1),A=s("\u901A\u8FC7\u5B98\u65B9\u793A\u4F8B\u6587\u6863\uFF0C\u83B7\u53D6\u6240\u9700\u63A5\u5165\u6570\u636E "),L={href:"https://ideservice.alipay.com/devflow/intelliAssist/page/SC00002446?projectId=670000105#lastFinish",target:"_blank",rel:"noopener noreferrer"},N=s("https://ideservice.alipay.com/devflow/intelliAssist/page/SC00002446?projectId=670000105#lastFinish"),I=n("img",{src:m,alt:""},null,-1),T=i('<h3 id="_3-\u68C0\u6D4B\u73AF\u5883\u662F\u5426\u51C6\u5907\u5145\u5206" tabindex="-1"><a class="header-anchor" href="#_3-\u68C0\u6D4B\u73AF\u5883\u662F\u5426\u51C6\u5907\u5145\u5206" aria-hidden="true">#</a> 3. \u68C0\u6D4B\u73AF\u5883\u662F\u5426\u51C6\u5907\u5145\u5206</h3><ul><li>\u7B2C 2 \u6B65\u521B\u5EFA\u5B8C\u6210\u540E\uFF0C\u901A\u8FC7\u4E0B\u56FE\u6B65\u9AA4\u4E09-\u8D26\u6237\u53CA\u5E94\u7528\u51C6\u5907 \u4E2D\u53EF\u4EE5\u68C0\u6D4B\u5E94\u7528\u662F\u5426\u5177\u6709\u6B63\u5F0F\u4F7F\u7528\u7684\u80FD\u529B <img src="'+b+`" alt=""></li></ul><h3 id="_4-\u4FEE\u6539\u5BF9\u5E94\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u4FEE\u6539\u5BF9\u5E94\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 4.\u4FEE\u6539\u5BF9\u5E94\u914D\u7F6E\u6587\u4EF6</h3><ul><li>\u6253\u5F00\u6587\u4EF6\u5939 src--&gt; locales --&gt; CN.js &amp;&amp; EN.js &amp;&amp; ES.js &amp;&amp; FR.js, \u5C06 showAliPay \u5B57\u6BB5\u8BBE\u7F6E\u4E3A 0 \u6216 1</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u4FEE\u6539showAliPay
export default {
	\xB7\xB7\xB7
	showAliPay: &#39;0&#39;, // \u662F\u5426\u663E\u793A\u652F\u4ED8\u5B9D\u652F\u4ED8 1 \u663E\u793A 0 \u4E0D\u663E\u793A
	\xB7\xB7\xB7
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u4FEE\u6539-node-\u670D\u52A1\u5668\u7AEF\u76F8\u5173\u7684-alipay-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_5-\u4FEE\u6539-node-\u670D\u52A1\u5668\u7AEF\u76F8\u5173\u7684-alipay-\u53C2\u6570" aria-hidden="true">#</a> 5. \u4FEE\u6539 node \u670D\u52A1\u5668\u7AEF\u76F8\u5173\u7684 Alipay \u53C2\u6570</h3><ul><li>\u6253\u5F00\u6587\u4EF6\u5939 DBC-NodeScript--&gt; publicResource.js</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4FEE\u6539AlipaySdk\u914D\u7F6E

export const alipaySdk = new AlipaySdk.default({
  appId: &#39;your appId&#39;,
  signType: &#39;RSA2&#39;,
  gateway: &#39;https://openapi.alipay.com/gateway.do&#39;,
  alipayPublicKey: &#39;your alipayPublicKey&#39;,
  privateKey: &#39;your privateKey&#39;,
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u516B\u3001\u5355\u53F0\u865A\u62DF\u673A\u90E8\u7F72\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u516B\u3001\u5355\u53F0\u865A\u62DF\u673A\u90E8\u7F72\u914D\u7F6E" aria-hidden="true">#</a> \u516B\u3001\u5355\u53F0\u865A\u62DF\u673A\u90E8\u7F72\u914D\u7F6E</h2><h3 id="_1-\u5C06-node\u3001web-\u66F4\u65B0\u5230\u6700\u65B0\u7248\u672C-\u91CD\u65B0\u62C9\u53D6\u6700\u65B0\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_1-\u5C06-node\u3001web-\u66F4\u65B0\u5230\u6700\u65B0\u7248\u672C-\u91CD\u65B0\u62C9\u53D6\u6700\u65B0\u4EE3\u7801" aria-hidden="true">#</a> 1.\u5C06 node\u3001web \u66F4\u65B0\u5230\u6700\u65B0\u7248\u672C\uFF08\u91CD\u65B0\u62C9\u53D6\u6700\u65B0\u4EE3\u7801\uFF09</h3><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u91CD\u65B0\u62C9\u4E0B\u6765\u7684\u6587\u4EF6\u8981\u5728\u6587\u4EF6\u5939\u4E2D\u91CD\u65B0\u6267\u884C<code>npm install</code></p><p>\u5728 node \u6587\u4EF6\u5939\u4E0B\u7684<code>HttpRequest</code>\u4E2D\u53EA\u9700\u7528 forever \u542F\u52A8<code>router.js</code>,<code>TimedTask</code>\u4E0B\u7684\u6240\u6709 js \u6587\u4EF6\u90FD\u8981\u542F\u52A8</p></div><h3 id="_2-\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> 2.\u51C6\u5907\u5DE5\u4F5C\uFF1A</h3>`,12),R=s("\u5728\u94FE\u4E0A\u79DF\u7528\u4E00\u53F0\u6574\u673A\uFF08"),U={href:"https://deepbrainchain.github.io/DBC-Wiki/onchain-guide/rent-machine.html",target:"_blank",rel:"noopener noreferrer"},P=s("\u53C2\u8003\u94FE\u63A5"),W=s("\uFF09"),$=s("\u67E5\u8BE2 session_id \u4FE1\u606F\uFF08"),F={href:"https://deepbrainchain.github.io/DBC-Wiki/install-update-dbc-node/dbc-client-api/http-request-format.html",target:"_blank",rel:"noopener noreferrer"},M=s("\u53C2\u8003\u94FE\u63A5\u4E2D\u7684\u7B2C\u4E09\u79CD\u7C7B\u578B"),G=s("\uFF09"),X=s("\u521B\u5EFA\u7F51\u7EDC\uFF08"),V={href:"https://deepbrainchain.github.io/DBC-Wiki/install-update-dbc-node/dbc-client-api/http-api.html#%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%BB%84%E7%BD%91",target:"_blank",rel:"noopener noreferrer"},z=s("\u53C2\u8003\u94FE\u63A5"),K=s("\uFF09"),Q=n("li",null,"\u67E5\u770B rent_end \u5757\u9AD8(\u6CE8\u610F\u83B7\u53D6\u7684 rent_end \u4FDD\u5B58\u65F6\u8981\u53BB\u6389\u9017\u53F7:1021788)",-1),O=i('<p><img src="'+k+`" alt=""></p><h3 id="_3-\u5C06\u4EE5\u4E0A\u4FE1\u606F\u6DFB\u52A0\u5230\u6570\u636E\u5E93\u4E2D" tabindex="-1"><a class="header-anchor" href="#_3-\u5C06\u4EE5\u4E0A\u4FE1\u606F\u6DFB\u52A0\u5230\u6570\u636E\u5E93\u4E2D" aria-hidden="true">#</a> 3. \u5C06\u4EE5\u4E0A\u4FE1\u606F\u6DFB\u52A0\u5230\u6570\u636E\u5E93\u4E2D\uFF1A</h3><ul><li>\u8BBE\u7F6E virMachine \u96C6\u5408\uFF08\u5B58\u50A8\u7528\u4E8E\u79DF\u7528\u5355\u4E2A GPU \u7684\u673A\u5668\u4FE1\u606F\uFF09</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// virMachine\u96C6\u5408
db.virMachine.insert({
    &quot;_id&quot;: &quot;virtual_machine_list&quot;,
    &quot;machineList&quot;: [
        {
            &quot;machine_id&quot;: &quot;\u673A\u5668id&quot;,
            &quot;session_id&quot;: &quot;sessionid&quot;,
            &quot;session_id_sign&quot;: &quot;session\u4FE1\u606F&quot;,
            &quot;rent_end&quot;: &quot;\u5757\u9AD8&quot;,
            &quot;network_name&quot;: &quot;\u7F51\u7EDC\u540D\u79F0&quot;
        },
        {
            &quot;machine_id&quot;: &quot;\u673A\u5668id&quot;,
            &quot;session_id&quot;: &quot;sessionid&quot;,
            &quot;session_id_sign&quot;: &quot;session\u4FE1\u606F&quot;,
            &quot;rent_end&quot;: &quot;\u5757\u9AD8&quot;,
            &quot;network_name&quot;: &quot;\u7F51\u7EDC\u540D\u79F0&quot;
        }
    ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E5D\u3001\u95EE\u9898\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u4E5D\u3001\u95EE\u9898\u603B\u7ED3" aria-hidden="true">#</a> \u4E5D\u3001\u95EE\u9898\u603B\u7ED3</h2><h3 id="_1-start-log-\u62A5\u9519-map-is-null" tabindex="-1"><a class="header-anchor" href="#_1-start-log-\u62A5\u9519-map-is-null" aria-hidden="true">#</a> 1.start.log \u62A5\u9519\uFF1Amap is null</h3>`,6),J=s("\u7528\u670D\u52A1\u5668\u8BBF\u95EE\u5730\u5740\uFF1A"),Y={href:"http://api.map.baidu.com/reverse_geocoding/v3/?ak=jQc7i76SLm2k5j54z5y6ppjWjhb0nlhC&output=json&coordtype=wgs84ll&location=37.404704734328,127.10515530866",target:"_blank",rel:"noopener noreferrer"},Z=s("http://api.map.baidu.com/reverse_geocoding/v3/?ak=jQc7i76SLm2k5j54z5y6ppjWjhb0nlhC&output=json&coordtype=wgs84ll&location="),nn=s(" (location=\u7EAC\u5EA6\uFF0C\u7ECF\u5EA6)"),sn=n("li",null,"\u65E0\u6CD5\u8BBF\u95EE\u5730\u5740\uFF0C\u6267\u884C\uFF1A",-1),en=i(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> echo &quot;nameserver 8.8.4.4&quot; | sudo tee /etc/resolv.conf &gt; /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>ping 111.206.208.72</li><li>ping api.map.baidu.com</li><li>\u53EF\u4EE5 ping 111.206.208.72 \u4F46\u65E0\u6CD5 ping \u901A api.map.baidu.com \u65F6\uFF0C\u5728/etc/hosts \u914D\u7F6E\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>111.206.208.72  api.map.baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-dbc-\u5BA2\u6237\u7AEF\u65E0\u6CD5\u8FDE\u63A5\u5230\u4E3B\u7F51" tabindex="-1"><a class="header-anchor" href="#_2-dbc-\u5BA2\u6237\u7AEF\u65E0\u6CD5\u8FDE\u63A5\u5230\u4E3B\u7F51" aria-hidden="true">#</a> 2.dbc \u5BA2\u6237\u7AEF\u65E0\u6CD5\u8FDE\u63A5\u5230\u4E3B\u7F51</h3><ul><li>\u5728\u5B89\u88C5\u76EE\u5F55\u4E0B conf/peer.conf \u4E2D\u6DFB\u52A0\u8282\u70B9\uFF1Apeer=116.169.53.134:5002,\u91CD\u542F dbc</li><li>dbc \u65E5\u5FD7\u51FA\u73B0\u62A5\u9519\uFF1A\u68C0\u67E5\u7AEF\u53E3\u662F\u5426\u5F00\u542F\u6216\u88AB\u5360\u7528 <img src="`+h+'" alt=""></li></ul>',5);function an(ln,tn){const e=t("ExternalLinkIcon");return d(),c("div",null,[g,n("ul",null,[n("li",null,[x,n("a",f,[y,a(e)])]),n("li",null,[q,n("a",C,[w,a(e)])])]),D,n("ul",null,[n("li",null,[S,n("a",j,[B,a(e)])]),E]),H,n("ul",null,[n("li",null,[A,n("a",L,[N,a(e)]),I])]),T,n("ul",null,[n("li",null,[R,n("a",U,[P,a(e)]),W]),n("li",null,[$,n("a",F,[M,a(e)]),G]),n("li",null,[X,n("a",V,[z,a(e)]),K]),Q]),O,n("ul",null,[n("li",null,[J,n("a",Y,[Z,a(e)]),nn]),sn]),en])}var on=l(_,[["render",an],["__file","dbc-gpu-cloud-service.html.vue"]]);export{on as default};
