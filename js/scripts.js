$(function() {
	$('.bxslider').bxSlider({
	  captions: true,
	  autoControls: true,
	  controls: false,
	  pause: 2000,
	  autoStart: true
	});
	
	 $('#homeAffix').affix({
    offset: {
      top: 100
    , bottom: function () {
        return (this.bottom = $('.bs-footer').outerHeight(true))
      }
    }
  })
});