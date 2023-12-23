const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

const dotENV= require('dotenv');
dotENV.config();

const dbConnection = require('./dbConnection');
dbConnection();

const PORT= process.env.PORT;




app.listen(()=>{
    try {
        console.log(`Server is running on ${PORT}`);
    } catch (error) {
       console.log("Server is not RUNNING. SOMETHING WRONG"); 
    }
})