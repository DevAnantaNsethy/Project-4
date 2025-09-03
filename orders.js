const cartItemsContainer = document.getElementById("cart-items");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty 🛒</p>";
    document.getElementById("total-price").textContent = "";
    return;
  }

  cart.forEach((item, index) => {
    total += parseInt(item.price.replace(/[₹,]/g, ""));

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <strong>${item.price}</strong>
      </div>
      <button onclick="removeItem(${index})">Remove</button>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  document.getElementById("total-price").textContent = `Total: ₹${total}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

document.getElementById("checkout-btn").addEventListener("click", () => {
  alert("Proceeding to checkout...");
});

document.getElementById("clear-cart-btn").addEventListener("click", () => {
  localStorage.removeItem("cart");
  cart = [];
  renderCart();
});

renderCart();
