// *****************Retour à l'accueil*************
let button = document.querySelector('button');

// Récupération des éléments du LS
let price = localStorage.price;
let id = localStorage.orderId;

// crétation du P avec les variables
let text = document.querySelector('p');
text.innerHTML = `Merci pour votre confiance, votre numéro de commade est:</br><strong> ${id}</strong>,</br> pour un prix total de <strong>${price} €</strong>.`





button.addEventListener('click', () => {

  // Nettoyage du LS
  localStorage.clear();

  // Retoure vers la page d'accueil
  NAVIGAT("index.html");
});
