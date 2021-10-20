const app = require('./app')
const connectDatabase = require('./config/database')
const PORT = 5555;

// Connecting to database
connectDatabase();


const server = app.listen(PORT,() => {
    console.log('listening on port '+ PORT)
})
