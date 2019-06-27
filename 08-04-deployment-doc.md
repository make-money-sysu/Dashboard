# Deployment Document

## 前端部署
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
前端build出vue项目传输到后台服务器进行部署，文件目录包括
+ static
+ index.html


## 后端部署
首先先确定golang已经成功安装，不同的系统对应不同的安装方法，具体安装教程见[go安装教程](<https://golang.org/doc/install>)

然后执行以下代码把项目下载到本地：

```
go get github.com/make-money-sysu/server
```

然后执行以下代码安装bee工具：

```
go get github.com/beego/bee
```

请务必将$GOPATH/bin加入到环境变量中，保证bee工具能正确运行

然后运行如下命令安装所有的依赖(部分依赖可能需要翻墙)：

```
go get ./...
```

然后进入$GOPATH/src/github.com/make-money/server文件夹（也就是源码的存储位置），运行如下命令：

```
bee run -gendoc=true -downdoc=true
```

这样后端程序就已经运行起来了

## 整合
把前端生成的静态文件放到服务器的sever/static目录下，完成前端部署。
