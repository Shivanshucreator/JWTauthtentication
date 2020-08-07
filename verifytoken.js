const jwt = require("jsonwebtoken");

const verifyotherpages = auth;

function auth (req,res,next){
  const token = req.header("auth-token");
  if(!token) return.status(401).send("Access Denied");

  try{
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  }catch(err){
    res.status(400).send("invalid token");
  }
}

// we can add this auth to any pages now that we want to secure with jwt token

module.exports.verifyotherpages = verifyotherpages;
