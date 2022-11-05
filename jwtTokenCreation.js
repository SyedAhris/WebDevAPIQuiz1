const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config(); 
const accessToken = jwt.sign({
    id: "123456",
}, process.env.JWT_KEY, {expiresIn:"3d"});

console.log(accessToken);