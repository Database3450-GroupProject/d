const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
const app = express();
app.use(cors())
app.use(express.json())

const csi = mysql.createPool({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'csi'
})

// TEST
app.get("/", (req, res) => {
    res.json("backend")
})

app.get('/agent', (req, res) => {
    csi.query('SELECT * FROM AGENT', (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send("error");
        } else {
            res.json(results);
        }
    })
})

app.get('/home', (req, res) => {
    csi.query('SELECT * FROM HOMES', (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send("error");
        } else {
            res.json(results);
        }
    })
})

app.listen(9000, () => {
    console.log("Connected to backend.");
})