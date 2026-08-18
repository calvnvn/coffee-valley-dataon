// routes/catalogRoutes.js
const express = require("express");
const router = express.Router();
const catalogController = require("../controllers/catalogController");
const isAuthenticated = require("../middlewares/auth");

// GET /catalog
router.get("/catalog", isAuthenticated, catalogController.getCatalogPage);

module.exports = router;
