var mobileMenu = document.getElementById("mobile-menu");
var header = document.getElementById("header");

var changePage = function(page){
  mobileMenu.className = 'hide';
  $('section[data-page='+page+']').removeClass('hide');
  $('section[data-page!='+page+']').addClass('hide');  
};

document.onscroll = function(){
  if ($(document).scrollTop() > 1) {
    header.className = 'sticky';
  } else {
    header.className = '';
  }
};

$('#open-mobile-menu')
  .click(function(){
    mobileMenu.className = 'show';
  });

$('#close-mobile-menu')
  .click(function(){
    mobileMenu.className = 'hide';
  });

$('a.nav').click(function() {
  changePage($(this).attr('data-link'));
});