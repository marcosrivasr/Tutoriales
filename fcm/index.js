const express = require('express');
const bodyParser = require('body-parser');
const firebase = require('firebase');


const app = express();
app.use(express.static(__dirname + '/public/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) =>{
});

app.post('/prueba', (req, res) =>{
  res.json({'response': 'success'});
});


app.listen(4000, () =>{
  console.log('listo');
});