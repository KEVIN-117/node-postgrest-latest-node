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
          `🛸🛸 Server is running on port ${port} url: http://localhost:${port} 🛸🛸`,
        )
      })
      .catch((error) => {
        console.error(error)
      })
  } catch (error) {
    console.error(error)
  }
})
