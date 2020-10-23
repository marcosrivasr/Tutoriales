if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const express = require('express');
const   multer = require('multer'), inMemoryStorage = multer.memoryStorage(), uploadStrategy = multer({ storage: inMemoryStorage }).single('image');

const config = require('../config');

const azureStorage = require('azure-storage');
const blobService = azureStorage.createBlobService();
const getStream = require('into-stream');
const containerName = 'archivo';

const getBlobName = originalName => {
    const identifier = Math.random().toString().replace(/0\./, ''); // remove "0." from start of string
    return `${identifier}-${originalName}`;
};


const router =  (req, res) =>{
    const
          blobName = getBlobName(req.file.originalname)
        , stream = getStream(req.file.buffer)
        , streamLength = req.file.buffer.length
    ;

    blobService.createBlockBlobFromStream(containerName, blobName, stream, streamLength, err => {

        if(err) {
            //handleError(err);
            res.send(err);
            console.log(err);
            return;
        }
/*
        res.render('success', { 
            message: 'File uploaded to Azure Blob storage.' 
        });
        */
       res.send('Archivo subido correctamente');
       console.log('file uploaded to Azure Blob Storage');
    });
};

module.exports = router;