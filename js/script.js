var pedra = {
    nome: "pedra",
    img: "images/pedra.png"
}

var tesoura = {
    nome: "tesoura",
    img: "images/tesoura.png"
}
var papel = {
    nome: "papel",
    img: "images/papel.png"
}

var ppt = [pedra, papel, tesoura]

var button1 = document.getElementById("playRob")

var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")

button1.addEventListener("click", playRobots)

var panel = document.getElementById("panel")

function playRobots(){
    var arrayvalue2 = Math.floor(Math.random() * ppt.length)
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
            resultado = "BOT 2 VENCEU!";
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
            resultado = "BOT 2 VENCEU!"
            console.log(resultado);
            break;
        case arrayvalue1 == 2 && arrayvalue2 == 1:
            resultado = "BOT 1 VENCEU!"
            console.log(resultado);
            break
        case arrayvalue1 == 2 && arrayvalue2 == 0:
            resultado = "BOT 2 VENCEU!"
            console.log(resultado);
            break            
            default:
             resultado = "?"
            break;
    }

            panel.innerHTML = resultado
            document.getElementById("playRob").style.display = "none"
    document.getElementById("playmyself").style.display = "none"

     setTimeout(function () {
         p2.src = "https://i.pinimg.com/originals/07/a4/58/07a458d72938182d7e8b05b9d2a34fb6.jpg"
         p1.src = "https://i.pinimg.com/originals/07/a4/58/07a458d72938182d7e8b05b9d2a34fb6.jpg"
         panel.innerHTML = " "
         document.getElementById("playRob").style.display = "flex"
         document.getElementById("playmyself").style.display = "flex"
    }, 3000); 
    
        }