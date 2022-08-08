const frotaService = require("../services/frota.service");

const findAllVeiculosController = (req, res) => {
    const allFrota = frotaService.findAllVeiculosService();
    res.send(allFrota);
}

const findVeiculoByIdController = () => (req, res) {
    const parametroID = Number(req.params.id);
    const veiculoID = frotaService.findVeiculoByIdService(parametroID);
    res.send(veiculoID);
}

module.exports = {
    findAllVeiculosController,
    findVeiculoByIdController,
}
