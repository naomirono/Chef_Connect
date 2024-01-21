const jwt = require("jsonwebtoken");

const User = require("../models/userModel");
const secretKey = 'eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NDAxNDc5NywiaWF0IjoxNjk0MDE0Nzk3fQ';

const protect = async (req, res, next) => {
  let token = req.cookies.jwt;

  try {
    if (token) {
      // Verify token
      const decoded = jwt.verify(token, secretKey);
      // Get user from the token
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } else {
      res.status(401);
      throw new Error("Not authorized, please login");
    }
  } catch (err) {
    return next(err);
  }
};

module.exports = protect;
