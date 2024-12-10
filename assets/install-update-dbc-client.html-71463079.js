import{_ as s,H as o,W as r,X as a,Y as n,Z as t,$ as i}from"./framework-2c7d842c.js";const d="/DBC-Wiki/assets/install_dbc_client-ed228abe.png",u="/DBC-Wiki/assets/update_dbc_client-62606348.png",c={},p={href:"http://112.192.16.27:9000/dbc/install_update_script/mainnet/install_client.sh",target:"_blank",rel:"noopener noreferrer"},h={href:"http://112.192.16.27:9000/dbc/install_update_script/mainnet/update_client.sh",target:"_blank",rel:"noopener noreferrer"};function m(b,e){const l=o("ExternalLinkIcon");return r(),a("div",null,[e[9]||(e[9]=n("h1",{id:"install-and-update-dbc-client-node",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#install-and-update-dbc-client-node","aria-hidden":"true"},"#"),t(" Install And Update DBC Client Node")],-1)),e[10]||(e[10]=n("ul",null,[n("li",null,"The DBC client node acts as the identity of the trustee in the entire network, and can query the machine where the function node is correctly deployed in the current network. When the function node is deployed, you can request the client node through http to check whether your function node is successfully connected to the client node. When the machine ID of your function node can be successfully seen through the client request, it means that you have successfully deployed the function node."),n("li",null,"Suggestion: Since the official client nodes cannot remain stable online forever, it is recommended that each mining pool set up two client nodes as a backup, and at the same time, it can also strengthen the DBC network."),n("li",null,"Tip: The client node has very low requirements for hardware equipment. Any public network server that can run normally can be built(container mode can also be used), and the memory is very small, as long as it can be accessed through the public network.")],-1)),e[11]||(e[11]=n("h2",{id:"一-install-dbc-client",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一-install-dbc-client","aria-hidden":"true"},"#"),t(" (一) Install DBC Client")],-1)),n("ul",null,[e[2]||(e[2]=n("li",null,[n("p",null,[n("strong",null,"install environment")]),n("p",null,[n("code",null,"sudo apt-get install libvirt-clients libvirt-daemon-system expect -y")])],-1)),n("li",null,[e[1]||(e[1]=n("p",null,[n("strong",null,"download install script：")],-1)),n("p",null,[n("a",p,[e[0]||(e[0]=t("http://112.192.16.27:9000/dbc/install_update_script/mainnet/install_client.sh")),i(l)])])]),e[3]||(e[3]=n("li",null,[n("p",null,[n("strong",null,"add executable permission：")]),n("p",null,[n("code",null,"chmod +x install_client.sh")])],-1)),e[4]||(e[4]=n("li",null,[n("p",null,[n("strong",null,"run the script:")]),n("p",null,[n("code",null,"./install_client.sh [install_dir]")]),n("p",null,[t("During the installation process, you need to input two listen port: "),n("img",{src:d,width:"500",height:"260",align:"center"})])],-1))]),e[12]||(e[12]=n("br",null,null,-1)),e[13]||(e[13]=n("h2",{id:"二-update-dbc-client",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二-update-dbc-client","aria-hidden":"true"},"#"),t(" (二) Update DBC Client")],-1)),n("ul",null,[n("li",null,[e[6]||(e[6]=n("p",null,[n("strong",null,"download update client script：")],-1)),n("p",null,[n("a",h,[e[5]||(e[5]=t("http://112.192.16.27:9000/dbc/install_update_script/mainnet/update_client.sh")),i(l)])])]),e[7]||(e[7]=n("li",null,[n("p",null,[n("strong",null,"add executable permission：")]),n("p",null,[n("code",null,"chmod +x update_client.sh")])],-1)),e[8]||(e[8]=n("li",null,[n("p",null,[n("strong",null,"run the script:")]),n("p",null,[n("code",null,"./update_client.sh [install_dir]")]),n("img",{src:u,width:"500",height:"260",align:"center"})],-1))])])}const g=s(c,[["render",m],["__file","install-update-dbc-client.html.vue"]]);export{g as default};