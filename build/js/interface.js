$(document).ready(function() {
	flexibility(document.documentElement);
	

	if ($('.post__list').length>0) {
		var base64URL = "data:image/";
		setTimeout(function(){
		  	$('.post__list').find( "img" ).each(function( index ) {
		  		$( this ).attr('src').indexOf(base64URL) == -1 ? $(this).wrap("<a href="+ $( this ).attr('src') +" target='_blank' class='figure__link'></a>") : $(this).wrap("<a href="+ $( this ).data('src') +" target='_blank' class='figure__link'></a>") 
			});
		}, 500);
	}


	$('a').each(function() {
	   	var l_host = new RegExp('/' + window.location.host + '/');
	   	if (!l_host.test(this.href) && this.href.indexOf('http://daily.mango.rocks/') !== 0) {
	      	$(this).attr("target","_blank");
	   	}
	});

	if ($('.blog').length>0) {
		$('.blog__in').addClass('clickable').click( function() {
			window.location = $(this).attr('data-href');
		}).find('a').hover( function() {
			$(this).parents('.blog__in').unbind('click');
		}, function() {
			$(this).parents('.blog__in').click( function() {
				window.location = $(this).attr('data-href');
			});
		});
		$('.blog__in').find('a, button').focus(function() {
			$(this).parents('.blog__in').unbind('click');
		});
	}



    $("[name=radio-head]").change(function(){
        if($('#switch-most').is(':checked')) { 
        	$('.blog__wrap').addClass('m-hidden');
        	$('#most_interesting').removeClass('m-hidden');
        }
        else{
        	$('.blog__wrap').addClass('m-hidden');
        	$('#all').removeClass('m-hidden');
        }
    });

});




$(window).resize(function () {

});

