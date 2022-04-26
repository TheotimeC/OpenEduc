const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const mysql = require('mysql');
const port = 3001;


const db = mysql.createPool({

    host: "localhost",
    user: "etienne",
    password: "q75D9TxWj4z!*ug#%78AyGK3T",
    database: "open_educ",
})

//________________________________
//
//
//      Utilitaire 
//
//_________________________________


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

//Connexion au port 3001 

app.listen(port, () => { 

    console.log(`Serveur connecter au port : ${port}`);
});



app.post('/api/register', (req, res)=> {

    const login = req.body.login;
    const psw = req.body.psw;

    db.query("INSERT INTO user (login, password) VALUES (?,?)",
    [login,psw],(err, result) => {

        res.send(err)
    })
} ) 




app.post('/api/login', (req, res)=> {

    const login = req.body.login;
    const psw = req.body.psw;

    db.query("SELECT * FROM user WHERE login = ? AND password = ?",
    [login,psw],
    (err, result) => {
        
        if(err){
            res.send({err: err});
        }

        if (result.length > 0){
            res.send(result)

        }else{
            res.send({message : "Login ou Mot de Passe incorrect !"})
            
        }
        
    })
} ) 






// app.get("/api", (req, res) => {

//     res.send("je mange bien bien");
//     // const sqlReq = "INSERT INTO ecole (text, test) VALUES ('pierre', 'courage')";
//     // db.query(sqlReq, (err, result) => {  

//     // })
// })


// app.post("/api/insert", (req, res)=> {


//     const test = req.body.test
//     const text = req.body.text


//     const sqlReq = "INSERT INTO ecole (text, test) VALUES (?, ?)";
//     db.query(sqlReq, [test, text], (err, result) => {
    
//         console.log(err)

//     });
// })



// app.get("/api/get", (req, res)=> {

//     const sqlSelect = "SELECT * FROM ecole";
//     db.query(sqlSelect, (err, result) => {
    
//         res.send(result)

//     });

// })