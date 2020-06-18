$(document).ready(function() {
           $(".menu-icon").on("click", function() {
                 $("nav ul").toggleClass("showing");
           });
     });

     // Scrolling Effect

     $(window).on("scroll", function() {
           if($(window).scrollTop()) {
                 $('nav').addClass('black');
           }

           else {
                 $('nav').removeClass('black');
           }
     })

     /**
      * Do the clicking stuff
      *
      */

     $(document).ready(function() {
       var cards = document.querySelectorAll(".card.effect__click");
       for ( var i  = 0, len = cards.length; i < len; i++ ) {
         var card = cards[i];
         clickListener( card )};


       function clickListener(card) {
         card.addEventListener( "click", function() {
           var c = this.classList;
           c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
         });
       }
     });
