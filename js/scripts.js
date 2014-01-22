$(function() {
	$(".left-nav button.btn").click(function() {
		$(this).children("span").toggleClass("glyphicon-backward glyphicon-forward");
		$(this).siblings().toggle();
	});
});