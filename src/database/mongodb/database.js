const mongoose = require('mongoose');

const connectToDatabase = () => {
    mongoose
        .connect('mongodb://localhost:27017/frota-proj-db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Database conectado');
        })
        .catch((err) => {
            return console.log(`Erro na conexao com o banco: ${err}`);
        });
};

module.exports = connectToDatabase;
