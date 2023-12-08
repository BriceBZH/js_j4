/**************************************************************/
/*                        Consignes                           */
/**************************************************************/
/*

L'objectif de cet exercice est de pratiquer les événements JS
sur les éléments HTML, ainsi que les fonctions.

Il s'agit de plusieurs petits exercices indépendants.
Pour chacun d'eux, il est attendu d'implémenter le code selon
une méthode permettant d'avoir un code lisible et compréhensible.

1. Dans la partie "Main Program",
on y trouve uniquement les points d'entrée de chaque exercice.
Un point d'entrée est le point de départ de toute procédure de traitement.
Dans ces exercices, il d'agira des événements sur des éléments HTML.

Exemple :
document.querySelector('.js-damier').addEventListener('click', onDamierClick);

2. Dans la partie "Event listeners", on trouvera les fonctions qui seront
appelées lorsque l'utilisateur effectuera des actions sur les éléments HTML.
Ces fonctions contiendront l'algorithme de traitement de l'événement.

Exemple :
function onDamierClick() {
  clearCheckboard();
  createDamier();
}

3. Dans la partie "Fonctions", on trouvera les fonctions qui seront utilisées
pour le traitement des événements. Elles seront appelées par
les "Event listeners".

Exemple :
function clearCheckboard() {
  ...
}
function createDamier() {
  ...
}

*/
/**************************************************************/
/*                         Données                            */
/**************************************************************/

// Les variables globales sont déclarées ici.
// Uniquement si nécéssaire.
let bobby = {
  dom: null,
  positionX: 0,
  positionY: 0
}

let cat = {
  dom: null,
  positionX: 0,
  positionY: 0
}


/**************************************************************/
/*                        Fonctions                           */
/**************************************************************/

function clearCheckboard() {
  for(let r=1; r<9; r++) { //row
    for(let c=1; c<9; c++) { //col
      let row = ".js-row"+r;
      let col = ".js-col"+c;
      let place = row+""+col;
      //supr color
      for(col = 1; col<6; col++) { //on test les 5 possibilités
        document.querySelector(place).classList.remove('disco-color'+col);
      }
      //supr black
      document.querySelector(place).classList.remove('black');
    }
  }
}
function createDamier() {
  for(let r=1; r<9; r++) { //row
    for(let c=1; c<9; c++) { //col
      if((r + c) % 2 === 0) {
        let row = ".js-row"+r;
        let col = ".js-col"+c;
        let place = row+""+col;
        document.querySelector(place).classList.add('black');
      }
    }
  }
}

function createDisco () {
  for(let r=1; r<9; r++) { //row
    for(let c=1; c<9; c++) { //col
      let colorRand = Math.round(Math.random() * 5);
      let row = ".js-row"+r;
      let col = ".js-col"+c;
      let newClass = "disco-color"+colorRand;
      let place = row+""+col;
      document.querySelector(place).classList.add(newClass);
    }
  }
}

function createLaby () {
  const matrix =
  [
    [1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1]
  ];
  for(let r = 0; r < 8; r++) {
    for(let c = 0; c < 8; c++) {
      if(matrix[r][c] === 1) {
        let row = r + 1;
        let col = c + 1;
        let rowBis = ".js-row"+row;
        let colBis = ".js-col"+col;
        let place = rowBis+""+colBis;
        document.querySelector(place).classList.add('black');
      }
    }
  }
}

/**************************************************************/
/*                      Event listeners                       */
/**************************************************************/

function onDamierClick() {
  clearCheckboard();
  createDamier();
}

function onDiscoClick() {
  clearCheckboard();
  createDisco();
}

function onLaby() {
  clearCheckboard();
  createLaby();
}

/**************************************************************/
/*                       Main Program                         */
/**************************************************************/

// IMPORTANT Rappel : Pas de traitement ici,
// uniquement les déclarations des Event Listener.

document.addEventListener('DOMContentLoaded', () => {

  console.log('Damier');
  
  

  // 1. Lorsque l'utilisateur clique sur le bouton "js-damier",
  // Afficher un damier dans la grille

  // TIP : Ajouter la classe .black sur les cases concernées
  document.querySelector('.js-damier').addEventListener('click', onDamierClick);


  // 2. Lorsque l'utilisateur clique sur le bouton "js-disco",
  // Afficher un dancefloor de lumières dans la grille

  // TIP : Ajouter les classes .color1, ... .color5 aléatoirement
  document.querySelector('.js-disco').addEventListener('click', onDiscoClick);


  // 3. Lorsque l'utilisateur clique sur le bouton "js-labyrinth",
  // Afficher le motif présent sur le bouton dans la grille

  // TIP : Ajouter la classe .black sur les cases concernées
  document.querySelector('.js-labyrinth').addEventListener('click', onLaby);


  // 4. Lorsque l'utilisateur enfonce le bouton de la souris sur une case (classe "js-cell"),
  // Afficher "push" sur fond jaune (utiliser la classe "push")
  // Puis, lorsqu'il relâche le bouton, 
  // afficher "pull" sur fond orange (utiliser la classe "pull")
  // Enfin, s'il double clique sur la case,
  // afficher "boom" sur fond rouge (utiliser la classe "boom")
  document.addEventListener('mousedown', function(event) {
    event.target.classList.add('push');
  });
  document.addEventListener('mouseup', function(event) {
    event.target.classList.add('pull');
  });
  document.addEventListener('dblclick', function(event) {
    event.target.classList.add('boom');
  });

  // 5. Lorsque l'utilisateur appuie sur une des 4 flèches du clavier,
  // Afficher bobby et le déplacer sur le grille (de case en case)

  // TIP : Ajouter la classe visible sur la div ayant l'id "bobby"
  // Le déplacer de case en case
  // dans la direction de la flèche appuyée
  document.addEventListener('keydown', function(event) {
    let i = 0;
    if(event.keyCode === 37 || event.keyCode === 39 || event.keyCode === 38 || event.keyCode === 40) { //37 gauche 39 droite 38 haut 40 bas
      i += 1;
      let deplace = 3 * i;
      console.log(deplace);
      let bobby = document.querySelector('#bobby')
      bobby.classList.add('visible');
      if(event.keyCode === 37) {
        let text = "translate(-"+deplace+"em)";
        bobby.style.transform = text;
        bobby.style.transition = "3s";
      } else if(event.keyCode === 38) {
        let text = "translateY(-"+deplace+"em)";
        bobby.style.transform = text;
        bobby.style.transition = "3s";
      } else if(event.keyCode === 39) {
        let text = "translate("+deplace+"em)";
        bobby.style.transform = text;
        bobby.style.transition = "3s";
      } else if(event.keyCode === 40) {
        let text = "translateY("+deplace+"em)";
        bobby.style.transform = text;
        bobby.style.transition = "3s";
      }
    }
  });


  // 6. Chaque seconde, un chat se déplace aléatoirement sur les cases du plateau

  // TIP : Ajouter un timer qui déplace la div ayant l'id "cat" d'une case
  // dans une direction aléatoire toutes les secondes

});
