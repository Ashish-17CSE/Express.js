const Sequlize = require('sequelize');
const sequelize = new Sequlize('node-complete', 'root', 'Ashish', {
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;