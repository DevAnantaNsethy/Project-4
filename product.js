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
// Example product data
const products = {
  1: {
    name: "Noise Twist Round Dial Smart Watch",
    image: "./image/a-1.avif",
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
    name: "Noise ColorFit Pulse 3",
    image: "./image/a-2.avif",
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
  3: {
    name: "boAt New Launch Storm Infinity Max",
    image: "./image/a-3.avif",
    description: "Smart-watch with 2.01'' Display, 20 Days Battery",
    price: "1699",
    features: [
      "20 Days Maximum Battery, Biggest Battery Capacity Ever! 2.01' (5.1cm) Display, Functional Crown, AI Nudges, BT Calling, Smart Watch for Men & Women (Sky Blue)",
    ],
  },
  4: {
    name: "Noise ColorFit Ultra 3",
    image: "./image/a-4.avif",
    description:
      "1.85'' HD Display, 100+ Watch Faces, 150+ Sports Modes, SpO2 & Heart Rate Monitor, 7 Days Battery, IP68 Water Resistant",
    price: "2599",
    features: [
      "Activity Tracker, Calorie Tracker, Heart Rate Monitor, Notifications, Oxymeter (SpO2)",
    ],
  },
  5: {
    name: "Logitech Mouse",
    image: "./image/b-1.jpg",
    description: "Wireless, 6D Motion Tracking, 7 Buttons, 2.4 GHz, 3.5mm Plug",
    price: "2595",
    features: ["Wireless, 6D Motion Tracking, 7 Buttons, 2.4 GHz, 3.5mm Plug"],
  },
  6: {
    name: "Safari Omega Spacious/Large 5 Compartment Laptop Backpack With Raincover",
    image: "./image/b-2.jpg",
    description: "College Bag, Travel Bag",
    price: "6999",
    features: [
      "Safari Omega Spacious/Large 5 Compartment Laptop Backpack With Raincover, College Bag, Travel Bag For Unisex, Navy Blue, 30 Litre",
    ],
  },
  7: {
    name: "SOFTSPUN Microfiber Super Absorbent Small Wipes",
    image: "./image/b-3.jpg",
    description: "Smal Wipes",
    price: "299",
    features: [
      "500 GSM 20X30 Cms 5 Pieces Grey! Silk Banded Edge Towel Set Extra Thick Microfiber Cleaning Cloths Perfect for Bike",
    ],
  },
  8: {
    name: "WildHorn RFID Protected Leather Wallet for Men ",
    image: "./image/b-4.jpg",
    description: "Wallet fro meen",
    price: "398",
    features: [
      "WildHorn RFID Protected Leather Wallet for Men I 2 Currency Compartment I 6 Card Slots I 1 Coin Pocket (Maroon)",
    ],
  },
  10: {
    name: "Noise Twist Round dial Smart Watch",
    image: "./image/w-2.avif",
    description: "Bluetooth Calling, 1.38",
    price: "1399",
    features: [
      "Bluetooth Calling, 1.38' TFT Display, up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate Monitor, Sleep Tracking (Jet Black",
    ],
  },
  9: {
    name: "Noise ColorFit Pulse 4 Max Smartwatch",
    image: "./image/w-1.avif",
    description: "Noise ColorFit Pulse 4 Max Smartwatch",
    price: "2599",
    features: ["Noise ColorFit Pulse 4 Max Smartwatch"],
  },
  11: {
    name: "Noise New Macro Smart Watch ",
    image: "./image/w-3.avif",
    description: "Smart-watch",
    price: "1999",
    features: [
      "Noise New Macro Smart Watch with 2.0” HD Display,Metallic Finish BT Calling, Functional Crown, 7 Days Battery Life, Sleep Tracking, 200+ Watch Faces (Elite Black)",
    ],
  },
  12: {
    name: "Noise Quad Call",
    image: "./image/w-4.avif",
    description: "1.81' Display, Bluetooth Calling Smart Watch",
    price: "1599",
    features: [
      "Noise Quad Call 1.81' Display, Bluetooth Calling Smart Watch, AI Voice Assistance, 160+Hrs Battery Life, Metallic Build, in-Built Games, 100 Sports Modes, 100+ Watch Faces (Elite Black)",
    ],
  },
  13: {
    name: "ASIAN Men Lace Up Running Shoes",
    image: "./image/shoe-1.jpg",
    description: "ASIAN Men Lace Up Running Shoes",
    price: "674",
    features: ["ASIAN Men Lace Up Running Shoes"],
  },
  14: {
    name: "BRUTON EVA Lite Sport Shoes",
    image: "./image/shoe-2.jpg",
    description: "Running Shoe",
    price: "498",
    features: ["Running Shoes for Men- Grey"],
  },
  15: {
    name: "BRUTON Men's EVA Lite Sports",
    image: "./image/shoe-3.jpg",
    description: "Running/walking/gym Shoe",
    price: "549",
    features: ["Lightweight, Durable, Comfortable, Stylish Design"],
  },
  16: {
    name: "ADI Men's Comfortable Lightweight Synthetic Leather Running, Walking & Gym Casual Sports Shoes",
    image: "./image/shoe-4.jpg",
    description:
      "ADI Men's Comfortable Lightweight Synthetic Leather Running, Walking & Gym Casual Sports Shoes",
    price: "498",
    features: [
      "ADI Men's Comfortable Lightweight Synthetic Leather Running, Walking & Gym Casual Sports Shoes",
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
  document.getElementById("product-description").textContent = product.description;
  document.getElementById("product-price").textContent = product.price;

  // Add features list
  const featuresList = document.getElementById("product-features");
  product.features.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    featuresList.appendChild(li);
  });

  // Add to cart functionality
  document.getElementById("cart-btn").addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart 🛒`);
    window.location.href = "orders.html"; // Redirect to orders page
  });

  document.getElementById("buy-btn").addEventListener("click", () => {
    alert(`Proceeding to buy ${product.name} ⚡`);
  });

} else {
  document.querySelector(".product-page").innerHTML = "<h2>Product not found!</h2>";
}
