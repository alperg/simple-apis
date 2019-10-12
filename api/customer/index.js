const express = require('express');
const router = express.Router();
const customerData = require('./customer.json');
const orderData = require('./order.json');

router.get('/customer', function(req, res) {
  res.json(customerData);
});

router.get("/customer/:id", function(req, res) {
  const id = req.params.id;
  const customer = customerData.filter(function(c) {
    return c.id + '' === id;
  });
  res.json(customer);
});

router.get('/order', function(req, res) {
  res.json(orderData);
});

router.get("/order/:id", function(req, res) {
  const id = req.params.id;
  const order = orderData.filter(function(o) {
    return o.id + '' === id;
  });
  res.json(order);
});

module.exports = router;
