require('dotenv').config()

const nodeEnv = process.env.NODE_ENV || 'development'
const config = {
  env: {
    username: process.env.USERNAME
  }
}

if (nodeEnv === 'qa') {
  config.env['mongodb'] = process.env.MONGODB_URI_QA
} else {
  config.env['mongodb'] = process.env.MONGODB_URI_DEV
}

module.exports = config
