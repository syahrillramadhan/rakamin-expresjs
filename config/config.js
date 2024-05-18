require('dotenv').config()

const config = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        dialect: process.env.DB_DIALECT,
    }
}
module.exports = config;