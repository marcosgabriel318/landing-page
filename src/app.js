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

// const slider = document.getElementById("slider");
// const slides = Array.from(slider.children);
// const speed = 25; // Ajuste a velocidade do carrossel
// document.documentElement.style.setProperty("--speed", speed + "s");

// // Duplica os slides apenas uma vez para efeito infinito
// slides.forEach((slide) => {
//   let clone = slide.cloneNode(true);
//   slider.appendChild(clone);
// });


const slider = document.getElementById("slider");
const slides = Array.from(slider.children);
const speed = 25; // Ajuste a velocidade do carrossel
document.documentElement.style.setProperty("--speed", speed + "s");

// Duplica os slides duas vezes para efeito infinito
slides.forEach((slide) => {
  let clone1 = slide.cloneNode(true);
  let clone2 = slide.cloneNode(true);
  slider.appendChild(clone1);
  slider.appendChild(clone2);
});

setInterval(atualizarCarrossel, intervalDuration);

addAnimation();
