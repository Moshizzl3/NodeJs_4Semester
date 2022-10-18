

async function getPokemon(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)