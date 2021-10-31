//Constantes para el mundo fisico de matter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

//variables de los objetos
var treeObj, stoneObj,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;

//Declara aquí las variables launcherObject y launchForce
var launcherObject;
var launchForce = 100;

//Funcion para precargar las imagenes del chico 
function preload(){
	boy=loadImage("imágenes/boy.png");
  }

//Funcion para crear nustros objetos con el mundo fisico
function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  //Objeto {PIEDRA}
	stoneObj=new stone(235,420,30); 

  //Objetos {MANGOS}
	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

  //Objeto {ARBOL}
	treeObj=new tree(1050,580);
  //Objeto {SUELO}
	groundObject=new ground(width/2,600,width,20);
  //crea aquí el launcherObject 
  //Resortera del niño
  launcherObject = new Launcher(stoneObj.body,{x:235,y:420});

	Engine.run(engine);
}

function draw() {

  background(230);
  textSize(25);
  //Texto de instrucciones
  text("¡Presiona Barra Espaciadora para tener una segunda Oportunidad para Jugar!",50 ,50);
  image(boy ,200,340,200,300);

  //Muestra en pantalla nuestros objetos 
  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stoneObj.display();
  groundObject.display();
  // muestra el objeto lanzador aquí
  launcherObject.display();

  //Deteccion de colisiones (no lo hemos visto, no se como funciona bien :())
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
}

//crea aquí la función mouseDragged
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

//crea aquí la función mouseReleased 
function mouseReleased(){
  launcherObject.fly();
}

//crea aquí la función keyPressed 
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
    //Me dio problemas la funcion de "attach", me detectaba un error de que esa funcion no estaba definida y no pude realizarlo con esa funcion pero le encontre solucion 
    //Cree el objeto con la reestriccion de nuevo cada que se presiona el codigo 32 en el teclado = ESPACE
    launcherObject = new Launcher(stoneObj.body,{x:235,y:420});
  }
}

//Funcion para detectar las colicions con la piedra a los mangos
  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
