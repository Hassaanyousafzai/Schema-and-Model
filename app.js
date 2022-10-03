var express = require("express");
const StudentSchema = require("./studentSchema");
var app = express();
var port = 5000;

app.use(express.json());

const router = express.Router();
// create
router.post("/create", async (req, res) => {
  const newStudent = new StudentSchema(req.body);
  try {
    await newStudent.save();
    res.status(201).send(newStudent);
    res.json({ message: req.body });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/", (req, res) => {
  res.send("Hello my name is Hassaan");
});

app.listen(port, () => {
  console.log(`It's working on Port: ${port}`);
});
