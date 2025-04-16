import{_ as n,W as s,X as i,a0 as r}from"./framework-2c7d842c.js";const d={};function l(o,e){return s(),i("div",null,e[0]||(e[0]=[r(`<h1 id="部署镜像中心" tabindex="-1"><a class="header-anchor" href="#部署镜像中心" aria-hidden="true">#</a> 部署镜像中心</h1><ul><li><p><strong>操作系统：ubuntu</strong></p></li><li><p><strong>设置开机启动 rsync-daemon</strong><code>sudo vim /etc/default/rsync</code> 将 false 改为 true： <code>RSYNC_ENABLE=true</code></p></li><li><p><strong>修改配置文件 rsyncd.conf</strong></p><p>手动复制： sudo cp /usr/share/doc/rsync/examples/rsyncd.conf /etc</p><p>修改 /etc/rsyncd.conf：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>######### 全局: 配置参数 ##########
port=873    # 指定rsync端口。默认873
uid = nobody # rsync服务的运行用户，默认是nobody，文件传输成功后属主将是这个uid
gid = nogroup # rsync服务的运行组，默认是nobody，文件传输成功后属组将是这个gid
use chroot = yes # rsync daemon在传输前是否切换到指定的path目录下，并将其监禁在内
max connections = 0 # 指定最大连接数量，0表示没有限制
timeout = 60  # 确保rsync服务器不会永远等待一个崩溃的客户端，0表示永远等待
motd file = /var/rsyncd/rsync.motd   # 客户端连接过来显示的消息
lock file = /var/run/rsync.lock      # 指定锁文件
log file = /var/log/rsyncd.log       # 指定rsync的日志文件，而不把日志发送给syslog
dont compress = *.gz *.tgz *.zip *.z *.Z *.rpm *.deb *.bz2  # 指定哪些文件不用进行压缩传输

######### 模块: 配置参数 ##########
[images]        # 模块ID
path = /data/ # 指定该模块的路径，启动rsync服务前该目录必须存在
ignore errors = yes     # 忽略某些IO错误信息
ignore nonreadable = yes
read only = no  # 指定该模块是否可读写，即能否上传文件，no表示可读写，yes表示可读不可写
write only = no # 指定该模式是否支持下载，设置为yes表示客户端不能下载
list = no       # 客户端请求显示模块列表时，该模块是否显示出来，设置为no则该模块为隐藏模块
# hosts deny = 0.0.0.0/32   # 指定不允许连接到该模块的机器
transfer logging = no
strict modes = yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>启动</strong></p><p><code>rsync --daemon</code></p></li><li><p><strong>客户端节点上配置镜像中心地址</strong></p><p><code>image_server=&lt;id&gt;,&lt;ip&gt;,&lt;port&gt;,&lt;modulename&gt;</code></p><p>id: 用户自定义 ID，用于标识改镜像中心</p><p>ip: 镜像中心 ip 地址</p><p>port: 镜像中心服务器上 rsync-server 的监听地址，默认 873，见上述配置文件</p><p>modulename: 镜像中心上配置的模块 ID，默认 images，见上述配置文件</p><p>示例：</p><p><code>image_server=ID_1,127.0.0.1,22,873,images</code></p></li></ul>`,2)]))}const a=n(d,[["render",l],["__file","deploy_image_server.html.vue"]]);export{a as default};
