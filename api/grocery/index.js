const express = require('express');
const router = express.Router();
const groceryData = require('./grocery.json');

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
