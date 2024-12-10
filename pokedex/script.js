
async function buscapokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const requisiçao = await fetch(url)
    const dadospokemon = await requisiçao.json()
    return dadospokemon
}

const botao = document.getElementById("buscar-pokemon")
botao.addEventListener('click', async function() {
    const pokemonID = document.getElementById("numpoke").value
    const pokemon = await buscapokemon(pokemonID)
    pokeHTML(pokemon)
    
})
function pokeHTML(pokemon) {
    const div = document.getElementById("pokemon-dados")
    div.innerHTML = `<h1>${pokemon.name}<h1>`

    
}