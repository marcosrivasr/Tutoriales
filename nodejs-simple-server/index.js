const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());


app.get('/', (req, res) =>{
    res.send('Hola a todos');
});

app.get('/api', (req, res) =>{
    res.json({'code': 'success'});
});


app.listen(3000, () =>{
    console.log('servidor iniciado...');
});