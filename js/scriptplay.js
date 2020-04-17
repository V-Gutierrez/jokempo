var pedra = {
    nome: "pedra",
    img: "pedra.png"
}

var tesoura = {
    nome: "tesoura",
    img: "tesoura.png"
}
var papel = {
    nome: "papel",
    img: "papel.png"
}

var ppt = [pedra, papel, tesoura]


var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")


var choosepedra = document.getElementById("pedra")
var choosepapel = document.getElementById("papel")
var choosetesoura = document.getElementById("tesoura")

choosepedra.addEventListener("click", pedrarock)
choosepapel.addEventListener("click", papelpaper)
choosetesoura.addEventListener("click", tesourascifi)


var panel = document.getElementById("panel")

let chooser = 0

function pedrarock(){
    chooser = 0;
    playRobots()
}

function papelpaper() {
    chooser = 1;
    playRobots()
}

function tesourascifi() {
    chooser = 2;
    playRobots()
}


function playRobots() {
    var arrayvalue2 = chooser
    var arrayvalue1 = Math.floor(Math.random() * ppt.length)
    p1.src = ppt[arrayvalue1]["img"]
    p2.src = ppt[arrayvalue2]["img"]

    console.log(arrayvalue1, arrayvalue2)


    var resultado

    switch (true) {
        case arrayvalue1 == arrayvalue2:
            resultado = "EMPATE";
            console.log(resultado)
            break;
        case arrayvalue1 == 0 && arrayvalue2 == 1:
            resultado = "VOCÊ VENCEU";
            console.log(resultado);
            break;
        case arrayvalue1 == 0 && arrayvalue2 == 2:
            resultado = "BOT 1 VENCEU!"
            console.log(resultado);
            break;
        case arrayvalue1 == 1 && arrayvalue2 == 0:
            resultado = "BOT 1 VENCEU!"
            console.log(resultado);
            break;
        case arrayvalue1 == 1 && arrayvalue2 == 2:
            resultado = "VOCÊ VENCEU"
            console.log(resultado);
            break;
        case arrayvalue1 == 2 && arrayvalue2 == 1:
            resultado = "BOT 1 VENCEU!"
            console.log(resultado);
            break
        case arrayvalue1 == 2 && arrayvalue2 == 0:
            resultado = "VOCÊ VENCEU"
            console.log(resultado);
            break
        default:
            resultado = "?"
            break;
    }

    panel.innerHTML = resultado
    document.getElementById("options").style.display = "none"
    document.getElementById("escolha").style.display = "none"

    setTimeout(function () {
        p2.src = "https://cdn3.iconfinder.com/data/icons/game-competition-glyph/64/09_Spirit_of_Gaming_game_competition-512.png"
        p1.src = "https://i.pinimg.com/originals/07/a4/58/07a458d72938182d7e8b05b9d2a34fb6.jpg"
        panel.innerHTML = " "
        document.getElementById("options").style.display = "flex"
        document.getElementById("escolha").style.display = "flex"
    }, 3000);

}