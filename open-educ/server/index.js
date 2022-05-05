const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const mysql = require('mysql2');



const db = mysql.createPool({

    host: "localhost",
    user: "root",
    password: "q75D9TxWj4z!*ug#%78AyGK3T",
    database: "openeduc",
})



app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.listen(3001, () => { 

    console.log("runnig on port 3001");
});



app.post('/api/login', (req, res)=> {

    const login = req.body.login;
    const psw = req.body.psw;
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("SELECT token FROM user WHERE iduser = ? AND password = ?",
    [login,psw],(err, result) => {
        
        if(err){
            res.send({err: err});
            res.status(200).json
        }

        if (result.length > 0){
            res.send(result)
            res.status(200).json

        }else{
            res.send({message : "Login ou Mot de Passe incorrect !"})
            
        }
        
    })
} ) 

app.post('/api/roleVerifie', (req, res)=> {

    const token = req.body.UserToken;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("SELECT role FROM user WHERE token = ?",
    [token],(err, result) => {
        
        if(err){
            res.send({err: err});
            res.status(200).json
        }

        if (result.length > 0){
            res.send(result)
            res.status(200).json
        }else{
            res.send({message : `Token non reconnu : ${token}`})
            res.status(200).json
            
            
        }
        
    })
} ) 



app.get('/api/etab', (req, res)=> {

    db.query("SELECT idetablissement, nom, adresse FROM etablissement",
    (err, result) => {
        
        if(err){
            res.send({err: err});
        }

        if (result.length > 0){
            res.send(result)

        }
        
    })
} ) 


app.get('/api/corres', (req, res)=> {

    db.query("SELECT * FROM personne",
    (err, result) => {
        
        if(err){
            res.send({err: err});z
        }

        if (result.length > 0){
            res.send(result)

        }
        
    })
} ) 

app.get('/api/desc', (req, res)=> {

    db.query("SELECT * FROM etablissement ",
    (err, result) => {
        
        if(err){
            res.send({err: err});
        }

        if (result.length > 0){
            res.send(result)

        }
        
    })
} ) 

app.get('/api/classe', (req, res)=> {

    db.query("SELECT * FROM classe",
    (err, result) => {
        
        if(err){
            res.send({err: err});
        }

        if (result.length > 0){
            res.send(result)

        }
        
    })
} ) 


app.post('/api/insert', (req, res)=> {

    db.query("SELECT * FROM classe",
    (err, result) => {
        
        if(err){
            res.send({err: err});
        }

        if (result.length > 0){
            res.send(result)

        }
        
    })
} ) 

/*
 app.post("http://localhost:3001/api/insert", (req, res) => {

      const sqlReq = "INSERT INTO user (userid, password, role) VALUES (76, 'pierre', 1)";
      db.query(sqlReq, (err, result) => {  
        console.log(err);
        console.log(result);
      })
 })


app.post("/api/get", (req, res)=> {
    const sqlSelect = "SELECT * FROM etablissements";
    db.query(sqlSelect, (err, result) => {
    
        res.send(result)
        console.log(err);

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
*/
