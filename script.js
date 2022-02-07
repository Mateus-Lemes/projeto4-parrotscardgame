let numeroDeCartas = parseInt (prompt ("Com quantas cartas você quer jogar de 4 a 14? Obs.: Por ser um jogo da memória só é aceito números pares."));
let cartas = ["bobrossparrot.gif",
 "explodyparrot.gif", 
 "fiestaparrot.gif", 
 "metalparrot.gif", 
 "revertitparrot.gif", 
 "tripletsparrot.gif", 
 "unicornparrot.gif"];
let cartasDoJogo = [];
let testePares = [];
let contadorDeCartas = 0;


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
            <div class="body-card" onclick="virarCarta(this)" data-identifier="card">
                <div class="card back" data-identifier="back-face">
                    <img src="arquivos/back.png" alt="fundo da carta, papagaio">
                </div>
                <div class="card front" data-identifier="front-face">
                    <img src="arquivos/${cartasDoJogo[j]}">
                </div>
            </div>
       `
    }
}
cartasSelecionadas();

function Embaralhar() {
    return Math.random() - 0.5; 
}

let jogadas = 0;

function virarCarta(cartaSelecionada) {

    jogadas++

    if (testePares.length < 2) {
        cartaSelecionada.classList.add("flip");
        testePares.push(cartaSelecionada.querySelector(".front img"));
        cartaSelecionada.classList.add("desativar-click");
       
    }

    let primeiraCarta = testePares[0].parentNode.innerHTML;
    let segundaCarta = testePares[1].parentNode.innerHTML;

    if (testePares.length == 2) {
        if ( primeiraCarta == segundaCarta) {
            contadorDeCartas = contadorDeCartas + 2;
            
            testePares = [];
        } else {
            setTimeout(removerFlip, 1000);
            testePares[0].parentNode.parentNode.classList.remove("desativar-click");
            testePares[1].parentNode.parentNode.classList.remove("desativar-click");
        }
    }
    setTimeout(fimDeJogo, 100);
}

function removerFlip() {
    testePares[0].parentNode.parentNode.classList.remove("flip");
    
    testePares[1].parentNode.parentNode.classList.remove("flip");
   
    testePares = [];
}

function fimDeJogo() {
    if (contadorDeCartas === numeroDeCartas) {
        alert(`"Parabéns, você ganhou em ${jogadas} jogadas!"`);
        let jogarDeNovo = prompt ("Quer jogar de novo? s ou n");
        jogarDeNovo.toUpperCase();
        if (jogarDeNovo == "s"){
        document.location.reload(true);
        } else if (jogarDeNovo == "n") {
        alert("Obrigado por jogar conosco, volte sempre! :)")
        } 
    }
}
