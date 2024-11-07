var apparaitre = document.getElementsByTagName('p')[0];
var calculatrice = document.getElementsByTagName('form')[0];
apparaitre.addEventListener('click', afficher);
function afficher() {
    calculatrice.style.display = 'flex';
}
var disparaitre = document.getElementsByTagName('p')[1];
disparaitre.addEventListener('click', effacer);
function effacer(){
    calculatrice.style.display = 'none';
}
var number = document.getElementsByTagName('input')[0];
var select = document.getElementsByTagName('select')[0];
var number1 = document.getElementsByTagName('input')[1];
var submit = document.getElementsByTagName('input')[2];

submit.addEventListener('click', resultat);
function resultat(){
    var resulteFinale = 0;
    if(select.value == '+'){
        resulteFinale = Number(number.value) + Number(number1.value)
    } else if (select.value == '-'){
        resulteFinale = number.value - number1.value
    } else if (select.value == '*'){
        resulteFinale = number.value * number1.value
    } else {
        resulteFinale = number.value / number1.value
    }
    alert(`le resultat du calcule ${number.value} ${select.value} ${number1.value} = ${resulteFinale}`);
}
console.log(document.getElementsByTagName('input')); 



// SELECTION :
// var monLien = document.getElementsByTagName('a');
// console.log(monLien);

// var calculatrice = document.getElementsByTagName('section');
// console.log(calculatrice);

// var champs = document.getElementsByTagName('input');
// console.log(champs);

// var operateur = document.getElementsByTagName('select');
// console.log(operateur);

// var go = document.getElementsByTagName('span');
// console.log(go);

// EVENEMENT :
// monLien[0].addEventListener('click', apparition);

// monLien[1].addEventListener('click',
// 	disparition)

// go[0].addEventListener('click', calcul);

// FONCTION :
// function apparition() {
// 	console.log('apparition !');
// 	calculatrice[0].style.visibility = 'visible';
// }

// function disparition() {
// 	calculatrice[0].style.visibility = "hidden";
// }

// function calcul() {
// 	console.log('calcul !');
// 	var premier = parseInt(champs[0].value);
// 	var deuxieme = parseInt(champs[1].value);
// 	if(operateur[0].value === '+') {
// 		var resultat = premier + deuxieme;
// 	} else if(operateur[0].value === '-') {
// 		var resultat = premier - deuxieme;
// 	} else if(operateur[0].value === '*') {
// 		var resultat = premier * deuxieme;
// 	} else if(operateur[0].value === '/') {
// 		var resultat = premier / deuxieme;
// 	}
// 	alert(premier + operateur[0].value + deuxieme + '=' + resultat)
// }



