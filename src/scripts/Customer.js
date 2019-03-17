import customerTypeDB from './mockDB/customerType';

/**
 * Customer <Class>
 * @params id <Number>, name <String>, type <String>, discount <Number>
 *
 * This class will initialize the base Customer and stores:
 * id of customer
 * name of customer
 * type of customer
 * discount offered for the customer
 *
 */
class Customer {
  constructor({id, name, type, discount}) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.discount = discount;
  }

  /**
   * getDiscountPercentage <Function>
   * @returns discount : <Number>
   *
   */
  getDiscountPercentage() {
    return this.discount;
  }
}

/**
 * EmployeeCustomer <Class>
 * @params id <Number>, name <String>, type <String>
 *
 * The EmployeeCustomer class extends Customer class
 * EmployeeCustomer will initialize the Employee customer
 *
 */
export class EmployeeCustomer  extends Customer {
  constructor({id, name, type}) {
    const customerType = customerTypeDB[type].title;
    const discount = customerTypeDB[type].discount;
    super({id, name, type: customerType, discount});
  }
}

/**
 * AffiliatedCustomer <Class>
 * @params id <Number>, name <String>, type <String>
 *
 * The AffiliatedCustomer class extends Affiliated class
 * AffiliatedCustomer will initialize the Affiliated customer
 *
 */
export class AffiliatedCustomer extends Customer {
  constructor({id, name, type}) {
    const customerType = customerTypeDB[type].title;
    const discount = customerTypeDB[type].discount;
    super({id, name, type: customerType, discount});
  }
}

/**
 * PatronCustomer <Class>
 * @params id <Number>, name <String>, type <String>
 *
 * The PatronCustomer class extends Patron class
 * PatronCustomer will initialize the Patron customer
 *
 */
export class PatronCustomer extends Customer {
  constructor({id, name, type}) {
    const customerType = customerTypeDB[type].title;
    const discount = customerTypeDB[type].discount;
    super({id, name, type: customerType, discount});
  }
}

/**
 * RegularCustomer <Class>
 * @params id <Number>, name <String>, type <String>
 *
 * The RegularCustomer class extends Regular class
 * RegularCustomer will initialize the Regular customer
 *
 */
export class RegularCustomer extends Customer {
  constructor({id, name, type}) {
    const customerType = customerTypeDB[type].title;
    const discount = customerTypeDB[type].discount;
    super({id, name, type: customerType, discount});
  }
}
