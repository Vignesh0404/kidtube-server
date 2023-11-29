const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    console.log('token', token)
    if (!token) {
      res.status(401);
      return next(new Error("Not authorized, no token"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { _id: decoded._id };
    next();
  } catch (error) {
    res.status(401);
    return next(new Error("Not authorized"));
  }
};

module.exports = protect;