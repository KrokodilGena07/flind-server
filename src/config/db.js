const {Sequelize} = require('sequelize');

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        define: {
            timestamps: false
        }
    }
);

module.exports = db;