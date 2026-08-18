// routes/uploadRoutes.js
const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController");
const upload = require("../middlewares/upload");
const isAuthenticated = require("../middlewares/auth");

// GET /upload
router.get("/upload", isAuthenticated, uploadController.getUploadPage);

// POST /upload
router.post(
  "/upload",
  isAuthenticated,
  upload.single("document_file"),
  uploadController.postUpload,
);
module.exports = router;
