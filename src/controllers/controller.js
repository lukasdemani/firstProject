var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var ValidationContract = require ('../validators/validator');
var repository = require('../repositories/product-repository');

exports.get = (req, res,next) => {
	repository
		.get()
		.then(data => {
			res.status(200).send(data);
		}).catch(e => {
			res.status(400).send(e);
		});
}

exports.getBySlug = (req, res,next) => {
	repository
		.get(req.params.slug)
		.then(data => {
			res.status(200).send(data);
		}).catch(e => {
			res.status(400).send(e);
		});
}

exports.getById = (req, res,next) => {
	repository
		.get(req.params.id)
		.then(data => {
			res.status(200).send(data);
		}).catch(e => {
			res.status(400).send(e);
		});
}

exports.getByTag = (req, res, next) => {
	repository
		.get(req.params.tag)
		.then(data => {
			res.status(200).send(data);
		}).catch(e => {
			res.status(400).send(e);
		});
}

exports.post = (req, res, next) => {
	var contract = new ValidationContract();
	contract.hasMinLen(req.body.title, 3, 'O título de ter 3 caracteres');
	contract.hasMinLen(req.body.slug, 3, 'O slug de ter 3 caracteres');
	contract.hasMinLen(req.body.description, 3, 'A descrição de ter 3 caracteres');

	if (!contract.isValid()) {
		res.status(400).send(contract.errors()).end();
		return;
	}

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

exports.put = (req, res, next) => {
	repository
		.update(req.params.id, req.body)
		.then(x => {
			res.status(200).send({
				message: 'Produto atualizado com sucesso'
			});
		}).catch(e => {
			res.status(400).send({
				message: 'Falha ao atualizar produto',
				data: e
			});
		});
};

exports.delete = (req, res, next) => {
	repository
		.delete(req.params.id)
		.then(x => {
			res.status(200).send({
				message: 'Produto removido com sucesso'
			});
		}).catch(e => {
			res.status(400).send({
				message: 'Falha ao remover produto',
				data: e
			});
		});
};