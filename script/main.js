let num = 1;
function afficherContenu(event,filename) {
  
  event.preventDefault();
  var xhttp = new XMLHttpRequest(); // Création d'un objet XMLHttpRequest
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('form-content').innerHTML = this.responseText; // Insérer le contenu du fichier form.html dans le div
    }
  };
  
  xhttp.open('GET', filename, true); // Spécifier le type de requête et l'URL du fichier à récupérer
  xhttp.send(); // Envoyer la requête
  
  
}
const formulaire = document.querySelector("form");
const formContent=document.getElementById("form-content");
const nextButton = document.getElementById("next");

// changement du formulaire 

if (num==1){
  nextButton.addEventListener("click",(event)=>afficherContenu(event,"./page/morphologie.html"));
  console.log(num);
  nextButton.innerText="next";
  
  num++;
  
}if(num==2){
    nextButton.addEventListener("click",(event)=>afficherContenu(event,"./page/password.html"));
    
    
  console.log(num);
}


//envoyer 
const signUp = document.querySelector("input[type=submit]");
signUp.addEventListener(
  "click",
  event => {
    event.preventDefault();
    formulaire.innerHTML="<p>yes</p>"
  } )
