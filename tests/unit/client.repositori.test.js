import request from 'supertest'
import { describe, expect, it } from '@jest/globals'

describe('GET /client', () => {
  it('should return a list of clients', async () => {
    const response = await request('http://localhost:3000').get('/client')
    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
          phone: expect.any(String),
          address: expect.any(String),
          city: expect.any(String),
        }),
      ]),
    )
  })
})
