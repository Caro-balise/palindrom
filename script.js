
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
let tableau = valeur.split('');
console.log(tableau);




for (let i=0; i<(tableau.length); i++) {
 var lettreGauche = tableau[i];
// console.log(lettreGauche);
 var lettreDroite = tableau[tableau.length-i-1]
//   console.log(lettreDroite);

    do {
   
   
nouveauTableau(tableau);

   
} while(i < tableau.length-1 )



   }


 
}
)
  
  
  function nouveauTableau(myArray) {
    let valeur = entree.value;
  let premierElement = myArray.shift();
    let dernierElement = myArray.pop();
    console.log(myArray)
    // return myArray;
    if (myArray[myArray.length-1] !== myArray[0]){
      console.log("pas palindrome")
      affichage.innerText = valeur + " n'est pas un palindrome"}

  if (affichage.innerText !== valeur + " n'est pas un palindrome"){affichage.innerText = valeur + " est un palindrome"}}
  
