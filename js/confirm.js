// *****************Retour à l'accueil*************
let button = document.querySelector('button');
button.addEventListener('click', () => {
    // Retour à l'accueil
    document.location.href="index.html";

    // Suppression du panier
    localStorage.clear();
});

