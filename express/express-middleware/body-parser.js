const qs = require("querystring");

const bodyParser = (req, res, next) => {
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });

  req.on("end", () => {
    const _data = qs.parse(data);
    console.log(_data, "end");
    req.body = _data;
    next();
  });
};

module.exports = bodyParser;
