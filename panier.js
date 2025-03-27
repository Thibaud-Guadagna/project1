const products = [
	{ name: "Salade César", price: 7, quantity: 1 },
	{ name: "Salade Méditérranéenne", price: 6.5, quantity: 1 },
	{ name: "Kebab", price: 8.5, quantity: 1 },
	{ name: "Pizza Margherita", price: 9.5, quantity: 1 },
	{ name: "Pizza 4 fromages", price: 10.9, quantity: 1 },
	{ name: "Pizza Veggie", price: 9.9, quantity: 1 },
	{ name: "Cheeseburger", price: 8.9, quantity: 1 },
	{ name: "Bacon Burger", price: 9.5, quantity: 1 },
	{ name: "Vegan Burger", price: 9.9, quantity: 1 },
	{ name: "Panini Jambon-Fromage", price: 6.5, quantity: 1 },
	{ name: "Panini Poulet Pesto", price: 7.5, quantity: 1 },
	{ name: "Panini Chèvre-Miel", price: 7.9, quantity: 1 },
	{ name: "Panini Pepperoni", price: 7.5, quantity: 1 },
	{ name: "Panini Légumes Grillés", price: 7.9, quantity: 1 },
	{ name: "Tiramisu Maison", price: 5.5, quantity: 1 },
	{ name: "Compote de Pommes & Cannelle", price: 3.9, quantity: 1 },
	{ name: "Salade de Fruits Frais", price: 4.5, quantity: 1 },
	{ name: "Eau minérale", price: 1.5, quantity: 1 },
	{ name: "Soda", price: 2.5, quantity: 1 },
	{ name: "Thé glacé maison", price: 3.5, quantity: 1 },
	{ name: "Smoothie", price: 4, quantity: 1 },
];

const productsHTML = products.map(
	(product) => `<div class="product-card">
          <h2 class="product-name">${product.name}</h2>
          <strong>$${product.price}</strong>
          <button class="product-btn" id=${product.id}>Add to Cart</button>
      </div>`,
);

//Adding Products to Cart
function updateCart() {
	const cartHTML = cart.map(
		(item) => `<div class="cart-item">
              <h3>${item.name}</h3>
              <div class="cart-detail"><div class="mid">
                  <button onclick={decrItem(${item.id})}>-</button>
                  <p>${item.quantity}</p>
                  <button onclick={incrItem(${item.id})}>+</button>
              </div>
              <p>$${item.price}</p>
              <button onclick={deleteItem(${item.id})} class="cart-product" id=${item.id}>D</button></div>
             </div>`,
	);

	const cartItems = document.querySelector(".cart-items");
	cartItems.innerHTML = cartHTML.join("");
}

updateCart();

//Adding items to cart
let num = document.querySelectorAll(".product-btn").length;
for (let i = 0; i < num; i++) {
	document
		.querySelectorAll(".product-btn")
		[i].addEventListener("click", function (e) {
			addToCart(products, parseInt(e.target.id));
		});
}

function addToCart(products, id) {
	const product = products.find((product) => product.id === id);
	cart.unshift(product);
	updateCart();
}

//Calculating Total items and Total cart value
function getTotal(cart) {
	let { totalItem, cartTotal } = cart.reduce(
		(total, cartItem) => {
			total.cartTotal += cartItem.price * cartItem.quantity;
			total.totalItem += cartItem.quantity;
			return total;
		},
		{ totalItem: 0, cartTotal: 0 },
	);
	const totalItemsHTML = document.querySelector(".noOfItems");
	totalItemsHTML.innerHTML = `${totalItem} items`;
	const totalAmountHTML = document.querySelector(".total");
	totalAmountHTML.innerHTML = `$${cartTotal}`;
}

//Increasing and Decreasing quantity of cart items
function incrItem(id) {
	for (let i = 0; i < cart.length; i++) {
		if (cart[i] && cart[i].id == id) {
			cart[i].quantity += 1;
		}
	}
	updateCart();
	getTotal(cart);
}

//!! Bug alert
function addToCart(products, id) {
	const product = products.find((product) => product.id === id);
	const cartProduct = cart.find((product) => product.id === id);
	if (cartProduct != undefined && product.id == cartProduct.id) {
		incrItem(id);
	} else {
		cart.unshift(product);
	}
	updateCart();
	getTotal(cart);
}

//Decreasing quantity of items
function decrItem(id) {
	for (let i = 0; i < cart.length; i++) {
		if (cart[i].id == id && cart[i].quantity > 1) {
			cart[i].quantity -= 1;
		}
	}
	updateCart();
	getTotal(cart);
}

//Deleting Items from cart
function deleteItem(id) {
	for (let i = 0; i < cart.length; i++) {
		if (cart[i].id === id) {
			cart[i].quantity = 1;
			cart.splice(i, 1);
		}
	}
	updateCart();
	getTotal(cart);
}
