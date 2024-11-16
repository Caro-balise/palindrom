
const titre = document.getElementById("title");
console.log(titre.innerText);

const affichage = document.getElementById("affichage");


let somme = 2 + 3;

console.log (somme);

const form = document.getElementById("formulaire");

let entree = document.getElementById("in");
console.log(entree);


form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log("formulaire envoyé");
  let valeur = entree.value;
console.log(valeur);

valeur = valeur.replace(/[^a-zA-Z]/g,'');

const tableau = valeur.split('');
console.log(tableau);


 function resultat(){
   tableau.pop();
tableau.shift();
  console.log(tableau)
  console.log(valeur + "est un palindrome")
   affichage.innerText = valeur + " est un palindrome";
   
}
  
  let retirerDernierElement = tableau.pop();
  let retirerPremierElement = tableau.shift();
  
  

if ( retirerDernierElement === retirerPremierElement && (tableau.length%2 == 0)) do {
  

  resultat();
 
}while(tableau.length > 0 ) 
  
  
  
  else if 
    
    ( retirerDernierElement === retirerPremierElement && (tableau.length%2 !== 0)) do {

resultat()
}while(tableau.length > 1 ) 

else
  
  {console.log(valeur + " n'est pas un palindrome")
    affichage.innerText = valeur + " n' est pas un palindrome";
  };})
 
