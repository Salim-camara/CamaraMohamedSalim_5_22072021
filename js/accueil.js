// *************************Animation navbar**********************

const navigation = document.querySelector('.top_bar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 600) {
        navigation.classList.add('top_bar_bg');
    }else {
        navigation.classList.remove('top_bar_bg');
    }
});



// ******************************API cards*************************


let url = 'http://localhost:3000/api/cameras';
let cards = document.querySelector('.container');
// Appel de l'API
fetch(url).then((response) =>
    response.json().then((data) => {
        console.log(data.length);
        for (let i = 0; i < 5; i++) {

            let card = document.createElement('div');
            card.classList.add('card');
            cards.appendChild(card);
            card.innerHTML = '<strong>bonjour</strong>';






        let saucisse = document.createElement('div');
        saucisse.id = "salut";
        
        let node = document.createTextNode('');

        saucisse.appendChild(node);

        cards.appendChild(saucisse);

        saucisse.innerHTML = "bonjour je suis moche";


    }
}
)
);








