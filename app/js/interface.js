$(document).ready(function() {
	flexibility(document.documentElement);

	$('body').on('click','.menu-btn', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.menu-mobile').slideToggle(100);
		$('body').toggleClass('m-fixed');
	});

	$('body').on('click','.search-mobile-toggle', function(e){
		e.preventDefault();
		$('.search-mobile').fadeToggle(100);
	});
	$('body').on('click','.search-mobile__close', function(e){
		e.preventDefault();
		$('.search-mobile').fadeOut(100);
	});
	


	$('body').on('click','.js-scroll-link', function(e){
		e.preventDefault();
		var aid = $(this).attr("href");
		$('html,body').animate({scrollTop: $(aid).offset().top},'slow');
	});

});

