// Example: Increment cart count dynamically
let cartCount = 0;
const cartCountEl = document.getElementById("cart-count");

// Simulate adding items
function addToCart() {
  cartCount++;
  cartCountEl.textContent = cartCount;
}
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
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




// Example product data

const products = {
  1: {
    name: "Noise Twist Round Dial Smart Watch",
    image: "./image/1.jpg",
    description:
      "Bluetooth Calling, 1.38” TFT Display, 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate Monitor, Sleep Tracking.",
    price: "₹1,399",
    features: [
      "Up to 7 Days Battery Life",
      "100+ Stylish Watch Faces",
      "IP68 Water Resistance",
      "Heart Rate & Sleep Tracking",
      "Bluetooth Calling Support",
    ],
  },
  2: {
    name: "Wireless Earbuds Pro",
    image: "images/earbuds.jpg",
    description:
      "Noise cancellation, 30-hour battery, deep bass, and premium design.",
    price: "₹2,499",
    features: [
      "30 Hours Battery Backup",
      "Active Noise Cancellation",
      "Crystal Clear Calls",
      "Fast Charging Support",
    ],
  },
};

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const product = products[productId];

if (product) {
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-description").textContent =
    product.description;
  document.getElementById("product-price").textContent = product.price;

  // Add features list
  const featuresList = document.getElementById("product-features");
  product.features.forEach((f) => {
    const li = document.createElement("li");
    li.textContent = f;
    featuresList.appendChild(li);
  });

  // Add to cart functionality
  document.getElementById("cart-btn").addEventListener("click", () => {
    alert(`${product.name} added to cart 🛒`);
  });

  document.getElementById("buy-btn").addEventListener("click", () => {
    alert(`Proceeding to buy ${product.name} ⚡`);
  });
} else {
  document.querySelector(".product-page").innerHTML =
    "<h2>Product not found!</h2>";
}
