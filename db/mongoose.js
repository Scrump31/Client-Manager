import mongoose from 'mongoose'
import clientSchema from './models/client'

const dbConnect = async () => {
  const connection = await mongoose.createConnection(process.env.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const Client = connection.model('Client', clientSchema)

  return {
    models: { Client }
  }
}

export default dbConnect
