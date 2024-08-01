const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.remove("bg-transparent");
    header.classList.add("bg-black");
  } else {
    header.classList.remove("bg-black");
    header.classList.add("bg-transparent");
  }
});

menuIcon.addEventListener("click", () => {
  if (
    menu.classList.contains("-top-[260px]") &&
    menu.classList.contains("-z-10")
  ) {
    menu.classList.remove("-top-[260px]");
    menu.classList.add("top-14");
    menu.classList.toggle("-z-10");
  } else {
    menu.classList.remove("top-14");
    menu.classList.add("-top-[260px]");
    menu.classList.toggle("-z-10");
  }
});
