// const frotaMock = require('../mocks/frota');
const frotaEntity = require('../entities/frota.entity');
const Frota = require('../database/models/Frota');

const findAllVeiculosService = async () => {
    return await Frota.find();
};

const findVeiculoByIdService = async (id) => {
    const veiculoEscolhido = await Frota.findById(id);
    return veiculoEscolhido;
};

const createVeiculoService = async (veiculo) => {
    const novoVeiculo = new frotaEntity(veiculo);
    novoVeiculo.validate();

    return await Frota.create(novoVeiculo);
};

const updateVeiculoService = async (veiculo) => {
    const veiculoEscolhido = new frotaEntity(veiculo);
    veiculoEscolhido.validate();

    const veiculoUpdatedInDatabase = await Frota.findOneAndUpdate({
        id: id,
    });

    return veiculoUpdatedInDatabase;
};

const deleteVeiculoService = async (id) => {
    const veiculoEscolhido = await Frota.findByIdAndDelete(id);

    return veiculoEscolhido;
};

module.exports = {
    findAllVeiculosService,
    findVeiculoByIdService,
    createVeiculoService,
    updateVeiculoService,
    deleteVeiculoService,
};
