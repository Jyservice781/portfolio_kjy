$(function(){
    
  const intro = document.querySelector('.int_logo', '.int_bg');

  intro.addEventListener('animationend', (event) => {
    $('.po_intro').addClass('end');
  });
    
})//doc