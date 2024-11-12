const express = require("express");
const sql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sp",
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
}); 
