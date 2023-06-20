function selecionar(pokemonID) {
    var getPokemonID = pokemonID
    var getURL = window.location.href
    getURL = getURL.replace("/index.html", "");
    localStorage.setItem("pokemonID", getPokemonID)
    localStorage.setItem("URL", getURL)
    window.location = `${getURL}/batalha.html`

}