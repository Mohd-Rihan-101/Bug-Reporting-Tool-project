const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/BugDb")
.then(()=>{
    console.log("Database connect successfully");
}).catch((err)=>{
    console.log(err);
})