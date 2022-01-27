# DBC GPU Cloud Service English description

![](./assets/dbc-gpu-cloud-service.assets/1.png)

## Preface:

- The following content is only for demonstration use cases. For specific implementation, please install the appropriate software version according to your own situation, and pay attention to the relevant middleware vulnerability information in time to upgrade or repair to prevent malicious attacks.

## 1. Database deployment

### Install & setup database

```bash
#1. Download:

  curl -O <https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz>
#2. Unzip:

  tar -zxvf mongodb-linux-x86_64-3.0.6.tgz
#3. Copy the decompressed package to the specified directory:

mkdir /data
mkdir /data/mongodb
mongodb-linux-x86_64-3.0.6/ /data/mongodb
#4. Set environment variables:

sudo echo "export PATH=/data/mongodb/bin:$PATH" >> /etc/profile
source /etc/profile
#5. Create the database directory:

  mkdir -p /data/db mkdir -p /data/db/master
#6. Create: /etc/mongod.conf Add authorization (so the database requires a password to log in)

storage:
  dbPath: /data/db/master
  journal:
enabled: true

net:
  port: 27017
  bindIp: 0.0.0.0

security:
  authorization: enabled
#7. Create admin and identifier databases and set passwords

 1) mongod --dbpath /data/db/master, then mongo
 2) use admin
 3)db.createUser({ user: "admin", pwd: "*****", roles: [{ role: "root", db: "admin" }] })
 4) db.shutdownServer()
 5) screen -S mongod
 6) mongod --config /etc/mongod.conf (the mongod.conf file needs to be configured in advance) If you want to configure automatic database backup of 2 different servers,
    Then use the command: mongod --master --slave --autoresync --config /etc/mongod.conf --source ip:27017
 7) mongo, then use admin, then db.auth('admin','******'),
 8) use identifier
 9)db.createUser({user: "dbc", pwd: "*******", roles: [ { role: "dbOwner", db: "identifier" } ]})
```

## 2.Java deployment

```bash
#1. Modify the domain name of the dbc computing network client in the configuration file

  application-dev.properties application-dev.properties application-dev.properties The clientUrl modification is replaced by the dbc client domain name deployed by yourself
#2. Modify the domain name of the client to access the DBC wallet on the wss chain

Modify chainUrl = wss://infotest.dbcwallet.io:7777 to chainUrl = wss://info.dbcwallet.io
It can also be modified to the DBC wallet client address deployed by yourself. info.dbcwallet.io is a public address, and 100% stability is not guaranteed.
#3. Modify database address information

spring.data.mongodb.uri=mongodb://usr:passwd@localhost:27017/database_name
usr and passwd must be the same as the username and password of database_name in mongo
#4. Compile the packager

   To package the development version, execute the command: mvn package -P dev
   To package the test version, execute the command: mvn package -P test
   To package the official version, execute the command: mvn package -P prod
#5. Create a folder on the server

   1) mkdir /data
   2) cd /data & mkdir bin
   3) cd /data & mkdir lib
#6. Upload the jar file to the server

   Upload the local DBCWebService\\target\\DBCWebService-0.1.5-SNAPSHOT.jar file to the server lib folder
#7. Server start.sh script modification:

Download address: <https://github.com/DeepBrainChain/DBCGPUCloudService/releases/download/v0.0.1/start.sh>
appName="GalaxyValidationService-0.0.1-SNAPSHOT.jar" , the name of the previously compiled jar package
serverPort=8081, you can customize the startup port, the port setting here should be consistent with the port number in the nginx configuration
profiles="test" , can be set to: dev\\test\\prod
#8. Server stop.sh script modification:

 Download address: <https://github.com/DeepBrainChain/DBCGPUCloudService/releases/download/v0.0.1/stop.sh>
 APP_NAME="GalaxyValidationService-0.0.1-SNAPSHOT.jar", the name of the previously compiled jar package
 SERVER_PORT=8081 is the same as the port number in the start.sh script
#9. Deploy the startup server program

 1) Upload start.sh and stop.sh to the bin folder
 2) bash start.sh to start the program
```

## 3.Build DBC client

```bash
#Install DBC client
Installation Environment

apt-get install libvirt-clients libvirt-daemon-system

1. Download the installation script: <https://github.com/DeepBrainChain/DBC-AIComputingNet/releases/>

Download the install_client.sh script file in it

2. Add execution permission to the install_client.sh script file: Execute on the command line: chmod +x install_client.sh

3. Run the installation script: Execute on the command line: ./install_client.sh [installation directory]

During the installation process, the user will be asked to enter 2 port numbers: fill in according to the situation

#Upgrade DBC client
1. Download the upgrade script: <https://github.com/DeepBrainChain/DBC-AIComputingNet/releases/>

Download the update_client.sh script file in it

2. Add execution permission to the update_client.sh script file: Execute from the command line: chmod +x update_client.sh

3. Run the upgrade script: Execute on the command line: ./update_client.sh [original client installation directory]
```

## 4.Deploy the web environment

```bash
#download code to local or server
1. Clone the code
#Clone the link address through git [<https://github.com/DeepBrainChain/DBChainWebsite.git>](<https://github.com/DeepBrainChain/DBChainWebsite.git>) Clone the code to the local or server, run

git clone [<https://github.com/DeepBrainChain/DBChainWebsite.git>](<https://github.com/DeepBrainChain/DBChainWebsite.git>)
npm run dev

#After successful operation, you can start the web page to run the cloud platform locally for testing.

2. Configure the interface access domain name
#Open the folder src--> api --> index.js, configure the server interface configured by yourself, you can modify your own node interface to access the domain name
#Modify the file, use nodeHost

const nodeHost = '<http://localhost:8090>'

3. Generate a dist file to deploy the server

npm run build

#Generate the dist folder, put the dist folder in the specified server file, and configure nginx to specify the index.html file in the dist file to access the page
```

## 5.Deploy Node service

```bash
#clone code

#Clone the code through git clone link address[<https://github.com/DeepBrainChain/DBC-NodeScript.git>](<https://github.com/DeepBrainChain/DBC-NodeScript.git>) server

git clone [<https://github.com/DeepBrainChain/DBC-NodeScript.git>](<https://github.com/DeepBrainChain/DBC-NodeScript.git>)

### deploy code

#After the code is cloned, you can use the forever plugin to create a scheduled task, run the node code in the server background, and access the corresponding interface by adding the IP address to the server port number that starts router.js.
For example of forever deployment, please refer to: <https://blog.csdn.net/superjunjin/article/details/73252194>
```

## The following section explains the directory:

### HttpRequest directory

- For writing detailed interface content for interacting with the front end
  - **api.js**
    - define express routes
    ```
    /**
    * Define routes to facilitate identification of corresponding modules
    * Export the routing module, reference it in the router.js file
    */
    export const Select = express.Router()

    ```
    - Create a route corresponding interface
    ```
    Select.get('/', (request, response , next) => {
        ******
        Call the database, process and return the data
        ******
    })

    ```
  - **router.js**
    - Define request information
    - set request headers
    ```
    /**
    * Import the routing module in api.js
    * Set the request header and start the server service
    */
    // use router
    serve.use('/api/select', Select)

    ```
    - start the server service
    ```
    serve.listen(8090, ()=>{
        console.log('Server startup completed');
    })

    ```

### TimedTask directory

- **Used to create a js file that only interacts with the database, and regularly request data to be stored in the database, so that the data can be updated in time**

### testScript directory

- **Used to create node executable scripts for testing purposes only**

### publicResource.js

- **For public basic information configuration, pay attention to modify**

```
/**
 * wssChain call chain name
 */
export const wssChain = {
  dbc: 'wss://infotest.dbcwallet.io:7777', // public chain test chain
  // dbc: 'wss://info.dbcwallet.io' // Official chain of public chain
}

/**
 * baseUrl c++ port
 */
// export const baseUrl = '<http://115.231.234.37:5052>' // Satoshi cloud private chain port
// export const baseUrl = '<http://115.231.234.32:5052>' // Mainnet test port
export const baseUrl = '<http://183.232.237.170:5016>' // Mainnet test port -- backup
// export const baseUrl = '<http://115.231.234.34:5052>' // Mainnet port

/**
 * Connect to mongo database
 */
// export const mongoUrl = 'mongodb://localhost:27017/identifier' // local access to mongo
export const mongoUrl = 'mongodb://d**:d************Y@localhost:27017/identifier' // server access mongo

/**
 * Define the specified wallet for rental machine deduction
 */
export const designatedWallet = '5F7L9bc3q4XdhVstJjVB2o7S8RHz2YKsHUB6k3uQpErTmVWu' // Designated wallet for handling fee

```

## 6.Deploy Nginx service

```bash
# Install Nginx
sudo apt install nginx -y

# configure nginx
sudo vim /etc/nginx/nginx.conf

#The example is as follows, please change it according to your own environment, for reference only
# If it is two hosts, please do load balancing

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

  upstream www{
     server server_A:port weight=1 ;
     server server_B:port weight=2 ;
  }
server {
    listen 443 ssl;
    server_name www.example.com;
    ssl on;
    keepalive_timeout 70;
server_tokens off;
fastcgi_param HTTPS on;
          fastcgi_param HTTP_SCHEME https;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    ssl_certificate example.crt;
    ssl_certificate_key example.key;
    ssl_prefer_server_ciphers on;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-Xss-Protection 1;
location / {
root /data/deepbrainchain;
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

# Check if Nginx is configured correctly
sudo nginx -t

# start and set the boot time
sudo nginx -s reload
sudo systemctl start nginx
sudo systemctl enable nginx
```
