import { setUpModel } from './build.js'

import { Sequelize } from 'sequelize'
import { getEnv } from '../../config/configurations.js'

const { dbHost, dbName, dbPassword, dbUser, dbPort } = getEnv()
console.log(getEnv())

const URI = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`

export class DatabaseSingleton {
  static #instance = null
  static async getInstance() {
    try {
      if (!DatabaseSingleton.#instance) {
        const sequelize = new Sequelize(URI, {
          dialect: 'postgres',
          logging: false,
          host: dbHost,
        })
        await sequelize.authenticate()
        setUpModel(sequelize)

        const isProduction = process.env.NODE_ENV === 'production'
        await sequelize.sync({ force: isProduction })

        DatabaseSingleton.#instance = sequelize
      }
      return DatabaseSingleton.#instance
    } catch (error) {
      console.error(error)
      throw new Error('Error while connecting to the database')
    }
  }

  static async closeConnection() {
    try {
      if (DatabaseSingleton.#instance) {
        await DatabaseSingleton.#instance.close()
        DatabaseSingleton.#instance = null
      }
    } catch (error) {
      console.error(error)
      throw new Error('Error while closing the connection')
    }
  }

  static async reset() {
    try {
      if (DatabaseSingleton.#instance) {
        await DatabaseSingleton.#instance.drop()
        await DatabaseSingleton.#instance.sync()
      }
    } catch (error) {
      console.error(error)
      throw new Error('Error al restablecer la base de datos')
    }
  }
}
