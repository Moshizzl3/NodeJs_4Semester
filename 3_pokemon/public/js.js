const pokemondiv = document.getElementById("pokemondiv");

async function addstudd() {
  const newDiv = document.createElement("p");
  newDiv.textContent =  await fetchstuff();
  pokemondiv.append(newDiv);
}

async function fetchstuff() {
  let test = await fetch("/pokemon")
  let test2 = await test.json()
  return  test2.data
}
console.log(await fetchstuff());
addstudd();
