const express = require("express");
const { create } = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");

const app = express();

// http logger
app.use(morgan("combined"));

// set up template engine
const hbs = create({
    extname: ".hbs",
    defaultLayout: "main",
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

const port = process.env.PORT || 3000;

// routes
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/news", (req, res) => {
    res.render("news");
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
