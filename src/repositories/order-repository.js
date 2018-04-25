var mongoose = require('mongoose');
var Order = mongoose.model('Order');


exports.get = () => {
	return Order
		.find();
}

exports.create = (data) => {
	var order = new Order(data);
	return order.save();
}