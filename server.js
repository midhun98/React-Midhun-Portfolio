import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from Vite build
app.use(express.static("dist"));

// SPA fallback
app.get("*", (req, res) => {
    res.sendFile(path.resolve("dist/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
