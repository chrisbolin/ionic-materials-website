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

$('#mobile-menu')
  .click(function(event){
    if (event.target === event.currentTarget) {
      mobileMenu.className = 'hide';
    }
  });

$(document).keyup(function(e) {
  if (e.keyCode == 27) { // escape
    mobileMenu.className = 'hide';
  }
});
