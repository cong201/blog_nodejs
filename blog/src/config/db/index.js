const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/basic_education-dev',{
            useNewUrlParser: true,
            
        });
        console.log('connection successful');
    }
    catch (error) {
        console.log('connection not successful');
    }

}

module.exports = { connect };