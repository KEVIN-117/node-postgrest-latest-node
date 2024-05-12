import { seedInvoices } from '../../src/utils/seed.js'
import pg from 'pg'
import { jest } from '@jest/globals'
import { describe, expect, it, beforeEach } from '@jest/globals'

describe('seedInvoices', () => {
  let connection

  beforeEach(() => {
    connection = new pg.Client()
    connection.query = jest.fn()
    connection.connect = jest.fn()
  })

  it('should create the invoice table and seed it with data', async () => {
    connection.query.mockResolvedValueOnce(true)
    const invoices = [
      {
        id: '1',
        amount: 100.0,
        date: new Date(),
        status: 'pending',
        client_id: '1',
      },
    ]

    await seedInvoices(connection)

    expect(connection.query).toHaveBeenCalledWith(
      `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`,
    )
    expect(connection.query).toHaveBeenCalledWith(
      `CREATE TABLE IF NOT EXISTS invoice (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          amount FLOAT NOT NULL,
          date DATE NOT NULL,
          status VARCHAR(255) NOT NULL DEFAULT 'pending',
          client_id UUID NOT NULL
      );`,
    )
    expect(connection.query).toHaveBeenCalledWith(
      `INSERT INTO invoice (id, amount, date, status, client_id) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      [
        invoices[0].id,
        invoices[0].amount,
        invoices[0].date,
        invoices[0].status,
        invoices[0].client_id,
      ],
    )
  })

  it('should throw an error if the query execution fails', async () => {
    connection.query.mockRejectedValueOnce(new Error('Query execution failed'))

    await expect(seedInvoices(connection)).rejects.toThrow(
      'Query execution failed',
    )
  })
})
