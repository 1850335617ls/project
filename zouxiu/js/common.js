
$(function(){
	
	/* ================== 头部 =================================   */
	$(window).scroll(function(){
		/* 头部 */
		if($(document).scrollTop() >= $(".header").height()){
			$(".header").addClass("header_position");
		}else{
			$(".header").removeClass("header_position");
		}
	
		
		
		
	});
	
	
	
	
	
})
