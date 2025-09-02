// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Find product
const product = products[productId];

// If product exists, load data
if (product) {
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = product.price;
  document.getElementById("product-description").textContent =
    product.description;
} else {
  document.body.innerHTML = "<h2>Product not found</h2>";
}
