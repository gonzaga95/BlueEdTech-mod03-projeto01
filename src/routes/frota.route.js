const router = require('express').Router();

const validParams = require('../middlewares/validParams');
const frotaController = require('../controllers/frota.controller');

router.get('/', frotaController.findAllVeiculosController);
router.get('/:id', validParams, frotaController.findVeiculoByIdController);
router.post('/create', frotaController.createVeiculoController);
router.put('/update/', frotaController.updateVeiculoController);
router.delete(
    '/delete/:id',
    validParams,
    frotaController.deleteVeiculoController,
);

module.exports = router;
