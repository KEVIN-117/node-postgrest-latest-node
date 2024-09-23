import app from './src/app.js'
import { getEnv } from './config/configurations.js'
import { DatabaseSingleton } from './src/db/connector.js'
const { port } = getEnv()

app.listen(port, () => {
  try {
    DatabaseSingleton.getInstance()
      .then(() => {
        console.log(`launched server 🚀🚀🚀`)
        console.log(`🚀🚀🚀Connected to database 🚀🚀🚀`)
        console.log(`🛰️🛰️ Database is running 🛰️🛰️`)
        console.log(`🛸🛸\x1b[32mServer running 🛸🛸`)
      })
      .catch((error) => {
        console.error(error)
      })
  } catch (error) {
    console.error(error)
  }
})
