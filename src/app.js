const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const header = document.querySelector("header");

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    //header.classList.add("bg-[#131313]/30", "backdrop-blur-md", "shadow-lg");
    header.classList.add(
      "bg-transparent/5",
      "backdrop-blur-md",
      "shadow-md",
      "backdrop-contrast-10"
    );
  } else {
    header.classList.remove(
      "bg-transparent/5",
      "backdrop-blur-md",
      "shadow-md",
      "backdrop-contrast-10"
    );
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
