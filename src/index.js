import Cart from './scripts/Cart';

// Initialize cart
let cart = new Cart(1);

// Add customer to cart
// 'u1' => user ID: Refer to customerDB in '/src/scripts/mockDB/customers.json'
cart.addCustomer('u1');

// Add products to cart
// 'p1', 'p2', 'p3' => product ID: Refer to productsDB in '/src/scripts/mockDB/products.json'
cart.addItem('p1');
cart.addItem('p2');
cart.addItem('p3');