import express from 'express';
import router from './router';
const app = express();

app.get('/', router);

app.listen(4000, () =>{
    console.log('Servidor iniciado...');
});
