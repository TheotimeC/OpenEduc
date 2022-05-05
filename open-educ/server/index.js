const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const mysql = require('mysql2');



const db = mysql.createPool({

    host: "localhost",
    user: "etienne",
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

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("SELECT idetablissement, nom, adresse FROM etablissement",
    (err, result) => {
        
        if(err){
            res.send({err: err});
            res.status(200).json
        }

        if (result.length > 0){
            res.send(result)
            res.status(200).json

        }
        
    })
} ) 


app.get('/api/corres', (req, res)=> {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("SELECT * FROM personne",
    (err, result) => {
        
        if(err){
            res.send({err: err});
            res.status(200).json
        }

        if (result.length > 0){
            res.send(result)
            res.status(200).json

        }
        
    })
} ) 

app.get('/api/desc', (req, res)=> {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("SELECT * FROM etablissement WHERE idetablissement=1",
    (err, result) => {
        
        if(err){
            res.send({err: err});
            res.status(200).json
        }

        if (result.length > 0){
            res.send(result)
            res.status(200).json

        }
        
    })
} ) 

app.get('/api/classe', (req, res)=> {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("SELECT * FROM classe WHERE idetablissement=1",
    (err, result) => {
        
        if(err){
            res.send({err: err});
            res.status(200).json
        }

        if (result.length > 0){
            res.send(result)
            res.status(200).json

        }
        
    })
} ) 
