const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const connectDatabase = new Sequelize('postgres://user:pass@localhost:5432/disneyMovies') // Example for postgres

module.exports = connectDatabase