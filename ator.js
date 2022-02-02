//Ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)) {
    yAtor -= 2;
  }
  if(keyIsDown(DOWN_ARROW)) {
    if(limiteTela()){
      yAtor += 2;
    }
  }
}
function limiteTela(){
  return yAtor < 366;
}
function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i],
    comprimentoCarros, alturaCarros, xAtor,
    yAtor, 15)
      if (colisao){
        voltaInicio();
        somColisao.play();
        if (evitaPontoNegativo()){
          meusPontos -= 1;
      }
    }
  }
}
function evitaPontoNegativo(){
  return meusPontos > 0;
}
function voltaInicio(){
  yAtor = 366;
}
function exibePontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width/5 ,27);  
}
function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    somPontos.play();
    voltaInicio();
  }
}