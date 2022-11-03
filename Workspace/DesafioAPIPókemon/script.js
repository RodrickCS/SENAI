
function carregaPoke() {
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    readPoke();
}

function readPoke() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=152&offset=90')
        .then(response => response.json())
        .then(function (allpokemon) {
            allpokemon.results.forEach(function (pokemon) {
                pokemonInfo(pokemon);
            })
        })
}

function pokemonInfo(pokemon) {
    let url = pokemon.url
    fetch(url)
        .then(response => response.json())
        .then(function (pokeData) {
            renderizaPoke(pokeData)
        })
}

function renderizaPoke(pokeData) {
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div")
    pokeContainer.classList.add('ui', 'card');

    imagemPoke(pokeData.id, pokeContainer);

    let pokeName = document.createElement('h4')
    pokeName.innerText = pokeData.name

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`

    let pokeTypes = document.createElement('ul')

    pokeTipos(pokeData.types, pokeTypes)

    pokeContainer.append(pokeName, pokeNumber, pokeTypes);
    allPokemonContainer.appendChild(pokeContainer);
}

function pokeTipos(types, ul) {
    types.forEach(function (type) {
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}

function imagemPoke(pokeID, containerDiv) {
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}