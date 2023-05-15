import express, { json }    from 'express'
import cors                 from 'cors'
import mongoose             from 'mongoose'
import dotenv               from 'dotenv';

import router               from './src/routes/index.js'
import { url, options }     from './config/db.js';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

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
