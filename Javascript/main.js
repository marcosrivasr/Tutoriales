
let foto = document.querySelector('#foto');
fetch('https://repositoriomrr.blob.core.windows.net/archivo/curso-node.jpg')
.then(response => response.blob())
.then(myBlob => {
    var objectURL = URL.createObjectURL(myBlob);
    foto.src = objectURL;
});