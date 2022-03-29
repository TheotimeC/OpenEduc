const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const mysql = require('mysql');



const db = mysql.createPool({

    host: "localhost",
    user: "etienne",
    password: "q75D9TxWj4z!*ug#%78AyGK3T",
    database: "open_educ",
})



app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.listen(3001, () => { 

    console.log("runnig on port 3001");
});



// app.get("/api", (req, res) => {

//     res.send("je mange bien bien");
//     // const sqlReq = "INSERT INTO ecole (text, test) VALUES ('pierre', 'courage')";
//     // db.query(sqlReq, (err, result) => {  

//     // })
// })


app.get("/api/get", (req, res)=> {

    const sqlSelect = "SELECT * FROM ecole";
    db.query(sqlSelect, (err, result) => {
    
        res.send(result)

    });

})



app.post("/api/insert", (req, res)=> {


    const test = req.body.test
    const text = req.body.text


    const sqlReq = "INSERT INTO ecole (text, test) VALUES (?, ?)";
    db.query(sqlReq, [test, text], (err, result) => {
    
        console.log(err)

    });
})

