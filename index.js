const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/frota.route');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/frota', routes);

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

app.get('/frota/veiculos', (req, res) => {
    res.send(frota);
});

app.get('/frota/veiculo/:id', (req, res) => {
    const id = Number(req.params.id);
    const veiculoID = frota.find((veiculo) => veiculo.id === id);
    res.send(veiculoID);
});

app.app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`);
});
