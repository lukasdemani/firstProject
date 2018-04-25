var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

exports.get = () => {
	return Customer
		.find();
}

exports.create = (data) => {
	var customer = new Customer(data);
	return customer.save();
}