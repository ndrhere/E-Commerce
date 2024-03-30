const mongoose = require ('mongoose');
const mongoURI = 'mongodb://localhost:27017'

async function connectToMongo () {
    try{
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected Successfully')
    }catch(error){
        console.error("There is some error")
    }
   
}

module.exports = connectToMongo;