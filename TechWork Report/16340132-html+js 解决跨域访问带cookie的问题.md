# html+js 解决跨域访问带cookie的问题

## 后台需要修改的部分

axios默认是发送请求的时候不会带上cookie的，需要通过设置withCredentials: true来解决。 这个时候需要注意需要后端配合设置：
+ **header信息 Access-Control-Allow-Credentials:true**

+ **Access-Control-Allow-Origin不可以为 \*，因为 \* 会和 Access-Control-Allow-Credentials:true 冲突，需配置指定的地址**

如果后端设置 Access-Control-Allow-Origin: '*', 会有如下报错信息

>Failed to load http://localhost:8090/category/lists: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. Origin 'http://localhost:8081' is therefore not allowed access. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.

后端配置缺一不可，否则会出错，贴上我的后端示例：
```js
const express = require('express')
const app = express()
const cors = require('cors') // 此处我的项目中使用express框架，跨域使用了cors npm插件

app.use(cors{
            credentials: true, 
            origin: 'http://localhost:8081', // web前端服务器地址
            // origin: '*' // 这样会出错
        })
```
## 前端需要修改的部分
### 使用axios
这里以用户登陆为例子，需要执行一个post请求，发送用户名+密码
**关键代码**
```js
axios.defaults.withCredentials=true;
```
完整代码
```js
function login_fun(){
        var userName = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        console.log(userName);
        console.log(password);
        userName = parseInt(userName);

        let url_login = 'http://139.199.166.124:8080/login';
        axios.defaults.withCredentials=true;
        axios.defaults.timeout = 6000;
        // axios.defaults.headers.post['Content-Type']='text/plain';
        axios.post(url_login, JSON.stringify({
          "id": userName,
          "password": password
        }))
        .then(function(res){
            console.log(res);//处理成功的函数 相当于success
            window.parent.location.href = "/HomePage";
            })
        .catch(function(error){
            console.log('fail');
            console.log(error);//错误处理 相当于error
        })
```
### 使用ajax
同样是执行一个间段的post请求
**关键代码**
```js
xhrFields: {
    withCredentials: true    // 要在这里设置上传cookie
},
crossDomain: true,
```
```js
$.ajax({
           type: "post",
           dataType: 'json',
           url: "http://139.199.166.124:8080/login", //lt
           xhrFields: {
               withCredentials: true    // 要在这里设置上传cookie
           },
           crossDomain: true,
   		data: JSON.stringify({
                   "id": userName,
                   "password": password
               }),
   		success: function(data){
   			console.log('success');
               console.log(document.cookie.length);
               window.parent.location.href = "/HomePage";
               // window.open("/HomePage");
   		},
   		error: function(Request, status, msg){
   			console.log(Request);
   			console.log(status);
   			console.log(msg);
   			console.log('fail');
   		}
   	});
```

参考博客
[1. 浏览器跨域请求之credentials](https://blog.csdn.net/vincent_ling/article/details/51714691?tdsourcetag=s_pcqq_aiomsg)
[2. axios的cookie跨域以及相关配置](https://segmentfault.com/a/1190000011811117)## 后台需要修改的部分
axios默认是发送请求的时候不会带上cookie的，需要通过设置withCredentials: true来解决。 这个时候需要注意需要后端配合设置：
+ **header信息 Access-Control-Allow-Credentials:true**

+ **Access-Control-Allow-Origin不可以为 \*，因为 \* 会和 Access-Control-Allow-Credentials:true 冲突，需配置指定的地址**

如果后端设置 Access-Control-Allow-Origin: '*', 会有如下报错信息

>Failed to load http://localhost:8090/category/lists: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. Origin 'http://localhost:8081' is therefore not allowed access. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.

后端配置缺一不可，否则会出错，贴上我的后端示例：
```js
const express = require('express')
const app = express()
const cors = require('cors') // 此处我的项目中使用express框架，跨域使用了cors npm插件

app.use(cors{
            credentials: true, 
            origin: 'http://localhost:8081', // web前端服务器地址
            // origin: '*' // 这样会出错
        })
```
## 前端需要修改的部分
### 使用axios
这里以用户登陆为例子，需要执行一个post请求，发送用户名+密码
**关键代码**
```js
axios.defaults.withCredentials=true;
```
完整代码
```js
function login_fun(){
        var userName = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        console.log(userName);
        console.log(password);
        userName = parseInt(userName);

        let url_login = 'http://139.199.166.124:8080/login';
        axios.defaults.withCredentials=true;
        axios.defaults.timeout = 6000;
        // axios.defaults.headers.post['Content-Type']='text/plain';
        axios.post(url_login, JSON.stringify({
          "id": userName,
          "password": password
        }))
        .then(function(res){
            console.log(res);//处理成功的函数 相当于success
            window.parent.location.href = "/HomePage";
            })
        .catch(function(error){
            console.log('fail');
            console.log(error);//错误处理 相当于error
        })
```
### 使用ajax
同样是执行一个间段的post请求
**关键代码**
```js
xhrFields: {
    withCredentials: true    // 要在这里设置上传cookie
},
crossDomain: true,
```
```js
$.ajax({
           type: "post",
           dataType: 'json',
           url: "http://139.199.166.124:8080/login", //lt
           xhrFields: {
               withCredentials: true    // 要在这里设置上传cookie
           },
           crossDomain: true,
   		data: JSON.stringify({
                   "id": userName,
                   "password": password
               }),
   		success: function(data){
   			console.log('success');
               console.log(document.cookie.length);
               window.parent.location.href = "/HomePage";
               // window.open("/HomePage");
   		},
   		error: function(Request, status, msg){
   			console.log(Request);
   			console.log(status);
   			console.log(msg);
   			console.log('fail');
   		}
   	});
```

参考博客
[1. 浏览器跨域请求之credentials](https://blog.csdn.net/vincent_ling/article/details/51714691?tdsourcetag=s_pcqq_aiomsg)
[2. axios的cookie跨域以及相关配置](https://segmentfault.com/a/1190000011811117)