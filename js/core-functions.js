
(function(){
"use strict";
//Global Variables
var $window = jQuery(window),
	body = jQuery('body');
//Page Functions - Scrolling
var page =  {
	init: function(){
		//Back to top
		
		if(jQuery('#back-to-top').length > 0){
			$window.scroll(function(){
				page.backToTop();
			});

			
		}
	},
	backToTop: function(){
		var scrollPosition = $window.scrollTop();
		//console.log(scrollPosition);
		if (scrollPosition > 300) {
			
				jQuery('#back-to-top').stop().animate({
					'bottom': '10px',
					'opacity': 1
				}, 300, "");
			} else if (scrollPosition < 300) {
				jQuery('#back-to-top').stop().animate({
					'bottom': '-40px',
					'opacity': 0
				}, 300, "");
			}
	}

};
// RELOAD FUNCTIONS
var reloadFunctions = {
	init: function() {
		// Animate Top Links
			jQuery('.animate-top').on('click', function(e) {
				e.preventDefault();
				jQuery('body,html').animate({scrollTop: 0}, 400, '');    
				
			});

	}
};

// Navigation
var nav = {
	init: function(){
		//Toggle Mobile Nav show/hide
		jQuery('.mobile-menu-show').on('click',function(e){
			e.preventDefault();
			if(body.hasClass('mobile-menu-open')){
				nav.hideMobileMenu();
			}else{
				nav.showMobileMenu()
			}
			
		});
		jQuery('.mobile-menu-close').on('click',function(e){
			e.preventDefault();
			nav.hideMobileMenu();
		});
	},
	showMobileMenu: function(){
		body.addClass('mobile-menu-open');
		setTimeout(function(){
			jQuery('#mainWrapper').on('click',nav.containerClick);
		},500);
	},
	hideMobileMenu: function(){
		body.removeClass('mobile-menu-open');
		jQuery('#mainWrapper').off('click',nav.containerClick);
	},
	containerClick: function() {
		body.removeClass('mobile-menu-open');
		nav.hideMobileMenu();
	}

};

var onReady = {
	init: function(){

		 $('.submitBtn').on('click', function () {
		    var $btn = $(this).button('loading');
		    var redirect = $(this).attr('data-redirect-page');
		    //console.log(redirect);
		    // business logic...
		    setTimeout(function(){
		    		window.location ='/'+redirect;
		    		//$btn.button('reset');
		    },1000);
		    
		  });

		 // Affix sidebar
		 /* activate sidebar */
		$('.sidebar-affix').affix({
		  offset: {
		    top: 200,
			  bottom:600
		  }
		});

		//console.log( $('.sidebar-affix').parent());

		function width(){
		  var width = Number($('.sidebar-affix').parent().width());
			//console.log(width);
		  $('.sidebar-affix').css({"width": width});
		}
		$(window).on('resize scroll', function(){
		  width();
		});
		 
		 // - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
		 // 
		 /***************** Smooth Scrolling ******************/

		 //$('a[href*=#]:not([href=#])').click(function() {
		 //	if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
         //
		 //		var target = $(this.hash);
		 //		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		 //		if (target.length) {
		 //			$('html,body').animate({
		 //				scrollTop: target.offset().top
		 //			}, 1000);
		 //			return false;
		 //		}
		 //	}
		 //});

		/***************** Waypoints ******************/

		$('.wp1').waypoint(function() {
			$('.wp1').addClass('animated fadeInLeft');
		}, {
			offset: '75%'
		});
		$('.wp2').waypoint(function() {
			$('.wp2').addClass('animated fadeInDown');
		}, {
			offset: '75%'
		});
		$('.wp3').waypoint(function() {
			$('.wp3').addClass('animated bounceInDown');
		}, {
			offset: '75%'
		});
		$('.wp4').waypoint(function() {
			$('.wp4').addClass('animated fadeInDown');
		}, {
			offset: '75%'
		});

		/***************** Flickity ******************/

		$('#featuresSlider').flickity({
			cellAlign: 'left',
			contain: true,
			prevNextButtons: false,
			autoPlay:true,
			accessibility: true,
			wrapAround: true
		});

		nav.init();
		page.init();
		reloadFunctions.init();
	}
};






jQuery(document).ready(onReady.init);
})(jQuery);