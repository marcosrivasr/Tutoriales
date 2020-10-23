const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('./public'));

app.get('/api', (req, res) =>{
    res.status(200).json({
        nombre: 'vidamrr',
        category: 'technology'
    });
});


app.listen(3000, () =>{
    console.log('server iniciado...');
});

