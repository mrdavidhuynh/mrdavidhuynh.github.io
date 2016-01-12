// JavaScript Document


// CODE FOUND AT http://css-tricks.com/snippets/jquery/smooth-scrolling/
// CREATES SMOOTH SCROLL TRANSITION ON ANCHOR POINT LINKS
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 300);
        return false;
      }
    }
  });
});

// NAVIGATES BETWEEN MY WORK AND ABOUT ME AND EMAIL WITHOUT LOADING ANOTHER PAGE
$(document).ready(function() {
	$('#work-button').click(function(){ 
			$('html,body').animate({ scrollTop: "0" }, 500, function() { });
			$('#about-button').addClass('unselected');
			$('#email-button').addClass('unselected');
 			$(this).removeClass('unselected');
			$('#about').fadeOut(100);
			$('#email').fadeOut(100);
			setTimeout(function (){$('#thumbnails').fadeIn(100);}, 101);
	}); 
	$('#about-button').click(function(){ 
			$('html,body').animate({ scrollTop: "0" }, 500, function() { });
			$('#work-button').addClass('unselected');
			$('#email-button').addClass('unselected');
 			$(this).removeClass('unselected');
			$('#thumbnails').fadeOut(100);
			$('#email').fadeOut(100);
			setTimeout(function (){$('#about').fadeIn(100);}, 101);
	}); 
	$('#email-button').click(function(){ 
			$('html,body').animate({ scrollTop: "0" }, 500, function() { });
			$('#work-button').addClass('unselected');
			$('#about-button').addClass('unselected');
 			$(this).removeClass('unselected');
			$('#thumbnails').fadeOut(100);
			$('#about').fadeOut(100);
			setTimeout(function (){$('#email').fadeIn(100);}, 101);
	}); 


// PULLS OUT MY WORK AND ABOUT ME AND EMAIL WITHOUT HAVING TO LOAD PAGE

	var menuclicked = 0;
	
	$('#work-button, #about-button, #email-button').click(function(){ 
		if(menuclicked == 0){
		$('#spotlight').animate({ maxHeight: "1600px" }, 500, function() { });
		//$('#spotlight').slideToggle(500);
		$('#page').animate({ marginTop: "30px" }, 300, function() { });
		//$('#page').animate({ marginTop: "700px" }, 300, function() { });
		//setTimeout(function (){$('#fixer').css({ position: "relative" }); }, 501);
		//setTimeout(function (){$('#page').css({ marginTop: "50px" }); }, 501);
		menuclicked = menuclicked + 1;
		}
		/* else{
		$('#spotlight').slideToggle(300);
		setTimeout(function (){$('#fixer').css({ position: "fixed" }); }, 200);
		$('#page').css({ paddingTop: "80px" }); 
		$('html,body').animate({ scrollTop: "0" }, 300, function() { });
		menuclicked = menuclicked - 1;
		} */
		}); 
	
// LABELS THE THUMBNAILS ON MOUSE OVER
		
	$('.headline').mouseenter(function(){ 
			$(this).animate({ opacity: "1" }, 100, function() { });
	}); 
	$('.headline').mouseleave(function(){ 
			$(this).animate({ opacity: "0" }, 100, function() { });
	}); 
});
