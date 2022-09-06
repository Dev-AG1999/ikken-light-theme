$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    arrows: false,
  });
  $(".slider2").slick({
    dots: true,
  });
  AOS.init();

 

 
});
// for opening the side menu

function clickMenu() {
  document.getElementById("side-menu").style.right = "0px";

  document.getElementById("slider").style.filter = "brightness(0.6)";
}

// for subscribe section input

function clickInput() {
  document.getElementById("input").style.width = "80%";
}

// for menu input section

function clickMenuInput() {
  document.getElementById("input2").style.width = "80%";
}

// for contact page name input

function contactNameIp(width) {
  document.getElementById("contact-name").style.width = width;
}

// for contact page email input

function contactEmailIp(width) {
  document.getElementById("contact-email").style.width = width;
}

// for subscribe page name input

function subNameIp(width) {
  document.getElementById("subs-name").style.width = width;
}

// for subscribe page email input

function subEmailIp(width) {
  document.getElementById("subs-email").style.width = width;
}

// for removing onclick event on side menu and slider

function removeMenu() {
  document.getElementById("side-menu").style.right = "-500px";
  document.getElementById("slider").style.filter = "brightness(1)";
}
