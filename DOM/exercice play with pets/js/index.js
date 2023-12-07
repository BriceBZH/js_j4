/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Il s'agit de plusieurs petits exercices indépendants.

*/
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

document.addEventListener('DOMContentLoaded', () => {

    console.log('Play with pets');
    
    const modal =document.querySelector('#popup-help');
    const croix = document.querySelector('.js-close-button');
    const btnHelp = document.querySelector('#help-button');
    const button = document.querySelector('.js-race-chat-cover button'); //bouton clic me
    const nuage = document.querySelector('.js-race-chat-cover');
    const image = document.querySelector('.js-race-chat-cover img');
    const ulLi6 = document.querySelector('.js-race-chat-list li:nth-child(6)');
    const ulLiLast = document.querySelector('.js-race-chat-list li:last-child');
    const cov = document.querySelector('.js-main-cover');

    // TODO : Modale
    // Lorsqu'on clique sur le bouton d'aide (identifiant : help-button)
    // Ouvrir la modale (identifiant popup-help)
    // Lorsque'on clique sur la croix en haut à droite de la modale,
    // (elle porte la classe js-close-button)
    // Fermer la modale
    
    btnHelp.addEventListener('click', () => {
        modal.classList.add('visible');
    });
    croix.addEventListener('click', () => {
        modal.classList.remove('visible');
    });


    // TODO : Couverture
    // La faire défiler de gauche à droite avec les flèches
    // L'image est contenue dans un élément qui a la classe .js-main-cover
    document.addEventListener('keydown', function(event) {
        if(event.keyCode === 37) { //37 gauche 39 droite
            cov.style.transform = "translate(-200px)";
            cov.style.transition = "3s";
        }
        if(event.keyCode === 39) { //37 gauche 39 droite
            cov.style.transform = "translate(200px)";
            cov.style.transition = "3s";
        }
    });

    
    // TODO : Les races de chat
    // Afficher la bulle sur le chat au clic sur le bouton
    // L'élément est accessible via la classe .js-race-chat-cover::after
    button.addEventListener('click', () => {
        nuage.classList.add('visible');
    });


    // TODO : Les races de chat
    // Si on clique sur l'image, changer la photo
    // L'image est contenue dans un élément qui a la classe .js-race-chat-cover
    image.addEventListener('click', () => {
        console.log("test");
        image.src = "images/chat-mignon.png";
    });

    // TODO : Les races de chat
    // Dans la liste, Mettre en gras le Sacré de Birmanie et le Tigré
    // La liste est accessible via la classe .js-race-chat-list
    ulLiLast.style.fontWeight = "bold";
    ulLi6.style.fontWeight = "bold";

});
