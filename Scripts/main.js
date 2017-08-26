$(document).ready(function(){
	
	$('#slickSlider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 1000
	});
});
$(document).ready(function () {
	$('.booknow').click(function () {
		$( ".booknow" ).hide()
		$( ".box-input" ).show()
	});
});