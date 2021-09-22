import { VercelRequest, VercelResponse } from '@vercel/node'
import connectToDatabase from './database/database'

export default async (req: VercelRequest, res: VercelResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = db.collection('point')

  const {
    currentDate,
    morningEntry,
    morningExit,
    afternoonEntry,
    afternoonExit,
    morningActivities,
    afternoonActivities
  } = req.body

  await collection.insertOne({
    currentDate,
    morningEntry,
    morningExit,
    afternoonEntry,
    afternoonExit,
    morningActivities,
    afternoonActivities
  })

  return res.status(201).json({ message: 'Control Point registered' })
}
