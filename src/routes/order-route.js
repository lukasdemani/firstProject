var express = require('express');
var router = express.Router();
var order = require('../controllers/order-controller');

router.post('/', order.post);
router.get('/', order.get);

module.exports = router;