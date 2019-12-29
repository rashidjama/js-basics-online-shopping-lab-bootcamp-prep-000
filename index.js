var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
   let price = Math.floor(Math.random() * 100) + 1;
  cart.push(new Object({[item]: price}));
  
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    var items = "";
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        
        items += `${item} at $ ${cart[i][item]}, and `
      }
    }
    return "In your cart, you have " + items.slice(0, items.length -6) + ".";
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
