
(function($){

	"use strict";



	$(document).ready(function(){

		/* ------------------------------------- */
		/*  owl-carousel
		/* ------------------------------------- */

		$(".gal-owl").owlCarousel({
			singleItem: false,
			loop: true,
			nav: true,
			dots: true,
			autoplay: true,
			autoplayTimeout: 3500,
			autoplayHoverPause: true,
			smartSpeed:1500,
			navText: ["<img src='assets/img/s7/ar_l.png'>","<img src='assets/img/s7/ar_r.png'>"],
			responsive: {
				0: {
					items: 1
				},
				750: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});


	});


})(jQuery);
