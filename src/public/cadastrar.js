//var express = require('express');
//ar router = express.Router();
//var controller = require('../controllers/controller');
angular.module('customers', [])
	.controller('cadastro', function($scope, $http){
		$scope.adicionarCliente = function (cliente) {
			$http.post("http://localhost:3000/customers", cliente)
			.then(function() {
				console.log (cliente);
		})}
		
		$scope.verificarCliente = function (cliente) {
			$http.get("http://localhost:3000/customers")
			.then(function(response){
				for (i=0; i<response.data.length; i++) {
					if (cliente.email == response.data[i].email) {
						$scope.msg = response.data[i].email;
					}else{
						$scope.msg = "E-mail não cadastrado"
					};
				};
			});
		};
	});