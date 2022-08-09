const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/frota.route');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/frota', routes);

app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`);
});
