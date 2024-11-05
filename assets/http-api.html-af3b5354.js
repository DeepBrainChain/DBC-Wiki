const e=JSON.parse('{"key":"v-3fc96941","path":"/install-update-dbc-node/dbc-client-api/http-api.html","title":"HTTP 客户端请求 API","lang":"zh-CN","frontmatter":{"description":"注意！ 以下 HTTP 请求其中的 dbcclientip 和 dbcclientport 为用户自己部署的 DBC 客户端访问地址 GPU 节点管理 1. 查询 GPU 节点机器配置信息 请求方式：POST 请求URL：http://:/api/v1/mining_nodes 请求body： 示例： 2. 租用者查询获取 session_id 请求方...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/DBC-Wiki/install-update-dbc-node/dbc-client-api/http-api.html"}],["meta",{"property":"og:site_name","content":"DBC-Wiki"}],["meta",{"property":"og:title","content":"HTTP 客户端请求 API"}],["meta",{"property":"og:description","content":"注意！ 以下 HTTP 请求其中的 dbcclientip 和 dbcclientport 为用户自己部署的 DBC 客户端访问地址 GPU 节点管理 1. 查询 GPU 节点机器配置信息 请求方式：POST 请求URL：http://:/api/v1/mining_nodes 请求body： 示例： 2. 租用者查询获取 session_id 请求方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/DBC-Wiki/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-20T08:50:47.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"HTTP 客户端请求 API"}],["meta",{"property":"article:modified_time","content":"2023-11-20T08:50:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTP 客户端请求 API\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/DBC-Wiki/\\"],\\"dateModified\\":\\"2023-11-20T08:50:47.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/DBC-Wiki/en/install-update-dbc-node/dbc-client-api/http-api.html"}]]},"headers":[{"level":2,"title":"GPU 节点管理","slug":"gpu-节点管理","link":"#gpu-节点管理","children":[{"level":3,"title":"1. 查询 GPU 节点机器配置信息","slug":"_1-查询-gpu-节点机器配置信息","link":"#_1-查询-gpu-节点机器配置信息","children":[]},{"level":3,"title":"2. 租用者查询获取 session_id","slug":"_2-租用者查询获取-session-id","link":"#_2-租用者查询获取-session-id","children":[]}]},{"level":2,"title":"虚拟机管理","slug":"虚拟机管理","link":"#虚拟机管理","children":[{"level":3,"title":"1. 创建虚拟机","slug":"_1-创建虚拟机","link":"#_1-创建虚拟机","children":[]},{"level":3,"title":"2. 查询虚拟机详细信息","slug":"_2-查询虚拟机详细信息","link":"#_2-查询虚拟机详细信息","children":[]},{"level":3,"title":"3. 查询虚拟机列表","slug":"_3-查询虚拟机列表","link":"#_3-查询虚拟机列表","children":[]},{"level":3,"title":"4. 关闭虚拟机(shutdown)","slug":"_4-关闭虚拟机-shutdown","link":"#_4-关闭虚拟机-shutdown","children":[]},{"level":3,"title":"5. 关闭虚拟机(强制断电)","slug":"_5-关闭虚拟机-强制断电","link":"#_5-关闭虚拟机-强制断电","children":[]},{"level":3,"title":"6. 启动虚拟机","slug":"_6-启动虚拟机","link":"#_6-启动虚拟机","children":[]},{"level":3,"title":"7. 删除虚拟机","slug":"_7-删除虚拟机","link":"#_7-删除虚拟机","children":[]},{"level":3,"title":"8. 重启虚拟机","slug":"_8-重启虚拟机","link":"#_8-重启虚拟机","children":[]},{"level":3,"title":"9. 查询虚拟机日志","slug":"_9-查询虚拟机日志","link":"#_9-查询虚拟机日志","children":[]},{"level":3,"title":"10. 修改虚拟机配置","slug":"_10-修改虚拟机配置","link":"#_10-修改虚拟机配置","children":[]},{"level":3,"title":"11. 修改虚拟机登录密码","slug":"_11-修改虚拟机登录密码","link":"#_11-修改虚拟机登录密码","children":[]}]},{"level":2,"title":"磁盘管理","slug":"磁盘管理","link":"#磁盘管理","children":[{"level":3,"title":"1.查询磁盘列表","slug":"_1-查询磁盘列表","link":"#_1-查询磁盘列表","children":[]},{"level":3,"title":"2.数据盘扩容","slug":"_2-数据盘扩容","link":"#_2-数据盘扩容","children":[]},{"level":3,"title":"3.添加新的数据盘","slug":"_3-添加新的数据盘","link":"#_3-添加新的数据盘","children":[]},{"level":3,"title":"4.删除数据盘","slug":"_4-删除数据盘","link":"#_4-删除数据盘","children":[]}]},{"level":2,"title":"快照管理","slug":"快照管理","link":"#快照管理","children":[{"level":3,"title":"1.查询快照列表","slug":"_1-查询快照列表","link":"#_1-查询快照列表","children":[]},{"level":3,"title":"2.查询快照详细信息","slug":"_2-查询快照详细信息","link":"#_2-查询快照详细信息","children":[]},{"level":3,"title":"3.创建快照","slug":"_3-创建快照","link":"#_3-创建快照","children":[]},{"level":3,"title":"4.删除快照","slug":"_4-删除快照","link":"#_4-删除快照","children":[]}]},{"level":2,"title":"镜像管理","slug":"镜像管理","link":"#镜像管理","children":[{"level":3,"title":"1. 查询镜像中心 ID 列表","slug":"_1-查询镜像中心-id-列表","link":"#_1-查询镜像中心-id-列表","children":[]},{"level":3,"title":"2.查询镜像列表","slug":"_2-查询镜像列表","link":"#_2-查询镜像列表","children":[]},{"level":3,"title":"3.上传镜像","slug":"_3-上传镜像","link":"#_3-上传镜像","children":[]},{"level":3,"title":"4.下载镜像","slug":"_4-下载镜像","link":"#_4-下载镜像","children":[]},{"level":3,"title":"5.查询下载进度","slug":"_5-查询下载进度","link":"#_5-查询下载进度","children":[]},{"level":3,"title":"6.查询上传进度","slug":"_6-查询上传进度","link":"#_6-查询上传进度","children":[]},{"level":3,"title":"7.停止下载","slug":"_7-停止下载","link":"#_7-停止下载","children":[]},{"level":3,"title":"8.停止上传","slug":"_8-停止上传","link":"#_8-停止上传","children":[]},{"level":3,"title":"9.删除镜像文件","slug":"_9-删除镜像文件","link":"#_9-删除镜像文件","children":[]}]},{"level":2,"title":"虚拟机组网","slug":"虚拟机组网","link":"#虚拟机组网","children":[{"level":3,"title":"1. 创建网络","slug":"_1-创建网络","link":"#_1-创建网络","children":[]},{"level":3,"title":"2. 删除网络","slug":"_2-删除网络","link":"#_2-删除网络","children":[]}]},{"level":2,"title":"裸金属节点操作","slug":"裸金属节点操作","link":"#裸金属节点操作","children":[{"level":3,"title":"1. 查询裸金属服务器列表","slug":"_1-查询裸金属服务器列表","link":"#_1-查询裸金属服务器列表","children":[]},{"level":3,"title":"2. 添加裸金属服务器","slug":"_2-添加裸金属服务器","link":"#_2-添加裸金属服务器","children":[]},{"level":3,"title":"3. 删除裸金属服务器","slug":"_3-删除裸金属服务器","link":"#_3-删除裸金属服务器","children":[]},{"level":3,"title":"4. 修改裸金属服务器 IPMI 等信息","slug":"_4-修改裸金属服务器-ipmi-等信息","link":"#_4-修改裸金属服务器-ipmi-等信息","children":[]},{"level":3,"title":"5. 裸金属服务器电源控制","slug":"_5-裸金属服务器电源控制","link":"#_5-裸金属服务器电源控制","children":[]},{"level":3,"title":"6. 修改裸金属服务器引导启动顺序","slug":"_6-修改裸金属服务器引导启动顺序","link":"#_6-修改裸金属服务器引导启动顺序","children":[]}]},{"level":2,"title":"DeepLink 设备信息","slug":"deeplink-设备信息","link":"#deeplink-设备信息","children":[{"level":3,"title":"1. 查询 DeepLink 设备信息","slug":"_1-查询-deeplink-设备信息","link":"#_1-查询-deeplink-设备信息","children":[]},{"level":3,"title":"2. 设置 DeepLink 设备信息","slug":"_2-设置-deeplink-设备信息","link":"#_2-设置-deeplink-设备信息","children":[]}]}],"git":{"createdTime":1641684343000,"updatedTime":1700470247000,"contributors":[{"name":"cuijg","email":"bacuijg@163.com","commits":11},{"name":"Jerry","email":"1364812552@qq.com","commits":10},{"name":"q2777","email":"94602991+q2777@users.noreply.github.com","commits":7},{"name":"ytvchsy","email":"2305492203@qq.com","commits":3},{"name":"Jerry-se","email":"Jerry-se@users.noreply.github.com","commits":1},{"name":"deepbraindeveloper","email":"deepbraindeveloper@users.noreply.github.com","commits":1},{"name":"kaigedong","email":"dongkaige@gmail.com","commits":1},{"name":"q2777","email":"q2777@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":16.58,"words":4973},"filePathRelative":"install-update-dbc-node/dbc-client-api/http-api.md","localizedDate":"2022年1月8日","autoDesc":true}');export{e as data};
