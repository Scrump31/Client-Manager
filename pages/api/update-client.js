import db from '../../db/mongoose'

export default async (req, res) => {
  if (req.method === 'POST') {
    const { id, name, email, phone, address, company, notes } = req.body
    try {
      await (
        await db()
      ).models.Client.findByIdAndUpdate(
        {
          _id: id
        },
        { $set: { name, email, phone, address, company, notes } },
        { new: true }
      )
    } catch (error) {
      console.log(error)
      res.status(404).send('error updating document')
    }
    res.status(201).json({ message: `${name} successfully updated` })
  }
}
