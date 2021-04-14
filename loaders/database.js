//config database

const mongoose = require('mongoose')
const { mongoUri } = require('../config')
const services = require('./services')


class Database {
  constructor() {

  }

  connectDatabase() {
    mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }).then(() => {
      console.log('MongoDB, database connected...')
      services.setServices()
    })
      .catch((err) => console.log(err))
  }
}


module.exports = Database
