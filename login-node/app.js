if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./user');
const jwt = require('jsonwebtoken');
const middleware = require('./middleware');


const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cookieParser());

const mongo_uri = 'mongodb://dev:dev@localhost/todos';
mongoose.connect(mongo_uri, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});



app.post('/register', (req, res) =>{
    const {username, password} = req.body;

    const user = new User({username, password});

    user.save(err =>{
        if(err){
            res.status(500).send('Error NOT FOUND');
        }else{
            res.status(200).send('USUARIO REGISTRADO');
        }
    });
});

app.post('/authenticate', (req, res) =>{
    const {username, password} = req.body;

    User.findOne({username}, (err, user) =>{
        if(err){
            console.log('error');
        }else if(!user){
            console.log('no se encontró el usuario');
        }else{
            user.isCorrectPassword(password, (err, result) =>{
                const payload = {username};
                const token = jwt.sign(username, process.env.SECRET);
                
                res.cookie('token', token, {httpOnly: true}).sendStatus(200);
            
            });
        }
    });
});

app.get('/dashboard', middleware, (req, res) =>{
    res.send('Bienvenido');
});

app.listen(3000, () =>{
    console.log('Servidor iniciado...');
})