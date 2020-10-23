if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
  
const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const app        = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

const multer          = require('multer');
const inMemoryStorage = multer.memoryStorage();
const uploadStrategy  = multer({ storage: inMemoryStorage }).single('image');

const config = require('./config');

const azureStorage = require('azure-storage');
const blobService = azureStorage.createBlobService(); //jala de .env la variable
const containerName = 'archivo';

const getStream = require('into-stream');

const getBlobName = originalName => {
    const identifier = Math.random().toString().replace(/0\./, ''); // quita el 0. del inicio del string
    return `${identifier}-${originalName}`;
};


app.post('/upload', uploadStrategy,(req, res) =>{
    
    // nombre del archivo a subir
    const blobName = getBlobName(req.file.originalname);
    // obtenemos el stream de ese archivo
    const stream = getStream(req.file.buffer);
    // obtenemos la longitud de ese stream
    const streamLength = req.file.buffer.length;

    blobService.createBlockBlobFromStream(containerName, blobName, stream, streamLength, err => {

        if(err) {
            res.status(400).send('Error');
            return;
        }

       res.status(200).send('Archivo subido correctamente');
    });
});


app.get('/all', (req, res) =>{

    blobService.listBlobsSegmented(containerName, null, (err, data) => {

        if (err) {
          res.status(500);
        }else{
            let images = '';
            if (data.entries.length) {
                console.log(data);
                data.entries.forEach(element => {
                    images += `<img src="https://${config.getStorageAccountName()}.blob.core.windows.net/${containerName}/${element.name}" />`;
                });
            res.send(images);
          }
        }
    });
});


app.listen(3000, () =>{
    console.log('server started');
})

module.exports = app;


