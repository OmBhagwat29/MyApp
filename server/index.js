const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

let uid = 0;
let uname = "";


const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));


app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));






const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "wecare",
})


app.post("/signup", (req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if(err){
            console.log(err);
        }
        db.query("INSERT INTO users (name, email, pass) VALUES(?,?, ?)",
        [username, email, hash], 
        (err, result) => {
           console.log(err);
           if(result){
               res.send({message: "sign up"})
           }
       })


    })

   
});






app.post("/login", (req, res) => {

    const email = req.body.emaillog;
    const password = req.body.passwordlog;

    db.query("SELECT * FROM users WHERE email = ?",
     email,
     (err, result) => {
        if(err){
            res.send({err: err})
        }


        if(result.length > 0){
            bcrypt.compare(password, result[0].pass, (error, response) => {

                if(response){
                    
                    
                    uid = result[0].id;
                    uname = result[0].name;
                    
                    res.send(result);

                }else{
                    res.send({ message: "Wrong Username or Password" });
                }
            });
        }else{
            res.send({ message: "User Dosen't Exists" });
        }
    })
})







app.post("/addcam", (req, res) => {

    const title = req.body.title;
    const description = req.body.desc;
    const link = req.body.link;
  
   
        db.query("INSERT INTO campaign (uid, title, description, link, uname) VALUES(?,?,?,?,?)",
        [uid, title, description, link, uname], 
        (err, result) => {
           console.log(err);
           res.send({ message: "Done" });
       });




   
});


app.get("/see", (req, res) => {
    const sqlSelect = "SELECT * FROM campaign";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    }) 
})







app.listen(3001, () => {
    console.log("Your app on runnimg on PORT 3001");
})