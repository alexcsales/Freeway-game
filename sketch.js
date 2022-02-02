function setup() {
    createCanvas(500, 400);
    somTrilha.loop();
}

function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    movimentaAtor();
    mostraCarros();
    movimentaCarros();
    loopCarros();
    verificaColisao();
    exibePontos();
    marcaPontos();
}