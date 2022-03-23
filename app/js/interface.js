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



	//materials-slider
	if ($( ".materials-slider" ).length>0) {
		var $slider_s = $('.materials-slider');

        $slider_s.slick({
            infinite: true,
            dots: true,
            arrows:false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
			    {
			      breakpoint: 650,
			      settings: {
			        slidesToShow: 3,
            		slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
            		slidesToScroll: 1,
			      }
			    },
			]
        });
	};

	//interesting-slider
	if ($( ".interesting__slider" ).length>0) {
		var $slider_m = $('.interesting__slider');

        $slider_m.slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
			    {
			      breakpoint: 660,
			      settings: {
			        slidesToShow: 2,
            		slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 400,
			      settings: {
			        slidesToShow: 1,
            		slidesToScroll: 1,
			      }
			    },
			]
        });
	};

});

// links pages
$('body').append(
	'<div id="pages-wrap" style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="index.html">Index</a></li> \
		<li><a href="art.html">art</a></li> \
		<li><a href="blog-in.html">blog-in</a></li> \
        <li><a href="blog-in2.html">blog-in2</a></li> \
        <li><a href="cards.html">cards</a></li> \
        <li><a href="author-new.html">author-new</a></li> \
        <li><a href="opros.html">opros</a></li> \
        <li><a href="search.html">search</a></li> \
        <li><a href="page404.html">page404</a></li> \
	</ol> \
</div>');