import $ from 'jquery';

/**
 * printCustomerInfo <Function>
 * @params customer : <Object>
 * @params billId : <String>
 *
 * This method created DOM template using the customer details and billId
 * Prints/renders the customer info to UI/html page
 *
 */
export const printCustomerInfo = ({ customer, billId }) => {
  if (process.env.NODE_ENV === 'test') return;
  const customerTemplate = `
    <div class='customer__row'>
      <span class='customer__row__label'>Bill No: </span>
      <span class='customer-info__row__value'>${billId}</span>
    </div>
    <div class='customer__row'>
      <span class='customer__row__label'>Customer Name: </span>
      <span class='customer__row__value'>${customer.name}</span>
    </div>
  `;
  document.getElementById('customer-info').innerHTML = customerTemplate;
};

/**
 * printProductInfo <Function>
 * @params name : <String>
 * @params price : <Number>
 * @params discount : <Number>
 * @params category : <String>
 * @params discountedPrice : <Number>
 *
 * This method created DOM template using the product details
 * Prints/renders the product info to UI/html page
 *
 */
export const printProductInfo = ({ name, price, discount, category, discountedPrice }) => {
  if (process.env.NODE_ENV === 'test') return;
  const productTemplate = `
    <tr>
      <td>${name}</td>
      <td>${price}<span>$</span></td>
      <td>${category !== 'GROCERIES' ? discount : '0'}%</td>
      <td>${discountedPrice}<span>$</span></td>
    </tr>  
  `;
  $('#items-info').append(productTemplate);
};

/**
 * printTotalPrice <Function>
 * @params finalPrice : <Number>
 * @params discountedPrice : <Number>
 * @params count : <Number>
 *
 * This method created DOM template for total price of cart
 * Prints/renders the total price info to UI/html page
 *
 */
export const printTotalPrice = ({ finalPrice, discountedPrice, count }) => {
  if (process.env.NODE_ENV === 'test') return;
  const totalPriceTemplate = `
    <tr id='total-info'>
      <td>${finalPrice + discountedPrice}<span>$</span></td>
      <td>${count}</td>
      <td>${discountedPrice}<span>$</span></td>
      <td><b>${finalPrice}</b><span>$</span></td>
    </tr>
  `;
  $('#total-info').replaceWith(totalPriceTemplate);
};