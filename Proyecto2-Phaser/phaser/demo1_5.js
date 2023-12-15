const Architect = synaptic.Architect;
const Layer = synaptic.Layer;
const Network = synaptic.Network;
var w=800;
var h=400;
var jugador;
var fondo;

var bala,balaV, balaD=false, balaDV=false, nave;

var salto;
var menu;
var cuenta = 0;

var Sa=73;
var Sb=47;

var velocidadBala;
var despBala;
var velocidadBalaV;
var despBalaV;
var despBalaVX;
var estatusAire;
var estatuSuelo;
var estatus_salto;
var estatus_izquierda;
var estatus_derecha;

var nnNetwork ,nnNetwork1, nnEntrenamiento,nnEntrenamiento1, nnSalida,nnSalida1 , datosPreEntrenamiento=[] ;
var modoAuto = false, eCompleto=false, eCompleto2=false;

var  datos=[],datosEntrenamientoS=[],datosEntrenamientoLR=[],datosEntrenamientoGen=[]



var juego = new Phaser.Game(w, h, Phaser.CANVAS, '', { preload: preload, create: create, update: update, render:render});

function preload() {
    juego.load.image('fondo', 'assets/game/fondo.jpg');
    juego.load.spritesheet('mono', 'assets/sprites/altair2.png',24 ,45);
    juego.load.image('nave', 'assets/game/ufo.png');
    juego.load.image('bala', 'assets/sprites/purple_ball.png');
    juego.load.image('menu', 'assets/game/menu.png');
    juego.load.image('sign', 'assets/game/sign.png');

}
function nuevoDataset(){
    for (const elemento of datos) {
        const input = elemento.input;
        const output = elemento.output;
        var salida1 = nnNetworkS.activate([input[0],input[1]]);
        var salida2 = nnNetworkLR.activate([input[2],input[0],input[3]]);
        datosEntrenamientoGen.push({
            'input' :  [salida1[0] , salida2[0]],
            'output':  output  
    });

    }

}


function create() {

    juego.physics.startSystem(Phaser.Physics.ARCADE);
    //juego.physics.arcade.gravity.y = 800;
    juego.time.desiredFps = 30;

    fondo = juego.add.tileSprite(0, 0, w, h, 'fondo');
    senal = juego.add.sprite(w-300,h-70,'sign');
    bala = juego.add.sprite(w-100, h, 'bala');
    balaV = juego.add.sprite(w-710, h-330, 'bala');
    nave = juego.add.sprite(w-100, h-70, 'nave');
    nave2 = juego.add.sprite(w-750, h-380, 'nave');
    
    jugador = juego.add.sprite(70, h, 'mono');
    

    juego.physics.enable(jugador);
    jugador.body.collideWorldBounds = true;
    var corre = jugador.animations.add('corre',[0,1,2,3]);
    jugador.animations.play('corre', 10, true);

    jugador.body.gravity.y=1000;

    juego.physics.enable(bala);
    bala.body.collideWorldBounds = true;

    juego.physics.enable(balaV);
    balaV.body.collideWorldBounds = true;

    score = juego.add.text(w/2, 20, '', { font: '40px Arial', fill: '#fff' });
    

    pausaL = juego.add.text(w - 100, 20, 'Pausa', { font: '20px Arial', fill: '#fff' });
    pausaL.inputEnabled = true;
    pausaL.events.onInputUp.add(pausa, self);
    juego.input.onDown.add(mPausa, self);

    salto = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
    derecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    izquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    

    nnNetworkS =  new synaptic.Architect.Perceptron(2,3,1);
    nnNetworkLR=  new synaptic.Architect.Perceptron(3,4,1);
    nnNetworkGen =  new synaptic.Architect.Perceptron(2,4,2);

    nnEntrenamientoS = new synaptic.Trainer(nnNetworkS);
    nnEntrenamientoLR = new synaptic.Trainer(nnNetworkLR);
    nnEntrenamientoGen = new synaptic.Trainer(nnNetworkGen);

}

function enRedNeural(nn,data){
    nnEntrenamiento = new synaptic.Trainer(nn);
    nnEntrenamiento.train(data, {rate: 0.0003, iterations: 20000, shuffle: true});
}

function enRedNeural2(){
    nnEntrenamiento.train(datosPreEntrenamiento, {rate: 0.0003, iterations: 17000, shuffle: false});
}


function datosDeEntrenamiento(param_entrada){

    console.log("Entrada",param_entrada[0]+" "+param_entrada[1]+" "+param_entrada[2]+" "+param_entrada[3]);
    nnSalida = nnNetworkS.activate([param_entrada[0],param_entrada[1]]);
    nnSalida1 = nnNetworkLR.activate([param_entrada[2],param_entrada[0],param_entrada[3]]);
    nnSalida2 = nnNetworkGen.activate([nnSalida[0],nnSalida1[0]]);

    var act1=Math.round( nnSalida2[0]*100 );
    var act2=Math.round( nnSalida2[1]*100 );
    //var piso=Math.round( nnSalida[1]*100 );
    var acts = [Sa<act1,Sb< act2]
    console.log("Salidas: ","% Salto: "+ act1 +" % Der: "+ act2);
    return acts;
}



function pausa(){
    juego.paused = true;
    menu = juego.add.sprite(w/2,h/2, 'menu');
    menu.anchor.setTo(0.5, 0.5);
}

function mPausa(event){
    if(juego.paused){
        var menu_x1 = w/2 - 270/2, menu_x2 = w/2 + 270/2,
            menu_y1 = h/2 - 180/2, menu_y2 = h/2 + 180/2;

        var mouse_x = event.x  ,
            mouse_y = event.y  ;

        if(mouse_x > menu_x1 && mouse_x < menu_x2 && mouse_y > menu_y1 && mouse_y < menu_y2 ){
            if(mouse_x >=menu_x1 && mouse_x <=menu_x2 && mouse_y >=menu_y1 && mouse_y <=menu_y1+60){
                eCompleto=false;
                datos = [];
                modoAuto = false;
            }else if (mouse_x >=menu_x1 && mouse_x <=menu_x2 && mouse_y >=menu_y1+60 && mouse_y <=menu_y1+120) {
                if(!eCompleto) {
                    console.log(""," "+ datos.length +" valores" );
                    if (datos.length >= 23) {
                        datos.splice(-23);
                        datosEntrenamientoS.splice(-23);
                        datosEntrenamientoLR.splice(-23);
                      }
                    console.log("","Entrenamiento con "+ datos.length +" valores" );
                    enRedNeural(nnNetworkS,datosEntrenamientoS);
                    enRedNeural(nnNetworkLR,datosEntrenamientoLR);
                    nuevoDataset();
                    enRedNeural(nnNetworkGen,datosEntrenamientoGen);
                    
                    eCompleto=true;
                }
                modoAuto = true;
            }else if(mouse_x >=menu_x1 && mouse_x <=menu_x2 && mouse_y >=menu_y1+120 && mouse_y <=menu_y2) {
                if(!eCompleto2) {
                    console.log("","Entrenamiento "+ datosPreEntrenamiento.length +" valores" );
                    enRedNeural2();
                    eCompleto2=true;
                }
                modoAuto = true;
            }
            cuenta=0;

            menu.destroy();
            resetVariables();
            resetVariablesV();
            resetPos();
            juego.paused = false;

        }
    }
}


function resetVariables(){
    bala.body.velocity.x = 0;
    bala.position.x = w-100;

    //jugador.position.x=70;
    balaD=false;
}
function resetVariablesV(){
    balaV.body.velocity.y = 0;
    balaV.position.y = h-330;
    balaDV=false;
}

function resetPos(){
    jugador.body.velocity.x=0;
    jugador.body.velocity.y=0;
    jugador.position.x=70;
}


function saltar(){
    jugador.body.velocity.y = -300;
}
function der(){
    jugador.body.velocity.x = 120;
}
function izq(){
    jugador.body.velocity.x = -100;
}
function reset(){
    if(jugador.position.x > 70){
        jugador.body.velocity.x = -180;
    }
    //if(jugador.position.x < 70){
    //    jugador.body.velocity.x = 100
    //}
    if(jugador.position.x <= 70){
        jugador.position.x =70;
        jugador.body.velocity.x = 0;
    }  
}

function update() {
    cuenta += 1;
    score.text = cuenta.toString();


    fondo.tilePosition.x -= 5; 

    juego.physics.arcade.collide(bala, jugador, colisionH, null, this);
    juego.physics.arcade.collide(balaV, jugador, colisionH, null, this);

    if(jugador.position.x >= w-275){
        colisionH();
    }

    estatus_salto = 0;
    //estatuSuelo = 1;
    //estatusAire = 0;

    if(!jugador.body.onFloor()) {
        //estatuSuelo = 0;
        //estatusAire = 1;
        estatus_salto = 1;
    }

    estatus_derecha = 0;
    if(derecha.isDown){
        estatus_derecha = 1;
    }
    estatus_izquierda = 0;
    if(izquierda.isDown){
        estatus_izquierda = 1;
    }
	
    despBala = Math.floor( jugador.position.x - bala.position.x );
    despBalaV = Math.floor( jugador.position.y - balaV.position.y );
    despBalaVX = Math.floor( jugador.position.x - balaV.position.x );
    //diaBalaV = Math.floor(Math.sqrt(despBalaV*despBalaV + despBalaVX*despBalaVX))

    distSign = Math.floor( w-100 -jugador.position.x);



    if( modoAuto==false && derecha.isDown ){
        der();
    }
    //else if( modoAuto==false && izquierda.isDown){
    //    izq();
    //}
    else {
        reset();
    }

    if( modoAuto==false && salto.isDown &&  jugador.body.onFloor() ){
        saltar();
    }
    
    if( modoAuto == true  && (bala.position.x>0 || balaV.position.y>0)) {
        var res = datosDeEntrenamiento( [despBala , velocidadBala ,despBalaVX,distSign]);
        if( res[0] && jugador.body.onFloor()){
            saltar();
        }
        if(res[1]){
            der();
        }
        
    }

    if( balaD==false ){
        disparo();
    }

    if( bala.position.x <= 0  ){
        resetVariables();
    }
    //bala vertical
    if( balaDV==false ){
        disparoV();
    }

    if( balaV.position.y ==383 ){
        resetVariablesV();
    }
    
    if( modoAuto ==false  && bala.position.x > 0 ){

        datos.push({
                'input' :  [despBala , velocidadBala,despBalaVX,distSign],
                'output':  [estatus_salto,estatus_derecha]  
        });

        datosEntrenamientoS.push({
            'input' :  [despBala , velocidadBala],
            'output':  [estatus_salto]  
        });
        datosEntrenamientoLR.push({
            'input' :  [despBalaVX,despBala,distSign],
            'output':  [estatus_derecha]  
        });
    

        console.log("",
            despBala + "," +velocidadBala + ","+ despBalaVX + ","+distSign + "," +estatus_salto + ","+ estatus_derecha);
   }

}


function disparo(){
    //bala horizontal
    velocidadBala =  -1 * velocidadRandom(300,650);
    bala.body.velocity.y = 0 ;
    bala.body.velocity.x = velocidadBala ;
    balaD=true;
}
function disparoV(){
//bala vertical
velocidadBalaV =  velocidadRandom(100,250);
balaV.body.velocity.y = velocidadBalaV ;
balaV.body.velocity.x = 0 ;
balaDV=true;
}

function colisionH(){
    pausa();
}

function velocidadRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function render(){

}


document.getElementById('fileInput').addEventListener('change', handleFile);

function handleFile(event) {
    const file = event.target.files[0];

    if (file) {
        // Crear un lector de archivos
        const reader = new FileReader();

        // Configurar la función de devolución de llamada cuando se complete la lectura
        reader.onload = function(e) {
            // El contenido del archivo CSV está en e.target.result
            const csvContent = e.target.result;
            
            // Llamar a una función para procesar el contenido del CSV
            processData(csvContent);
        };

        // Leer el contenido del archivo como texto
        reader.readAsText(file);
    }
}

function processData(csvContent) {
    // Aquí puedes trabajar con el contenido del CSV
    // Por ejemplo, puedes dividir las líneas y trabajar con los datos

    const lines = csvContent.split('\n');
    lines.forEach(function(line) {
        const values = line.split(',');

        // Convertir los valores de cadena a números si es necesario
        const linea = values.map(value => parseInt(value));
        datosPreEntrenamiento.push({
            'input' :  [linea[0] , linea[1], linea[3], linea[4],linea[6]], 'output':  [linea[2], linea[5]]  });

        // Ahora, "linea" es un vector que contiene los valores de cada línea
        //console.log(datosPreEntrenamiento[0]);

    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Agrega un event listener para el evento 'keydown' en el documento
    document.addEventListener('keydown', function(event) {
      // La función que se ejecutará cuando se presione una tecla
      // Puedes acceder al código de la tecla presionada a través de event.code o event.key
      // Por ejemplo, si quieres reaccionar cuando se presiona la tecla 'A':
      if (event.code === 'KeyA') {
        
        Sb = Sb+1;
        console.log('Tecla A presionada'+Sb);
        // Agrega aquí el código que deseas ejecutar cuando se presiona la tecla A
      }
      if (event.code === 'KeyB') {
        
        Sb = Sb-1;
        console.log('Tecla B presionada '+Sb);
        // Agrega aquí el código que deseas ejecutar cuando se presiona la tecla A
      }
    });
  });