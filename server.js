const express = require('express');
const app = express();
require('./db');

app.listen(6000, (req,res)=>{
    console.log("server is listening on PORT 6000");
})