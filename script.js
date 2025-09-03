// Example: Increment cart count dynamically
let cartCount = 0;
const cartCountEl = document.getElementById("cart-count");
 const menuToggle = document.querySelector(".menu-toggle");
 const navLinks = document.querySelector(".nav-links");

 menuToggle.addEventListener("click", () => {
   navLinks.classList.toggle("active");
 });


// Footer-specific JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector(".footer-bottom p");
  if (yearSpan) {
    yearSpan.innerHTML = `&copy; ${new Date().getFullYear()} QuickCart. All rights reserved.`;
  }
});


// Auto-update year
document.getElementById("year").textContent = new Date().getFullYear();



document.addEventListener("DOMContentLoaded", function () {
  const sliderImages = document.querySelector(".slider-images");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let counter = 0;

  nextBtn.addEventListener("click", () => {
    counter++;
    slideImages();
  });

  prevBtn.addEventListener("click", () => {
    counter--;
    slideImages();
  });

  function slideImages() {
    sliderImages.style.transform = `translateX(-${counter * (100 / 3)}%)`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  function initSlider(container) {
    const slider = container.querySelector(".slider-images");
    const prevBtn = container.querySelector(".prev");
    const nextBtn = container.querySelector(".next");
    const slideImages = container.querySelectorAll(".slide-img");

    let counter = 0;

    function updateSlider() {
      slider.style.transform = `translateX(-${counter * (100 / 3)}%)`;
    }

    nextBtn.addEventListener("click", () => {
      counter++;
      if (counter > slideImages.length - 3) {
        counter = slideImages.length - 3;
      }
      updateSlider();
    });

    prevBtn.addEventListener("click", () => {
      counter--;
      if (counter < 0) {
        counter = 0;
      }
      updateSlider();
    });
  }

  const slider1 = document.querySelector(".image-slider");
  const slider2 = document.querySelector(".image-slider2");
  initSlider(slider1);
  initSlider(slider2);
});
$(document).ready(function () {
  var accordionOpen = $(".first_depth p"),
    secondDepth = $(".second_depth");

  accordionOpen.on("click", function () {
    accordionOpen.closest(".first_depth").removeClass("on");
    $(this).closest(".first_depth").addClass("on");
  });
});

