const frota = [
    {
        id: 1,
        tipo: 'Hatch',
        marca: 'Fiat',
        modelo: 'Uno',
        placa: 'abc12d3',
        ano: 2015
    },
    {
        id: 2,
        tipo: 'Hatch',
        marca: 'Fiat',
        modelo: 'Uno',
        placa: 'xyz12w3',
        ano: 2017
    },
    {
        id: 3,
        tipo: 'Picape',
        marca: 'Fiat',
        modelo: 'Strada',
        placa: 'efg45h6',
        ano: 2017
    },
];

const findAllVeiculosService = () => {
    return frota;
};

const findVeiculoByIdService = (id) => {
    return frota.find((veiculo) => veiculo.id == id);
};

const createVeiculoService = (novoVeiculo) => {
    const novoID = frota.length + 1;
    novoVeiculo.id = novoID;
    frota.push(novoVeiculo);
    return novoVeiculo;
};

const updateVeiculoService = (id, veiculoEditado) => {
    veiculoEditado['id'] = id;
    const veiculoIndex = frota.findIndex((veiculo) => veiculo.id == id);
    frota[veiculoIndex] = veiculoEditado;
    return veiculoEditado;
};

const deleteVeiculoService = (id) => {
    const veiculoIndex = frota.findIndex((veiculo) => veiculo.id == id);
    return frota.slice(veiculoIndex, 1);
};

module.exports = {
    findAllVeiculosService,
    findVeiculoByIdService,
    createVeiculoService,
    updateVeiculoService,
    deleteVeiculoService,
};
