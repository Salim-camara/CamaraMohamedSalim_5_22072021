// ************************API**********************************************

// Récupération de l'ID de l'URL
let urlBrut = document.location.href;
console.log(urlBrut);
let id = urlBrut.slice(35);
console.log(id);

// URL à aller chercher
let url = `http://localhost:3000/api/cameras/${id}`;
let main = document.querySelector('.main');

// Appel de l'API
fetch(url).then((response) =>
    response.json().then((data) => {
        console.log(data);

        // Suppression des 0 à la fin des prix
        let prix = `${data.price}`.slice(0, -2);
    
        // Construction de l'HTML
        let card = document.createElement('div');
        card.classList.add('card');
        main.appendChild(card);
        card.innerHTML = `<span class="card--bg"></span>
        <div class="card__second">
            <h3 class="card__second--h3">${data.name}</h3>
            <span class="card__second--desc"><strong>Description</strong> : ${data.description}</span>
            <span class="card__second--prix"><strong>Prix</strong> : ${prix}<strong>€</strong></span>
            <select class="card__second--select">
                <option selected>Choisir un objectif<option>
            </select>
        </div>
        <button class="card--button">Ajouter au panier</button>`;

        // Création de la boucle des options
        for (let i = 0; i < data.lenses.length; i++) {

            // création de l'objet
            let select = document.querySelector('.card__second--select');
            let option = document.createElement('option');
            option.classList.add('option');
            select.appendChild(option);

            // Construction de l'option
            option.innerHTML = `${data.lenses[i]}`;
            select.appendChild(option);
        }

        // Background-image
        let spanBg = document.querySelector(`.card--bg`);
        spanBg.style.backgroundImage = `url('${data.imageUrl}')`;
    }));
