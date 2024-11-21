import{_ as s,H as d,W as o,X as r,Y as t,Z as n,$ as a,a0 as l}from"./framework-0c0bf18e.js";const u={},c={href:"https://www.zabbix.com/documentation/5.0/zh/manual/appendix/protocols",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/DeepBrainChain/DBC-Wiki/blob/main/docs/en/install-and-update-dbc/dbc-monitor/DBC_Host_Templates.xml",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/DeepBrainChain/DBC-Wiki/blob/main/docs/en/install-and-update-dbc/dbc-monitor/DBC_Host_Templates.xml",target:"_blank",rel:"noopener noreferrer"};function b(h,e){const i=d("ExternalLinkIcon");return o(),r("div",null,[e[11]||(e[11]=t("h1",{id:"monitoring-protocol",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#monitoring-protocol","aria-hidden":"true"},"#"),n(" monitoring protocol")],-1)),e[12]||(e[12]=t("p",null,"Server - dbc data exchange is based on JSON format, Request and response messages must begin with header and data length.",-1)),t("p",null,[e[1]||(e[1]=n("This agreement and documentation mainly refer to ")),t("a",c,[e[0]||(e[0]=n("zabbix doc")),a(i)]),e[2]||(e[2]=n("."))]),e[13]||(e[13]=l(`<h2 id="header-和-data-length" tabindex="-1"><a class="header-anchor" href="#header-和-data-length" aria-hidden="true">#</a> header 和 data length</h2><p>The header is present in response and request messages between Zabbix components. It is required to determine the length of message, if it is compressed or not and the format of message length fields. The header consists of:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;HEADER&gt; - &quot;ZBXD\\x01&quot; (5 bytes)
&lt;DATALEN&gt; - data length (8 bytes). 1 will be formatted as 01/00/00/00/00/00/00/00 (eight bytes, 64 bit number in little-endian format)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="protocol-conversion-example" tabindex="-1"><a class="header-anchor" href="#protocol-conversion-example" aria-hidden="true">#</a> Protocol conversion example</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * @brief Convert JSON string to protocol data required by zabbix
 * @param json_data JSON format string
 *
 * @return A string that conforms to the zabbix protocol
 */
std::string formatJsonData(const std::string &amp;json_data) {
  std::string data = &quot;ZBXD\\x01&quot;;
  unsigned long long data_len = json_data.length();
  char* arrLen = reinterpret_cast&lt;char*&gt;(&amp;data_len);
  data.append(arrLen, 8);
  data.append(json_data);
  return data;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="data-exchange-process" tabindex="-1"><a class="header-anchor" href="#data-exchange-process" aria-hidden="true">#</a> data exchange process</h2><ol><li>dbc opens a TCP connection(Known server ip and port)；</li><li>dbc send protocol-compliant data(<code>&lt;HEADER&gt;&lt;DATALEN&gt;&lt;JSON&gt;</code>)；</li><li>server process the data and return the result；</li><li>dbc parse the returned result；</li><li>TCP connection is closed.</li></ol><h2 id="active-checks" tabindex="-1"><a class="header-anchor" href="#active-checks" aria-hidden="true">#</a> Active checks</h2><blockquote><p><code>request purpose</code>：dbc asks the server whether to receive monitoring data of a virtual machine</p><p><code>request body</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;HEADER&gt;&lt;DATALEN&gt;{
    &quot;request&quot;:&quot;active checks&quot;,
    // hostname represents the ID of the virtual machine
    &quot;host&quot;:&quot;&lt;hostname&gt;&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>request result example</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;HEADER&gt;&lt;DATALEN&gt;{
    &quot;response&quot;:&quot;success&quot;,
    // The data part is omitted, and no verification is performed for the time being
    &quot;data&quot;:[......]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="hint-container warning"><p class="hint-container-title">注意</p><p>The server must respond successfully. If the &quot;response&quot; field is &quot;success&quot;, it means success, otherwise it will be regarded as failure.</p></div><h2 id="send-collected-monitoring-data" tabindex="-1"><a class="header-anchor" href="#send-collected-monitoring-data" aria-hidden="true">#</a> Send collected monitoring data</h2><blockquote><p><code>request purpose</code>：dbc sends the collected virtual machine monitoring data to the server</p><p><code>request body</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;HEADER&gt;&lt;DATALEN&gt;{
    &quot;request&quot;:&quot;agent data&quot;,
    &quot;data&quot;:[
        {
            &quot;host&quot;:&quot;&lt;ID of the virtual machine&gt;&quot;,
            &quot;key&quot;:&quot;dom.state&quot;,
            &quot;value&quot;:&quot;running&quot;,
            &quot;clock&quot;:1400675595,
            &quot;ns&quot;:76808644,
        },
        ......
        {
            &quot;host&quot;:&quot;&lt;ID of the virtual machine&gt;&quot;,
            &quot;key&quot;:&quot;version&quot;,
            &quot;value&quot;:&quot;0.3.9.2&quot;,
            &quot;clock&quot;:1400675595,
            &quot;ns&quot;:77053975,
        }
    ],
    &quot;clock&quot;: 1400675595,
    &quot;ns&quot;: 78211329
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>request result example</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;HEADER&gt;&lt;DATALEN&gt;{
    &quot;response&quot;:&quot;success&quot;,
    // The info part is not checked
    &quot;info&quot;:&quot;processed: 3; failed: 0; total: 3; seconds spent: 0.003534&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="zabbix-server-settings" tabindex="-1"><a class="header-anchor" href="#zabbix-server-settings" aria-hidden="true">#</a> zabbix server settings</h2><p>If the server side wants to receive the data sent by dbc, it needs to do the following settings：</p>`,14)),t("ol",null,[t("li",null,[e[4]||(e[4]=n('Import the dbc item template "')),t("a",v,[e[3]||(e[3]=n("DBC VM Template")),a(i)]),e[5]||(e[5]=n('" in zabbix；'))]),e[9]||(e[9]=t("li",null,"Create a virtual machine；",-1)),t("li",null,[e[7]||(e[7]=n('Use the template "')),t("a",m,[e[6]||(e[6]=n("DBC VM Template")),a(i)]),e[8]||(e[8]=n('" to add a host in zabbix, fill in the id of the virtual machine for the host name；'))]),e[10]||(e[10]=t("li",null,"After the virtual machine is created, the monitoring data can be sent.",-1))])])}const g=s(u,[["render",b],["__file","monitoring-protocol.html.vue"]]);export{g as default};
