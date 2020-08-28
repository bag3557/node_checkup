const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const shopRoutes = require("./routes/shop");
const adminData = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //   res.status(404).send("<h1>PAGE NOT FOUND!!!</h1>");
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(5000);
