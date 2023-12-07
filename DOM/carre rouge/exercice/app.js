/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/
document.addEventListener('DOMContentLoaded', function(event) {
    const button = document.querySelector('#moveDiv');
    const div = document.querySelector('.red');
    const container = document.querySelector('.container');
    const newDiv = document.createElement("div");
    newDiv.className = "newDiv";
    newDiv.style = null;
    container.appendChild(newDiv);
    newDiv.appendChild(div);
    button.addEventListener('click', function (event) {
        console.log(newDiv.style);
        //if(newDiv.style === "") {
            console.log("plop");
            newDiv.style.position = "relative";
            newDiv.style.display = "flex";
            newDiv.style.justifyContent = "flex-end";
            div.style.position = "relative";
        }
        console.log(container.style+" plop");
        /*if(container.style === "null") {
            container.style.display = "flex";
            container.style.justifyContent = "flex-end";
            div.style.position = "relative";
        } else if (div.style.position === "relative" && container.style.justifyContent === "flex-end") {
            container.style.alignItems = "flex-end";
        }*/
    });
    
    
    
});