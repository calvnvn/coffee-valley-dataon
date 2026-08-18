COFFEE VALLEY - TECHNICAL TEST DATAON
Tech Stack: Node.js, Express.js, EJS, MySQL

1. PRASYARAT
- Node.js (v18+)
- MySQL Server / MariaDB

2. CARA MENJALANKAN APLIKASI
1) Extract file project / clone repository.
2) Buka terminal di folder project, lalu install dependensi:
   npm install

3) Import database ke MySQL:
   Import file "database.sql" ke MySQL server.
   (Database name: coffee_valley)

4) Buat file .env:
   Salin file ".env.example" menjadi ".env", lalu sesuaikan DB_PORT, DB_USER, dan DB_PASSWORD sesuai settingan MySQL Anda.

5) Jalankan aplikasi:
   npm start
   (atau "npm run dev" untuk watch mode)

6) Buka di browser:
   http://localhost:3000

3. AKUN LOGIN TEST
- User ID : admin
- Password: admin123

(Atau)
- User ID : dataon
- Password: coffee2026

4. FITUR YANG TELAH SELESAI (Sesuai Soal)
[x] 1. Login (Session & Cookie authentication)
[x] 2. Header & Footer (Dynamic date: Today's Date: Month DD, YYYY)
[x] 3. Home (Bean of the Day dari gabungan tabel dailybean & bean)
[x] 4. Catalog (Menampilkan semua daftar kopi dari tabel bean)
[x] 5. Distributors (CRUD: Tampil daftar, Form Tambah, Form Edit)
[x] 6. Upload Document (Upload dokumen dengan Multer & simpan ke tabel uploads)

5. CATATAN ARSITEKTRUR
Project ini dibangun dengan arsitektur MVC (Model-View-Controller) yang bersih di Node.js.
Seluruh logika controller telah terpisah dengan baik sehingga siap dan mudah apabila dikembangkan lebih lanjut menjadi RESTful API untuk dikonsumsi frontend seperti React.js / Vue.js.
