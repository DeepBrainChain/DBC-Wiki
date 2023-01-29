import{_ as c,V as o,W as r,X as e,Y as n,Z as a,$ as i,F as d}from"./framework-1d64dffd.js";const h="/assets/find_machine-a06ade5a.png",l={},s=e("h1",{id:"on-chain-rent-machine",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#on-chain-rent-machine","aria-hidden":"true"},"#"),n(" On-chain rent machine")],-1),p=e("h2",{id:"step-1-determine-the-machine-to-be-rented",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#step-1-determine-the-machine-to-be-rented","aria-hidden":"true"},"#"),n(" Step 1: Determine the machine to be rented")],-1),m={href:"https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io",target:"_blank",rel:"noopener noreferrer"},u=e("li",null,[e("p",null,"Create a wallet: Account-->Add account (The mnemonic phrase must be saved, if the mnemonic phrase is lost, the account cannot be retrieved, and the currency is lost)")],-1),f={href:"https://galaxyrace.deepbrainchain.org/table",target:"_blank",rel:"noopener noreferrer"},_=e("figure",null,[e("img",{src:h,alt:"find_machine",tabindex:"0",loading:"lazy"}),e("figcaption",null,"find_machine")],-1),b=e("h2",{id:"step-2-rent-a-machine-on-the-chain",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#step-2-rent-a-machine-on-the-chain","aria-hidden":"true"},"#"),n(" Step 2: Rent a machine on the chain")],-1),v=i("<li><p>Navigate to <code>Developer</code>---<code>Transactions</code>---<code>rentMachine</code> ----<code>rentMachine(machine_id, duration)</code></p></li><li><p><code>machine_id</code>: Enter the id of the machine to be rented, the <code>0x</code> in the input box must be deleted first</p></li><li><p><code>duration</code>: enter the number of days you need to rent</p></li><li><p>After the input is complete, click Submit Transaction, and confirm whether the machine is available within 30 minutes. (If the lease is not confirmed within 30 minutes, the payment of <code>dbc</code> will be refunded, but the transaction fee of 10 <code>dbc</code> cannot be refunded)</p></li>",4),g={href:"https://github.com/DeepBrainChain/DBC-DOC/blob/master/creat_macine/create_macine.md",target:"_blank",rel:"noopener noreferrer"},w=i('<h2 id="step-3-confirm-availability-and-lease" tabindex="-1"><a class="header-anchor" href="#step-3-confirm-availability-and-lease" aria-hidden="true">#</a> Step 3: Confirm availability and lease</h2><div class="hint-container warning"><p class="hint-container-title">경고</p><p>Before confirming, you must confirm that the virtual machine can start normally. After confirming that the lease is successful, it means that the machine is successfully leased, and the DBC rent cannot be refunded</p></div><ul><li><p>Navigate to <code>Developer</code>----<code>Transactions</code>----<code>rentMachine</code>----<code>confirmRent(machine_id)</code></p></li><li><p>Enter the machine id and submit the transaction</p></li></ul><h2 id="step-4-relet-machine-rent" tabindex="-1"><a class="header-anchor" href="#step-4-relet-machine-rent" aria-hidden="true">#</a> Step 4: Relet Machine Rent</h2><div class="hint-container warning"><p class="hint-container-title">경고</p><p>The virtual machine will be automatically stopped when the machine expires to ensure that the lease is renewed successfully before the lease expires</p></div><ul><li><p>Navigate to <code>Developer</code>----<code>Transactions</code>----<code>rentMachine</code>----<code>reletMachine(machine_id, add_duration)</code></p></li><li><p>Enter the machine id and the number of days to renew the lease, and submit the transaction</p></li></ul>',6);function x(y,M){const t=d("ExternalLinkIcon");return o(),r("div",null,[s,p,e("ul",null,[e("li",null,[e("p",null,[n("Open "),e("a",m,[n("Mainnet Wallet"),a(t)])])]),u,e("li",null,[e("p",null,[n("Go to "),e("a",f,[n("Galactic Race Machine List"),a(t)]),n(" to find the corresponding type of idle machine")])])]),_,b,e("ul",null,[v,e("li",null,[e("p",null,[n("For related operations such as creating a virtual machine, please "),e("a",g,[n("reference"),a(t)])])])]),w])}const D=c(l,[["render",x],["__file","rent-machine.html.vue"]]);export{D as default};
