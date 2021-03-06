# 软件设计文档

## 项目环境

- 服务器：ubuntu server16.04 上的 mySQL
- 客户端：Chrome

## 项目构建管理工具

- 构建 Vue框架进行前端开发，beego作为后端开发框架
- 管理 采用GitHub管理平台托管代码

## 技术选型

本产品使用Chrome作为用户交互方式，使用beego作为后端开发的框架，服务端使用 MySQL 数据库。整体架构是MVC架构，服务端还使用了面向服务的架构（微服务架构），使用面向对象编程。以下是我们使用技术的优势：

- 谷歌浏览器在使用的过程中，图片显示是比较很快的，网页反应速度也快， 广告过滤效果较好，优于其他浏览器和其他交互方式。

- beego 是基于八大独立的模块构建的，是一个高度解耦的框架。当初设计 beego 的时候就是考虑功能模块化，用户即使不使用 beego 的 HTTP 逻辑，也依旧可以使用这些独立模块。

- mySQL 是开源数据库且简单易用 ——MySQL 是一个高性能且相对简单的数据库系统，与一些更大系统的设置和管理相比，其复杂程度较低。mySQL有不错的可移植性 ，MySQL 可运行在各种版本的 UNIX 以及其他非 UNIX 的系统且运行速度很快。

- 使用MVC架构

  - 低耦合性 视图层和业务层分离，这样就允许更改视图层代码而不用重新编译模型和控制器代码，同样，一个应用的业务流程或者业务规则的改变只需要改动MVC的模型层即可。因为模型与控制器和视图相分离，所以很容易改变应用程序的数据层和业务规则。
  - 高重用性和可适用性 随着技术的不断进步，现在需要用越来越多的方式来访问应用程序。MVC模式允许你使用各种不同样式的视图来访问同一个服务器端的代码。它包括任何WEB（HTTP）浏览器或者无线浏览器（wap），比如，用户可以通过电脑也可通过手机来订购某样产品，虽然订购的方式不一样，但处理订购产品的方式是一样的。由于模型返回的数据没有进行格式化，所以同样的构件能被不同的界面使用。例如，很多数据可能用HTML来表示，但是也有可能用WAP来表示，而这些表示所需要的命令是改变视图层的实现方式，而控制层和模型层无需做任何改变。
  - 较低的生命周期成本 MVC使开发和维护用户接口的技术含量降低。
  - 快速的部署 使用MVC模式使开发时间得到相当大的缩减，它使程序员（Java开发人员）集中精力于业务逻辑，界面程序员（HTML和JSP开发人员）集中精力于表现形式上。
  - 可维护性 分离视图层和业务逻辑层也使得WEB应用更易于维护和修改。
  - 有利于软件工程化管理 由于不同的层各司其职，每一层不同的应用具有某些相同的特征，有利于通过工程化、工具化管理程序代码。
  
- 使用微服务架构

  - 因为有两位后端开发人员，且负责不同的模块，为了避免后期整合增加的工作量，我们使用微服务的架构和设计理念，即双方通过调用接口来实现程序的完整性，而非将代码整合在一起。通过运行开发和运行多个小的程序模块，来实现产品的功能扩展，提高了平台的可扩展性和可维护性。

## 项目目录

### 后端目录

```
│  main.go
│  
├─conf
│      app.conf
│      
├─controllers
│      default.go
│      DoSurveyController.go
│      FriendsController.go
│      LoginController.go
│      MsgController.go
│      PackageController.go
│      SurveyController.go
│      UserController.go
│      
├─models
│      do_survey.go
│      friends.go
│      msg.go
│      package.go
│      survey.go
│      user.go
│      utils.go
│      
├─routers
│      router.go
│      
├─static
│  └─js
│          reload.min.js
│          
├─swagger
│      favicon-16x16.png
│      favicon-32x32.png
│      index.html
│      oauth2-redirect.html
│      swagger-ui-bundle.js
│      swagger-ui-bundle.js.map
│      swagger-ui-standalone-preset.js
│      swagger-ui-standalone-preset.js.map
│      swagger-ui.css
│      swagger-ui.css.map
│      swagger-ui.js
│      swagger-ui.js.map
│      swagger.json
│      swagger.yml
│      
        

```

### 前端目录

```
│  README.md
│  
└─front-end
    └─make-money
        │  .babelrc
        │  .editorconfig
        │  .eslintignore
        │  .eslintrc.js
        │  .gitignore
        │  .postcssrc.js
        │  index.html
        │  package-lock.json
        │  package.json
        │  README.md
        │  
        ├─build
        │      build.js
        │      check-versions.js
        │      logo.png
        │      utils.js
        │      vue-loader.conf.js
        │      webpack.base.conf.js
        │      webpack.dev.conf.js
        │      webpack.prod.conf.js
        │      
        ├─config
        │      dev.env.js
        │      index.js
        │      prod.env.js
        │      test.env.js
        │      
        ├─src
        │  │  App.vue
        │  │  main.js
        │  │  
        │  ├─assets
        │  │  │  avatar.jpg
        │  │  │  login.png
        │  │  │  logo.png
        │  │  │  mainpage.png
        │  │  │  order.png
        │  │  │  personInfo.png
        │  │  │  Register.png
        │  │  │  sysu.jpg
        │  │  │  sysu.png
        │  │  │  
        │  │  └─bootstrap-3.3.7-dist
        │  │      ├─bootstrap-3.3.7-dist
        │  │      │  ├─css
        │  │      │  │      bootstrap-theme.css
        │  │      │  │      bootstrap-theme.css.map
        │  │      │  │      bootstrap-theme.min.css
        │  │      │  │      bootstrap-theme.min.css.map
        │  │      │  │      bootstrap.css
        │  │      │  │      bootstrap.css.map
        │  │      │  │      bootstrap.min.css
        │  │      │  │      bootstrap.min.css.map
        │  │      │  │      
        │  │      │  ├─fonts
        │  │      │  │      glyphicons-halflings-regular.eot
        │  │      │  │      glyphicons-halflings-regular.svg
        │  │      │  │      glyphicons-halflings-regular.ttf
        │  │      │  │      glyphicons-halflings-regular.woff
        │  │      │  │      glyphicons-halflings-regular.woff2
        │  │      │  │      
        │  │      │  └─js
        │  │      │          bootstrap.js
        │  │      │          bootstrap.min.js
        │  │      │          npm.js
        │  │      │          
        │  │      ├─css
        │  │      │      bootstrap-theme.css
        │  │      │      bootstrap-theme.css.map
        │  │      │      bootstrap-theme.min.css
        │  │      │      bootstrap-theme.min.css.map
        │  │      │      bootstrap.css
        │  │      │      bootstrap.css.map
        │  │      │      bootstrap.min.css
        │  │      │      bootstrap.min.css.map
        │  │      │      
        │  │      ├─fonts
        │  │      │      glyphicons-halflings-regular.eot
        │  │      │      glyphicons-halflings-regular.svg
        │  │      │      glyphicons-halflings-regular.ttf
        │  │      │      glyphicons-halflings-regular.woff
        │  │      │      glyphicons-halflings-regular.woff2
        │  │      │      
        │  │      └─js
        │  │              bootstrap.js
        │  │              bootstrap.min.js
        │  │              npm.js
        │  │              
        │  ├─components
        │  │  │  calendar-input.vue
        │  │  │  dialog.vue
        │  │  │  ExpressDelivery.vue
        │  │  │  expressTest.js
        │  │  │  Global.vue
        │  │  │  HelloWorld.vue
        │  │  │  HomePage.vue
        │  │  │  Login.vue
        │  │  │  MainPage.vue
        │  │  │  personalInfo.vue
        │  │  │  QuestionnaireData.vue
        │  │  │  QuestionnaireEdit.vue
        │  │  │  QuestionnaireFill.vue
        │  │  │  QuestionnaireList.vue
        │  │  │  Register.vue
        │  │  │  
        │  │  └─public
        │  │          header.vue
        │  │          
        │  ├─router
        │  │      index.js
        │  │      
        │  └─style
        │          app.scss
        │          calendar.scss
        │          dialog.css
        │          ExpressDelivery.css
        │          header.scss
        │          login.css
        │          QuestionnaireData.scss
        │          QuestionnaireEdit.scss
        │          QuestionnaireFill.scss
        │          QuestionnaireList.scss
        │          
        ├─static
        │  │  .gitkeep
        │  │  favicon.ico
        │  │  logo.png
        │  │  
        │  ├─bootstrap-3.3.7-dist
        │  │  ├─bootstrap-3.3.7-dist
        │  │  │  ├─css
        │  │  │  │      bootstrap-theme.css
        │  │  │  │      bootstrap-theme.css.map
        │  │  │  │      bootstrap-theme.min.css
        │  │  │  │      bootstrap-theme.min.css.map
        │  │  │  │      bootstrap.css
        │  │  │  │      bootstrap.css.map
        │  │  │  │      bootstrap.min.css
        │  │  │  │      bootstrap.min.css.map
        │  │  │  │      
        │  │  │  ├─fonts
        │  │  │  │      glyphicons-halflings-regular.eot
        │  │  │  │      glyphicons-halflings-regular.svg
        │  │  │  │      glyphicons-halflings-regular.ttf
        │  │  │  │      glyphicons-halflings-regular.woff
        │  │  │  │      glyphicons-halflings-regular.woff2
        │  │  │  │      
        │  │  │  └─js
        │  │  │          bootstrap.js
        │  │  │          bootstrap.min.js
        │  │  │          npm.js
        │  │  │          
        │  │  ├─css
        │  │  │      bootstrap-theme.css
        │  │  │      bootstrap-theme.css.map
        │  │  │      bootstrap-theme.min.css
        │  │  │      bootstrap-theme.min.css.map
        │  │  │      bootstrap.css
        │  │  │      bootstrap.css.map
        │  │  │      bootstrap.min.css
        │  │  │      bootstrap.min.css.map
        │  │  │      
        │  │  ├─fonts
        │  │  │      glyphicons-halflings-regular.eot
        │  │  │      glyphicons-halflings-regular.svg
        │  │  │      glyphicons-halflings-regular.ttf
        │  │  │      glyphicons-halflings-regular.woff
        │  │  │      glyphicons-halflings-regular.woff2
        │  │  │      
        │  │  └─js
        │  │          bootstrap.js
        │  │          bootstrap.min.js
        │  │          npm.js
        │  │          
        │  ├─css
        │  │      02.css
        │  │      1.css
        │  │      senderreceiver.css
        │  │      staff&admin.css
        │  │      user.css
        │  │      
        │  ├─html
        │  │      admin_goods.html
        │  │      admin_staff.html
        │  │      admin_vip.html
        │  │      debug.log
        │  │      homepage.html
        │  │      login.html
        │  │      main.html
        │  │      receiver.html
        │  │      register.html
        │  │      sender.html
        │  │      user_center.html
        │  │      
        │  ├─image
        │  │      0198380141424148503.jpg
        │  │      1.png
        │  │      2.png
        │  │      2089312254@chatroom_1486356859619_63.jpg
        │  │      276db8df3822.jpg
        │  │      55ffc7529f1920c62ce345cad7e2c6bd.jpg
        │  │      act1.jpg
        │  │      act2.png
        │  │      act3.jpg
        │  │      b1.png
        │  │      bg.jpg
        │  │      find.png
        │  │      lago.jpg
        │  │      logo.png
        │  │      logo1.jpg
        │  │      mail_receive.png
        │  │      mail_send.png
        │  │      TB2V73UfRmWBuNkSndVXXcsApXa_!!725677994.jpg_430x430q90.jpg
        │  │      test1.jpg
        │  │      test2.jpg
        │  │      test3.jpg
        │  │      u=2720665496,345531871&fm=27&gp=0.jpg
        │  │      
        │  └─js
        │          1.js
        │          2.js
        │          3.js
        │          jquery-3.2.1.min.js
        │          
        └─test
            ├─e2e
            │  │  nightwatch.conf.js
            │  │  runner.js
            │  │  
            │  ├─custom-assertions
            │  │      elementCount.js
            │  │      
            │  └─specs
            │          test.js
            │          
            └─unit
                │  .eslintrc
                │  jest.conf.js
                │  setup.js
                │  
                └─specs
                        HelloWorld.spec.js
                        

```



## 架构设计

本系统采用了MVC（Model-View-Controller）设计，模式，实现一个典型的三层架构模型。三层架构模型包括：模型层、视图层、控制器层。
- 视图层(View)

>视图层负责接收用户的命令，交给控制器层处理，并显示处理结果。我们采用SpringMVC负责视图层，并且调用控制器层提供的接口进行数据传递。
- 控制器层(Control)

>控制层是系统的核心组成部分。管理所有系统功能有关的数据流和控制流，从而实现系统的逻辑功能。向上提供服务接口给表示层调用。在控制器层中，不同的子系统提供独立的服务接口，各自独立实现，互不干预影响。控制器层依赖于持久化提供的持久化服务。
- 模型层(Model)

>模型层包括数据实体，并向上提供接口。属于不同子系统的数据实体放置在不同的包中。

下面给出系统的总体架构图，总体架构如上述，为典型的三层架构。

![](https://i.loli.net/2019/06/26/5d1380172d5f331554.png)



## 子系统设计

![](https://i.loli.net/2019/06/26/5d1395d50243156638.png)

该系统包括五个子系统：登录子系统、发布订单子系统、接收订单子系统、订单管理子系统、用户子系统。五个子系统向主程序提供接口服务，主程序调用子系统提供的接口完成主要的流程。

### 登录子系统

登录子系统包括用户注册和用户登录两部分，第一次进入小程序需要微信授权进行注册，随后每次进入系统都会自动以该微信账户登录。

![](https://i.loli.net/2019/06/26/5d138c9e0e91c31969.png)

### 订单发布子系统

订单发布子系统包括发布快递、发布求助、发布跑腿、发布闲置、发布问卷五个业务，在主页点击“一键发布”，即可选择发布模块进行发布订单。

![](https://i.loli.net/2019/06/26/5d138cd14f6bf19669.png)

### 接收订单子系统

![](https://i.loli.net/2019/06/26/5d138d1f7145263551.png)

### 订单管理子系统

![](https://i.loli.net/2019/06/26/5d13949feca2657464.png)

### 用户子系统

![](https://i.loli.net/2019/06/26/5d1395fb7fe7878652.png)

#### 个人信息

基本信息包括名字，昵称，学校，联系方式，此外校园卡信息是用户认证的关键。

![](https://i.loli.net/2019/06/26/5d13961bd9ded59443.png)

#### 我的余额

包括余额显示，余额账单，充值，提现，绑定银行卡（虚拟功能）。

![](https://i.loli.net/2019/06/26/5d13964d5e15324353.png)

#### 联系客服

普通用户可以获取客服的联系方式，管理员可以修改客服信息。

![](https://i.loli.net/2019/06/27/5d13968519b5757977.png)

#### 信息审核

管理员可以对用户的认证申请进行审核，也可以修改客服信息。

![](https://i.loli.net/2019/06/27/5d1396a4b947345193.png)

## 系统数据库设计

### 数据库设计原则：

一个好的数据库产品并不等于就是有一个好的应用系统，假设不能设计一个逻辑合理的数据库模型，不仅仅会增加程序客户端和服务器端的编程与维护的难度，而且还会大大影响系统在实际操作运行的性能。 数据库设计的两种方法：

- 面向数据：以信息需求为主，同时兼顾处理需求;

- 面向过程：以处理需求为主，同时兼顾信息需求。

数据库设计是建立数据库和应用系统的核心和基础，它要求对于一个给定的应用环境，构造最优的数据库模式，建立一个数据库应用系统，该系统可以有效地存储数据，满足用户的应用需求。

### 系统ER图的设计

以下给出由关键抽象的实体及其关联关系形成的 ER 图：

![](https://i.loli.net/2019/06/27/5d147c324d3d219954.png)

## 路由设计

### 返回状态码

| 类型                | stateCode | info     |
| ------------------- | --------- | -------- |
| 请求操作成功        | 200       | NULL     |
| 成功GET且文件未改变 | 304       | NULL     |
| 数据格式错误        | 400       | NULL     |
| 错误                | 500       | 错误信息 |

### 路由设计

本项目api文档由swagger自动生成，直接运行后端程序后在localhost:8080/swagger地址下即可访问api文档界面，另有运行后导出的网页内容pdf，见[pdf下载链接](https://raw.githubusercontent.com/make-money-sysu/Dashboard/master/api.pdf)。

### API示例说明—用户创建问卷

#### 应用场景

用户在订单页面选择自己想要接受的订单。

### 是否需要证书

需要

#### 请求参数

| 字段名         | 变量名        | 必填 | 类型   | 示例值                                                       | 描述     |
| -------------- | ------------- | ---- | ------ | ------------------------------------------------------------ | -------- |
| 题目内容       | content       | 是   | string | [{"type":0,"title":"对新天地的满意度","a":"不满意","b":"一般","c":"较满意","d":"满意"},{"type":1,"title":"喜欢店铺","a":"不满意","b":"一般","c":"较满意","d":"满意"},{"type":2,"title":"对新天地的建议","a":"","b":"","c":"","d":""}] | 问卷题目 |
| 问卷初始化统计 | content_count | 是   | string | {"content_count":[ {"type":0,"a":0,"b":0,"c":0,"d":0,"fill":""},{"type":1,"a":0,"b":0,"c":0,"d":0,"fill":""},{"type":2,"a":0,"b":0,"c":0,"d":0,"fill":""}] } | 问卷统计 |
| 描述           | description   | 否   | string | 新天地满意度调查                                             | 描述     |
| 问卷名称       | name          | 是   | string | 新天地满意度调查                                             | 问卷名称 |
| 单价           | pay           | 是   | int    | 1                                                            | 单价     |
| 总数           | total_num     | 是   | int    | 80                                                           | 总是     |

举例如下。

```
questionair {
content:[{"type":0,"title":"对新天地的满意度","a":"不满意","b":"一般","c":"较满意","d":"满意"},{"type":1,"title":"喜欢店铺","a":"不满意","b":"一般","c":"较满意","d":"满意"},{"type":2,"title":"对新天地的建议","a":"","b":"","c":"","d":""}],
content_count:{"content_count":[                  {"type":0,"a":0,"b":0,"c":0,"d":0,"fill":""},{"type":1,"a":0,"b":0,"c":0,"d":0,"fill":""},{"type":2,"a":0,"b":0,"c":0,"d":0,"fill":""}]
},
description:新天地满意度调查,
name:新天地满意度调查,
pay:1
total_num:80
 } 
```

**3.6.返回结果**

| 字段名     | 变量名 | 必填 | 类型        | 示例值  | 描述             |
| ---------- | ------ | ---- | ----------- | ------- | ---------------- |
| 返回状态码 | result | 是   | JSON String | SUCCESS | 接受订单操作成功 |

## 功能模型

### 验证用户信息

![](https://i.loli.net/2019/06/27/5d13a059ba0d075422.png)

### 发布订单

![](https://i.loli.net/2019/06/27/5d13a0816068299843.png)

### 接受订单

![](https://i.loli.net/2019/06/27/5d13a092e51ae49132.png)

### 管理员审核

![](https://i.loli.net/2019/06/27/5d13a0a93713a88984.png)

### 删除订单

![](https://i.loli.net/2019/06/27/5d13a0c14497a63763.png)

### 确认订单完成

![](https://i.loli.net/2019/06/27/5d13a0d6205d199931.png)

### 问卷统计

![](https://i.loli.net/2019/06/27/5d13a0eba140231116.png)

## 用例设计

![](https://i.loli.net/2019/06/27/5d13a110da47167488.png)

## 视图

### 逻辑视图

我们的赚闲钱系统采用的是经典的分层架构，主要分为UI层，业务层以及数据层。

![](https://i.loli.net/2019/06/27/5d13aba16ffff97905.png)

### 物理视图

![](https://i.loli.net/2019/06/27/5d13ab78b95e169146.png)

## 设计技术

#### MVC架构

view 是指前端，后端的接口开发使用Contorller作为控制器，调用service，接口的implement与service 分离使代码更具维护性。

#### 微服务架构

因为有两位后端开发人员，且负责不同的模块，为了避免后期整合增加的工作量，我们使用微服务的架构和设计理念，即双方通过调用接口来实现程序的完整性，而非将代码整合在一起。通过运行开发和运行多个小的程序模块，来实现产品的功能扩展，提高了平台的可扩展性和可维护性。

#### 向对象编程

程序多处使用类和类对象，实现面向对象编程， 提高代码的可重用性和可维护性。


