const frota = [
    {
        id: 1,
        tipo: 'Hatch',
        marca: 'Fiat',
        modelo: 'Uno',
        placa: 'abc12d3',
    },
    {
        id: 2,
        tipo: 'Hatch',
        marca: 'Fiat',
        modelo: 'Uno',
        placa: 'xyz12w3',
    },
    {
        id: 3,
        tipo: 'Picape',
        marca: 'Fiat',
        modelo: 'Strada',
        placa: 'efg45h6',
    },
];

const findAllVeiculosService = () => {
    return frota;
};

const findVeiculoByIdService = (id) => {
    return frota.find((veiculo) => veiculo.id == id);
};

module.exports = {
    findAllVeiculosService,
    findVeiculoByIdService,
}
