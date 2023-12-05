$(function(){

  const This = $('.mBtn>.hd_mButton');
  
  $(This).on('click', function(){
    This.toggleClass('active');
  });

  $('.m_gnb>ul>li>a').click(function(){
    This.removeClass('active');
  });
  // moblie_ togle active
  const Button = $('.accordion');
  const BoxDep = $('.box_wrap_dep');

  $(Button).click(function(){
    Button.toggleClass('active');
    BoxDep.toggleClass('active');

    if(Button.hasClass('active')){
      $('#moblie').css({
        'height': 'max-content',
      }),
      $('.sc3').css({
        'height': '2000px',
      }),
      $('#wrapper').css({
        'height':'4400px'
      });
    }else{
      $('#moblie').css({
        'height': '600px'
      }),
      $('.sc3').css({
        'height': '1000px'
      }),
      $('#wrapper').css({
        'height': 'min-content',
        'height': 'fit-content'
      });
    };


  });
});//doc