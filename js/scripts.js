/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });


    //on Load and Reload animation
    $(window).on('load', function(){
        var tags = $(".resume-section")
        $(tags).addClass("visible")
    });


    //animation on scroll
    $(document).on("scroll", function () {
        var pageTop = $(document).scrollTop()
        var pageBottom = pageTop + $(window).height() - 300
        var tags = $(".resume-section")
      
        for (var i = 0; i < tags.length; i++) {
          var tag = tags[i]
      
          if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible")
          } else {
            $(tag).removeClass("visible")
          }
        }
      });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict
