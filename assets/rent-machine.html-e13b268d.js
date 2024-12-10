import{_ as o,H as l,W as d,X as c,Y as n,Z as t,$ as a,a0 as r}from"./framework-2c7d842c.js";const s="/DBC-Wiki/assets/find_machine-a06ade5a.png",h={},m={href:"https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io",target:"_blank",rel:"noopener noreferrer"},p={href:"https://galaxyrace.deepbrainchain.org/table",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/DeepBrainChain/DBC-DOC/blob/master/creat_macine/create_macine.md",target:"_blank",rel:"noopener noreferrer"};function f(b,e){const i=l("ExternalLinkIcon");return d(),c("div",null,[e[9]||(e[9]=n("h1",{id:"on-chain-rent-machine",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#on-chain-rent-machine","aria-hidden":"true"},"#"),t(" On-chain rent machine")],-1)),e[10]||(e[10]=n("h2",{id:"step-1-determine-the-machine-to-be-rented",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#step-1-determine-the-machine-to-be-rented","aria-hidden":"true"},"#"),t(" Step 1: Determine the machine to be rented")],-1)),n("ul",null,[n("li",null,[n("p",null,[e[1]||(e[1]=t("Open ")),n("a",m,[e[0]||(e[0]=t("Mainnet Wallet")),a(i)])])]),e[5]||(e[5]=n("li",null,[n("p",null,"Create a wallet: Account-->Add account (The mnemonic phrase must be saved, if the mnemonic phrase is lost, the account cannot be retrieved, and the currency is lost)")],-1)),n("li",null,[n("p",null,[e[3]||(e[3]=t("Go to ")),n("a",p,[e[2]||(e[2]=t("Galactic Race Machine List")),a(i)]),e[4]||(e[4]=t(" to find the corresponding type of idle machine"))])])]),e[11]||(e[11]=n("figure",null,[n("img",{src:s,alt:"find_machine",tabindex:"0",loading:"lazy"}),n("figcaption",null,"find_machine")],-1)),e[12]||(e[12]=n("h2",{id:"step-2-rent-a-machine-on-the-chain",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#step-2-rent-a-machine-on-the-chain","aria-hidden":"true"},"#"),t(" Step 2: Rent a machine on the chain")],-1)),n("ul",null,[e[8]||(e[8]=r("<li><p>Navigate to <code>Developer</code>---<code>Transactions</code>---<code>rentMachine</code> ----<code>rentMachine(machine_id, duration)</code></p></li><li><p><code>machine_id</code>: Enter the id of the machine to be rented, the <code>0x</code> in the input box must be deleted first</p></li><li><p><code>duration</code>: Enter the time to be rented (unit: 1 BlockNumber = 30 seconds )</p></li><li><p>After the input is complete, click Submit Transaction, and confirm whether the machine is available within 30 minutes. (If the lease is not confirmed within 30 minutes, the payment of <code>dbc</code> will be refunded, but the transaction fee of 10 <code>dbc</code> cannot be refunded)</p></li>",4)),n("li",null,[n("p",null,[e[7]||(e[7]=t("For related operations such as creating a virtual machine, please ")),n("a",u,[e[6]||(e[6]=t("reference")),a(i)])])])]),e[13]||(e[13]=r('<h2 id="step-3-confirm-availability-and-lease" tabindex="-1"><a class="header-anchor" href="#step-3-confirm-availability-and-lease" aria-hidden="true">#</a> Step 3: Confirm availability and lease</h2><div class="hint-container warning"><p class="hint-container-title">Note</p><p>Before confirming, you must confirm that the virtual machine can start normally. After confirming that the lease is successful, it means that the machine is successfully leased, and the DBC rent cannot be refunded</p></div><ul><li><p>Navigate to <code>Developer</code>----<code>Transactions</code>----<code>rentMachine</code>----<code>confirmRent(machine_id)</code></p></li><li><p>Enter the machine id and submit the transaction</p></li></ul><h2 id="step-4-relet-machine-rent" tabindex="-1"><a class="header-anchor" href="#step-4-relet-machine-rent" aria-hidden="true">#</a> Step 4: Relet Machine Rent</h2><div class="hint-container warning"><p class="hint-container-title">Note</p><p>The virtual machine will be automatically stopped when the machine expires to ensure that the lease is renewed successfully before the lease expires</p></div><ul><li><p>Navigate to <code>Developer</code>----<code>Transactions</code>----<code>rentMachine</code>----<code>reletMachine(machine_id, add_duration)</code></p></li><li><p>Enter the machine id and the number of days to renew the lease, and submit the transaction</p></li></ul>',6))])}const g=o(h,[["render",f],["__file","rent-machine.html.vue"]]);export{g as default};