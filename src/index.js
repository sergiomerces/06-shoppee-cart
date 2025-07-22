import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log('Welcome to your Shoppee cart!');

const item1 = await createItem('Hotwheels Ferrari', 20.99, 7);
const item2 = await createItem('Hotwheels Lamborghini', 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

console.log('Shoppee Cart TOTAL is: ')
await cartService.calculateTotal(myCart);