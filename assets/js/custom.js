$(function() {
             $('.popup-youtube, .popup-vimeo').magnificPopup({
                 disableOn: 700,
                 type: 'iframe',
                 mainClass: 'mfp-fade',
                 removalDelay: 160,
                 preloader: false,
                 fixedContentPos: false
             });
         });

 $('.panel-title a').click(function(){
               $(this).parent().parent().parent().addClass("active").siblings().removeClass("active");
            });

$('#one').click(function(){
               $('.foPara').show();
               $('.sPara, .tPara, .fPara, .fiPara').hide();
            });
            $('#two').click(function(){
               $('.sPara').show();
               $('.foPara, .tPara, .fPara, .fiPara').hide();
            });
            $('#three').click(function(){
               $('.tPara').show();
               $('.foPara, .sPara, .fPara, .fiPara').hide();
            });            
            $('#four').click(function(){
               $('.fPara').show();
               $('.foPara, .sPara, .tPara, .fiPara').hide();
            });           
            $('#five').click(function(){
               $('.fiPara').show();
               $('.foPara, .sPara, .tPara, .fPara').hide();
            });

            // Home Click
            $('.homeContent').click(function(){
               $('#ldt').hide();
               $('#dtls, #hm').show();
               $('.borderSection p, .borderSection span, .posRel img, .posRel .contentB, .posRel .contentA').addClass("animated animated");
               $('.borderSection p, .borderSection span, .posRel img, .posRel .contentB, .posRel .contentA').attr("style","visibility: visible;");
            });
            // Executive Search
            $('#cons1').click(function(){
               $('#ldt').hide();
               $('#dtls1, #exs').show();
               $('.borderSection p, .borderSection span, .posRel img, .posRel .contentB, .posRel .contentA').addClass("animated animated");
               $('.borderSection p, .borderSection span, .posRel img, .posRel .contentB, .posRel .contentA').attr("style","visibility: visible;");
            });
            // Healthcare
            $('#cons2').click(function(){
               $('#ldt').hide();
               $('#dtls3, #hbh').show();
               $('.borderSection p, .borderSection span, .posRel img, .posRel .contentB, .posRel .contentA').addClass("animated animated");
               $('.borderSection p, .borderSection span, .posRel img, .posRel .contentB, .posRel .contentA').attr("style","visibility: visible;");
            });

            // Work Engagement
            $('#cons3').click(function(){
               $('#ldt').hide();
               $('#dtls4, #we').show();
               $('.borderSection p, .borderSection span, .posRel img, .posRel .contentB, .posRel .contentA').addClass("animated animated");
               $('.borderSection p, .borderSection span, .posRel img, .posRel .contentB, .posRel .contentA').attr("style","visibility: visible;");
            });

            // Consultation
            $('#cons4').click(function(){
               $('#ldt').hide();
               $('#dtls2, #cn').show();
               $('.borderSection p, .borderSection span, .posRel img, .posRel .contentB, .posRel .contentA').addClass("animated animated");
               $('.borderSection p, .borderSection span, .posRel img, .posRel .contentB, .posRel .contentA').attr("style","visibility: visible;");
            });
            // Training & Documentation
            $('#cons5').click(function(){
               $('#ldt').hide();
               $('#dtls5, #t_d').show();
               $('.borderSection p, .borderSection span, .posRel img, .posRel .contentB, .posRel .contentA').addClass("animated animated");
               $('.borderSection p, .borderSection span, .posRel img, .posRel .contentB, .posRel .contentA').attr("style","visibility: visible;");
            });
            // Medical Tourism in India
            $('#cons6').click(function(){
               $('#ldt').hide();
               $('#dtls6, #mti').show();
               $('.borderSection p, .borderSection span, .posRel img, .posRel .contentB, .posRel .contentA').addClass("animated animated");
               $('.borderSection p, .borderSection span, .posRel img, .posRel .contentB, .posRel .contentA').attr("style","visibility: visible;");
            });
            // Hospital
            $('#hps').click(function(){
               $('#ldt,#dtls1').hide();
               $('#dtls7, #exs').show();
               $('.borderSection p, .borderSection span, .posRel img, .posRel .contentB, .posRel .contentA').addClass("animated animated");
               $('.borderSection p, .borderSection span, .posRel img, .posRel .contentB, .posRel .contentA').attr("style","visibility: visible;");
            });

            $('.bckBtn').click(function(){
               $('#ldt').show();
               $('#dtls, #dtls1, #dtls2, #dtls3, #dtls4, #dtls5, #dtls6, #hm, #exs, #hbh, #we, #cn, #t_d, #mti, #dtls7').hide();
               $('.mainC, .comS, .cirBorder, .homeContent, .posRel img, .posRel .contentB, .posRel .contentA').addClass("animated animated");
               $('.mainC, .comS, .cirBorder, .homeContent, .posRel img, .posRel .contentB, .posRel .contentA').attr("style","visibility: visible;");
               $('.homeContent').attr("data-wow-iteration", "infinite");
               $('.homeContent').attr("data-wow-duration", "2s");
            });

            // Executive inner
            $('#one1').click(function(){
               $('.foPara1').show();
               $('.sPara1, .tPara1, .fPara1, .fiPara1').hide();
            });
            $('#two1').click(function(){
               $('.sPara1').show();
               $('.foPara1, .tPara1, .fPara1, .fiPara1').hide();
            });
            $('#three1').click(function(){
               $('.tPara1').show();
               $('.foPara1, .sPara1, .fPara1, .fiPara1').hide();
            });            
            $('#four1').click(function(){
               $('.fPara1').show();
               $('.foPara1, .sPara1, .tPara1, .fiPara1').hide();
            });           
            $('#five1').click(function(){
               $('.fiPara1').show();
               $('.foPara1, .sPara1, .tPara1, .fPara1').hide();
            });

            // Consultation Inner
            $('#one2').click(function(){
               $('.foPara2').show();
               $('.sPara2, .tPara2, .nrL').hide();
            });
            $('#two2').click(function(){
               $('.sPara2').show();
               $('.foPara2, .tPara2, .nrL').hide();
            });
            $('#three2').click(function(){
               $('.tPara2').show();
               $('.foPara2, .sPara2, .nrL').hide();
            }); 

            $('#nrList').click(function(){
               $('.tPara2, .sPara2, .foPara2').hide();
               $('.nrL').show();
            });

            // Healthcare Inner
            $('#one3').click(function(){
               $('.foPara3').show();
               $('.sPara3, .tPara3').hide();
            });
            $('#two3').click(function(){
               $('.sPara3').show();
               $('.foPara3, .tPara3').hide();
            });
            $('#three3').click(function(){
               $('.tPara3').show();
               $('.foPara3, .sPara3').hide();
            });


            // Work Engagment inner
            $('#one4').click(function(){
               $('.foPara4').show();
               $('.sPara4, .tPara4, .fPara4').hide();
            });
            $('#two4').click(function(){
               $('.sPara4').show();
               $('.foPara4, .tPara4, .fPara4').hide();
            });
            $('#three4').click(function(){
               $('.tPara4').show();
               $('.foPara4, .sPara4, .fPara4').hide();
            });            
            $('#four4').click(function(){
               $('.fPara4').show();
               $('.foPara4, .sPara4, .tPara4').hide();
            });


            // Document inner
            $('#one5').click(function(){
               $('.foPara5').show();
               $('.sPara5, .tPara5, .fPara5').hide();
            });
            $('#two5').click(function(){
               $('.sPara5').show();
               $('.foPara5, .tPara5, .fPara5').hide();
            });
            $('#three5').click(function(){
               $('.tPara5').show();
               $('.foPara5, .sPara5, .fPara5').hide();
            });            
            $('#four5').click(function(){
               $('.fPara5').show();
               $('.foPara5, .sPara5, .tPara5').hide();
            });

             // Hospital inner
             $('#zero7').click(function(){
               $('.f0Para7').show();
               $('.foPara7, .sPara7, .tPara7, .fPara7, .fiPara7, .siPara7').hide();
            });
            $('#one7').click(function(){
               $('.foPara7').show();
               $('.f0Para7, .sPara7, .tPara7, .fPara7, .fiPara7, .siPara7').hide();
            });
            $('#two7').click(function(){
               $('.sPara7').show();
               $('.f0Para7,.foPara7, .tPara7, .fPara7, .fiPara7, .siPara7').hide();
            });
            $('#three7').click(function(){
               $('.tPara7').show();
               $('.f0Para7,.foPara7, .sPara7, .fPara7, .fiPara7, .siPara7').hide();
            });            
            $('#four7').click(function(){
               $('.fPara7').show();
               $('.f0Para7,.foPara7, .sPara7, .tPara7, .fiPara7, .siPara7').hide();
            });           
            $('#five7').click(function(){
               $('.fiPara7').show();
               $('.f0Para7,.foPara7, .sPara7, .tPara7, .fPara7, .siPara7').hide();
            });
            $('#six7').click(function(){
               $('.siPara7').show();
               $('.f0Para7,.foPara7, .sPara7, .tPara7, .fPara7, .fiPara7').hide();
            });
 (function () {
        "use strict";

        // define variables
        var items = document.querySelectorAll(".timeline li");

        // check if an element is in viewport
        // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
        function isElementInViewport(el) {
          var rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        }

        function callbackFunc() {
          for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
              items[i].classList.add("in-view");
            }
          }
        }

        // listen for events
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);
      })();


      $('.moreless-button').click(function() {
        $(this).parent().find('.moretext').slideToggle();
        if ($('.moreless-button').text() == "Learn more") {
          $(this).text("Learn less")
        } else {
          $(this).text("Learn more")
        }
      });

 $(document).ready(function(){       
            $('#onLoad').modal('show');
         }, 5000);

         $('#close').click(function(){
            $('#onLoad').css('display', 'none');
         });



$(document).ready(function() {
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });

});
      



