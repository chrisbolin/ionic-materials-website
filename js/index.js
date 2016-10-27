var mobileMenu = document.getElementById("mobile-menu");
var header = document.getElementById("header");

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
