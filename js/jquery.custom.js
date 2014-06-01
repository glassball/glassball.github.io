/* <![CDATA[ */
(function ($) {
	
	"use strict";
	
    $(document).ready(function () {
		
		/* Parallax Effect
		================================================== */
		$('.parallax .parallax-banner-1').parallax("50%", 0.2);
		$('.newsletter').parallax("50%", 0.2);
		
		/* Scroll to Main
		================================================== */
		$('#ut-navigation a[href*=#]').click(function (event) { 
				
				event.preventDefault();
				
				$('#ut-navigation a').removeClass('selected');
				$(this).addClass('selected');
				
				$.scrollTo( $(this).attr('href') , 650, { easing: 'swing' , offset: -80} );			
			
		});
		
		$('#learn-more').click( function (event) {
			
			event.preventDefault();
			$.scrollTo( $('#information-section') , 650, { easing: 'swing' , offset: -80} );
			
		});
		
		/* Flexslider
		================================================== */
		$(window).load(function () {
			
			$('.flexslider').flexslider({
				animation: "slide",
				controlNav: "thumbnails",
				start: function (slider) {
			     $('body').removeClass('loading');
				}
		  	});
			
		});
		
	});

})(jQuery);

new cbpScroller( document.getElementById( 'mainsite' ) );

 /* ]]> */	