const env = {
  develop: {
    port: process.env.DEV_PORT,
    dbHost: process.env.DEV_DB_HOST,
    dbUser: process.env.DEV_DB_USER,
    dbPassword: process.env.DEV_DB_PASSWORD,
    dbName: process.env.DEV_DB_NAME,
    dbPort: process.env.DEV_DB_PORT,
  },
  test: {
    port: process.env.TEST_PORT,
    dbHost: process.env.TEST_DB_HOST,
    dbUser: process.env.TEST_DB_USER,
    dbPassword: process.env.TEST_DB_PASSWORD,
    dbName: process.env.TEST_DB_NAME,
    dbPort: process.env.TEST_DB_PORT,
  },
  production: {
    port: process.env.PORT,
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
  },
}

export function getEnv() {
  if (process.env.NODE_ENV === 'production') {
    return env.production
  }
  if (process.env.NODE_ENV === 'test') {
    return env.test
  }
  return env.develop
}
