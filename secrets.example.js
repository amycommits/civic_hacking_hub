module.exports = {
  DB_USER_NAME: process.env.DB_USER_NAME ||'root',
  DB_PASSWORD: process.env.DB_PASSWORD ||'password',
  DB_HOST: process.env.DB_HOST || 'postgres',
  DB_NAME: process.env.DB_NAME || 'postgres',
}
