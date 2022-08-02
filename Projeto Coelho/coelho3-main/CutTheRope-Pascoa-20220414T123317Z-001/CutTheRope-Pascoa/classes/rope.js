class rope{
constructor(connectionPoint,rectLinks){
    
    this.rectLinks=rectLinks;//rectLinks é igual ao rectLinks pois o valor dele é uma mutavel dentro da "função" Constructor
    const rects = Body.nextGroup(true)//essa é a maneira de criar um grupo dentro de um objeto
    const Rect = Composites.stack(100,100,this.rectLinks,1,5,5,function(x,y){ //o function da stack é uma propriedade que determina a função x,y de cada corpo
        return  Bodies.rectangle(x,y,30,5,{collisionFilter:{rects:rects}})
                    //o return pausa a função para possibilitar dentro da função a criação de outra;
                                            //o collisionfilter gera um filtro pra colisão entre elementos no caso grupo com grupo
        
    });
    //6L:X,Y,quantos elementos,quantos elementos por coluna,Quantos pixels ficam afastados cada elemento por coluna,quantas colunas ficam afastadas uma da outra,o ultimo é o callback,que determina a organização dos corpos que dá a forma
    //6L:o composites(elemento da matter) cria uma composição,um grupo,usando ele para criar um grupo que se conectam de alguma forma(no caso desse exemplo eles vão estar unidos fisicamente para formar a corda)
    //6L:stack(elemento da matter) cria elementos dentro do composite se limitando a uma pilha ou uma linha,caso seja necessario criar formas mais complexas seria necessario o pyramide
    this.connectionPoint=connectionPoint;
    this.body = Composites.chain(Rect,0.1,0,-0.6,0,{stiffnes:0.1,lenght:0.1,render:{type:'line'}});
                                    //o chains ele cria uma corrente uma ligação entre os objetos
                                    //o 0.1 e 0 são os pontos x,y dando uma posição relativa para os objetos
                                    //stiffnes e o lenght são interconectados,determinando elasticidade e comprimento respectivamente
                                    //o render renderiza a forma no tipo desejado
    //o body é um nome imutavel pois ele representa a forma da minha classe(o corpo)
    
    World.add(engine.world,this.body);
    Composite.add(Rect,Constraint.create({//L(24) adicionamos o rect a composite,depois criamos um objeto com o constraint
        pointA:this.connectionPoint,//Demos o connection point ao constraint(o pointA é algo obrigatorio do matter declarando o primeiro ponto de intersecção entre os objetos,no caso a corda)
        bodyB:Rect.bodies[0],//cria uma matriz que inicia na posição zero,cada rect bodies é um quadrado
        pointB:{x:-25,y:0},//posição da conexão entre a corda e o ovo
        length:10,//lenght é o tamanho total dele,do objeto em tamanho
        stiffnes:0.1//elasticidade do objeto
        //obs:pointA,bodyB,pointB são nomes obrigatorios
        //obs:as conexões das propriedades ao objeto não são declaradas porque é inerte do matter


    }));//adiciona a composição(do composite) o Rect(L6) com o constraint.create
    //Metodo para romper a corda
   


}
Break(){
    this.body=null;//o nosso corpo vai ser nulo,sem valor,nosso corpo

}

//metodo para mostrar a corda
Show(){
    if(this.body!=null){
        for(var i=0;i<this.body.bodies.length-1;i++){
            this.vortex(this.body.bodies[i].vertices)//draw vertices,desenha as vertices do nosso corpo de cada um.

        }
    }

}
vortex(vertices){
    beginShape();
    fill(255,140,0);
    noStroke();
    for(var i=0;i<vertices.length;i++){//criamos um for que segue os vertices do corpo this.body
        vertex(vertices[i].x,vertices[i].y);//x,y


    }
    endShape(CLOSE);
    //o close fecha completamente a forma,ja que a mesma se repete por estar associada aos vertices

    


}


}