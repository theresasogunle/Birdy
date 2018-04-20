//1. SETUP DATABASE 

const mongoose = require('mongoose');
const secrets = require('./secrets');
const dbConnection = mongoose.connection;

mongoose.Promise = global.Promise;

mongoose.connect(secrets.DATABASE);

module.exports = {
    connect(){
        dbConnection.on('error', console.error.bind(console, 'Mongo Encountered an Error'))
        dbConnection.once('open', () =>{
            console.log('Connected to BirdyDB')
        })
    }
}