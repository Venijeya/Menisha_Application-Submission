const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const PORT = 4000;


// routes
var testAPIRouter = require("./routes/testAPI");
var UserRouter = require("./routes/Users");
//var UserrrrRouter = require("./routes/Recruiters");
var RecruiterRouter =require("./routes/Recruiters");
var JobRouter=require("./routes/Jobs");
var ApplicationRouter=require("./routes/application");
var ApplicantRouter=require("./routes/Applicant");

app.use('/image',express.static(path.join(__dirname, 'public/image')));
app.use('/cv',express.static(path.join(__dirname, 'public/cv')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mongo db connection
mongoose.connect('mongodb://127.0.0.1:27017/job', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log('Database Connected');
}).catch( (err) => {
    console.log('Database Not Connected' + err);
});

// setup API endpoints
app.use("/testAPI", testAPIRouter);
app.use("/user", UserRouter);
//app.use("/router", UserrrrRouter);
app.use("/recruiter", RecruiterRouter);
app.use("/job",JobRouter);
app.use("/application",ApplicationRouter)
app.use("/applicant",ApplicantRouter)

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
