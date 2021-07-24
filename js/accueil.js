// *************************Animation navbar**********************

const NAVIGATION = document.querySelector('.top_bar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 600) {
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
        console.log(data.length);
        for (let i = 0; i < data.length; i++) {

            // Ajout du point dans les prix
            console.log(data[i].price);
            let prix = data[i].price;
            console.log(prix.number.length);

            // Création de l'HTML
            let card = document.createElement('div');
            card.classList.add('card');
            cards.appendChild(card);
            card.innerHTML = `<span class="card--bg cardbg--${i}"></span>
            <div class="card__second">
                <h3 class="card__second--h3">${data[i].name}</h3>
                <span class="card__second--desc">Description: ${data[i].description}</span>
                <span class="card__second--prix">prix: ${data[i].price} euros</span>
            </div>
            <button class="card--button">Ajouter au panier</button>`;


            // Background-image
            let spanBg = document.querySelector(`.cardbg--${i}`);
            spanBg.style.backgroundImage = `url('${data[i].imageUrl}')`;
            


    }
}
)
);








