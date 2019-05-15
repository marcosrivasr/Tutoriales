
const employeeData = [
    { id: "01", name: "Gopal K Varma", age: 35, email: "contact@tutorialspoint.com" },
    { id: "02", name: "Prasad", age: 24, email: "prasad@tutorialspoint.com" }
 ];

// IndexedDB
var indexedDB = window.indexedDB || 
                window.webkitIndexedDB || 
                window.mozIndexedDB || 
                window.OIndexedDB || 
                window.msIndexedDB;

var IDBTransaction =window.IDBTransaction || 
                    window.webkitIDBTransaction || 
                    window.OIDBTransaction || 
                    window.msIDBTransaction;

var dbVersion = 1.0;    // version de DB
var db;                 // objeto de bd para hacer consultas

// Create/open database
var request = indexedDB.open("DBEmployees", dbVersion);

request.onerror = function (event) {
    console.log("1. Error creating/accessing IndexedDB database");
};

request.onsuccess = function (event) {
    console.log("1. Success creating/accessing IndexedDB database");

    db = request.result;
};

request.onupgradeneeded = function(event){
    db = request.result;

    var objectStore = db.createObjectStore("employee", {keyPath: "id"});
            
    for (var i in employeeData) {
        objectStore.add(employeeData[i]);
    }
}


function add() {
    var request = db.transaction(["employee"], "readwrite")
                    .objectStore("employee")
                    .add({ id: "03", name: "prasad", age: 24, email: "prasad@tutorialspoint.com" });
    
    request.onsuccess = function(event) {
       alert("Prasad has been added to your database.");
    };
    
    request.onerror = function(event) {
       alert("Unable to add data\r\nPrasad is already exist in your database! ");
    }
}

function read() {
    var transaction = db.transaction(["employee"]);
    var objectStore = transaction.objectStore("employee");
    var request = objectStore.get("01");
    
    request.onerror = function(event) {
       alert("Unable to retrieve daa from database!");
    };
    
    request.onsuccess = function(event) {
       
       if(request.result) {
          alert("Name: " + request.result.name + ", Age: " + request.result.age + ", Email: " + request.result.email);
       } else {
          alert("Kenny couldn't be found in your database!");  
       }
    };
 }


/* var getImageFile = function () {
    // Create XHR
    var xhr = new XMLHttpRequest(), blob;

    xhr.open("GET", "github.png", true);
    // Set the responseType to blob
    xhr.responseType = "blob";

    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
            console.log("Image retrieved");
            
            // Blob as response
            blob = xhr.response;
            console.log("Blob:" + blob);

            // Put the received blob into IndexedDB
            putElephantInDb(blob);
        }
    }, false);
    // Send XHR
    xhr.send();
};

var putElephantInDb = function (blob) {
    console.log("Putting elephants in IndexedDB");

    // Open a transaction to the database
    var transaction = db.transaction(["elephants"], 'readwrite');

    // Put the blob into the dabase
    var put = transaction.objectStore("elephants").put(blob, "image");

    // Retrieve the file that was just stored
    transaction.objectStore("elephants").get("image").onsuccess = function (event) {
        var imgFile = event.target.result;
        console.log("Got elephant!" + imgFile);

        // Get window.URL object
        var URL = window.URL || window.webkitURL;

        // Create and revoke ObjectURL
        var imgURL = URL.createObjectURL(imgFile);

        // Set img src to ObjectURL
        var imgElephant = document.getElementById("imagen");
        imgElephant.setAttribute("src", imgURL);

        // Revoking ObjectURL
        //URL.revokeObjectURL(imgURL);
    };
}; */