'use strict'
import pg from 'pg'
import { getEnv } from '../../config/configurations.js'
import { clients, invoices, users } from './placeholder.js'
import bcrypt from 'bcrypt'

/**
 * This function is responsible for seeding the 'client' table in the database.
 * It first creates the 'client' table if it doesn't exist, then populates it with data from the 'clients' array.
 *
 * @async
 * @function
 * @param {pg.Client} connection - The PostgreSQL client connection object.
 * @returns {Promise<Object>} A promise that resolves to an object containing the created table and the inserted clients.
 * @throws Will throw an error if the query execution fails.
 */
export async function seedClients(connection) {
  try {
    await connection.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
    const buildClientTable = `
      CREATE TABLE IF NOT EXISTS client (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        state VARCHAR(255) DEFAULT 'active',
        profile VARCHAR(255) DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );`
    const createdTable = await connection.query(buildClientTable)
    console.log('Created client table')

    const insertData = await Promise.all(
      clients.map(async (client) => {
        return connection.query(
          `INSERT INTO client (id, name, last_name, email, phone, address, city) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
          [
            client.id,
            client.name,
            client.lastName,
            client.email,
            client.phone,
            client.address,
            client.city,
          ],
        )
      }),
    )
    console.log(`Seeded ${insertData.length} clients`)
    return {
      createdTable: createdTable,
      clients: insertData,
    }
  } catch (error) {
    console.error(error)
  }
}

/**
 * This function is responsible for seeding the 'invoice' table in the database.
 * It first creates the 'invoice' table if it doesn't exist, then populates it with data from the 'invoices' array.
 *
 * @async
 * @function
 * @param {pg.Client} connection - The PostgreSQL client connection object.
 * @returns {Promise<Object>} A promise that resolves to an object containing the created table and the inserted invoices.
 * @throws Will throw an error if the query execution fails.
 */
export async function seedInvoices(connection) {
  try {
    await connection.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)

    const buildInvoiceTable = `
      CREATE TABLE IF NOT EXISTS invoice (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          amount FLOAT NOT NULL,
          date DATE NOT NULL,
          status VARCHAR(255) DEFAULT 'pending',
          client_id UUID NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );`

    const createdTable = await connection.query(buildInvoiceTable)
    const invoicesInserted = await Promise.all(
      invoices.map(async (invoice) => {
        return connection.query(
          `INSERT INTO invoice (id, amount, date, status, client_id) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
          [
            invoice.id,
            invoice.amount,
            invoice.date,
            invoice.status,
            invoice.client_id,
          ],
        )
      }),
    )
    console.log(`Seeded ${invoicesInserted.length} invoices`)

    return {
      createdTable: createdTable,
      invoices: invoicesInserted,
    }
  } catch (error) {
    console.error(error)
  }
}

export async function seedUsers(connection) {
  try {
    await connection.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
    const buildUserTable = `
            CREATE TABLE IF NOT EXISTS users (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                role VARCHAR(255) DEFAULT 'user',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );`
    const createTable = await connection.query(buildUserTable)
    console.log('Created user table')

    const clientInserted = await Promise.all(
      users.map(async (user) => {
        const hash = await bcrypt.hash(user.password, 10)
        return await connection.query(
          `INSERT INTO users (id, name, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
          [user.id, user.name, user.email, hash, user.role],
        )
      }),
    )
    console.log(`Seeded ${clientInserted.length} users`)
    return {
      createTable: createTable,
      users: clientInserted,
    }
  } catch (error) {
    console.error(error)
  }
}

const { dbHost, dbName, dbPassword, dbUser, dbPort } = getEnv()

async function seed() {
  const { Client } = pg

  try {
    const connection = new Client({
      user: dbUser,
      host: dbHost,
      database: dbName,
      password: dbPassword,
      port: dbPort,
    })

    await connection.connect()

    if (connection) {
      await seedClients(connection)
      await seedInvoices(connection)
      await seedUsers(connection)
      process.exit(0)
    }
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

seed().catch((err) => {
  console.error('An error occurred while attempting to seed the database:', err)
})
