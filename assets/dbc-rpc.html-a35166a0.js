const e=JSON.parse('{"key":"v-76d8b735","path":"/onchain-api/dbc-rpc.html","title":"DBC-Blockchain 主网 RPC","lang":"zh-CN","frontmatter":{"description":"发送 RPC 请求的方式，请参考上一篇文章。 并不是所有的链上数据都有 RPC 接口。如果想要查询的数据（包括历史数据）没有通过 RPC 暴露出来，可以通过查询链上存储来获取对应数据。 1. onlineProfile 模块 onlineProfile 模块记录了机器在线奖励的信息 1.1 查询某个资金账户控制的所有机器 示例; 结果说明; 1.2 查...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/DBC-Wiki/onchain-api/dbc-rpc.html"}],["meta",{"property":"og:site_name","content":"DBC-Wiki"}],["meta",{"property":"og:title","content":"DBC-Blockchain 主网 RPC"}],["meta",{"property":"og:description","content":"发送 RPC 请求的方式，请参考上一篇文章。 并不是所有的链上数据都有 RPC 接口。如果想要查询的数据（包括历史数据）没有通过 RPC 暴露出来，可以通过查询链上存储来获取对应数据。 1. onlineProfile 模块 onlineProfile 模块记录了机器在线奖励的信息 1.1 查询某个资金账户控制的所有机器 示例; 结果说明; 1.2 查..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-01-29T03:47:20.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-29T03:47:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DBC-Blockchain 主网 RPC\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-29T03:47:20.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/DBC-Wiki/en/onchain-api/dbc-rpc.html"}]]},"headers":[{"level":2,"title":"1. onlineProfile 模块","slug":"_1-onlineprofile-模块","link":"#_1-onlineprofile-模块","children":[{"level":3,"title":"1.1 查询某个资金账户控制的所有机器","slug":"_1-1-查询某个资金账户控制的所有机器","link":"#_1-1-查询某个资金账户控制的所有机器","children":[]},{"level":3,"title":"1.2 查询机器某个 Era 获得收益","slug":"_1-2-查询机器某个-era-获得收益","link":"#_1-2-查询机器某个-era-获得收益","children":[]},{"level":3,"title":"1.3. 查询机器某个 Era 解锁收益","slug":"_1-3-查询机器某个-era-解锁收益","link":"#_1-3-查询机器某个-era-解锁收益","children":[]},{"level":3,"title":"1.4. 查询资金账户某个 Era 获得收益","slug":"_1-4-查询资金账户某个-era-获得收益","link":"#_1-4-查询资金账户某个-era-获得收益","children":[]},{"level":3,"title":"1.5. 查询资金账户某个 Era 解锁奖励","slug":"_1-5-查询资金账户某个-era-解锁奖励","link":"#_1-5-查询资金账户某个-era-解锁奖励","children":[]},{"level":3,"title":"1.6. 查询机器详细信息","slug":"_1-6-查询机器详细信息","link":"#_1-6-查询机器详细信息","children":[]},{"level":3,"title":"1.7. 查看矿工个数","slug":"_1-7-查看矿工个数","link":"#_1-7-查看矿工个数","children":[]},{"level":3,"title":"1.8. 查看所有机器列表","slug":"_1-8-查看所有机器列表","link":"#_1-8-查看所有机器列表","children":[]},{"level":3,"title":"1.9 查看 onlineProfile 模块统计信息","slug":"_1-9-查看-onlineprofile-模块统计信息","link":"#_1-9-查看-onlineprofile-模块统计信息","children":[]},{"level":3,"title":"1.10 获取账户链上身份","slug":"_1-10-获取账户链上身份","link":"#_1-10-获取账户链上身份","children":[]},{"level":3,"title":"1.11 获取矿工统计信息","slug":"_1-11-获取矿工统计信息","link":"#_1-11-获取矿工统计信息","children":[]},{"level":3,"title":"1.12 按位置获取统计信息","slug":"_1-12-按位置获取统计信息","link":"#_1-12-按位置获取统计信息","children":[]}]},{"level":2,"title":"2. Committee 模块","slug":"_2-committee-模块","link":"#_2-committee-模块","children":[{"level":3,"title":"2.1 committee_getCommitteeList","slug":"_2-1-committee-getcommitteelist","link":"#_2-1-committee-getcommitteelist","children":[]}]},{"level":2,"title":"3. OnlineCommittee 模块","slug":"_3-onlinecommittee-模块","link":"#_3-onlinecommittee-模块","children":[{"level":3,"title":"3.1 获取机器分配的委员会列表","slug":"_3-1-获取机器分配的委员会列表","link":"#_3-1-获取机器分配的委员会列表","children":[]},{"level":3,"title":"3.2 获取委员会对机器的审核时间","slug":"_3-2-获取委员会对机器的审核时间","link":"#_3-2-获取委员会对机器的审核时间","children":[]},{"level":3,"title":"3.3 获取委员会所有派单的机器列表","slug":"_3-3-获取委员会所有派单的机器列表","link":"#_3-3-获取委员会所有派单的机器列表","children":[]}]},{"level":2,"title":"4. RentMachine 模块","slug":"_4-rentmachine-模块","link":"#_4-rentmachine-模块","children":[{"level":3,"title":"4.1 查看机器对应的订单","slug":"_4-1-查看机器对应的订单","link":"#_4-1-查看机器对应的订单","children":[]},{"level":3,"title":"4.2 查看租用的详情","slug":"_4-2-查看租用的详情","link":"#_4-2-查看租用的详情","children":[]},{"level":3,"title":"4.3 查看某个账户租用的订单列表","slug":"_4-3-查看某个账户租用的订单列表","link":"#_4-3-查看某个账户租用的订单列表","children":[]}]}],"git":{"createdTime":1641467464000,"updatedTime":1674964040000,"contributors":[{"name":"kaigedong","email":"dongkaige@gmail.com","commits":7},{"name":"kaigedong","email":"kaigedong@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":6.14,"words":1843},"filePathRelative":"onchain-api/dbc-rpc.md","localizedDate":"2022年1月6日","autoDesc":true}');export{e as data};
