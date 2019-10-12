const express = require('express');
const router = express.Router();
const employeeData = require('./employee.json');

router.get('/employee', function(req, res) {
  res.json(employeeData);
});

router.get("/employee/:id", function(req, res) {
  const id = req.params.id;
  const employee = employeeData.filter(function(e) {
    return e.id + '' === id;
  });
  res.json(employee);
});

module.exports = router;
