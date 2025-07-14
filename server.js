const express = require('express');
const app = express();
require('./db');

app.listen(600, (req,res)=>{
    console.log("server is listening on PORT 6000");
})