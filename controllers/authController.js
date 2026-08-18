// controllers/authController.js
const db = require("../config/db");

// GET /login
exports.getLoginPage = (req, res) => {
  res.render("login", {
    title: "Login - Coffee Valley",
    error: null,
  });
};

// POST /login
exports.postLogin = async (req, res) => {
  const { user_id, password } = req.body;

  try {
    const [users] = await db.query(
      "SELECT * FROM logins WHERE user_id = ? AND password = ?",
      [user_id, password],
    );

    if (users.length > 0) {
      // Set session login
      req.session.user = {
        user_id: users[0].user_id,
      };
      return res.redirect("/"); // Direct to Home
    } else {
      // Wrong Password / User ID
      return res.render("login", {
        title: "Login - Coffee Valley",
        error: "User ID atau Password salah!",
      });
    }
  } catch (error) {
    console.error("Error saat login:", error);
    res.status(500).send("Terjadi kesalahan pada server");
  }
};

// GET /logout
exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};
