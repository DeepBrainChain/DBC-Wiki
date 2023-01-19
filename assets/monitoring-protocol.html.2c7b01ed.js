import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as d,o as s,c as l,b as e,d as t,e as n,a as o}from"./app.38166bb6.js";const r={},c=e("h1",{id:"\u76D1\u63A7\u6570\u636E\u4EA4\u6362\u534F\u8BAE",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u76D1\u63A7\u6570\u636E\u4EA4\u6362\u534F\u8BAE","aria-hidden":"true"},"#"),n(" \u76D1\u63A7\u6570\u636E\u4EA4\u6362\u534F\u8BAE")],-1),u=e("p",null,"\u6570\u636E\u4EA4\u6362\u4E3B\u8981\u57FA\u4E8E JSON \u683C\u5F0F\uFF0C\u8BF7\u6C42\u548C\u76F8\u5E94\u6D88\u606F\u5FC5\u987B\u4EE5 header \u548C data length \u5F00\u5934\u3002",-1),v=n("\u672C\u534F\u8BAE\u548C\u6587\u6863\u4E3B\u8981\u53C2\u8003"),b={href:"https://www.zabbix.com/documentation/5.0/zh/manual/appendix/protocols",target:"_blank",rel:"noopener noreferrer"},m=n("zabbix doc"),h=n("\u3002"),q=o(`<h2 id="header-\u548C-data-length" tabindex="-1"><a class="header-anchor" href="#header-\u548C-data-length" aria-hidden="true">#</a> header \u548C data length</h2><p>Zabbix \u7EC4\u4EF6\u4E4B\u95F4\u7684\u54CD\u5E94\u548C\u8BF7\u6C42\u6D88\u606F\u4E2D\u5B58\u5728\u6807\u5934\u548C\u6570\u636E\u957F\u5EA6\u3002 \u9700\u8981\u786E\u5B9A\u6D88\u606F\u7684\u957F\u5EA6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;HEADER&gt; - &quot;ZBXD\\x01&quot; (5 \u5B57\u8282)
&lt;DATALEN&gt; - data length (8 \u5B57\u8282). 1 \u88AB\u8F6C\u6362\u4E3A 01/00/00/00/00/00/00/00 (8\u4E2A\u5B57\u8282\uFF0C64\u4F4D\u5C0F\u7AEF\u5B58\u50A8)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u534F\u8BAE\u8F6C\u6362\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u534F\u8BAE\u8F6C\u6362\u793A\u4F8B" aria-hidden="true">#</a> \u534F\u8BAE\u8F6C\u6362\u793A\u4F8B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * @brief \u5C06JSON\u5B57\u7B26\u4E32\u8F6C\u6362\u6210zabbix\u9700\u8981\u7684\u534F\u8BAE\u6570\u636E
 * @param json_data JSON\u683C\u5F0F\u5B57\u7B26\u4E32
 *
 * @return \u7B26\u5408zabbix\u534F\u8BAE\u7684\u5B57\u7B26\u4E32
 */
std::string formatJsonData(const std::string &amp;json_data) {
  std::string data = &quot;ZBXD\\x01&quot;;
  unsigned long long data_len = json_data.length();
  char* arrLen = reinterpret_cast&lt;char*&gt;(&amp;data_len);
  data.append(arrLen, 8);
  data.append(json_data);
  return data;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6570\u636E\u4EA4\u6362\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u4EA4\u6362\u8FC7\u7A0B" aria-hidden="true">#</a> \u6570\u636E\u4EA4\u6362\u8FC7\u7A0B</h2><ol><li>dbc \u6253\u5F00\u4E00\u4E2A TCP \u8FDE\u63A5(\u5DF2\u77E5 server \u7684 ip \u548C\u7AEF\u53E3)\uFF1B</li><li>dbc \u53D1\u9001\u7B26\u5408\u534F\u8BAE\u7684\u6570\u636E(<code>&lt;HEADER&gt;&lt;DATALEN&gt;&lt;JSON&gt;</code>)\uFF1B</li><li>server \u5904\u7406\u6570\u636E\u5E76\u5C06\u7ED3\u679C\u8FD4\u56DE\uFF1B</li><li>dbc \u89E3\u6790\u8FD4\u56DE\u7684\u7ED3\u679C\uFF1B</li><li>TCP \u5173\u95ED\u8FDE\u63A5\u3002</li></ol><h2 id="\u4E3B\u52A8\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u52A8\u68C0\u67E5" aria-hidden="true">#</a> \u4E3B\u52A8\u68C0\u67E5</h2><blockquote><p><code>\u8BF7\u6C42\u76EE\u7684</code>\uFF1Adbc \u5411 server \u7AEF\u8BE2\u95EE\u662F\u5426\u63A5\u6536\u67D0\u4E2A\u865A\u62DF\u673A\u7684\u76D1\u63A7\u6570\u636E</p><p><code>\u8BF7\u6C42body</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;HEADER&gt;&lt;DATALEN&gt;{
    &quot;request&quot;:&quot;active checks&quot;,
    // hostname \u8868\u793A\u865A\u62DF\u673A\u7684ID
    &quot;host&quot;:&quot;&lt;hostname&gt;&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>\u8FD4\u56DE\u7ED3\u679C\u793A\u4F8B</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;HEADER&gt;&lt;DATALEN&gt;{
    &quot;response&quot;:&quot;success&quot;,
    // data\u90E8\u5206\u7701\u7565\uFF0C\u6682\u65F6\u4E0D\u505A\u6821\u9A8C
    &quot;data&quot;:[......]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>server \u5FC5\u987B\u54CD\u5E94\u6210\u529F\u3002&quot;response&quot;\u5B57\u6BB5\u4E3A&quot;success&quot;\u8868\u793A\u6210\u529F\uFF0C\u5176\u4ED6\u4E00\u5F8B\u89C6\u4E3A\u5931\u8D25\u3002</p></div><h2 id="\u53D1\u9001\u6536\u96C6\u7684\u76D1\u63A7\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u6536\u96C6\u7684\u76D1\u63A7\u6570\u636E" aria-hidden="true">#</a> \u53D1\u9001\u6536\u96C6\u7684\u76D1\u63A7\u6570\u636E</h2><blockquote><p><code>\u8BF7\u6C42\u76EE\u7684</code>\uFF1Adbc \u5411 server \u7AEF\u8BE2\u53D1\u9001\u6536\u96C6\u7684\u865A\u62DF\u673A\u76D1\u63A7\u6570\u636E</p><p><code>\u8BF7\u6C42body</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;HEADER&gt;&lt;DATALEN&gt;{
    &quot;request&quot;:&quot;agent data&quot;,
    &quot;data&quot;:[
        {
            &quot;host&quot;:&quot;&lt;\u865A\u62DF\u673AID&gt;&quot;,
            &quot;key&quot;:&quot;dom.state&quot;,
            &quot;value&quot;:&quot;running&quot;,
            &quot;clock&quot;:1400675595,
            &quot;ns&quot;:76808644,
        },
        ......
        {
            &quot;host&quot;:&quot;&lt;\u865A\u62DF\u673AID&gt;&quot;,
            &quot;key&quot;:&quot;version&quot;,
            &quot;value&quot;:&quot;0.3.9.2&quot;,
            &quot;clock&quot;:1400675595,
            &quot;ns&quot;:77053975,
        }
    ],
    &quot;clock&quot;: 1400675595,
    &quot;ns&quot;: 78211329
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>\u8FD4\u56DE\u7ED3\u679C\u793A\u4F8B</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;HEADER&gt;&lt;DATALEN&gt;{
    &quot;response&quot;:&quot;success&quot;,
    // info\u90E8\u5206\u4E0D\u505A\u6821\u9A8C
    &quot;info&quot;:&quot;processed: 3; failed: 0; total: 3; seconds spent: 0.003534&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="zabbix-server-\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#zabbix-server-\u8BBE\u7F6E" aria-hidden="true">#</a> zabbix server \u8BBE\u7F6E</h2><p>server \u7AEF\u82E5\u60F3\u63A5\u6536 dbc \u53D1\u9001\u7684\u6570\u636E\uFF0C\u9700\u8981\u505A\u5230\u4EE5\u4E0B\u8BBE\u7F6E\uFF1A</p>`,14),p=n('\u5728 zabbix \u4E2D\u5BFC\u5165 dbc \u76D1\u63A7\u9879\u6A21\u677F"'),g={href:"https://github.com/DeepBrainChain/DBC-Wiki/blob/main/docs/install-update-dbc-node/dbc-monitor/DBC_Host_Templates.xml",target:"_blank",rel:"noopener noreferrer"},_=n("DBC VM Template"),x=n('"\uFF1B'),f=e("li",null,"\u521B\u5EFA\u865A\u62DF\u673A\uFF1B",-1),D=n('\u5728 zabbix \u4E2D\u4F7F\u7528\u6A21\u677F"'),E={href:"https://github.com/DeepBrainChain/DBC-Wiki/blob/main/docs/install-update-dbc-node/dbc-monitor/DBC_Host_Templates.xml",target:"_blank",rel:"noopener noreferrer"},k=n("DBC VM Template"),A=n('"\u6DFB\u52A0\u4E3B\u673A\uFF0C\u4E3B\u673A\u540D\u79F0\u586B\u5199\u865A\u62DF\u673A\u7684 task id\uFF1B'),N=e("li",null,"\u7B49\u5F85\u865A\u62DF\u673A\u521B\u5EFA\u5B8C\u6210\u540E\u5373\u53EF\u53D1\u9001\u76D1\u63A7\u6570\u636E\u3002",-1);function B(T,C){const i=d("ExternalLinkIcon");return s(),l("div",null,[c,u,e("p",null,[v,e("a",b,[m,t(i)]),h]),q,e("ol",null,[e("li",null,[p,e("a",g,[_,t(i)]),x]),f,e("li",null,[D,e("a",E,[k,t(i)]),A]),N])])}var H=a(r,[["render",B],["__file","monitoring-protocol.html.vue"]]);export{H as default};
