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

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  products.forEach(p => {
    const option = document.createElement("option");
    option.setAttribute("value",p.id);
    option.textContent = p.name
  
    document.querySelector("select").appendChild(option);
  })
  
  let formsSended = window.localStorage.getItem("forms") || 0
  
  const form = document.querySelector('form');
  const submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click'  , () => {
    if(form.checkValidity()){
      formsSended++;
    }
    window.localStorage.setItem("forms", formsSended);
  });
  