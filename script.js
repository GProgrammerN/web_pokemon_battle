function selecionar(pokemonID){
    var getPokemonID = pokemonID
    localStorage.setItem("pokemonID", getPokemonID)
    var URLatual = window.location.hostname
    window.location.href = `${URLatual}/batalha.html`
}