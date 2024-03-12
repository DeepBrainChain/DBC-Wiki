import{_ as r,W as a,X as s,Y as n,Z as e,$ as t,a0 as o,H as l}from"./framework-5cecf6de.js";const p="/DBC-Wiki/assets/1-29a80fa0.png",c="/DBC-Wiki/assets/2-cd79281f.png",d="/DBC-Wiki/assets/3-1cf4d364.png",h="/DBC-Wiki/assets/4-4d82a452.png",u="/DBC-Wiki/assets/5-e0a05e6b.png",m="/DBC-Wiki/assets/6-e619e905.png",g="/DBC-Wiki/assets/7-1165cd38.png",f={},w=n("h1",{id:"_2020-end-of-year-report",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2020-end-of-year-report","aria-hidden":"true"},"#"),e(" 2020 End of Year Report")],-1),y={href:"https://deepbrainchainglobal.medium.com/deepbrain-chain-2020-end-of-year-report-79-f9f100b76740",target:"_blank",rel:"noopener noreferrer"},v=o('<figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Dear DeepBrain Chain community members,</p><p>Thank you for standing with us throughout 2020, let’s take a look at the steps we’ve made forward in the last year and look forward to 2021.</p><p>I. Product Development Progress</p><ol><li><p>GPU docker and CPU docker functionality went live;</p></li><li><p>Restart of ‘’sleeping docker’’ (docker that ceased to operate) function added, you can now restart these dockers and use them as GPU docker or CPU docker. If you have more than 20k DBC in your wallet balance once your docker cease to operate it will be reserved for a maximum of 7 days, you can restart your docker anytime within the 7 days. If your wallet balance is less than 20k DBC once your docker cease to operate all data will be destroyed;</p></li><li><p>Added the Switching Between CPU Docker and GPU Docker function, user can switch to CPU docker staking mode when they are not using GPU docker, so that they don’t have to pay fee(s);</p></li><li><p>Launched not-in-use docker clearing and not-in-use mirror image clearing function;</p></li><li><p>Auto restart of DBC under anomaly function launched;</p></li><li><p>The automatic verification function of newly added machines went live. After miners add machines, the system will automatically verify the availability of the machines, so that the whole process from DeepBrain Chain payment network to AI computing network to cloud platform can be fully automated without any human intervention;</p></li><li><p>The docker image supporting TensorFlow2.0 was uploaded, so users can use it directly without installing TensorFlow2.0 by themselves;</p></li><li><p>Added a mechanism to check whether GPUs are being used, releasing idle GPUs in a timely manner;</p></li><li><p>Added an automatic detection mechanism for working containers, invalid container(s) will be automatically shut down within a few minutes once detected;</p></li><li><p>Solved the problem of containers cannot switching directly between GPU and CPU when a single file of a docker container is larger than 8g;</p></li><li><p>Now support the starting of container(s) when the container contains a single large file (more than 10G);</p></li><li><p>The private cloud storage function went live, which facilitates most novice users to upload files to GPU servers;</p></li><li><p>SSH auto-detection mechanism development and testing completed, when the machine is in SSH stuck mode or offline, it will automatically detected and reconnect to prevent containers from being unable to connect;</p></li><li><p>CPU containers added SWAP function, the number of SWAP is equal to the number of RAM;</p></li><li><p>Development completion of automatic process RAM overload kill mechanism;</p></li><li><p>Mirror image supporting drug molecular dynamics simulation went online, facilitating the use of GPU computing power by the majority of drug R&amp;D workers;</p></li><li><p>The cloud platform went online with the function of re-sending emails for successful rentals;</p></li><li><p>Added tensorboard support to facilitate visualization for AI users during training;</p></li><li><p>Went live with Ngrok auto-detection mechanism to prevent container dropouts;</p></li><li><p>Automatic mirror image list fetching went live;</p></li><li><p>Added a mechanism for SSH authentication for miners to go online;</p></li><li><p>Security hardening of the cloud platform servers to prevent data loss was completed;</p></li><li><p>Put online the GPU machine classification mechanism, which classifies machines according to RAM space and hard disk space;</p></li><li><p>Improved the machine rental notification message display, making it easy for miners to view machine earnings;</p></li><li><p>Added a payment verification mechanism to prevent payment failures caused by network problems;</p></li><li><p>Development completion of automatic image acquisition and production of new versions of mirror images;</p></li><li><p>Added a limit on the absolute number of CPU cores for CPU containers to prevent malicious mining of wasting own resources;</p></li><li><p>Improved the mechanism for bringing machines online and offline;</p></li><li><p>Added a hard disk full restart limit and a hard disk space shortage alert mechanism;</p></li><li><p>Improved the switching mechanism of GPU container and CPU container, which no longer depends on the size of data in the container and greatly improves the usage experience. The original 100g of data takes 1 hour to start the container, the new version takes only 3 minutes to start;</p></li><li><p>Addition of a scripted startup mechanism to the distributed computing network layer;</p></li><li><p>Produced a new version of the mirror image, unified python execution environment, unified jupyter and private cloud storage file directory;</p></li><li><p>Optimized the docker container stop auto-detection mechanism;</p></li><li><p>Added support for custom docker container paths;</p></li><li><p>Added support for access to nextcloud security mechanisms with domain miners;</p></li><li><p>Added automatic recovery mechanism in case of GPU container and CPU container switching failure;</p></li><li><p>Added automatic recovery mechanism for disconnection of jupyter, private ngrok;</p></li><li><p>Added automatic recovery mechanism for abnormal termination of ssh, jupyter and private netdisk processes;</p></li><li><p>Development and production of new mirrors for tersorflow 2.1, tersorflow 2.0, tensorflow 1.14, pytorch 1.2, pytorch 1.4, pytorch 1.5, mxnet 1.5, mxnet 1.6 completed;</p></li><li><p>A new upgrade to the deep learning mirrors, removed a lot of junk content and making the mirrors more lightweight;</p></li><li><p>Added mxnet1.5, mxnet1.6, tensorflow2.1, pytorch1.5, to support an environment for molecular kinetic;</p></li><li><p>Each mirror now has the corresponding version of ipykernel, to make it easier to use for jupyter;</p></li><li><p>Added auto-activation of the virtual environment for the corresponding version to the mirror, easier to use;</p></li><li><p>Unified the jupyter in virtual environment and the python version under terminal access;</p></li><li><p>Mirror Ubuntu version upgraded to 18.04;</p></li><li><p>Gcc upgraded to 7.3.0, cudnn upgraded to 7.6.5;</p></li><li><p>Installed opencv compiler version in mirror, massively improved the opencv user experience;</p></li><li><p>Added docker auto-examination and reboot functions;</p></li><li><p>Added detailed server usage document and help document;</p></li><li><p>Optimized AI computing network’s response mechanism;</p></li><li><p>Upgraded Deep Learning mirror and the DBC network. Pre-installed opencv compiled version in mirror, greatly improved the opencv user experience;</p></li><li><p>Added Tsinghua as the default source of download for pip;</p></li><li><p>Optimized respond mechanism for AI computing network;</p></li><li><p>Now support cuda9 in default;</p></li><li><p>Added filecoin snark compute mirror, support using API to visit filecoin seal’s c1 and c2 computing;</p></li><li><p>Added support for Filecoin snark GPU computing;</p></li><li><p>Added discounts for monthly, quarterly and annual machine subscriptions;</p></li><li><p>Added the possibility of renting all the GPUs in one machine;</p></li><li><p>Added AI inference zone, if users rent the machine(s) in this zone they can use the additional APIs;</p></li><li><p>The layout of the website interface has been revamped to make the categories clearer;</p></li><li><p>Added the function of renting DBC Super Node, if you want to participate in DBC Super Node, you don’t need to buy your own machine, you just need to pledge a certain amount of DBC then you will be able to rent machines inside the DBC network and participate in producing blocks;</p></li><li><p>Added pledging function , and to access the High-Stability AI training zone, a machine needs to run reliably for at least 144 hours and pledge a certain amount of DBC;</p></li><li><p>Added shelving and de-shelving of machine(s) function;</p></li><li><p>Optimized the GPU acceleration algorithm;</p></li><li><p>Optimized the cloud platform wallet with the addition of gas functionality;</p></li><li><p>A mining smart contract based on the DBC mainnet is being developed, taking into account a variety of factors such as the length of time the machine is online, the number of graphics cards, whether it is interrupted, whether it is pledged, whether it has a fixed IP address, etc. as criteria for judging mining revenues;</p></li><li><p>Research into the integration of privacy computing and DBC networks;</p></li><li><p>Optimized node dynamic scaling on DBC network;</p></li><li><p>Upgraded deep learning mirror to support deepshare courses and paper;</p></li><li><p>To cope with the continuous increase in the number of machines in the DBC network, further optimized the dynamic scaling of DBC nodes;</p></li><li><p>Launched AIM machines, all machines are now online and ready to be delivered to AIM buyers;</p></li><li><p>Further optimization of the DBC network node message forwarding function;</p></li><li><p>Development of GPU-based virtual machine scheduling engines for cloud gaming and rendering user requirements;</p></li><li><p>Modification of the substrate-based web wallet;</p></li><li><p>Continuing to develop mining smart contract and pledging smart contract, mining contract for different uses of GPU machines are classified, the current classification are: cloud games, high-performance computing, AI inference, AI training, graphics rendering. Different classifications of machines will yield different amount of DBC with mining, also, minimum hardware configuration requirements are added;</p></li><li><p>Ongoing internal testing of security and other related features of the mainchain;</p></li><li><p>Supported nearly 30 GPU cloud platforms based on DeepBrain Chain to go live:</p></li></ol>',5),b={href:"https://www.cvstudy.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.deepmind.ink/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.transportation-ml.cn/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://ai.sdnu.club/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.tensorgpu.com/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://www.opengpu.cn/",target:"_blank",rel:"noopener noreferrer"},U={href:"https://www.planetc.cn/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.gpuhub.top/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.district51.top/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.freegpu.top/",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.leonglearnai.com",target:"_blank",rel:"noopener noreferrer"},T={href:"https://cloud.boincplanet.com",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.freegpu.com/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://gpu.shareaiot.net/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.topgpu.top",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.thinkotech.ai",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.nvidiaai.top/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.longway-gpu.com/",target:"_blank",rel:"noopener noreferrer"},W={href:"https://www.sharedgpu.com/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://www.scclouds.cn/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.aipower.xyz/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.coolgpu.com/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.dbchain.ru/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://cloud.yanxishe.com/",target:"_blank",rel:"noopener noreferrer"},q=o('<p>Mayuan: https:www.codefate.cn.</p><p>2021 Product Development Outlook</p><ol><li><p>Completion of mainchain testing and go-live in the first half of the year;</p></li><li><p>Mining smart contracts going live in the first half of the year;</p></li><li><p>Supporting the dual mode of containers and virtual machines;</p></li><li><p>Dbchain web platform to support mainchain DBC payment settlement;</p></li><li><p>Further adaptation in the 4 main GPU application area: AI training and inference, cloud gaming, rendering, blockchain computing;</p></li><li><p>Improve DBC decentralized GPU network scheduling system.</p></li></ol><p>II. Marketing Progress</p><p>The new coronavirus that devastated the world in 2020 changed everything, but it also accelerated the digital transformation and upgrading of traditional industries. It sped up the arrival of the 5G+AIOT era, now more industries need a massive amount of high-performance compute power, and the distributed high-performance compute power network lead by GPU will become an important infrastructure, which will bring huge development opportunities to DeepBrain Chain.</p><p>In 2020, we withstood various challenges and made great progress in the expansion of DBC application scenario, commercialization, solving historical problems of AIMs and expanding the scale of the computing network, laying a solid foundation for the official launch of the main network in 2021.</p><ol><li>AI Developer Users Continue To Grow Rapidly</li></ol><p>AI developer users increased from 2,500 at the beginning of the year to nearly 17,000 by the end of the year. The users come from Beijing University, Tsinghua University, Fudan University, Shanghai Jiao Tong University, Zhejiang University, University of Chinese Academy of Sciences, University of Electronic Science and Technology, Nankai University, Wuhan University, Huazhong University of Science and Technology, University of Science and Technology of China, Southeast University, Central South University, Dalian University of Technology, Zhongshan University, Renmin University of China, Beijing University of Technology, Beijing University of Posts and Telecommunications, Chongqing University, Sichuan University, Xi’an Jiaotong University, Harvard University, Tokyo Institute of Technology, University of Sydney, Chinese University of Hong Kong, University of Melbourne and other universities with AI-related majors; currently the DeepBrain Chain computing network has become one of the most commonly used GPU cloud service platforms for AI developers in China. Especially when the epidemic first broke out in China, many students faced graduation and needed to prepare their thesis but were unable to return to school to use the servers in the school server room because of the epidemic. The traditional cloud computing vendors were very expensive and the students could not afford them, so the large number of cost-effective GPU servers provided by DeepBrain Chain helped them solve their urgent needs and won the praise of many AI developer users. In addition, we have given free sponsorship of GPU computing power to some university research organizations engaged in the research and development of new coronavirus drugs (such as the Research Center for Drug Discovery (RCDD) of Sun Yat-Sen University</p><p>) to support the research and development of new coronavirus drugs;</p><ol start="2"><li>Finding More Industry Customers</li></ol><p>In the past year, excluding the period of the COVID-19 outbreak, our colleagues were traveling around China to expand our customer scoop more than 70% of the time, and it was the norm for our technical staff to be working until 1–2AM every night. With everyone’s effort, DeepBrain Chain’s compute power network have made great progress in acquiring enterprise customers, covering blockchain, fintech, biopharmaceutical, remote sensing image, cloud gaming, autopilot, AI education and training, rendering and many other scenarios, and gained the recognition of customers, proving that DeepBrain Chain’s compute network has been able to initially meet the needs of commercial customers and take solid steps in the commercialization of the product;</p><ol start="3"><li>AIMs Released</li></ol><p>Thanks to everyone’s patience and support, finally in October 2020 we delivered all the DBC AI Mining machines and is now hosting them in the designated IDC server room. Meanwhile, we have helped the miners to find good customers, and these customers pay to the miners in advance on a monthly basis;</p><ol start="4"><li>DeepBrain Chain’s Compute Network is Growing Rapidly</li></ol><p>In the past year, the number of GPUs in DeepBrain Chain compute network increased from less than 100 cards in January to more than 2,000 cards in December, maintaining a stable growth trend overall, and the utilization rate is over 90%;</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>At the same time, the variety of servers has grown and the quality has been improving, mainly at from mid-to-high-end GPU;</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>DeepBrain Chain’s computing power network nodes have achieved an initial global coverage and are rapidly increasing, which will provide better high-performance computing power service experience to global customers in the future.</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>Outlook</li></ol><p>In the past 2 years, DeepBrain Chain has been firmly taking the road of commercialization, although it is difficult, there is finally a small success; our mainnet will be officially launching in 2021, mining, pledging and burning will be launched at the same time; meanwhile, we will appropriately increase our marketing, PR, so that more partners and new and old investors can see the achievements of DeepBrain Chain.</p><p>III. Ecosystem Building</p><p>The core work of DBC in 2020 revolved around three aspects of the DBC computing power application, computing power supply and product promotion activities (blockchain and mining summit), and the following is the summary of the DBC ecosystem building work in 2020:</p><ol><li>Computing Power Application</li></ol><p>1.1 Currently focused on four major areas: AI training and inferring, cloud gaming, rendering, and blockchain computing, targeting customers including hundreds of universities and research institutions around the world, as well as dozens of enterprises; while laying out scenarios that need high performance computing power, such as artificial intelligence biopharmaceuticals;</p><p>1.2 Our compute power network grew more than 20 times and over compare to 2019, with more than 2,000 GPUs being active across the DBC network at present;</p><p>1.3 Gradually starting the globalization of DBC computing power applications across four continents: Asia, North America, Europe and Australia;</p><ol start="2"><li>Computing Power Supply</li></ol><p>2.1 The main computing power supply in the DBC network comes from idle computing power around the world, spreading across China, the United States, Russia, Canada, India and many other countries; we are also gradually including computing power from miners, with dozens of mining companies joining;</p><p>2.2 GPU supply mainly includes 2080ti, 3080, V100, 1080ti, 2080, etc.;</p><p>2.3 The number of GPUs currently being prepared to join the DBC network exceeds 3,000;</p><ol start="3"><li>Product Promotion Activities</li></ol>',33),L={href:"https://www.lieyuncj.com/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://ipfsnews.net/index",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://www.coinkaola.co/",target:"_blank",rel:"noopener noreferrer"},J=o('<figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>3.2 In 2020 we were also invited by many partners to participate in conferences and concluded many commercial cooperation on these occasions;</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>Outlook</li></ol><p>4.1 Computing Power Application Scenario Targets</p><ul><li><p>More than 100 companies and 10,000 GPUs in large-scale applications of compute power in the artificial intelligence related field;</p></li><li><p>More than 100 enterprises and 10,000 GPUs in the field of blockchain;</p></li><li><p>Further development in the four major areas: AI training and inferring, cloud gaming, rendering and blockchain computing;</p><p>4.2 Computing Power Supply Targets</p></li><li><p>Expanding the proportion of compute power supply from blockchain space;</p></li><li><p>Increasing the construction of computing power nodes in China, with the goal of covering core large and medium-sized cities in China;</p></li><li><p>Further development of globalization, with three important centers: China, the United States and Europe;</p></li></ul><ol start="3"><li>Product Promotion Activities</li></ol><ul><li>Participate in more than 5 blockchain summits, more than 5 artificial intelligence summits, more than 5 cloud gaming summits, and more than 5 partner-sponsored summits.</li></ul><p>— — — — — — — — — — — — — — — — — — — — — — —</p><p>Try our product as an AI user or a GPU power provider:</p>',11),Z={href:"http://www.dbchain.ai",target:"_blank",rel:"noopener noreferrer"},K=n("p",null,"Main social media platform:",-1),X={href:"https://t.me/DeepBrainChainGlobal",target:"_blank",rel:"noopener noreferrer"},$={href:"https://twitter.com/DeepBrainChain",target:"_blank",rel:"noopener noreferrer"},Q=n("p",null,"About DeepBrain Chain",-1),ee=n("p",null,"DeepBrain Chain is the world‘s first AI computing platform driven by blockchain. It uses blockchain technology to help AI companies save up to 70% of computing costs while protecting data privacy in AI training. Its vision is to build a “Decentralized AI Cloud Computing Platform”.",-1),ne=n("p",null,"Yours sincerely,",-1),ie=n("p",null,"The DeepBrain Chain Team",-1);function te(oe,re){const i=l("ExternalLinkIcon");return a(),s("div",null,[w,n("blockquote",null,[n("p",null,[n("a",y,[e("https://deepbrainchainglobal.medium.com/deepbrain-chain-2020-end-of-year-report-79-f9f100b76740"),t(i)])])]),v,n("p",null,[e("AI image algorithm and processing platform: "),n("a",b,[e("https://www.cvstudy.com/"),t(i)]),e(".")]),n("p",null,[e("DeepMind Chinese web training platform: "),n("a",k,[e("https://www.deepmind.ink/"),t(i)]),e(".")]),n("p",null,[e("When Traffic Meets Machine Learning: "),n("a",_,[e("https://www.transportation-ml.cn/"),t(i)]),e(".")]),n("p",null,[e("Shan Shi AI: "),n("a",C,[e("https://ai.sdnu.club/"),t(i)]),e(".")]),n("p",null,[e("Tensor GPU: "),n("a",A,[e("https://www.tensorgpu.com/"),t(i)]),e(".")]),n("p",null,[e("OpenGPU: "),n("a",D,[e("https://www.opengpu.cn/"),t(i)]),e(".")]),n("p",null,[e("Planet C: "),n("a",U,[e("https://www.planetc.cn/"),t(i)]),e(".")]),n("p",null,[e("GPUHub: "),n("a",P,[e("https://www.gpuhub.top/"),t(i)]),e(".")]),n("p",null,[e("Area 51: "),n("a",I,[e("https://www.district51.top/"),t(i)]),e(".")]),n("p",null,[e("FreeGPU: "),n("a",B,[e("https://www.freegpu.top/"),t(i)]),e(".")]),n("p",null,[e("Aivc: "),n("a",G,[e("https://www.leonglearnai.com"),t(i)])]),n("p",null,[e("Algorithm Earth: "),n("a",T,[e("https://cloud.boincplanet.com"),t(i)])]),n("p",null,[e("freegpu: "),n("a",S,[e("https://www.freegpu.com/"),t(i)])]),n("p",null,[e("Carry And Smart Things: "),n("a",x,[e("https://gpu.shareaiot.net/"),t(i)]),e(".")]),n("p",null,[e("TopGpu: "),n("a",z,[e("https://www.topgpu.top"),t(i)]),e(".")]),n("p",null,[e("ThinkOTech: "),n("a",M,[e("https://www.thinkotech.ai"),t(i)]),e(".")]),n("p",null,[e("Ingenuity Cloud: "),n("a",j,[e("https://www.nvidiaai.top/"),t(i)]),e(".")]),n("p",null,[e("longway: "),n("a",O,[e("https://www.longway-gpu.com/"),t(i)]),e(".")]),n("p",null,[e("Shared Arithmetic: "),n("a",W,[e("https://www.sharedgpu.com/"),t(i)])]),n("p",null,[e("StarCraft Cloud: "),n("a",R,[e("https://www.scclouds.cn/"),t(i)]),e(", the")]),n("p",null,[e("AI Power: "),n("a",E,[e("https://www.aipower.xyz/"),t(i)]),e(".")]),n("p",null,[e("CoolCard: "),n("a",N,[e("https://www.coolgpu.com/"),t(i)]),e(",")]),n("p",null,[e("DeliGPU: "),n("a",F,[e("https://www.dbchain.ru/"),t(i)]),e(".")]),n("p",null,[e("Leiphone’s AI studies association: "),n("a",H,[e("https://cloud.yanxishe.com/"),t(i)]),e(".")]),q,n("p",null,[e("3.1 Invited to a number of artificial intelligence conferences and blockchain (including mining) conferences in 2020, including Distributed Storage Shanghai, Hangzhou, Chengdu, Wuhan, Shenzhen and other series of conferences, 2020 WEB3.0 China Summit, Lieyun Finance ("),n("a",L,[e("https://www.lieyuncj.com/"),t(i)]),e("), IPFS News ("),n("a",V,[e("https://ipfsnews.net/index"),t(i)]),e("), Coin Koala ("),n("a",Y,[e("https://www.coinkaola.co/"),t(i)]),e("), etc.;")]),J,n("p",null,[n("a",Z,[e("www.dbchain.ai"),t(i)])]),K,n("p",null,[e("Telegram (English) ： "),n("a",X,[e("https://t.me/DeepBrainChainGlobal"),t(i)])]),n("p",null,[e("Twitter: "),n("a",$,[e("https://twitter.com/DeepBrainChain"),t(i)])]),Q,ee,ne,ie])}const se=r(f,[["render",te],["__file","2021-01-01.html.vue"]]);export{se as default};