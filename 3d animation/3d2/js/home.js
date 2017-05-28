// JavaScript Document
$(function() {
	bg3d();//鼠标over时 banner四角可以颤动
	line();//线条生成
	drawmove();//拖拽变化
});
function bg3d(){
	/*思路：使用CSS3的transform-style: preserve-3d构建一个3D透视空间。
	 1.获取鼠标X，Y轴线性运动变量。
	 2.为了使鼠标左右移动图片产生左右偏转，得把鼠标运动到banner图中间点为“0,0”，这样的话往左为负，往右为正。
	 3.把变量赋值给CSS3的rotateX,rotateY。*/

	$(".bg").mouseenter(function() {
		var thisPX = $(this).offset().left;
		var thisPY = $(this).offset().top;
		var boxWidth = $(this).outerWidth();//获取元素外部宽度（默认包括补白和边框）$(this).Width()
		var boxHeight = $(this).outerHeight();
		$(this).addClass("threeD");
		$(".threeD").mousemove(function(event) {
			var mouseX = event.pageX - thisPX;
			var mouseY = event.pageY - thisPY;
			var X,Y;
			if (mouseX > boxWidth / 2) {
				X = mouseX - boxWidth/2;
			} else {
				X = mouseX - boxWidth/2;
			};
			if (mouseY > boxHeight / 2) {
				Y = boxHeight/2 - mouseY;
			} else {
				Y = boxHeight/2 - mouseY;
			};
			$(".threeD").css({"-webkit-transform": "rotateY(" + X / 50 + "deg) " + "rotateX(" + Y / 50 + "deg)"});
			// console.log(X + "," + Y);
		});
	});
	$(".bg").mouseleave(function() {
		$(this).removeClass("threeD");
		$(this).css({"-webkit-transform": "rotateY(0deg) rotateX(0deg)"});
	});

};
function  line(){
	$(document).click(function(){
		$(".l").animate({width:"100%"},3000,"swing");
	   $(".r").animate({width:"100%"},3000,"swing");
	});
};
function  drawmove(){
	var $handel= $(".slideleft");
	var $slider=$(".slider");
	$handel.mouseover(function(event){
		event.preventDefault();
		$slider.animate({backgroundColor:"gray"},1000,"swing",function(){
			$(this).animate({backgroundColor:"black"},500,"linear");
		});
		var disX= event.pageX-$(this).offset().left;
		$(document).mousemove(function(event){
			event.preventDefault();
			var thisX=event.pageX-disX;
			if(thisX<0){thisX=0;};
			if(thisX >=$slider.width()-$handel.width()){
				thisX =$slider.width()-$handel.width();
			};
			$handel.css({left:thisX});
		});
		$(document).mouseup(function(){
			$(document).mousemove(function(){
				return null
			});
		});
	});
};

