// In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(!shoppingCart.includes("meat")){
     shoppingCart.unshift("meat")
     console.log(" added to cart");
}
else
console.log("already added item");

console.log("new cart: ",shoppingCart);