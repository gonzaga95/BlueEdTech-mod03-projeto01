const crypto = require('node:crypto');

class frotaEntity {
    constructor(frota) {
        this.id = frota.id ?? crypto.randomUUID();
        this.tipo = frota.tipo;
        this.marca = frota.marca;
        this.modelo = frota.modelo;
        this.placa = frota.placa;
        this.ano = frota.ano;
    }

    validate() {
        if (!this.tipo) {
            throw new Error('O tipo precisa ser informado');
        }

        if (!this.marca) {
            throw new Error('A marca precisa ser informada');
        }

        if (!this.modelo) {
            throw new Error('O modelo precisa ser informado');
        }

        if (!this.placa || this.placa.length != 7) {
            throw new Error('Placa não informada ou inválida');
        }

        if (!this.ano || isNaN(this.ano)) {
            throw new Error('Ano não informado ou inválido');
        }
    }

    getFrota() {
        return {
            id: this.id,
            tipo: this.tipo,
            marca: this.marca,
            modelo: this.modelo,
            placa: this.placa,
            ano: this.ano,
        };
    }
}

module.exports = frotaEntity;
