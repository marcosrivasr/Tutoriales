const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'/frontend')));
app.use(cors());

const publickey = 'BPGqUbEHnALHDfJFkNBQyfpSI8EiRtXgj0tpEET0fmi7WAKquhCy_cBCnrE2kVAsLuDdyl6k7Cjb64rnkWmyniY';
const privatekey = '7me2BKe_c0oiFPJ3dq2yonPBY2YU7A3SD35y3UXni7Q';

webpush.setVapidDetails('mailto:marcosrivasr@gmail.com', publickey, privatekey);

//subscribe route
app.post('/subscribe', (req, res) =>{
    const subscription = req.body;

    res.status(200).json({})

    //payload
    const payload = JSON.stringify({title: 'push task', body: 'este es un mensaje'});

    webpush.sendNotification(subscription, payload)
    .catch(err => {
        console.error(err.message);
    });
});

app.listen(3002, () =>{
    console.log('servidor iniciado...');
});

