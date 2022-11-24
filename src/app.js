const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose =require('mongoose')
const userRoutes = require('./route/user');
const bodyParser = require('body-parser');

dotenv.config();
const { PORT, API_URL,
MONGO_URL  } = process.env;

const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.status(200);
    res.send("Hello, World!");
});
mongoose.connect(MONGO_URL,err=>{
    if(err)throw err;
    console.log("Connected good");
});
app.use(cors);

app.use(userRoutes)
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});