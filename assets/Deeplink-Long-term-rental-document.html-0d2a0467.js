import{_ as t,H as o,W as p,X as d,a0 as a,Y as i,Z as n,$ as l}from"./framework-2c7d842c.js";const s={},u={href:"https://orion.deeplink.cloud/longterm",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.deeplink.cloud/software",target:"_blank",rel:"noopener noreferrer"},g={href:"https://deepbrainchain.github.io/DBC-Wiki/onchain-guide/bonding-machine.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.dbcscan.io/mining/DeepLink",target:"_blank",rel:"noopener noreferrer"},k={href:"https://orion.deeplink.cloud/device",target:"_blank",rel:"noopener noreferrer"};function b(f,e){const r=o("ExternalLinkIcon");return p(),d("div",null,[e[11]||(e[11]=a('<h1 id="deeplink-长租操作流程" tabindex="-1"><a class="header-anchor" href="#deeplink-长租操作流程" aria-hidden="true">#</a> Deeplink 长租操作流程</h1><h2 id="_1-在dbc链上上架符合deeplink采矿要求的设备" tabindex="-1"><a class="header-anchor" href="#_1-在dbc链上上架符合deeplink采矿要求的设备" aria-hidden="true">#</a> 1. 在DBC链上上架符合Deeplink采矿要求的设备</h2><h3 id="_1-1-设备要求" tabindex="-1"><a class="header-anchor" href="#_1-1-设备要求" aria-hidden="true">#</a> 1.1 设备要求</h3>',3)),i("ul",null,[i("li",null,[e[1]||(e[1]=n("参考： ")),i("a",u,[e[0]||(e[0]=n("https://orion.deeplink.cloud/longterm")),l(r)])])]),e[12]||(e[12]=i("h3",{id:"_1-2-安装deeplink软件",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_1-2-安装deeplink软件","aria-hidden":"true"},"#"),n(" 1.2 安装Deeplink软件")],-1)),i("ul",null,[i("li",null,[i("p",null,[e[3]||(e[3]=n("软件下载地址： ")),i("a",h,[e[2]||(e[2]=n("https://www.deeplink.cloud/software")),l(r)])])]),e[4]||(e[4]=a("<li><p>如果您是本地盘的设备，直接下载安装deeplink，并登陆您的钱包即可</p></li><li><p>如果您是无盘系统带动GPU设备，请注意以下操作：</p><ul><li>在超级模式当中安装deeplink</li><li>打开配置文件 (%appdata%\\deeplink\\config.ini)</li><li>删除掉[host]选项中的 uuid \\ machine_id 保留token，删除掉[device]选项的所有内容（token一定要保留，不然这个无盘服务器下的GPU设备无法与您的钱包关联）</li></ul><p>![image-20250317144551786](/Users/totus/Library/Application Support/typora-user-images/image-20250317144551786.png)</p><ul><li>保存 并关机，然后将此镜像打包为启动镜像</li><li>GPU设备开机验证，确认您的GPU设备没有使用同样的ID 以及密码</li></ul></li>",2))]),e[13]||(e[13]=i("h3",{id:"_1-3-将设备加入到dbc网络中",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_1-3-将设备加入到dbc网络中","aria-hidden":"true"},"#"),n(" 1.3 将设备加入到DBC网络中")],-1)),i("ul",null,[i("li",null,[e[6]||(e[6]=n("参考：")),i("a",g,[e[5]||(e[5]=n("https://deepbrainchain.github.io/DBC-Wiki/onchain-guide/bonding-machine.html")),l(r)])])]),e[14]||(e[14]=a('<h2 id="_2-在dbc链上租用您的设备并绑定evm-钱包地址" tabindex="-1"><a class="header-anchor" href="#_2-在dbc链上租用您的设备并绑定evm-钱包地址" aria-hidden="true">#</a> 2. 在DBC链上租用您的设备并绑定EVM 钱包地址</h2><h3 id="_2-1-租用设备-注意-参加deeplink挖矿的用户-要使用上架设备的资金账户账户地址进行租用-否则会出现上线deeplink合约失败" tabindex="-1"><a class="header-anchor" href="#_2-1-租用设备-注意-参加deeplink挖矿的用户-要使用上架设备的资金账户账户地址进行租用-否则会出现上线deeplink合约失败" aria-hidden="true">#</a> 2.1 租用设备（注意：参加DeepLink挖矿的用户，要使用上架设备的资金账户账户地址进行租用，否则会出现上线deeplink合约失败）</h3><p>![image-20250317142144601](/Users/totus/Library/Application Support/typora-user-images/image-20250317142144601.png)</p><h3 id="_2-2-确认租用" tabindex="-1"><a class="header-anchor" href="#_2-2-确认租用" aria-hidden="true">#</a> 2.2 确认租用</h3><blockquote><p>提示： 确认租用要在租用后15分钟内进行确认</p></blockquote><ul><li>查询租用订单号</li></ul><p>![image-20250317142501729](/Users/totus/Library/Application Support/typora-user-images/image-20250317142501729.png)</p><ul><li>输入租用订单号确认租用</li></ul><p>![image-20250317142652996](/Users/totus/Library/Application Support/typora-user-images/image-20250317142652996.png)</p><ul><li>后续处理续租问题</li></ul><p>![image-20250317142808630](/Users/totus/Library/Application Support/typora-user-images/image-20250317142808630.png)</p><ul><li>绑定EVM地址，</li></ul><p>![image-20250317143049937](/Users/totus/Library/Application Support/typora-user-images/image-20250317143049937.png)</p><h2 id="_3-将设备加入到deeplink长租模式采矿当中" tabindex="-1"><a class="header-anchor" href="#_3-将设备加入到deeplink长租模式采矿当中" aria-hidden="true">#</a> 3. 将设备加入到Deeplink长租模式采矿当中</h2><h3 id="_3-1-gpu-mining页面" tabindex="-1"><a class="header-anchor" href="#_3-1-gpu-mining页面" aria-hidden="true">#</a> 3.1 GPU mining页面</h3>',15)),i("ul",null,[i("li",null,[i("a",m,[e[7]||(e[7]=n("https://www.dbcscan.io/mining/DeepLink")),l(r)]),e[8]||(e[8]=n(" (主网)"))])]),e[15]||(e[15]=i("h3",{id:"_3-2-质押nft-以及-dlc-开始采矿",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_3-2-质押nft-以及-dlc-开始采矿","aria-hidden":"true"},"#"),n(" 3.2 质押NFT 以及 DLC 开始采矿")],-1)),e[16]||(e[16]=i("ul",null,[i("li",null,"质押NFT")],-1)),e[17]||(e[17]=i("p",null,"![image-20250317145306383](/Users/totus/Library/Application Support/typora-user-images/image-20250317145306383.png)",-1)),e[18]||(e[18]=i("ul",null,[i("li",null,"质押DLC（可以不质押，但是质押的越多您的收益越高）")],-1)),e[19]||(e[19]=i("p",null,"![image-20250317145421650](/Users/totus/Library/Application Support/typora-user-images/image-20250317145421650.png)",-1)),e[20]||(e[20]=i("h3",{id:"_3-3质押完成后进入竞赛页面查询您的设备",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_3-3质押完成后进入竞赛页面查询您的设备","aria-hidden":"true"},"#"),n(" 3.3质押完成后进入竞赛页面查询您的设备")],-1)),i("ul",null,[i("li",null,[e[10]||(e[10]=n("竞赛页面： ")),i("a",k,[e[9]||(e[9]=n("https://orion.deeplink.cloud/device")),l(r)])])])])}const D=t(s,[["render",b],["__file","Deeplink-Long-term-rental-document.html.vue"]]);export{D as default};
