$(document).ready(function() {
	flexibility(document.documentElement);
	

	if ($('.post__list').length>0) {
		$('.post__list').find( "img" ).each(function( index ) {
		  	$(this).wrap("<a href="+ $( this ).attr('src') +" target='_blank' class='figure__link'></a>")
		});
	}


	$('a').each(function() {
	   	var l_host = new RegExp('/' + window.location.host + '/');
	   	if (!l_host.test(this.href) && this.href.indexOf('http://daily.mango.rocks/') !== 0) {
	      	$(this).attr("target","_blank");
	   	}
	});
});




$(window).resize(function () {

});

