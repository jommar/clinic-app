import mongoose, { Schema, Document, Model } from 'mongoose'
import { config as dotEnvConfig } from 'dotenv'
dotEnvConfig()

const DB_CONFIG = {
  USER: encodeURIComponent(process.env.MONGO_INITDB_ROOT_USERNAME || ''),
  PASS: encodeURIComponent(process.env.MONGO_INITDB_ROOT_PASSWORD || ''),
  DB: process.env.DB || '',
}

const mongoDbUri = `mongodb://${DB_CONFIG.USER}:${DB_CONFIG.PASS}@localhost:27017/${DB_CONFIG.DB}?authSource=admin`

export const connect = async () => {
  await mongoose.connect(mongoDbUri)
  return { uri: mongoDbUri }
}
export const db = mongoose
