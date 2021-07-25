// ************************API**********************************************

// Récupération de l'ID de l'URL
let urlBrut = document.location.href;
let id = urlBrut.slice(35);

// URL à aller chercher
let url = `http://localhost:3000/api/cameras/${id}`;
let main = document.querySelector('.main');

// Appel de l'API
fetch(url).then((response) =>
    response.json().then((data) => {

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
            <form>
                <select class="card__second--select">
                    <option value="default">Choisir un objectif<option>
                </select>
            </form>
        </div>
        <button class="card--button">Ajouter au panier</button>`;

        // Création de la boucle des options
        for (let i = 0; i < data.lenses.length; i++) {

            // création de l'objet
            let select = document.querySelector('.card__second--select');
            let option = document.createElement('option');
            option.classList.add('option');
            option.value = `${i}`;
            select.appendChild(option);

            // Construction de l'option
            option.innerHTML = `${data.lenses[i]}`;
            select.appendChild(option);
        }


        // Obtention de l'index de la lentille
        let select = document.querySelector('.card__second--select');
        let index = -1;
        let err = document.createElement('p');
        err.classList.add('erreur');
        let button = document.querySelector('button');

        select.addEventListener('change', () => {
            err.remove();
            index = `${select.selectedIndex} `- 2;
        });
        // Ecoute du clique
        button.addEventListener('click', () => {
            console.log(index);
                // condition
                if (index == -2 || index == -1) {
                    let endCard = document.querySelector('.card__second');
                    err.innerHTML = 'Veuillez choisir un objectif';
                    endCard.appendChild(err);
                } else {
                    alert('ça marche!');
                }
            });
        
        
        // Background-image
        let spanBg = document.querySelector(`.card--bg`);
        spanBg.style.backgroundImage = `url('${data.imageUrl}')`;
    }));





// ***********************************Confirmation de la selection*******************************


