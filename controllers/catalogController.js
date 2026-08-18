// controllers/catalogController.js
const db = require("../config/db");

// GET /catalog
exports.getCatalogPage = async (req, res) => {
  try {
    const query = `
            SELECT 
                bean_id, 
                bean_name, 
                description, 
                price_per_unit 
            FROM bean 
            ORDER BY bean_id ASC
        `;
    const [beans] = await db.query(query);

    // Render to views/catalog.ejs
    res.render("catalog", {
      title: "Catalog - Coffee Valley",
      beans,
    });
  } catch (error) {
    console.error("Error saat mengambil data catalog:", error);
    res.status(500).send("Server error");
  }
};
