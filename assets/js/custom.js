// Slick Carrusel
$('.home-carrusel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear'
});

// Preloader
setTimeout(function(){
	$('.preloader').fadeOut();
},2000)

//Side Navbar
function toggleNav() {
	$('#mySidenav').toggleClass('open');
  $('html').toggleClass('sidenav-open');
  $('#sidenav-mask').toggleClass('sidenav-mask');
}
$('#sidenav-mask').click(function() {
  toggleNav();
});
$('.sidenav-link').click(function() {
  toggleNav();
});

// Cambio de ES/EN en botón de idioma
var value = true
function FbotonEsEn() {
  var changeLang = document.getElementById('btnLanguage');
  value?changeLang.innerText = "ES":changeLang.innerText = "EN";
  value=!value
}

var value2 = true
function FbotonEsEnM() {
  var changeLang = document.getElementById('btnLanguageM');
  value2?changeLang.innerText = "ES":changeLang.innerText = "EN";
  value2=!value2
}

//Para mostrar solo tres líneas son importar el parrafo
function ellipsis(selector){
  var nodeList = document.querySelectorAll(selector);
  var arrNodes = [].slice.call(nodeList);
  
  for (var i in arrNodes) {
   var n = arrNodes[i];
   while(n.scrollHeight-n.offsetHeight > 0) {
     var text = (n.innerText != undefined) ? n.innerText : n.textContent;
     if(n.innerText != undefined) {
      n.innerText = text.replace(/\W*\s(\S)*$/, "...");
     } else {
      // Para Firefox
      n.textContent = text.replace(/\W*\s(\S)*$/, "...");
     }
   }
  }
}
$(document).ready(function() {ellipsis('.text-short');});