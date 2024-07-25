const express = require("express");
const studentRouter = require("./routes/student");
const facultyRouter = require("./routes/faculty");
const signinRouter = require("./routes/signin");
const hodRouter = require("./routes/hod");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3001", credentials: true }));

app.use("/api/signin", signinRouter);
app.use("/api/", studentRouter);
app.use("/api/faculty", facultyRouter);
app.use("/api/hod", hodRouter);

// Custom 404 page
app.use((req, res) => {
  res.status(404);
});

// Custom 500 page
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500);
});

module.exports = app;
