const express = require('express');
const dotenv =require('dotenv')
const connectDB = require('./config/config');
require('colors');

dotenv.config();
connectDB();


const app = express();
app.use(express.json());

app.get('/api/projects', (req,res)=>{
    res.send('API is running');
})

const port =process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`Server running on ${process.env.NODE_ENV} mode on port number ${process.env.PORT}`.yellow.bold)
} )