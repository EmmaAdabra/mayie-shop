// AOS swiper library init
AOS.init();

const navElement = document.querySelector("#nav");
const linkElement = document.querySelector("#links")
const exitMenu = document.querySelector("#exit-menu-btn")
const menuBtn = document.querySelector("#menu-btn")

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
    exitMenu.classList.add("hidden")
    menuBtn.classList.remove("hidden")
  }
}

window.addEventListener("resize", function() {
  removeClass()
})
removeClass();
