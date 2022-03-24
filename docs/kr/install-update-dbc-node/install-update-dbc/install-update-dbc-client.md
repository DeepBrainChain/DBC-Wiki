# DBC고객측 설치 및 업그레이드

고객측 노드의 역할

- DBC 고객노드는 전체 네트워크에서 신뢰할 수 있는 사람의 역할을 하며 현재 네트워크에서 기능 노드를 올바르게 배포하는 기기를 검색가능합니다. 기능 노드가 배포된 후 http를 통해 고객노드를 요청하여 당신의 기능 노드가 고객 노드에 성공적으로 연결되었는지 확인할 수 있습니다. 고객 요청을 통해 기능 노드의 기기 ID를 성공적으로 볼 수 있으면 기능 노드를 성공적으로 배포했음을 의미합니다.

- 제안: 주최측에서 제공되는 고객 노드는 온라인에서 영원히 안정적인 상태를 유지할 수 없으므로 각 컴퓨팅풀은 백업을 위해 두 개의 고객 노드를 구축하길 권장합니다, 동시에 DBC 네트워크 확장에 도움이 됩니다.

- 팁: 고객노드는 하드웨어 장치에 대한 요구가 매우 낮으며, 공용 네트워크를 통해 액세스할 수 있는 한 정상적으로 실행할 수 있는 모든 공용 네트웍 서버로 구축할 수 있습니다,메모리도 거의 차지하지 않습니다.

## A. deploy image server

- **操作系统：ubuntu**

- **设置开机启动 rsync-daemon**

  `sudo vim /etc/default/rsync`

  将 false 改为 true:

  `RSYNC_ENABLE=true`

* **修改配置文件 rsyncd.conf**

  手动复制：

  `sudo cp /usr/share/doc/rsync/examples/rsyncd.conf /etc`

  修改 /etc/rsyncd.conf：

  ```
  ######### 全局: 配置参数 ##########
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
  ```

* **启动 rsync 服务**

  `rsync --daemon`

* **客户端节点上配置镜像中心地址**

  `image_server=<id>,<ip>,<port>,<modulename>`

  id: 用户自定义 ID，用于标识改镜像中心

  ip: 镜像中心 ip 地址

  port: 镜像中心服务器上 rsync-server 的监听地址，默认 873，见上述配置文件

  modulename: 镜像中心上配置的模块 ID，默认 images，见上述配置文件

  示例：

  `image_server=ID_1,127.0.0.1,873,images`

## B. DBC고객측 설치

​설치 환경
sudo apt-get install libvirt-clients libvirt-daemon-system expect -y

1. 설치 스크립트 다운로드： http://116.169.53.132:9000/dbc/install_update_script/mainnet/install_client.sh

​2. install_client.sh 스크립트 문서에 집행 권한 추가 ：

chmod +x install_client.sh`

​3.스크립트 설치 운행:

./install_client.sh [설치목차]`

설치 과정에서 사용자는 2개의 포트 번호를 입력해야 합니다

<img src="./assets/install_dbc_client.png" width = "500" height = "260"  align=center />

## C. DBC 고객측 업그레이드

1. 업그레이드 스크립트 다운로드:

http://116.169.53.132:9000/dbc/install_update_script/mainnet/update_client.sh

2.update_client.sh 스크립트 문서 진행권한 추가 ：

chmod +x update_client.sh`

3.업그레이드 스크립트 운행:

./update_client.sh [설치목차]`

<img src="./assets/update_dbc_client.png" width = "500" height = "260"  align=center />
