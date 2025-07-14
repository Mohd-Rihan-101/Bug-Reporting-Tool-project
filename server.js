const express = require('express');
const app = express();

app.listen(600, (req,res)=>{
    console.log("server is listening on PORT 6000");
})