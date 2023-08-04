import mongoose, { Schema, Document, Model } from 'mongoose'
import { config as dotEnvConfig } from 'dotenv'
dotEnvConfig()

const mongoDbUri = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/`

export const connect = async () => {
  return await mongoose.connect(mongoDbUri)
}
export const db = mongoose
