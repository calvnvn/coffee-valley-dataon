// config/db.js
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "root",
  database: "coffee_valley",
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
