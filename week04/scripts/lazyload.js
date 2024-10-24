const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;

  const lastModifiedDate = new Date(document.lastModified);
  const formattedDate = lastModifiedDate.toLocaleString();
  document.getElementById("lastModified").textContent = `last Modified: ${formattedDate}`;
