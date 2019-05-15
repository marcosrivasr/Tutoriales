if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
}

const bcargar = document.querySelector('#cargar');
const bguardar = document.querySelector('#guardar');

bcargar.addEventListener('click', e =>{
  console.log('Cargar');
  read();
});

bguardar.addEventListener('click', e =>{
  console.log('Guardar');
  add();
});