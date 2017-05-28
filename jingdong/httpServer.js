/**
 * Created by  on 2017/03/24.
 */
// 依次引入http模块 path模块 express模块
var http = require("http");
var path = require("path");
var express = require("express");
var app = express();//创建函数组(栈)app
//app.use(express.static(path.resolve(__dirname,"public")));  // 使用中间件 处理对静态资源的请求
app.use(express.static("public"));  // 响应客户端对静态资源的请求 public是资源 参数路径

var httpServer = http.createServer(app);// 调用http对象的createServer()方法，创建web服务器
// 运行Web服务器 端口3000
httpServer.listen(3000,function(){
    console.log("服务器正运行在3000端口...");
});
require("./socketServer").listen(httpServer);// 引入模块调用listen方法运行 Socket Server服务器

