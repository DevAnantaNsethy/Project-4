// Sample product data
const products = [
  {
    id: 1,
    name: "Smartphone",
    category: "electronics",
    price: 499,
    rating: 4.5,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Laptop",
    category: "electronics",
    price: 899,
    rating: 4.7,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "T-Shirt",
    category: "fashion",
    price: 25,
    rating: 4.2,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Sofa",
    category: "home",
    price: 299,
    rating: 4.0,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    name: "Headphones",
    category: "electronics",
    price: 120,
    rating: 4.3,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 6,
    name: "Shoes",
    category: "fashion",
    price: 70,
    rating: 4.6,
    image: "https://via.placeholder.com/200",
  },
];

let cart = [];
const productList = document.getElementById("productList");
const cartCount = document.getElementById("cartCount");

// Render products
function renderProducts(items) {
  if (!productList) return;
  productList.innerHTML = "";
  items.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>$${p.price} | ⭐ ${p.rating}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

// Add to cart
function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  cartCount.textContent = cart.length;
}

// Apply Filters
document.getElementById("applyFilters")?.addEventListener("click", () => {
  let filtered = [...products];

  // Category filter
  const category = document.getElementById("filterCategory").value;
  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  // Price filter
  const min = parseFloat(document.getElementById("minPrice").value) || 0;
  const max = parseFloat(document.getElementById("maxPrice").value) || Infinity;
  filtered = filtered.filter((p) => p.price >= min && p.price <= max);

  // Sorting
  const sortOption = document.getElementById("sortOption").value;
  if (sortOption === "priceLowHigh") filtered.sort((a, b) => a.price - b.price);
  if (sortOption === "priceHighLow") filtered.sort((a, b) => b.price - a.price);
  if (sortOption === "ratingHighLow")
    filtered.sort((a, b) => b.rating - a.rating);

  renderProducts(filtered);
});

// Initial render
renderProducts(products);

// Price Slider Update
const priceSlider = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

if (priceSlider && priceValue) {
  priceValue.textContent = priceSlider.value; // initial value

  priceSlider.addEventListener("input", () => {
    priceValue.textContent = priceSlider.value;
  });
}
