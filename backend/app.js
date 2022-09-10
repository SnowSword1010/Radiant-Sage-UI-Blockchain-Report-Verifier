const express = require('express');
const bodyParser = require('body-parser');
// In this version of express, for sending requests using form-data, we need to add multer on our server-side
const multer  = require('multer');
// postgres
const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "reports"
})

client.connect();

client.query(`Select * from public.dim_queuemsgs order by messagedate desc limit 100;`, (err, res) => {
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end;
})

const app = express();
// multer config
const upload = multer();
app.use(upload.array());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const port = 5000;

app.get("/", (req, res) => {
    console.log("Hello world!");
})

app.post("/", (req, res) => {
    const reportID = req.body.reportID;
    const title = req.body.title;
    const message = req.body.message;
    console.log(reportID);
    console.log(title);
    console.log(message);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));