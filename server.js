const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const __dirname1 = path.resolve();
require('dotenv').config();


app.get("/fetch", (req, res) => {
    const { url } = req.query
    if (!url) {
        return res.json({ message: "Url is required" })
    }
    fetch(`${url}${process.env.API_KEY}`)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: "No response", err }))
})


app.use(express.static(path.join(__dirname1, "frontend", "build")));
app.get('*', ((req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", 'index.html'));
}));



app.listen(port, () => {
    console.log("App is listening at port ", port);
});