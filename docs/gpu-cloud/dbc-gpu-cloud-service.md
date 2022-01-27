# DBC GPU Cloud Service

![](./assets/dbc-gpu-cloud-service.assets/1.png)

## 前言：

- 以下内容仅作演示用例，具体实施请根据自身情况安装适合的软件版本，并及时关注相关中间件漏洞信息进行升级或者修补，以防被恶意攻击。

## 一、数据库部署

### 安装&设置数据库

```bash
#1. 下载：
curl -O <https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz>

#2. 解压:
tar -zxvf mongodb-linux-x86_64-3.0.6.tgz

#3. 将解压包拷贝到指定目录:

mkdir /data
mkdir /data/mongodb
mongodb-linux-x86_64-3.0.6/ /data/mongodb

#4. 设置环境变量：

sudo echo "export PATH=/data/mongodb/bin:$PATH"  >> /etc/profile
source /etc/profile

#5. 创建数据库目录：

mkdir -p /data/db  mkdir -p /data/db/master

#6. 创建：/etc/mongod.conf 添加授权（这样数据库需要密码才能登陆）

storage:
  dbPath: /data/db/master
  journal:
	enabled: true

net:
  port: 27017
  bindIp: 0.0.0.0

security:
  authorization: enabled

#7. 创建admin和identifier数据库，并且设置密码

 1)mongod --dbpath /data/db/master,然后  mongo
 2)use admin
 3)db.createUser({ user: "admin", pwd: "*****", roles: [{ role: "root", db: "admin" }] })
 4)db.shutdownServer()
 5)screen -S mongod
 6)mongod --config /etc/mongod.conf （需要提前配置好mongod.conf文件） 此处如果要配置2个不同服务器的数据库自动备份，
    则用命令：mongod --master --slave --autoresync --config /etc/mongod.conf  --source ip:27017
 7)mongo,然后use admin ,然后 db.auth('admin','******')，
 8)use identifier
 9)db.createUser({user: "dbc", pwd: "*******", roles: [ { role: "dbOwner", db: "identifier" } ]})
```

## 二、java 部署

```bash
#通过git克隆链接地址：https://github.com/DeepBrainChain/DBCGPUCloudService.git
#1. 修改配置文件中的dbc算力网络客户端域名

application-dev.properties  application-dev.properties   application-dev.properties 中clientUrl修改用自己部署的dbc客户端域名替代

#2. 修改wss链上访问DBC钱包客户端域名

修改 chainUrl = wss://infotest.dbcwallet.io:7777 为 chainUrl = wss://info.dbcwallet.io
也可以修改为自己部署的DBC钱包客户端地址，info.dbcwallet.io为公开的地址，不保证100%稳定

#3. 修改数据库地址信息

spring.data.mongodb.uri=mongodb://usr:passwd@localhost:27017/database_name
usr和passwd要和mongo中database_name用户名密码一致

#4. 编译打包程序

   打包开发版本， 执行命令： mvn package -P dev
   打包测试版本， 执行命令： mvn package -P test
   打包正式版本， 执行命令： mvn package -P prod

#5. 在服务器创建文件夹

   1) mkdir /data
   2) cd /data &  mkdir bin
   3) cd /data &  mkdir lib

#6. 上传jar文件到服务器

   上传本地 DBCWebService\\target\\DBCWebService-0.1.5-SNAPSHOT.jar 文件到服务器 lib文件夹下面

#7. 服务器start.sh 脚本修改：

下载地址：<https://github.com/DeepBrainChain/DBCGPUCloudService/releases/download/v0.0.1/start.sh>
appName="GalaxyValidationService-0.0.1-SNAPSHOT.jar" ,之前编译出来的jar包名字
serverPort=8081，可以自定义启动端口，此处端口设置要和nginx配置中的端口号保持一致
profiles="test"  ，可以设置为: dev\\test\\prod

#8. 服务器stop.sh 脚本修改：

 下载地址：<https://github.com/DeepBrainChain/DBCGPUCloudService/releases/download/v0.0.1/stop.sh>
 APP_NAME="GalaxyValidationService-0.0.1-SNAPSHOT.jar",之前编译出来的jar包名字
 SERVER_PORT=8081 和start.sh 脚本中的端口号保持一致

#9. 部署启动服务器程序

 1) 将start.sh和 stop.sh上传到 bin文件夹中
 2) bash start.sh  启动程序
```

## 三、搭建 DBC 客户端

```bash
#装DBC客户端
安装环境

apt-get install libvirt-clients libvirt-daemon-system

1. 下载安装脚本： <https://github.com/DeepBrainChain/DBC-AIComputingNet/releases/>

下载其中的install_client.sh脚本文件

2. 给install_client.sh脚本文件添加执行权限： 命令行下执行：chmod +x install_client.sh

3. 运行安装脚本: 命令行下执行：./install_client.sh [安装目录]

安装过程中会要求用户输入2个端口号：根据情况填写即可

#升级DBC客户端
1. 下载升级脚本： <https://github.com/DeepBrainChain/DBC-AIComputingNet/releases/>

下载其中的update_client.sh脚本文件

2. 给update_client.sh脚本文件添加执行权限： 命令行下执行：chmod +x update_client.sh

3. 运行升级脚本: 命令行下执行：./update_client.sh [原客户端安装目录]
```


## 四、部署 Node 服务器

```bash
#克隆代码

#通过git克隆链接地址 https://github.com/DeepBrainChain/DBC-NodeScript.git将代码克隆到本地或服务器

git clone https://github.com/DeepBrainChain/DBC-NodeScript.git

### 部署代码

#代码克隆以后，可使用 forever 插件创建定时任务，将node代码运行在服务器后台，通过ip加启动router.js的启动server服务端口号，即可访问对应的接口。
服务器安装node示例：<https://www.cnblogs.com/niuben/p/12938501.html>
forever部署示例请参考：<https://blog.csdn.net/superjunjin/article/details/73252194>
```

## 以下部分为目录解释：

### HttpRequest 目录

- 用于书写与前端交互的详细接口内容

  - **api.js**

    - 定义 express 路由

    ```json
    /**
    * 定义路由，便于分辨对应模块
    * 导出路由模块，在router.js文件中引用
    */
    export const Select = express.Router()
    ```

    - 创建路由对应接口

    ```
    Select.get('/', (request, response ,next) => {
        ******
        调用数据库，已经数据的处理与返回
        ******
    })
    ```

  - **router.js**

    - 定义请求信息
    - 设置请求头

    ```
    /**
    * 导入api.js中路由模块
    * 设置请求头，启动server服务
    */
    // 使用 router
    serve.use('/api/select', Select)
    ```

    - 启动 server 服务

    ```
    serve.listen(8090, ()=>{
        console.log('服务器启动完毕');
    })
    ```

### TimedTask 目录

- **用于创建只与数据库进行交互的 js 文件，定时请求数据存入数据库中，以便数据及时更新**

### testScript 目录

- **用于创建 node 可执行脚本，仅供测试使用**

### publicResource.js

- **用于公用基础信息配置，注意修改**

```
/**
 * wssChain 调用链名称
 */
export const wssChain = {
  dbc: 'wss://info.dbcwallet.io' // 公链正式链，也可以自己部署DBC钱包客户端
}

/**
 * baseUrl c++ 端口
 */


export const baseUrl = '<http://ip:port>' // 步骤三中的dbc客户端ip和端口号


/**
 * 连接mongo数据库
 */
// export const mongoUrl = 'mongodb://localhost:27017/identifier' // 本地访问mongo
export const mongoUrl = 'mongodb://usr:passwd@localhost:27017/identifier' // 服务器访问mongo

/**
 * 定义租用机器获取收益差额的钱包
 */
export const designatedWallet = '5F7L9bc3q4XdhVstJjVB2o7S8RHz2YKsHUB6k3uQpErTmVWu' // 用户支付的dbc收益部分会进入此钱包，需替换成自己的钱包地址
```

## 五、部署 web 环境

```bash
#下载代码到本地或服务器
1. 克隆代码
#通过git克隆链接地址 https://github.com/DeepBrainChain/DBChainWebsite.git 将代码克隆到本地或服务器，运行

git clone https://github.com/DeepBrainChain/DBChainWebsite.git
npm run dev

#成功运行后可以本地启动网页运行云平台，进行测试。

2. 修改云平台logo图案配置
#打开文件夹 src--> locales --> CN.js && EN.js && RU.js, 将website_name字段设置为自己云平台的名称，本地运行即可查看
#修改website_name

export default {
	···
	website_name: 'dbchain', // dbchain, 1024lab, tycloud
	···
}

3. 配置接口访问域名
#打开文件夹 src--> api --> index.js,配置自己配置的服务器接口，即可修改自己所属的node接口访问域名
#修改文件，使用nodeHost

const nodeHost = 'https://xxxxxx'   //nodejs 服务器地址
const host = "https://xxxxx"; //java 服务器地址

4. 生成dist文件部署服务器
npm run build

#生成dist文件夹，将dist文件夹放在指定的服务器文件，通过配置nginx指定dist文件中的index.html文件，即可访问页面
```

## 六、部署 Nginx

```bash
# 安装Nginx
sudo apt install nginx -y

# 配置nginx
sudo vim /etc/nginx/nginx.conf

#示例如下，实际请按照自身环境改动，仅作参考
# 如果是两台主机，请做负载均衡

user root;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
	worker_connections 768;
	# multi_accept on;
}

http {

	##
	# Basic Settings
	##
	server {
	  listen 80;
	  server_name wwww.example.com;
	  rewrite ^ https://$http_host$request_uri? permanent;
	}

  upstream  www{
     server server_A:port weight=1 ;
     server server_B:port weight=2 ;
  }
	server {
    	  listen 443 ssl;
    	  server_name www.example.com;
    	  ssl on;
    	  keepalive_timeout 70;
	  server_tokens off;
	  fastcgi_param   HTTPS               on;
          fastcgi_param   HTTP_SCHEME         https;
    	  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    	  ssl_certificate example.crt;
    	  ssl_certificate_key example.key;
    	  ssl_prefer_server_ciphers on;
    	  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    	  add_header X-Frame-Options DENY;
    	  add_header X-Content-Type-Options nosniff;
    	  add_header X-Xss-Protection 1;
	  location / {
	    root  /data/deepbrainchain;
	    index index.html;
	    try_files $uri $uri/ /index.html;
	    #autoindex on;
	  }
  }

	sendfile on;
	tcp_nopush on;
	tcp_nodelay on;
	keepalive_timeout 65;
	types_hash_max_size 2048;
	# server_tokens off;

	# server_names_hash_bucket_size 64;
	# server_name_in_redirect off;

	include /etc/nginx/mime.types;
	default_type application/octet-stream;

	access_log /var/log/nginx/access.log;
	error_log /var/log/nginx/error.log;

	##
	# Gzip Settings
	##

	gzip on;

	# gzip_vary on;
	# gzip_proxied any;
	# gzip_comp_level 6;
	# gzip_buffers 16 8k;
	# gzip_http_version 1.1;
	# gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

	##
	# Virtual Host Configs
	##

	include /etc/nginx/conf.d/*.conf;
	include /etc/nginx/sites-enabled/*;
}
}

# 检测Nginx配置是否正确
sudo nginx -t

# 启动并设置开机自起
sudo nginx -s reload
sudo systemctl start nginx
sudo systemctl enable nginx
```
