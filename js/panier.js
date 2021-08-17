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

submit.addEventListener('click', (e) => {

    // Suppression de l'erreur
    e.preventDefault();

    // Création du tableau d'objet de test
    const REGEX = [
        {
            element: '.nom',
            regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            error: '.p--nom',
        },
        {
            element: '.prenom',
            regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            error: '.p--prenom',
        },
        {
            element: '.ville',
            regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            error: '.p--ville',
        },
        {
            element: '.adresse',
            regex: /^(\d+) ?([A-Za-z](?= ))? (.*?) ([^ ]+?) ?((?<= )APT)? ?((?<= )\d*)?$/,
            error: '.p--adresse',
        },
        {
            element: '.mail',
            regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            error: '.p--mail',
        }
    ];

    // initialisation de la variable de validation
    let allTest = true;

    // $$$$$$$$$$$$$$$$$$$$$$---Création de la boucle de test de chaque champ---$$$$$$$$$$$$
    for (const rule of REGEX) {
        // récupération du champ
        const element = document.querySelector(rule.element).value;
        const err = document.querySelector(rule.error);
        // création de la condition
        if (rule.regex.test(element) === true) {
            err.style.display = 'none';
        } else {
            allTest = false;
            err.style.display = 'block';
        }
    }

    // Récupération des inputs
    let nom = document.querySelector('.nom').value;
    let prenom = document.querySelector('.prenom').value;
    let adresse = document.querySelector('.adresse').value;
    let ville = document.querySelector('.ville').value;
    let mail = document.querySelector('.mail').value;

    

    // Confirmation de la commande si tous les champs sont correctement remplis
    if (allTest === true) {

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
        API('/order', options)
            .then((data) => {
                // Récupération de la data, stockage de l'ID dans le localStorage
                localStorage.removeItem('orderId'); 
                SETLS('orderId', data.orderId);

                // Stockage du prix dans le LS
                SETLS('price', totalPrice);

                // Redirection vers la page finale
                console.log(data);
                NAVIGAT("confirm.html");
            })
            .catch((err) => {
                console.log(err);
            })

    } else {
        console.log('il y a une erreur');
    }

    

    
    
});