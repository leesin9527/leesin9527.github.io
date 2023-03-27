/* 导航栏显示标题 */
/* 在文章下滑的时候，显示文章的标题，而不是显示菜单，但是当停顿时，显示菜单 */
document.getElementById("name-container").setAttribute("style", "display:none");

var position = $(window).scrollTop();

$(window).scroll(function () {

  var scroll = $(window).scrollTop();

  if (scroll > position) {
    document.getElementById("name-container").setAttribute("style", "");
    document.getElementsByClassName("menus_items")[1].setAttribute("style", "display:none!important");
  } else {
    document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
    document.getElementById("name-container").setAttribute("style", "display:none");

  }
  position = scroll;

});
function scrollToTop(){
    document.getElementsByClassName("menus_items")[1].setAttribute("style","");
    document.getElementById("name-container").setAttribute("style","display:none");
    btf.scrollToDest(0, 500);
}
document.getElementById("page-name").innerText = document.title.split(" |")[0];