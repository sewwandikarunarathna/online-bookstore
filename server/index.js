const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json()); //passing all the json objects from the frontend
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: '',
    database: "bookrack",
});

app.post('/signup', (req, res) => {

    const username= req.body.username
    const password= req.body.password
    db.query('INSERT INTO users (username, password) VALUES (?,?)' ,
     [username,password],
      (err, result) => {
          console.log(err);
        });
});

app.post('/login', (req, res) => {

    const username= req.body.username
    const password= req.body.password
    db.query('SELECT *FROM users WHERE username= ? AND password = ?' ,
     [username,password],
      (err, result) => 
          {
              if (err) {
                  res.send({err: err});
              }

              if (result){
                res.send(result);
              } else {
                  res.send({message: "Wrong username/password combination"});
              }
        }
        );
});

app.listen(3001, () => {
    console.log("running server on port 3001");
});