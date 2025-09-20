const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const cors = require("cors");
const __dirname1 = path.resolve();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.post("/fetch", async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ message: "Url is required" });
  }
  try {
    const parsed = await fetch(`${url}${process.env.API_KEY}`);
    const data = await parsed.json();
    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "No response", err });
  }
});

app.use(express.static(path.join(__dirname1, "frontend", "build")));
app.get("*", (req, res) => {
  return res.sendFile(
    path.resolve(__dirname1, "frontend", "build", "index.html")
  );
});

app.listen(port, () => {
  console.log("App is listening at port ", port);
});
