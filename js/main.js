/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	})


  	/*---------------------------------------------------- */
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {
   		$('#intro h1').fitText(1, { minFontSize: '36px', maxFontSize: '84px' });
  	}, 100);


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */ 
  	$(".fluid-video-wrapper").fitVids();


	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */ 
	$("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom : [
	        [0, 1],
	        [700, 2],
	        [960, 3]
	     ],
        navigationText: false
    });


	/*----------------------------------------------------- */
	/* Alert Boxes
  	------------------------------------------------------- */
	$('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});	


	/*----------------------------------------------------- */
	/* Stat Counter
  	------------------------------------------------------- */
   var statSection = $("#stats"),
       stats = $(".stat-count");

   statSection.waypoint({

   	handler: function(direction) {

      	if (direction === "down") {       		

			   stats.each(function () {
				   var $this = $(this);

				   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
				   	duration: 4000,
				   	easing: 'swing',
				   	step: function (curValue) {
				      	$this.text(Math.ceil(curValue));
				    	}
				  	});
				});

       	} 

       	// trigger once only
       	this.destroy();      	

		},
			
		offset: "90%"
	
	});	


	/*---------------------------------------------------- */
	/*	Masonry
	------------------------------------------------------ */
	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded( function() {

		containerProjects.masonry( {		  
		  	itemSelector: '.folio-item',
		  	resize: true 
		});

	});


	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
   $('.item-wrap a').magnificPopup({

      type:'inline',
      fixedContentPos: false,
      removalDelay: 300,
      showCloseBtn: false,
      mainClass: 'mfp-fade'

   });

   $(document).on('click', '.popup-modal-dismiss', function (e) {
   	e.preventDefault();
   	$.magnificPopup.close();
   });

	
	/*-----------------------------------------------------*/
  	/* Navigation Menu
   ------------------------------------------------------ */  
   var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   // toggle button
   toggleButton.on('click', function(e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();

	});

   // nav items
  	nav.find('li a').on("click", function() {   

   	// update the toggle button 		
   	toggleButton.toggleClass('is-clicked'); 
   	// fadeout the navigation panel
   	nav.fadeOut();   		
   	     
  	});


   /*---------------------------------------------------- */
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------ */
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'
	});


	/*---------------------------------------------------- */
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	e.preventDefault();
   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  
  

   /*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */ 
	$('input, textarea, select').placeholder()  


  	/*---------------------------------------------------- */
	/*	contact form
	------------------------------------------------------ */

	/* local validation */
	// $('#contactForm').validate({

	// 	/* submit via ajax */
	// 	submitHandler: function(form) {

	// 		var sLoader = $('#submit-loader');

	// 		$.ajax({      	

	// 		      type: "POST",
	// 		      url: "/submit",
	// 		      data: $(form).serialize(),
	// 		      beforeSend: function() { 
	// 				$('#submit-old').hide();
	// 				$('#submit-new').fadeIn();
	// 		      	sLoader.fadeIn(); 
	// 				console.log("sending....")
	// 		      },
	// 		      success: function(response) {
	// 				   console.log('message sent')
	// 	            	sLoader.fadeOut(); 
	// 	               $('#message-warning').hide();
	// 	               $('#contactForm').fadeOut();
	// 	               $('#message-success').fadeIn();   
	// 	            },
	// 		      error: function(error) {

	// 		      	sLoader.fadeOut(); 
	// 		      	$('#message-warning').html("Something went wrong. Please try again.");
	// 		         $('#message-warning').fadeIn();

	// 		      }

	// 	      }); 		
 //  		}

	// });


 	/*----------------------------------------------------- */
  	/* Back to top
   ------------------------------------------------------- */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}		

		// change nav bar on scrolling
		setScroll()


		var scrollPos = $(document).scrollTop() + $(".topnav").height();
	    $('#navbar ul li').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.children('a').attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.outerHeight() > scrollPos) {
	            currLink.addClass("current");
	        } else {
	            currLink.removeClass("current");
	        }
	    });

	});	


	$('li[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('li').each(function () {
            $(this).removeClass('current');
        })
        $(this).addClass('current');
      
        var target = this.hash
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });

    var youtube = document.querySelectorAll( ".youtube" );
	
	for (var i = 0; i < youtube.length; i++) {
		
		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
		
		var image = new Image();
				image.src = source;
				image.addEventListener( "load", function() {
					youtube[ i ].appendChild( image );
				}( i ) );
		
				youtube[i].addEventListener( "click", function() {

					var iframe = document.createElement( "iframe" );

							iframe.setAttribute( "frameborder", "0" );
							iframe.setAttribute( "allowfullscreen", "" );
							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

							this.innerHTML = "";
							this.appendChild( iframe );
				} );	
	};

	function setScroll() {
		var scrollPos = $(document).scrollTop() + $(".topnav").height();
		if(scrollPos<250 + $(".topnav").height()) {
			$(".topnav")[0].hidden = true
			$(".topnav").addClass("opaque")
		} else {
			$(".topnav")[0].hidden = false
			if (scrollPos<250) {
				$(".topnav").removeClass("opaque")
			} else {
				$(".topnav").addClass("opaque")
			}
		}
	}

	setScroll()

})(jQuery);