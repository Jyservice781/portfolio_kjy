$(function(){
  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    // 미모티콘 페럴렉스
    if(scroll>=3450){
      $(".sc5_wrap").css({
        "transform":"translateY(15%)",
        "transition":"all 1.5s",
      });
    }else{
      $(".sc5_wrap").css({
        "transform":"translateY(90%)",
        "transition":"all .5s",
      })
    };
    //spacer
    if(scroll>=30){
      $("#wrapper>div").addClass('spacer'),
      $("#hd_p>h1>a.my_logo").css({
        "background": "url(../img/my_logo_w.png) no-repeat center center",
      });
    }else{
      $("#wrapper>div").removeClass('spacer'),
      $("#hd_p>h1>a.my_logo").css({
        "background": "url(../img/my_logo2.png) no-repeat center center",
      });
    };
    //sc1nav의 색깔 반전으로 색감 통일성 만들기
    if(scroll>=50){
      $("nav.menu>ul>li>span").css({
        "background-color": "#00aaff",
      })
    }else{
      $("nav.menu>ul>li>span").css({
        "background-color": "#ff5500",
      });
      };
  });//fun

  //popUp
  let target = document.querySelectorAll('.box .open_btn');
  let closeBtn = document.querySelectorAll('.close_btn'); 
  let targetID;
//핍업열기
  for(let i = 0; i < target.length; i++){
    target[i].addEventListener('click', function(){
      targetID = this.getAttribute('href');
      document.querySelector(targetID).style.display = 'block';
    }); 
  };
  //팝업 닫기
  for(let j = 0; j < target.length; j++){
    closeBtn[j].addEventListener('click', function(){
      this.parentNode.parentNode.style.display = 'none';
    });
  }
  
});//doc