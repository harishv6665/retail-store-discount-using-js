import { EmployeeCustomer, AffiliatedCustomer, PatronCustomer, RegularCustomer } from './../Customer';
import customersDB from './../mockDB/customers';

/**
 * getCustomer <Function>
 * @params id : <Number>
 * @returns customer : <Object>
 *
 * This method takes the id of the customer
 * finds the customer type using the provided id
 * creates the customer based on the type
 *
 */
const getCustomer = ({ id }) => {
  const customer = customersDB.find(customer => customer.id === id);
  const { name, type } = customer;
  switch (type) {
    case 'EMPLOYEE_CUSTOMER':
      return new EmployeeCustomer({id, name, type: 'EMPLOYEE_CUSTOMER'});
    case 'AFFILIATE_CUSTOMER':
      return new AffiliatedCustomer({id, name, type: 'AFFILIATE_CUSTOMER'});
    case 'PATRON_CUSTOMER':
      return new PatronCustomer({id, name, type: 'PATRON_CUSTOMER'});
    default:
      return new RegularCustomer({id, name, type: 'REGULAR_CUSTOMER'});
  }
};

export default getCustomer;