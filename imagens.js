//Imagens
let imagemDaEstrada;
let imagemAtor;
let imagemCarro01;
let imagemCarro02;
let imagemCarro03;

//Sons
let somTrilha;
let somColisao;
let somPontos;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro01 = loadImage("imagens/carro-1.png");
  imagemCarro02 = loadImage("imagens/carro-2.png");
  imagemCarro03 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro01,imagemCarro02,imagemCarro03,
imagemCarro01,imagemCarro02,imagemCarro03];
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPontos = loadSound("sons/pontos.wav");
}