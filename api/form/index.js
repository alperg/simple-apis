const express = require('express');
const router = express.Router();
const formData = require('./form.json')

router.get('/form', function(req, res) {
  res.json(formData);
});

router.get("/form/:formId", function(req, res) {
  const id = req.params.formId;
  const form = formData.filter(function(f) {
    return f.formId === id;
  });
  res.json(form);
});

module.exports = router;
