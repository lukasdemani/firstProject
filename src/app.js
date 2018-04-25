var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var router = express.Router();

mongoose.connect('mongodb://demani:demani@ds113826.mlab.com:13826/ndstr');

var Product = require('./models/product');
var Customer = require('./models/customer');
var Order = require('./models/order');
 
app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var index = require('./routes/index');
var product = require('./routes/products');
var customer= require('./routes/customer-route');
var order= require('./routes/order-route');


app.use('/', index);
app.use('/products', product);
app.use('/customers', customer);
app.use('/orders', order);

module.exports = app;