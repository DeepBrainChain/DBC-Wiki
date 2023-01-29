import{_ as o,V as r,W as t,X as e,Y as n,Z as c,$ as a,F as d}from"./framework-1d64dffd.js";const s="/DBC-Wiki/assets/1-806427c3.png",l="/DBC-Wiki/assets/2-928ae9e9.png",h={},p=a('<h1 id="机器下链步骤" tabindex="-1"><a class="header-anchor" href="#机器下链步骤" aria-hidden="true">#</a> 机器下链步骤</h1><div class="hint-container warning"><p class="hint-container-title">注意！</p><p>⚠️ 不正确的下线可能会导致质押被惩罚！</p></div><p>机器下线分为 <code>因故障下线</code>和<code>因需要改变配置而下线</code>两种情况。</p><ul><li>因故障下线</li></ul><ol><li><p>若机器<strong>出现故障</strong>，为了避免被租用人举报而产生惩罚，需要使用机器控制账户向链上报告机器下线以处理故障。故障处理完成后，可以再向链上报告上线。</p></li><li><p>若机器需要<strong>永久下线</strong>，可以由控制账户向链上报告机器下线。</p></li></ol><ul><li>因需要改变配置而下线</li></ul><p>当机器配置变更，为了使线上线下配置一致，避免被举报而产生惩罚，机器需要主动报告来请求变更配置。这时候，机器将会被随机分派给验证人，来提交新的机器配置到链上。</p><h2 id="机器因故障下线" tabindex="-1"><a class="header-anchor" href="#机器因故障下线" aria-hidden="true">#</a> 机器因故障下线</h2>',8),f={href:"https://deepbrainchain.github.io/DBC-Wiki/onchain-guide/machine-slash-model.html#_1-%E7%AE%97%E5%B7%A5%E4%B8%BB%E5%8A%A8%E5%8F%91%E9%80%81%E4%B8%8B%E7%BA%BF%E9%80%9A%E7%9F%A5%E6%97%B6",target:"_blank",rel:"noopener noreferrer"},g=a('<p>下线时长及空闲时长（距上一次租用结束）对惩罚额度有影响。<strong>空闲超过 10 天，下线后不会产生惩罚。机器的质押，可以在距离第一次上线 365 天之后申请退回</strong></p><p>下线后，可以再上线/或者永久下线。如果超过 10 天没有上线，将会按下线 10 天的情况进行处理。</p><h3 id="下线链上操作" tabindex="-1"><a class="header-anchor" href="#下线链上操作" aria-hidden="true">#</a> 下线链上操作</h3><p>到开发者--交易，选择<code>控制账户</code>，执行<code>onlineProfile</code>模块的<code>controllerReportOffline</code>方法。如下图：</p><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="下线后上线链上操作" tabindex="-1"><a class="header-anchor" href="#下线后上线链上操作" aria-hidden="true">#</a> 下线后上线链上操作</h3><p>到开发者--交易，选择<code>控制账户</code>，执行<code>onlineProfile</code>模块的<code>controllerReportOnline</code>方法。如下图：</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="机器因需要改变配置而下线" tabindex="-1"><a class="header-anchor" href="#机器因需要改变配置而下线" aria-hidden="true">#</a> 机器因需要改变配置而下线</h2><p>TODO</p>',10);function _(u,m){const i=d("ExternalLinkIcon");return r(),t("div",null,[p,e("p",null,[n("根据机器的状态（被租用|空闲），下线会产生不同的惩罚。惩罚额度参考"),e("a",f,[n("算工主动发送下线通知时"),c(i)])]),g])}const E=o(h,[["render",_],["__file","unbonding-machine.html.vue"]]);export{E as default};
