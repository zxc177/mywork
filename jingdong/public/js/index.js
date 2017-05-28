// JavaScript Document
	$(function () {
		carousel();//轮播图切换
        menu();// 导航菜单显示
        floornav();//楼层菜单跳转及显示
        tab();//每层楼的选项卡切换
	inputsearch();//搜索框的焦点控制
	
	});
    var currentZIndex = 1;   // 代表当前最大的z-index
    var currentPicIndex = 0; // 代表第一个 即当前焦点图片的索引
    var timer;          // 保存定时器变量通过变量保存
    var delay = 3000;   // 图片切换的延时
	function carousel(){

		$("#banner-pic").find("li").first().css("zIndex",currentZIndex);//  第一张图片显示
		//  通过变量动态生成 按钮
		var  navContent="";
		$("#banner-pic").find("li").each(function(i){
			navContent+='<li class="normal">'+(i+1)+'</li>';
		});
		$("#banner-nav").html(navContent).children().first().removeClass().addClass("act");

		$("#banner-nav li").on("mouseover",function(e){
			$(this).removeClass().addClass("act").siblings().removeClass().addClass("normal");
			// show fadeIn 效果      $("#banner-pic a").eq( $(this).index()).show().siblings().hide();
			// 右侧滑入效果 让其css left为730 然后变成left 0
			$("#banner-pic li").eq( $(this).index()).css({"left":"730px","zIndex": currentZIndex++}).animate({left:0},"normal");
			currentPicIndex = $(this).index();
			e.stopPropagation();    // 阻止事件冒泡传播
		});
		//  以下是图片定时切换
		var picNum = $("#banner-pic li").length;
		clearInterval(timer);
		timer = setInterval( anim, delay);
		function anim(){
			var nextIndex = currentPicIndex + 1;
			if (nextIndex == picNum) {
				nextIndex = 0;
			};
			$("#banner-nav li").eq( nextIndex).trigger("mouseover");

		};
		$("#banner-pic li").hover(
				function(){
					clearInterval(timer);
				},
				function(){
					timer = setInterval( anim ,delay);
				}
		);

	};
	function menu(){// 导航菜单显示
            $(".nav-list li").on("mouseenter",function(){
                $(this).addClass("act").siblings().removeClass("act");
                $(".popup").css("zIndex","9999").show();
                $(".popup .m1").eq( $(this).index()).show().siblings().hide();
            }).parents(".wrap").on("mouseleave",function(){
                $(this).find(".nav-list li").removeClass("act");
                $(".popup").hide();
            });
	};
    function floornav(){//楼层菜单跳转及显示

        $(".floor li a").on("click",function(e){
            e.preventDefault();//阻止默认事件
           var id=this.hash;//通过哈希值 来改变
            $("html,body").finish().animate( {scrollTop : $(id).offset().top });
            $(this).parent().addClass("ac").siblings().removeClass("ac");
        }).on("mouseover",function(e){
            e.preventDefault();//阻止默认事件
            $(this).parent().addClass("ac").siblings().removeClass("ac");
        });
        $(window).on("scroll",function(){
           $(".floorlist").each(function(index){
               if( $(document).scrollTop()>=$(this).offset().top){
                   $(".floor li").eq(index).addClass("ac").siblings().removeClass("ac");
               }else{;
                   $(".floor li").eq(index).removeClass("ac");
               };
           });
        });
    };
    function tab(){//每层楼的选项卡切换
        for(var i=0;i<$(".floorlist").length;i++){// 所有楼层切换选项卡
            (function(i){//单个楼层选项卡切换
                $(".f"+i).find(".title ul li").on("mouseenter",function(){
                    $(this).addClass("act").siblings().removeClass("act");
                    $(".f"+i).find(".contbox .top").eq( $(this).index() ).show().siblings().hide();
                }).on("mouseleave",function(){
                    $(this).removeClass("act");
                });
            })(i);
        };
    };
function inputsearch(){//搜索框的焦点控制
	
	$(".text").on("focus",function(){
		var txt=$(this).val();
		if(txt=="卡通手机壳"){
			$(this).val(null);
		};
	});
	
	$(".text").on("blur",function(){
		var txt=$(this).val();
		if(txt==""){
			$(this).val("卡通手机壳");
		};
	});
};






