

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

// Go up one directory level to reach the root of your project
const rootDir = path.resolve(__dirname);

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// Serve static assets for React apps
app.use("/", express.static(path.join(rootDir, "frontend/dist")));
app.use("/admin", express.static(path.join(rootDir, "admin/dist")));



// Fallback route for user React app
app.get("/*", (req, res) => {
  res.sendFile(path.join(rootDir, "frontend/dist/index.html"));
});

// Fallback route for admin React app
app.get("/admin/*", (req, res) => {
  res.sendFile(path.join(rootDir, "admin/dist/index.html"));
});



// Catch-all route for unmatched requests
app.all("*", (req, res) => {
  res.status(404).send("Not Found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});






