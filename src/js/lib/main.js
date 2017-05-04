// HEADER DOWNSCROLL START

var downBtn = document.getElementsByClassName('header__scroll')[0],
    downBtnLocation = downBtn.getBoundingClientRect().bottom + window.pageYOffset;

downBtn.onclick = function() {
  var offset = window.pageYOffset;
  var target = 960;
  var t = setInterval(function(){
    window.scrollTo(downBtnLocation,offset);
    offset = offset + 10;
    if(offset >= target){
      clearInterval(t);
    }
  }, 10);
}

// HEADER DOWNSCROLL END

// MENU TOGGLE START

var menu = document.getElementsByClassName('menu')[0];
var toggleBtn = document.getElementsByClassName('toggle')[0];

toggleBtn.addEventListener('click', function(e) {
  e = e || event;
  var target = e.target;
  if(target.tagName != 'DIV') return;
  menu.classList.toggle("menu_js");
});

// MENU TOGGLE FINISH

jQuery(function($) {
    $('.slick').slick();
});