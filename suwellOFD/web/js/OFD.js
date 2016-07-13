$(document).ready(function(){ /* 关闭右侧菜单 */
	$("#closebtn").click(function () {
		$('.closeRight').hide();
		$('#text').removeClass('mintext').addClass('maxtext');
	});
/* 展开右侧菜单 */
	$(".searchmenu").click(function(){
		$('.closeRight').show();
		$('#text').removeClass('maxtext').addClass('mintext');
	});
	$('#inputsearch').focus(function(){
		$('.closeRight').show();
		$('#text').removeClass('maxtext').addClass('mintext');
	});
/* 双击收回 */
$('#closeul').dblclick(function(){
	$('#content').hide();
	$('#content li').removeClass('active');
	if ($('#text').hasClass('mixtext')==false) {
		$('#text').removeClass('maxtext').removeClass('mintext').addClass('maxtext2');
		$('#closeul').parent().removeClass('margin0').addClass('');
		$('#closeul').addClass('minul');
		$('.closeRight').hide();
		$('#closeul>li').removeClass('active');
		//alert();
	}
});
/* 点击显示tab */
$('#closeul>li').click(function(){
	$('#content').show();
	$('#closeul').parent().addClass('margin0');
	$('#text').removeClass('maxtext2').addClass('maxtext');
	$('#closeul').removeClass('minul');
	$('this').addClass('active');
});
});