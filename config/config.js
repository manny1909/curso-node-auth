require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
const config = {
  "development": {
    "username": process.env.DB_USER || "root",
    "password": process.env.DB_PASSWORD || null,
    "database": process.env.DB_NAME || "tienda",
    "port": process.env.DB_PORT || 1433,
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": process.env.DIALECT || "mssql",
    "logging": true
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mssql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mssql"
  }
}
const USER = encodeURIComponent(config[env].username)
const PASSWORD = encodeURIComponent(config[env].password)
const db = config[env]
const URI = process.env.URI || `mssql://${USER}:${PASSWORD}@${db.host}:${db.port}/${db.database}`
module.exports = {URI, ...config[env]}
