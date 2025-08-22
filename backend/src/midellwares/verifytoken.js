import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) return res.status(401).json({ loggedIn: false, message: "No token provided" });

  jwt.verify(token, '1234567', (err, user) => {
    if (err) return res.status(403).json({ loggedIn: false, message: "Invalid or expired token" });

    req.user = user; // 👈 put payload in req.user
    next();          // continue to the controller
  });
}

export default verifyToken;