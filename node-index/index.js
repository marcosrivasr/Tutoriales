const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const app        = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
   res.send('hola');
});
app.post('/', (req, res) =>{
   console.log(req.body);
   res.send('post');
});
app.listen(3000, () =>{
     console.log('server started');
})
module.exports = app;