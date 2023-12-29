import "./parallax/parallax.min.js";
import "./vanilla-tilt.min.js";

const scene = document.getElementById("scene");
const parallaxInstance = new Parallax(scene);

// navbar script
let navToggle = document.querySelector(".menu_btn");
let navToggle2 = document.querySelector(".menu_btn2");
let closeToggle = document.querySelector(".close_btn");
let navMenu = document.querySelector(".m_menu_container");
navMenu.style.opacity = "0";
navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  navMenu.style.opacity = "1";
  navMenu.style.transition = "all 0.5s ease-in-out";
});
navToggle2.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  navMenu.style.opacity = "1";
  navMenu.style.transition = "all 0.5s ease-in-out";
});

closeToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  navMenu.style.opacity = "0";
});

// Scroll Effect
let img1 = document.getElementById("skillBox1");
let img2 = document.getElementById("skillBox2");
let headerText = document.getElementById("headerText");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  img1.style.bottom = value * 0.15 + "px";
  img2.style.bottom = value * 0.15 + "px";
  headerText.style.bottom = value * 0.15 + "px";
  img1.style.transform = "rotate(" + value * -0.005 + "deg)";
  img2.style.transform = "rotate(" + value * 0.005 + "deg)";
});

// up button
let upBtn = document.getElementById("upBtn");
let deskMenu = document.getElementById("deskMenu");
let toggleNav = document.getElementById("navToggle");
let logo = document.getElementById("logo_wrapper");

upBtn.style.opacity = "0";
upBtn.style.scale = "0";
deskMenu.style.opacity = "1";
deskMenu.style.scale = "1";
logo.style.opacity = "1";
logo.style.scale = "1";
toggleNav.style.opacity = "0";
toggleNav.style.scale = "0";
upBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
window.addEventListener("scroll", function () {
  upBtn.style.transition = "all 0.2s ease";
  toggleNav.style.transition = "all 0.3s ease";
  let value = window.scrollY;
  // check if viewport wide is less than 768px, if true then hidden  toggle nav and show logo and deks menu
  if (window.innerWidth >= 768) {
    if (value > 100) {
      upBtn.style.opacity = "1";
      upBtn.style.scale = "1";
      deskMenu.style.opacity = "0";
      deskMenu.style.scale = "0";
      logo.style.opacity = "0";
      logo.style.scale = "0";
      toggleNav.style.opacity = "1";
      toggleNav.style.scale = "1";
    } else {
      upBtn.style.opacity = "0";
      upBtn.style.scale = "0";
      deskMenu.style.opacity = "1";
      deskMenu.style.scale = "1";
      logo.style.opacity = "1";
      logo.style.scale = "1";
      toggleNav.style.opacity = "0";
      toggleNav.style.scale = "0";
    }
  } else {
    logo.style.opacity = "1";
    logo.style.scale = "1";
    toggleNav.style.opacity = "0";
    toggleNav.style.display = "none";
    toggleNav.style.scale = "0";
  }
});
// scroll down button to element with id #project
let scrollDownBtn = document.getElementById("downBtn");
scrollDownBtn.addEventListener("click", function () {
  window.scrollTo(0, 900);
});

// Loader
document.addEventListener("DOMContentLoaded", function () {
  var splashScreen = document.querySelector(".splash-screen");

  function hideSplashScreen() {
    splashScreen.classList.add("hidden");
  }

  // Tambahkan class 'hidden' setelah beberapa detik
  setTimeout(hideSplashScreen, 3000);

  // Hapus class 'hidden' setelah animasi selesai
  splashScreen.addEventListener("transitionend", function () {
    splashScreen.classList.remove("hidden");
  });
});
