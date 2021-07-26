// ************************Panier******************

// Récupération du storage,et des différents éléments du DOM
let panier = JSON.parse(localStorage.getItem('products'));
let tableauPanier = document.querySelector('.panier--elt');
let buttonConfirm = document.querySelector('.panier--confirm');
let buttonEmpt = document.querySelector('.panier--empt');

// Message d'erreur
let messEmpty = document.createElement('p');
messEmpty.innerHTML = `Votre panier est vide </br> <strong> <a href="index.html"> Revenir à la page d'acceuil </a> </strong>`;



// Vérification de la contenance du panier
if (panier == null || panier == undefined) {
    tableauPanier.appendChild(messEmpty);
} else {
    // *********Fin de la création des produits et du total**********
    // Création de différents produits
    for (i = 0; i < panier.length; i++) {

        // Création des produits en HTML
        let produits = document.createElement('div');
        produits.classList.add('product');
        tableauPanier.appendChild(produits);

        produits.innerHTML = `<div class="product">
                    <span>${panier[i].name}</span>
                    <span>${panier[i].option}</span>
                    <span>${panier[i].price} €</span>
                </div>`;
    }
    
    // Création du prix total
    let total = document.createElement('h3');
    total.classList.add('total');
    tableauPanier.appendChild(total);
    let totalPrice = 0;
    console.log (typeof totalPrice);
    // Boucle d'addition des prix
    for (i = 0; i < panier.length; i++) {

        let priceInt = parseInt(panier[i].price);
        totalPrice = totalPrice + priceInt;
    }
    // Injection de tout ça dans le HTML
    total.innerHTML = `Total : ${totalPrice} €`;
    // *********Fin de la création des produits et du total**********


    // **********Bouton confirmer************
    buttonConfirm.addEventListener('click', () => {
        let display = document.querySelector('form');
        display.style.display = "flex";
        console.log('c bon');
    }); 


    // *********Fin du bouton confirmer********
    buttonEmpt.addEventListener('click', () => {
        localStorage.clear();
        document.location.reload();
    })


}
