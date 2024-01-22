const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes.js");

// express app

const app = express();
const dbURI =
  "mongodb+srv://test-user:adyaan123@cluster0.eamyysx.mongodb.net/node-test?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log("err====>", err));
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About us" });
});

app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
