const path = require("path");
const express = require("express");

const publicPath = path.join(__dirname, "../public");
var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log(`server started on ..${PORT}`);
});
