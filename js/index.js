// AOS swiper library init
AOS.init();
const navElement = document.querySelector("#nav");
const linkElement = document.querySelector("#links");
const exitMenu = document.querySelector("#exit-menu-btn");
const menuBtn = document.querySelector("#menu-btn");

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
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

  if (scrollY > 1) {
    exitMenu.classList.add("hidden");
    menuBtn.classList.remove("hidden");
    $(navElement).fadeOut();
  }
});

document.querySelector("#menu-btn").addEventListener("click", function () {
  // const menuBtn
  menuBtn.classList.add("hidden");
  exitMenu.classList.remove("hidden");
  navElement.classList.add("nav-mobile-view");
  linkElement.classList.add("links-mobile-view");
  $(navElement).fadeIn();
});

document.querySelector("#exit-menu-btn").addEventListener("click", function () {
  // const menuBtn
  exitMenu.classList.add("hidden");
  menuBtn.classList.remove("hidden");
  $(navElement).fadeOut();
  // navElement.classList.remove("nav-mobile-view");
  // linkElement.classList.remove("links-mobile-view");
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
