document.addEventListener('DOMContentLoaded', function(event) {
        
    // Sélectionner un élément par son ID
    // document.getElementById('test');
    
    // Sélectionner le premier élément avec le sélecteur
    // document.querySelector('.test');
    
    // Sélectionner tous les éléments avec le sélecteur
    // document.querySelectorAll('a');
    
    // Appliquer un style sur un élément
    /*
    const element = document.querySelector('#test');
    
    element.classList.add('yellow');
    element.classList.remove('yellow');
    
    element.classList.toggle('yellow');// Switche entre add et remove
    */
    
    const element = document.querySelector('#test');
    
    const button = document.querySelector('.button');
    button.addEventListener('click', function (event) {
        element.classList.toggle('yellow');
    });
    
    
    function mouseMoveListener(event) {
        console.log(event);
        
        // Enlève le listener, ainsi mousemove est exécuté une seule fois
        document.removeEventListener('mousemove', mouseMoveListener);
    }
    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('keydown', function(event) {
        console.log('down');
        console.log(event);
    });
    document.addEventListener('keyup', function(event) {
        console.log('up');
        console.log(event);
    });
});
