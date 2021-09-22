import { VercelRequest, VercelResponse } from '@vercel/node'
import connectToDatabase from './database/database'

export default async (req: VercelRequest, res: VercelResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = db.collection('point')

  const list = await collection.find().toArray()

  return res.status(200).json(list)
}
