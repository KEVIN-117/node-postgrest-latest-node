import app from './src/app.js'
import { getEnv } from './config/configurations.js'
import { DatabaseSingleton } from './src/db/connector.js'
const { port } = getEnv()

app.listen(port, () => {
  try {
    DatabaseSingleton.getInstance()
      .then((sequelize) => {
        console.log(`launched server on port ${port} 🚀🚀🚀`)
        console.log(
          `🚀🚀🚀Connected to database ${sequelize.config.database} 🚀🚀🚀`,
        )
        console.log(
          `🛰️🛰️ Database is running on port ${sequelize.config.port} 🛰️🛰️`,
        )
        console.log(
          `🛸🛸\x1b[32mServer running on port \x1b[35m${port}\x1b[0m. The URL is\x1b[0m \x1b[34mhttp://localhost:${port}\x1b[0m 🛸🛸`,
        )
      })
      .catch((error) => {
        console.error(error)
      })
  } catch (error) {
    console.error(error)
  }
})
