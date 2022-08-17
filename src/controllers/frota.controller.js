const frotaService = require('../services/frota.service');

const findAllVeiculosController = async (req, res) => {
    try {
        const allFrota = await frotaService.findAllVeiculosService();
        res.status(200).send(allFrota);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: 'Nao deu'});
    }
};

const findVeiculoByIdController = async (req, res) => {
    const parametroID = req.params.id;
    const veiculoID = await frotaService.findVeiculoByIdService(parametroID);
    if (veiculoID) {
        res.status(200).send(veiculoID);
    } else {
        res.status(400).send({ message: 'Veiculo não localizado' });
    }
};

const createVeiculoController = async (req, res) => {
    try {
        const veiculo = req.body;
        const novoVeiculo = await frotaService.createVeiculoService(veiculo);
        res.status(201).send(novoVeiculo);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

const updateVeiculoController = async (req, res) => {
    try {
        const veiculoEditar = req.body;
        const veiculoEditado = await frotaService.updateVeiculoService(
            veiculoEditar,
        );
        res.status(200).send(veiculoEditado);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

const deleteVeiculoController = async (req, res) => {
    const parametroID = req.params.id;
    const veiculoDeletado = await frotaService.deleteVeiculoService(
        parametroID,
    );
    if (veiculoDeletado) {
        res.status(200).send({
            message: 'Veículo deletado da frota!',
        });
    } else {
        res.status(400).send({ message: 'Veículo não encontrado' });
    }
};

module.exports = {
    findAllVeiculosController,
    findVeiculoByIdController,
    createVeiculoController,
    updateVeiculoController,
    deleteVeiculoController,
};
