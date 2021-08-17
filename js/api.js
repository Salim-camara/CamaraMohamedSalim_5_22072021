// Centralisation de l'API en un seul fichier, avec la conversion en JSON intégré
// Récupération de l'URL
const HOST = 'http://localhost:3000/api/cameras';

// La fonction, suivante prend 2 paramètres, une extension d'URL et une option (notamment pour le POST)
const API = (ext = '', options) => 
    fetch(HOST + ext, options).then((response) => response.json());




// **************************Ajout des fonctions*******************************
// Fonction de redirection
const NAVIGAT = (link) => {
    document.location.href = link;
};

// Fonction de création d'item dans le localstorage
const SETLS = (key, value) => {
    localStorage.setItem(key, value);
};
