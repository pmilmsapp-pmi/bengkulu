require("dotenv").config();
const path = require("path");
const express = require("express");
const helmet = require("helmet");

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

app.get("/api/konfigurasi-publik", (req, res) => {
  res.set("Cache-Control", "no-store");
  res.json({
    supabaseUrl: process.env.SUPABASE_URL || "",
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || "",
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
    cloudinaryUploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET || "",
    cloudinaryFolder: process.env.CLOUDINARY_FOLDER || "pmi-bengkulu",
    maxUploadMb: Number(process.env.MAX_UPLOAD_MB || 3)
  });
});

app.use(express.static(__dirname, { extensions: ["html"] }));
app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`PMI Kota Bengkulu: http://localhost:${port}`);
});