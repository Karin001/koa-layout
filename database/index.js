
const mongoose = require('mongoose')


mongoose.Promise = global.Promise

const url = process.env.MONGO_URL
const db = process.env.MONGO_DATABASE_NAME

exports.connect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(`${url}/${db}`, {
      useNewUrlParser: true
    })

    const connection = mongoose.connection
    connection.on('error', reject)
    connection.once('open', resolve)
  })
}