import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o,c as r,b as n,d as a,a as i,e}from"./app.38166bb6.js";var c="/DBC-Wiki/assets/detail.1ec8de8e.png",d="/DBC-Wiki/assets/paypal1.e109dbc6.png",p="/DBC-Wiki/assets/paypal2.f5a73350.png",u="/DBC-Wiki/assets/paypal3.26f2d400.png",v="/DBC-Wiki/assets/alipay1.c778aa4b.png",m="/DBC-Wiki/assets/alipay2.86d4a038.png",b="/DBC-Wiki/assets/alipay3.c55c9901.png",h="/DBC-Wiki/assets/signle.f4e485b1.png",k="/DBC-Wiki/assets/error1.333d855e.png";const f={},g=i('<h1 id="dbc-gpu-cloud-service-english-description" tabindex="-1"><a class="header-anchor" href="#dbc-gpu-cloud-service-english-description" aria-hidden="true">#</a> DBC GPU Cloud Service English description</h1><p><img src="'+c+`" alt=""></p><h2 id="preface" tabindex="-1"><a class="header-anchor" href="#preface" aria-hidden="true">#</a> Preface:</h2><ul><li>The following content is only for demonstration use cases. For specific implementation, please install the appropriate software version according to your own situation, and pay attention to the relevant middleware vulnerability information in time to upgrade or repair to prevent malicious attacks.</li></ul><h2 id="_1-database-deployment" tabindex="-1"><a class="header-anchor" href="#_1-database-deployment" aria-hidden="true">#</a> 1. Database deployment</h2><h3 id="install-setup-database" tabindex="-1"><a class="header-anchor" href="#install-setup-database" aria-hidden="true">#</a> Install &amp; setup database</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1. Download:</span>

  <span class="token function">curl</span> -O <span class="token operator">&lt;</span>https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz<span class="token operator">&gt;</span>
<span class="token comment">#2. Unzip:</span>

  <span class="token function">tar</span> -zxvf mongodb-linux-x86_64-3.0.6.tgz
<span class="token comment">#3. Copy the decompressed package to the specified directory:</span>

<span class="token function">mkdir</span> /data
<span class="token function">mkdir</span> /data/mongodb
mongodb-linux-x86_64-3.0.6/ /data/mongodb
<span class="token comment">#4. Set environment variables:</span>

<span class="token function">sudo</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;export PATH=/data/mongodb/bin:<span class="token environment constant">$PATH</span>&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/profile
<span class="token builtin class-name">source</span> /etc/profile
<span class="token comment">#5. Create the database directory:</span>

  <span class="token function">mkdir</span> -p /data/db <span class="token function">mkdir</span> -p /data/db/master
<span class="token comment">#6. Create: /etc/mongod.conf Add authorization (so the database requires a password to log in)</span>

storage:
  dbPath: /data/db/master
  journal:
enabled: <span class="token boolean">true</span>

net:
  port: <span class="token number">27017</span>
  bindIp: <span class="token number">0.0</span>.0.0

security:
  authorization: enabled
<span class="token comment">#7. Create admin and identifier databases and set passwords</span>

 <span class="token number">1</span><span class="token punctuation">)</span> mongod --dbpath /data/db/master, <span class="token keyword">then</span> mongo
 <span class="token number">2</span><span class="token punctuation">)</span> use admin
 <span class="token number">3</span><span class="token punctuation">)</span>db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span> user: <span class="token string">&quot;admin&quot;</span>, pwd: <span class="token string">&quot;*****&quot;</span>, roles: <span class="token punctuation">[</span><span class="token punctuation">{</span> role: <span class="token string">&quot;root&quot;</span>, db: <span class="token string">&quot;admin&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token number">4</span><span class="token punctuation">)</span> db.shutdownServer<span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token number">5</span><span class="token punctuation">)</span> <span class="token function">screen</span> -S mongod
 <span class="token number">6</span><span class="token punctuation">)</span> mongod --config /etc/mongod.conf <span class="token punctuation">(</span>the mongod.conf <span class="token function">file</span> needs to be configured <span class="token keyword">in</span> advance<span class="token punctuation">)</span> If you want to configure automatic database backup of <span class="token number">2</span> different servers,
    Then use the command: mongod --master --slave --autoresync --config /etc/mongod.conf --source ip:27017
 <span class="token number">7</span><span class="token punctuation">)</span> mongo, <span class="token keyword">then</span> use admin, <span class="token keyword">then</span> db.auth<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span>,<span class="token string">&#39;******&#39;</span><span class="token punctuation">)</span>,
 <span class="token number">8</span><span class="token punctuation">)</span> use identifier
 <span class="token number">9</span><span class="token punctuation">)</span>db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user: <span class="token string">&quot;dbc&quot;</span>, pwd: <span class="token string">&quot;*******&quot;</span>, roles: <span class="token punctuation">[</span> <span class="token punctuation">{</span> role: <span class="token string">&quot;dbOwner&quot;</span>, db: <span class="token string">&quot;identifier&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">#Set the markup rule, percentage_signle is the markup size of a single rental virtual machine, percentage_whole is the markup size of the rental machine, the parameter is followed by a number, 1 is 1%, and the example is 40%</span>
    db.DBCPercentage.insert<span class="token punctuation">(</span><span class="token punctuation">{</span> _id: <span class="token string">&#39;percentage&#39;</span>,percentage_signle: <span class="token number">40</span>, percentage_whole: <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token number">11</span><span class="token punctuation">)</span> <span class="token comment">#to see if the setting takes effect</span>
    db.DBCPercentage.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.toArray<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-build-dbc-client" tabindex="-1"><a class="header-anchor" href="#_2-build-dbc-client" aria-hidden="true">#</a> 2.Build DBC client</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Install DBC client</span>
Installation Environment

<span class="token function">apt-get</span> <span class="token function">install</span> libvirt-clients libvirt-daemon-system

<span class="token number">1</span>. Download the installation script: <span class="token operator">&lt;</span>https://github.com/DeepBrainChain/DBC-AIComputingNet/releases/<span class="token operator">&gt;</span>

Download the install_client.sh script <span class="token function">file</span> <span class="token keyword">in</span> it

<span class="token number">2</span>. Add execution permission to the install_client.sh script file: Execute on the <span class="token builtin class-name">command</span> line: <span class="token function">chmod</span> +x install_client.sh

<span class="token number">3</span>. Run the installation script: Execute on the <span class="token builtin class-name">command</span> line: ./install_client.sh <span class="token punctuation">[</span>installation directory<span class="token punctuation">]</span>

During the installation process, the user will be asked to enter <span class="token number">2</span> port numbers,for example:net_listen_port<span class="token operator">=</span><span class="token number">5001</span>\uFF0Chttp_port<span class="token operator">=</span><span class="token number">5002</span>

<span class="token comment">#Upgrade DBC client</span>
<span class="token number">1</span>. Download the upgrade script: <span class="token operator">&lt;</span>https://github.com/DeepBrainChain/DBC-AIComputingNet/releases/<span class="token operator">&gt;</span>

Download the update_client.sh script <span class="token function">file</span> <span class="token keyword">in</span> it

<span class="token number">2</span>. Add execution permission to the update_client.sh script file: Execute from the <span class="token builtin class-name">command</span> line: <span class="token function">chmod</span> +x update_client.sh

<span class="token number">3</span>. Run the upgrade script: Execute on the <span class="token builtin class-name">command</span> line: ./update_client.sh <span class="token punctuation">[</span>original client installation directory<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-deploy-the-web-environment" tabindex="-1"><a class="header-anchor" href="#_3-deploy-the-web-environment" aria-hidden="true">#</a> 3.Deploy the web environment</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Download the code to the local or server (note: the code under the master branch may be a beta version, please refer to the latest version of tags when deploying)</span>
<span class="token number">1</span>. Clone the code
<span class="token comment">#Clone the code to the local or server via git clone link address https://github.com/DeepBrainChain/DBChainWebsite.git, run</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DBChainWebsite.git

<span class="token comment">#Query all tags</span>
<span class="token function">git</span> tag

<span class="token comment">#Switch tag code</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>tag-name<span class="token operator">&gt;</span>

<span class="token comment">#Check if Node is installed, run the following command to check if Node is installed globally</span>
<span class="token function">node</span> -v //v16.13.0

<span class="token comment">#After the installation is complete, open the DBChainWebsite folder and run the following command to generate the node_modules file</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment">#After the execution is successful, run the following command to start the web page locally to run the cloud platform for testing.</span>
<span class="token function">npm</span> run serve

<span class="token number">2</span>. Modify the cloud platform logo pattern configuration
<span class="token comment">#Open the folder src--&gt; locales --&gt; CN.js &amp;&amp; EN.js &amp;&amp; RU.js, set the website_name field to the name of your cloud platform, run it locally to view</span>
<span class="token comment">#Modify website_name</span>

<span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
  \xB7\xB7\xB7
	website_name: <span class="token string">&#39;dbchain&#39;</span>, // dbchain, 1024lab, tycloud
  \xB7\xB7\xB7
<span class="token punctuation">}</span>

<span class="token number">3</span>. Configure the interface access domain name
<span class="token comment">#Open the folder src--&gt; api --&gt; index.js, configure the server interface configured by yourself, you can modify the node interface you belong to to access the domain name</span>
<span class="token comment">#Modify the file, use nodeHost</span>

const nodeHost <span class="token operator">=</span> <span class="token string">&#39;https://xxxxxx&#39;</span> //nodejs server address

<span class="token number">4</span>. Modify the access chain address
<span class="token comment">#Open the folder src--&gt; utlis --&gt; dot --&gt; api.ts &amp;&amp; index.ts , configure the access chain</span>
const <span class="token function">node</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  \xB7\xB7\xB7
  dbc: <span class="token string">&#39;wss://info.dbcwallet.io&#39;</span> // Official public chain
  \xB7\xB7\xB7
<span class="token punctuation">}</span>

<span class="token number">5</span>. Generate a dist <span class="token function">file</span> to deploy the server
<span class="token comment">#Open the DBChainWebsite folder, run the following command to generate the dist folder (under the DBChainWebsite folder), put the dist folder in the specified server file, and configure nginx to specify the index.html file in the dist file to access the page</span>
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-deploy-node-service" tabindex="-1"><a class="header-anchor" href="#_4-deploy-node-service" aria-hidden="true">#</a> 4.Deploy Node service</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#clone code</span>

<span class="token comment">#Clone the code to the local or server through git clone link address https://github.com/DeepBrainChain/DBC-NodeScript.git</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DBC-NodeScript.git

<span class="token comment">### deploy code</span>

<span class="token comment">#After the code is cloned, you can use the forever plugin to create a scheduled task, run the node code in the server background, and access the corresponding interface by adding the IP address to the server port number that starts router.js.</span>
Server installation <span class="token function">node</span> example: <span class="token operator">&lt;</span>https://www.cnblogs.com/niuben/p/12938501.html<span class="token operator">&gt;</span>
For example of forever deployment, please refer to: <span class="token operator">&lt;</span>https://blog.csdn.net/superjunjin/article/details/7325219<span class="token operator"><span class="token file-descriptor important">4</span>&gt;</span>
<span class="token punctuation">(</span>Note: After installing forever, <span class="token keyword">if</span> it is not found, you can use <span class="token function">npm</span> list -g --depth <span class="token number">0</span> to <span class="token function">find</span> the installation directory of the forever folder, enter the forever/bin/ directory and connect the forever to /usr/bin/forever <span class="token keyword">for</span> global use<span class="token punctuation">)</span>
<span class="token comment">#Check if node and forever are installed successfully, execute the following commands</span>
<span class="token function">node</span> -v // v16.13.0
forever --version // v4.0.1

<span class="token comment">#After the execution is correct, enter the DBC-NodeScript folder and run the following command to generate the node_modules folder under the folder</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment">#After the execution is correct, open the publicResource.js file in the DBC-NodeScript folder and modify the relevant configuration information</span>
<span class="token builtin class-name">export</span> const wssChain
<span class="token builtin class-name">export</span> const baseUrl
<span class="token builtin class-name">export</span> const mongoUrlSeed
<span class="token builtin class-name">export</span> const walletInfo
<span class="token builtin class-name">export</span> const designatedWallet
<span class="token comment">#Note: mongoUrlSeed and walletInfo are encrypted strings, which need to be generated in advance, and the generation rules and methods need to contact relevant technical personnel</span>

<span class="token comment">#Enter the DBC-NodeScript\\HttpRequest folder and execute</span>
forever start -o http-out.log -e http-err.log router.js //Start the server <span class="token function">service</span> of nodejs

<span class="token comment">#At this point, router.js has been mounted to the background to run, the server service is started, and the interface can be accessed at this time</span>
nodeHost <span class="token operator">=</span> http://xxx.xxx.xxx.xxx:8090

<span class="token comment">#Enter the DBC-NodeScript\\TimedTask folder, run the js file in the folder, start the scheduled task, and update the database information in real time, for example:</span>
forever start -o ver-out.log -e ver-err.log VerificationMachine.js
<span class="token comment">#Note: All files in the TimedTask folder must be run, otherwise the database data will not match the actual data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The following section explains the directory:</p><h3 id="httprequest-directory" tabindex="-1"><a class="header-anchor" href="#httprequest-directory" aria-hidden="true">#</a> HttpRequest directory</h3><ul><li><p>For writing detailed interface content for interacting with the front end</p><ul><li><p><strong>api.js</strong></p><ul><li>define express routes</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
* Define routes to facilitate identification of corresponding modules
* Export the routing module, reference it in the router.js file
*/
export const Select = express.Router()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create a route corresponding interface</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Select.get(&#39;/&#39;, (request, response , next) =&gt; {
    ******
    Call the database, process and return the data
    ******
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>router.js</strong></p><ul><li>Define request information</li><li>set request headers</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
* Import the routing module in api.js
* Set the request header and start the server service
*/
// use router
serve.use(&#39;/api/select&#39;, Select)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>start the server service</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>serve.listen(8090, ()=&gt;{
    console.log(&#39;Server startup completed&#39;);
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="timedtask-directory" tabindex="-1"><a class="header-anchor" href="#timedtask-directory" aria-hidden="true">#</a> TimedTask directory</h3><ul><li><strong>Used to create a js file that only interacts with the database, and regularly request data to be stored in the database, so that the data can be updated in time</strong></li></ul><h3 id="testscript-directory" tabindex="-1"><a class="header-anchor" href="#testscript-directory" aria-hidden="true">#</a> testScript directory</h3><ul><li><strong>Used to create node executable scripts for testing purposes only</strong></li></ul><h3 id="publicresource-js" tabindex="-1"><a class="header-anchor" href="#publicresource-js" aria-hidden="true">#</a> publicResource.js</h3><ul><li><strong>For public basic information configuration, pay attention to modify</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * wssChain call chain name
 */
export const wssChain = {
  dbc: &#39;wss://info.dbcwallet.io&#39;
}

/**
 * baseUrl c++ port
 */
export const baseUrl = &#39;&lt;http://ip:5002&gt;&#39; // The dbc client ip and port number in step 3

/**
 * Connect to mongo database
 */

export const mongoUrlSeed = &#39;ba22370884954c456be7fc10cbae7a652fbadfb64e4ab9aab4a8a944f1f8ea052abc8968bfdb05ac1dc0f0842872089e&#39; // Server access mongo encrypted field

/**
 * Wallet data
 */
export const walletInfo = &#39;16c2efe71e094d0b3dd7b319da9c6a636cc0c7740cb6e900a40220fc3b77ec8f22a99f79&#39; // Server access wallet encryption field

/**
 * Define a wallet for renting a machine for income
 */
export const designatedWallet = &#39;5F7L9bc3q4XdhVstJjVB2o7S8RHz2YKsHUB6k3uQpErTmVWu&#39; // The dbc revenue part paid
//by the user will enter this wallet, which needs to be replaced with your own wallet address

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-deploy-nginx-service" tabindex="-1"><a class="header-anchor" href="#_5-deploy-nginx-service" aria-hidden="true">#</a> 5.Deploy Nginx service</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Install Nginx</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx -y

<span class="token comment"># configure nginx</span>
<span class="token function">mkdir</span> /etc/nginx/gpucloud //Upload the ssl certificate to this folder
<span class="token function">mkdir</span> /etc/nginx/gpucloud.conf
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/nginx/gpucloud.conf

<span class="token comment">#The example is as follows, please change it according to your own environment, for reference only</span>
<span class="token comment"># If it is two hosts, please do load balancing</span>

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



<span class="token comment"># Check if Nginx is configured correctly</span>
<span class="token function">sudo</span> nginx -t

<span class="token comment"># start and set the boot time</span>
<span class="token function">sudo</span> nginx -s reload
<span class="token function">sudo</span> systemctl start nginx
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-paypal-related-documents" tabindex="-1"><a class="header-anchor" href="#_6-paypal-related-documents" aria-hidden="true">#</a> 6.Paypal related documents</h2><h3 id="register-a-paypal-account" tabindex="-1"><a class="header-anchor" href="#register-a-paypal-account" aria-hidden="true">#</a> Register a Paypal account</h3>`,27),_=e("Register a Paypal account (individual companies are not limited) "),x={href:"https://www.paypal.com/c2/home",target:"_blank",rel:"noopener noreferrer"},y=e("https://www.paypal.com/c2/home"),w=e("Login to paypal developer website "),C={href:"https://developer.paypal.com/developer/applications/",target:"_blank",rel:"noopener noreferrer"},q=e("https://developer.paypal.com/developer/applications/"),D=i('<h3 id="get-client-id-and-secret" tabindex="-1"><a class="header-anchor" href="#get-client-id-and-secret" aria-hidden="true">#</a> Get Client ID and Secret</h3><ul><li>Go to the developer page, as shown below, select the Live option, click the Create App button, and create an application to receive REST API credentials for testing and live transactions. <img src="'+d+'" alt=""></li><li>Create an App according to the prompts on the page. After the operation is completed, you will generate your own App, as shown in the figure below, you can view your Client ID &amp; Secret <img src="'+p+`" alt=""></li></ul><h3 id="modify-the-relevant-paypal-parameters-in-the-cloud-platform" tabindex="-1"><a class="header-anchor" href="#modify-the-relevant-paypal-parameters-in-the-cloud-platform" aria-hidden="true">#</a> Modify the relevant Paypal parameters in the cloud platform</h3><p>Open the folder src--&gt; views --&gt; trade_io --&gt; buy_3.vue, modify the fields in it, where sandbox is the sandbox beta version, and production is the official online version</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Modify credentials, boxEnv

// Fill in the Client ID obtained in step 2
credentials: {
    sandbox: &#39;&lt;sandbox client id&gt;&#39;, // Sandbox beta version, on the official environment, you can leave this option blank
    production: &#39;&lt;production client id&gt;&#39;  // On the official version, the official environment is required.
},
boxEnv: &#39;sandbox&#39;, // Sandbox Beta: sandbox, Production: production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt=""></p><h3 id="modify-the-paypal-parameters-related-to-the-node-server" tabindex="-1"><a class="header-anchor" href="#modify-the-paypal-parameters-related-to-the-node-server" aria-hidden="true">#</a> Modify the Paypal parameters related to the node server</h3><p>Open the folder DBC-NodeScript--&gt;publicResource.js</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Modify paypalUrl
/**
 * paypal access domain name
 */
 export const paypalUrl = &#39;https://api-m.sandbox.paypal.com&#39; // Sandbox beta version
// export const paypalUrl = &#39;https://api-m.paypal.com&#39; // official version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="database-configuration" tabindex="-1"><a class="header-anchor" href="#database-configuration" aria-hidden="true">#</a> Database configuration</h3><ul><li>Set up the contractwallet collection (storing the contract wallet address and private key for transfer)</li><li>Set paypalInfo collection (store CLIENT_ID and SECRET required for paypal query)</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// contractwallet collection
db.contractwallet.insert({
    _id:&#39;contractwallet&#39;, // Cannot be modified, fixed _id is &#39;contractwallet&#39;
    &quot;wallet&quot;:&#39;your wallet&#39;, // Wallet address for transfer
    &quot;seed&quot;:&#39;your seed&#39; // The wallet address private key used for transfer
})

// paypalInfo collection
db.paypalInfo.insert({
    _id:&#39;paypal&#39;, // Cannot be modified, fixed _id is &#39;paypal&#39;
    &quot;Client_ID&quot;:&#39;your Client_ID&#39;, // Client_ID corresponding to your app
    &quot;Secret&quot;:&#39;your Secret&#39; // Secret corresponding to your app
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7\u3001alipay-related-documents" tabindex="-1"><a class="header-anchor" href="#_7\u3001alipay-related-documents" aria-hidden="true">#</a> 7\u3001Alipay related documents</h2><h3 id="_1-log-in-to-alipay-developer-platform" tabindex="-1"><a class="header-anchor" href="#_1-log-in-to-alipay-developer-platform" aria-hidden="true">#</a> 1.Log in to Alipay developer platform</h3>`,14),S=e("Open Alipay Open Platform - Console "),A={href:"https://open.alipay.com/develop/manage",target:"_blank",rel:"noopener noreferrer"},E=e("https://open.alipay.com/develop/manage"),B=n("li",null,[e("Select the webpage/mobile application column, click the Create webpage/mobile application button, and follow the prompts to complete the application creation operation "),n("img",{src:v,alt:""})],-1),j=n("h3",{id:"_2-get-the-data-required-for-payment",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-get-the-data-required-for-payment","aria-hidden":"true"},"#"),e(" 2.Get the data required for payment")],-1),H=e("Obtain the required access data through the official sample document "),I={href:"https://ideservice.alipay.com/devflow/intelliAssist/page/SC00002446?projectId=670000105#lastFinish",target:"_blank",rel:"noopener noreferrer"},L=e("https://ideservice.alipay.com/devflow/intelliAssist/page/SC00002446?projectId=670000105#lastFinish"),N=n("img",{src:m,alt:""},null,-1),T=i('<h3 id="_3-check-if-the-environment-is-well-prepared" tabindex="-1"><a class="header-anchor" href="#_3-check-if-the-environment-is-well-prepared" aria-hidden="true">#</a> 3. Check if the environment is well prepared</h3><ul><li>After the creation of step 2 is completed, you can check whether the application has the ability to be officially used through step 3 - account and application preparation in the following figure <img src="'+b+`" alt=""></li></ul><h3 id="_4-modify-the-corresponding-configuration-file" tabindex="-1"><a class="header-anchor" href="#_4-modify-the-corresponding-configuration-file" aria-hidden="true">#</a> 4.Modify the corresponding configuration file</h3><ul><li>Open the folder src--&gt; locales --&gt; CN.js &amp;&amp; EN.js &amp;&amp; ES.js &amp;&amp; FR.js, set the showAliPay field to 0 or 1</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#modifyshowAliPay
export default {
	\xB7\xB7\xB7
	showAliPay: &#39;0&#39;, // Whether to display Alipay payment 1 display 0 not display
	\xB7\xB7\xB7
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-modify-the-alipay-parameters-related-to-the-node-server" tabindex="-1"><a class="header-anchor" href="#_5-modify-the-alipay-parameters-related-to-the-node-server" aria-hidden="true">#</a> 5. Modify the Alipay parameters related to the node server</h3><ul><li>Open the folder DBC-NodeScript--&gt;publicResource.js</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Modify AlipaySdk configuration

export const alipaySdk = new AlipaySdk.default({
  appId: &#39;your appId&#39;,
  signType: &#39;RSA2&#39;,
  gateway: &#39;https://openapi.alipay.com/gateway.do&#39;,
  alipayPublicKey: &#39;your alipayPublicKey&#39;,
  privateKey: &#39;your privateKey&#39;,
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-lease-a-single-virtual-machine" tabindex="-1"><a class="header-anchor" href="#_8-lease-a-single-virtual-machine" aria-hidden="true">#</a> 8. Lease a single virtual machine</h2><h3 id="update-node-and-web-to-the-latest-version-re-pull-the-latest-code" tabindex="-1"><a class="header-anchor" href="#update-node-and-web-to-the-latest-version-re-pull-the-latest-code" aria-hidden="true">#</a> Update node and web to the latest version (re-pull the latest code)</h3><div class="custom-container warning"><p class="custom-container-title">Note</p><p>The re-pulled files need to be re-executed <code>npm install</code> in the folder</p><p>In the <code>HttpRequest</code> under the node folder, just use forever to start <code>router.js</code>, and all js files under <code>TimedTask</code> must be started</p></div><h3 id="preparation" tabindex="-1"><a class="header-anchor" href="#preparation" aria-hidden="true">#</a> Preparation:</h3>`,12),R=e("Rent a whole machine on the chain ("),U={href:"https://deepbrainchain.github.io/DBC-Wiki/onchain-guide/rent-machine.html",target:"_blank",rel:"noopener noreferrer"},P=e("Reference link"),W=e(")"),M=e("Query session_id information ("),$={href:"https://deepbrainchain.github.io/DBC-Wiki/install-update-dbc-node/dbc-client-api/http-request-format.html",target:"_blank",rel:"noopener noreferrer"},F=e("The third type in the reference link"),G=e(")"),O=e("Create network ("),z={href:"https://deepbrainchain.github.io/DBC-Wiki/install-update-dbc-node/dbc-client-api/http-api.html#%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%BB%84%E7%BD%91",target:"_blank",rel:"noopener noreferrer"},V=e("Reference link"),X=e(")"),K=n("li",null,[n("p",null,"View rent_end block height(Note that the comma should be removed when the obtained rent_end is saved: 1021788)")],-1),Q=i('<p><img src="'+h+`" alt=""></p><h3 id="add-the-above-information-to-the-database" tabindex="-1"><a class="header-anchor" href="#add-the-above-information-to-the-database" aria-hidden="true">#</a> Add the above information to the database:</h3><ul><li>Set up a virMachine collection (stores machine information for renting a single GPU)</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// virMachine Collection
db.virMachine.insert({
    &quot;_id&quot;: &quot;virtual_machine_list&quot;,
    &quot;machineList&quot;: [
        {
            &quot;machine_id&quot;: &quot;machine_id&quot;,
            &quot;session_id&quot;: &quot;sessionid&quot;,
            &quot;session_id_sign&quot;: &quot;session_id_sign&quot;,
            &quot;rent_end&quot;: &quot;block height&quot;,
            &quot;network_name&quot;: &quot;network name&quot;
        },
        {
            &quot;machine_id&quot;: &quot;machine_id&quot;,
            &quot;session_id&quot;: &quot;sessionid&quot;,
            &quot;session_id_sign&quot;: &quot;session_id_sign&quot;,
            &quot;rent_end&quot;: &quot;block height&quot;,
            &quot;network_name&quot;: &quot;network name&quot;
        }
    ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-summary-of-the-problem" tabindex="-1"><a class="header-anchor" href="#_9-summary-of-the-problem" aria-hidden="true">#</a> 9. Summary of the problem</h2><h3 id="_1-start-log-reports-an-error-map-is-null" tabindex="-1"><a class="header-anchor" href="#_1-start-log-reports-an-error-map-is-null" aria-hidden="true">#</a> 1.start.log reports an error: map is null:</h3>`,6),J=e("Access address with server\uFF1A"),Y={href:"http://api.map.baidu.com/reverse_geocoding/v3/?ak=jQc7i76SLm2k5j54z5y6ppjWjhb0nlhC&output=json&coordtype=wgs84ll&location=37.404704734328,127.10515530866",target:"_blank",rel:"noopener noreferrer"},Z=e("http://api.map.baidu.com/reverse_geocoding/v3/?ak=jQc7i76SLm2k5j54z5y6ppjWjhb0nlhC&output=json&coordtype=wgs84ll&location="),nn=e(" (location=latitude, longitude)"),en=n("li",null,"Unable to access address, execute:",-1),sn=i(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> echo &quot;nameserver 8.8.4.4&quot; | sudo tee /etc/resolv.conf &gt; /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>ping 111.206.208.72</li><li>ping api.map.baidu.com</li><li>Can ping 111.206.208.72 but can&#39;t ping api.map.baidu.com\uFF0CConfigure in /etc/hosts\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>111.206.208.72  api.map.baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-the-dbc-client-cannot-connect-to-the-mainnet" tabindex="-1"><a class="header-anchor" href="#_2-the-dbc-client-cannot-connect-to-the-mainnet" aria-hidden="true">#</a> 2.The dbc client cannot connect to the mainnet</h3><ul><li>Add a node to conf/peer.conf in the installation directory: peer=116.169.53.134:5002, restart dbc</li><li>Error in dbc log: check whether the port is open or occupied <img src="`+k+'" alt=""></li></ul>',5);function an(tn,ln){const s=l("ExternalLinkIcon");return o(),r("div",null,[g,n("ul",null,[n("li",null,[_,n("a",x,[y,a(s)])]),n("li",null,[w,n("a",C,[q,a(s)])])]),D,n("ul",null,[n("li",null,[S,n("a",A,[E,a(s)])]),B]),j,n("ul",null,[n("li",null,[H,n("a",I,[L,a(s)]),N])]),T,n("ul",null,[n("li",null,[n("p",null,[R,n("a",U,[P,a(s)]),W])]),n("li",null,[n("p",null,[M,n("a",$,[F,a(s)]),G])]),n("li",null,[n("p",null,[O,n("a",z,[V,a(s)]),X])]),K]),Q,n("ul",null,[n("li",null,[J,n("a",Y,[Z,a(s)]),nn]),en]),sn])}var cn=t(f,[["render",an],["__file","dbc-gpu-cloud-service.html.vue"]]);export{cn as default};
