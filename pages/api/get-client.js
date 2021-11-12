import db from '../../db/mongoose'

export default async (req, res) => {
  if (req.method === 'GET') {
    const usrId = req.query.id
    let usrData
    try {
      usrData = await (await db()).models.Client.findById(usrId)
    } catch (error) {
      console.log(error)
      res.status(404).send('user not found')
    }

    res.json({ user: usrData.toObject({ getters: true }) })
  }
}
