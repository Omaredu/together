const mongoose = require('mongoose')

function connect(dbUrl) {
    const connectionConfig = { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
    mongoose.connect(dbUrl, connectionConfig)
        .then(data => console.log('[db] connected to database'))
        .catch(err => console.error(`[db] error connecting to database: ${err}`))
}

module.exports = { 
    connect
}