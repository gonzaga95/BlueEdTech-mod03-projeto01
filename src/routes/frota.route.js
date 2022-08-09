const router = require('express').Router();

const frotaController = require('../controllers/frota.controller');

router.get('/veiculos', frotaController.findAllVeiculosController);
router.get('/veiculo/:id', frotaController.findVeiculoByIdController);
router.post('/create', frotaController.createVeiculoController);
router.put('/update/:id', frotaController.updateVeiculoController);
router.delete('/delete/:id', frotaController.deleteVeiculoController);

module.exports = router;
