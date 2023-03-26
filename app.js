const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router_data = require("./routes/students");
app.use(bodyParser.json());
app.use(router_data);

app.listen(9090, () => {
  console.log("server is started at 9090");
});
