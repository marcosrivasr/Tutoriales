async function showData(){
    const json = await getData();

    console.log(`Nombre del canal: ${json.nombre}`);
    console.log(`Tipo de canal: ${json.category}`);
}
function getData(){
    return fetch('http://localhost:3000/api')
    .then(response => response.json())
    .then(json => json);
}

showData();