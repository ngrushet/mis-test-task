import express, { json } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv';

import router from './src/routes/index.js'

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB, 
    MONGO_URI
} = process.env;

// const DB_URL = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

console.log({
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
}, DB_URL);
// const DB_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const app = express()

app.use(cors())
app.use(json())
app.use('/api', router)

// schedule('* * * * *', function(){
//     notification()
// });

async function start() {
    try {
        console.log("MongoDB try to be connected");
        await mongoose.connect(MONGO_URI, options).then(
            () => console.log("MongoDB is connected")
        );
        app.listen(PORT, () => {
            console.log(`Server started on PORT ${PORT}`)
        });
    } catch (e) {
        console.log("MongoDB not connected");
        
        console.error(e);
    } 
}

start();


