

$(document).ready( function() {

    $('nav').stickUp({
        scrollHide:true
});


	$('a[href^="#"]').not('.accordion > dt > a').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});


});



$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    $('header, section').each(function(i) {
        if ($(this).position().top <= windscroll + 100) {
            $('nav a.active').removeClass('active');
            $('nav a').eq(i).addClass('active');
        }
    });
}).scroll();

(function($) {

  var allPanels = $('.accordion > dd');
  allPanels.hide();

  $('.accordion > dt > a').click(function() {


if ( $(this).parent().next().is(':hidden')) {

    allPanels.slideUp({
        duration: 500,
//        queue: false
    });

    $(this).parent().next().slideDown({
        duration: 500,
//        queue: false
//        complete:
//        function(){
//
//    }
    }


  );

}

        var whe = $(this).parent().offset().top;
        var cor = $(this).parent().prevAll('dd:visible').outerHeight(true) || 0;
        console.log(cor+" "+whe);
//	    var target = this.hash;
//	    var $target = $(target);
//
	    $('html, body').stop().animate({
	        'scrollTop': whe-cor
	    }, {
            duration:500,
           easing: 'swing',
            complete: function () {
//	        window.location.hash = target;
	    }});



    return false;
  });

})(jQuery);

