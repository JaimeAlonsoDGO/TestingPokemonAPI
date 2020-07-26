//OBTENEMOS TANTO EL BOTON COMO EL POKEMON-CONTAINER

var myButton = document.getElementById('button-get');
var pokemonContainer = document.getElementById('pokemon-container');

myButton.onclick = getPokemon;

function getPokemon(){
    var numberPokemon = document.getElementById('pokemon-number');
    console.log(numberPokemon.value);
    fetch(`https://pokeapi.co/api/v2/pokemon/${numberPokemon.value}/`) //Usamos fecth para acceder a la URL usando el numero aleatorio
    .then(data => data.json()) //Obtenemos el JSON
    .then(data =>{
        console.log(data);
        //Mediante innerHTML insertamos la imàgen y el nombre del pokémon
        pokemonContainer.innerHTML = `<img src="${data.sprites.front_default}" alt="pokemon-sprite" class="pokemon-sprite"/>
        <p class="pokemon-name">Pokèmon: <span class="pokemon-name api-name">${data.name}</span></p>`
    })
}