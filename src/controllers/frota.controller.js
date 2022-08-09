const frotaService = require('../services/frota.service');

const findAllVeiculosController = (req, res) => {
    const allFrota = frotaService.findAllVeiculosService();
    res.send(allFrota);
};

const findVeiculoByIdController = (req, res) => {
    const parametroID = Number(req.params.id);
    const veiculoID = frotaService.findVeiculoByIdService(parametroID);
    res.send(veiculoID);
};

const createVeiculoController = (req, res) => {
    const veiculo = req.body;
    const novoVeiculo = frotaService.createVeiculoService(veiculo);
    res.send(novoVeiculo);
};

const updateVeiculoController = (req, res) => {
    const parametroID = Number(req.params.id);
    const veiculoEditar = req.body;
    const veiculoEditado = frotaService.updateVeiculoService(
        parametroID,
        veiculoEditar,
    );
    res.send(veiculoEditado);
};

const deleteVeiculoController = (req, res) => {
    const parametroID = req.params.id;
    frotaService.deleteVeiculoService(parametroID);
    res.send({ message: 'Veículo deletado da frota!' });
};

module.exports = {
    findAllVeiculosController,
    findVeiculoByIdController,
    createVeiculoController,
    updateVeiculoController,
    deleteVeiculoController,
};
