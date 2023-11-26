(function($) {
    "use strict";

    // Preloader
    $(window).on('load', function() { 
        $('.preloader').fadeOut(); 
        $('#preloader').delay(550).fadeOut('slow'); 
        $('body').delay(450).css({'overflow':'visible'});
    });

    // show banner pic
    $('#slides').superslides({
        inherit_width_from: '.cover-slides',
        inherit_height_from: '.cover-slides',
    });

    $( ".cover-slides ul li" ).append( "<div class='overlay-background'></div>" );

    // go to top
    $(document).ready(function(){ 
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) { 
                $('#back-to-top').fadeIn(); 
            } else { 
                $('#back-to-top').fadeOut(); 
            } 
        }); 
        $('#back-to-top').click(function(){ 
            $("html, body").animate({ scrollTop: 0 }, 600); 
            return false; 
        }); 
    });

    // menu view
    var Container = $('.container');
    Container.imagesLoaded(function () {
        var portfolio = $('.special-menu');
        var $grid = $('.special-list').isotope({
            itemSelector: '.special-grid'
        });

        // Search Functionality
        $('.search').on('keyup', function () {
            var searchValue = this.value.toLowerCase();
            $grid.isotope({
                filter: function () {
                    var text = $(this).text().toLowerCase();
                    return text.indexOf(searchValue) !== -1;
                }
            });
        });

        portfolio.on('click', 'button', function () {
            $(this).addClass('active').siblings().removeClass('active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
    });

    baguetteBox.run('.tz-gallery', {
        animation: 'fadeIn',
        noScrollbars: true
    });

    $('.datepicker').pickadate();
    $('.time').pickatime();    
}(jQuery));
