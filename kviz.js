
// vytvorenie pola otazok a odpovedi
const otazky = [
  {
    h2: 'Ako sa volá táto ikonická hračka z 80. rokov?',
    obrazek: 'obrazky/moncicak.jpg',
    answer: ['Kočičák', 'Mončičák', 'Opičák'],
    spravnaOdpoved: 'Mončičák',
    indexOdpovedi: 1,
  },
  {
    h2: 'Aké je Matejové najobľúbenejšie ovocie?',
    obrazek: 'obrazky/ovoce.jpg',
    answer: ['Kokos', 'Melón', 'Jahoda', 'Ani jedna z možností'],
    spravnaOdpoved: 'Melón',
    indexOdpovedi: 1,
  },
  {
    h2: 'Pre úspešné absolvovanie kurzu je potrebné...',
    obrazek: 'obrazky/pivo.jpg',
    answer: ['Vedieť JavaScript', 'Chodiť po kurze na pivo'],
    spravnaOdpoved: 'Vedieť JavaScript',
    indexOdpovedi: 0,
  }
];

//vytvorenie premennych
let otazka = document.getElementById('otazka');
let obrazek = document.getElementById('obrazek');
let odpovedi = document.getElementById('odpovedi');

let poradieOtazok = 1;
document.querySelector('#poradieOtazok').textContent = poradieOtazok;

let prvaOtazka = document.getElementById('otazka-jedna').dataset.odpoved;
let druhaOtazka = document.getElementById('otazka-dva').dataset.odpoved;
let tretiaOtazka = document.getElementById('otazka-tri').dataset.odpoved;

console.log ('prvaOtazka');
console.log ('druhaOtazka');
console.log ('tretiaOtazka');

//const answer = document.querySelectorAll('.answer');
//console.log('answer');

let answer = document.querySelectorAll('#answer').dataset.odpoved

answer.forEach((klik) => {
  klik.addEventListener('click', (udalost) => {
  console.log('Správna odpoveď je ' + spravnaOdpoved);
  });
});

if (answer === spravnaOdpoved) {
    console.log('Správna odpoveď')
} else (answer !== spravnaOdpoved) 
    console.log('Nesprávna odpoveď');


