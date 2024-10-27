const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;

  const lastModifiedDate = new Date(document.lastModified);
  const formattedDate = lastModifiedDate.toLocaleString();
  document.getElementById("lastModified").textContent = `last Modified: ${formattedDate}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/aba-nigeria.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/manti-utah.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/payson-utah.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/yigo-guam.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/washington-dc.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/lima-peru.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/mexico-city.jpg"
  },

  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 29",
    area: 53997,
    imageUrl:
    "images/tokyo-japan.jpg"
  },

  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, march, 12",
    area: 41010,
    imageUrl:
    "images/rome-italy.jpg"
  },

  {
    templeName: "Concepción Chile",
    location: "Concepción, Chile",
    dedicated: "2018, October, 28",
    area: 23095,
    imageUrl:
    "images/concepcion-chile.jpg"
  }
];

let cardTemplate = document.getElementById("card-template");

createTemplateCard(temples);
const olderTemplesLink = document.querySelector("#oldtemples");

const homeButton = document.getElementById("homecards");

homeButton.addEventListener("click", (event) => {
  event.preventDefault();
  createTemplateCard(temples); 
});

olderTemplesLink.addEventListener("click", (event) =>{
  event.preventDefault();
  createTemplateCard(temples.filter (temple => new Date(temple.dedicated).getFullYear() < 1900));
});

const newTemplesLink = document.querySelector("#newtemples");

newTemplesLink.addEventListener("click", (event) =>{
  event.preventDefault();
  createTemplateCard(temples.filter (temple => new Date(temple.dedicated).getFullYear() > 2000));
});

const largeTemplesLink = document.querySelector("#largertemples");

largeTemplesLink.addEventListener("click", (event) =>{
  event.preventDefault();
  createTemplateCard(temples.filter (temple => temple.area > 90000));
});

const smallerTemplesLink = document.querySelector("#smallertemples");

smallerTemplesLink.addEventListener("click", (event) =>{
  event.preventDefault();
  createTemplateCard(temples.filter (temple => temple.area < 10000));
});

function createTemplateCard(filteredTemples) {
  cardTemplate.innerHTML = '';
  filteredTemples.forEach((temple) => {
    const cardHTML = `
      <div class="col">
        <div class="card">
          <h2 class="card-title">${temple.templeName}</h2>
          <p class="card-text">Location: ${temple.location}</p>
          <p class="card-text">Dedicated: ${temple.dedicated}</p>
          <p class="card-text">Size: ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" class="card-img" loading="lazy" alt="${temple.templeName}" object-fit="cover"/>
        </div>
      </div>
    `;
    cardTemplate.insertAdjacentHTML(`beforeend`, cardHTML)
  });
}







