const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const jwtMiddleware = function (req, res, next) {
  const token = req.header("x-auth-token"); // Assuming the token is sent in the 'x-auth-token' header

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied." });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded.user; // Store the decoded user information in the request object
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid." });
  }
};

module.exports = jwtMiddleware;
