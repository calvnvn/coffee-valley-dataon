// controllers/uploadController.js
const db = require("../config/db");

// GET /upload
exports.getUploadPage = async (req, res) => {
  try {
    const [uploads] = await db.query(
      "SELECT * FROM uploads ORDER BY upload_id DESC",
    );

    res.render("upload", {
      title: "Upload Document - Coffee Valley",
      uploads,
    });
  } catch (err) {
    console.error("Error saat mengambil data uploads:", err);
    res.status(500).send("Server Error");
  }
};

// POST /upload
exports.postUpload = async (req, res) => {
  const { title, author } = req.body;

  const document_file = req.file ? req.file.filename : null;

  if (!document_file) {
    return res.status(400).send("Silakan pilih file dokumen untuk diupload!");
  }

  try {
    await db.query(
      "INSERT INTO uploads (title, document_file, author) VALUES (?, ?, ?)",
      [title, document_file, author],
    );

    res.redirect("/upload"); // refresh page
  } catch (err) {
    console.error("Error saat menyimpan upload:", err);
    res.status(500).send("Gagal mengupload dokumen ke database");
  }
};
