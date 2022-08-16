// const frota = require('../mocks/frota');
const frotaEntity = require('../entities/frota.entity');
const Frota = require('../models/Frota');

const findAllVeiculosService = () => {
    return frota;
};

const findVeiculoByIdService = (id) => {
    let veiculoEscolhido;

    frota.map((veiculo) => {
        if (veiculo.id === id) {
            veiculoEscolhido = veiculo;
        }
    });

    return veiculoEscolhido;
};

const createVeiculoService = (veiculo) => {
    const novoVeiculo = new frotaEntity(veiculo);
    novoVeiculo.validate();

    frota.push(novoVeiculo);
    return novoVeiculo;
};

const updateVeiculoService = (veiculo) => {
    const veiculoEscolhido = new frotaEntity(veiculo);
    veiculoEscolhido.validate();

    frota.map((cadaVeiculo, index) => {
        if (cadaVeiculo.id == veiculoEscolhido.id) {
            frota.splice(index, 1, veiculoEscolhido);
        }
    });

    return veiculoEscolhido;
};

const deleteVeiculoService = (id) => {
    let veiculoEscolhido;

    frota.map((veiculo, index) => {
        if (veiculo.id === id) {
            veiculoEscolhido = veiculo;
            frota.splice(index, 1);
        }
    });
};

module.exports = {
    findAllVeiculosService,
    findVeiculoByIdService,
    createVeiculoService,
    updateVeiculoService,
    deleteVeiculoService,
};
