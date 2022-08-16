const { Schema, model } = require('mongoose');

const FrotaSchema = new Schema({
    id: { type: String, required: true },
    tipo: { type: String, required: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    placa: { type: String, required: true },
    ano: { type: Number, required: true },
});

const Frota = model('frota', FrotaSchema);

module.exports = Frota;
