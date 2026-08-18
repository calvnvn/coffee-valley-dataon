// controllers/homeController.js
const db = require("../config/db");

exports.getHomePage = async (req, res) => {
  try {
    const query = `
      SELECT
        b.bean_id,
        b.bean_name,
        b.description,
        b.price_per_unit AS regular_price,
        d.sale_price
      FROM dailybean d
      JOIN bean b ON d.bean_id = b.bean_id
      WHERE d.sale_price >= 0.00
      LIMIT 1
      `;

    const [rows] = await db.query(query);

    const beanOfTheDay = rows.length > 0 ? rows[0] : null;

    res.render("index", {
      title: "Home - Coffee Valley",
      beanOfTheDay,
    });
  } catch (error) {
    console.error("Error fetching bean of the day:", error);
    res.status(500).send("Terjadi kesalahan pada server");
  }
};
