let zoff = 0.0;
let incremento = 0.1 ;
let escala = 5;
let colunas, linhas;
let particula = [];
let campo;


function setup() {
  background(255);
  colorMode(HSB, 255)
  createCanvas(windowWidth, windowHeight);
  colunas = floor(width/escala);
  linhas = floor(height/escala);
  
  campo = new Array(colunas*linhas);
  
  for(let i = 0; i < 500; i++){
    particula[i] = new Particula();
  }
}

function draw() {
  let xoff = 0.0;
  
  for (let x = 0; x < colunas; x++) {
    let yoff = 0.0;
    for (let y = 0; y < linhas; y ++) {
      let indice = x + y * colunas;
      let ruido = noise(xoff, yoff, zoff) * TWO_PI * 4;
      let vetor = p5.Vector.fromAngle(ruido)
      vetor.setMag(1);
      campo[indice] = vetor;
      
      yoff = yoff + incremento;


    }
    xoff = xoff + incremento;
    zoff = zoff + 0.0001;
  }
  
  for (let i = 0; i < particula.length; i ++) {
    particula[i].segue(campo);
    particula[i].atualiza();
    particula[i].mostra();
    particula[i].borda();    
  }

}
