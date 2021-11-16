const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

// router.get("/message", function (req, res) {
//   res.send("Messages list");
// });
router.delete("/message", function (req, res) {
  console.log(req.body);
  res.send("message deleted succesfully");
});
router.post("/message", function (req, res) {
  console.log(req.query);
  console.log(req.body);
  res.send("message " + req.query.id + " updated succesfully");
});
//acces to the headers
router.get("/headers", function (req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Our custom header",
  });
  res.send("Messages list");
});

app.listen(3000);
console.log("la aplicacion esta escuchando en http://localhost:3000");
