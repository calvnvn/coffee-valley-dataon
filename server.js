// server.js
require("dotenv").config();

const app = require("./app");
const db = require("./config/db");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server Coffee Valley running at http://localhost:${PORT}`);
});
