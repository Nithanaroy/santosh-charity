$(function() {
	$('.bxslider').bxSlider({
	  captions: true,
	  autoControls: true,
	  controls: false,
	  pause: 2000,
	  autoStart: true
	});
	
	$(".left-nav button.btn").click(function() {
		$(this).children("span").toggleClass("glyphicon-backward glyphicon-forward");
		$(this).siblings().toggle();
	});
});