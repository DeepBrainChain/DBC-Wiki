# DBC-Wiki

点击 [https://deepbrainchain.github.io/DBC-Wiki/](https://deepbrainchain.github.io/DBC-Wiki/) 阅读文档。

## 本地预览

```sh
# 下载仓库
git clone https://github.com/DeepBrainChain/DBC-Wiki.git
cd  DBC-Wiki && pnpm install
pnpm docs:dev
```

执行了以上命令后，将会看到类似下面的输出：

```console
...
  > Local:    http://localhost:8080/DBC-Wiki/
  > Network:  http://192.168.1.3:8080/DBC-Wiki/
  > Network:  http://192.168.3.152:8080/DBC-Wiki/
```

根据提示打开 [http://localhost:8080/DBC-Wiki/](http://localhost:8080/DBC-Wiki/) 即可开始预览

## 开启页面评论

在 markdown 页面头部添加：

```sh
---
comment: ture
---
```
