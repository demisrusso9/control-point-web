import { VercelRequest, VercelResponse } from '@vercel/node'
import { ObjectId } from 'mongodb'
import connectToDatabase from './database/database'

export default async (req: VercelRequest, res: VercelResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = db.collection('point')

  // @ts-ignore
  // I don't know why there is an error in ObjectId,
  // if I put only req.query.id is not going to delete
  await collection.deleteOne({ _id: ObjectId(req.query.id) })

  return res.status(200).json({ message: 'Point Deleted' })
}
