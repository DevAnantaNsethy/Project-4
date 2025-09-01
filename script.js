// Example: Increment cart count dynamically
let cartCount = 0;
const cartCountEl = document.getElementById("cart-count");

// Simulate adding items
function addToCart() {
  cartCount++;
  cartCountEl.textContent = cartCount;
}


// Carousel functionality
const carousels = document.querySelectorAll(".carousel-container");

carousels.forEach(container => {
  const carousel = container.querySelector(".carousel");
  const leftBtn = container.querySelector(".carousel-btn.left");
  const rightBtn = container.querySelector(".carousel-btn.right");

  leftBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -300, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 300, behavior: "smooth" });
  });
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

