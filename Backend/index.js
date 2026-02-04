require('dotenv').config()

const express = require("express");
const app = express();

const port = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const mongoose = require("mongoose");


app.listen(port, () => {
    console.log(`Server is on port ${port}`);
    mongoose.connect(uri);  
    console.log(`DataBase Connected`);
});