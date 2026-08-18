// app.js (express configuration)
const express = require("express");
const path = require("path");
const session = require("express-session");

const indexRoutes = require("./routes/indexRoutes");
const authRoutes = require("./routes/authRoutes");
const catalogRoutes = require("./routes/catalogRoutes");
const distributorRoutes = require("./routes/distributorRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

// Setup View Engine EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware Parsing Request Body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware Static Files
app.use(express.static(path.join(__dirname, "public")));

// Middleware Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2, // Sesi aktif selama 2 jam
    },
  }),
);

// Global Variable Middleware
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Routes
app.use("/", indexRoutes);
app.use("/", authRoutes);
app.use("/", catalogRoutes);
app.use("/", distributorRoutes);
app.use("/", uploadRoutes);

module.exports = app;
