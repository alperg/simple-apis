const express = require('express');
const router = express.Router();

const customerData = [
  {
    "id": 1,
    "firstName": "Ted",
    "lastName": "James",
    "gender": "male",
    "address": "1234 Anywhere St.",
    "city": "Phoenix",
    "state": {
        "abbreviation": "AZ",
        "name": "Arizona"
    },
    "orderTotal": 40.99
  },
  {
    "id": 2,
    "firstName": "Michelle",
    "lastName": "Thompson",
    "gender": "female",
    "address": "345 Cedar Point Ave.",
    "city": "Los Angeles",
    "state": {
        "abbreviation": "CA",
        "name": "California"
    },
    "orderTotal": 89.99
  },
  {
    "id": 3,
    "firstName": "Zel",
    "lastName": "Stanfel",
    "gender": "male",
    "address": "1822 Long Bay Dr.",
    "city": "Las Vegas",
    "state": {
        "abbreviation": "NV",
        "name": "Nevada"
    },
    "orderTotal": 29.99
  },
  {
    "id": 4,
    "firstName": "Tina",
    "lastName": "Adams",
    "gender": "female",
    "address": "79455 Pinetop Way",
    "city": "Seattle",
    "state": {
        "abbreviation": "WA",
        "name": " Washington "
    },
    "orderTotal": 15.99
  },
  {
    "id": 5,
    "firstName": "Stephan",
    "lastName": "Ackers",
    "gender": "male",
    "address": "576 Crescent Blvd.",
    "city": "Chandler",
    "state": {
        "abbreviation": "AZ",
        "name": "Arizona"
    },
    "orderTotal": 29.99
  },
  {
    "id": 6,
    "firstName": "Brad",
    "lastName": "Green",
    "gender": "male",
    "address": "9874 Center St.",
    "city": "Mountain View ",
    "state": {
        "abbreviation": "CA",
        "name": "California"
    },
    "orderTotal": 49.99
  },
  {
    "id": 7,
    "firstName": "Guillermo",
    "lastName": "Hoskins",
    "gender": "male",
    "address": "9812 Builtway Appt #1",
    "city": "Mountain View",
    "state": {
        "abbreviation": "CA",
        "name": "California"
    },
    "orderTotal": 19.99
  },
  {
    "id": 8,
    "firstName": "Emily",
    "lastName": "Capps",
    "gender": "female",
    "address": "4651 Tuvo St.",
    "city": "Chandler",
    "state": {
        "abbreviation": "AZ",
        "name": "Arizona"
    },
    "orderTotal": 9.99
  },
  {
    "id": 9,
    "firstName": "John",
    "lastName": "Smith",
    "gender": "male",
    "address": "66 Ray St.",
    "city": "Orlando",
    "state": {
        "abbreviation": "FL",
        "name": "Florida"
    },
    "orderTotal": 149.99
  },
  {
    "id": 10,
    "firstName": "Tonya",
    "lastName": "Smith",
    "gender": "female",
    "address": "1455 Chandler Blvd.",
    "city": "Atlanta",
    "state": {
        "abbreviation": "GA",
        "name": "Georgia"
    },
    "orderTotal": 299.99
  },
  {
    "id": 11,
    "firstName": "Zach",
    "lastName": "Caspin",
    "gender": "male",
    "address": "888 Central St.",
    "city": "San Francisco",
    "state": {
        "abbreviation": "CA",
        "name": "California"
    },
    "orderTotal": 29.98
  }
];

const orderData = [
  {
    "customerId": 1,
    "orderItems": [
        {"id": 1, "productName": "Baseball", "itemCost": 9.99},
        {"id": 2, "productName": "Bat", "itemCost": 19.99}
    ]
  },
  {
    "customerId": 2,
    "orderItems": [
        {"id": 3, "productName": "Basketball", "itemCost": 7.99},
        {"id": 4, "productName": "Shoes", "itemCost": 199.99}
    ]
  },
  {
    "customerId": 3,
    "orderItems": [
        {"id": 5, "productName": "Frisbee", "itemCost": 2.99},
        {"id": 6, "productName": "Hat", "itemCost": 5.99}
    ]
  },
  {
    "customerId": 4,
    "orderItems": [
        {"id": 7, "productName": "Boomerang", "itemCost": 29.99},
        {"id": 8, "productName": "Helmet", "itemCost": 19.99},
        {"id": 9, "productName": "Kangaroo Saddle", "itemCost": 179.99}
    ]
  },
  {
    "customerId": 5,
    "orderItems": [
        {"id": 10, "productName": "Budgie Smugglers", "itemCost": 19.99},
        {"id": 11, "productName": "Swimming Cap", "itemCost": 5.49}
    ]
  },
  {
    "customerId": 6,
    "orderItems": [
        {"id": 12, "productName": "Bow", "itemCost": 399.99},
        {"id": 13, "productName": "Arrows", "itemCost": 69.99}
    ]
  },
  {
    "customerId": 7,
    "orderItems": [
        {"id": 14, "productName": "Baseball", "itemCost": 9.99},
        {"id": 15, "productName": "Bat", "itemCost": 19.99}
    ]
  },
  {
    "customerId": 8,
    "orderItems": [
        {"id": 16, "productName": "Surfboard", "itemCost": 299.99},
        {"id": 17, "productName": "Wax", "itemCost": 5.99},
        {"id": 18, "productName": "Shark Repellent", "itemCost": 15.99}
    ]
  },
  {
    "customerId": 9,
    "orderItems": [
        {"id": 19, "productName": "Saddle", "itemCost": 599.99},
        {"id": 20, "productName": "Riding cap", "itemCost": 79.99}
    ]
  },
  {
    "customerId": 10,
    "orderItems": [
        {"id": 21, "productName": "Baseball", "itemCost": 9.99},
        {"id": 22, "productName": "Bat", "itemCost": 19.99}
    ]
  }
];

router.get('/customers', function(req, res) {
  res.json(customerData);
});

router.get('/orders', function(req, res) {
  res.json(orderData);
});

module.exports = router;
