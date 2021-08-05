// *****************Retour à l'accueil*************
let button = document.querySelector('button');

let nom = 'tomate';
let prenom = 'patate';
let adresse = 'saucisse';
let ville = 'spaghetti';
let mail = 'haricot';
let numero = 'courgette';

const order = {
    contact: {
      "firstName": nom,
      "lastName": prenom,
      "city": ville,
      "address": adresse,
      "email": mail,
    },
    products: ["5be1ed3f1c9d44000030b061"],
  };

const options = {
    method: "POST",
    body: JSON.stringify(order),
    headers: { "Content-Type": "application/json" },
};



button.addEventListener('click', () => {
    
    fetch('http://localhost:3000/api/cameras/order', options)
    .then((response) => response.json())
        .then((data) => {
          localStorage.clear();
          console.log(data)
          localStorage.setItem("orderId", data.orderId);

        })});
