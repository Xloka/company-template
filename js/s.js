$(document).ready(function (){

  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: ".mdl-layout__content" // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

});

window.onload=function(){
  var scrollable = $('main,.bigdata');
  scrollable.on('scroll.wow', function(){
      scrollable.find('.wow:not(.animated):in-viewport').removeAttr('style').addClass('animated');
  });
/*  $('#demo-menu-lower-left').click(function () {
    $('.bigdata-bg').fadeIn('slow');
    $('.bigdata').fadeIn('slow');
  });
  $('.bigdata-bg,#close').click(function () {
    $('.bigdata').fadeOut('slow');
    $('.bigdata-bg').fadeOut('slow');
  }); 
  $("#godown").click(function (event) {
      $('main').animate({ scrollTop: '800px' }, "slow");
  });
  $('main').scroll(function() {
      var height = $('main').scrollTop();

      if(height  > 700) {
          $('.mdl-layout__header-row').css({
            "background" : "black"
          });
      }else{
        $('.mdl-layout__header-row').css({
          "background" : "rgba(0, 0, 0, 0.30)"
        });
      }
  }); */
//  $('.loading').slideUp('fast');
};
