$(function(){
	var arr = [];
		$.ajax({
			"type":"get",
			"url":"http://datainfo.duapp.com/shopdata/getGoods.php",
			"async":true,
			"dataType":"jsonp",
			"success":function(rsp){
				//console.log(typeof rsp);
				var str = "";
				for(var i = 0; i < rsp.length; i ++){
					str += '<div class="list"><dl class="dllist"><dt><a href="###"><img class="picImg" src="' + rsp[i].goodsListImg + '" alt="" data-id="' + rsp[i].goodsID + '"/></a></dt><dd><p class="detail">' + rsp[i].goodsName + '</p><div class="tot"><div class="money">￥' + rsp[i].price + '<del>￥28880</del><br /><span>' + rsp[i].discount + '折</span></div><div class="car" data-id="' + rsp[i].goodsID + '"><a href="###"></a></div></div></dd></dl></div>';
				}
				$(".main").html(str);
				
				$(".picImg").click(function(){
					var goodsId = $(this).attr("data-id");
					localStorage.setItem("goodsId",goodsId);
					window.location.href = "html/goodsProduct.html";
				});
				
				$(".car").click(function(){
					var goodsId = $(this).attr("data-id");
					localStorage.setItem("carGoodsId",goodsId);
				});
				
			}
			
			
		});
		
		//console.log(arr);
		
				
		
	
		

})
