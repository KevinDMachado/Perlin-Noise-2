function Particula () {
    this.posi = createVector(random(width),random(height));
    this.velocidade = createVector(0,0);
    this.acelerar = createVector(0,0);
    this.maxVel = 2;
    this.cor = 0;

    this.atualiza = function () {
        this.velocidade.add(this.acelerar);
        this.velocidade.limit(this.maxVel);
        this.posi.add(this.velocidade);
        this.acelerar.mult(0);
    }

    this.segue = function(trilha) {
        let x = floor(this.posi.x / escala);
        let y = floor(this.posi.y / escala);
        let indice = x + y * colunas;
        let forca = trilha[indice];
        this.aplicarForca(forca);

    }

    this.aplicarForca = function (forca) {
        this.acelerar.add(forca);
    }

    this.mostra = function () {
        stroke(this.cor,255,255, 15);
        this.cor = this.cor + 1;
        if(this.cor > 255){
            this.cor =0;
        }
        strokeWeight(3)
        point(this.posi.x, this.posi.y)
    }
    
    this.borda = function() {
        if (this.posi.x > width) this.posi.x = 0;
        if (this.posi.x < 0) this.posi.x = width;
        if (this.posi.y > height) this.posi.y = 0;
        if (this.posi.y < 0) this.posi.y = height;

    }

}