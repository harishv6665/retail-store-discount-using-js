import productsDB from './mockDB/products';

/**
 * Product <Class>
 * @params id: <Number>
 *
 * Product class will get the product details using the product id
 * This class will initialize the Product and stores:
 * id of product
 * name of product
 * category of product
 * price of product
 *
 */
export default class Product {
  constructor(id) {
    const P = productsDB.find(product => product.id === id);
    this.id = P.id;
    this.name = P.name;
    this.category = P.category;
    this.price = P.price;
  }

  /**
   * getDiscountAmount <Function>
   * @params discount : <Number>
   * @params category : <String>
   * @params price : <Number>
   * @returns discountedPrice : <Number>
   *
   * This method will calculate discounted price of the product based on the category
   *
   */
  getDiscountAmount({ discount, category, price }) {
    let productDiscount = discount;
    if(category === 'GROCERIES') {
      productDiscount = 0;
    }
    return price - ((price / 100) * productDiscount);
  }
}