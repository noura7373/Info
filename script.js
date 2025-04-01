let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let cartCount = document.getElementById("cart-count");
    let totalElement = document.getElementById("total-price");

    cartList.innerHTML = "";
    cartCount.innerText = cart.length;
    totalElement.innerText = totalPrice;

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - ${item.price}€ <button onclick="removeFromCart(${index})">❌</button>`;
        cartList.appendChild(li);
    });
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}
