/**
 * Created by zcz on 2017/3/25.
 */
$(function(){
    send();//实现客户端和服务器端发送消息
    close();//关闭客服弹框
	inputsearch();//联系人搜索焦点控制
});
//实现客户于人机双向对话，请求服务器数据并返回数据
function send(){
    var clientSocket=io();//与socket服务器连接后 创建客户端的socket对象，监听服务器端发来的消息并回复
    clientSocket.on("message",function(data){
        run(data);//调用方法： 判断服务器发送过来的数据类型三种并表达数据
        $("#apply").scrollTop( $("#apply").prop("scrollHeight")  );// 对话内容永远置底 对话窗口向下滚动
    });
        //事件委派给li的a ,用户单击问题列表，
    $("#apply").on("click","a.qs",function () {
        var msg = { type:"answers" ,qs: $(this).text() };
        clientSocket.send(msg);//客户点击的该问题发给机器人客服
    });
    // 客户在线咨询输入，socket发送json数据给socket服务器
    $("#send").on("click",function(){
        var content = $("#ask").val();
        if(content!=""){// 如果不为空发送
            var html= '<div class="fr">'+'<img src="images/p_03.jpg">'+'<span >'+content+'</span>'+'</div>';
            $("#apply").append(html);// 把客户输入内容发送到 上面对话框中
            var msg = { type:"news" ,keyword: content };//定义数据类型
            clientSocket.send(msg);
        };
        $("#apply").scrollTop( $("#apply").prop("scrollHeight"));
        $("#ask").val(null);    // 清空输入框
    });
    // 以下 如果是按下的Enter键并且不为空 模拟点击send Click 事件
    $('#ask').on("keydown",function (event) {
        var value= $(this).val();
        if (event.keyCode==13 && value!=null){
            event.preventDefault();//阻止默认事件
            $("#send").trigger("click");
        };
    });
};
function run(data){//封装 判断数据和表达数据 方法
    var type = data.type;// data.type分3种- 第1种：qslist， 第2种：answers。第3种 news 客户新输入的问题关键字
    switch(type){
        case "qslist"://***第1种：qslist-接受数据来--初始化问题列表
            var qslist= data.qs;
            var content='<h2 class="hh">嘿嘿，您好，JIMI机器人很高兴为您服务！以下是咨询的业务内容：</h2>';
            $("#apply").append(content);
            var  $ul=$("<ul>");// 通过 遍历 动态构建 初始问题列表
            $(qslist).each(function(index,q){
                var lc ='<li><img src="images/zx_09.jpg" class="qimg"><a href="#" class="qs">'+ q+'</a></li>';
                $ul.append( lc);
            });
            $("#apply").append($ul);
            break;

        case "answers"://*** 第2种：answers-点击初始化问题列表 数据的回复
            var html= '<div class="fl">'+'<img src="images/jimi_50_2.png">'+'<span >'+data.as+'</span>'+'</div>';
            $("#apply").append(html);
            break;

        case "news":  // 第3种 news 客户新输入的问题关键字
            var html= '<div class="fl">'+'<img src="images/jimi_50_1.png">'+'<span >'+data.ns+'</span>'+'</div>';
            $("#apply").append(html);// 在咨询窗口客服应答内容
            break;
    };

};

function inputsearch(){//联系人搜索焦点控制
	$(".text").on("focus",function(){//得到焦点清空
		var txt=$(this).val();
		if(txt=="搜索最近联系人"){
			$(this).val(null);
		};
	});
	$(".text").on("blur",function(){//失去焦点恢复默认
		var txt=$(this).val();
		if(txt==""){
			$(this).val("搜索最近联系人");
		};
	});
};
//关闭客服弹框
function close(){
    $(".onmid .h i").on("click",function(){
       $(".onwrap").remove();
        //window.opener=null;window.open('','_self','');window.close();
    });
};
