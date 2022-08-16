const validator = require('validator');

const validParams = (req, res, next) => {
    const idParam = req.params.id;

    const validId = validator.isUUID(idParam);
    if (!validId) {
        res.status(400).send('Invalid param');
    } else {
        next();
    }
};

module.exports = validParams;
