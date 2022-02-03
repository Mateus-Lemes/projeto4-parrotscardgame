let numeroDeCartas = prompt ("Com quantas cartas você quer jogar de 4 a 14? Obs.: Por ser um jogo da memória só é aceito números pares.")

function quantidadeDeCartas() {
    
    while ((quantidadeDeCartas % 2 !== 0) || (4 > quantidadeDeCartas) || (quantidadeDeCartas > 14) || (quantidadeDeCartas == 0)) {
        numeroDeCartas = prompt ("Caracter não permitido. Escolha para jogar de 4 a 14! Obs.: Por ser um jogo da memória só é aceito números pares.")
    }
}
quantidadeDeCartas()