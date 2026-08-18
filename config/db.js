// config/db.js
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3307,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "coffee_valley",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const db = pool.promise();

// Connection test
pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Gagal terhubung ke MySQL:", err.message);
  } else {
    console.log("✅ Berhasil terhubung ke MySQL");
    connection.release();
  }
});

module.exports = db;
