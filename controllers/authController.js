const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req,res)=>{
    const {name , email, password , role} = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({name , email , hashed , role});
    res.status(200).json({msg : "User register"});
};

