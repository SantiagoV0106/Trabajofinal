var rocaImag;
var puerta;
var mapa;
let Nivel = 0;
let inicial = 0;
let posicionPer = 0;
let Skin = 0;
var rocas = [];
var pisos = [];
var puertas = [];
let posx = 1;
let posy = 13;
let Ngemas = 0;
let Vida = 5;
let Ncofre1 = 0;
let Ncofre2 = 0;
let Opcion1 = 0;
let Opcion2 = 0;
let Opcion3 = 0;
let Opcion4 = 0;
let Opcion5 = 0;
let Opcion6 = 0;
let OpcionCof1 = 0;
let OpcionCof2 = 0;
let gema1 = 0;
let gema2 = 0;
let gema3 = 0;
let gema4 = 0;
let gema5 = 0;
let gema6 = 0;
let gema7 = 0;
let gema8 = 0;
let gema9 = 0;
let gema10 = 0;
let gema11 = 0;
let direccionA1 = 0;
let direccionA2 = 0;
let direccionA3 = 0;
let direccionA4 = 0;
contadorA1 = 25;
contadorA2 = 25;
contadorA3 = 25;
contadorA4 = 25;
let direccionEn1 = 0;
let direccionEn2 = 0;
let direccionEn3 = 0;
let direccionEn4 = 0;
let direccionEn5 = 0;
let direccionEn6 = 0;
let direccionEn7 = 0;
let direccionEn8 = 0;
let direccionEn9 = 0;
let direccionEn10 = 0;
let direccionEn11 = 0;
let direccionEn12 = 0;
let direccionEn13 = 0;
let direccionEn14 = 0;
let direccionEn15 = 0;
contador1 = 25;
contador2 = 25;
contador3 = 25;
contador4 = 25;
contador5 = 25;
contador6 = 25;
contador7 = 25;
contador8 = 25;
contador9 = 25;
contador10 = 25;
contador11 = 25;
contador12 = 25;
contador13 = 25;
contador14 = 25;
contador15 = 25;

function preload(){
  rocaImag = loadImage("imagenes/Suelo.png")
  pisoImag = loadImage("imagenes/Piso.jpg")
  Fin = loadImage("imagenes/Fin.png")
  gema = loadImage("imagenes/Gema.png")
  Cofre1 = loadImage("imagenes/Cofre1.png")
  Cofre2 = loadImage("imagenes/Cofre2.png")
  Fondo = loadImage("imagenes/Fondo.png")
  Victoria = loadImage("imagenes/Victoria.png")
  Derrota = loadImage("imagenes/Derrota.png")

  //Puertas
  boton = loadImage("imagenes/Boton.png")
  puerta1 = loadImage("imagenes/Puerta11.png")
  puerta12 = loadImage("imagenes/Puerta12.png")
  boton2 = loadImage("imagenes/Boton2.png")
  puerta2 = loadImage("imagenes/Puerta2.png")
  boton3 = loadImage("imagenes/Boton3.png")
  puerta3 = loadImage("imagenes/Puerta3.png")
  boton4 = loadImage("imagenes/Boton4.png")
  puerta4 = loadImage("imagenes/Puerta4.png")
  boton5 = loadImage("imagenes/Boton5.png")
  puerta5 = loadImage("imagenes/Puerta5.png")

  //Personaje
  personaje11 = loadImage("imagenes/Recurso1.png")
  personaje12 = loadImage("imagenes/Recurso2.png")
  personaje13 = loadImage("imagenes/Recurso3.png")
  personaje14 = loadImage("imagenes/Recurso4.png")
  
  personaje21 = loadImage("imagenes/Recurso21.png")
  personaje22 = loadImage("imagenes/Recurso22.png")
  personaje23 = loadImage("imagenes/Recurso23.png")
  personaje24 = loadImage("imagenes/Recurso24.png")

  personaje31 = loadImage("imagenes/Recurso31.png")
  personaje32 = loadImage("imagenes/Recurso32.png")
  personaje33 = loadImage("imagenes/Recurso33.png")
  personaje34 = loadImage("imagenes/Recurso34.png")

  personaje41 = loadImage("imagenes/Recurso41.png")
  personaje42 = loadImage("imagenes/Recurso42.png")
  personaje43 = loadImage("imagenes/Recurso43.png")
  personaje44 = loadImage("imagenes/Recurso44.png")

  personaje51 = loadImage("imagenes/Recurso51.png")
  personaje52 = loadImage("imagenes/Recurso52.png")
  personaje53 = loadImage("imagenes/Recurso53.png")
  personaje54 = loadImage("imagenes/Recurso54.png")
  //Horizontal
  Aliado1 = loadImage("imagenes/Aliado1.png")
  Aliado3 = loadImage("imagenes/Aliado3.png")
  //vertical
  Aliado2 = loadImage("imagenes/Aliado2.png")
  Aliado4 = loadImage("imagenes/Aliado4.png")
  // ENEMIGOS
  //Horizontal
  Enemigo11 = loadImage("imagenes/Enemigo11.png")
  Enemigo13 = loadImage("imagenes/Enemigo13.png")
  //vertical
  Enemigo12 = loadImage("imagenes/Enemigo12.png")
  Enemigo14 = loadImage("imagenes/Enemigo14.png")
  // ENEMIGO2
  //Horizontal
  Enemigo21 = loadImage("imagenes/Enemigo21.png")
  Enemigo23 = loadImage("imagenes/Enemigo23.png")
  //vertical
  Enemigo22 = loadImage("imagenes/Enemigo22.png")
  Enemigo24 = loadImage("imagenes/Enemigo24.png")
  // ENEMIGO3
  //Horizontal
  Enemigo31 = loadImage("imagenes/Enemigo31.png")
  Enemigo33 = loadImage("imagenes/Enemigo33.png")
  //vertical
  Enemigo32 = loadImage("imagenes/Enemigo32.png")
  Enemigo34 = loadImage("imagenes/Enemigo34.png")
  // ENEMIGO4
  Enemigo4 = loadImage("imagenes/Fanton.png")
  //Vidas
  Vida1 = loadImage("imagenes/Vida1.png")
  Vida2 = loadImage("imagenes/Vida2.png")
  Vida3 = loadImage("imagenes/Vida3.png")
  Vida4 = loadImage("imagenes/Vida4.png")
  Vida5 = loadImage("imagenes/Vida5.png")
  //Inventario
  Inv = loadImage("imagenes/Inventario.png")
  Essh = loadImage("imagenes/EscudoSh.png")
  Eswh = loadImage("imagenes/EscudoWr.png")
}

function setup() {
  createCanvas(1200, 700);
  enemigo1 = new Enemigo(1*40, 1*40) //wirplos
  enemigo2 = new Enemigo(1*40, 1*40)
  enemigo3 = new Enemigo(1*40, 1*40)
  enemigo4 = new Enemigo(1*40, 1*40)
  enemigo5 = new Enemigo(1*40, 1*40)
  enemigo6 = new Enemigo(1*40, 1*40)
  enemigo7 = new Enemigo(1*40, 1*40)
  enemigo8 = new Enemigo(1*40, 1*40)
  enemigo9 = new Enemigo(1*40, 1*40)
  enemigo10 = new Enemigo(1*40, 1*40)
  enemigo11 = new Enemigo(1*40, 1*40)//Chersans
  enemigo12 = new Enemigo(1*40, 1*40)
  enemigo13 = new Enemigo(1*40, 1*40)
  enemigo14 = new Enemigo(1*40, 1*40)
  enemigo15 = new Enemigo(1*40, 1*40)
  aliado1 = new Aliado(1*40, 1*40)
  aliado2 = new Aliado(1*40, 1*40)
  aliado3 = new Aliado(1*40, 1*40)


}

function draw() {
  background(255,255,255);
  for (let i = 0; i < rocas.length; i++) {
    rocas[i].show();
  }
  for (let i = 0; i < pisos.length; i++) {
    pisos[i].show();
  }
  for (let i = 0; i < puertas.length; i++) {
    puertas[i].show();
  }

  //texto
  textSize(35);
  fill(0,0,0);
  stroke(0,0,255);
  image(Inv, 23*40, 10*40, 5*40, 5*40);
  text(Ncofre2, 25*40,12*40);
  text(Ncofre1, 27*40,12*40);
  image(Eswh, 24*40, 11*40, 40, 40);
  image(Essh, 26*40, 11*40, 40, 40);
  text("gemas: " + Ngemas, 24*40,14*40);
  
  
  //Vida
 if(Vida == 5){
    image(Vida1, 1*40, 15*40, 160, 40);
  }else if(Vida == 4){
    image(Vida2, 1*40, 15*40, 160, 40);
  }else if(Vida == 3){
    image(Vida3, 1*40, 15*40, 160, 40);
  }else if(Vida == 2){
    image(Vida4, 1*40, 15*40, 160, 40);
  }else if(Vida == 1){
    image(Vida5, 1*40, 15*40, 160, 40);
  }else if(Vida == 0){
    Nivel = 6;
  }
  
  //PosInicial Personaje
  if(Nivel == 1){
    if(inicial == 1){
      Reset()
      obtenerNivel();
      posx =  1;
      posy = 13;
      enemigo1.x = 11;
      enemigo1.y = 13;
      enemigo2.x = 16;
      enemigo2.y = 1;
      enemigo3.x = 13;
      enemigo3.y = 2;
      enemigo4.x = 8;
      enemigo4.y = 8;
      enemigo11.x = 15;
      enemigo11.y = 5;
      enemigo12.x = 20;
      enemigo12.y = 5;
      enemigo13.x = 25;
      enemigo13.y = 11;
      aliado1.x = 1;
      aliado1.y = 9;

      

      inicial++;
    }
    //Cofre
    image(Cofre1, 19*40, 1*40, 40, 40);
    if(posx == 19 && posy == 1 && OpcionCof1 == 0 && Ngemas >= 7){
      Ngemas = Ngemas-7;
      Ncofre1++;
      OpcionCof1 = 1;
    }

    //gemas
    if(posx == 5 && posy == 13 && gema1 == 0){
      Ngemas++;
      gema1 = 1;
    }else if(gema1 == 0){
      image(gema, 5*40, 13*40, 40, 40);
    }
    if(posx == 12 && posy == 13 && gema2 == 0){
      Ngemas++;
      gema2 = 1;
    }else if(gema2 == 0){
      image(gema, 12*40, 13*40, 40, 40);
    }
    if(posx == 8 && posy == 8 && gema3 == 0){
      Ngemas++;
      gema3 = 1;
    }else if(gema3 == 0){
      image(gema, 8*40, 8*40, 40, 40);
    }
    if(posx == 8 && posy == 5 && gema4 == 0){
      Ngemas++;
      gema4 = 1;
    }else if(gema4 == 0){
      image(gema, 8*40, 5*40, 40, 40);
    }
    if(posx == 12 && posy == 9 && gema5 == 0){
      Ngemas++;
      gema5 = 1;
    }else if(gema5 == 0){
      image(gema, 12*40, 9*40, 40, 40);
    }
    if(posx == 18 && posy == 9 && gema6 == 0){
      Ngemas++;
      gema6 = 1;
    }else if(gema6 == 0){
      image(gema, 18*40, 9*40, 40, 40);
    }
    if(posx == 16 && posy == 5 && gema7 == 0){
      Ngemas++;
      gema7 = 1;
    }else if(gema7 == 0){
      image(gema, 16*40, 5*40, 40, 40);
    }
    if(posx == 13 && posy == 2 && gema8 == 0){
      Ngemas++;
      gema8 = 1;
    }else if(gema8 == 0){
      image(gema, 13*40, 2*40, 40, 40);
    }
    if(posx == 3 && posy == 2 && gema9 == 0){
      Ngemas++;
      gema9 = 1;
    }else if(gema9 == 0){
      image(gema, 3*40, 2*40, 40, 40);
    }
    if(posx == 25 && posy == 2 && gema10 == 0){
      Ngemas++;
      gema10 = 1;
    }else if(gema10 == 0){
      image(gema, 25*40, 2*40, 40, 40);
    }


    //Puertas
    //Puerta1
    if(posx == 9 && posy == 13 && Opcion1 == 0){
      mapa.mapa[3][8] = 0;
      mapa.mapa[3][9] = 0;
      mapa.mapa[3][10] = 0;
      Opcion1 = 1;

    }else if(Opcion1 == 0){
      image(puerta2, 3*40, 10*40, 40, 40);
      image(puerta2, 3*40, 9*40, 40, 40);
      image(puerta2, 3*40, 8*40, 40, 40);
    }
    //puerta2
    if(aliado1.x == 5 && aliado1.y == 9 && Opcion2 == 0){
      mapa.mapa[7][11] = 0;
      mapa.mapa[8][11] = 0;
      mapa.mapa[9][11] = 0;
      Opcion2 = 1;

    }else if(Opcion2 == 0){
      image(puerta5, 7*40, 11*40, 40, 40);
      image(puerta5, 8*40, 11*40, 40, 40);
      image(puerta5, 9*40, 11*40, 40, 40);
    }
    //puerta3
    if(posx == 1 && posy == 5 && Opcion3 == 0){
      mapa.mapa[14][10] = 0;
      mapa.mapa[14][9] = 0;
      mapa.mapa[14][8] = 0;
      mapa.mapa[14][12] = 0;
      mapa.mapa[14][13] = 0;
      mapa.mapa[14][14] = 0;
      Opcion3 = 1;

    }else if(Opcion3 == 0){
      image(puerta1, 14*40, 10*40, 40, 40);
      image(puerta1, 14*40, 9*40, 40, 40);
      image(puerta1, 14*40, 8*40, 40, 40);
      image(puerta1, 14*40, 12*40, 40, 40);
      image(puerta1, 14*40, 13*40, 40, 40);
      image(puerta1, 14*40, 14*40, 40, 40);
    }
    //puerta4
    if(posx == 1 && posy == 2 && Opcion4 == 0){
      mapa.mapa[25][4] = 0;
      
      Opcion4 = 1;

    }else if(Opcion4 == 0){
      image(puerta4, 25*40, 4*40, 40, 40);
      
    }
    //fin 
    image(Fin, 25*40,7*40,40,40);
    //Botones
    image(boton4, 1*40, 2*40, 40, 40);
    image(boton, 1*40, 5*40, 40, 40);
    image(boton5, 5*40, 9*40, 40, 40);
    image(boton2, 9*40, 13*40, 40, 40);
    //Aliado1 Horizontal
    if(direccionA1 == 0){
      image(Aliado1, aliado1.x*40, aliado1.y*40, 40, 40)
    }else{
      image(Aliado3, aliado1.x*40, aliado1.y*40, 40, 40)
    }
    if(contadorA1 == 0){
      if(direccionA1 == 0){
        if(mapa.mapa[aliado1.x+1][aliado1.y] != 1 && mapa.mapa[aliado1.x+1][aliado1.y] != 3 ){
          aliado1.x = aliado1.x + 1;
        }else{
          direccionA1 = 1;
        }
      } else{
        if(mapa.mapa[aliado1.x-1][aliado1.y] != 1 && mapa.mapa[aliado1.x-1][aliado1.y] != 3){
          aliado1.x = aliado1.x - 1;
        }else{
          direccionA1 = 0;
        }
      }
      contadorA1 = 20
    }else{
      contadorA1 --;
    }
    //Enemigo1 Horizontal
    if(direccionEn1 == 0){
      image(Enemigo11, enemigo1.x*40, enemigo1.y*40, 40, 40)
    }else{
      image(Enemigo13, enemigo1.x*40, enemigo1.y*40, 40, 40)
    }
    if(contador1 == 0){
      if(direccionEn1 == 0){
        if(mapa.mapa[enemigo1.x+1][enemigo1.y] != 1 && mapa.mapa[enemigo1.x+1][enemigo1.y] != 3 ){
          enemigo1.x = enemigo1.x + 1;
        }else{
          direccionEn1 = 1;
        }
      } else{
        if(mapa.mapa[enemigo1.x-1][enemigo1.y] != 1 && mapa.mapa[enemigo1.x-1][enemigo1.y] != 3){
          enemigo1.x = enemigo1.x - 1;
        }else{
          direccionEn1 = 0;
        }
      }
      contador1 = 20
    }else{
      contador1 --;
    }
    //Enemigo2 Vertical
    if(direccionEn2 == 0){
      image(Enemigo14, enemigo2.x*40, enemigo2.y*40, 40, 40)
    }else{
      image(Enemigo12, enemigo2.x*40, enemigo2.y*40, 40, 40)
    }
    if(contador2 == 0){
      if(direccionEn2 == 0){
        if(mapa.mapa[enemigo2.x][enemigo2.y + 1] != 1 && mapa.mapa[enemigo2.x][enemigo2.y + 1] != 3){
          enemigo2.y = enemigo2.y + 1;
        }else{
          direccionEn2 = 1;
        }
      } else{
        if(mapa.mapa[enemigo2.x][enemigo2.y - 1] != 1 && mapa.mapa[enemigo2.x][enemigo2.y - 1] != 3){
          enemigo2.y = enemigo2.y - 1;
        }else{
          direccionEn2 = 0;
        }
      }
      contador2 = 20
    }else{
      contador2 --;
    }
    //Enemigo3
    if(direccionEn3 == 0){
      image(Enemigo14, enemigo3.x*40, enemigo3.y*40, 40, 40)
    }else{
      image(Enemigo12, enemigo3.x*40, enemigo3.y*40, 40, 40)
    }
    if(contador3 == 0){
      if(direccionEn3 == 0){
        if(mapa.mapa[enemigo3.x][enemigo3.y + 1] != 1 && mapa.mapa[enemigo3.x][enemigo3.y + 1] != 3){
          enemigo3.y = enemigo3.y + 1;
        }else{
          direccionEn3 = 1;
        }
      } else{
        if(mapa.mapa[enemigo3.x][enemigo3.y - 1] != 1 && mapa.mapa[enemigo3.x][enemigo3.y - 1] != 3){
          enemigo3.y = enemigo3.y - 1;
        }else{
          direccionEn3 = 0;
        }
      }
      contador3 = 20
    }else{
      contador3 --;
    }
    //Enemigo4
    if(direccionEn4 == 0){
      image(Enemigo14, enemigo4.x*40, enemigo4.y*40, 40, 40)
    }else{
      image(Enemigo12, enemigo4.x*40, enemigo4.y*40, 40, 40)
    }
    if(contador4 == 0){
      if(direccionEn4 == 0){
        if(mapa.mapa[enemigo4.x][enemigo4.y + 1] != 1 && mapa.mapa[enemigo4.x][enemigo4.y + 1] != 3){
          enemigo4.y = enemigo4.y + 1;
        }else{
          direccionEn4 = 1;
        }
      } else{
        if(mapa.mapa[enemigo4.x][enemigo4.y - 1] != 1 && mapa.mapa[enemigo4.x][enemigo4.y - 1] != 3){
          enemigo4.y = enemigo4.y - 1;
        }else{
          direccionEn4 = 0;
        }
      }
      contador4 = 20
    }else{
      contador4 --;
    }
    if(posx == enemigo1.x && posy == enemigo1.y && Ncofre2>0 || posx == enemigo2.x && posy == enemigo2.y && Ncofre2>0
      || posx == enemigo3.x && posy == enemigo3.y && Ncofre2>0 || posx == enemigo4.x && posy == enemigo4.y && Ncofre2>0){
      posx = 1;
      posy = 13;
      Ncofre2--;
    }
    if(posx == enemigo1.x && posy == enemigo1.y && Ncofre2==0 || posx == enemigo2.x && posy == enemigo2.y && Ncofre2==0
      || posx == enemigo3.x && posy == enemigo3.y && Ncofre2==0 || posx == enemigo4.x && posy == enemigo4.y && Ncofre2==0){
      posx = 1;
      posy = 13;
      Vida--;
    }
    //shersans
    //Enemigo 11
    if(direccionEn11 == 0){
      image(Enemigo21, enemigo11.x*40, enemigo11.y*40, 40, 40)
    }else{
      image(Enemigo23, enemigo11.x*40, enemigo11.y*40, 40, 40)
    }
    if(contador11 == 0){
      if(direccionEn11 == 0){
        if(mapa.mapa[enemigo11.x+1][enemigo11.y] != 1 && mapa.mapa[enemigo11.x+1][enemigo11.y] != 3 ){
          enemigo11.x = enemigo11.x + 1;
        }else{
          direccionEn11 = 1;
        }
      } else{
        if(mapa.mapa[enemigo11.x-1][enemigo11.y] != 1 && mapa.mapa[enemigo11.x-1][enemigo11.y] != 3){
          enemigo11.x = enemigo11.x - 1;
        }else{
          direccionEn11 = 0;
        }
      }
      contador11 = 20
    }else{
      contador11 --;
    }
    //Enemigo 12
    if(direccionEn12 == 0){
      image(Enemigo24, enemigo12.x*40, enemigo12.y*40, 40, 40)
    }else{
      image(Enemigo22, enemigo12.x*40, enemigo12.y*40, 40, 40)
    }
    if(contador12 == 0){
      if(direccionEn12 == 0){
        if(mapa.mapa[enemigo12.x][enemigo12.y + 1] != 1 && mapa.mapa[enemigo12.x][enemigo12.y + 1] != 3){
          enemigo12.y = enemigo12.y + 1;
        }else{
          direccionEn12 = 1;
        }
      } else{
        if(mapa.mapa[enemigo12.x][enemigo12.y - 1] != 1 && mapa.mapa[enemigo12.x][enemigo12.y - 1] != 3){
          enemigo12.y = enemigo12.y - 1;
        }else{
          direccionEn12 = 0;
        }
      }
      contador12 = 20
    }else{
      contador12 --;
    }
    if(posx == enemigo11.x && posy == enemigo11.y && Ncofre1 > 0|| posx == enemigo12.x && posy == enemigo12.y && Ncofre1 > 0){
      posx = 1;
      posy = 13;
      Ncofre1--;
    }
    if(posx == enemigo11.x && posy == enemigo11.y  && Ncofre1 == 0|| posx == enemigo12.x && posy == enemigo12.y && Ncofre1 == 0){
      posx = 8;
      posy = 8;
    }
    
  }else if(Nivel == 2){
    if(inicial == 2){
      Reset()
      obtenerNivel();
      posx =  14;
      posy = 7; 
      enemigo1.x = 14; 
      enemigo1.y = 2;
      enemigo2.x = 14;
      enemigo2.y = 9;
      enemigo3.x = 10;
      enemigo3.y = 8;
      enemigo4.x = 19;
      enemigo4.y = 8;

      enemigo11.x = 3
      enemigo11.y = 3;
      enemigo12.x = 6;
      enemigo12.y = 8;
      enemigo13.x = 21;
      enemigo13.y = 8;

      aliado1.x = 2;
      aliado1.y = 5;
      aliado2.x = 25;
      aliado2.y = 5;
      inicial++;
    }

    if(posx == 6 && posy == 13 && gema1 == 0){
      Ngemas++;
      gema1 = 1;
    }else if(gema1 == 0){
      image(gema, 6*40, 13*40, 40, 40);
    }
    if(posx == 10 && posy == 13 && gema2 == 0){
      Ngemas++;
      gema2 = 1;
    }else if(gema2 == 0){
      image(gema, 10*40, 13*40, 40, 40);
    }
    if(posx == 2 && posy == 9 && gema3 == 0){
      Ngemas++;
      gema3 = 1;
    }else if(gema3 == 0){
      image(gema, 2*40, 9*40, 40, 40);
    }
    if(posx == 10 && posy == 6 && gema4 == 0){
      Ngemas++;
      gema4 = 1;
    }else if(gema4 == 0){
      image(gema, 10*40, 6*40, 40, 40);
    }
    if(posx == 6 && posy == 3 && gema5 == 0){
      Ngemas++;
      gema5 = 1;
    }else if(gema5 == 0){
      image(gema, 6*40, 3*40, 40, 40);
    }
    if(posx == 14 && posy == 2 && gema6 == 0){
      Ngemas++;
      gema6 = 1;
    }else if(gema6 == 0){
      image(gema, 14*40, 2*40, 40, 40);
    }
    if(posx == 20 && posy == 2 && gema7 == 0){
      Ngemas++;
      gema7 = 1;
    }else if(gema7 == 0){
      image(gema, 20*40, 2*40, 40, 40);
    }
    if(posx == 25 && posy == 2 && gema8 == 0){
      Ngemas++;
      gema8 = 1;
    }else if(gema8 == 0){
      image(gema, 25*40, 2*40, 40, 40);
    }
    if(posx == 26 && posy == 7 && gema9 == 0){
      Ngemas++;
      gema9 = 1;
    }else if(gema9 == 0){
      image(gema, 26*40, 7*40, 40, 40);
    }
    if(posx == 19 && posy == 9 && gema10 == 0){
      Ngemas++;
      gema10 = 1;
    }else if(gema10 == 0){
      image(gema, 19*40, 9*40, 40, 40);
    }
    if(posx == 14 && posy == 9 && gema11 == 0){
      Ngemas++;
      gema11 = 1;
    }else if(gema11 == 0){
      image(gema, 14*40, 9*40, 40, 40);
    }
    //Botones
    image(boton3, 13*40, 5*40, 40, 40);
    image(boton2, 11*40, 5*40, 40, 40);
    image(boton5, 2*40, 13*40, 40, 40);
    image(boton5, 17*40, 5*40, 40, 40);
    image(boton4, 1*40, 2*40, 40, 40);
    image(boton, 17*40, 13*40, 40, 40);

    //Puertas
    //Puerta1
    if(posx == 13 && posy == 5 && Opcion1 == 0){
      mapa.mapa[7][5] = 0;
      Opcion1 = 1;

    }else if(Opcion1 == 0){
      image(puerta3, 7*40, 5*40, 40, 40);

    }
    //Puerta2
    if(aliado1.x == 11 && aliado1.y == 5 && Opcion2 == 0){
      mapa.mapa[12][10] = 0;
      mapa.mapa[12][9] = 0;
      mapa.mapa[12][8] = 0;
      Opcion2 = 1;

    }else if(Opcion2 == 0){
      image(puerta2, 12*40, 10*40, 40, 40);
      image(puerta2, 12*40, 9*40, 40, 40);
      image(puerta2, 12*40, 8*40, 40, 40);

    }
    //Puerta3
    if(posx == 2 && posy == 13 && Opcion3 == 0){
      mapa.mapa[8][4] = 0;
      mapa.mapa[9][4] = 0;
      mapa.mapa[10][4] = 0;
      mapa.mapa[11][4] = 0;
      mapa.mapa[22][5] = 0;
      Opcion3 = 1;

    }else if(Opcion3 == 0){
      image(puerta5, 8*40, 4*40, 40, 40);
      image(puerta5, 9*40, 4*40, 40, 40);
      image(puerta5, 10*40, 4*40, 40, 40);
      image(puerta5, 11*40, 4*40, 40, 40);
      image(puerta5, 22*40, 5*40, 40, 40);

    }
    //Puerta4
    if(aliado2.x == 17 && aliado2.y == 5 && Opcion4 == 0){
      mapa.mapa[20][11] = 0;
      mapa.mapa[21][11] = 0;
      Opcion4 = 1;

    }else if(Opcion4 == 0){
      image(puerta5, 20*40, 11*40, 40, 40);
      image(puerta5, 21*40, 11*40, 40, 40);


    }
    //Puerta5
    if(posx == 1 && posy == 2 && Opcion5 == 0){
      mapa.mapa[18][4] = 0;
      mapa.mapa[19][4] = 0;
      mapa.mapa[20][4] = 0;
      mapa.mapa[21][4] = 0;
      Opcion5 = 1;

    }else if(Opcion5 == 0){
      image(puerta4, 18*40, 4*40, 40, 40);
      image(puerta4, 19*40, 4*40, 40, 40);
      image(puerta4, 20*40, 4*40, 40, 40);
      image(puerta4, 21*40, 4*40, 40, 40);


    }
    //Puerta6
    if(posx == 17 && posy == 13 && Opcion6 == 0){
      mapa.mapa[22][1] = 0;
      mapa.mapa[22][2] = 0;
      mapa.mapa[22][3] = 0;
      mapa.mapa[16][8] = 0;
      mapa.mapa[16][9] = 0;
      mapa.mapa[16][10] = 0;
      mapa.mapa[13][11] = 0;
      mapa.mapa[14][11] = 0;
      mapa.mapa[15][11] = 0;
      Opcion6 = 1;

    }else if(Opcion6 == 0){
      image(puerta1, 22*40, 1*40, 40, 40);
      image(puerta1, 22*40, 2*40, 40, 40);
      image(puerta1, 22*40, 3*40, 40, 40);
      image(puerta1, 16*40, 8*40, 40, 40);
      image(puerta1, 16*40, 9*40, 40, 40);
      image(puerta1, 16*40, 10*40, 40, 40);
      image(puerta12, 13*40, 11*40, 40, 40);
      image(puerta12, 14*40, 11*40, 40, 40);
      image(puerta12, 15*40, 11*40, 40, 40);



    }
    //fin 
    image(Fin, 14*40,14*40,40,40);
    //Cofre
    image(Cofre1, 17*40, 12*40, 40, 40);
    if(posx == 17 && posy == 12 && OpcionCof1 == 0 && Ngemas >= 7){
      Ngemas = Ngemas-7;
      Ncofre1++;
      OpcionCof1 = 1;
    }
    image(Cofre2, 26*40, 2*40, 40, 40);
    if(posx == 26 && posy == 2 && OpcionCof2 == 0 && Ngemas >= 7){
      Ngemas = Ngemas-7;
      Ncofre2++;
      OpcionCof2 = 1;
    }

    //Aliado1 Horizontal
    if(direccionA1 == 0){
      image(Aliado1, aliado1.x*40, aliado1.y*40, 40, 40)
    }else{
      image(Aliado3, aliado1.x*40, aliado1.y*40, 40, 40)
    }
    if(contadorA1 == 0){
      if(direccionA1 == 0){
        if(mapa.mapa[aliado1.x+1][aliado1.y] != 1 && mapa.mapa[aliado1.x+1][aliado1.y] != 3 ){
          aliado1.x = aliado1.x + 1;
        }else{
          direccionA1 = 1;
        }
      } else{
        if(mapa.mapa[aliado1.x-1][aliado1.y] != 1 && mapa.mapa[aliado1.x-1][aliado1.y] != 3){
          aliado1.x = aliado1.x - 1;
        }else{
          direccionA1 = 0;
        }
      }
      contadorA1 = 20
    }else{
      contadorA1 --;
    }
    //Aliado2 
    if(direccionA2 == 0){
      image(Aliado1, aliado2.x*40, aliado2.y*40, 40, 40)
    }else{
      image(Aliado3, aliado2.x*40, aliado2.y*40, 40, 40)
    }
    if(contadorA2 == 0){
      if(direccionA2 == 0){
        if(mapa.mapa[aliado2.x+1][aliado2.y] != 1 && mapa.mapa[aliado2.x+1][aliado2.y] != 3 ){
          aliado2.x = aliado2.x + 1;
        }else{
          direccionA2 = 1;
        }
      } else{
        if(mapa.mapa[aliado2.x-1][aliado2.y] != 1 && mapa.mapa[aliado2.x-1][aliado2.y] != 3){
          aliado2.x = aliado2.x - 1;
        }else{
          direccionA2 = 0;
        }
      }
      contadorA2 = 20
    }else{
      contadorA2 --;
    }
    //Enemigo1 Horizontal
    if(direccionEn1 == 0){
      image(Enemigo11, enemigo1.x*40, enemigo1.y*40, 40, 40)
    }else{
      image(Enemigo13, enemigo1.x*40, enemigo1.y*40, 40, 40)
    }
    if(contador1 == 0){
      if(direccionEn1 == 0){
        if(mapa.mapa[enemigo1.x+1][enemigo1.y] != 1 && mapa.mapa[enemigo1.x+1][enemigo1.y] != 3 ){
          enemigo1.x = enemigo1.x + 1;
        }else{
          direccionEn1 = 1;
        }
      } else{
        if(mapa.mapa[enemigo1.x-1][enemigo1.y] != 1 && mapa.mapa[enemigo1.x-1][enemigo1.y] != 3){
          enemigo1.x = enemigo1.x - 1;
        }else{
          direccionEn1 = 0;
        }
      }
      contador1 = 20
    }else{
      contador1 --;
    }
    //Enemigo2 
    if(direccionEn2 == 0){
      image(Enemigo11, enemigo2.x*40, enemigo2.y*40, 40, 40)
    }else{
      image(Enemigo13, enemigo2.x*40, enemigo2.y*40, 40, 40)
    }
    if(contador2 == 0){
      if(direccionEn2 == 0){
        if(mapa.mapa[enemigo2.x+1][enemigo2.y] != 1 && mapa.mapa[enemigo2.x+1][enemigo2.y] != 3 ){
          enemigo2.x = enemigo2.x + 1;
        }else{
          direccionEn2 = 1;
        }
      } else{
        if(mapa.mapa[enemigo2.x-1][enemigo2.y] != 1 && mapa.mapa[enemigo2.x-1][enemigo2.y] != 3){
          enemigo2.x = enemigo2.x - 1;
        }else{
          direccionEn2 = 0;
        }
      }
      contador2 = 20
    }else{
      contador2 --;
    }
    //Enemigo3 Vertical
    if(direccionEn3 == 0){
      image(Enemigo14, enemigo3.x*40, enemigo3.y*40, 40, 40)
    }else{
      image(Enemigo12, enemigo3.x*40, enemigo3.y*40, 40, 40)
    }
    if(contador3 == 0){
      if(direccionEn3 == 0){
        if(mapa.mapa[enemigo3.x][enemigo3.y + 1] != 1 && mapa.mapa[enemigo3.x][enemigo3.y + 1] != 3){
          enemigo3.y = enemigo3.y + 1;
        }else{
          direccionEn3 = 1;
        }
      } else{
        if(mapa.mapa[enemigo3.x][enemigo3.y - 1] != 1 && mapa.mapa[enemigo3.x][enemigo3.y - 1] != 3){
          enemigo3.y = enemigo3.y - 1;
        }else{
          direccionEn3 = 0;
        }
      }
      contador3 = 20
    }else{
      contador3 --;
    }
    //Enemigo4
    if(direccionEn4 == 0){
      image(Enemigo14, enemigo4.x*40, enemigo4.y*40, 40, 40)
    }else{
      image(Enemigo12, enemigo4.x*40, enemigo4.y*40, 40, 40)
    }
    if(contador4 == 0){
      if(direccionEn4 == 0){
        if(mapa.mapa[enemigo4.x][enemigo4.y + 1] != 1 && mapa.mapa[enemigo4.x][enemigo4.y + 1] != 3){
          enemigo4.y = enemigo4.y + 1;
        }else{
          direccionEn4 = 1;
        }
      } else{
        if(mapa.mapa[enemigo4.x][enemigo4.y - 1] != 1 && mapa.mapa[enemigo4.x][enemigo4.y - 1] != 3){
          enemigo4.y = enemigo4.y - 1;
        }else{
          direccionEn4 = 0;
        }
      }
      contador4 = 20
    }else{
      contador4 --;
    }

    //Enemigo 11
    if(direccionEn11 == 0){
      image(Enemigo21, enemigo11.x*40, enemigo11.y*40, 40, 40)
    }else{
      image(Enemigo23, enemigo11.x*40, enemigo11.y*40, 40, 40)
    }
    if(contador11 == 0){
      if(direccionEn11 == 0){
        if(mapa.mapa[enemigo11.x+1][enemigo11.y] != 1 && mapa.mapa[enemigo11.x+1][enemigo11.y] != 3 ){
          enemigo11.x = enemigo11.x + 1;
        }else{
          direccionEn11 = 1;
        }
      } else{
        if(mapa.mapa[enemigo11.x-1][enemigo11.y] != 1 && mapa.mapa[enemigo11.x-1][enemigo11.y] != 3){
          enemigo11.x = enemigo11.x - 1;
        }else{
          direccionEn11 = 0;
        }
      }
      contador11 = 20
    }else{
      contador11 --;
    }
    //Enemigo 12
    if(direccionEn12 == 0){
      image(Enemigo24, enemigo12.x*40, enemigo12.y*40, 40, 40)
    }else{
      image(Enemigo22, enemigo12.x*40, enemigo12.y*40, 40, 40)
    }
    if(contador12 == 0){
      if(direccionEn12 == 0){
        if(mapa.mapa[enemigo12.x][enemigo12.y + 1] != 1 && mapa.mapa[enemigo12.x][enemigo12.y + 1] != 3){
          enemigo12.y = enemigo12.y + 1;
        }else{
          direccionEn12 = 1;
        }
      } else{
        if(mapa.mapa[enemigo12.x][enemigo12.y - 1] != 1 && mapa.mapa[enemigo12.x][enemigo12.y - 1] != 3){
          enemigo12.y = enemigo12.y - 1;
        }else{
          direccionEn12 = 0;
        }
      }
      contador12 = 20
    }else{
      contador12 --;
    }
    //Enemigo 13
    if(direccionEn13 == 0){
      image(Enemigo24, enemigo13.x*40, enemigo13.y*40, 40, 40)
    }else{
      image(Enemigo22, enemigo13.x*40, enemigo13.y*40, 40, 40)
    }
    if(contador13 == 0){
      if(direccionEn13 == 0){
        if(mapa.mapa[enemigo13.x][enemigo13.y + 1] != 1 && mapa.mapa[enemigo13.x][enemigo13.y + 1] != 3){
          enemigo13.y = enemigo13.y + 1;
        }else{
          direccionEn13 = 1;
        }
      } else{
        if(mapa.mapa[enemigo13.x][enemigo13.y - 1] != 1 && mapa.mapa[enemigo13.x][enemigo13.y - 1] != 3){
          enemigo13.y = enemigo13.y - 1;
        }else{
          direccionEn13 = 0;
        }
      }
      contador13 = 20
    }else{
      contador13 --;
    }
    if(posx == enemigo1.x && posy == enemigo1.y && Ncofre2 > 0 || posx == enemigo2.x && posy == enemigo2.y && Ncofre2 > 0
      || posx == enemigo3.x && posy == enemigo3.y && Ncofre2 > 0 || posx == enemigo4.x && posy == enemigo4.y && Ncofre2 > 0){
      posx = 14;
      posy = 7;
      Ncofre2--;
    }
    if(posx == enemigo1.x && posy == enemigo1.y && Ncofre2 == 0 || posx == enemigo2.x && posy == enemigo2.y && Ncofre2 == 0
      || posx == enemigo3.x && posy == enemigo3.y && Ncofre2 == 0 || posx == enemigo4.x && posy == enemigo4.y && Ncofre2 == 0){
      posx = 14;
      posy = 7;
      Vida--;
    }
    if(posx == enemigo11.x && posy == enemigo11.y && Ncofre1 > 0|| posx == enemigo12.x && posy == enemigo12.y && Ncofre1 > 0
      || posx == enemigo13.x && posy == enemigo13.y && Ncofre1 > 0){
      posx = 14;
      posy = 7;
      Ncofre1--;
    }
    if(posx == enemigo11.x && posy == enemigo11.y && Ncofre1 == 0|| posx == enemigo12.x && posy == enemigo12.y && Ncofre1 == 0
      || posx == enemigo13.x && posy == enemigo13.y && Ncofre1 == 0){
      posx = 10;
      posy = 8;
    }

  }else if(Nivel == 3){
    if(inicial == 3){
      Reset();
      obtenerNivel();
      posx =  20;
      posy = 7;
      enemigo1.x = 5;
      enemigo1.y =  7;
      enemigo2.x = 13;
      enemigo2.y =  8;
      enemigo3.x =5;
      enemigo3.y = 4; 
      enemigo4.x =13;
      enemigo4.y =  4;
      enemigo11.x =20;
      enemigo11.y = 14;
      enemigo12.x = 9;
      enemigo12.y = 13;
      enemigo13.x =17;
      enemigo13.y = 9;
      enemigo14.x =16;
      enemigo14.y = 12;
      aliado1.x = 26;
      aliado1.y = 1;

      enemigo5.x = 24;
      enemigo5.y = 15;
      enemigo6.x = 24;
      enemigo6.y = 15;
      enemigo7.x = 24;
      enemigo7.y = 15;
      enemigo8.x = 24;
      enemigo8.y = 15;
      enemigo9.x = 24;
      enemigo9.y = 15;
      enemigo10.x = 24;
      enemigo10.y = 15;
      enemigo15.x = 24;
      enemigo15.y = 15;
      
      inicial++; 
    }
    if(posx == 9 && posy == 4 && gema1 == 0){
      Ngemas++;
      gema1 = 1;
    }else if(gema1 == 0){
      image(gema, 9*40, 4*40, 40, 40);
    }
    if(posx == 17 && posy == 4 && gema2 == 0){
      Ngemas++;
      gema2 = 1;
    }else if(gema2 == 0){
      image(gema, 17*40, 4*40, 40, 40);
    }
    if(posx == 5 && posy == 13 && gema3 == 0){
      Ngemas++;
      gema3 = 1;
    }else if(gema3 == 0){
      image(gema, 5*40, 13*40, 40, 40);
    }
    if(posx == 13 && posy == 13 && gema4 == 0){
      Ngemas++;
      gema4 = 1;
    }else if(gema4 == 0){
      image(gema, 13*40, 13*40, 40, 40);
    }
    if(posx == 11 && posy == 8 && gema5 == 0){
      Ngemas++;
      gema5 = 1;
    }else if(gema5 == 0){
      image(gema, 11*40, 8*40, 40, 40);
    }
    if(posx == 1 && posy == 3 && gema6 == 0){
      Ngemas++;
      gema6 = 1;
    }else if(gema6 == 0){
      image(gema, 1*40, 3*40, 40, 40);
    }
    if(posx == 20 && posy == 12 && gema7 == 0){
      Ngemas++;
      gema7 = 1;
    }else if(gema7 == 0){
      image(gema, 20*40, 12*40, 40, 40);
    }
    
    //Botones
    image(boton5, 1*40, 14*40, 40, 40);
    image(boton3, 26*40, 4*40, 40, 40);

    //Puerta1
    if(posx == 1 && posy == 14 && Opcion1 == 0){
      mapa.mapa[26][3] = 0;
      Opcion1 = 1;

    }else if(Opcion1 == 0){
      image(puerta5, 26*40, 3*40, 40, 40);

    }
    //Puerta2
    if(aliado1.x == 26 && aliado1.y == 4 && Opcion2 == 0){
      mapa.mapa[22][6] = 0;
      mapa.mapa[22][7] = 0;
      mapa.mapa[22][8] = 0;
      Opcion2 = 1;

    }else if(Opcion2 == 0){
      image(puerta3, 22*40, 6*40, 40, 40);
      image(puerta3, 22*40, 7*40, 40, 40);
      image(puerta3, 22*40, 8*40, 40, 40);

    }
    //fin 
    image(Fin, 26*40,7*40,40,40);

    //Cofre
    image(Cofre1, 21*40, 11*40, 40, 40);
    if(posx == 21 && posy == 11 && OpcionCof1 == 0 && Ngemas >= 7){
      Ngemas = Ngemas-7;
      Ncofre1++;
      OpcionCof1 = 1;
    }
    //Aliado1 Horizontal
    if(direccionA1 == 0){
      image(Aliado2, aliado1.x*40, aliado1.y*40, 40, 40)
    }else{
      image(Aliado4, aliado1.x*40, aliado1.y*40, 40, 40)
    }
    if(contadorA1 == 0){
      if(direccionA1 == 0){
        if(mapa.mapa[aliado1.x][aliado1.y+1] != 1 && mapa.mapa[aliado1.x][aliado1.y+1] != 3 ){
          aliado1.y = aliado1.y + 1;
        }else{
          direccionA1 = 1;
        }
      } else{
        if(mapa.mapa[aliado1.x][aliado1.y-1] != 1 && mapa.mapa[aliado1.x][aliado1.y-1] != 3){
          aliado1.y = aliado1.y - 1;
        }else{
          direccionA1 = 0;
        }
      }
      contadorA1 = 20
    }else{
      contadorA1 --;
    }
    //Enemigo1 Horizontal
    if(direccionEn1 == 0){
      image(Enemigo11, enemigo1.x*40, enemigo1.y*40, 40, 40)
    }else{
      image(Enemigo13, enemigo1.x*40, enemigo1.y*40, 40, 40)
    }
    if(contador1 == 0){
      if(direccionEn1 == 0){
        if(mapa.mapa[enemigo1.x+1][enemigo1.y] != 1 && mapa.mapa[enemigo1.x+1][enemigo1.y] != 3 ){
          enemigo1.x = enemigo1.x + 1;
        }else{
          direccionEn1 = 1;
        }
      } else{
        if(mapa.mapa[enemigo1.x-1][enemigo1.y] != 1 && mapa.mapa[enemigo1.x-1][enemigo1.y] != 3){
          enemigo1.x = enemigo1.x - 1;
        }else{
          direccionEn1 = 0;
        }
      }
      contador1 = 20
    }else{
      contador1 --;
    }
    //Enemigo2 
    if(direccionEn2 == 0){
      image(Enemigo11, enemigo2.x*40, enemigo2.y*40, 40, 40)
    }else{
      image(Enemigo13, enemigo2.x*40, enemigo2.y*40, 40, 40)
    }
    if(contador2 == 0){
      if(direccionEn2 == 0){
        if(mapa.mapa[enemigo2.x+1][enemigo2.y] != 1 && mapa.mapa[enemigo2.x+1][enemigo2.y] != 3 ){
          enemigo2.x = enemigo2.x + 1;
        }else{
          direccionEn2 = 1;
        }
      } else{
        if(mapa.mapa[enemigo2.x-1][enemigo2.y] != 1 && mapa.mapa[enemigo2.x-1][enemigo2.y] != 3){
          enemigo2.x = enemigo2.x - 1;
        }else{
          direccionEn2 = 0;
        }
      }
      contador2 = 20
    }else{
      contador2 --;
    }
    //Enemigo3 Vertical
    if(direccionEn3 == 0){
      image(Enemigo14, enemigo3.x*40, enemigo3.y*40, 40, 40)
    }else{
      image(Enemigo12, enemigo3.x*40, enemigo3.y*40, 40, 40)
    }
    if(contador3 == 0){
      if(direccionEn3 == 0){
        if(mapa.mapa[enemigo3.x][enemigo3.y + 1] != 1 && mapa.mapa[enemigo3.x][enemigo3.y + 1] != 3){
          enemigo3.y = enemigo3.y + 1;
        }else{
          direccionEn3 = 1;
        }
      } else{
        if(mapa.mapa[enemigo3.x][enemigo3.y - 1] != 1 && mapa.mapa[enemigo3.x][enemigo3.y - 1] != 3){
          enemigo3.y = enemigo3.y - 1;
        }else{
          direccionEn3 = 0;
        }
      }
      contador3 = 20
    }else{
      contador3 --;
    }
    //Enemigo4
    if(direccionEn4 == 0){
      image(Enemigo14, enemigo4.x*40, enemigo4.y*40, 40, 40)
    }else{
      image(Enemigo12, enemigo4.x*40, enemigo4.y*40, 40, 40)
    }
    if(contador4 == 0){
      if(direccionEn4 == 0){
        if(mapa.mapa[enemigo4.x][enemigo4.y + 1] != 1 && mapa.mapa[enemigo4.x][enemigo4.y + 1] != 3){
          enemigo4.y = enemigo4.y + 1;
        }else{
          direccionEn4 = 1;
        }
      } else{
        if(mapa.mapa[enemigo4.x][enemigo4.y - 1] != 1 && mapa.mapa[enemigo4.x][enemigo4.y - 1] != 3){
          enemigo4.y = enemigo4.y - 1;
        }else{
          direccionEn4 = 0;
        }
      }
      contador4 = 20
    }else{
      contador4 --;
    }
    //Enemigo 11
    if(direccionEn11 == 0){
      image(Enemigo21, enemigo11.x*40, enemigo11.y*40, 40, 40)
    }else{
      image(Enemigo23, enemigo11.x*40, enemigo11.y*40, 40, 40)
    }
    if(contador11 == 0){
      if(direccionEn11 == 0){
        if(mapa.mapa[enemigo11.x+1][enemigo11.y] != 1 && mapa.mapa[enemigo11.x+1][enemigo11.y] != 3 ){
          enemigo11.x = enemigo11.x + 1;
        }else{
          direccionEn11 = 1;
        }
      } else{
        if(mapa.mapa[enemigo11.x-1][enemigo11.y] != 1 && mapa.mapa[enemigo11.x-1][enemigo11.y] != 3){
          enemigo11.x = enemigo11.x - 1;
        }else{
          direccionEn11 = 0;
        }
      }
      contador11 = 20
    }else{
      contador11 --;
    }
    //Enemigo 12
    if(direccionEn12 == 0){
      image(Enemigo24, enemigo12.x*40, enemigo12.y*40, 40, 40)
    }else{
      image(Enemigo22, enemigo12.x*40, enemigo12.y*40, 40, 40)
    }
    if(contador12 == 0){
      if(direccionEn12 == 0){
        if(mapa.mapa[enemigo12.x][enemigo12.y + 1] != 1 && mapa.mapa[enemigo12.x][enemigo12.y + 1] != 3){
          enemigo12.y = enemigo12.y + 1;
        }else{
          direccionEn12 = 1;
        }
      } else{
        if(mapa.mapa[enemigo12.x][enemigo12.y - 1] != 1 && mapa.mapa[enemigo12.x][enemigo12.y - 1] != 3){
          enemigo12.y = enemigo12.y - 1;
        }else{
          direccionEn12 = 0;
        }
      }
      contador12 = 20
    }else{
      contador12 --;
    }
    //Enemigo 13
    if(direccionEn13 == 0){
      image(Enemigo24, enemigo13.x*40, enemigo13.y*40, 40, 40)
    }else{
      image(Enemigo22, enemigo13.x*40, enemigo13.y*40, 40, 40)
    }
    if(contador13 == 0){
      if(direccionEn13 == 0){
        if(mapa.mapa[enemigo13.x][enemigo13.y + 1] != 1 && mapa.mapa[enemigo13.x][enemigo13.y + 1] != 3){
          enemigo13.y = enemigo13.y + 1;
        }else{
          direccionEn13 = 1;
        }
      } else{
        if(mapa.mapa[enemigo13.x][enemigo13.y - 1] != 1 && mapa.mapa[enemigo13.x][enemigo13.y - 1] != 3){
          enemigo13.y = enemigo13.y - 1;
        }else{
          direccionEn13 = 0;
        }
      }
      contador13 = 20
    }else{
      contador13 --;
    }
    //Enemigo 14
    if(direccionEn14 == 0){
      image(Enemigo24, enemigo14.x*40, enemigo14.y*40, 40, 40)
    }else{
      image(Enemigo22, enemigo14.x*40, enemigo14.y*40, 40, 40)
    }
    if(contador14 == 0){
      if(direccionEn14 == 0){
        if(mapa.mapa[enemigo14.x][enemigo14.y + 1] != 1 && mapa.mapa[enemigo14.x][enemigo14.y + 1] != 3){
          enemigo14.y = enemigo14.y + 1;
        }else{
          direccionEn14 = 1;
        }
      } else{
        if(mapa.mapa[enemigo14.x][enemigo14.y - 1] != 1 && mapa.mapa[enemigo14.x][enemigo14.y - 1] != 3){
          enemigo14.y = enemigo14.y - 1;
        }else{
          direccionEn14 = 0;
        }
      }
      contador14 = 20
    }else{
      contador14 --;
    }
    if(posx == enemigo1.x && posy == enemigo1.y && Ncofre2 > 0 || posx == enemigo2.x && posy == enemigo2.y && Ncofre2 > 0
      || posx == enemigo3.x && posy == enemigo3.y && Ncofre2 > 0 || posx == enemigo4.x && posy == enemigo4.y && Ncofre2 > 0){
      posx = 20;
      posy = 6;
      Ncofre2--;
    }
    if(posx == enemigo1.x && posy == enemigo1.y && Ncofre2 == 0 || posx == enemigo2.x && posy == enemigo2.y && Ncofre2 == 0
      || posx == enemigo3.x && posy == enemigo3.y && Ncofre2 == 0|| posx == enemigo4.x && posy == enemigo4.y && Ncofre2 == 0){
      posx = 20;
      posy = 6;
      Vida--;
    }
    if(posx == enemigo11.x && posy == enemigo11.y && Ncofre1 > 0 || posx == enemigo12.x && posy == enemigo12.y && Ncofre1 > 0
      || posx == enemigo13.x && posy == enemigo13.y && Ncofre1 > 0 || posx == enemigo14.x && posy == enemigo14.y && Ncofre1 > 0){
      posx = 20;
      posy = 6;
      Ncofre1--;
    }
    if(posx == enemigo11.x && posy == enemigo11.y && Ncofre1 == 0 || posx == enemigo12.x && posy == enemigo12.y && Ncofre1 == 0
      || posx == enemigo13.x && posy == enemigo13.y && Ncofre1 == 0 || posx == enemigo14.x && posy == enemigo14.y && Ncofre1 == 0){
      posx = 5;
      posy = 7;
    }
  }else if(Nivel == 4){
    if(inicial == 4){
      Reset();
      obtenerNivel();
      posx =  1;
      posy = 1;
      enemigo1.x = 4;
      enemigo1.y = 2;
      enemigo2.x = 4;
      enemigo2.y = 4;
      enemigo3.x = 4;
      enemigo3.y = 7;
      enemigo4.x = 6;
      enemigo4.y = 10;
      enemigo5.x = 22;
      enemigo5.y = 6;
      enemigo6.x = 26;
      enemigo6.y = 4;
      enemigo7.x = 8;
      enemigo7.y = 3;
      enemigo8.x = 12;
      enemigo8.y = 9;
      enemigo9.x = 20;
      enemigo9.y = 2;
      enemigo10.x = 10;
      enemigo10.y = 11;
      enemigo11.x = 3;
      enemigo11.y = 5;
      enemigo12.x = 8;
      enemigo12.y = 2;
      enemigo13.x = 7;
      enemigo13.y = 12;
      enemigo14.x = 13;
      enemigo14.y = 2;
      enemigo15.x = 17;
      enemigo15.y = 8;
      
      inicial++;
    }
    //gemas
    if(posx == 4 && posy == 4 && gema1 == 0){
      Ngemas++;
      gema1 = 1;
    }else if(gema1 == 0){
      image(gema, 4*40, 4*40, 40, 40);
    }
    if(posx == 2 && posy == 10 && gema2 == 0){
      Ngemas++;
      gema2 = 1;
    }else if(gema2 == 0){
      image(gema, 2*40, 10*40, 40, 40);
    }
    if(posx == 3 && posy == 13 && gema3 == 0){
      Ngemas++;
      gema3 = 1;
    }else if(gema3 == 0){
      image(gema, 3*40, 13*40, 40, 40);
    }
    if(posx == 9 && posy == 2 && gema4 == 0){
      Ngemas++;
      gema4 = 1;
    }else if(gema4 == 0){
      image(gema, 9*40, 2*40, 40, 40);
    }
    if(posx == 10 && posy == 7 && gema5 == 0){
      Ngemas++;
      gema5 = 1;
    }else if(gema5 == 0){
      image(gema, 10*40, 7*40, 40, 40);
    }
    if(posx == 20 && posy == 4 && gema6 == 0){
      Ngemas++;
      gema6 = 1;
    }else if(gema6 == 0){
      image(gema, 20*40, 4*40, 40, 40);
    }
    if(posx == 17 && posy == 12 && gema7 == 0){
      Ngemas++;
      gema7 = 1;
    }else if(gema7 == 0){
      image(gema, 17*40, 12*40, 40, 40);
    }
    //fin 
    image(Fin, 22*40,7*40,40,40);

    //Cofre
    image(Cofre2, 13*40, 11*40, 40, 40)
    if(posx == 13 && posy == 11 && OpcionCof2 == 0 && Ngemas >= 7){
      Ngemas = Ngemas-7;
      Ncofre2++;
      OpcionCof2 = 1;
    }

    //Enemigo1 Horizontal
    if(direccionEn1 == 0){
      image(Enemigo34, enemigo1.x*40, enemigo1.y*40, 40, 40)
    }else{
      image(Enemigo32, enemigo1.x*40, enemigo1.y*40, 40, 40)
    }
    if(contador1 == 0){
      if(direccionEn1 == 0){
        if(mapa.mapa[enemigo1.x][enemigo1.y+1] != 1 && mapa.mapa[enemigo1.x][enemigo1.y+1] != 3 ){
          enemigo1.y = enemigo1.y + 1;
        }else{
          direccionEn1 = 1;
        }
      } else{
        if(mapa.mapa[enemigo1.x][enemigo1.y-1] != 1 && mapa.mapa[enemigo1.x][enemigo1.y-1] != 3){
          enemigo1.y = enemigo1.y - 1;
        }else{
          direccionEn1 = 0;
        }
      }
      contador1 = 10
    }else{
      contador1 --;
    }
    //enemigo2
    if(direccionEn2 == 0){
      image(Enemigo31, enemigo2.x*40, enemigo2.y*40, 40, 40)
    }else{
      image(Enemigo33, enemigo2.x*40, enemigo2.y*40, 40, 40)
    }
    if(contador2 == 0){
      if(direccionEn2 == 0){
        if(mapa.mapa[enemigo2.x+1][enemigo2.y] != 1 && mapa.mapa[enemigo2.x+1][enemigo2.y] != 3 ){
          enemigo2.x = enemigo2.x + 1;
        }else{
          direccionEn2 = 1;
        }
      } else{
        if(mapa.mapa[enemigo2.x-1][enemigo2.y] != 1 && mapa.mapa[enemigo2.x-1][enemigo2.y] != 3){
          enemigo2.x = enemigo2.x - 1;
        }else{
          direccionEn2 = 0;
        }
      }
      contador2 = 10
    }else{
      contador2 --;
    }
    //enemigo3
    if(direccionEn3 == 0){
      image(Enemigo31, enemigo3.x*40, enemigo3.y*40, 40, 40)
    }else{
      image(Enemigo33, enemigo3.x*40, enemigo3.y*40, 40, 40)
    }
    if(contador3 == 0){
      if(direccionEn3 == 0){
        if(mapa.mapa[enemigo3.x+1][enemigo3.y] != 1 && mapa.mapa[enemigo3.x+1][enemigo3.y] != 3 ){
          enemigo3.x = enemigo3.x + 1;
        }else{
          direccionEn3 = 1;
        }
      } else{
        if(mapa.mapa[enemigo3.x-1][enemigo3.y] != 1 && mapa.mapa[enemigo3.x-1][enemigo3.y] != 3){
          enemigo3.x = enemigo3.x - 1;
        }else{
          direccionEn3 = 0;
        }
      }
      contador3 = 10
    }else{
      contador3 --;
    }
    //Enemigo4
    if(direccionEn4 == 0){
      image(Enemigo34, enemigo4.x*40, enemigo4.y*40, 40, 40)
    }else{
      image(Enemigo32, enemigo4.x*40, enemigo4.y*40, 40, 40)
    }
    if(contador4 == 0){
      if(direccionEn4 == 0){
        if(mapa.mapa[enemigo4.x][enemigo4.y+1] != 1 && mapa.mapa[enemigo4.x][enemigo4.y+1] != 3 ){
          enemigo4.y = enemigo4.y + 1;
        }else{
          direccionEn4 = 1;
        }
      } else{
        if(mapa.mapa[enemigo4.x][enemigo4.y-1] != 1 && mapa.mapa[enemigo4.x][enemigo4.y-1] != 3){
          enemigo4.y = enemigo4.y - 1;
        }else{
          direccionEn4 = 0;
        }
      }
      contador4 = 10
    }else{
      contador4 --;
    }
    //enemigo5
    if(direccionEn5 == 0){
      image(Enemigo31, enemigo5.x*40, enemigo5.y*40, 40, 40)
    }else{
      image(Enemigo33, enemigo5.x*40, enemigo5.y*40, 40, 40)
    }
    if(contador5 == 0){
      if(direccionEn5 == 0){
        if(mapa.mapa[enemigo5.x+1][enemigo5.y] != 1 && mapa.mapa[enemigo5.x+1][enemigo5.y] != 3 ){
          enemigo5.x = enemigo5.x + 1;
        }else{
          direccionEn5 = 1;
        }
      } else{
        if(mapa.mapa[enemigo5.x-1][enemigo5.y] != 1 && mapa.mapa[enemigo5.x-1][enemigo5.y] != 3){
          enemigo5.x = enemigo5.x - 1;
        }else{
          direccionEn5 = 0;
        }
      }
      contador5 = 10
    }else{
      contador5 --;
    }
    //Enemigo6
    if(direccionEn6 == 0){
      image(Enemigo34, enemigo6.x*40, enemigo6.y*40, 40, 40)
    }else{
      image(Enemigo32, enemigo6.x*40, enemigo6.y*40, 40, 40)
    }
    if(contador6 == 0){
      if(direccionEn6 == 0){
        if(mapa.mapa[enemigo6.x][enemigo6.y+1] != 1 && mapa.mapa[enemigo6.x][enemigo6.y+1] != 3 ){
          enemigo6.y = enemigo6.y + 1;
        }else{
          direccionEn6 = 1;
        }
      } else{
        if(mapa.mapa[enemigo6.x][enemigo6.y-1] != 1 && mapa.mapa[enemigo6.x][enemigo6.y-1] != 3){
          enemigo6.y = enemigo6.y - 1;
        }else{
          direccionEn6 = 0;
        }
      }
      contador6 = 10
    }else{
      contador6 --;
    }
    //enemigo7
    image(Enemigo4, enemigo7.x*40, enemigo7.y*40, 40, 40)
    if(contador7 == 0){
      if(direccionEn7 == 0){
        if(enemigo7.x + 1 != 16 ){
          enemigo7.x = enemigo7.x + 1;
        }else{
          direccionEn7 = 1;
        }
      } else{
        if(enemigo7.x-1 != 5){
          enemigo7.x = enemigo7.x - 1;
        }else{
          direccionEn7 = 0;
        }
      }
      contador7 = 20
    }else{
      contador7 --;
    }
    //Enemigo8
    image(Enemigo4, enemigo8.x*40, enemigo8.y*40, 40, 40)

    if(contador8 == 0){
      if(direccionEn8 == 0){
        if(enemigo8.y + 1 != 15 ){
          enemigo8.y = enemigo8.y + 1;
        }else{
          direccionEn8 = 1;
        }
      } else{
        if(enemigo8.y-1 != 5){
          enemigo8.y = enemigo8.y - 1;
        }else{
          direccionEn8 = 0;
        }
      }
      contador8 = 20
    }else{
      contador8 --;
    }
    //Enemigo9
    image(Enemigo4, enemigo9.x*40, enemigo9.y*40, 40, 40)
    
    if(contador9 == 0){
      if(direccionEn9 == 0){
        if(enemigo9.y + 1 != 5 ){
          enemigo9.y = enemigo9.y + 1;
        }else{
          direccionEn9 = 1;
        }
      } else{
        if(enemigo9.y-1 != 0){
          enemigo9.y = enemigo9.y - 1;
        }else{
          direccionEn9 = 0;
        }
      }
      contador9 = 20
    }else{
      contador9 --;
    }
    //enemigo10
    if(direccionEn10 == 0){
      image(Enemigo21, enemigo10.x*40, enemigo10.y*40, 40, 40)
    }else{
      image(Enemigo23, enemigo10.x*40, enemigo10.y*40, 40, 40)
    }
    if(contador10 == 0){
      if(direccionEn10 == 0){
        if(mapa.mapa[enemigo10.x+1][enemigo10.y] != 1 && mapa.mapa[enemigo10.x+1][enemigo10.y] != 3 ){
          enemigo10.x = enemigo10.x + 1;
        }else{
          direccionEn10 = 1;
        }
      } else{
        if(mapa.mapa[enemigo10.x-1][enemigo10.y] != 1 && mapa.mapa[enemigo10.x-1][enemigo10.y] != 3){
          enemigo10.x = enemigo10.x - 1;
        }else{
          direccionEn10 = 0;
        }
      }
      contador10 = 10
    }else{
      contador10 --;
    }
    //enemigo11
    if(direccionEn11 == 0){
      image(Enemigo21, enemigo11.x*40, enemigo11.y*40, 40, 40)
    }else{
      image(Enemigo23, enemigo11.x*40, enemigo11.y*40, 40, 40)
    }
    if(contador11 == 0){
      if(direccionEn11 == 0){
        if(mapa.mapa[enemigo11.x+1][enemigo11.y] != 1 && mapa.mapa[enemigo11.x+1][enemigo11.y] != 3 ){
          enemigo11.x = enemigo11.x + 1;
        }else{
          direccionEn11 = 1;
        }
      } else{
        if(mapa.mapa[enemigo11.x-1][enemigo11.y] != 1 && mapa.mapa[enemigo11.x-1][enemigo11.y] != 3){
          enemigo11.x = enemigo11.x - 1;
        }else{
          direccionEn11 = 0;
        }
      }
      contador11 = 20
    }else{
      contador11 --;
    }
    //enemigo12
    if(direccionEn12 == 0){
      image(Enemigo21, enemigo12.x*40, enemigo12.y*40, 40, 40)
    }else{
      image(Enemigo23, enemigo12.x*40, enemigo12.y*40, 40, 40)
    }
    if(contador12 == 0){
      if(direccionEn12 == 0){
        if(mapa.mapa[enemigo12.x+1][enemigo12.y] != 1 && mapa.mapa[enemigo12.x+1][enemigo12.y] != 3 ){
          enemigo12.x = enemigo12.x + 1;
        }else{
          direccionEn12 = 1;
        }
      } else{
        if(mapa.mapa[enemigo12.x-1][enemigo12.y] != 1 && mapa.mapa[enemigo12.x-1][enemigo12.y] != 3){
          enemigo12.x = enemigo12.x - 1;
        }else{
          direccionEn12 = 0;
        }
      }
      contador12 = 20
    }else{
      contador12 --;
    }
    //enemigo13
    if(direccionEn13 == 0){
      image(Enemigo21, enemigo13.x*40, enemigo13.y*40, 40, 40)
    }else{
      image(Enemigo23, enemigo13.x*40, enemigo13.y*40, 40, 40)
    }
    if(contador13 == 0){
      if(direccionEn13 == 0){
        if(mapa.mapa[enemigo13.x+1][enemigo13.y] != 1 && mapa.mapa[enemigo13.x+1][enemigo13.y] != 3 ){
          enemigo13.x = enemigo13.x + 1;
        }else{
          direccionEn13 = 1;
        }
      } else{
        if(mapa.mapa[enemigo13.x-1][enemigo13.y] != 1 && mapa.mapa[enemigo13.x-1][enemigo13.y] != 3){
          enemigo13.x = enemigo13.x - 1;
        }else{
          direccionEn13 = 0;
        }
      }
      contador13 = 20
    }else{
      contador13 --;
    }
    //enemigo14
    if(direccionEn14 == 0){
      image(Enemigo21, enemigo14.x*40, enemigo14.y*40, 40, 40)
    }else{
      image(Enemigo23, enemigo14.x*40, enemigo14.y*40, 40, 40)
    }
    if(contador14 == 0){
      if(direccionEn14 == 0){
        if(mapa.mapa[enemigo14.x+1][enemigo14.y] != 1 && mapa.mapa[enemigo14.x+1][enemigo14.y] != 3 ){
          enemigo14.x = enemigo14.x + 1;
        }else{
          direccionEn14 = 1;
        }
      } else{
        if(mapa.mapa[enemigo14.x-1][enemigo14.y] != 1 && mapa.mapa[enemigo14.x-1][enemigo14.y] != 3){
          enemigo14.x = enemigo14.x - 1;
        }else{
          direccionEn14 = 0;
        }
      }
      contador14 = 20
    }else{
      contador14 --;
    }
    //Enemigo15
    if(direccionEn15 == 0){
      image(Enemigo24, enemigo15.x*40, enemigo15.y*40, 40, 40)
    }else{
      image(Enemigo22, enemigo15.x*40, enemigo15.y*40, 40, 40)
    }
    if(contador15 == 0){
      if(direccionEn15 == 0){
        if(mapa.mapa[enemigo15.x][enemigo15.y+1] != 1 && mapa.mapa[enemigo15.x][enemigo15.y+1] != 3 ){
          enemigo15.y = enemigo15.y + 1;
        }else{
          direccionEn15 = 1;
        }
      } else{
        if(mapa.mapa[enemigo15.x][enemigo15.y-1] != 1 && mapa.mapa[enemigo15.x][enemigo15.y-1] != 3){
          enemigo15.y = enemigo15.y - 1;
        }else{
          direccionEn15 = 0;
        }
      }
      contador15 = 20
    }else{
      contador15 --;
    }
    if(posx == enemigo1.x && posy == enemigo1.y && Ncofre2 > 0 || posx == enemigo2.x && posy == enemigo2.y && Ncofre2 > 0
      || posx == enemigo3.x && posy == enemigo3.y && Ncofre2 > 0 || posx == enemigo4.x && posy == enemigo4.y && Ncofre2 > 0
      || posx == enemigo5.x && posy == enemigo5.y && Ncofre2 > 0 || posx == enemigo6.x && posy == enemigo6.y && Ncofre2 > 0
      || posx == enemigo7.x && posy == enemigo7.y && Ncofre2 > 0 || posx == enemigo8.x && posy == enemigo8.y && Ncofre2 > 0
      || posx == enemigo9.x && posy == enemigo9.y && Ncofre2 > 0 || posx == enemigo10.x && posy == enemigo10.y && Ncofre2 > 0){
      posx = 1;
      posy = 1;
      Ncofre2--;
    }
    if(posx == enemigo1.x && posy == enemigo1.y && Ncofre2 == 0 || posx == enemigo2.x && posy == enemigo2.y && Ncofre2 == 0
      || posx == enemigo3.x && posy == enemigo3.y && Ncofre2 == 0 || posx == enemigo4.x && posy == enemigo4.y && Ncofre2 == 0
      || posx == enemigo5.x && posy == enemigo5.y && Ncofre2 == 0 || posx == enemigo6.x && posy == enemigo6.y && Ncofre2 == 0
      || posx == enemigo7.x && posy == enemigo7.y && Ncofre2 == 0 || posx == enemigo8.x && posy == enemigo8.y && Ncofre2 == 0
      || posx == enemigo9.x && posy == enemigo9.y && Ncofre2 == 0 || posx == enemigo10.x && posy == enemigo10.y && Ncofre2 == 0){
      posx = 1;
      posy = 1;
      Vida--;
    }
    if(posx == enemigo11.x && posy == enemigo11.y && Ncofre1 > 0|| posx == enemigo12.x && posy == enemigo12.y && Ncofre1 > 0
      || posx == enemigo13.x && posy == enemigo13.y && Ncofre1 > 0 || posx == enemigo14.x && posy == enemigo14.y && Ncofre1 > 0
      || posx == enemigo15.x && posy == enemigo15.y && Ncofre1 > 0){
      posx = 1;
      posy = 1;
      Ncofre1--;
    }
    if(posx == enemigo11.x && posy == enemigo11.y && Ncofre1 == 0 || posx == enemigo12.x && posy == enemigo12.y && Ncofre1 == 0
      || posx == enemigo13.x && posy == enemigo13.y && Ncofre1 == 0 || posx == enemigo14.x && posy == enemigo14.y && Ncofre1 == 0
      || posx == enemigo15.x && posy == enemigo15.y && Ncofre1 == 0){
      posx = 4;
      posy = 8;
    }

  }else if(Nivel == 5){
    if(inicial == 5){
      Reset()
      obtenerNivel();
      
      inicial++;
    }
    image(Victoria, 1*40,1*40,27*40,14*40);
  }else if(Nivel == 6){
    if(inicial == 6){
      Reset()
      obtenerNivel();
      
      inicial++;
    }
    image(Derrota, 1*40,1*40,27*40,14*40);
  }else if(Nivel == 0){
    if(inicial == 0){
      Reset()
      obtenerNivel();
      posx =  2;
      posy = 12;
      
      inicial++;
    }
    //fin 
    image(Fin, 20*40,12*40,40,40);
    image(Fondo, 3*40, 1*40, 23*40, 8* 40)

  }

  if(mapa.mapa[posx][posy] == 5){
    Nivel++;
  }
  if(Nivel != 6 && Nivel != 5){
    //personaje
    if(Skin == 0){
      if(posicionPer == 0){
        image(personaje11, posx*40,posy*40,40,40);
      }else if(posicionPer == 1){
        image(personaje12, posx*40,posy*40,40,40);
      }else if(posicionPer == 2){
        image(personaje13, posx*40,posy*40,40,40);
      }else if(posicionPer == 3){
        image(personaje14, posx*40,posy*40,40,40);
      }
    }else if(Skin == 1){
      if(posicionPer == 0){
        image(personaje21, posx*40,posy*40,40,40);
      }else if(posicionPer == 1){
        image(personaje22, posx*40,posy*40,40,40);
      }else if(posicionPer == 2){
        image(personaje23, posx*40,posy*40,40,40);
      }else if(posicionPer == 3){
        image(personaje24, posx*40,posy*40,40,40);
      }
    }else if(Skin == 2){
      if(posicionPer == 0){
        image(personaje31, posx*40,posy*40,40,40);
      }else if(posicionPer == 1){
        image(personaje32, posx*40,posy*40,40,40);
      }else if(posicionPer == 2){
        image(personaje33, posx*40,posy*40,40,40);
      }else if(posicionPer == 3){
        image(personaje34, posx*40,posy*40,40,40);
      }
    }else if(Skin == 3){
      if(posicionPer == 0){
        image(personaje41, posx*40,posy*40,40,40);
      }else if(posicionPer == 1){
        image(personaje42, posx*40,posy*40,40,40);
      }else if(posicionPer == 2){
        image(personaje43, posx*40,posy*40,40,40);
      }else if(posicionPer == 3){
        image(personaje44, posx*40,posy*40,40,40);
      }
    }else if(Skin == 4){
      if(posicionPer == 0){
        image(personaje51, posx*40,posy*40,40,40);
      }else if(posicionPer == 1){
        image(personaje52, posx*40,posy*40,40,40);
      }else if(posicionPer == 2){
        image(personaje53, posx*40,posy*40,40,40);
      }else if(posicionPer == 3){
        image(personaje54, posx*40,posy*40,40,40);
      }
    }
  }
  

  
  
  
}

function keyPressed(){
  if(keyCode == 65){
    if(mapa.mapa[posx-1][posy] != 1 && mapa.mapa[posx-1][posy] != 3){
      posx = posx - 1;
      posicionPer = 2;
    }
  }else if(keyCode == 68){
    if(mapa.mapa[posx+1][posy] != 1 && mapa.mapa[posx+1][posy] != 3){
      posx = posx + 1;
      posicionPer = 0;
    }      
  }else if(keyCode == 87){
    if(mapa.mapa[posx][posy-1] != 1 && mapa.mapa[posx][posy-1] != 3){
      posy = posy -1;
      posicionPer = 3;
    }      
  }else if(keyCode == 83){
    if(mapa.mapa[posx][posy+1] != 1 && mapa.mapa[posx][posy+1] != 3){
      posy = posy + 1;
      posicionPer = 1; 
    } 
  }
  if(keyCode == 49){
    Skin = 0;
  }else if(keyCode == 50){
    Skin = 1;
  }else if(keyCode == 51){
    Skin = 2;
  }else if(keyCode == 52){
    Skin = 3;
  }else if(keyCode == 53){
    Skin = 4;
  }
}
function obtenerNivel(){
  mapa = new ObtenerMapa(Nivel);
  for (var i = 0; i < mapa.columnas; i++) {
    for (var j = 0; j < mapa.filas; j++) {
      if(mapa.mapa[j][i] == "1"){
        rocas.push(new Roca(j*40,i*40));
      } else if(mapa.mapa[j][i] == "0"){
        pisos.push(new Piso(j*40,i*40));
      }else if(mapa.mapa[j][i] == "3"){
        pisos.push(new Piso(j*40,i*40));
      }
    }   
  }
}
function Reset(){
  rocas = [];
  pisos = [];
  puertas = [];
  gema1 = 0;
  gema2 = 0;
  gema3 = 0;
  gema4 = 0;
  gema5 = 0;
  gema6 = 0;
  gema7 = 0;
  gema8 = 0;
  gema9 = 0;
  gema10 = 0;
  gema11 = 0;
  Opcion1 = 0;
  Opcion2 = 0;
  Opcion3 = 0;
  Opcion4 = 0;
  Opcion5 = 0;
  Opcion6 = 0;
  OpcionCof1 = 0;
  OpcionCof2 = 0;
   direccionEn1 = 0;
   direccionEn2 = 0;
   direccionEn3 = 0;
   direccionEn4 = 0;
   direccionEn5 = 0;
   direccionEn6 = 0;
   direccionEn7 = 0;
   direccionEn8 = 0;
   direccionEn9 = 0;
   direccionEn10 = 0;
   direccionEn11 = 0;
   direccionEn12 = 0;
   direccionEn13 = 0;
   direccionEn14 = 0;
   direccionEn15 = 0;

}