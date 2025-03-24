const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const header = document.querySelector("header");
const scrollers = document.querySelectorAll(".scroller");

const imgs = document.querySelector("#img");
const imgElems = document.querySelectorAll("#img img");

const totalImgs = imgElems.length * 2; // Contar as imagens duplicadas
let posInicial = 0;
const intervalDuration = 5000; // Intervalo de troca (5 segundos)
const transitionDuration = 1000; // Duração da transição (1 segundo)

menuIcon.addEventListener("click", () => {
  const sections = document.querySelectorAll("section");
  const nav = document.getElementById("navbar");
  let index = sections.length;
  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  if (
    menu.classList.contains("-top-[260px]") &&
    menu.classList.contains("-z-10")
  ) {
    menu.classList.remove("-top-[260px]");
    menu.classList.toggle("-z-10");
    menu.classList.toggle("hidden");
    if (sections[index].id === "servicos" || sections[index].id === "contato") {
      header.classList.add("bg-[#1F3A67]");
    } else {
      header.classList.add(
        "bg-transparent/5",
        "backdrop-blur-md",
        "backdrop-contrast-10",
        "shadow-md"
      );
    }
  } else {
    if (sections[index].id === "home" && window.scrollY == 0) {
      header.classList.remove(
        "bg-transparent/5",
        "backdrop-blur-md",
        "shadow-md",
        "backdrop-contrast-10"
      );
    }
    menu.classList.toggle("hidden");
    menu.classList.add("-top-[260px]");
    menu.classList.toggle("-z-10");
  }
});

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller-inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

//Clonar as imagens e adicionar ao final do contêiner
imgElems.forEach((img) => {
  const clonedImg = img.cloneNode(true);
  imgs.appendChild(clonedImg);
});

function atualizarCarrossel() {
  posInicial++;
  imgs.style.transition = `transform ${transitionDuration}ms ease`;
  imgs.style.transform = `translateX(${-posInicial * 100}%)`;

  if (posInicial >= imgElems.length) {
    setTimeout(() => {
      imgs.style.transition = "none"; // Remove transição para o reset
      imgs.style.transform = `translateX(0)`;
      posInicial = 0;
    }, transitionDuration);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = Array.from(slider.children);

  slides.forEach((slide) => {
    let clone = slide.cloneNode(true);
    slider.appendChild(clone);
  });
});

setInterval(atualizarCarrossel, intervalDuration);

addAnimation();

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function changeActiveLink() {
    console.log(window.scrollY);
    let index = sections.length;
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    if (sections[index].id === "servicos" || sections[index].id === "contato") {
      header.classList.remove(
        "bg-transparent/5",
        "backdrop-blur-md",
        "shadow-md",
        "backdrop-contrast-10"
      );
      header.classList.add("bg-[#1F3A67]");
    } else if (
      sections[index].id === "home" &&
      window.scrollY == 0 &&
      menu.classList.contains("-top-[260px]")
    ) {
      header.classList.remove(
        "bg-transparent/5",
        "backdrop-blur-md",
        "shadow-md",
        "backdrop-contrast-10"
      );
    } else {
      if (menu.classList.contains("-top-[260px]") == false) {
        header.classList.add(
          "bg-transparent/5",
          "backdrop-blur-md",
          "backdrop-contrast-10"
        );
      } else {
        header.classList.add(
          "bg-transparent/5",
          "backdrop-blur-md",
          "shadow-md",
          "backdrop-contrast-10"
        );
      }

      header.classList.remove("bg-[#1F3A67]");
    }
  }

  changeActiveLink();
  window.addEventListener("scroll", changeActiveLink);
});
