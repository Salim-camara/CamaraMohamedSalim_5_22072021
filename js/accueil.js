// *************************Animation navbar**********************

const NAVIGATION = document.querySelector('.top_bar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 500) {
        NAVIGATION.classList.add('top_bar_bg');
    }else {
        NAVIGATION.classList.remove('top_bar_bg');
    }
});



// ******************************API cards*************************


let url = 'http://localhost:3000/api/cameras';
let cards = document.querySelector('.container');

// Appel de l'API
fetch(url).then((response) =>
    response.json().then((data) => {

        // Ajout de la boucle
        for (let i = 0; i < data.length; i++) {

            // Suppression des 0 à la fin des prix
            let prix = `${data[i].price}`.slice(0, -2);


            // Création de l'HTML
            let card = document.createElement('div');
            card.classList.add('card');
            cards.appendChild(card);
            card.innerHTML = `<span class="card--bg cardbg--${i}"></span>
            <div class="card__second">
                <h3 class="card__second--h3">${data[i].name}</h3>
                <span class="card__second--desc"><strong>Description</strong> : ${data[i].description}</span>
                <span class="card__second--prix"><strong>prix</strong> : ${prix} <strong>€</strong></span>
            </div>
            <button class="card--button">Ajouter au panier</button>`;


            // Background-image
            let spanBg = document.querySelector(`.cardbg--${i}`);
            spanBg.style.backgroundImage = `url('${data[i].imageUrl}')`; }
}
)
// En cas de problème
).catch((erreur) => {
    let messErreur = document.createElement('p');
    messErreur.classList.add('erreur');
    cards.appendChild(messErreur);
    messErreur.innerHTML = `Oupsss...</br></br> Une erreur s'est produite au niveau du serveur.</br></br> Nature du problème -> ${erreur}`;
});









