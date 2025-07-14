const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, hashed, role });
  res.status(200).json({ msg: "User register" });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)));
  res.status(401).json({ msg: "invalid credential" });

  const token = jwt.sign({ id : user._id, role : user.role}, process.env.jwt_SECRET);
  res.json({token});
};

module.exports = {register , login};

