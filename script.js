let numeroDeCartas = prompt ("Com quantas cartas você quer jogar de 4 a 14? Obs.: Por ser um jogo da memória só é aceito números pares.");
let cartas = ["bobrossparrot.gif",
 "explodyparrot.gif", 
 "fiestaparrot.gif", 
 "metalparrot.gif", 
 "revertitparrot.gif", 
 "tripletsparrot.gif", 
 "unicornparrot.gif"];
let cartasDoJogo = [];


function quantidadeDeCartas() {
    
    while ((numeroDeCartas % 2 !== 0) || (4 > numeroDeCartas) || (numeroDeCartas > 14) || (numeroDeCartas == 0)) {
        numeroDeCartas = prompt ("Caracter não permitido. Escolha de 4 a 14 cartas! Obs.: Por ser um jogo da memória só é aceito números pares.")
    }
}
quantidadeDeCartas()


function cartasSelecionadas() {
    for (let i = 0; i < numeroDeCartas / 2; i++){
        cartasDoJogo.push(cartas[i]);
        cartasDoJogo.push(cartas[i]);
        
    }
    cartasDoJogo.sort(Embaralhar);

    for (let j = 0; j < numeroDeCartas; j++){
       let main = document.querySelector("main");
       main.innerHTML += `
       <div class="margin">
            <div class="body-card" onclick="virarCarta(this)">
                <div class="card back">
                    <img src="arquivos/back.png" alt="fundo da carta, papagaio">
                </div>
                <div class="card front">
                    <img src="arquivos/${cartasDoJogo[j]}">
                </div>
            </div>
        </div>
       `
    }
}
cartasSelecionadas();

function Embaralhar() {
    return Math.random() - 0.5; 
}

function virarCarta(cartaSelecionada) {
    cartaSelecionada.classList.toggle("flip");
}