const express = require("express");
const router = express.Router();
const db = require("../config/db");

function getBaseUrl(req) {
  // Render/Cloudflare sends x-forwarded-proto = https
  const proto = (req.headers["x-forwarded-proto"] || "https")
    .split(",")[0]
    .trim();
  return `${proto}://${req.get("host")}`;
}

function withImageUrl(req, row) {
  const r = { ...row };
  const baseUrl = getBaseUrl(req);

  if (r.image && typeof r.image === "string" && r.image.startsWith("/uploads/")) {
    r.image_url = `${baseUrl}${r.image}`; // ✅ always https on Render
  } else {
    r.image_url = r.image || null;
  }

  r.sold_out = Number(r.stock_qty || 0) <= 0;
  return r;
}

// ✅ PUBLIC products for Menu
router.get("/", (req, res) => {
  db.query(
    `SELECT * FROM products
     WHERE is_active=1
     ORDER BY id DESC`,
    (err, rows) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json((rows || []).map((r) => withImageUrl(req, r)));
    }
  );
});

module.exports = router;
