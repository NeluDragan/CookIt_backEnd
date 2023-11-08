const jwt = require("jsonwebtoken");

function authenticateUser(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Autentificare necesară." });
  }
  console.log("token: " + token);
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Token invalid." });
    }
    console.log("decoded: " + decoded);
    req.user = decoded;
    next();
  });
}

module.exports = authenticateUser;
