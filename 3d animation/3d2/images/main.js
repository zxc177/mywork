(function($) {
    $.fn.jSlider = function(options) {
        if (this.length > 0) {
            var o = $.extend({auto: !1,defaultIndex: 0,slideWidth: 660,slideHeight: 400,slideDirection: 1,speed: "normal",stay: 5e3,delay: 150,showPrevNext: !1,prev: null,next: null,showPagination: 1,pagination: null}, options || {});
            return this.each(function() {
                var that = $(this), a = that.find("ul"), b = a.find("li"), c = b.outerWidth(), d = b.outerHeight(), e = b.length, n, p, s, m = null, l = null, p, k, clickAble = !0, left, top;
                function init() {
					if(b.length<2){return}
                    if (o.showPrevNext) {
                        if (o.prev == null || o.next == null) {
                            n = $('<a href="#" class="navigation Next">Next</a>');
                            p = $('<a href="#" class="navigation prev">Prev</a>');
                            that.after(n), that.after(p)
                        } else {
                            n = $(o.next);
                            p = $(o.prev);
							n.bind("click", function(e) {
                        if (!clickAble) {
                            return false
                        }
                        clickAble = !1;
                        k = o.defaultIndex;
                        k++;
                        play(k);
                        return false
                    });
                    p.bind("click", function(e) {
                        if (!clickAble) {
                            return false
                        }
                        clickAble = !1;
                        k = o.defaultIndex;
                        k--;
                        play(k);
                        return false
                    });
                    n.bind("mouseenter", function() {
                        pause()
                    }).bind("mouseleave", function() {
                        o.auto && auto()
                    });
                    p.bind("mouseenter", function() {
                        pause()
                    }).bind("mouseleave", function() {
                        o.auto && auto()
                    });
                        }
                    }
                    if (o.showPagination) {
                        if (o.pagination == null) {
                            s = '<div class="pagination">';
                            b.each(function(i) {
                                o.defaultIndex == i ? s += '<span class="cur">' + (i + 1) + "</span>" : s += "<span>" + (i + 1) + "</span>"
                            });
                            s = s + "</div>";
                            s = $(s);
                            that.after(s)
                        } else {
                            s = $(o.pagination)
                        }
                    }
                    if (o.slideDirection == 1) {
                        a.prepend(b.eq(e - 1).clone().css("marginLeft", -c));
                        a.append(b.eq(0).clone());
                        a.css({width: o.slideWidth * (e + 2)})
                    } else if (o.slideDirection == 2) {
                        a.prepend(b.eq(e - 1).clone().css("marginTop", -d));
                        a.append(b.eq(0).clone())
                    }
                    
                    that.bind("mouseenter", function() {
                        pause()
                    }).bind("mouseleave", function() {
                        o.auto && auto()
                    });
                    s.children().bind("mouseenter", function() {
                        pause();
                        var i = $(this).index();
                        l = setTimeout(function() {
                            play(i)
                        }, 100)
                    }).bind("mouseleave", function() {
                        l && clearTimeout(l);
                        o.auto && auto()
                    });
                    o.auto && auto()
                }
                function auto() {
                    m && clearInterval(m);
                    m = setInterval(function() {
                        k = o.defaultIndex;
                        k++;
                        play(k)
                    }, o.stay)
                }
                function pause() {
                    m && clearInterval(m)
                }
                function play(k) {
                    if (o.slideDirection == 3) {
                        k == -1 && (k = e - 1);
                        k == e && (k = 0);
                        adjustpagination(k);
                        b.eq(o.defaultIndex).css({zIndex: 0}), b.eq(k).css({zIndex: 1}), b.eq(o.defaultIndex).fadeOut("fast"), b.eq(k).fadeIn("fast", function() {
                            clickAble = !0
                        }), o.defaultIndex = k
                    } else {
                        var ac = k;
                        if (k == e) {
                            ac = 0
                        }
                        if (k == -1) {
                            ac = e - 1
                        }
                        adjustpagination(ac);
                        1 == o.slideDirection ? (top = 0, left = -o.slideWidth * k) : (left = 0, top = -o.slideHeight * k), a.animate({top: top + "px",left: left + "px"}, o.speed, function() {
                            adjust(k)
                        })
                    }
                }
                function adjustpagination(k) {
                    s.children().eq(k).addClass("cur").siblings().removeClass("cur")
                }
                function adjust(k) {
                    if (o.slideDirection == 1) {
                        if (k == e) {
                            a.css("left", 0), k = 0
                        }
                        if (k == -1) {
                            a.css("left", -1 * (e - 1) * o.slideWidth);
                            k = e - 1
                        }
                        o.defaultIndex = k
                    } else {
                        if (k == e) {
                            a.css("top", 0), k = 0
                        }
                        if (k == -1) {
                            a.css("top", -1 * (e - 1) * o.slideHeight);
                            k = e - 1
                        }
                        o.defaultIndex = k
                    }
                    clickAble = !0
                }
                init()
            })
        }
    }
})(jQuery);







































$("#J_share .weixin").hover(function(){$(this).addClass("on")},function(){$(this).removeClass("on")});








$(".noUiSlider").noUiSlider({range: [1e4, 3e4],start: [1e4, 3e4],handles: 2,step: 100,margin: 500,serialization: {to: [$("#exTO"), $("#exFR")],resolution: 1},slide: function() {
            var e = $(this).val();
            $("p#minrange").text(e[0]), $("p#maxrange").text(e[1]),load()
        }});







(function(){
	var orderBy=$("#J_orderBy"),showTxt=$("#showTxt");
	orderBy.click(function(e){
	e.stopPropagation();	
	$(this).toggleClass("orderby-open")
	$(this).find("a").click(function(e){e.stopPropagation();showTxt.text($(this).text());orderBy.removeClass("orderby-open");})
	
	})
	$(document).click(function(){
		orderBy.removeClass("orderby-open")
		})
	
	
	$(".job-list .show-detail").click(function(){
		
	          var t=document.documentElement.scrollTop+document.body.scrollTop,c=document.documentElement.clientHeight/2;
			
			
			$(".job-detail").css({"top":t+c})
			
		
		
			
		
		
	
		
		})
	
	
	
	
	
	
	
	
	
	})();
	
	
	
	
/*产品详细页*/

if($("#J_carousel").length){
	
	
	$("#J_carousel ul").carouFredSel({items: 3,prev: "#J_carousel .prev",next: "#J_carousel .next",auto:false,scroll: {items: 1,circular: true}});
	
	}


	 
$("#J_slide2 .slide-plane-wrap").jSlider({slideWidth: 980,slideHeight: 517,showPagination: 1,slideDirection: 1,auto: 1,stay: 3500});
	
	

	
	
	
	
	
	
	
