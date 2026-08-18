// routes/distributorRoutes.js
const express = require("express");
const router = express.Router();
const distributorController = require("../controllers/distributorController");
const isAuthenticated = require("../middlewares/auth");

router.get(
  "/distributors",
  isAuthenticated,
  distributorController.getDistributors,
);

router.get(
  "/distributors/add",
  isAuthenticated,
  distributorController.getAddForm,
);
router.post(
  "/distributors/add",
  isAuthenticated,
  distributorController.postAdd,
);

router.get(
  "/distributors/edit/:id",
  isAuthenticated,
  distributorController.getEditForm,
);
router.post(
  "/distributors/edit/:id",
  isAuthenticated,
  distributorController.postEdit,
);

module.exports = router;
