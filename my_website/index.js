const express = require("express");
const app = express();
const port = process.env.PORT || 4000; // Use the port of your choice

// Serve static files like HTML, CSS, and JavaScript from a directory
app.use(express.static("public")); // Replace 'public' with the directory containing your HTML and CSS files

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // Replace 'index.html' with your main HTML file
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
