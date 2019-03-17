import Cart from './Cart';
import mockCustomersDB from './mockDB/customers.json';
import mockProductsDB from './mockDB/products';


describe('Cart test for employees', () => {

  const customerEmployee = mockCustomersDB.find(customer => customer.type === 'EMPLOYEE_CUSTOMER');

  test('Set customer for the cart', () => {
    const cart = new Cart(1);
    cart.addCustomer(customerEmployee.id);
    expect(cart.customer.id).toBe(customerEmployee.id);
  });

  test('check inital cart is empty', () => {
    const cart = new Cart(1);
    cart.addCustomer(customerEmployee.id);
    expect(cart.items.size).toBe(0);
  });

  test('Add one item to cart', () => {
    const cart = new Cart(1);
    cart.addCustomer(customerEmployee.id);
    cart.addItem(mockProductsDB[0].id);
    expect(cart.items.size).toBe(1);
  });

  test('Add duplicate item to cart', () => {
    const cart = new Cart(1);
    cart.addItem(mockProductsDB[0].id);
    cart.addItem(mockProductsDB[0].id);
    expect(cart.items.size).toBe(1);
  });

  test('check final price matches', () => {
    const cart = new Cart(1);
    cart.addCustomer(customerEmployee.id);
    cart.addItem(mockProductsDB[0].id);
    const finalPrice = cart.getFinalPrice();
    const shouldBe = mockProductsDB[0].price - (mockProductsDB[0].price * customerEmployee.discount / 100);
    expect(finalPrice).toBe(shouldBe);
  });

  test('check final price matches for groceries as 0% discount', () => {
    const cart = new Cart(1);
    cart.addCustomer(customerEmployee.id);
    cart.addItem(mockProductsDB[2].id);
    const finalPrice = cart.getFinalPrice();
    const shouldBe = mockProductsDB[2].price;
    expect(finalPrice).toBe(shouldBe);
  });

});