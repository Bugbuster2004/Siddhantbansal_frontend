const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
