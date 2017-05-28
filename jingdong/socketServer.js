
var socketIO = require("socket.io");// 第1步 引入socket.io模块
var clientIds = [];// 定义一个哈希数组，存放所有连接客户端的socket.id
var robotreply=require("./robotreply.js");
var onreply1=robotreply.getObj1();// 得到数据对象
var onreply2=robotreply.getObj2();// 得到数据对象

function getValue(key){
    return onreply1[key];
};
function getNew(key){
    return onreply2[key];
};
//封装的 接受客户端的判断并发送数据方法

var qslist = [ "订单服务", "售后服务", "配送服务","账户服务", "意见与建议","一起帮-您的购物助手", "虚拟商品", "乡村推广员招募","其他问题"];
var newslist=["密码","如何付款", "分期付款","促销活动","建议","hi,　,你好，hello，您好，我想买" ,"其他"];
module.exports = {
    // 定义方法 ：socket.io监听web服务器，并返回socket.io服务器
    listen: function (httpServer) {
        var socketServer = socketIO.listen(httpServer);// 第2步 创建socket服务器--监听所有连接的客户端
        // 第3步 socket服务器运行-- on "connect"事件，每次连接创建新的socket对象负责对接
        socketServer.on("connect", function (socket) {
            console.log("有新的客户端连接:" + socket.id);
            clientIds.push(socket.id);  // 当客户刚连接服务器时 将新用户的socket.id保存到数组中
            console.log("connect:" + clientIds.length);// 多少个连接
                            // 消息类型2种：第1，qslist-初始问题列表
            var msg={type:"qslist", qs:qslist  };
            socket.send(msg);//将初始问题列表发给客户端
            // socket对象 on "message" 客户端,接收客户端发送的咨询
            socket.on("message", function (data) {
                // 根据2大类问题 回复客户：1，qslist-初始问题列表 2，answers-实时在线回复新问题
                run(socket,data);// 调用方法：回答客户端消息
            });
            socket.on("disconnect", function(){ // socket对象 on "disconnect"-- 客户端断开连接离开
                clientIds.splice(clientIds.indexOf(socket.id),1); // 从clientIds数组中删除这个断开的客户端 socket.id
                console.log("disconnect:" + clientIds.length);
            });
        });
    }
};
function run(socket,data){
    if(data.type=="answers"){//客户访问初始问题列表的请求和回答
        var content ="自动回复：";
        for(var i=0;i<qslist.length;i++){
            if(data.qs == qslist[i]){
                content += getValue(qslist[i]);
            };
        };// 消息类型：第2，answers-实时在线回复新问题
        var msg= { type:"answers", as:content   };
        socket.send(msg);
    }else if(data.type=="news"){// 客户新输入问题的请求和回答
        var newcont="JIMI机器人：";
        for (var j = 0; j < newslist.length; j++) {
            if (newslist[j].indexOf(data.keyword)!=-1) {
                newcont += getNew(newslist[j]);
            };
        };
        if(newslist.indexOf(data.keyword)==-1){
            newcont +="请输入以下关键字：密码 , 如何付款 , 促销活动 , 建议 , 其他 ,如果仍然无法解决，我帮您转接人工服务";
        };
        var obj={ type:"news", ns:newcont };//定义 客户新输入内容回复
        socket.send(obj);  // 向客户端socket发送new消息
    };
};

/**
 * Created by zcz on 2017-03-24 .
 * 消息的类型：1,客服发送的消息：需要发给指定的目标客户 2,客户发送的消息：需要发给客服
 * 客户端和服务器数据传送格式-json，socket.io会自动将json转为js对象，Socket.io 的发送对象范围：
 * 定义消息格式如下：
 * 1. 客户 咨询信息：
 * {  type: "咨询",nickname: "小神仙", msg: "您好，神仙水什么时候到货?"}
 * 2. 客服 回复消息：
 * {type: "客服",nickname: "京东客服",msg: "您好，您咨询的商品，月底到货。"}
 *
 向当前客户端发送事件
 socket.emit('login', { numUsers: numUsers});
 广播（不包含当前客户端）
 socket.broadcast.emit('new message', {username: socket.username,  message: data });
 广播（且包含当前客户端）
 io.sockets.emit('message', "this is a test");
 在房间广播（不包含当前客户端）
 socket.broadcast.to('game').emit('message', 'nice game');
 在房间广播（包含当前客户端）
 io.sockets.in('game').emit('message', 'cool game');
 发送给指定客户端
 io.sockets.sockets[socketid].emit('message', 'for your eyes only');
 就可以向一个特定用户推送消息，但是如何获得这个socketId，就是生成一个哈希数组，key为username，
 值为socket.id，这样就可以通过用户名获取对应的id，进而可以向特定client推送消息。
 */
