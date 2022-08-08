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
        veiculo: 'Uno',
        placa: 'abc12d3',
    },
    {
        id: 2,
        tipo: 'Hatch',
        marca: 'Fiat',
        veiculo: 'Uno',
        placa: 'xyz12w3',
    },
    {
        id: 3,
        tipo: 'Picape',
        marca: 'Fiat',
        veiculo: 'Strada',
        placa: 'efg45h6',
    },
];

app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`);
});
