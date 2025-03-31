import{_ as t,H as d,W as r,X as o,Y as l,a2 as p,Z as s,$ as a,a0 as i}from"./framework-27d45f00.js";const c="/DBC-Wiki/assets/detail-1ec8de8e.png",u="/DBC-Wiki/assets/paypal1-e109dbc6.png",v="/DBC-Wiki/assets/paypal2-f5a73350.png",m="/DBC-Wiki/assets/paypal3-26f2d400.png",b="/DBC-Wiki/assets/alipay1-c778aa4b.png",k="/DBC-Wiki/assets/alipay2-86d4a038.png",h="/DBC-Wiki/assets/alipay3-c55c9901.png",g="/DBC-Wiki/assets/signle-1da87640.png",x="/DBC-Wiki/assets/error1-333d855e.png",f={},_={href:"https://www.paypal.com/c2/home",target:"_blank",rel:"noopener noreferrer"},y={href:"https://developer.paypal.com/developer/applications/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://open.alipay.com/develop/manage",target:"_blank",rel:"noopener noreferrer"},w={href:"https://ideservice.alipay.com/devflow/intelliAssist/page/SC00002446?projectId=670000105#lastFinish",target:"_blank",rel:"noopener noreferrer"},D={href:"https://deepbrainchain.github.io/DBC-Wiki/onchain-guide/rent-machine.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://deepbrainchain.github.io/DBC-Wiki/install-update-dbc-node/dbc-client-api/http-request-format.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://deepbrainchain.github.io/DBC-Wiki/install-update-dbc-node/dbc-client-api/http-api.html#%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%BB%84%E7%BD%91",target:"_blank",rel:"noopener noreferrer"},B={href:"http://api.map.baidu.com/reverse_geocoding/v3/?ak=jQc7i76SLm2k5j54z5y6ppjWjhb0nlhC&output=json&coordtype=wgs84ll&location=37.404704734328,127.10515530866",target:"_blank",rel:"noopener noreferrer"},j={href:"http://api.map.baidu.com",target:"_blank",rel:"noopener noreferrer"},E={href:"http://api.map.baidu.com",target:"_blank",rel:"noopener noreferrer"};function H(A,n){const e=d("ExternalLinkIcon");return r(),o("div",null,[n[30]||(n[30]=l('<h1 id="dbc-gpu-云服务" tabindex="-1"><a class="header-anchor" href="#dbc-gpu-云服务" aria-hidden="true">#</a> DBC GPU 云服务</h1><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言：</h2><ul><li>以下内容仅作演示用例，具体实施请根据自身情况安装适合的软件版本，并及时关注相关中间件漏洞信息进行升级或者修补，以防被恶意攻击。</li></ul><h2 id="一、数据库部署" tabindex="-1"><a class="header-anchor" href="#一、数据库部署" aria-hidden="true">#</a> 一、数据库部署</h2><h3 id="安装-设置数据库" tabindex="-1"><a class="header-anchor" href="#安装-设置数据库" aria-hidden="true">#</a> 安装&amp;设置数据库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#1. 下载：</span>
<span class="token function">curl</span> <span class="token parameter variable">-O</span> <span class="token operator">&lt;</span>https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz<span class="token operator">&gt;</span>

<span class="token comment">#2. 解压:</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> mongodb-linux-x86_64-3.0.6.tgz

<span class="token comment">#3. 将解压包拷贝到指定目录:</span>

<span class="token function">mkdir</span> /data
<span class="token function">mkdir</span> /data/mongodb
mongodb-linux-x86_64-3.0.6/ /data/mongodb

<span class="token comment">#4. 设置环境变量：</span>

<span class="token function">sudo</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;export PATH=/data/mongodb/bin:<span class="token environment constant">$PATH</span>&quot;</span>  <span class="token operator">&gt;&gt;</span> /etc/profile
<span class="token builtin class-name">source</span> /etc/profile

<span class="token comment">#5. 创建数据库目录：</span>

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/db  <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/db/master

<span class="token comment">#6. 创建：/etc/mongod.conf 添加授权（这样数据库需要密码才能登陆）</span>

storage:
  dbPath: /data/db/master
  journal:
	enabled: <span class="token boolean">true</span>

net:
  port: <span class="token number">27017</span>
  bindIp: <span class="token number">0.0</span>.0.0

security:
  authorization: enabled

<span class="token comment">#7. 创建admin和identifier数据库，并且设置密码</span>

 <span class="token number">1</span><span class="token punctuation">)</span> mongod <span class="token parameter variable">--dbpath</span> /data/db/master,然后  mongo
 <span class="token number">2</span><span class="token punctuation">)</span> use admin
 <span class="token number">3</span><span class="token punctuation">)</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span> user: <span class="token string">&quot;admin&quot;</span>, pwd: <span class="token string">&quot;*****&quot;</span>, roles: <span class="token punctuation">[</span><span class="token punctuation">{</span> role: <span class="token string">&quot;root&quot;</span>, db: <span class="token string">&quot;admin&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>  设置管理员账户
 <span class="token number">4</span><span class="token punctuation">)</span> db.shutdownServer<span class="token punctuation">(</span><span class="token punctuation">)</span>  关闭mongo数据
 <span class="token number">5</span><span class="token punctuation">)</span> <span class="token function">screen</span> <span class="token parameter variable">-S</span> mongod  后台运行命令
 <span class="token number">6</span><span class="token punctuation">)</span> mongod <span class="token parameter variable">--config</span> /etc/mongod.conf （需要提前配置好mongod.conf文件） 此处如果要配置2个不同服务器的数据库自动备份，
    则用命令：mongod <span class="token parameter variable">--master</span> <span class="token parameter variable">--slave</span> <span class="token parameter variable">--autoresync</span> <span class="token parameter variable">--config</span> /etc/mongod.conf  <span class="token parameter variable">--source</span> ip:27017
 <span class="token number">7</span><span class="token punctuation">)</span> mongo,然后use admin ,然后 db.auth<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span>,<span class="token string">&#39;******&#39;</span><span class="token punctuation">)</span>，
 <span class="token number">8</span><span class="token punctuation">)</span> use identifier  创建identifier数据库,此处数据库名字nodejs服务器代码中名字需要保持一致
 <span class="token number">9</span><span class="token punctuation">)</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user: <span class="token string">&quot;dbc&quot;</span>, pwd: <span class="token string">&quot;*******&quot;</span>, roles: <span class="token punctuation">[</span> <span class="token punctuation">{</span> role: <span class="token string">&quot;dbOwner&quot;</span>, db: <span class="token string">&quot;identifier&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">#设置加价规则，percentage_signle为单个租用虚拟机的加价大小，percentage_whole为租用整机的加价大小，参数后跟数字，1为1%，示例为40%</span>
        db.DBCPercentage.insert<span class="token punctuation">(</span><span class="token punctuation">{</span> _id: <span class="token string">&#39;percentage&#39;</span>,percentage_signle: <span class="token number">40</span>, percentage_whole: <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token number">11</span><span class="token punctuation">)</span> db.DBCPercentage.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.toArray<span class="token punctuation">(</span><span class="token punctuation">)</span>    查看设置是否生效
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)),p(`
## 二、Java 部署(建议 Java 环境为 Java11)

\`\`\`bash
#通过git克隆链接地址：https://github.com/DeepBrainChain/DBCGPUCloudService.git
#1. 修改配置文件中的dbc算力网络客户端域名
在DBCGPUCloudService/src/main/resources 文件夹下面：
application-dev.properties  application-prod.properties   application-test.properties 中clientUrl修改用自己部署的dbc客户端域名替代

#2. 修改wss链上访问DBC钱包客户端域名

修改 chainUrl = wss://infotest.dbcwallet.io:7777 为 chainUrl = wss://info.dbcwallet.io
也可以修改为自己部署的DBC钱包客户端地址，info.dbcwallet.io为公开的地址，不保证100%稳定

#3. 修改数据库地址信息

spring.data.mongodb.uri=mongodb://usr:passwd@localhost:27017/database_name
usr和passwd要和mongo中database_name用户名密码一致

#4. 编译打包程序

   提前装好maven
   进入ubuntu服务器的maven仓库文件夹:cd ~/.m2/repository
   下载依赖包:wget https://github.com/DeepBrainChain/dbc_java_service_sdk/releases/download/1.0/Repository.rar
   解压:rar x Repository.rar
   拷贝：cp -r ~/.m2/repository/Repository/*  ~/.m2/repository/
   回到DBCGPUCloudService/目录中打包（请确保机器中的java版本为java11）
   打包开发版本， 执行命令： mvn package -P dev
   打包测试版本， 执行命令： mvn package -P test
   打包正式版本， 执行命令： mvn package -P prod

#5. 在服务器创建文件夹

   1) mkdir /data
   2) cd /data &  mkdir bin
   3) cd /data &  mkdir lib

#6. 上传jar文件到服务器

   移动 DBCWebService\\target\\DBCGPUCloudService-0.0.1-SNAPSHOT.jar 文件到服务器 lib文件夹下面

#7. 服务器start.sh 脚本修改：

下载地址：<https://github.com/DeepBrainChain/DBCGPUCloudService/releases/download/v0.0.1/start.sh>
appName="DBCGPUCloudService-0.0.1-SNAPSHOT.jar" ,之前编译出来的jar包名字
serverPort=8081，可以自定义启动端口，此处端口设置要和nginx配置中的端口号保持一致
profiles="test"  ，可以设置为: dev\\\\test\\\\prod

#8. 服务器stop.sh 脚本修改：

 下载地址：<https://github.com/DeepBrainChain/DBCGPUCloudService/releases/download/v0.0.1/stop.sh>
 APP_NAME="DBCGPUCloudService-0.0.1-SNAPSHOT.jar",之前编译出来的jar包名字
 SERVER_PORT=8081 和start.sh 脚本中的端口号保持一致

#9. 部署启动服务器程序

 1) 将start.sh和 stop.sh上传到 bin文件夹中
 2) bash start.sh  启动程序
\`\`\` `),n[31]||(n[31]=l(`<h2 id="二、搭建-dbc-客户端" tabindex="-1"><a class="header-anchor" href="#二、搭建-dbc-客户端" aria-hidden="true">#</a> 二、搭建 DBC 客户端</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#装DBC客户端</span>
安装环境

<span class="token function">apt-get</span> <span class="token function">install</span> libvirt-clients libvirt-daemon-system

<span class="token number">1</span>. 下载安装脚本： <span class="token operator">&lt;</span>https://github.com/DeepBrainChain/DBC-AIComputingNet/releases/<span class="token operator">&gt;</span>

下载其中的install_client.sh脚本文件

<span class="token number">2</span>. 给install_client.sh脚本文件添加执行权限： 命令行下执行：chmod +x install_client.sh

<span class="token number">3</span>. 运行安装脚本: 命令行下执行：./install_client.sh <span class="token punctuation">[</span>安装目录<span class="token punctuation">]</span>

安装过程中会要求用户输入2个端口号：根据情况填写即可，比如:net_listen_port<span class="token operator">=</span><span class="token number">5001</span>，http_port<span class="token operator">=</span><span class="token number">5002</span>

<span class="token comment">#升级DBC客户端</span>
<span class="token number">1</span>. 下载升级脚本： <span class="token operator">&lt;</span>https://github.com/DeepBrainChain/DBC-AIComputingNet/releases/<span class="token operator">&gt;</span>

下载其中的update_client.sh脚本文件

<span class="token number">2</span>. 给update_client.sh脚本文件添加执行权限： 命令行下执行：chmod +x update_client.sh

<span class="token number">3</span>. 运行升级脚本: 命令行下执行：./update_client.sh <span class="token punctuation">[</span>原客户端安装目录<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、部署-node-服务器" tabindex="-1"><a class="header-anchor" href="#三、部署-node-服务器" aria-hidden="true">#</a> 三、部署 Node 服务器</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#克隆代码</span>

<span class="token comment">#通过git克隆链接地址 https://github.com/DeepBrainChain/DBC-NodeScript.git将代码克隆到本地或服务器</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DBC-NodeScript.git

<span class="token comment">### 部署代码</span>

<span class="token comment">#代码克隆以后，可使用 forever 插件创建定时任务，将node代码运行在服务器后台，通过ip加启动router.js的启动server服务端口号，即可访问对应的接口。</span>
服务器安装node示例：<span class="token operator">&lt;</span>https://www.cnblogs.com/niuben/p/12938501.html<span class="token operator">&gt;</span>
forever部署示例请参考：<span class="token operator">&lt;</span>https://blog.csdn.net/superjunjin/article/details/7325219<span class="token operator"><span class="token file-descriptor important">4</span>&gt;</span>
<span class="token punctuation">(</span>注意：安装forever以后如果未找到，可通过 <span class="token function">npm</span> list <span class="token parameter variable">-g</span> <span class="token parameter variable">--depth</span> <span class="token number">0</span> 查找forever文件夹安装目录，进入forever/bin/目录下将forever软连接到/usr/bin/forever 全局使用<span class="token punctuation">)</span>
<span class="token comment">#检查node 和 forever 是否安装成功,执行以下命令</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span> // v16.13.0
forever <span class="token parameter variable">--version</span> // v4.0.1

<span class="token comment">#执行无误后，进入DBC-NodeScript文件夹下，运行以下命令，在文件夹下生成 node_modules 文件夹</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment">#执行无误后，在DBC-NodeScript文件夹下，打开publicResource.js文件，修改相关配置信息</span>
<span class="token builtin class-name">export</span> const wssChain
<span class="token builtin class-name">export</span> const baseUrl
<span class="token builtin class-name">export</span> const mongoUrlSeed
<span class="token builtin class-name">export</span> const walletInfo
<span class="token builtin class-name">export</span> const designatedWallet
<span class="token comment">#注意：mongoUrlSeed 及 walletInfo 为加密的字符串，需要提前生成，生成规则及方法需联系相关技术人员</span>

<span class="token comment">#进入 DBC-NodeScript\\HttpRequest 文件夹下，执行</span>
forever start <span class="token parameter variable">-o</span> http-out.log <span class="token parameter variable">-e</span> http-err.log router.js //启动nodejs的server服务

<span class="token comment">#此时已经将router.js挂载到后台运行，server服务启动，此时即可访问接口</span>
nodeHost <span class="token operator">=</span> http://xxx.xxx.xxx.xxx:8090

<span class="token comment">#进入 DBC-NodeScript\\TimedTask 文件夹下，运行文件夹下的js文件，启动的定时任务，即可实时更新数据库信息，例如：</span>
forever start <span class="token parameter variable">-o</span> ver-out.log <span class="token parameter variable">-e</span> ver-err.log VerificationMachine.js
<span class="token comment">#注意：TimedTask文件夹下的文件必须全部运行，否则会导致数据库数据与实际数据不符</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下部分为目录解释：</p><h3 id="httprequest-目录" tabindex="-1"><a class="header-anchor" href="#httprequest-目录" aria-hidden="true">#</a> HttpRequest 目录</h3><ul><li><p>用于书写与前端交互的详细接口内容</p><ul><li><p><strong>api.js</strong></p><ul><li>定义 express 路由</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">/**
* 定义路由，便于分辨对应模块
* 导出路由模块，在router.js文件中引用
*/</span>
export const Select = express.Router()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建路由对应接口</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Select.get(&#39;/&#39;, (request, response ,next) =&gt; {
    ******
    调用数据库，已经数据的处理与返回
    ******
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>router.js</strong></p><ul><li>定义请求信息</li><li>设置请求头</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
* 导入api.js中路由模块
* 设置请求头，启动server服务
*/
// 使用 router
serve.use(&#39;/api/select&#39;, Select)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动 server 服务</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>serve.listen(8090, ()=&gt;{
    console.log(&#39;服务器启动完毕&#39;);
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="timedtask-目录" tabindex="-1"><a class="header-anchor" href="#timedtask-目录" aria-hidden="true">#</a> TimedTask 目录</h3><ul><li><strong>用于创建只与数据库进行交互的 js 文件，定时请求数据存入数据库中，以便数据及时更新</strong></li></ul><h3 id="testscript-目录" tabindex="-1"><a class="header-anchor" href="#testscript-目录" aria-hidden="true">#</a> testScript 目录</h3><ul><li><strong>用于创建 node 可执行脚本，仅供测试使用</strong></li></ul><h3 id="publicresource-js" tabindex="-1"><a class="header-anchor" href="#publicresource-js" aria-hidden="true">#</a> publicResource.js</h3><ul><li><strong>用于公用基础信息配置，注意修改</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * wssChain 调用链名称
 */
export const wssChain = {
  dbc: &#39;wss://info.dbcwallet.io&#39; // 公链正式链，也可以自己部署DBC钱包客户端
}

/**
 * baseUrl c++ 端口
 */


export const baseUrl = &#39;&lt;http://ip:port&gt;&#39; // 步骤三中的dbc客户端ip和端口号


/**
 * 连接mongo数据库
 */
export const mongoUrlSeed = &#39;ba22370884954c456be7fc10cbae7a652fbadfb64e4ab9aab4a8a944f1f8ea052abc8968bfdb05ac1dc0f0842872089e&#39; // 服务器访问mongo加密字段

/**
 * 钱包数据
 */
export const walletInfo = &#39;16c2efe71e094d0b3dd7b319da9c6a636cc0c7740cb6e900a40220fc3b77ec8f22a99f79&#39; // 服务器访问钱包加密字段

/**
 * 定义租用机器获取收益差额的钱包
 */
export const designatedWallet = &#39;5F7L9bc3q4XdhVstJjVB2o7S8RHz2YKsHUB6k3uQpErTmVWu&#39; // 用户支付的dbc收益部分会进入此钱包，需替换成自己的钱包地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、部署-web-环境" tabindex="-1"><a class="header-anchor" href="#四、部署-web-环境" aria-hidden="true">#</a> 四、部署 web 环境</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#下载代码到本地或服务器(注意：master分支下的代码可能为测试版，部署时请以tags最新版本代码为准)</span>
<span class="token number">1</span>. 克隆代码
<span class="token comment">#通过git克隆链接地址 https://github.com/DeepBrainChain/DBChainWebsite.git 将代码克隆到本地或服务器，运行</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DBChainWebsite.git

<span class="token comment">#查询所有tag</span>
<span class="token function">git</span> tag

<span class="token comment">#切换tag代码</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>tag-name<span class="token operator">&gt;</span>

<span class="token comment">#检查是否安装Node,运行以下命令，检查Node是否全局安装</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span> //v16.13.0

<span class="token comment">#安装完成后，打开DBChainWebsite文件夹，运行以下命令，生成node_modules文件</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment">#执行成功后，运行以下命令，可以本地启动网页运行云平台，进行测试。</span>
<span class="token function">npm</span> run serve

<span class="token number">2</span>. 修改云平台logo图案配置
<span class="token comment">#打开文件夹 src--&gt; locales --&gt; CN.js &amp;&amp; EN.js &amp;&amp; RU.js, 将website_name字段设置为自己云平台的名称，本地运行即可查看</span>
<span class="token comment">#修改website_name</span>

<span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
	···
	website_name: <span class="token string">&#39;dbchain&#39;</span>, // dbchain, 1024lab, tycloud
	···
<span class="token punctuation">}</span>

<span class="token number">3</span>. 配置接口访问域名
<span class="token comment">#打开文件夹 src--&gt; api --&gt; index.js,配置自己配置的服务器接口，即可修改自己所属的node接口访问域名</span>
<span class="token comment">#修改文件，使用nodeHost</span>

const nodeHost <span class="token operator">=</span> <span class="token string">&#39;https://xxxxxx&#39;</span>   //nodejs 服务器地址

<span class="token number">4</span>. 修改访问链地址
<span class="token comment">#打开文件夹 src--&gt; utlis --&gt; dot --&gt; api.ts &amp;&amp; index.ts ,配置访问链</span>
const <span class="token function">node</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    ···
    dbc: <span class="token string">&#39;wss://info.dbcwallet.io&#39;</span> // 公链正式链
    ···
<span class="token punctuation">}</span>

<span class="token number">5</span>. 生成dist文件部署服务器
<span class="token comment">#打开DBChainWebsite文件夹，运行以下命令，生成dist文件夹(DBChainWebsite文件夹下)，将dist文件夹放在指定的服务器文件，通过配置nginx指定dist文件中的index.html文件，即可访问页面</span>
<span class="token function">npm</span> run build

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、部署-nginx" tabindex="-1"><a class="header-anchor" href="#五、部署-nginx" aria-hidden="true">#</a> 五、部署 Nginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装Nginx</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx <span class="token parameter variable">-y</span>

<span class="token comment"># 配置nginx</span>
<span class="token function">mkdir</span> /etc/nginx/gpucloud //上传ssl证书到此文件夹中
<span class="token function">mkdir</span> /etc/nginx/gpucloud.conf
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/nginx/gpucloud.conf

<span class="token comment">#示例如下，实际请按照自身环境改动，仅作参考</span>

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




<span class="token comment"># 检测Nginx配置是否正确</span>
<span class="token function">sudo</span> nginx <span class="token parameter variable">-t</span>

<span class="token comment"># 启动并设置开机自起</span>
<span class="token function">sudo</span> nginx <span class="token parameter variable">-s</span> reload
<span class="token function">sudo</span> systemctl start nginx
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、paypal-相关文档" tabindex="-1"><a class="header-anchor" href="#六、paypal-相关文档" aria-hidden="true">#</a> 六、Paypal 相关文档</h2><h3 id="_1-注册-paypal-账户" tabindex="-1"><a class="header-anchor" href="#_1-注册-paypal-账户" aria-hidden="true">#</a> 1.注册 Paypal 账户</h3>`,20)),s("ul",null,[s("li",null,[n[1]||(n[1]=a("注册 Paypal 账户(个人公司不限) ")),s("a",_,[n[0]||(n[0]=a("https://www.paypal.com/c2/home")),i(e)])]),s("li",null,[n[3]||(n[3]=a("登录 paypal 开发者网站 ")),s("a",y,[n[2]||(n[2]=a("https://developer.paypal.com/developer/applications/")),i(e)])])]),n[32]||(n[32]=l('<h3 id="_2-获取-client-id-secret" tabindex="-1"><a class="header-anchor" href="#_2-获取-client-id-secret" aria-hidden="true">#</a> 2.获取 Client ID &amp; Secret</h3><ul><li>进去开发者页面，如下图，选择 Live 选项，点击 Create App 按钮，创建应用程序来接收用于测试和实时交易的 REST API 凭证。 <img src="'+u+'" alt="" loading="lazy"></li><li>根据页面提示创建 App，操作完成后，即生成自己的 App，如下图，可查看自己的 Client ID &amp; Secret <img src="'+v+`" alt="" loading="lazy"></li></ul><h3 id="_3-修改云平台中相关的-paypal-参数" tabindex="-1"><a class="header-anchor" href="#_3-修改云平台中相关的-paypal-参数" aria-hidden="true">#</a> 3. 修改云平台中相关的 Paypal 参数</h3><p>打开文件夹 src--&gt; views --&gt; trade_io --&gt; buy_3.vue, 修改其中的字段，其中 sandbox 为沙盒测试版，production 为正式上线版</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 修改credentials ， boxEnv

// 填入步骤2中所获取的Client ID
credentials: {
    sandbox: &#39;&lt;sandbox client id&gt;&#39;, // 沙盒测试版， 上正式环境，可不填此选项
    production: &#39;&lt;production client id&gt;&#39;  // 正式版 上正式环境，必填项
},
boxEnv: &#39;sandbox&#39;, // 沙盒测试版: sandbox, 正式版: production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-修改-node-服务器端相关的-paypal-参数" tabindex="-1"><a class="header-anchor" href="#_4-修改-node-服务器端相关的-paypal-参数" aria-hidden="true">#</a> 4. 修改 node 服务器端相关的 Paypal 参数</h3><p>打开文件夹 DBC-NodeScript--&gt; publicResource.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 修改paypalUrl
/**
 * paypal访问域名
 */
 export const paypalUrl = &#39;https://api-m.sandbox.paypal.com&#39; // 沙盒测试
// export const paypalUrl = &#39;https://api-m.paypal.com&#39; // 正式版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-数据库配置" tabindex="-1"><a class="header-anchor" href="#_5-数据库配置" aria-hidden="true">#</a> 5. 数据库配置</h3><ul><li>设置 contractwallet 集合（存储用于转账的合约钱包地址及私钥）</li><li>设置 paypalInfo 集合（存储 paypal 查询所需要的 CLIENT_ID 以及 SECRET）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// contractwallet集合
db.contractwallet.insert({
    _id:&#39;contractwallet&#39;, // 不能修改，固定_id为&#39;contractwallet&#39;
    &quot;wallet&quot;:&#39;your wallet&#39;, // 转账用的钱包地址
    &quot;seed&quot;:&#39;your seed&#39; // 转账用的钱包地址私钥
})

// paypalInfo集合
db.paypalInfo.insert({
    _id:&#39;paypal&#39;, // 不能修改，固定_id为&#39;paypal&#39;
    &quot;Client_ID&quot;:&#39;your Client_ID&#39;, // 自己app对应的Client_ID
    &quot;Secret&quot;:&#39;your Secret&#39; // 自己app对应的Secret
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、支付宝相关文档" tabindex="-1"><a class="header-anchor" href="#七、支付宝相关文档" aria-hidden="true">#</a> 七、支付宝相关文档</h2><h3 id="_1-登录支付宝开发者平台" tabindex="-1"><a class="header-anchor" href="#_1-登录支付宝开发者平台" aria-hidden="true">#</a> 1.登录支付宝开发者平台</h3>`,14)),s("ul",null,[s("li",null,[n[5]||(n[5]=a("打开支付宝开放平台 - 控制台 ")),s("a",C,[n[4]||(n[4]=a("https://open.alipay.com/develop/manage")),i(e)])]),n[6]||(n[6]=s("li",null,[a("选择 网页/移动应用 栏，点击 创建网页/移动应用 按钮，根据提示完成应用创建操作 "),s("img",{src:b,alt:"",loading:"lazy"})],-1))]),n[33]||(n[33]=s("h3",{id:"_2-获取支付所需数据",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-获取支付所需数据","aria-hidden":"true"},"#"),a(" 2.获取支付所需数据")],-1)),s("ul",null,[s("li",null,[n[8]||(n[8]=a("通过官方示例文档，获取所需接入数据 ")),s("a",w,[n[7]||(n[7]=a("https://ideservice.alipay.com/devflow/intelliAssist/page/SC00002446?projectId=670000105#lastFinish")),i(e)]),n[9]||(n[9]=s("img",{src:k,alt:"",loading:"lazy"},null,-1))])]),n[34]||(n[34]=l('<h3 id="_3-检测环境是否准备充分" tabindex="-1"><a class="header-anchor" href="#_3-检测环境是否准备充分" aria-hidden="true">#</a> 3. 检测环境是否准备充分</h3><ul><li>第 2 步创建完成后，通过下图步骤三-账户及应用准备 中可以检测应用是否具有正式使用的能力 <img src="'+h+`" alt="" loading="lazy"></li></ul><h3 id="_4-修改对应配置文件" tabindex="-1"><a class="header-anchor" href="#_4-修改对应配置文件" aria-hidden="true">#</a> 4.修改对应配置文件</h3><ul><li>打开文件夹 src--&gt; locales --&gt; CN.js &amp;&amp; EN.js &amp;&amp; ES.js &amp;&amp; FR.js, 将 showAliPay 字段设置为 0 或 1</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#修改showAliPay
export default {
	···
	showAliPay: &#39;0&#39;, // 是否显示支付宝支付 1 显示 0 不显示
	···
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-修改-node-服务器端相关的-alipay-参数" tabindex="-1"><a class="header-anchor" href="#_5-修改-node-服务器端相关的-alipay-参数" aria-hidden="true">#</a> 5. 修改 node 服务器端相关的 Alipay 参数</h3><ul><li>打开文件夹 DBC-NodeScript--&gt; publicResource.js</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 修改AlipaySdk配置

export const alipaySdk = new AlipaySdk.default({
  appId: &#39;your appId&#39;,
  signType: &#39;RSA2&#39;,
  gateway: &#39;https://openapi.alipay.com/gateway.do&#39;,
  alipayPublicKey: &#39;your alipayPublicKey&#39;,
  privateKey: &#39;your privateKey&#39;,
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、单台虚拟机部署配置" tabindex="-1"><a class="header-anchor" href="#八、单台虚拟机部署配置" aria-hidden="true">#</a> 八、单台虚拟机部署配置</h2><h3 id="_1-将-node、web-更新到最新版本-重新拉取最新代码" tabindex="-1"><a class="header-anchor" href="#_1-将-node、web-更新到最新版本-重新拉取最新代码" aria-hidden="true">#</a> 1.将 node、web 更新到最新版本（重新拉取最新代码）</h3><div class="hint-container warning"><p class="hint-container-title">注意</p><p>重新拉下来的文件要在文件夹中重新执行<code>npm install</code></p><p>在 node 文件夹下的<code>HttpRequest</code>中只需用 forever 启动<code>router.js</code>,<code>TimedTask</code>下的所有 js 文件都要启动</p></div><h3 id="_2-准备工作" tabindex="-1"><a class="header-anchor" href="#_2-准备工作" aria-hidden="true">#</a> 2.准备工作：</h3>`,12)),s("ul",null,[s("li",null,[n[11]||(n[11]=a("在链上租用一台整机（")),s("a",D,[n[10]||(n[10]=a("参考链接")),i(e)]),n[12]||(n[12]=a("）"))]),s("li",null,[n[14]||(n[14]=a("查询 session_id 信息（")),s("a",q,[n[13]||(n[13]=a("参考链接中的第三种类型")),i(e)]),n[15]||(n[15]=a("）"))]),s("li",null,[n[17]||(n[17]=a("创建网络（")),s("a",S,[n[16]||(n[16]=a("参考链接")),i(e)]),n[18]||(n[18]=a("）"))]),n[19]||(n[19]=s("li",null,"查看 rent_end 块高(注意获取的 rent_end 保存时要去掉逗号:1021788)",-1))]),n[35]||(n[35]=l('<figure><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-将以上信息添加到数据库中" tabindex="-1"><a class="header-anchor" href="#_3-将以上信息添加到数据库中" aria-hidden="true">#</a> 3. 将以上信息添加到数据库中：</h3><ul><li>设置 virMachine 集合（存储用于租用单个 GPU 的机器信息）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// virMachine集合
db.virMachine.insert({
    &quot;_id&quot;: &quot;virtual_machine_list&quot;,
    &quot;machineList&quot;: [
        {
            &quot;machine_id&quot;: &quot;机器id&quot;,
            &quot;session_id&quot;: &quot;sessionid&quot;,
            &quot;session_id_sign&quot;: &quot;session信息&quot;,
            &quot;rent_end&quot;: &quot;块高&quot;,
            &quot;network_name&quot;: &quot;网络名称&quot;
        },
        {
            &quot;machine_id&quot;: &quot;机器id&quot;,
            &quot;session_id&quot;: &quot;sessionid&quot;,
            &quot;session_id_sign&quot;: &quot;session信息&quot;,
            &quot;rent_end&quot;: &quot;块高&quot;,
            &quot;network_name&quot;: &quot;网络名称&quot;
        }
    ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、问题总结" tabindex="-1"><a class="header-anchor" href="#九、问题总结" aria-hidden="true">#</a> 九、问题总结</h2><h3 id="_1-start-log-报错-map-is-null" tabindex="-1"><a class="header-anchor" href="#_1-start-log-报错-map-is-null" aria-hidden="true">#</a> 1.start.log 报错：map is null</h3>`,6)),s("ul",null,[s("li",null,[n[21]||(n[21]=a("用服务器访问地址：")),s("a",B,[n[20]||(n[20]=a("http://api.map.baidu.com/reverse_geocoding/v3/?ak=jQc7i76SLm2k5j54z5y6ppjWjhb0nlhC&output=json&coordtype=wgs84ll&location=")),i(e)]),n[22]||(n[22]=a(" (location=纬度，经度)"))]),n[23]||(n[23]=s("li",null,"无法访问地址，执行：",-1))]),n[36]||(n[36]=s("div",{class:"language-text line-numbers-mode","data-ext":"text"},[s("pre",{class:"language-text"},[s("code",null,` echo "nameserver 8.8.4.4" | sudo tee /etc/resolv.conf > /dev/null
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1)),s("ul",null,[n[29]||(n[29]=s("li",null,"ping 111.206.208.72",-1)),s("li",null,[n[25]||(n[25]=a("ping ")),s("a",j,[n[24]||(n[24]=a("api.map.baidu.com")),i(e)])]),s("li",null,[n[27]||(n[27]=a("可以 ping 111.206.208.72 但无法 ping 通 ")),s("a",E,[n[26]||(n[26]=a("api.map.baidu.com")),i(e)]),n[28]||(n[28]=a(" 时，在/etc/hosts 配置："))])]),n[37]||(n[37]=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>111.206.208.72  api.map.baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-dbc-客户端无法连接到主网" tabindex="-1"><a class="header-anchor" href="#_2-dbc-客户端无法连接到主网" aria-hidden="true">#</a> 2.dbc 客户端无法连接到主网</h3><ul><li>在安装目录下 conf/peer.conf 中添加节点：peer=116.169.53.134:5002,重启 dbc</li><li>dbc 日志出现报错：检查端口是否开启或被占用 <img src="`+x+'" alt="" loading="lazy"></li></ul>',3))])}const N=t(f,[["render",H],["__file","dbc-gpu-cloud-service.html.vue"]]);export{N as default};
