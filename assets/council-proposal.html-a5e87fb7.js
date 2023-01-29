import{_ as r,V as i,W as n,X as e,Y as a,Z as p,$ as t,F as s}from"./framework-1d64dffd.js";const c="/assets/2022-04-25_15-40-34953a9a.png",d="/assets/2022-04-25_15-46-4b806a64.png",l="/assets/2022-04-25_15-56-4918f2af.png",h="/assets/2022-04-25_15-59-d8ff4867.png",u="/assets/2022-04-25_16-00-f7343a9b.png",f={},_=t('<h1 id="议员提案流程" tabindex="-1"><a class="header-anchor" href="#议员提案流程" aria-hidden="true">#</a> 议员提案流程</h1><h2 id="_1-提交原像" tabindex="-1"><a class="header-anchor" href="#_1-提交原像" aria-hidden="true">#</a> 1. 提交原像</h2><p>本文以强制转账为例，进行说明。其他调用类似。</p><p>打开网页钱包，导航到&quot;治理&quot;--&quot;民主权利&quot;--&quot;提交原像&quot;，在如下图所示的弹出页面种，选择强制转账的函数调用。</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如图表示，强制从 Ferdie 转账 10 个 token 到 Alice。</p><p>注意，<strong>需要复制下预像 Hash</strong>: <code>0x979ddf9929842c722db89e63a5ad45fcad47bcd8d1a7dea6d1a57a9d5dd26fa0</code></p><h2 id="_2-提交外部议案" tabindex="-1"><a class="header-anchor" href="#_2-提交外部议案" aria-hidden="true">#</a> 2. 提交外部议案</h2><p>导航到&quot;开发者&quot;--&quot;交易&quot;, 使用议会成员 Alice (普通帐号没有权限调用 council_propose)。</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>阈值 threshold 表示通过下面的调用需要委员会同意的个数，该阈值需要根据 democracy 的方法来决定。最后再填写。</p><p>选择 democracy 下的 外部议案（externalPropose），外部默认通过的议案（externalProposeDefault）或者 externalProposeMajority 三者之一，</p><p>它们区别在于需要议会同意的个数及随后进行公投的通过条件不同:</p><ol><li><p>议会同意的个数不同。externalPropose 需要&gt;=1/2 同意；externalProposeDefault 需要 1/1 同意；externalProposeMajority 需要&gt;=3/4 委员会同意。</p></li><li><p>这三个不同的委员会通过条件，对应着全民公投的通过条件的难易。</p></li></ol><p>externalPropose 需要 Super Majority approve 的全民公投</p><p>externalProposeDefault 需要 Super Majority Against 的全民公投</p><p>externalProposeMajority 需要 Simple Majority 的全民公投</p>',17),g={href:"https://deepbrainchain.github.io/DBC-Wiki/dbc-democracy/voting-referenda.html#_3-%E7%BB%93%E6%9E%9C%E5%88%A4%E5%AE%9A%E6%96%B9%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},x=t('<h2 id="_3-委员会投票" tabindex="-1"><a class="header-anchor" href="#_3-委员会投票" aria-hidden="true">#</a> 3. 委员会投票</h2><p>在上图中，我们选择 externalProposeMajority 这个方法，它需要&gt;=3/4 的委员会同意。在本次测试中，议会共有 6 名成员，因此，6*3/4 =4.5，我们至少需要 5 名委员会通过才能满足条件。因此我们阈值设置为 5.</p><p>提交后，我们可以在&quot;治理&quot;--&quot;议会&quot;--&quot;Motions&quot;下看到我们提交的议案。</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>现在可以提交给委员会议案说明并号召委员会对该议案进行投票。</p><p>投票完成后，我们点击右边的”关闭“</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_4-等待进入公投" tabindex="-1"><a class="header-anchor" href="#_4-等待进入公投" aria-hidden="true">#</a> 4.等待进入公投</h2><p>完成上述步骤后，我们可以在”治理“--&quot;民主权利&quot;这里找到我们的议案，正在等待进入全民公投。</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="进入公投的时间" tabindex="-1"><a class="header-anchor" href="#进入公投的时间" aria-hidden="true">#</a> 进入公投的时间</h3><p>当既有提案，又有外部提案时，外部提案先进入全民公投</p>',12);function m(b,E){const o=s("ExternalLinkIcon");return i(),n("div",null,[_,e("p",null,[a("全民公投通过的通过条件计算公式具体参考："),e("a",g,[a("https://deepbrainchain.github.io/DBC-Wiki/dbc-democracy/voting-referenda.html#_3-%E7%BB%93%E6%9E%9C%E5%88%A4%E5%AE%9A%E6%96%B9%E5%BC%8F"),p(o)])]),x])}const y=r(f,[["render",m],["__file","council-proposal.html.vue"]]);export{y as default};