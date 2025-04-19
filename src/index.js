const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const errorMiddleware = require('./middlewares/error.middleware');
const router = require('./router/index');
require('dotenv').config({
    path: path.resolve(`.${process.env.NODE_ENV}.env`)
});
const db = require('./config/db');
require('./models/index');

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: '*'
}));
app.use('api', router);
// TODO ADD COMPRESSION MIDDLEWARE
app.use(errorMiddleware);

async function start() {
    try {
        await db.authenticate();
        await db.sync();
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();