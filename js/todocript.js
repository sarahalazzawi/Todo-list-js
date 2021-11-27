'use strict';
 {
    // cookies
  document.querySelector("#myInput").addEventListener("click",checkCookie);

  function createCookie(sname,svalue,expiresdays) {
    let date = new Date();
    date.setTime(date.getTime() + (expiresdays*24*60*60*1000));
    let expires  = "expires=" +  date.toGMTString();
  
  document.cookie = sname + "=" + svalue + ";" + expires + ";path=/"; } 
  //readcookie
  function readcookie(sname) {
    let name = sname + "=";
   let ca = document.cookie.split(';');
   console.log(ca.length);
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1,c.length);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function checkCookie() {
   let user=readcookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
        
         createCookie("username", user, 30);
           console.log(createCookie("username", user, 30)) ;
       }
    }
  }
 // wenn die seite loaded  get name in input executer
  document.addEventListener("DOMContentLoaded", function(e) {
    let name =localStorage.getItem("name");
    console.log( "Storage" +name);
  document.querySelector("#myInput").value = name;
  });

  let x = document.querySelector("#myInput");
  console.log(x);

// ausgelagerte Funktion des Event-Listeners
  document.querySelector("#add_task").addEventListener("click", addTask);

  function addTask() {

    // HTML-Element td erzeugen für Produktnamen

    const taskValue = document.createElement("td");
    // zuweisen des Inhaltes vom Input-Feld mit Klasse name an TD als textContent
    taskValue.textContent = document.querySelector("#form #Taskname").value;
    console.log(taskValue);
    
    const timeValue = document.createElement("td");
    timeValue.textContent = document.querySelector("#form  #appt-time").value;

    const dateValue = document.createElement("td");
    dateValue.textContent = document.querySelector("#form  #date").value;


    const radioValue = document.createElement("td");
   radioValue.textContent =document.querySelector('input[name="task"]:checked').value;

    //td for remove mit event
    const removeTd = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove_task");
    removeButton.setAttribute("class", "fa fa-trash");
    removeButton.addEventListener("click", (event) => {
      event.target.parentNode.parentNode.remove();

     });

     removeTd.appendChild(removeButton);

    // mit appendChild Dom-Teilbaum erzeugen
    const taskTr = document.createElement("tr");
    // übergebenes Element wird als letztes Kind hinzugefügt
    
    taskTr.appendChild(taskValue);
    taskTr.appendChild(timeValue);
    taskTr.appendChild(dateValue);
    taskTr.appendChild(removeTd);
    taskTr.appendChild(radioValue);
    
    // Tabellenzeile im tbody-Tag der Tabelle einfügen

    document.querySelector("#taskstable > tbody").appendChild(taskTr);
 
  clearfields();
   
  
  }

  //edit in th remove
  const removeHeadTh = document.createElement("th");
  const taskstateHeadTh = document.createElement("th");
  removeHeadTh.textContent = "Remove";
  taskstateHeadTh .textContent ="taskstate";
  document.querySelector("#taskstable > thead > tr").appendChild(removeHeadTh);
  document.querySelector("#taskstable > thead > tr").appendChild(taskstateHeadTh);
  
    //clear die inhalt alle inputfield nach event add
  function clearfields() {
    let tasknameinput = document.querySelector("#Taskname");
    console.log(tasknameinput.value);
    tasknameinput.value = "";
    console.log(tasknameinput);

    let timeinput = document.querySelector("#appt-time");
    console.log(timeinput.value);
    timeinput.value = "";

    let dateinput = document.querySelector("#date");
    console.log(dateinput.value);
    dateinput.value = "";
   
  }

  
  // Allclear button
  document.querySelector("#clear-table").addEventListener("click", removeAll);

  function removeAll() {
    let tabre = document.getElementsByTagName("tbody");
    console.log(tabre)
    tabre[0].innerHTML = "";
  }

  	 //save
     document.querySelector("#save").addEventListener("click" ,save);
     
     function save() {
      let tabletask = document.querySelector("#taskstable");
       let trs = tabletask.getElementsByTagName('tr');  //  all Table rows
       
       let values = [];  // wird ein 2D-Array aller Werte sein
      
         // save values
         console.log( values);
       for (let i = 0; i < trs.length; i++) {
         // loop durch all rows,jede wird ein Eintrag in Werten sein
        let trValues = [];
        let tds = trs[i].getElementsByTagName('td');  //all zelle in row
        
         for (let j = 0; j < tds.length; j++) {
           trValues[j] = tds[j].textContent;
           
           //Holen Sie sich den Wert der Zelle
          

         }
           values[i] = trValues;
            console.log((trValues)); 
            
            console.log(localStorage);
           // localStorage.setItem("key", value);
           localStorage.setItem(values[i][0] ,trValues);

    }
 };
  

 };