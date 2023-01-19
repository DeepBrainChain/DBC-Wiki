import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o,c as d,b as e,d as i,e as t,a as r}from"./app.38166bb6.js";const l={},c=e("h1",{id:"monitoring-protocol",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#monitoring-protocol","aria-hidden":"true"},"#"),t(" monitoring protocol")],-1),u=e("p",null,"Server - dbc data exchange is based on JSON format, Request and response messages must begin with header and data length.",-1),v=t("This agreement and documentation mainly refer to "),m={href:"https://www.zabbix.com/documentation/5.0/zh/manual/appendix/protocols",target:"_blank",rel:"noopener noreferrer"},h=t("zabbix doc"),b=t("."),p=r(`<h2 id="header-\u548C-data-length" tabindex="-1"><a class="header-anchor" href="#header-\u548C-data-length" aria-hidden="true">#</a> header \u548C data length</h2><p>The header is present in response and request messages between Zabbix components. It is required to determine the length of message, if it is compressed or not and the format of message length fields. The header consists of:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;HEADER&gt; - &quot;ZBXD\\x01&quot; (5 bytes)
&lt;DATALEN&gt; - data length (8 bytes). 1 will be formatted as 01/00/00/00/00/00/00/00 (eight bytes, 64 bit number in little-endian format)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="protocol-conversion-example" tabindex="-1"><a class="header-anchor" href="#protocol-conversion-example" aria-hidden="true">#</a> Protocol conversion example</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="data-exchange-process" tabindex="-1"><a class="header-anchor" href="#data-exchange-process" aria-hidden="true">#</a> data exchange process</h2><ol><li>dbc opens a TCP connection(Known server ip and port)\uFF1B</li><li>dbc send protocol-compliant data(<code>&lt;HEADER&gt;&lt;DATALEN&gt;&lt;JSON&gt;</code>)\uFF1B</li><li>server process the data and return the result\uFF1B</li><li>dbc parse the returned result\uFF1B</li><li>TCP connection is closed.</li></ol><h2 id="active-checks" tabindex="-1"><a class="header-anchor" href="#active-checks" aria-hidden="true">#</a> Active checks</h2><blockquote><p><code>request purpose</code>\uFF1Adbc asks the server whether to receive monitoring data of a virtual machine</p><p><code>request body</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;HEADER&gt;&lt;DATALEN&gt;{
    &quot;request&quot;:&quot;active checks&quot;,
    // hostname represents the ID of the virtual machine
    &quot;host&quot;:&quot;&lt;hostname&gt;&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>request result example</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;HEADER&gt;&lt;DATALEN&gt;{
    &quot;response&quot;:&quot;success&quot;,
    // The data part is omitted, and no verification is performed for the time being
    &quot;data&quot;:[......]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>The server must respond successfully. If the &quot;response&quot; field is &quot;success&quot;, it means success, otherwise it will be regarded as failure.</p></div><h2 id="send-collected-monitoring-data" tabindex="-1"><a class="header-anchor" href="#send-collected-monitoring-data" aria-hidden="true">#</a> Send collected monitoring data</h2><blockquote><p><code>request purpose</code>\uFF1Adbc sends the collected virtual machine monitoring data to the server</p><p><code>request body</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;HEADER&gt;&lt;DATALEN&gt;{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>request result example</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;HEADER&gt;&lt;DATALEN&gt;{
    &quot;response&quot;:&quot;success&quot;,
    // The info part is not checked
    &quot;info&quot;:&quot;processed: 3; failed: 0; total: 3; seconds spent: 0.003534&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="zabbix-server-settings" tabindex="-1"><a class="header-anchor" href="#zabbix-server-settings" aria-hidden="true">#</a> zabbix server settings</h2><p>If the server side wants to receive the data sent by dbc, it needs to do the following settings\uFF1A</p>`,14),g=t('Import the dbc item template "'),q={href:"https://github.com/DeepBrainChain/DBC-Wiki/blob/main/docs/en/install-and-update-dbc/dbc-monitor/DBC_Host_Templates.xml",target:"_blank",rel:"noopener noreferrer"},_=t("DBC VM Template"),x=t('" in zabbix\uFF1B'),f=e("li",null,"Create a virtual machine\uFF1B",-1),D=t('Use the template "'),k={href:"https://github.com/DeepBrainChain/DBC-Wiki/blob/main/docs/en/install-and-update-dbc/dbc-monitor/DBC_Host_Templates.xml",target:"_blank",rel:"noopener noreferrer"},A=t("DBC VM Template"),E=t('" to add a host in zabbix, fill in the id of the virtual machine for the host name\uFF1B'),T=e("li",null,"After the virtual machine is created, the monitoring data can be sent.",-1);function N(w,B){const n=a("ExternalLinkIcon");return o(),d("div",null,[c,u,e("p",null,[v,e("a",m,[h,i(n)]),b]),p,e("ol",null,[e("li",null,[g,e("a",q,[_,i(n)]),x]),f,e("li",null,[D,e("a",k,[A,i(n)]),E]),T])])}var z=s(l,[["render",N],["__file","monitoring-protocol.html.vue"]]);export{z as default};
