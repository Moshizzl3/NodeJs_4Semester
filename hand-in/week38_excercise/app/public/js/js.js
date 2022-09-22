const planetBoard = document.querySelector(".boardContainer");
const clockdiv = document.querySelector("#clock");
const ageButton = document.querySelector("#ageBtn");


window.onload = clock(clockdiv);

async function getPlantes() {
  const response = await fetch("planets");
  return response.json();
}

async function populatePage() {
  const planets = await getPlantes();
  const date = document.querySelector("#birthDate");
  planetBoard.innerHTML = "";
  planets.data.forEach((planet) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="container d-inline-flex contentContainer mt-3">
        <div class="row col-4 p-2">
            <p>Navn: ${planet.name}</p>
            <img src="${planet.imgUrl}" class="w-75 h-75"  alt="...">
            </div>
        <div class="row">
            <div class="container">
                <p>Din alder ville være: ${calcAge(
                  planet.lengthOfDay,
                  planet.lengthOfYear,
                  date.value
                )} år</p>
                <p>${planet.discription}</p>
            </div>        
       </div>
    </div>
    `;

    planetBoard.append(newDiv);
  });
}

function calcAge(offWorldHours, offWorldyears, birthDate) {
  const dateOne = new Date(birthDate);
  const dateTwo = Date.now();
  const milliseconds = Math.abs(dateOne - dateTwo);
  const hoursAlive = milliseconds / 36e5; //calc from ms to hours
  const daysAlive = hoursAlive / 24;
  const yearsAlive = daysAlive / offWorldyears;
  return Math.round(yearsAlive * 100) / 100;
}

ageButton.addEventListener("click", populatePage);


function clock(element){
  
  element.textContent = ""
  element.textContent = new Date(Date.now()).toLocaleTimeString()
  setTimeout(clock, 1000, element)
}

