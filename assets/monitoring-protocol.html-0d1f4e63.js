import{_ as a,V as d,W as s,X as e,Y as n,Z as t,$ as l,F as o}from"./framework-1d64dffd.js";const r={},u=e("h1",{id:"监控数据交换协议",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#监控数据交换协议","aria-hidden":"true"},"#"),n(" 监控数据交换协议")],-1),c=e("p",null,"数据交换主要基于 JSON 格式，请求和相应消息必须以 header 和 data length 开头。",-1),v={href:"https://www.zabbix.com/documentation/5.0/zh/manual/appendix/protocols",target:"_blank",rel:"noopener noreferrer"},b=l(`<h2 id="header-和-data-length" tabindex="-1"><a class="header-anchor" href="#header-和-data-length" aria-hidden="true">#</a> header 和 data length</h2><p>Zabbix 组件之间的响应和请求消息中存在标头和数据长度。 需要确定消息的长度。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;HEADER&gt; - &quot;ZBXD\\x01&quot; (5 字节)
&lt;DATALEN&gt; - data length (8 字节). 1 被转换为 01/00/00/00/00/00/00/00 (8个字节，64位小端存储)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="协议转换示例" tabindex="-1"><a class="header-anchor" href="#协议转换示例" aria-hidden="true">#</a> 协议转换示例</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * @brief 将JSON字符串转换成zabbix需要的协议数据
 * @param json_data JSON格式字符串
 *
 * @return 符合zabbix协议的字符串
 */
std::string formatJsonData(const std::string &amp;json_data) {
  std::string data = &quot;ZBXD\\x01&quot;;
  unsigned long long data_len = json_data.length();
  char* arrLen = reinterpret_cast&lt;char*&gt;(&amp;data_len);
  data.append(arrLen, 8);
  data.append(json_data);
  return data;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据交换过程" tabindex="-1"><a class="header-anchor" href="#数据交换过程" aria-hidden="true">#</a> 数据交换过程</h2><ol><li>dbc 打开一个 TCP 连接(已知 server 的 ip 和端口)；</li><li>dbc 发送符合协议的数据(<code>&lt;HEADER&gt;&lt;DATALEN&gt;&lt;JSON&gt;</code>)；</li><li>server 处理数据并将结果返回；</li><li>dbc 解析返回的结果；</li><li>TCP 关闭连接。</li></ol><h2 id="主动检查" tabindex="-1"><a class="header-anchor" href="#主动检查" aria-hidden="true">#</a> 主动检查</h2><blockquote><p><code>请求目的</code>：dbc 向 server 端询问是否接收某个虚拟机的监控数据</p><p><code>请求body</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;HEADER&gt;&lt;DATALEN&gt;{
    &quot;request&quot;:&quot;active checks&quot;,
    // hostname 表示虚拟机的ID
    &quot;host&quot;:&quot;&lt;hostname&gt;&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>返回结果示例</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;HEADER&gt;&lt;DATALEN&gt;{
    &quot;response&quot;:&quot;success&quot;,
    // data部分省略，暂时不做校验
    &quot;data&quot;:[......]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="hint-container warning"><p class="hint-container-title">注意</p><p>server 必须响应成功。&quot;response&quot;字段为&quot;success&quot;表示成功，其他一律视为失败。</p></div><h2 id="发送收集的监控数据" tabindex="-1"><a class="header-anchor" href="#发送收集的监控数据" aria-hidden="true">#</a> 发送收集的监控数据</h2><blockquote><p><code>请求目的</code>：dbc 向 server 端询发送收集的虚拟机监控数据</p><p><code>请求body</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;HEADER&gt;&lt;DATALEN&gt;{
    &quot;request&quot;:&quot;agent data&quot;,
    &quot;data&quot;:[
        {
            &quot;host&quot;:&quot;&lt;虚拟机ID&gt;&quot;,
            &quot;key&quot;:&quot;dom.state&quot;,
            &quot;value&quot;:&quot;running&quot;,
            &quot;clock&quot;:1400675595,
            &quot;ns&quot;:76808644,
        },
        ......
        {
            &quot;host&quot;:&quot;&lt;虚拟机ID&gt;&quot;,
            &quot;key&quot;:&quot;version&quot;,
            &quot;value&quot;:&quot;0.3.9.2&quot;,
            &quot;clock&quot;:1400675595,
            &quot;ns&quot;:77053975,
        }
    ],
    &quot;clock&quot;: 1400675595,
    &quot;ns&quot;: 78211329
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>返回结果示例</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;HEADER&gt;&lt;DATALEN&gt;{
    &quot;response&quot;:&quot;success&quot;,
    // info部分不做校验
    &quot;info&quot;:&quot;processed: 3; failed: 0; total: 3; seconds spent: 0.003534&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="zabbix-server-设置" tabindex="-1"><a class="header-anchor" href="#zabbix-server-设置" aria-hidden="true">#</a> zabbix server 设置</h2><p>server 端若想接收 dbc 发送的数据，需要做到以下设置：</p>`,14),m={href:"https://github.com/DeepBrainChain/DBC-Wiki/blob/main/docs/install-update-dbc-node/dbc-monitor/DBC_Host_Templates.xml",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,"创建虚拟机；",-1),q={href:"https://github.com/DeepBrainChain/DBC-Wiki/blob/main/docs/install-update-dbc-node/dbc-monitor/DBC_Host_Templates.xml",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,"等待虚拟机创建完成后即可发送监控数据。",-1);function g(x,_){const i=o("ExternalLinkIcon");return d(),s("div",null,[u,c,e("p",null,[n("本协议和文档主要参考"),e("a",v,[n("zabbix doc"),t(i)]),n("。")]),b,e("ol",null,[e("li",null,[n('在 zabbix 中导入 dbc 监控项模板"'),e("a",m,[n("DBC VM Template"),t(i)]),n('"；')]),h,e("li",null,[n('在 zabbix 中使用模板"'),e("a",q,[n("DBC VM Template"),t(i)]),n('"添加主机，主机名称填写虚拟机的 task id；')]),p])])}const f=a(r,[["render",g],["__file","monitoring-protocol.html.vue"]]);export{f as default};