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

const courses = [
  {
    name: "Introduction to Artistic Gymnastics",
    location: "Manchester, Virginia",
    age: "6-12",
    price: 28.00,
    description:
    "Gymnastic specialty that is practiced with various devices or without them on a surface of regulatory measurements, learning maneuvers with supervision.",
    image:
    "images/artistic-gymnastics-intro.webp",
  },
  {
    name: "Premium Artistic Gymnastics Club",
    location: "Liverpool, United Kingdom",
    age: "12-40",
    price: 40.00,
    description:
    "In this course we practice the sports discipline that combines strength, flexibility, agility and coordination in a series of complex movements performed on various devices and surfaces. Artistic gymnastics is practiced by both men and women, although the equipment and routines used may differ.",
    image:
    "images/artistic-gymnastics-premium.webp",
  },
  {
    name: "Introduction to Acrobatic Gymnastics",
    location: "Manchester, Virginia",
    age: "6-12",
    price: 28.00,
    description:
    "In our course we base ourselves on routines that must present turns, jumps and displays of balance and flexibility. The exercises are performed by teams of between two and six athletes, whose movements must be coordinated and harmonious. Each exercise is managed and controlled by a team specialized in the subject for better learning in children.",
    image:
    "images/acrobatic-gymnastics-intro.webp",
  },
  {
    name: "Premium Acrobatic Gymnastics Club",
    location: "Liverpool, United Kingdom",
    age: "12-40",
    price: 40.00,
    description:
    "Here we practice the sports discipline of gymnastics in which there are the modalities of male couple, female couple, mixed couple, female trio and male quartet. Collective gymnastic demonstrations are carried out where the body acts as a motor apparatus.",
    image:
    "images/acrobatic-gymnastics-premium.webp",
  },
  {
    name: "Introduction to Aerobics Gymnastics",
    location: "Manchester, Virginia",
    age: "6-12",
    price: 28.00,
    description:
    "With the little ones we practice discipline in which the ability to execute patterns of continuous, repetitive aerobic movements with music is appreciated, so that over time they develop their intensity and complexity.",
    image:
    "images/aerobic-gymnastic-intro.webp",
  },
  {
    name: "Premium Aerobic Gymnastics Club",
    location: "Liverpool, United Kingdom",
    age: "12-40",
    price: 40.00,
    description:
    "Aerobic gymnastics, formerly known as sports aerobics, is a gymnastics discipline in which a 90-second routine is performed with high-intensity movements derived from traditional aerobics in addition to a series of difficulty elements. This routine must demonstrate continuous movements, flexibility, strength and perfect execution in the difficult elements.",
    image:
    "images/aerobic-gymnastic-premium.webp",
  },
  {
    name: "Introduction to Trampoline Gymnastics",
    location: "Manchester, Virginia",
    age: "12-40",
    age: "6-12",
    price: 28.00,
    description:
    "This course consists of performing a series of exercises performed on various elastic devices, where acrobatics is the main protagonist, which the children will develop with specialized instructors.",
    image:
    "images/trampoline-gymnastics-intro.webp",
  },

  {
    name: "Premium Trampoline Gymnastics Club",
    location: "Liverpool, United Kingdom",
    age: "12-40",
    price: 40.00,
    description:
    "This is the discipline in which a series of short routines are performed that contain a wide variety of turns, bounces and somersaults. Precise technique and perfect body control are vital to success. Experienced gymnasts in our club can perform acrobatics at 8 m high.",
    image:
    "images/trampoline-gymnastics-premium.webp",
  },

  {
    name: "Introduction to Parkour",
    location: "Manchester, Virginia",
    age: "6-12",
    price: 28.00,
    description:
    "In this course, we teach the physical discipline responsible for the motor capacity of the individual, beginning by teaching the bases of balance and falling while moving from one place to another.",
    image:
    "images/parkour-intro.webp",
  },

  {
    name: "Premium Parkour Club",
    location: "Liverpool, United Kingdom",
    age: "12-40",
    price: 40.00,
    description:
    "This modality is a physical discipline based on the motor capacity of the individual, developed from the natural method and its objective is to move from one point to another in the environment in the simplest and most efficient way possible, adapting to its demands with the sole help from your body.",
    image:
    "images/parkour-premium.webp",
  }
];

let cardTemplate = document.getElementById("card-template");

createTemplateCard(courses);

const IntroductionsLink = document.querySelector("#introductions");

IntroductionsLink.addEventListener("click", (event) =>{
  event.preventDefault();
  createTemplateCard(courses.filter (course => course.name.includes("Introduction")));
});

const PremiumLink = document.querySelector("#premium");

PremiumLink.addEventListener("click", (event) =>{
  event.preventDefault();
  createTemplateCard(courses.filter (course => course.name.includes("Premium")));
});
function createTemplateCard(filteredCourses) {
  cardTemplate.innerHTML = '';
  filteredCourses.forEach((course) => {
    const cardHTML = `
      <div class="col">
        <div class="card">
          <h2 class="card-title">${course.name}</h2>
          <p class="card-text">Location: ${course.location}</p>
          <p class="card-text">ages: ${course.age}</p>
          <p class="card-text">Price: ${course.price} $</p>
          <p class="card-text">${course.description} </p>
          <img src="${course.image}" class="card-img" loading="lazy" alt="${course.name}"/>

        </div>
      </div>
    `;
    cardTemplate.insertAdjacentHTML(`beforeend`, cardHTML)
  });
}

document.querySelector('.wf1').addEventListener('submit', function(event) {
  event.preventDefault();

  let formData = {
      fname: document.querySelector('input[name="fname"]').value,
      lname: document.querySelector('input[name="lname"]').value,
      id: document.querySelector('input[name="Id"]').value,
      completeDate: document.querySelector('input[name="completeDate"]').value,
      gender: document.querySelector('input[name="Gender"]:checked') ? document.querySelector('input[name="Gender"]:checked').value : '',
      phone: document.querySelector('input[name="phone"]').value,
      email: document.querySelector('input[name="email"]').value,
      country: document.querySelector('select[name="Subject"]').value,
      addressl1: document.querySelector('input[name="addressl1"]').value,
      addressl2: document.querySelector('input[name="addressl2"]').value,
      town: document.querySelector('input[name="town"]').value,
      county: document.querySelector('input[name="Country"]').value,
      postcode: document.querySelector('input[name="Postcode"]').value,
      course: document.querySelector('select[name="Subject"]').value,
      cardNumber: document.querySelector('input[name="card-number"]').value,
      cardName: document.querySelector('input[name="name"]').value,
      expiration: document.querySelector('input[name="expiration"]').value,
      cvc: document.querySelector('input[name="cvc"]').value
  };

  console.log('Form Data:', formData);
  
  localStorage.setItem('formData', JSON.stringify(formData));

  alert('data saved in local storage');
});

window.addEventListener('load', function() {
  if (localStorage.getItem('formData')) {
      let savedData = JSON.parse(localStorage.getItem('formData'));
      document.querySelector('input[name="fname"]').value = savedData.fname;
      document.querySelector('input[name="lname"]').value = savedData.lname;
      document.querySelector('input[name="Id"]').value = savedData.id;
      document.querySelector('input[name="completeDate"]').value = savedData.completeDate;
      if (savedData.gender) {
          document.querySelector(`input[name="Gender"][value="${savedData.gender}"]`).checked = true;
      }
      document.querySelector('input[name="phone"]').value = savedData.phone;
      document.querySelector('input[name="email"]').value = savedData.email;
      document.querySelector('select[name="Subject"]').value = savedData.country;
      document.querySelector('input[name="addressl1"]').value = savedData.addressl1;
      document.querySelector('input[name="addressl2"]').value = savedData.addressl2;
      document.querySelector('input[name="town"]').value = savedData.town;
      document.querySelector('input[name="Country"]').value = savedData.county;
      document.querySelector('input[name="Postcode"]').value = savedData.postcode;
      document.querySelector('select[name="Subject"]').value = savedData.course;
      document.querySelector('input[name="card-number"]').value = savedData.cardNumber;
      document.querySelector('input[name="name"]').value = savedData.cardName;
      document.querySelector('input[name="expiration"]').value = savedData.expiration;
      document.querySelector('input[name="cvc"]').value = savedData.cvc;
  }
});


