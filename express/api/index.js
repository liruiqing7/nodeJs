const express = require("express");
const cors = require("cors");
const router = require("./router");

const app = express();

app.use(cors());

app.use("/api", router);

app.listen(80, () => {
  console.log("server is running at http:localhost");
});
