const express = require('express')
const dotenv = require('dotenv');
const { PORT } = require('./config')
const Database = require('./loaders/database');
const myExpress = require('./loaders/express')


async function startServer() {
    const app = express()
    dotenv.config()
    const db = new Database()
    db.connectDatabase()
    myExpress.configExpess(app)

    app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))

}

startServer()
