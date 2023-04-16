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

app.get('/owner', (req, res) => {
    csi.query('SELECT * FROM OWNER', (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send("error");
        } else {
            res.json(results);
        }
    })
})

// app.post('/add-ownership', (req, res) => {
//     const { ownershipID, startDate, endDate, mortgageRate, amountPaid, mortgageAmount, homeId } = req.body;

//     csi.query('INSERT INTO OWNERSHIP (ownershipID, startDate, endDate, mortgageRate, amountPaid, mortgageAmount, homeId) VALUES (?, ?, ?, ?, ?, ?, ?)', [ownershipID, startDate, endDate, mortgageRate, amountPaid, mortgageAmount, homeId], (error, results) => {
//         if (error) {
//             console.error(error);
//             res.status(500).send("error");
//         } else {
//             res.json("Ownership added successfully");
//         }
//     });
// });


// app.post('/add-owner', (req, res) => {
//     const { ownerID, fname, lname, SSN, numOfDependents, income, age, profession, citizen, creditScore, ownershipID } = req.body;

//     csi.query('INSERT INTO OWNER (ownerID, fname, lname, SSN, numOfDependents, income, age, profession, citizen, creditScore, ownershipID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [ownerID, fname, lname, SSN, numOfDependents, income, age, profession, citizen, creditScore, ownershipID], (error, results) => {
//         if (error) {
//             console.error(error);
//             res.status(500).send("error");
//         } else {
//             res.json("Owner added successfully");
//         }
//     });
// });

app.post('/add-ownership', (req, res) => {
    const { ownershipID, startDate, endDate, mortgageRate, amountPaid, mortgageAmount, homeId } = req.body;

    csi.query('INSERT INTO OWNERSHIP (ownershipID, startDate, endDate, mortgageRate, amountPaid, mortgageAmount, homeId) VALUES (?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE startDate=?, endDate=?, mortgageRate=?, amountPaid=?, mortgageAmount=?, homeId=?', [ownershipID, startDate, endDate, mortgageRate, amountPaid, mortgageAmount, homeId, startDate, endDate, mortgageRate, amountPaid, mortgageAmount, homeId], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send("error");
        } else {
            res.json("Ownership added/updated successfully");
        }
    });
});

app.post('/add-owner', (req, res) => {
    const { ownerID, fname, lname, SSN, numOfDependents, income, age, profession, citizen, creditScore, ownershipID } = req.body;

    // Check if the ownerID already exists in the table
    csi.query('SELECT * FROM OWNER WHERE ownerID = ?', [ownerID], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send("error");
        } else if (results.length > 0) {
            // If the ownerID exists, update the existing record
            csi.query('UPDATE OWNER SET fname = ?, lname = ?, SSN = ?, numOfDependents = ?, income = ?, age = ?, profession = ?, citizen = ?, creditScore = ?, ownershipID = ? WHERE ownerID = ?', [fname, lname, SSN, numOfDependents, income, age, profession, citizen, creditScore, ownershipID, ownerID], (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).send("error");
                } else {
                    res.json("Owner updated successfully");
                }
            });
        } else {
            // If the ownerID does not exist, insert a new record
            csi.query('INSERT INTO OWNER (ownerID, fname, lname, SSN, numOfDependents, income, age, profession, citizen, creditScore, ownershipID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [ownerID, fname, lname, SSN, numOfDependents, income, age, profession, citizen, creditScore, ownershipID], (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).send("error");
                } else {
                    res.json("Owner added successfully");
                }
            });
        }
    });
});


app.post('/add-agent', (req, res) => {
    const { agentID, fname, lname, agencyID } = req.body;

    csi.query('INSERT INTO AGENT (agentID, fname, lname, agencyID) VALUES (?, ?, ?, ?)', [agentID, fname, lname, agencyID], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send("error");
        } else {
            res.json("Agent added successfully");
        }
    })
})

app.get('/home-by-owner/:ownerID', (req, res) => {
    const ownerID = req.params.ownerID;
    const sqlQuery = `SELECT * FROM HOMES
                    JOIN OWNERSHIP ON HOMES.HomeId = OWNERSHIP.homeId
                    JOIN OWNER ON OWNERSHIP.ownershipID = OWNER.ownershipID
                    WHERE OWNER.ownerID = ?`;
    connection.query(sqlQuery, [ownerID], (error, results) => {
        if (error) {
            console.error('Error executing query: ' + error.stack);
            res.status(500).send('Error executing query');
            return;
        }
        res.status(200).json(results);
    });
});

app.listen(9000, () => {
    console.log("Connected to backend.");
})