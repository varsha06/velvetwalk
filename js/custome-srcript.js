$(document).ready(function() {
        var videobackground = new $.backgroundVideo($('.page-sec'), {
          "align": "centerXY",
          "width": 1280,
          "height": 720,
          "path": "img/",
          "filename": "cloud4",
          "types": ["mp4","ogg","webm"]
        });
  });
$(function(){
    $('.navbar-toggle, nav').click(function(){
        $("body").toggleClass("body-hidden");
        $('.navbar-toggle').toggleClass('navbar-on');
        $('nav').fadeToggle();
        $('nav').removeClass('nav-hide');
    });
});

$(document).ready(function () {
  var timer = null;
  var self = $(".submit-btn");
  var clicked = false;
  $(".submit-btn").on("click", function () {
    if (clicked === false){
      self.removeClass("filled");
      self.addClass("circle");
      self.html("");
      clicked = true;
      $(".submit-svg").css("display", "block");
      $(".circle_2").attr("class", "circle_2 fill_circle");

      timer = setInterval(
        function tick() {
        self.removeClass("circle");
        self.addClass("filled");
        // self.html("b");
        $(".wrap img").css("display", "block");
        $(".submit-svg").css("display", "none");
        clearInterval(timer);
      }, 2500);
      }
  });
});

// *******************Subscribe input*************//
$(document).ready(function(){
  // toggle of team on about us
  $('.card-slider-1').click(function(){
      $(this).find('.content__wrapper-1').toggleClass('active');
      $(".content__wrapper-2").removeClass('active');
  }); 
  $('.card-slider-2').click(function(){
  	  $(".content__wrapper-1").removeClass('active');
      $(this).find('.content__wrapper').toggleClass('active');
  });   

  // Subscribe input      
  $(".cta span").click(function(){
      $(".cta:not(.sent)").addClass("active");
      $(".sub-input").focus();
  });

  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  $(".sub-input").on('.sub-input', function(){
      if(regex.test($(this).val())) {
          $(".send-btn").removeAttr("disabled"); }
      else {
          $(".send-btn").attr("disabled", "disabled"); }
  });

  $(".sub-form").submit(function(x){
      x.preventDefault();
      if(regex.test($(".sub-input").val())) {
          $(".cta span").text("Thank you!");
          $(".cta").removeClass("active").addClass("sent");
      }
  });

});

/*********************** Smooth scroll*****************/
 $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



 /************* ANother option for scroll **********/
/*
 jQuery(".scroll-bottom").click(function() {
jQuery('html,body').animate({
  scrollTop: jQuery(".scroll-end").offset().top},
  'slow');
});
*/
// ===== Scroll to Top ==== 
  $(window).scroll(function() {
      if ($(this).scrollTop() >= 1500) {        // If page is scrolled more than 50px
          $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
          $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0                       // Scroll to top of body
      }, 800);
  });
