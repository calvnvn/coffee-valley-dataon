// routes/indexRoutes.js

const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const isAuthenticated = require("../middlewares/auth");

// GET HOME
router.get("/", isAuthenticated, homeController.getHomePage);

router.get("/order-status", isAuthenticated, (req, res) => {
  res.render("order-status", {
    title: "Order Status - Coffee Valley",
  });
});

module.exports = router;
