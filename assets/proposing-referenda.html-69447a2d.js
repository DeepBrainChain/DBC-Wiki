import{_ as o,H as s,W as d,X as p,a0 as a,Y as e,Z as t,$ as r}from"./framework-2c7d842c.js";const g="/DBC-Wiki/assets/1-9d353081.png",l="/DBC-Wiki/assets/2-5d67d8c9.png",f="/DBC-Wiki/assets/3-66d53232.png",c="/DBC-Wiki/assets/4-63cc9597.png",m="/DBC-Wiki/assets/5-c07fdb92.png",u="/DBC-Wiki/assets/6-97df673a.png",_="/DBC-Wiki/assets/7-79000d30.png",h="/DBC-Wiki/assets/8-df9abe48.png",k={},b={href:"https://www.reddit.com/r/DBC_Council/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://mp.weixin.qq.com/s/K3_ISFO2Zhi5Uh3s07rWUQ",target:"_blank",rel:"noopener noreferrer"},w={href:"https://wiki.polkadot.network/docs/learn-governance#referenda",target:"_blank",rel:"noopener noreferrer"},B={href:"https://wiki.polkadot.network/docs/maintain-guides-democracy",target:"_blank",rel:"noopener noreferrer"};function C(D,i){const n=s("ExternalLinkIcon");return d(),p("div",null,[i[8]||(i[8]=a('<h1 id="教程-如何在-dbc-主网发起公投" tabindex="-1"><a class="header-anchor" href="#教程-如何在-dbc-主网发起公投" aria-hidden="true">#</a> 教程 | 如何在 DBC 主网发起公投</h1><p>公投是大众对议案进行公开投票。治理决策由一个议案开始，经过大众公投后成立。这里的议案可以是用户无法直接触及的一组特权函数的任意一个，比如设置账户余额、强制转账、银河竞赛激活的 GPU 数量、GPU 算力值价格等等。公投的议案可以来自公众公开提交、理事会提交等，这里我们主要介绍公众如何发起一项公投。</p><p>任何人都可以通过在一定时期内存入最低金额的 DBC 来发起一项公投，整个流程主要涉及【提交原像】-【提交议案】-【议案获得最多附议】-【进入公投】。</p><h2 id="_1-提交原像" tabindex="-1"><a class="header-anchor" href="#_1-提交原像" aria-hidden="true">#</a> 1. 提交原像</h2><p>在提交议案前，发起人需要先提交原像。</p><p>点击【提交原像】</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>根据你的提案内容选择 system，填入相关参数，然后复制预像哈希</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>例如，如果有个人想发起一笔强制转账，那么他需要在 system 处选择“balances”，并填入随之出现的参数，然后复制预像哈希。</p><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2-提交议案" tabindex="-1"><a class="header-anchor" href="#_2-提交议案" aria-hidden="true">#</a> 2. 提交议案</h2><p>在提交原像后，选择【提交议案】，并将上一部复制的预像哈希粘贴在此处。</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>提交议案后，你就可以在【提案】部分看到你的议案了</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',16)),e("p",null,[i[1]||(i[1]=t("同时你也可以把更详细的议案内容发布至我们的 reddit 社区 ")),e("a",b,[i[0]||(i[0]=t("https://www.reddit.com/r/DBC_Council/")),r(n)])]),i[9]||(i[9]=a('<h2 id="_3-附议议案" tabindex="-1"><a class="header-anchor" href="#_3-附议议案" aria-hidden="true">#</a> 3. 附议议案</h2><p>每 28 天，只有一个来自公众的议案可以进入公投环节，即获得【附议】最多的议案。如果你支持某个议案并愿意通过锁定一定数量的 dbc 帮助其更快进入公投环节，即可使用【附议】功能。锁定的 dbc 会在议案进入公投时解锁。</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>操作成功后，这里就会出现你的附议</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_4-关于治理机制的扩展阅读" tabindex="-1"><a class="header-anchor" href="#_4-关于治理机制的扩展阅读" aria-hidden="true">#</a> 4.关于治理机制的扩展阅读</h2><p>DBC 主网是基于波卡 substrate 开发的，治理机制与波卡类似。想了解更多关于治理机制的内容可以阅读：</p>',8)),e("p",null,[e("a",x,[i[2]||(i[2]=t("https://mp.weixin.qq.com/s/K3_ISFO2Zhi5Uh3s07rWUQ")),r(n)]),i[3]||(i[3]=t(" （中文）"))]),e("p",null,[e("a",w,[i[4]||(i[4]=t("https://wiki.polkadot.network/docs/learn-governance#referenda")),r(n)]),i[5]||(i[5]=t(" （英文）"))]),e("p",null,[e("a",B,[i[6]||(i[6]=t("https://wiki.polkadot.network/docs/maintain-guides-democracy")),r(n)]),i[7]||(i[7]=t(" （英文）"))])])}const W=o(k,[["render",C],["__file","proposing-referenda.html.vue"]]);export{W as default};