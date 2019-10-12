const customerData = require('../data/customer.json');
const orderData = require('../data/order.json');
const employeeData = require('../data/employee.json');
const formData = require('../data/form.json');
const groceryData = require('../data/grocery.json');

module.exports = function () {
  const filter = function(id, data, filterField = 'id') {
    return data.filter(item => item[filterField] + '' === id);
  };

  return {
    getCustomers: function (req, res) {
      res.json(customerData);
    },
    getCustomerById: function (req, res) {
      res.status(200).json(filter(req.params.id, customerData));
    },
    getOrderByCustomerId: function (req, res) {
      res.status(200).json(filter(req.params.id, orderData, 'customerId'));
    },
    getEmployees: function (req, res) {
      res.json(employeeData);
    },
    getEmployeeById: function (req, res) {
      res.status(200).json(filter(req.params.id, employeeData));
    },
    getForms: function (req, res) {
      res.json(formData);
    },
    getFormById: function (req, res) {
      res.status(200).json(filter(req.params.id, formData, 'formId'));
    },
    getGroceries: function (req, res) {
      res.json(groceryData);
    },
    getGroceryById: function (req, res) {
      res.status(200).json(filter(req.params.id, groceryData));
    }
  };
};
