import db from '../../db/mongoose'

export default async (req, res) => {
  if (req.method === 'GET') {
    let users
    try {
      users = await (await db()).models.Client.find({})
    } catch (error) {
      res.status(404).send('error retrieving users')
    }

    if (!users.length) {
      res.status(404).json({ users: [] })
    } else {
      res.status(200).json({
        users: users.map(user => user.toObject({ getters: true }))
      })
    }
  }
}
