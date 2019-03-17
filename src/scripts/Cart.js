import getCustomer from './utils/getCustomer';
import { TOTAL_SPEND_DISCOUNT_SUM, TOTAL_SPEND_DISCOUNT_PERCENTAGE } from './constants';
import Product from './Product';
import { printCustomerInfo, printProductInfo, printTotalPrice } from './renderer';

/**
 * Cart <Class>
 * @params id (bill/cart ID) : <Number>
 *
 * This class will initialize the Cart and stores:
 * id of cart/bill
 * customer details
 * products/items
 * final cart/bill price
 *
 */
export default class Cart {
  constructor(id) {
    this.id = id;
    this.customer = null;
    this.items = new Map();
    this.finalPrice = 0;
  }

  /**
   * addCustomer <Function>
   * @params id (customer ID) : <Number>
   *
   * This method initialises the customer details using the customer id
   * prints/renders the added initialized customer to UI/html page
   *
   */
  addCustomer(id) {
    this.customer = getCustomer({ id });
    printCustomerInfo({ customer: this.customer, billId: this.id });
  }

  /**
   * addItem <Function>
   * @params id (product ID) : <Number>
   * @returns finalPrice : <Number>
   *
   * This method gets the details of the product using the product id
   * calculated the discount based on the customer and product category
   * adds the product/item to cart
   * prints the product info to UI/html page
   *
   */
  addItem(id) {
    if(this.items.has(id)) {
      console.error('Only unique items can be added');
      return
    }
    const product = new Product(id);
    const {name, price, category, getDiscountAmount } = product;
    const discount = this.customer ? this.customer.getDiscountPercentage() : 0;
    const discountedPrice = getDiscountAmount({
      discount,
      price: price,
      category,
    });
    this.items.set(id, {
      id,
      name,
      price,
      discountedPrice,
    });

    printProductInfo({ name, price, discount, category, discountedPrice });

    return this.getFinalPrice();
  }

  /**
   * getFinalPrice <Function>
   * @returns finalPrice : <Number>
   *
   * This method iterates through the cart items
   * calculated the discount based on the total sum amount
   * prints the total price info to UI/html page
   *
   */
  getFinalPrice() {
    this.finalPrice = 0;
    this.items.forEach((item) => {
      this.finalPrice += item.discountedPrice;
    });
    const discountedPrice = Math.floor(this.finalPrice/TOTAL_SPEND_DISCOUNT_SUM) * TOTAL_SPEND_DISCOUNT_PERCENTAGE
    this.finalPrice -= discountedPrice;
    printTotalPrice({ finalPrice: this.finalPrice, discountedPrice, count: this.items.size });
    return this.finalPrice;
  }
}