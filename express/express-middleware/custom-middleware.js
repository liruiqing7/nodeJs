const express = require("express");
const bodyParser = require("./body-parser");

const app = express();

app.use(bodyParser);

app.post("/add-body", (req, res) => {
  res.send(req.body);
});

app.listen(80, () => {
  console.log("server is running at http:localhost");
});
