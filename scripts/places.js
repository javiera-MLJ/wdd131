const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;

  const lastModifiedDate = new Date(document.lastModified);
  const formattedDate = lastModifiedDate.toLocaleString();
  document.getElementById("lastModified").textContent = `last Modified: ${formattedDate}`;


const temperature= 10
const wind = 6
const unit = 'metric'

function calculateWindChill(temperature, wind, unit='metric') {

  if (unit === 'metric') {
    if (temperature <= 10 && wind > 4.8) {
      const windchill =  13.12 + 0.6215 * temperature - 11.37 * (wind ** 0.16) + 0.3965 * temperature *(wind ** 0.16)
      return windchill.toFixed(2);
    }
  }
  else if (unit ==='imperial') {
    if (temperature <= 50 && wind > 3){
      const windchill =  35.74 + 0.6215 * temperature - 35.75 * (wind ** 0.16) + 0.4275 * temperature *(wind ** 0.16)
      return windchill.toFixed(2);
    }
  }
  return "N/A";
}

const windChillValue = calculateWindChill(temperature, wind, unit);
document.getElementById('wind-chill').innerText = windChillValue + ' °C'; 