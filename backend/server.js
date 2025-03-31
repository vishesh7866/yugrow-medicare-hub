const express = require("express");
const multer = require("multer");
const { Pool } = require("pg");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const port = 5000;

// PostgreSQL Database Connection
const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "yugrow",
  password: process.env.DB_PASSWORD || "admin",
  port: process.env.DB_PORT || 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    console.error("❌ Database connection failed:", err.stack);
  } else {
    console.log("✅ Connected to PostgreSQL database: yugrow");
    release();
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Multer for File Uploads (Resumes)
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Job Application Submission API
app.post("/api/apply", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, position, coverLetter } = req.body;
    const resumePath = req.file ? `/uploads/${req.file.filename}` : null;

    console.log("\n📥 New job application received:", {
      name,
      email,
      phone,
      position,
      resumePath,
      coverLetter: coverLetter ? "Provided" : "Not provided",
    });

    const result = await pool.query(
      "INSERT INTO job_applications (name, email, phone, position, resume_path, cover_letter) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, email, phone, position, resumePath, coverLetter]
    );

    console.log("✅ Data inserted successfully into the database!");
    res.status(201).json({ success: true, message: "Application submitted!", data: result.rows[0] });
  } catch (error) {
    console.error("❌ Error inserting data:", error.message);
    res.status(500).json({ success: false, message: "Server error. Application not submitted." });
  }
});

// Contact Form Submission API
app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message } = req.body;
    const result = await pool.query(
      "INSERT INTO contact (first_name, last_name, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [firstName, lastName, email, phone, subject, message]
    );
    
    console.log("📩 New contact form submitted:", result.rows[0]);
    res.status(201).json({ success: true, message: "Contact form submitted successfully!", data: result.rows[0] });
  } catch (err) {
    console.error("❌ Error saving contact form:", err.message);
    res.status(500).json({ success: false, message: "Failed to submit contact form." });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});