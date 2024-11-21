
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


for (let i=0; i<(tableau.length); i++) {
  
  tableau[i]===tableau[tableau.length-i-1] ? (affichage.innerText = valeur + " est un palindrome") :  (affichage.innerText = valeur + " n'est pas un palindrome")
}

}


)
