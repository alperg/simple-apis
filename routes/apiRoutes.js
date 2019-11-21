const router = require('express').Router();
const apiController = require('../controllers/apiController')();

router.get('/employees', apiController.getEmployees);
router.get("/employees/:id", apiController.getEmployeeById);

router.get('/forms', apiController.getForms);
router.get("/forms/:id", apiController.getFormById);

router.get('/groceries', apiController.getGroceries);
router.get("/groceries/:id", apiController.getGroceryById);

router.get('/customers', apiController.getCustomers);
router.get("/customers/:id", apiController.getCustomerById);
router.get('/customers/:id/order', apiController.getOrderByCustomerId);

module.exports = router;
