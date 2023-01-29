import{_ as o,V as t,W as d,X as e,Y as n,Z as a,$ as c,F as r}from"./framework-1d64dffd.js";const l="/DBC-Wiki/assets/find_machine-a06ade5a.png",h={},s=e("h1",{id:"链上机器租用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#链上机器租用","aria-hidden":"true"},"#"),n(" 链上机器租用")],-1),_=e("h2",{id:"步骤一-确定要租用的机器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#步骤一-确定要租用的机器","aria-hidden":"true"},"#"),n(" 步骤一: 确定要租用的机器")],-1),p={href:"https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io",target:"_blank",rel:"noopener noreferrer"},u=e("li",null,[e("p",null,"创建钱包：账户-->添加账户 （助记词一定要保存好，丢失了助记词，账户就无法找回，币就丢失掉了）")],-1),f={href:"https://galaxyrace.deepbrainchain.org/table",target:"_blank",rel:"noopener noreferrer"},m=e("figure",null,[e("img",{src:l,alt:"find_machine",tabindex:"0",loading:"lazy"}),e("figcaption",null,"find_machine")],-1),b=e("h2",{id:"步骤二-租用链上机器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#步骤二-租用链上机器","aria-hidden":"true"},"#"),n(" 步骤二：租用链上机器")],-1),x=c("<li><p>导航到 <code>开发者</code>---<code>交易</code>---<code>rentMachine</code> ----<code>rentMachine(machine_id, duration)</code></p></li><li><p>machine_id 输入要租用的机器 id，输入框里面的<code>0x</code>要先删除掉</p></li><li><p>duration 输入需要租用的天数</p></li><li><p>输入完成后点击提交交易，并在三十分钟内确认机器是否可用。（如果 30 分钟内不确认租用，支付的<code>dbc</code>会退回，但是交易手续费 10 <code>dbc</code>是无法退回的）</p></li>",4),g={href:"https://github.com/DeepBrainChain/DBC-DOC/blob/master/creat_macine/create_macine.md",target:"_blank",rel:"noopener noreferrer"},k=c('<h2 id="步骤三-确认可用并租赁" tabindex="-1"><a class="header-anchor" href="#步骤三-确认可用并租赁" aria-hidden="true">#</a> 步骤三：确认可用并租赁</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>确认之前必须要确认虚拟机能够正常启动。确认租用成功过后，表示机器租用成功，DBC 租金无法退回</p></div><ul><li><p>导航到<code>开发者</code>----<code>交易</code>----<code>rentMachine</code>----<code>confirmRent(machine_id)</code></p></li><li><p>输入机器 id 并提交交易即可</p></li></ul><h2 id="步骤四-机器续租" tabindex="-1"><a class="header-anchor" href="#步骤四-机器续租" aria-hidden="true">#</a> 步骤四：机器续租</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>机器到期会自动停止虚拟机，确保在租用到期之前续租成功</p></div><ul><li><p>导航到<code>开发者</code>----<code>交易</code>----<code>rentMachine</code>----<code>reletMachine(machine_id, add_duration)</code></p></li><li><p>输入机器 id 以及续租天数，提交交易</p></li></ul>',6);function w(v,B){const i=r("ExternalLinkIcon");return t(),d("div",null,[s,_,e("ul",null,[e("li",null,[e("p",null,[n("打开"),e("a",p,[n("主网钱包"),a(i)])])]),u,e("li",null,[e("p",null,[n("到 "),e("a",f,[n("银河竞赛机器列表"),a(i)]),n(" 找到对应类型的空闲机器")]),m])]),b,e("ul",null,[x,e("li",null,[e("p",null,[n("创建虚拟机等相关操作请"),e("a",g,[n("参考"),a(i)])])])]),k])}const M=o(h,[["render",w],["__file","rent-machine.html.vue"]]);export{M as default};
