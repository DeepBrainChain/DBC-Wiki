const e=JSON.parse('{"key":"v-6d464956","path":"/en/install-update-dbc-node/dbc-client-api/http-api.html","title":"HTTP client request API","lang":"en-US","frontmatter":{"description":"( The dbcclientip and dbcclientport in the following HTTP request are the DBC client access addresses deployed by the user ) GPU Node Manage 1. Querying GPU Node Machine Configu...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/DBC-Wiki/en/install-update-dbc-node/dbc-client-api/http-api.html"}],["meta",{"property":"og:site_name","content":"DBC-Wiki"}],["meta",{"property":"og:title","content":"HTTP client request API"}],["meta",{"property":"og:description","content":"( The dbcclientip and dbcclientport in the following HTTP request are the DBC client access addresses deployed by the user ) GPU Node Manage 1. Querying GPU Node Machine Configu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/DBC-Wiki/"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-11-20T08:50:47.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"HTTP client request API"}],["meta",{"property":"article:modified_time","content":"2023-11-20T08:50:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTP client request API\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/DBC-Wiki/\\"],\\"dateModified\\":\\"2023-11-20T08:50:47.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope-docs-demo.netlify.app/DBC-Wiki/install-update-dbc-node/dbc-client-api/http-api.html"}],["link",{"rel":"alternate","hreflang":"ko-kr","href":"https://vuepress-theme-hope-docs-demo.netlify.app/DBC-Wiki/kr/install-update-dbc-node/dbc-client-api/http-api.html"}]]},"headers":[{"level":2,"title":"GPU Node Manage","slug":"gpu-node-manage","link":"#gpu-node-manage","children":[{"level":3,"title":"1. Querying GPU Node Machine Configuration Information","slug":"_1-querying-gpu-node-machine-configuration-information","link":"#_1-querying-gpu-node-machine-configuration-information","children":[]},{"level":3,"title":"2. Tenant query to get session_id","slug":"_2-tenant-query-to-get-session-id","link":"#_2-tenant-query-to-get-session-id","children":[]}]},{"level":2,"title":"Virtual Machine Manage","slug":"virtual-machine-manage","link":"#virtual-machine-manage","children":[{"level":3,"title":"1. Create a virtual machine","slug":"_1-create-a-virtual-machine","link":"#_1-create-a-virtual-machine","children":[]},{"level":3,"title":"2. Querying Virtual Machine Details","slug":"_2-querying-virtual-machine-details","link":"#_2-querying-virtual-machine-details","children":[]},{"level":3,"title":"3. Query the list of virtual machines","slug":"_3-query-the-list-of-virtual-machines","link":"#_3-query-the-list-of-virtual-machines","children":[]},{"level":3,"title":"4. Shut down the virtual machine","slug":"_4-shut-down-the-virtual-machine","link":"#_4-shut-down-the-virtual-machine","children":[]},{"level":3,"title":"5. Shut down the virtual machine (forced power off)","slug":"_5-shut-down-the-virtual-machine-forced-power-off","link":"#_5-shut-down-the-virtual-machine-forced-power-off","children":[]},{"level":3,"title":"6. Start Virtual Machine","slug":"_6-start-virtual-machine","link":"#_6-start-virtual-machine","children":[]},{"level":3,"title":"7. delete virtual machine","slug":"_7-delete-virtual-machine","link":"#_7-delete-virtual-machine","children":[]},{"level":3,"title":"8. Restart Virtual Machine","slug":"_8-restart-virtual-machine","link":"#_8-restart-virtual-machine","children":[]},{"level":3,"title":"9. Query Virtual Machine Logs","slug":"_9-query-virtual-machine-logs","link":"#_9-query-virtual-machine-logs","children":[]},{"level":3,"title":"10. Modify virtual machine configuration","slug":"_10-modify-virtual-machine-configuration","link":"#_10-modify-virtual-machine-configuration","children":[]},{"level":3,"title":"11. Modifying the virtual machine login password","slug":"_11-modifying-the-virtual-machine-login-password","link":"#_11-modifying-the-virtual-machine-login-password","children":[]}]},{"level":2,"title":"Disk management","slug":"disk-management","link":"#disk-management","children":[{"level":3,"title":"1. Query disk list","slug":"_1-query-disk-list","link":"#_1-query-disk-list","children":[]},{"level":3,"title":"2. Data disk expansion","slug":"_2-data-disk-expansion","link":"#_2-data-disk-expansion","children":[]},{"level":3,"title":"3. Add a new data disk","slug":"_3-add-a-new-data-disk","link":"#_3-add-a-new-data-disk","children":[]},{"level":3,"title":"4. Delete data disk","slug":"_4-delete-data-disk","link":"#_4-delete-data-disk","children":[]}]},{"level":2,"title":"Snapshot Manage","slug":"snapshot-manage","link":"#snapshot-manage","children":[{"level":3,"title":"1. Query snapshot list","slug":"_1-query-snapshot-list","link":"#_1-query-snapshot-list","children":[]},{"level":3,"title":"2. Querying snapshot details","slug":"_2-querying-snapshot-details","link":"#_2-querying-snapshot-details","children":[]},{"level":3,"title":"3. Create snapshot","slug":"_3-create-snapshot","link":"#_3-create-snapshot","children":[]},{"level":3,"title":"4. Delete snapshot","slug":"_4-delete-snapshot","link":"#_4-delete-snapshot","children":[]}]},{"level":2,"title":"Image Manage","slug":"image-manage","link":"#image-manage","children":[{"level":3,"title":"1. Query the mirror center ID list","slug":"_1-query-the-mirror-center-id-list","link":"#_1-query-the-mirror-center-id-list","children":[]},{"level":3,"title":"2. Query image list","slug":"_2-query-image-list","link":"#_2-query-image-list","children":[]},{"level":3,"title":"3. Upload image","slug":"_3-upload-image","link":"#_3-upload-image","children":[]},{"level":3,"title":"4. Download image","slug":"_4-download-image","link":"#_4-download-image","children":[]},{"level":3,"title":"5. Query download progress","slug":"_5-query-download-progress","link":"#_5-query-download-progress","children":[]},{"level":3,"title":"6. Query upload progress","slug":"_6-query-upload-progress","link":"#_6-query-upload-progress","children":[]},{"level":3,"title":"7. Stop download","slug":"_7-stop-download","link":"#_7-stop-download","children":[]},{"level":3,"title":"8. Stop upload","slug":"_8-stop-upload","link":"#_8-stop-upload","children":[]},{"level":3,"title":"9. Delete image file","slug":"_9-delete-image-file","link":"#_9-delete-image-file","children":[]}]},{"level":2,"title":"Virtual LAN networking","slug":"virtual-lan-networking","link":"#virtual-lan-networking","children":[{"level":3,"title":"1. Create a network","slug":"_1-create-a-network","link":"#_1-create-a-network","children":[]},{"level":3,"title":"2. Delete the network","slug":"_2-delete-the-network","link":"#_2-delete-the-network","children":[]}]},{"level":2,"title":"Bare Metal Node Operations","slug":"bare-metal-node-operations","link":"#bare-metal-node-operations","children":[{"level":3,"title":"1. Query the list of bare metal servers","slug":"_1-query-the-list-of-bare-metal-servers","link":"#_1-query-the-list-of-bare-metal-servers","children":[]},{"level":3,"title":"2. Add a bare metal server","slug":"_2-add-a-bare-metal-server","link":"#_2-add-a-bare-metal-server","children":[]},{"level":3,"title":"3. Delete bare metal servers","slug":"_3-delete-bare-metal-servers","link":"#_3-delete-bare-metal-servers","children":[]},{"level":3,"title":"4. Modify bare metal server IPMI and other information","slug":"_4-modify-bare-metal-server-ipmi-and-other-information","link":"#_4-modify-bare-metal-server-ipmi-and-other-information","children":[]},{"level":3,"title":"5. Bare Metal Server Power Control","slug":"_5-bare-metal-server-power-control","link":"#_5-bare-metal-server-power-control","children":[]},{"level":3,"title":"6. Modifying the boot device order of a bare metal server","slug":"_6-modifying-the-boot-device-order-of-a-bare-metal-server","link":"#_6-modifying-the-boot-device-order-of-a-bare-metal-server","children":[]}]},{"level":2,"title":"DeepLink device information","slug":"deeplink-device-information","link":"#deeplink-device-information","children":[{"level":3,"title":"1. Get DeepLink device information","slug":"_1-get-deeplink-device-information","link":"#_1-get-deeplink-device-information","children":[]},{"level":3,"title":"2. Set DeepLink device information","slug":"_2-set-deeplink-device-information","link":"#_2-set-deeplink-device-information","children":[]}]}],"git":{"createdTime":1648106712000,"updatedTime":1700470247000,"contributors":[{"name":"Jerry","email":"1364812552@qq.com","commits":6},{"name":"ytvchsy","email":"2305492203@qq.com","commits":3},{"name":"kaigedong","email":"dongkaige@gmail.com","commits":2},{"name":"Jerry-se","email":"Jerry-se@users.noreply.github.com","commits":1},{"name":"kaigedong","email":"kaigedong@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":13.55,"words":4064},"filePathRelative":"en/install-update-dbc-node/dbc-client-api/http-api.md","localizedDate":"March 24, 2022","autoDesc":true}');export{e as data};