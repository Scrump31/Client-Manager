import db from '../../db/mongoose'

export default async (req, res) => {
  if (req.method === 'DELETE') {
    const { id, name } = req.body

    try {
      const client = await (await db()).models.Client.findOneAndRemove({
        _id: id
      })

      // Check if ID exists in collection
      if (!client) res.status(404).send('user does not exist')
    } catch (error) {
      res.status(400).send()
    }
    res.status(200).json({ message: `${name} successfully deleted` })
  }
}
