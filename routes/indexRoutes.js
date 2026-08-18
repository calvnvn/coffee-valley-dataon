// routes/indexRoutes.js

const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

// GET HOME
router.get("/", homeController.getHomePage);

module.exports = router;
