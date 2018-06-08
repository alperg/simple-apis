const express = require('express');
const router = express.Router();

const formData = [
  {
    formId: '1',
    formName: 'Personal Information Form',
    formTitle: 'Please submit your information:',
    formFields: [
      {
        label: 'First Name',
        name: 'firstName',
        type: 'text'
      },
      {
        label: 'Last Name',
        name: 'lastName',
        type: 'text'
      },
      {
        label: 'Age',
        name: 'age',
        type: 'number'
      },
      {
        label: 'Short Biography',
        name: 'bio',
        type: 'textarea'
      }
    ],
    formSubmitUrl: 'https://example.com/'
  },
  {
    formId: '2',
    formName: 'Favorite Animal Form',
    formTitle: "What is your favorite animal?",
    formFields: [
      {
        label: 'Animal Name',
        name: 'animal',
        type: 'text'
      }
    ],
    formSubmitUrl: "https://example.com/"
  },
  {
    formId: '3',
    formName: 'Car Mechanic Form',
    formTitle: "Please answer these questions:",
    formFields: [
      {
        label: 'Year/make/model',
        name: 'car',
        type: 'text'
      },
      {
        label: 'Your complaint',
        name: 'complaint',
        type: 'textarea'
      }
    ],
    formSubmitUrl: "https://example.com/"
  }
];

router.get('/forms', function(req, res) {
  res.json(formData);
});

router.get("/forms/:formId", function(req, res) {
  const id = req.params.formId;
  const form = formData.filter(function(f) {
    return f.formId === id;
  });
  res.json(form);
});

module.exports = router;
