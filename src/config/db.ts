import type { TProdutoDB } from '@/db/types'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.MONGO_URI || ''

const client = new MongoClient(uri)

const database = client.db('baratao')

export const associadosCollection =
  database.collection<TProdutoDB>('associados')

export const dbConnection = async () => {
  try {
    await client.connect()
  } catch (error) {
    console.error(error)
  }
  console.log(' > Connected to Atlas Edge Server')
}
