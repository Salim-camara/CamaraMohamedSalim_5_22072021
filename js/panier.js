// ************************Panier******************

// Récupération du storage,et des différents éléments du DOM
let panier = JSON.parse(localStorage.getItem('products'));
let tableauPanier = document.querySelector('.panier--elt');
let buttonConfirm = document.querySelector('.panier--confirm');
let buttonEmpt = document.querySelector('.panier--empt');

// Message d'erreur
let messEmpty = document.createElement('p');
messEmpty.style.textAlign = 'center';
messEmpty.innerHTML = `Votre panier est vide </br> <strong> <a href="index.html"> Revenir à la page d'acceuil </a> </strong>`;

// Prix total
let totalPrice = 0;



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
        document.querySelector('#scroll').scrollIntoView();
    }); 


    // *********Fin du bouton confirmer********
    buttonEmpt.addEventListener('click', () => {
        localStorage.clear();
        document.location.reload();
    })


}



// ****************************Formulaire*****************


// Récupération du bouton
let submit = document.querySelector('.submit');

submit.addEventListener('click', () => {

    // Suppression de l'erreur
    event.preventDefault();
    // Récupération des inputs
    let nom = document.querySelector('.nom').value;
    let prenom = document.querySelector('.prenom').value;
    let adresse = document.querySelector('.adresse').value;
    let ville = document.querySelector('.ville').value;
    let mail = document.querySelector('.mail').value;

    // Récupération de P pour afficher les messages d'erreurs
    let errNom = document.querySelector('.p--nom');
    let errPrenom = document.querySelector('.p--prenom');
    let errAdresse = document.querySelector('.p--adresse');
    let errVille = document.querySelector('.p--ville');
    let errMail = document.querySelector('.p--mail');

    // Initialisation des variables pour tester si tous les formulaires sont bon
    let testNom = null;
    let testPrenom = null;
    let testAdresse = null;
    let testVille = null;
    let testMail = null;

    // $$$$$$$$$$$$$$$$$$$$$$---test de chaque champ du formulaire---$$$$$$$$$$$$
    // NOM
    if (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(nom)) {
        errNom.innerHTML = '';
        testNom = true;
    } else {
        errNom.innerHTML = 'Veuillez saisir un nom valide';
        errNom.style.color = 'red';
    }

    // PRENOM
    if (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(prenom)) {
        errPrenom.innerHTML = '';
        testPrenom = true;
    } else {
        errPrenom.innerHTML = 'Veuillez saisir un prénom valide';
        errPrenom.style.color = 'red';
    }

    // ADRESSE
    if (/^\d+\s[A-z]+\s[A-z]+/.test(adresse)) {
        errAdresse.innerHTML = '';
        testAdresse = true;
    } else {
        errAdresse.innerHTML = 'Veuillez saisir un adresse valide';
        errAdresse.style.color = 'red';
    }

    // VILLE
    if (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(ville)) {
        errVille.innerHTML = '';
        testVille = true;
    } else {
        errVille.innerHTML = 'Veuillez saisir une ville valide';
        errVille.style.color = 'red';
    }

    // MAIL
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(mail)) {
        errMail.innerHTML = '';
        testMail = true;
    } else {
        errMail.innerHTML = 'Veuillez saisir une adresse mail valide';
        errMail.style.color = 'red';
    }

    // Confirmation de la commande si tous les champs sont correctement remplis
    if (testNom, testPrenom, testAdresse, testVille, testMail == true) {

        // Récupération de L'id des produits
        let produits = [];
        for (i = 0; i < panier.length; i++) {
            produits.push(panier[i].id);
        };

        // Création de l'objet à envoyer
        const order = {
            contact: {
            "firstName": nom,
            "lastName": prenom,
            "city": ville,
            "address": adresse,
            "email": mail,
            },
            products: produits,
        };

        // Création de l'option, pour plus de lisibilité
        const options = {
            method: "POST",
            body: JSON.stringify(order),
            headers: { "Content-Type": "application/json" },
        };  

        // Envoie vers le server avec la méthode fetch
        fetch('http://localhost:3000/api/cameras/order', options)
        .then((response) => response.json())
            .then((data) => {
                // Récupération de la data, stockage de l'ID dans le localStorage
                localStorage.removeItem('orderId'); 
                localStorage.setItem('orderId', data.orderId);

                // Stockage du prix dans le LS
                localStorage.setItem('price', totalPrice);

                // Redirection vers la page finale
                document.location.href="confirm.html";
            })
            .catch((err) => {
                console.log(err);
            })

    } else {
        console.log('il y a une erreur');
    }

    

    
    
});