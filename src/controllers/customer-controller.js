var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
//var ValidationContract = require ('../validators/validator');
var repository = require('../repositories/customer-repository');

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
	/*var contract = new ValidationContract();
	contract.hasMinLen(req.body.name, 3, 'O título de ter 3 caracteres');
	contract.hasMinLen(req.body.email, 3, 'O slug de ter 3 caracteres');
	contract.hasMinLen(req.body.password, 3, 'A descrição de ter 3 caracteres');

	if (!contract.isValid()) {
		res.status(400).send(contract.errors()).end();
		return;
	}
*/
	repository
		.create(req.body)
		.then(x => {
			res.status(201).send({
				message: 'Cliente cadastrado com sucesso'})
		}).catch(e => {
			res.status(400).send({
				message: 'Falha ao cadastra o produto ',
				data: e
			});
		});
};