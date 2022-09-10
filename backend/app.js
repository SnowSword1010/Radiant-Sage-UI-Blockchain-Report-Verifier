const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// In this version of express, for sending requests using form-data, we need to add multer on our server-side
const multer = require('multer');
// postgres
const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "reports"
})

client.connect();

client.query(`Select * from public.dim_queuemsgs order by messagedate desc limit 100;`, (err, res) => {
    if (!err) {
        // console.log(res.rows);
    }
    else {
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
app.use(cors())
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

app.post("/fetchRecord", (req, response) => {
    const reportID = req.body.reportID;
    const title = req.body.title;
    const message = req.body.reportMessage;
    console.log(reportID);
    console.log(title);
    console.log(message);
    let id_param = null;
    let title_param = null;
    let message_param = "";
    if (reportID) {
        id_param = reportID;
        console.log("Found report id");
    }
    if (title) {
        console.log("Found report title");
        title_param = title;
    }
    if (message) {
        message_param = String(message);
        console.log("Found report message");
    }
    // fetching records
    client.query(`SELECT * FROM public.dim_queuemsgs 
    WHERE ( (queuemsgsid=$1 OR $1 IS NULL) AND (title=$2 OR $2 IS NULL) AND (message::TEXT LIKE CONCAT('%', $3::TEXT, '%')))
    ORDER BY messagedate DESC LIMIT 5;`,
        [id_param, title_param, message_param],
        (err, res) => {
            if (!err) {
                response.json(res.rows);
            }
            else {
                console.log(err.message);
            }
            client.end;
        })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));