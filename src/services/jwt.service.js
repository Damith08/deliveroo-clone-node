const jwt = require("jsonwebtoken");
const User = require("../models/user.model")

const userEmail = req.body.email 
const user = {email: userEmail}

jwt.sign(user,)