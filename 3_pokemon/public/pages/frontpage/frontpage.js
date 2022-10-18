const pokemondiv = document.querySelector("#pokemondiv");


const battleButton = document.getElementById("battleButton");

async function addstudd(url) {
  const newDiv = document.createElement("p");
  newDiv.textContent = await fetchstuff(url);
  pokemondiv.append(newDiv);
}

async function addstuff(list) {
  list.forEach((element) => {
    const newDiv = document.createElement("p");
    newDiv.textContent = element.name;
    pokemondiv.append(newDiv);
  });
}

async function fetchstuff(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

battleButton.addEventListener("click", () => {
  setTimeout(() => {
    location.href = "/battle";
  }, 3000);
});

