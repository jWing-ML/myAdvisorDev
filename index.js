// constants for express routes, paths and db connection
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const pool = require("./db");
const passport = require("passport");

const multer  = require('multer')
const upload = multer({storage: multer.memoryStorage()})
const { parse } = require('./utilities/parser');

const port = process.env.PORT || 5000;

// app connection and resources
app.use(cors());
app.use(express.json());

// models
const Student = require("./models/Student");
const Staff = require("./models/Staff");
const Course = require("./models/Course");
const Career = require("./models/Career");
const Transcript = require("./models/Transcript");
const AdvisingWindow = require("./models/AdvisingWindow");
const ProgrammeCourse = require("./models/ProgrammeCourse");
const CareerCourse = require("./models/CareerCourse");

// routes
app.get("/", (req, res) => {
    res.status(200).send("Server running...");
});

app.use("/admin", require("./routes/admin"));

app.use("/student", require("./routes/student"));

app.use("/courses", require("./routes/courses"));

app.use("/careers", require("./routes/careers"));

app.use("/programmes", require("./routes/programmes"));

app.use("/transcript", require("./routes/transcript"));

app.use("/accounts", require("./routes/authorization"));

// Test route
app.post('/parseForm', upload.single('file'), async (req, res)=>{
    const { parsedText, ...data} = await parse(req.file.buffer);
    res.send(data);
  })

app.listen(port, () => {
    console.log(`Server is starting on port ${port}`);
});
