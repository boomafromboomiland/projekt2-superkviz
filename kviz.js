console.log('JS funguje');
// vytvorenie pola otazok a odpovedi
const kvizoveOtazky = [
  {
    h2: 'Ako sa volá táto ikonická hračka z 80. rokov?',
    obrazek: 'obrazky/1.jpg',
    odpovede: ['Kočičák', 'Mončičák', 'Opičák'],
    spravnaOdpoved: 'Mončičák',
    poradi: 'Otázka 1 z 3',
  },
  {
    h2: 'Aké je Matejove najobľúbenejšie ovocie?',
    obrazek: 'obrazky/2.jpg',
    odpovede: ['Kokos', 'Melón', 'Jahoda', 'Ani jedna z možností'],
    spravnaOdpoved: 'Melón',
    poradi: 'Otázka 2 z 3',
  },
  {
    h2: 'Pre úspešné absolvovanie kurzu je potrebné...',
    obrazek: 'obrazky/3.jpg',
    odpovede: ['Vedieť JavaScript', 'Chodiť po kurze na pivo'],
    spravnaOdpoved: 'Vedieť JavaScript',
    poradi: 'Otázka 3 z 3',
  }
];

//definovanie všetkých premenných
let kviz = document.querySelector('.kviz');
let odpovedi = document.getElementById('odpovedi');
let moznosti = document.querySelector('#moznosti');
let obrazek = document.getElementById('obrazek');
let obsah = document.querySelector('#obsah');
let poradi =  document.getElementById('poradi');
let otazka = document.querySelector('#otazka');
let kvizoveOdpovede = [];


//funcke pre zmenu otázok, odpovedí, img
function prvaOtazka() {
  //zmena textu otázky
  otazka.innerText = kvizoveOtazky[0].h2;
  //zmena img podľa src
  obrazek.src = kvizoveOtazky[0].obrazek;
  //zmena poradia otázky
  poradi.innerText = kvizoveOtazky[0].poradi;

  for (let i = 0; i < kvizoveOtazky[0].odpovede.length; i++) {
    let odpovedUzivatela = createLi(
      kvizoveOtazky[0].odpovede[i],
      i,
      'odpoved'
    );
    odpovedUzivatela.onclick = () => {
      kvizoveOdpovede.push(kvizoveOtazky[0].odpovede[i]);
      druhaOtazka();
    };
    odpovedi.append(odpovedUzivatela);
  }
}
prvaOtazka();

function druhaOtazka() {
  console.log('Posledná otázka je pred tebou!');
  console.log(kvizoveOdpovede);
  odpovedi.innerHTML = '';
  otazka.innerText = kvizoveOtazky[1].h2;
  obrazek.src = kvizoveOtazky[1].obrazek;
  poradi.innerText = kvizoveOtazky[1].poradi;

  for (let i = 0; i < kvizoveOtazky[1].odpovede.length; i++) {
    let odpovedUzivatela = createLi(
      kvizoveOtazky[1].odpovede[i],
      i,
      'odpoved'
    );
    odpovedUzivatela.onclick = () => {
      kvizoveOdpovede.push(kvizoveOtazky[1].odpovede[i]);
      tretiaOtazka();
    };
    odpovedi.append(odpovedUzivatela);
  }
};

function tretiaOtazka() {
  console.log('Ideme na výsledky!');
  console.log(kvizoveOdpovede);
  odpovedi.innerHTML = '';
  otazka.innerText = kvizoveOtazky[2].h2;
  obrazek.src = kvizoveOtazky[2].obrazek;
  poradi.innerText = kvizoveOtazky[2].poradi;

  for (let i = 0; i < kvizoveOtazky[2].odpovede.length; i++) {
    let odpovedUzivatela = createLi(
      kvizoveOtazky[2].odpovede[i],
      i,
      'odpoved'
    );
    odpovedUzivatela.onclick = () => {
      kvizoveOdpovede.push(kvizoveOtazky[2].odpovede[i]);
    };
    odpovedi.append(odpovedUzivatela);
  }
};

function vysledky() {
  console.log(kvizoveOdpovede);
  odpovedi.innerHTML = '';
  otazka.innerText = kvizoveOtazky[2].h2;
  obrazek.src = kvizoveOtazky[2].obrazek;
  poradi.innerText = kvizoveOtazky[2].poradi;

  for (let i = 0; i < kvizoveOtazky[2].odpovede.length; i++) {
    let odpovedUzivatela = createLi(
      kvizoveOtazky[2].odpovede[i],
      i,
      'odpoved'
    );
  }
};

//priradenie obsahu, čísla a classy
function createLi(html, cisloOdpovedi, className) {
  let odpovedUzivatela = document.createElement('li');
  odpovedUzivatela.innerHTML = html;
  odpovedUzivatela.setAttribute('data-odpoved', cisloOdpovedi);
  odpovedUzivatela.classList.add(className);
  return odpovedUzivatela;
}