import{_ as e,W as a,X as n,a0 as s}from"./framework-5cecf6de.js";const i={},d=s(`<h1 id="网吧配置" tabindex="-1"><a class="header-anchor" href="#网吧配置" aria-hidden="true">#</a> 网吧配置</h1><h2 id="display设置" tabindex="-1"><a class="header-anchor" href="#display设置" aria-hidden="true">#</a> display设置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#创建</span>
display.exe /d <span class="token number">0</span> 1920_1080_165.hex

<span class="token comment">#删除</span>
display.exe /c <span class="token parameter variable">-1</span>

<span class="token comment">#store.dat配置</span>
client %appdata%
<span class="token punctuation">[</span>lab<span class="token punctuation">]</span>
<span class="token assign-left variable">host_silent</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">mpo</span><span class="token operator">=</span><span class="token number">1</span> （2k240以上必须要开）


<span class="token comment">#黑边问题</span>
增加配置 可以设置是否等比例缩放

<span class="token comment">#Windows水印问题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fps丢包测试" tabindex="-1"><a class="header-anchor" href="#fps丢包测试" aria-hidden="true">#</a> fps丢包测试</h2><div class="language-shel line-numbers-mode" data-ext="shel"><pre class="language-shel"><code>https://github.com/GameTechDev/PresentMon/releases/download/v1.9.2/PresentMon-1.9.2-x64.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="gpu模式" tabindex="-1"><a class="header-anchor" href="#gpu模式" aria-hidden="true">#</a> GPU模式</h2><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>NVIDIA 控制面板 -----&gt; power manager高性能模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="网络测试" tabindex="-1"><a class="header-anchor" href="#网络测试" aria-hidden="true">#</a> 网络测试</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>fping <span class="token parameter variable">-p</span> <span class="token number">5</span> <span class="token parameter variable">-b</span> <span class="token number">1000</span> <span class="token parameter variable">-l</span> server_ip/client_ip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="设置" tabindex="-1"><a class="header-anchor" href="#设置" aria-hidden="true">#</a> 设置</h2><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>【客户端】
稳定的2.9GHz
GPU 最少750MHz 关闭 bios 系统的节电模式
pcie关闭

debug_wnd=1
network
encode 
max越大有问题 10000以上问题大 Nvidia主频起不来


参数capture speed 跟画面复杂度有关


ipmi 调度请求 用户开关机 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="颜色问题" tabindex="-1"><a class="header-anchor" href="#颜色问题" aria-hidden="true">#</a> 颜色问题</h2><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>cmd color 13 14
然后使用取色器对比 RGB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="鼠标设置问题" tabindex="-1"><a class="header-anchor" href="#鼠标设置问题" aria-hidden="true">#</a> 鼠标设置问题</h2><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>监控服务端鼠标设置，当服务端鼠标设置改变，则同步到client （通过deeplink通道）

增加
%binpath% local.black
[black]
list=valorant.exe 


设置两端鼠标加速度一致
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="音响设置" tabindex="-1"><a class="header-anchor" href="#音响设置" aria-hidden="true">#</a> 音响设置</h2><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>增加多通道，
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),l=[d];function r(c,t){return a(),n("div",null,l)}const u=e(i,[["render",r],["__file","网吧配置.html.vue"]]);export{u as default};
