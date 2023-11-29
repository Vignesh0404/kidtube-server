const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    // const token = req.cookies.accessToken;
    const cookies = res.get('Set-Cookie');
    const tokenCookie = cookies.find(cookie => cookie.startsWith('accessToken='));
    console.log('token', tokenCookie)
    if (!tokenCookie) {
      res.status(401);
      return next(new Error("Not authorized, no token"));
    }

    const decoded = jwt.verify(tokenCookie, process.env.JWT_SECRET);

    req.user = { _id: decoded._id };
    next();
  } catch (error) {
    res.status(401);
    return next(new Error("Not authorized"));
  }
};

module.exports = protect;