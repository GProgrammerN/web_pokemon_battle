function selecionar(pokemonID){
    var getPokemonID = pokemonID
    localStorage.setItem("pokemonID", getPokemonID)
    window.location.href = "http://localhost:5500/batalha.html"
}