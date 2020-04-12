require('dotenv').config()

module.exports = {
  env: {
    username: process.env.USERNAME,
    mongodb: process.env.MONGODB_URI
  }
}
