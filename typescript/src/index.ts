import express from 'express';

const app = express();

app.get('/', (req, res) =>{
    //req.name = 'Bob';
    res.send('Hola a todos');
});

app.post('/', (req, res) =>{
    //console.log(req.body.id);
    res.send('post');
});

app.listen(3000, () =>{
    console.log('server started...');
})

