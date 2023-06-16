
const ataquesBlaziken = {
    ataque1: 'Soco Flamejante',
    ataque2: 'Chute Alto',
}

const ataquesPikachu = {
    ataque1: 'Choque do Trovão',
    ataque2: 'Raio do Trovão'
}

const ataquesGolem = {
    ataque1: 'Autoexplosão',
    ataque2: 'Explosão de Rochas',
}

var moves = ["Ataque 1", "Ataque 2", "Ataque 3", "Ataque 4"]

iniciarBatalha('Blaziken')

function iniciarBatalhaInimigo(){
    var vidaInimigo = 100
}

function iniciarBatalha(pokemon){
    iniciarBatalhaInimigo()
    var vida = 100
    if(pokemon == 'Pikachu'){
        moves[0] = ataquesPikachu.ataque1
        moves[1] = ataquesPikachu.ataque2
    
    }
    if(pokemon == 'Blaziken'){
        moves[0] = ataquesBlaziken.ataque1
        moves[1] = ataquesBlaziken.ataque2
    }
    if(pokemon == 'Golem'){
        moves[0] = ataquesGolem.ataque1
        moves[1] = ataquesGolem.ataque2
    }
}

function dano(){

}


function sumir(){
    document.getElementById("buttonAttack").style.display = 'none'
    document.getElementById("buttonItems").style.display = 'none'
    document.getElementById("buttonRun").style.display = 'none'
}

function voltar(){
    document.getElementById("buttonAttack").style.display = 'inline'
    document.getElementById("buttonItems").style.display = 'inline'
    document.getElementById("buttonRun").style.display = 'inline'
    document.getElementById("move1").style.display = 'none'
    document.getElementById("move2").style.display = 'none'
    document.getElementById("return").style.display = 'none'
}

function ataques(){
    sumir()
    document.getElementById("move1").style.display = 'inline'
    document.getElementById("move2").style.display = 'inline'
    document.getElementById("return").style.display = 'block'
    document.getElementById("move1").innerHTML = moves[0]
    document.getElementById("move2").innerHTML = moves[1]

}