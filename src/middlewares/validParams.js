// const validator = require('validator');
const mongoose = require('mongoose');

const validParams = (req, res, next) => {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
        return res.status(400).send({ message: 'ID inválido' });
    }
    next();
};

module.exports = validParams;
