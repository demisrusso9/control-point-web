import { VercelRequest, VercelResponse } from '@vercel/node'
import connectToDatabase from './database/database'

export default async (req: VercelRequest, res: VercelResponse) => {
  const { id } = req.body

  const db = await connectToDatabase(process.env.MONGODB_URI)

  const collection = db.collection('point')

  console.log(id)

  await collection.findOneAndDelete({ id })
  return res.send({ message: 'Point Deleted' })
}
