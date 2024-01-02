// AOS swiper library init
AOS.init();

const navElement = document.querySelector("#nav");
const linkElement = document.querySelector("#links");
const exitMenu = document.querySelector("#exit-menu-btn");
const menuBtn = document.querySelector("#menu-btn");
const header = document.querySelector("header");
const loader = document.querySelector(".loader");
const delayElement = document.querySelectorAll(".data-aos-delay")
let totalTime;

const startTime = performance.now();

window.addEventListener("load", function () {
  const endTime = performance.now();
  totalTime = endTime - startTime;
  console.log(totalTime)
});

delayElement.forEach(element=> {
  element.setAttribute("data-aos-delay", totalTime + 100)
})

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader");

  // Function to hide the loader
  function hideLoader() {
    loader.firstElementChild.style.opacity = "0"
    loader.style.opacity = "0";
    loader.style.display = "none";
  }

  // Hide loader when the DOM content has fully loaded
  setTimeout(hideLoader, totalTime)
});

window.addEventListener("scroll", () => {
  const overlayBg = document.querySelector(".hide");

  if (scrollY > 50) {
    header.classList.add("headerBg");
    overlayBg.classList.remove("hidden");
    overlayBg.classList.add("active");
  } else {
    header.classList.remove("headerBg");
    overlayBg.classList.add("hidden");
    overlayBg.classList.remove("active");
  }

  if (navElement.classList.contains("nav-mobile-view")) {
    if (scrollY > 1) {
      exitMenu.classList.add("hidden");
      menuBtn.classList.remove("hidden");
      $(navElement).fadeOut();
    }
  }
});

document.querySelector("#menu-btn").addEventListener("click", function () {
  menuBtn.classList.add("hidden");
  exitMenu.classList.remove("hidden");
  navElement.classList.add("nav-mobile-view");
  linkElement.classList.add("links-mobile-view");
  $(navElement).fadeIn();
});

document.querySelector("#exit-menu-btn").addEventListener("click", function () {
  exitMenu.classList.add("hidden");
  menuBtn.classList.remove("hidden");
  $(navElement).fadeOut();
});

function removeClass() {
  if (window.innerWidth > 767) {
    navElement.classList.remove("nav-mobile-view");
    linkElement.classList.remove("links-mobile-view");
    exitMenu.classList.add("hidden");
    menuBtn.classList.remove("hidden");
  }
}

window.addEventListener("resize", function () {
  removeClass();
});
removeClass();
