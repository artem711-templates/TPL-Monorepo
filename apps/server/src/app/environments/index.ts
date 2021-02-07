import * as dotenv from 'dotenv'
dotenv.config()

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development'

console.log(process.env)
// mlab
const MLAB_USER = process.env.MLAB_USER || 'admin'
const MLAB_PASS = process.env.MLAB_PASS || 'chnirt1803'
const MLAB_HOST = process.env.MLAB_HOST || 'cluster0.eoxxs.mongodb.net'
const MLAB_PORT = +process.env.MLAB_PORT || 47420
const MLAB_DATABASE = process.env.MLAB_DATABASE || 'nestjs-v7'
const MLAB_URL =
  process.env.MLAB_URL ||
  `mongodb+srv://${MLAB_USER}:${MLAB_PASS}@${MLAB_HOST}/${MLAB_DATABASE}?retryWrites=true&w=majority`

// mongodb
const MONGO_URL: string = +process.env.MONGO_PORT
  ? `mongodb://192.168.77.5:${process.env.MONGO_PORT}`
  : MLAB_URL
const MONGO_PORT: number = +process.env.MONGO_PORT || 11049
const MONGO_DB: string = process.env.MONGO_PORT ? 'nestjs-v7' : MLAB_DATABASE

// typeorm
const enviroment = {
  development: {
    url: MONGO_URL,
  },
  testing: {
    url: MLAB_URL,
  },
  staging: {
    url: MLAB_URL,
    // host: 'localhost',
    // port: MONGO_PORT!,
    // username: '',
    // password: '',
    // database: MONGO_DB!,
  },
  production: {
    url: MLAB_URL,
  },
}
export const typeORM = enviroment[NODE_ENV]
