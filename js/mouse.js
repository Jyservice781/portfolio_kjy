$(function(){
  const mouseEvent = $('.mouse_event');
  $(window).mousemove(function(e){
    mouseEvent.css({
      top:e.clientY,
      left:e.clientX
    });
  });

});//doc