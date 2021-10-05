import db from '../../db/mongoose'

export default async (req, res) => {
  if (req.method === 'GET') {
    let clients
    try {
      clients = await (await db()).models.Client.find({})
    } catch (error) {
      res.status(404).send('error retrieving clients')
    }

    if (!clients.length) {
      res.status(404).json({ clients: [] })
    } else {
      res.status(200).json({
        clients: clients.map(user => user.toObject({ getters: true }))
      })
    }
  }
}
