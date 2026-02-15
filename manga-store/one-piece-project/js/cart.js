const products = [
  { id: 1, name: "Poster", price: 199, img: "images/items/poster.jpg" },
  { id: 2, name: "Chain", price: 349, img: "images/items/chain.jpg" },
  { id: 3, name: "Pant", price: 799, img: "images/items/pant.jpg" },
  { id: 4, name: "Shorts", price: 599, img: "images/items/shots.jpg" },
  { id: 5, name: "Bracelet", price: 249, img: "images/items/bracelet.jpg" },
  { id: 6, name: "Keychain", price: 149, img: "images/items/keychain.jpg" },
  { id: 7, name: "Luffy Figure", price: 1499, img: "images/items/luffy-figure.jpg" },
  { id: 8, name: "Ring", price: 299, img: "images/items/ring.jpg" },
  { id: 9, name: "Shoes", price: 1999, img: "images/items/shoes.jpg" },
  { id: 10, name: "Straw Hat", price: 499, img: "images/items/strawhat.jpg" },
  { id: 11, name: "Sword", price: 2999, img: "images/items/sword.jpg" },
  { id: 12, name: "T-Shirt", price: 699, img: "images/items/tshirt.jpg" },
  { id: 13, name: "Vintage Clock", price: 999, img: "images/items/vintageclock.jpg" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ==================== SHOP CAROUSEL (MANUAL SCROLL) ====================
function renderShop() {
  const shop = document.getElementById("shopItems");
  if (!shop) return;

  shop.innerHTML = "";
  
  // Render all products for manual scrolling
  products.forEach(p => {
    shop.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

// ==================== MANGA CAROUSEL (MANUAL SCROLL) ====================
const mangas = [
  { ch: 1, page: 1, title: "Chapter 1" },
  { ch: 1, page: 2, title: "Chapter 2" },
  { ch: 1, page: 3, title: "Chapter 3" }
];

function renderManga() {
  const mangaGrid = document.querySelector(".manga-grid");
  if (!mangaGrid) return;

  mangaGrid.innerHTML = "";
  mangas.forEach(manga => {
    mangaGrid.innerHTML += `
      <div class="manga-card">
        <img src="images/manga/onepiece/ch${manga.ch}/${manga.page}.jpg">
        <div class="manga-info">
          <h3>One Piece</h3>
          <p>${manga.title}</p>
        </div>
      </div>
    `;
  });
}

// ==================== CART FUNCTIONS ====================
// ADD TO CART
function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty++;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// CHANGE QTY
function changeQty(id, type) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  type === "plus" ? item.qty++ : item.qty--;

  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// RENDER CART
function renderCart() {
  const cartBox = document.getElementById("cartItems");
  const totalBox = document.getElementById("total");
  if (!cartBox) return;

  cartBox.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const sum = item.price * item.qty;
    total += sum;

    cartBox.innerHTML += `
      <div class="cart-row">
        <img src="${item.img}">
        <div class="cart-info">
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>

          <div class="qty-box">
            <button onclick="changeQty(${item.id}, 'minus')">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${item.id}, 'plus')">+</button>
          </div>
        </div>

        <div class="item-total">₹${sum}</div>
      </div>
    `;
  });

  totalBox.innerText = "Total: ₹" + total;
}

// ✅ BUY NOW
function buyNow() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Order placed successfully!\n(Frontend demo)");

  cart = [];
  localStorage.removeItem("cart");
  renderCart();
}

renderShop();
renderManga();
renderCart();
