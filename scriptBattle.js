/* Ataques */

const SocoFlamejante = {
    nome: 'Soco Flamejante',
    dano: 75,
    tipo: 'fogo',
}

const ChuteAlto = {
    nome: 'Chute Alto',
    dano: 100,
    tipo: 'lutador',
    chance: 90
}

const ChoqueDoTrovao = {
    nome: 'Choque do Trovão',
    dano: 50,
    tipo: 'eletrico',
    paralisia: 50
}

const RaioDoTrovao = {
    nome: 'Raio do Trovão',
    dano: 75,
    tipo: 'eletrico'
}

const AutoExplosao = {
    nome: 'Auto Explosão',
    dano: 150,
    tipo: 'normal'
}

const ExplosaoDeRochas = {
    nome: 'Explosão de Rochas',
    dano: 25,
    hits: 3,
}

const Psystrike = {
    nome: 'Psystrike',
    dano: 100,
}

const Psychic = {
    nome: 'Psychic',
    dano: 90,
}

/* Pokémons */

const Blaziken = {
    velocidade: 90,
    ataque1: SocoFlamejante,
    ataque2: ChuteAlto
}

const Raichu = {
    velocidade: 130,
    ataque1: ChoqueDoTrovao,
    ataque2: RaioDoTrovao
}

const Golem = {
    velocidade: 50,
    ataque1: AutoExplosao,
    ataque2: ExplosaoDeRochas
}

const Mewtwo = {
    velocidade: 100,
    ataque1: Psystrike,
    ataque2: Psychic,
}

/* Iniciar  variáveis e funções*/

var moves = ["Ataque 1", "Ataque 2"]
var pokemonName = localStorage.getItem("pokemonID")
iniciarBatalha(pokemonName)
var vidaAliado = 200, vidaInimigo = 200

/* Funções */

function iniciarBatalha(pokemon) {
    setarAtaques(pokemon)
    setarSprites(pokemon)
}

function setarSprites(pokemon) {
    if (pokemon == 'Raichu') {
        pokemonAlly.src = "./images/raichu.gif"
    } else if (pokemon == 'Blaziken') {
        pokemonAlly.src = "./images/blaziken.gif"
    } else if (pokemon == 'Golem') {
        pokemonAlly.src = "./images/golem.gif"
    } else {
        pokemonAlly.src = "./images/mew.gif"
    }
}


function setarAtaques(pokemon) {
    if (pokemon == 'Raichu') {
        moves[0] = Raichu.ataque1.nome
        moves[1] = Raichu.ataque2.nome
        move1.style.background = "#F8D030"
        move2.style.background = "#F8D030"
    }
    if (pokemon == 'Golem') {
        moves[0] = Golem.ataque1.nome
        moves[1] = Golem.ataque2.nome
        move1.style.background = "#A8A878"
        move2.style.background = "B8A038"
    }
    if (pokemon == 'Blaziken') {
        moves[0] = Blaziken.ataque1.nome
        moves[1] = Blaziken.ataque2.nome
        move1.style.background = "#F08030"
        move2.style.background = "#C03028"
    }
}

var console = document.getElementById("console")

function atacar(move) {
    if (move == 'movimento1') {
        if (pokemonName == 'Blaziken') {
            console.innerHTML += ` Você usou ${Blaziken.ataque1.nome} e derrotou o inimigo!`
        }
        if (pokemonName == 'Raichu') {
            console.innerHTML += ` Você usou ${Raichu.ataque1.nome} e derrotou o inimigo!`
        }
        if (pokemonName == 'Golem') {
            console.innerHTML += ` Você usou ${Golem.ataque1.nome} e derrotou o inimigo! (Mas você foi junto. F.)`
            document.getElementById("pokemonAlly").style.display = 'none'
        }
    }
    if (move == 'movimento2') {
        if (pokemonName == 'Blaziken') {
            console.innerHTML += ` Você usou ${Blaziken.ataque2.nome} e derrotou o inimigo!`
        }
        if (pokemonName == 'Raichu') {
            console.innerHTML += ` Você usou ${Raichu.ataque2.nome} e derrotou o inimigo!`
        }
        if (pokemonName == 'Golem') {
            console.innerHTML += ` Você usou ${Golem.ataque2.nome} e derrotou o inimigo!`

        }
    }
    document.getElementById("move1").style.display = 'none'
    document.getElementById("move2").style.display = 'none'
    document.getElementById("return").style.display = 'none'
    document.getElementById("pokemonEnemy").style.display = 'none'

    console.innerHTML += " Retornando em 5 segundos."

    setTimeout(() => {
        window.location.href = "http://localhost:5500/index.html"
    }, 5000);

}


function desistir() {
    window.location.href = "http://localhost:5500/index.html";
}
function sumir() {
    document.getElementById("buttonAttack").style.display = 'none'
    document.getElementById("buttonRun").style.display = 'none'
}

function voltar() {
    document.getElementById("buttonAttack").style.display = 'inline'
    document.getElementById("buttonRun").style.display = 'inline'
    document.getElementById("move1").style.display = 'none'
    document.getElementById("move2").style.display = 'none'
    document.getElementById("return").style.display = 'none'
}

function ataques() {
    sumir()
    document.getElementById("move1").style.display = 'inline'
    document.getElementById("move2").style.display = 'inline'
    document.getElementById("return").style.display = 'block'
    document.getElementById("move1").innerHTML = moves[0]
    document.getElementById("move2").innerHTML = moves[1]
}