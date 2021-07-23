// *************************Animation navbar

const navigation = document.querySelector('.top_bar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 600) {
        navigation.classList.add('top_bar_bg');
    }else {
        navigation.classList.remove('top_bar_bg');
    }
});


// ******************************API cards

let url = 'http://localhost:3000/api/cameras';
let cards = document.querySelector('.container');

fetch(url).then((response) =>
    response.json().then((data) => {
        console.log(data);

        cards.innerHTML = `<div class="card">
        <span class="card--bg"></span>
        <div class="card__second">
            <h3 class="card__second--h3">${data[0].name}</h3>
            <span class="card__second--desc">Description: Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consecte</span>
            <span class="card__second--prix">prix: 2049 euros</span>
        </div>
        <button class="card--button">Ajouter au panier</button>
    </div>`
    }));







