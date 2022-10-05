require('dotenv').config()
const express = require('express');
const cors = require('cors');
const router = require('./router/index');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 3000;
const index = express();

index.use(express.json());
index.use(cors());
index.use('/', router);
index.use(errorMiddleware);

const start = async () => {
    try {
        index.listen(PORT, () => {
            console.log(`Server started on PORT = ${PORT}`)
        })
    } catch (e) {
        console.log(e);
    }
}

start();
