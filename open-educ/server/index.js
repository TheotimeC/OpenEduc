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
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("SELECT token FROM user WHERE login = ? AND password = ?",
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
            res.status(200).json
            
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
    res.header('Access-Control-Allow-Methods', 'GET, POST');
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
    res.header('Access-Control-Allow-Methods', 'GET, POST');
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
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("SELECT * FROM etablissement ",
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
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("SELECT * FROM classe",
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


app.post('/api/insert', (req, res)=> {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("SELECT * FROM classe",
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

app.post('/api/info/Etablissement', (req, res)=> {

    const idEtablissement = req.body.idEtablissement;
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("SELECT nom, adresse, tel, mail FROM etablissement WHERE idetablissement = ?",
    [idEtablissement],(err, result) => {
        
        if(err){
            res.send({err: err});
            res.status(200).json
        }

        if (result.length > 0){
            res.send(result)
            res.status(200).json

        }else{
            res.send({message : `L'id de l'établissement est inconnus : ${idEtablissement}`})
            res.status(200).json
        }
        
    })
} ) 

app.post('/api/info/Classe', (req, res)=> {

    const idEtablissement = req.body.idEtablissement;
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("SELECT total_eleve, niveau, nom FROM classe WHERE idetablissement = ?",
    [idEtablissement],(err, result) => {
        
        if(err){
            res.send({err: err});
            res.status(200).json
        }

        if (result.length > 0){
            res.send(result)
            res.status(200).json

        }else{
            res.send({message : `L'id de l'établissement est inconnus : ${idEtablissement}`})
            res.status(200).json
        }
        
    })
} ) 


app.post('/api/info/Personne', (req, res)=> {

    const idEtablissement = req.body.idEtablissement;
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("SELECT nom, prenom, mail, tel, fonction, civilité FROM personne WHERE idetablissement = ?",
    [idEtablissement],(err, result) => {
        
        if(err){
            res.send({err: err});
            res.status(200).json
        }

        if (result.length > 0){
            res.send(result)
            res.status(200).json

        }else{
            res.send({message : `L'id de l'établissement est inconnus : ${idEtablissement}`})
            res.status(200).json
        }
        
    })
} ) 

app.post('/api/update/Etablissement', (req, res)=> {

    const idEtablissement = req.body.idEtablissement;
    const saiNomEtablissement = req.body.saiNomEtablissement

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("UPDATE etablissement SET nom = ? WHERE idetablissement = ?",
    [saiNomEtablissement, idEtablissement],(err, result) => {
        
        if(err){
            res.send({err: err});
            res.status(200).json
        }

        if (result.length > 0){
            res.send(result)
            res.status(200).json

        }else{
            res.send({message : `L'id de l'établissement est inconnus : ${idEtablissement}`})
            res.status(200).json
        }

   
        
    })
} )



app.post('/api/update/Classe', (req, res)=> {

    const idEtablissement = req.body.idEtablissement;
    const NomClasse = req.body.nomEcole
    const saiNomClasse = req.body.saiNomEcole;
    const saiNiveau = req.body.Niveau
    const saiTotalEleve = req.body.Effectif;
    

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("UPDATE classe SET nom = ?, niveau = ?, total_eleve = ? WHERE idetablissement = ? AND nom = ?",
    [saiNomClasse, saiNiveau, saiTotalEleve, idEtablissement,NomClasse],(err, result) => {
        
        if(err){
            res.send({err: err});
            res.status(200).json
        }

        if (result.length > 0){
            res.send(result)
            res.status(200).json

        }else{
            res.send({message : `L'id de l'établissement est inconnus : ${idEtablissement}`})
            res.status(200).json
        }

   
        
    })
} )


app.post('/api/update/Personne', (req, res)=> {

    const idEtablissement = req.body.idEtablissement;
    const mail = req.body.mail
    const saiMail = req.body.saiMail;
    const saiNom = req.body.saiNom
    const saiPrenom = req.body.saiPrenom;
    const saiTel = req.body.saiTel
    

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("UPDATE personne SET nom = ?, prenom = ?, mail = ?, tel = ? WHERE idetablissement = ? AND mail = ?",
    [saiNom, saiPrenom, saiMail, saiTel, idEtablissement, mail],(err, result) => {
        
        if(err){
            res.send({err: err});
            res.status(200).json
        }

        if (result.length > 0){
            res.send(result)
            res.status(200).json

        }else{
            res.send({message : `L'id de l'établissement est inconnus : ${idEtablissement}`})
            res.status(200).json
        }
        
    })
} )

app.post('/api/ajouter/Classe', (req, res)=> {

    const idEtablissement = req.body.idEtablissement;
    const NomClasse = req.body.nomEcole
    const saiNomClasse = req.body.saiNomEcole;
    const saiNiveau = req.body.Niveau
    const saiTotalEleve = req.body.Effectif;
    

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("INSERT INTO classe (idetablissement, total_eleve, niveau, nom) VALUES(?, ?, ?, ?)",
    [idEtablissement,saiTotalEleve,saiNiveau, saiNomClasse],(err, result) => {
        
        if(err){
            res.send({err: err});
            res.status(200).json
        }

        if (result.length > 0){
            res.send(result)
            res.status(200).json

        }else{
            res.send({message : `L'id de l'établissement est inconnus : ${idEtablissement}`})
            res.status(200).json
        }
        
    })
} )

app.post('/api/Supprimer/Classe', (req, res)=> {

    const idEtablissement = req.body.idEtablissement;
    const NomClasse = req.body.nomEcole;
    

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("DELETE FROM classe WHERE idetablissement = ? AND nom = ?",
    [idEtablissement,NomClasse],(err, result) => {
        
        if(err){
            res.send({err: err});
            res.status(200).json
        }

        if (result.length > 0){
            res.send(result)
            res.status(200).json

        }else{
            res.send({message : `L'id de l'établissement est inconnus : ${idEtablissement}`})
            res.status(200).json
        }
        
    })
} )


app.post('/api/Ajouter/Personne', (req, res)=> {

    const idEtablissement = req.body.idEtablissement;
    const saiMail = req.body.saiMail;
    const saiNom = req.body.saiNom
    const saiPrenom = req.body.saiPrenom;
    const saiTel = req.body.saiTel
    

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("INSERT INTO personne (idetablissement, nom, prenom, mail, tel) VALUES (?, ?, ?, ?, ?)",
    [idEtablissement, saiNom, saiPrenom, saiMail, saiTel],(err, result) => {
        
        if(err){
            res.send({err: err});
            res.status(200).json
        }

        if (result.length > 0){
            res.send(result)
            res.status(200).json

        }else{
            res.send({message : `L'id de l'établissement est inconnus : ${idEtablissement}`})
            res.status(200).json
        }
        
    })
} )

app.post('/api/Supprimer/Personne', (req, res)=> {

    const idEtablissement = req.body.idEtablissement;
    const Mail = req.body.mail;

    

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.query("DELETE FROM personne WHERE idetablissement = ? AND mail = ?",
    [idEtablissement, Mail],(err, result) => {
        
        if(err){
            res.send({err: err});
            res.status(200).json
        }

        if (result.length > 0){
            res.send(result)
            res.status(200).json

        }else{
            res.send({message : `L'id de l'établissement est inconnus : ${idEtablissement}`})
            res.status(200).json
        }
        
    })
} )

// app.post('/api/update/Etablissement', (req, res)=> {

//     const idEtablissement = req.body.idEtablissement;
//     const saiNomEtablissement = req.body.saiNomEtablissement
//     const nomEtablissement = req.body.nomEtablissement;

//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET, POST');
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     db.query("UPDATE etablissement SET nom = REPLACE(nom, ?, ? WHERE idetablissement = ?",
//     [idEtablissement, nomEtablissement],(err, result) => {
        
//         if(err){
//             res.send({err: err});
//             res.status(200).json
//         }

//         if (result.length > 0){
//             res.send(result)
//             res.status(200).json

//         }else{
//             res.send({message : `L'id de l'établissement est inconnus : ${idEtablissement}`})
//             res.status(200).json
//         }
        
//     })
// } )





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
