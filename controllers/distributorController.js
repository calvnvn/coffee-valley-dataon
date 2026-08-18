const db = require("../config/db");

// GET Distributor
exports.getDistributors = async (req, res) => {
  try {
    const [distributors] = await db.query(
      "SELECT dist_id, dist_name, city FROM distributors ORDER BY dist_name ASC",
    );

    res.render("distributors/index", {
      title: "Distributors - Coffee Valley",
      distributors,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// GET Add Distributor Form
exports.getAddForm = (req, res) => {
  res.render("distributors/add", { title: "Add Distributor" });
};

// POST Add Distributor
exports.postAdd = async (req, res) => {
  const { dist_name, city, state_region, country, phone, email } = req.body;
  try {
    await db.query(
      "INSERT INTO distributors (dist_name, city, state_region, country, phone, email) VALUES (?, ?, ?, ?, ?, ?)",
      [dist_name, city, state_region, country, phone, email],
    );
    res.redirect("/distributors");
  } catch (err) {
    console.error(err);
    res.status(500).send("Gagal menambah data");
  }
};

// GET Edit Distributor Form
exports.getEditForm = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM distributors WHERE dist_id = ?",
      [req.params.id],
    );
    if (rows.length === 0) return res.redirect("/distributors");
    res.render("distributors/edit", {
      title: "Edit Distributor",
      distributor: rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// POST Edit Distributor
exports.postEdit = async (req, res) => {
  const { dist_name, city, state_region, country, phone, email } = req.body;
  try {
    await db.query(
      "UPDATE distributors SET dist_name=?, city=?, state_region=?, country=?, phone=?, email=? WHERE dist_id=?",
      [dist_name, city, state_region, country, phone, email, req.params.id],
    );
    res.redirect("/distributors");
  } catch (err) {
    console.error(err);
    res.status(500).send("Gagal mengupdate data");
  }
};
