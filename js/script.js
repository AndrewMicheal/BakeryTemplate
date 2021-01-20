var header = document.querySelector(".header");
var backeryLightLogo = document.querySelector(".backery-light");
var backeryDarkLogo = document.querySelector(".backery");
var menuBar = document.getElementById("menu");
var navbar = document.querySelector(".navbar");
var closeIcon = document.getElementById("close");
var arrow = document.querySelector('.arrow');

menuBar.onclick = function(){
    navbar.style.transition = "height 1s";
    navbar.style.height = "327px";
    closeIcon.style.display = "block";
    this.style.display = "none";
}

closeIcon.onclick = function(){
    navbar.style.transition = "height 1s";
    navbar.style.height = "0px";
    this.style.display = "none";
    menuBar.style.display = "block";
}

arrow.onclick = function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}