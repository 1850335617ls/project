
$(function(){
	/* ----------------------- 商品详情中的实拍活动 touch ----------------------------  */
	var target = document.getElementById("picBanner")
	var step = 0;
	touch.on(target,"touchstart",function(ev){
		ev.preventDefault();
	});
	touch.on(target,"swipeleft",function(ev){
		step ++;
		if(step >= 4){
			step = 3;
		}
		$("#picBanner").animate({"left": -6.4 *step + "rem"},500);
		$(".ullist9 li").eq(step).addClass("bg").siblings().removeClass("bg");
	});
	
	touch.on(target,"swiperight",function(ev){
		step --;
		if(step <= -1){
			step = 0;
		}
		$("#picBanner").animate({"left": -6.4 *step + "rem"},500);
		$(".ullist9 li").eq(step).addClass("bg").siblings().removeClass("bg");
	});
})
