///////////////////////////////////////////////////

//         graphworks frameworks v3.0            //

///////////////////////////////////////////////////
// Made by graphworks creative - www.graph.works
///////////////////////////////////////////////////

$(document).ready(function() {
    
    // Onclick Notification close 
    $('[id^="notification_"]').click(function(){
		$('[id^="notification_"]').hide(800);
	});
    
    
    
    // Render SelectBox plugin
    $('[id^="select_"]').selectbox();
    
    
    
    // Mobile navigation
    $('#mobile_nav').css('display', 'none');
    $('#scroller').addClass('disp_none');
    var open = false;

    $('#menu-mobile-toggle').click(function() {
        open = !open;

        if(open) {
            $('#mobile_nav').slideToggle();
            $('#scroller').removeClass('disp_none').addClass('disp_block');
        } else {
            $('#mobile_nav').slideUp();
            $('#scroller').removeClass('disp_block').addClass('disp_none');
        }
    });
    
    $('#mobile_nav a').click(function() {
        $('#mobile_nav').slideUp();
        $('#scroller').removeClass('disp_block').addClass('disp_none');
    })
    $('#mobile_nav .sub').parent().click(function(event) {
        event.preventDefault();
        $(this).children('.sub').slideToggle();
    });
    
    $('#mobile_nav .sub a').click(function(event) {
        window.location.href = $(this).prop('href');
        $('#mobile_nav .sub').slideUp();
        $('#scroller').removeClass('disp_block').addClass('disp_none');
    });
    

    
    // navigation scrollto
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(0) + ']');
            if (target.length) {
                $('html,body').animate({ scrollTop: target.offset().top - 80 }, 1000);
                return false;
            }
        }
    });
    
    
    
    // scrollto indicator
    var map = [];
    var pages = {};

    $("header ul a").each(function () {
        id = $(this).attr("href");
        position = $(id).offset();
        id = $(id).attr("id");
        map[map.length] = id;
        pages[id] = position.top;
    });

    $(window).scroll(function (evt) {
        scroll = $(document).scrollTop();
        for (var i = map.length - 1; i >= 0; i--) {
            if (scroll >= pages[map[i]] - 100) {
                $("header ul a").removeClass("current");
                $("header ul a[href=#" + map[i] + "]").addClass("current");
                break;
            }
        }
    });
    
    
});
