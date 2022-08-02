const Engine = Matter.Engine; 
const Render = Matter.Render; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint; 
const Body = Matter.Body; 
const Composites = Matter.Composites; 
const Composite = Matter.Composite;
//usamos as variaveis para guardas os metodos do matter
var rabbit,background,mute,Ground1,Rope,egg1,button,Ground;
var rabbitImg,backgroundImg,muteImg,eggImg1,rabbitHappyImg,rabbitSadImg;
var eggLink;
//usa uma var para carregar dois tipos de variaveis diferentes(sprite,imagens);
let altura,largura;
let engine,world;
var check=0;
function preload(){
rabbitImg=loadImage("imagens/Rabbit-01.png");
backgroundImg=loadImage("imagens/background.png");
muteImg=loadImage("imagens/mute.png");
eggImg1=loadImage("imagens/egg1.png");
rabbitHappyImg= loadImage("imagens/sad_3.png");
rabbitSadImg = loadImage("imagens/sad_2.png");




//carregando as imagens com suas vars de imagem
 
}

function setup(){
  
  createCanvas(1400,650);
  altura=windowHeight;
  largura=windowWidth;
  let sStatic = {
    isStatic:true,

  }

  engine=Engine.create();//atribui a var engine a criação da mecanica de fisica;
  world=engine.world;   //atribui a engine ao world;

  
  Ground = Bodies.rectangle(300,570,600,10,sStatic);
  World.add(world,Ground);

  Rope= new rope({x:300,y:30},7);
  
  egg1=Bodies.circle(300,300,20)//X,Y,Diametro;
  Matter.Composite.add(Rope.body,egg1);//adicionamos o egg ao Rope,pelo metodo composite;
  eggLink = new egg(Rope,egg1);//metodo que faz a conexão entre a corda e o ovo;
  rabbit = Bodies.rectangle(100,height-120,150,150);
  button = createImg("imagens/cordinha.png");
  button.position(280,5);
  button.size(50,50);
  button.mouseClicked(Break);





  
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);

  
 










}

function draw() {
 



  image(backgroundImg,width/2,height/2,width,height);


  Rope.Show();
  if(egg1 !==null){
  image(eggImg1,egg1.position.x,egg1.position.y,50,70);
  }
  if(check==0){
  image(rabbitImg,rabbit.position.x,rabbit.position.y,150,150);
  }
  



  Engine.update(engine); //metodo que atualiza a engine,fazendo com que ela recorrentemente se atualize
  //basicamente,aplica a fisica ao mundo todo;
  
  if(eggLink==null){
  if(Coliision(egg1,rabbit) == true){
    console.log("a")
    check=1;
    
  }
  if(Coliision(egg1,Ground) == true){
    check=2;
    
  }
}
  
if(check==1){
  image(rabbitHappyImg,rabbit.position.x,rabbit.position.y,150,150);
}

  

if(check==2){
  image(rabbitSadImg,rabbit.position.x,rabbit.position.y,150,150);
  
}
  

 
}

function Break(){
  Rope.Break();
  eggLink.Break();
  eggLink=null;//dá nulo ao egglink já que o mesmo é o valor da matriz(bodyB) da clase rope,se não daria erro 404 ja que o objeto estaria "presente mas não criado"


}

function Coliision(body1,body2){//função pra dectar colisão
  if(body1 !== null){
    
  var d = dist(body1.position.x,body1.position.y,body2.position.x,body2.position.y)
  console.log(d)
 ;//body1 e body2 são genericos
  if(d<=50){ //dist é a função de colisão
        console.log("z")
    
    World.remove(engine.world,egg1); //codigo de remoção para o mundo
    egg1 = null; //dar o valor nulo ao ovo,para se tornar nulo ao inves de definido
    return true; //return é um codigo para caso entre dentro do if
   



  
}
else{
  return false;
}
}
}
//OBS: If só funciona com interações entre sprites;
