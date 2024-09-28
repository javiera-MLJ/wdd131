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