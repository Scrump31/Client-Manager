import db from '../../db/mongoose'

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, phone, address, company, notes } = req.body

    // Check for duplicate name
    const checkDuplicate = await (await db()).models.Client.findOne({
      name
    })
    if (checkDuplicate !== null) {
      res.status(409).json({ message: `${name} is already in use` })
    }

    try {
      const client = await (await db()).models.Client({
        name,
        email,
        phone,
        address,
        company,
        notes
      })

      await client.save()
      res.status(200).json({ message: `${name} successfully added` })
    } catch (error) {
      res.status(400).send(error)
    }
  }
}
