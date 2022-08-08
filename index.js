const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

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

app.get('/frota/todos-veiculos', (req, res) => {
    res.send(frota);
});

app.get('/frota/:id', (req, res) => {
    const id = Number(req.params.id);
    const veiculoID = frota.find((veiculo) => frota.id === id);
    res.send(veiculoID);
});

app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`);
});
