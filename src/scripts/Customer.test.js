import { EmployeeCustomer, AffiliatedCustomer, PatronCustomer, RegularCustomer } from './Customer';
import mockCustomersDB from './mockDB/customers.json';

describe('Employee customer test case', () => {

  // EmployeeCustomer
  test('create employee customer and check for return data', () => {
    const employeeCustomer = mockCustomersDB.find(customer => customer.type === 'EMPLOYEE_CUSTOMER');
    const { id, name, type } = employeeCustomer;
    const customer = new EmployeeCustomer({ id, name, type });
    expect(customer.id).toBe(employeeCustomer.id);
    expect(customer.name).toBe(employeeCustomer.name);
    expect(customer.discount).toBe(employeeCustomer.discount);
  });

  // AffiliatedCustomer
  test('create affiliated customer and check for return data', () => {
    const affiliatedCustomer = mockCustomersDB.find(customer => customer.type === 'AFFILIATE_CUSTOMER');
    const { id, name, type } = affiliatedCustomer;
    const customer = new AffiliatedCustomer({ id, name, type });
    expect(customer.id).toBe(affiliatedCustomer.id);
    expect(customer.name).toBe(affiliatedCustomer.name);
    expect(customer.discount).toBe(affiliatedCustomer.discount);
  });

  // PatronCustomer
  test('create patron customer and check for return data', () => {
    const patronCustomer = mockCustomersDB.find(customer => customer.type === 'PATRON_CUSTOMER');
    const { id, name, type } = patronCustomer;
    const customer = new PatronCustomer({ id, name, type });
    expect(customer.id).toBe(patronCustomer.id);
    expect(customer.name).toBe(patronCustomer.name);
    expect(customer.discount).toBe(patronCustomer.discount);
  });

  // RegularCustomer
  test('create regular customer and check for return data', () => {
    const regularCustomer = mockCustomersDB.find(customer => customer.type === 'REGULAR_CUSTOMER');
    const { id, name, type } = regularCustomer;
    const customer = new RegularCustomer({ id, name, type });
    expect(customer.id).toBe(regularCustomer.id);
    expect(customer.name).toBe(regularCustomer.name);
    expect(customer.discount).toBe(regularCustomer.discount);
  });

});