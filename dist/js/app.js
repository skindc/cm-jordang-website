(function () {
  'use strict';

  //We do this as different libraries access jquery with different global
  //This ensures all libraries are using the same instance
  window.jQuery = window.jquery = window.$ = jQuery;


  //Make sure the document is loaded before we do anything
  $(document).ready(() => {
    console.log('document ready ', location.pathname);

    //If home page
    if (/(.*index\.html|\/)$/.test(location.pathname)) {
      //Seems this has to be a class and not id
      //
      console.log('load carousel');
      const owl = $(".owl-carousel").owlCarousel({
        //rtl: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        //fluidSpeed: true,
        //Default is linear transitionsMore transitions
        //can be installed with other plugins
        //slideTransition: "swing",
        loop: true,
        margin: 0,
        nav: false,
        //autoWidth: true,
        //responsiveBaseElement: $(".ncv-home-carousel-content")(),
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });



      /*function triggerOwl() {

      }

      setInterval(triggerOwl, 5000)*/

    }
  });

}());
