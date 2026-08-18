// middlewares/auth.js
module.exports = (req, res, next) => {
  // Cek session user
  if (req.session && req.session.user) {
    return next(); // IF ada, continue
  }
  // ELSE, login
  res.redirect("/login");
};
