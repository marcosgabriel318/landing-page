const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const header = document.querySelector("header");

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("bg-[#131313]");
  } else {
    header.classList.remove("bg-[#131313]");
  }
});

menuIcon.addEventListener("click", () => {
  if (
    menu.classList.contains("-top-[260px]") &&
    menu.classList.contains("-z-10")
  ) {
    menu.classList.remove("-top-[260px]");

    menu.classList.add("top-14", "bg-[#131313]");
    menu.classList.toggle("-z-10");
  } else {
    menu.classList.remove("top-14");
    menu.classList.add("-top-[260px]");
    menu.classList.toggle("-z-10");
  }
});
