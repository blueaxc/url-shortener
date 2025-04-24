const express = require('express')
const mongoos = require('mongoose')
const redis = require('redis')
const cors = require('cors')
require('dotenv').config()

const urlRoutes = require('./routes/urlRoutes')
const connectDB = require('./config/db')
const redisClient = require('./redisClient')

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.set('redisClient',redisClient);

app.use('/api', urlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on htpp://localhost:${PORT}`)
})