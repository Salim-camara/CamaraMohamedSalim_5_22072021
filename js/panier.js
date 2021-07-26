// ************************Panier******************

// Récupération du storage,et des différents éléments du DOM
let panier = JSON.parse(localStorage.getItem('products'));
let tableauPanier = document.querySelector('.panier--elt');

// Message d'erreur
let messEmpty = document.createElement('p');
messEmpty.innerHTML = `Votre panier est vide </br> <strong> <a href="index.html"> Revenir à la page d'acceuil </a> </strong>`;



// Vérification de la contenance du panier
if (panier == null) {
    tableauPanier.appendChild(messEmpty);
} else {
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
    total.innerHTML = "zebi";
}
