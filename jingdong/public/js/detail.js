/**
 * Created by hxsd on 2017/3/18.
 */
$(function(){
    pictablarge();
    menu();
    num();
    tagtab();
    address();
	inputsearch();
});
function pictablarge(){
    $(".spec_item li").on("mouseover",function(){
        var newSrc=$(this).find("img").attr("src");
        $(".top_pic img").attr("src",newSrc);
		$(".big_pic img").attr("src",newSrc);
        $(this).css("borderColor","red").siblings().css("borderColor","");
    });
        $(".top_pic").on('mousemove',function (ev) {
            ev = ev || event;
            $(".top_pic span").show();$(".big_pic").show();//隐藏的放大镜和右边显示大图的外框显示出来；
            var SpanW = $(".top_pic span").width();
            var SpanH = $(".top_pic span").height();
            var PicW = $(this).width();
            var PicH = $(this).height();
            var X =$(window).scrollLeft()+ev.clientX-$(this).offset().left-SpanW/2;
            var Y =$(window).scrollTop()+ev.clientY-$(this).offset().top -SpanH/2;
            var maxRight = PicW - SpanW;
            var maxBottom = PicH - SpanH;
            if(X < 0){X = 0};
            if(Y < 0){Y = 0};
            if(X > maxRight){X = maxRight};
            if(Y > maxBottom){Y = maxBottom};
            $(".top_pic span").css({top:Y,left:X});
            var rateX = X/maxRight;
            var rateY = Y/maxBottom;
            var bigpicX =$(".big_pic img").width()-$(".big_pic").width();
            var bigpicY =$(".big_pic img").height()-$(".big_pic").height();
            $(".big_pic img").css({top:-bigpicX * rateX,left:-bigpicY * rateY});
        });
         $(".top_pic").mouseout(function () {
            $(".top_pic span").hide();$(".big_pic").hide();
        });
		
	
};


function menu(){

    $(".choose_color .item_d").on("mouseover",function(){
        $(this).addClass("selected").siblings().removeClass("selected");
    }).on("mouseout",function(){
        $(this).removeClass("selected");
    });
};
function num(){
    $(".btn_add").on("click",function(){
        console.log("1")
        var n=$(".choose_amount input").val();
        n++;
        $(".choose_amount input").val(n);
        $(".choose_amount input").css({"color":"red","font-weight":"bolder"});
    });
    $(".btn_reduce").on("click",function(){
        var k=$(".choose_amount input").val();
        if(k>0){
            k--;
            $(".choose_amount input").val(k);
            $(".choose_amount input").css({"color":"black","font-weight":"bolder"});
        };
    });

};
function tagtab(){
    $(".suggestion .title li").on("click",function(e){
        e.stopPropagation();    // 阻止事件冒泡传播
        $(this).addClass("ac").siblings().removeClass("ac");
        $(".mc").eq( $(this).index()).show().siblings().hide();
        $(".mc  ul>li").eq( $(this).index()).show().siblings().hide();
    });

};
function address(){
    var myhash = new Array();   // 创建数组对象
    myhash["北京市"] = ["海淀区","朝阳区","东城区","西城区","通州区"];
    myhash["河南省"] = ["郑州市","洛阳市","开封市","安阳市","三门峡市","许昌市"];
    myhash["河北省"] = ["石家庄市","保定市","邢台市","唐山市","邯郸市","秦皇岛"];

    $("#sel1").on("change",function(){
        var selectValue = $(this).val();       // jQuery方式
        if(selectValue!=""){
            run( myhash[selectValue]);
        };
    });
    function run(citys){
        var content = '<option>请选择市/区</option>';
        for(var i=0;i<citys.length;i++){
            content += '<option>' + citys[i] + '</option>';
        };
        $("#sel2").html( content);
    };

};
function inputsearch(){
	$(".text").on("focus",function(){
		var txt=$(this).val();
		if(txt=="闪购特卖"){
			$(this).val(null);
		};
	});
	
	$(".text").on("blur",function(){
		var txt=$(this).val();
		if(txt==""){
			$(this).val("闪购特卖");
		};
	});
};

