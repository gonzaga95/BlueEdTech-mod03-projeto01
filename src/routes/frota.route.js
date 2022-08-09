const router = require('express').Router();

const frotaController = require('../controllers/frota.controller');

router.get('/veiculos', frotaController.findAllVeiculosController);
router.get('/veiculo/:id', frotaController.findVeiculoByIdController);

module.exports = router;
