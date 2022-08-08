const express = require('express');
const router = express.Router();

const frotaController = require('../controllers/frota.controller');

router.get('/veiculos', frotaController.findAllVeiculosController);
router.get('/veiculo/:id', frotaController.findVeiculoByIdController);

module.exports = { router };
