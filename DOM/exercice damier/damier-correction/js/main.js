/**************************************************************/
/*                         Données                            */
/**************************************************************/
let bobby = {
  dom: null,
  positionX: 0,
  positionY: 0
};

let cat = {
  dom: null,
  positionX: 0,
  positionY: 0
};

/**************************************************************/
/*                        Fonctions                           */
/**************************************************************/
function clearCheckboard() {
  const elements = document.querySelectorAll('.js-cell');
  for(let i = 0; i < elements.length; i++) {
    elements[i].classList.remove('black');
    elements[i].classList.remove('disco-color1');
    elements[i].classList.remove('disco-color2');
    elements[i].classList.remove('disco-color3');
    elements[i].classList.remove('disco-color4');
    elements[i].classList.remove('disco-color5');
  }
}

function createDamier() {
  for(let row = 1; row <= 8; row++) {
    for(let col = 1; col <= 8; col++) {
      const cell = document.querySelector(
        '.js-row' + row + '.js-col' + col
      );// .js-row1.js-col1
      if ((row + col) % 2 === 0) {
        cell.classList.add('black');
      }
    }
  }
}

function createDiscoDanceFloor() {
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      let random = Math.ceil(Math.random() * 5);
      document.querySelector('.js-row' + i + '.js-col' + j)
        .classList.add('disco-color' + random);
    }
  }
}

function createLabyrinth() {
  const grid = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ];
  
  clearCheckboard();
  
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      const cell = document.querySelector('.js-row' + (i + 1) + '.js-col' + (j + 1));
      if(grid[i][j] === 1){
        cell.classList.add('black');
      }
    }
  }
}

function moveElement(element, direction) {
  switch(direction) {
    case 'ArrowUp':
      element.positionY -= 3;
      if (element.positionY < 0) {
        element.positionY = 0;
      }
      element.dom.style.marginTop = element.positionY + 'rem';
      break;
    case 'ArrowDown':
      element.positionY += 3;
      if (element.positionY > 3 * 7) {
        element.positionY = 3 * 7;
      }
      element.dom.style.marginTop = element.positionY + 'rem';
      break;
    case 'ArrowLeft':
      element.positionX -= 3;
      if (element.positionX < 0) {
        element.positionX = 0;
      }
      element.dom.style.marginLeft = element.positionX + 'rem';
      break;
    case 'ArrowRight':
      element.positionX += 3;
      if (element.positionX > 3 * 7) {
        element.positionX = 3 * 7;
      }
      element.dom.style.marginLeft = element.positionX + 'rem';
      break;
  }
}

function randomMoveElement(element) {
  let randomDirection = Math.ceil(Math.random() * 4);
  let direction = 'ArrowUp';
  switch (randomDirection) {
    case 1:
      direction = 'ArrowRight';
      break;
    case 2:
      direction = 'ArrowDown';
      break;
    case 3:
      direction = 'ArrowLeft';
      break;
    default:
      direction = 'ArrowUp';
  }
  moveElement(element, direction);
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
  createDiscoDanceFloor();
}

function onLabyrinth() {
  clearCheckboard();
  createLabyrinth();
}

function onCellMouseDown(event) {
  event.target.classList.remove('pull');
  event.target.classList.add('push');
}

function onCellMouseUp(event) {
  event.target.classList.remove('push');
  event.target.classList.add('pull');
}

function onCellDblClick(event) {
  event.target.classList.remove('push');
  event.target.classList.remove('pull');
  event.target.classList.add('boom');
}

function onKeyDown(event, element) {
  const arrows = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
  if (arrows.indexOf(event.key) > -1) {
    element.dom.classList.add('visible');
    moveElement(element, event.key);
  }
}
/**************************************************************/
/*                       Main Program                         */
/**************************************************************/
document.addEventListener('DOMContentLoaded', () => {

  console.log('Damier');

  // 1. Lorsque l'utilisateur clique sur le bouton "js-damier",
  // Afficher un damier dans la grille

  // TODO : Ajouter la classe .black sur les cases concernées
  document
    .querySelector('.js-damier')
    .addEventListener('click', onDamierClick);

  // 2. Lorsque l'utilisateur clique sur le bouton "js-disco",
  // Afficher un dancefloor de lumières dans la grille

  // TODO : Ajouter les classes .color1, ... .color5 aléatoirement
  document
    .querySelector('.js-disco')
    .addEventListener('click', onDiscoClick);

  // 3. Lorsque l'utilisateur clique sur le bouton "js-labyrinth",
  // Afficher le motif présent sur le bouton dans la grille

  // TODO : Ajouter la classe .black sur les cases concernées
  document
    .querySelector('.js-labyrinth')
    .addEventListener('click', onLabyrinth);

  // 4. Lorsque l'utilisateur enfonce le bouton de la souris sur une case (classe "js-cell"),
  // Afficher "push" sur fond jaune (utiliser la classe "push")
  // Puis, lorsqu'il relâche le bouton, 
  // afficher "pull" sur fond orange (utiliser la classe "pull")
  // Enfin, s'il double clique sur la case,
  // afficher "boom" sur fond rouge (utiliser la classe "boom")
  document.querySelectorAll('.js-cell').forEach((cell) => {
    cell.addEventListener('mousedown', onCellMouseDown);
    cell.addEventListener('mouseup', onCellMouseUp);
    cell.addEventListener('dblclick', onCellDblClick);
  })

  // 5. Lorsque l'utilisateur appuie sur une des 4 flèches du clavier,
  // Afficher bobby et le déplacer sur le grille (de case en case)

  // TODO : Ajouter la classe visible sur la div ayant l'id "bobby"
  // Le déplacer de case en case
  // dans la direction de la flèche appuyée
  bobby.dom = document.getElementById('bobby');
  document.addEventListener('keydown', (e) => onKeyDown(e, bobby));

  // 6. Chaque seconde, la div ayant l'id "cat" se déplace
  // sur les cases du plateau
  cat.dom = document.getElementById('cat');
  window.setInterval(randomMoveElement, 1000, cat);
});
