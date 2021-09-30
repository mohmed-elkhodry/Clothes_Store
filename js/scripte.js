/*global $, document, window*/
$(document).ready(function () {
  "use strict";
    
    
    /*   nice scroll  */
  $("html").niceScroll({
    cursorcolor: "#E53935",
    cursorwidth: "7px",
    cursoropacitymin: 0.4,
    cursorborder: "0px solid #fff",
    horizrailenabled: false,
  });
    /*     owl carousel   */
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 1,
    dots: true,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
  });

    
   /*   adjust carousel height for any sizes */ 
  function corausel_h() {
    var wh = $(window).height(),
        nh = $(".navbar").innerHeight();
    $(".carousel, .carousel-item").height(wh - nh);
  }

  corausel_h();
  $(window).resize(function () {
    corausel_h();
  });
    
    
/*   scroll to top button  */
  $(document).on("scroll", function () {
    if ($(this).scrollTop() > 500) {
      $(".top-btn").fadeIn(500);
    } else {
      $(".top-btn").fadeOut(500);
    }
  });

  $(".top-btn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

    
/* serch bar on nav bar */
  if (
    $(window).width() >= 576 ||
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    $(".fa-search").click(function () {
      $(".serch-bar").show();
      $(".serch-bar").animate(
        {
          width: "210px",
        },
        1000
      );
      $(".serch-bar").focus();
    });

    $(".serch-bar").blur(function () {
      $(".serch-bar").css("width", "0px");
      $(".serch-bar").hide();
    });
  }
});
