function selecionar(pokemonID) {
    var getPokemonID = pokemonID
    localStorage.setItem("pokemonID", getPokemonID)
    if (window.location.hostname == 'github.com') {
        window.location.pathname += '/batalha.html'
    }else {
        window.location.pathname = '/batalha.html'
    }
}