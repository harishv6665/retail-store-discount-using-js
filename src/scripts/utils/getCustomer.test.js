import getCustomer from './getCustomer';
import mockCustomersDB from './../mockDB/customers.json';

describe('Get Customer util function test cases', () => {

  test('get customer and check for id', () => {
    const customer = mockCustomersDB[0];
    const employeeCustomer = getCustomer({ id: customer.id });
    expect(customer.id).toBe(employeeCustomer.id);
  });

  test('get customer and check for id', () => {
    const customer = mockCustomersDB[1];
    const employeeCustomer = getCustomer({ id: customer.id });
    expect(customer.id).toBe(employeeCustomer.id);
  });

  test('get customer and check for id', () => {
    const customer = mockCustomersDB[2];
    const employeeCustomer = getCustomer({ id: customer.id });
    expect(customer.id).toBe(employeeCustomer.id);
  });

  test('get customer and check for id', () => {
    const customer = mockCustomersDB[3];
    const employeeCustomer = getCustomer({ id: customer.id });
    expect(customer.id).toBe(employeeCustomer.id);
  });

});