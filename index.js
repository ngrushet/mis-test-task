import express, { json } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

import router from './src/routes/index.js'

import { url } from './config/db.js';

const options = {
    useNewUrlParser: true,
    // connectTimeoutMS: 10000,
    directConnection: true
};

const APP_PORT = process.env.NODE_DOCKER_PORT || 8080;

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
        await mongoose.connect(url, options).then(
            () => console.log("MongoDB is connected")
        );
        app.listen(APP_PORT, () => {
            console.log(`Server started on PORT ${APP_PORT}`)
        });
    } catch (e) {
        console.error(e);
    } 
}

start();
