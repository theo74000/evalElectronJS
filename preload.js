
const { dialog } = require('electron').remote;

let nom, Prenom, Email, Q1, Q2, Q3, Q4, Q5, info;
let compteur = 5;


window.addEventListener('DOMContentLoaded', () =>{

  document.getElementById('btnSave').addEventListener('click', evt => {
    nom = document.getElementById('Nom').value;
    Prenom = document.getElementById('Prenom').value;
    Email = document.getElementById('Email').value;

    //info = {"Nom" : nom, "Prenom" : Prenom, "Email" : Email};

    //writeJson();
 
  })


  document.getElementById('btnQ1').addEventListener('click', evt => {

    if(document.getElementById("c").checked == true)  
    {
        Q1 = document.getElementById("c").value;
    }  
    else if(document.getElementById("c--").checked == true){
        Q1 = document.getElementById("c--").value;
    } 
    else if(document.getElementById("css").checked == true){
        Q1 = document.getElementById("css").value;
    }  

    if(Q1 == "c--"){
      compteur++
    }

    //writeJson();

    
  })
  


  document.getElementById('btnQ2').addEventListener('click', evt => {
    if(document.getElementById("python").checked == true)  
    {
        Q2 = document.getElementById("python").value;
    }  
    else if(document.getElementById("cobra").checked == true){
        Q2 = document.getElementById("cobra").value;
    } 
    else if(document.getElementById("vipere").checked == true){
        Q2 = document.getElementById("vipere").value;
    }  

    if(Q2 == "python"){
      compteur++
    }

    //writeJson();
  })
  




  document.getElementById('btnQ3').addEventListener('click', evt => {
    if(document.getElementById("1985").checked == true)  
    {
        Q3 = document.getElementById("1985").value;
    }  
    else if(document.getElementById("1995").checked == true){
        Q3 = document.getElementById("1995").value;
    } 
    else if(document.getElementById("2005").checked == true){
        Q3 = document.getElementById("2005").value;
    }  

    if(Q3 == "1995"){
      compteur++
    }

    //writeJson();
  })



  document.getElementById('btnQ4').addEventListener('click', evt => {
    if(document.getElementById("Brendan").checked == true)  
    {
        Q4 = document.getElementById("Brendan").value;
    }  
    else if(document.getElementById("Steve").checked == true){
        Q4 = document.getElementById("Steve").value;
    } 
    else if(document.getElementById("Bill").checked == true){
        Q4 = document.getElementById("Bill").value;
    }  

    if(Q4 == "Brendan"){
      compteur++
    }

    //writeJson();
  })


  document.getElementById('btnQ5').addEventListener('click', evt => {
    if(document.getElementById("oui").checked == true)  
    {
        Q5 = document.getElementById("oui").value;
    }  
    else if(document.getElementById("non").checked == true){
        Q5 = document.getElementById("non").value;
    }  
    
    if(Q5 == "non"){
      compteur++
    }
    //writeJson();
  })

  

  document.getElementById('btnCertif').addEventListener('click', evt => {
    console.log(compteur)
    if(compteur == 5){
      pdf();
    }
  })




  //function writeJson(){
  //  info = {"Nom" : nom, "Prenom" : Prenom, "Email" : Email, "Question 1" : Q1, "Question 2" : Q2, "Question 3" : Q3, "Question 4" : Q4, "Question 5" : Q5};
  //
  //  let json = JSON.stringify(info);
  //  let fs = require('fs');
  //  fs.writeFile('file.json', json, err => {
  //    if (err) {
  //        console.log('Error writing file', err)
  //    } else {
  //        console.log('Successfully wrote file')
  //    }
  //  })
  //}


  function pdf(){
    var getImageFromUrl = function(url, callback) {
      var img = new Image();

      img.onError = function() {
          alert('Cannot load image: "'+url+'"');
      };
      img.onload = function() {
          callback(img);
      };
      img.src = url;
    }

    var createPDF = function(imgData) {
      var doc = new jsPDF();

      doc.addImage(imgData, 'JPEG', 10, 10, 50, 50, 'monkey');
      doc.addImage('monkey', 70, 10, 100, 120); 
      doc.output('datauri');
    }

    getImageFromUrl('img/image.png', createPDF);
  }



})
