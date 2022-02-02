//carros
let xCarros = [600,600,600,600,600,600];
let yCarros = [42,98,150,215,265,320];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarros = 40;
let alturaCarros = 37;

function mostraCarros(){
  for(let i =0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i],
    comprimentoCarros,alturaCarros);
  }
}
function movimentaCarros(){
  for(let i =0; i < velocidadeCarros.length; i++){
    xCarros[i] -=velocidadeCarros[i];
  }
}
function loopCarros(){
  for(let i =0; i < xCarros.length; i++){
    if(passouTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}
function passouTela(xCarros){
   return xCarros < -50;
}