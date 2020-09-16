$(document).ready(function() {
	flexibility(document.documentElement);
	

	if ($('.post__list').length>0) {
		$('.post__list').find( "img" ).each(function( index ) {
		  	$(this).wrap("<a href="+ $( this ).attr('src') +" target='_blank' class='figure__link'></a>")
		});
	}
});




$(window).resize(function () {

});

