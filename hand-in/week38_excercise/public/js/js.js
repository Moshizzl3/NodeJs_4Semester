const planetBoard = document.querySelector(".boardContainer");
const ageButton = document.querySelector("#ageBtn");

async function getPlantes() {
  const response = await fetch("planets");
  return await response.json();
}

async function populatePage() {
  //const planets = await getPlanets();
  const date = document.querySelector("#birthDate");
  planetBoard.innerHTML = "";
  planets.forEach((planet) => {
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
  const daysAlive = hoursAlive / (24);
  const yearsAlive = daysAlive / offWorldyears;
  return Math.round(yearsAlive * 100) / 100;
}

ageButton.addEventListener("click", populatePage);



const planets = [
    {
      name: "Mercury",
      lengthOfDay: 1408,
      lengthOfYear: 87.97,
      discription: "Et år på denne planet svarer til 87.97 dage på jorden",
      imgUrl:
        "https://www.thoughtco.com/thmb/OofCf5WKuUefeP9tOPM8KTcQYaw=/650x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mercury_in_color_-_Prockter07-fb017129b4e849febc1023da23c9f06e.jpg",
    },
    {
      name: "Venus",
      lengthOfDay: 5832,
      lengthOfYear: 224.7,
      imgUrl:
        "https://www.thoughtco.com/thmb/ATUyt0vURFveZea9-CcBirTdSbo=/650x0/filters:no_upscale():max_bytes(150000):strip_icc()/42926275871_e5988ba84b_o-65ce56202cdf415caee10474d72d8d3e.jpg",
    },
    {
      name: "Earth",
      lengthOfDay: 24,
      lengthOfYear: 365.26,
      imgUrl:
        "https://svs.gsfc.nasa.gov/vis/a010000/a012300/a012321/c30-1024.jpg",
    },
    {
      name: "Mars",
      lengthOfDay: 25,
      lengthOfYear: 687,
      imgUrl:
        "https://www.thoughtco.com/thmb/UM7-VVHf35fwzAezvg--GOQvVfg=/650x0/filters:no_upscale():max_bytes(150000):strip_icc()/mars-1652270_1920-38e3808a02c24eedab5f9e5c6e65cc0f.jpg",
    },
    {
      name: "Jupiter",
      lengthOfDay: 10,
      lengthOfYear: 4333,
      imgUrl:
        "https://www.thoughtco.com/thmb/QA8vCGjZNZc4CJc47Bk2ocrWQ38=/650x0/filters:no_upscale():max_bytes(150000):strip_icc()/jupiter-3813573_1920-0cd7ea03427f40cb8fe23be0aee754ae.jpg",
    },
    {
      name: "Saturn",
      lengthOfDay: 11,
      lengthOfYear: 10759,
      imgUrl:
        "https://www.thoughtco.com/thmb/5dlsYv8TafAfVj5PgcbJvfTswbU=/650x0/filters:no_upscale():max_bytes(150000):strip_icc()/1920px-Saturn_during_Equinox-0a35741c904d4634be2ebb9fde7e3279.jpg",
    },
    {
      name: "Neptune",
      lengthOfDay: 17,
      lengthOfYear: 30687,
      imgUrl:
        "https://www.thoughtco.com/thmb/LB5d1HTHTpqIhGZ2O9CK7h9JJ0s=/650x0/filters:no_upscale():max_bytes(150000):strip_icc()/Neptunes_South_Pole_-_August_25_1989_26512436398-3c525c714b0c41e7847586bcb7c81664.jpg",
    },
    {
      name: "Uranus",
      lengthOfDay: 16,
      lengthOfYear: 60190,
      imgUrl:
        "http://www.nasa.gov/sites/default/files/thumbnails/image/pia18182-16.jpg",
    },
  ];