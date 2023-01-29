import{_ as e,V as a,W as i,$ as o}from"./framework-1d64dffd.js";const n="/assets/image-20210628174246842-65ef00ad.png",t="/assets/image-20210628173325854-ae124c96.png",r="/assets/image-20210628174652781-ed69f003.png",c="/assets/image-20210628174734910-00c959d5.png",d="/assets/2021-12-15_14-12-f4b677a6.png",s={},l=o('<h1 id="委员会处理租用人的报告" tabindex="-1"><a class="header-anchor" href="#委员会处理租用人的报告" aria-hidden="true">#</a> 委员会处理租用人的报告</h1><h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> TODO</h2><h3 id="补充质押" tabindex="-1"><a class="header-anchor" href="#补充质押" aria-hidden="true">#</a> 补充质押</h3><blockquote><p>机器第一次绑定时，质押绑定一张卡所需要的 DBC，当机器被委员会审核通过后，系统将根据委员会提交的信息（GPU 数）检查并增加卡数对应的质押。</p><p>此时，当质押不够时，机器 ID 将被放到<code>online_profile模块</code>--<code>live_machine</code>变量的<code>fulfilling_machine</code>字段中，表示需要<strong>补充质押</strong>，才能上线。</p></blockquote><p>补充质押的操作：</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="重新绑定" tabindex="-1"><a class="header-anchor" href="#重新绑定" aria-hidden="true">#</a> 重新绑定</h3><blockquote><p>当机器被委员会拒绝后，有 10 天的时间可以声明重新绑定。</p></blockquote><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="因故障声明机器下线" tabindex="-1"><a class="header-anchor" href="#因故障声明机器下线" aria-hidden="true">#</a> 因故障声明机器下线</h3><blockquote><p>当机器出现故障时，为了避免被举报，机器维护者需要及时声明<strong>机器下线</strong>，来及时处理机器问题。</p></blockquote><p>操作：<code>onlineProfile</code> -- <code>controllerReportOffline</code></p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="因故障声明下线后-声明机器上线" tabindex="-1"><a class="header-anchor" href="#因故障声明下线后-声明机器上线" aria-hidden="true">#</a> （因故障声明下线后）声明机器上线</h3><blockquote><p>当机器从故障中恢复后，需要及时声明机器上线。</p></blockquote><p>操作：<code>onlineProfile</code>--<code>controllerReportOnline</code></p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="下线修改机器配置-将会被重新进行验证" tabindex="-1"><a class="header-anchor" href="#下线修改机器配置-将会被重新进行验证" aria-hidden="true">#</a> 下线修改机器配置（将会被重新进行验证）</h3><p>操作： onlineProfile -- offlineMachineChangeHardwareInfo</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后执行： onlineProfile -- addMachineInfo 重新添加机器信息之后，将会被重新分配进行验证</p>',21),h=[l];function f(p,g){return a(),i("div",null,h)}const _=e(s,[["render",f],["__file","maintain-machine.html.vue"]]);export{_ as default};
