import express from "express";
import cors from "cors";

const app = express();

app.use(cors());          // ✅ autorise GitHub Pages
app.use(express.json());  // ✅ permet de lire req.body

app.get("/", (req, res) => {
  res.json({ message: "Todje API is running 🚀" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
