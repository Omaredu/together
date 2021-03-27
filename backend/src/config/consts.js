// setup .env file
require('dotenv').config()

module.exports = { 
    PORT: process.env.PORT || 2000,
    SALT_WORK_FACTOR: 10,
    MONGO_URL: process.env.MONGO_URL || "mongodb://127.0.0.1:27017/together"
}