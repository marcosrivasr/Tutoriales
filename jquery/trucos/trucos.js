init();

function init(){
    randomOrder();
}

function randomOrder(){
    var arreglo = [1,2,3,4,5,6,7,8,9,10];

    console.log(arreglo.sort(function(){
        return Math.random() - 0.5;
    }));
}
