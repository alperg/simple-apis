const router = require('express').Router();
const apiController = require('../controllers/apiController')();

router.get('/employee', apiController.getEmployees);
router.get("/employee/:id", apiController.getEmployeeById);

router.get('/form', apiController.getForms);
router.get("/form/:id", apiController.getFormById);

router.get('/grocery', apiController.getGroceries);
router.get("/grocery/:id", apiController.getGroceryById);

router.get('/customer', apiController.getCustomers);
router.get("/customer/:id", apiController.getCustomerById);
router.get('/customer/:id/order', apiController.getOrderByCustomerId);

module.exports = router;
