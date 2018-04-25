var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var ValidationContract = require ('../validators/validator');
var repository = require('../repositories/order-repository');

exports.get = (req, res,next) => {
	repository
		.get()
		.then(data => {
			res.status(200).send(data);
		}).catch(e => {
			res.status(400).send(e);
		});
}

exports.post = (req, res, next) => {
	repository
		.create(req.body)
		.then(x => {
			res.status(201).send({
				message: 'Produto cadastrado com sucesso'})
		}).catch(e => {
			res.status(400).send({
				message: 'Falha ao cadastra o produto ',
				data: e
			});
		});
};