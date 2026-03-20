const mongoose = require('mongoose');

async function connectDB() {

    await mongoose.connect('mongodb://srujanpoojari2_db_user:35MbbfnMsppWYNy6@ac-oejcimv-shard-00-00.38barix.mongodb.net:27017,ac-oejcimv-shard-00-01.38barix.mongodb.net:27017,ac-oejcimv-shard-00-02.38barix.mongodb.net:27017/?ssl=true&replicaSet=atlas-13s1f3-shard-0&authSource=admin&appName=Cluster0/mydatabase')
    console.log("Connected to MongoDB")
}

module.exports = connectDB;