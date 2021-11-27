'use strict';
let json; //antwortet als json objekt
let request = new XMLHttpRequest(); // erstelt neuXMLHttpRequest 

request.onload = () => {
//nach dem server wird geprüft bekomme json objekt als antwort
if (request.status !== 200) return;
//wenn Browser JSON unterstützen
//über die eingenschaft "response" wird  der wert als JSON-Objekt ausgelesen
 //wenn Browser JSON nicht unterstützen convert json objekt mit (parse)
if(request.responseType === "json") {

json = request.response;
} else {
 
json = JSON.parse(request.responseText);
}
console.log(json);
};

request.open("GET","userlist.json");
//sicherheit dass die antwort vom Server als JSON 
request.responseType = "json";
//akzeptieren nur die Date als Json
request.setRequestHeader("Accept", "application/json");
request.send();//  Absenden der Anfrage


//loaded die seite//wenn die seite load declecrie  die button
document.addEventListener("DOMContentLoaded", function(e) {

let button = document.querySelector("#submit");
console.log( " this is"  + button);//add event  for die button mit click 

button.addEventListener('click', loginEventhandler);
});

function loginEventhandler()
{

checkUserpass();

}
//indiesem fn prüfen usernam und password mit (json Datei)
function checkUserpass(){
let inputusername = document.querySelector("#username").value;
console.log( inputusername);
let inputpassword = document.querySelector("#password").value;
console.log( inputpassword);
//users array untersuchen
for(let i =0 ; i< json.users.length ;i++){
    console.log("user" + i + " " +json.users[i].username);
    let jsonUsername=json.users[i].username;
    let jsonPassword=json.users[i].password;
//str.localeCompare('text') vergleicht den String mit dem angegebenen String 
if((jsonUsername.localeCompare(inputusername)== 0) 
&& (jsonPassword.localeCompare(inputpassword) == 0) ){
    alert("login erfolgreich ");
   localStorage.setItem("name", inputusername);
    window.location = "index.html"; 

}};
     alert("login nicht erfolgreich ");

}



