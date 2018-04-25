var express = require('express');
var router = express.Router();
var customer = require('../controllers/customer-controller');

router.post('/', customer.post);
router.get('/', customer.get);

module.exports = router;