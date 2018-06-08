const express = require('express');
const router = express.Router();

const groceryData = [
  {
    id: 1,
    name: 'Apples',
    isFood: true
  },
  {
    id: 2,
    name: 'Shampoo',
    isFood: false
  },
  {
    id: 3,
    name: 'Milk',
    isFood: true
  },
  {
    id: 4,
    name: 'Cereal',
    isFood: true
  },
  {
    id: 5,
    name: 'Soda',
    isFood: true
  },
  {
    id: 6,
    name: 'Toilet paper',
    isFood: false
  }
];

router.get('/grocery', function(req, res) {
  res.json(groceryData);
});

router.get("/grocery/:id", function(req, res) {
  const id = req.params.id;
  const grocery = groceryData.filter(function(g) {
    return g.id + '' === id;
  });
  res.json(grocery);
});

module.exports = router;
