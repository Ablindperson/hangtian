//切换
function fn(num) {
	console.log(num);
	if(num == 1) {
		$(".tabTitle0").css("background", "url(img/yf1.jpg)");
		$(".tabTitle1").css("background", "url(img/yfA2.jpg)");
		$(".tabTitle2").css("background", "url(img/yf3.jpg)");
		$(".tabContent0").css("display", "none")
		$(".tabContent1").css("display", "flex")
		$(".tabContent2").css("display", "none")
	} else if(num == 2) {
		$(".tabTitle0").css("background", "url(img/yf1.jpg)");
		$(".tabTitle1").css("background", "url(img/yf2.jpg)");
		$(".tabTitle2").css("background", "url(img/yfA3.jpg)");
		$(".tabContent0").css("display", "none")
		$(".tabContent1").css("display", "none")
		$(".tabContent2").css("display", "flex")
	} else {
		$(".tabTitle0").css("background", "url(img/yfA1.jpg)");
		$(".tabTitle1").css("background", "url(img/yf2.jpg)");
		$(".tabTitle2").css("background", "url(img/yf3.jpg)")
		$(".tabContent0").css("display", "flex")
		$(".tabContent1").css("display", "none")
		$(".tabContent2").css("display", "none")
	}
}

//解決方案

$(".hgcp2").eq(0).mouseover(function() {
	$(".hgcp1").eq(1).css("opacity", 1)
	$(".hgcp1").eq(0).css("opacity", 0)
	$(".hgcp2").eq(1).css("opacity", 0)
})
$(".hgcp2").eq(0).mouseout(function() {
	$(".hgcp1").eq(0).css("opacity", 1)
	$(".hgcp2").eq(1).css("opacity", 1)
	$(".hgcp1").eq(1).css("opacity", 0)
})

$(".hgcp2").eq(1).mouseover(function() {
	$(".hgcp1").eq(1).css("opacity", 0)
})
$(".hgcp2").eq(1).mouseout(function() {
	$(".hgcp1").eq(1).css("opacity", 0)
})

$(".hgcp2").eq(2).mouseover(function() {
	$(".hgcp1").eq(1).css("opacity", 1)
	$(".hgcp1").eq(2).css("opacity", 0)
	$(".hgcp2").eq(1).css("opacity", 0)
})
$(".hgcp2").eq(2).mouseout(function() {
	$(".hgcp1").eq(2).css("opacity", 1)
	$(".hgcp2").eq(1).css("opacity", 1)
	$(".hgcp1").eq(1).css("opacity", 0)
})


//移动端菜单栏
var n=1
$(".header-right").eq(0).click(function () {
	n++
	if (n%2==1){
		console.log("隐藏")
		$(".header-nav").eq(0).hide()
		$(".header-right").eq(0).css("background","")
	}else{
		$(".header-nav").eq(0).show()
		$(".header-right").eq(0).css("background","#4482BD")
	}
})

//新闻列表
function newfn(num) {
	console.log(num);
	if(num == 0) {
		$(".newTitle0").css({"background": "#4382BC","color":"white"});
		$(".newTitle1").css({"background": "white","color":"#4382BC"});
		$(".newTitle2").css({"background": "white","color":"#4382BC"});
		$(".newContent0").css("display", "flex")
		$(".newContent1").css("display", "none")
		$(".newContent2").css("display", "none")
	} else if(num==1){
		$(".newTitle0").css({"background": "white","color":"#4382BC"});
		$(".newTitle1").css({"background": "#4382BC","color":"white"});
		$(".newTitle2").css({"background": "white","color":"#4382BC"});
		$(".newContent0").css("display", "none")
		$(".newContent1").css("display", "flex")
		$(".newContent2").css("display", "none")
	}else{
		$(".newTitle0").css({"background": "white","color":"#4382BC"});
		$(".newTitle1").css({"background": "white","color":"#4382BC"});
		$(".newTitle2").css({"background": "#4382BC","color":"white"});
		$(".newContent0").css("display", "none")
		$(".newContent1").css("display", "none")
		$(".newContent2").css("display", "flex")
	}
}



function jjfa () {
	console.log("=====")
	window.location.href="jjfalb.html" 
}