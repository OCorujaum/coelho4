class egg{
    constructor(bodyA,bodyB){
        var eggLink2 = bodyA.body.bodies.length-2;
        //o bodyA(corda) body é o corpo da corda,o body é o corpo e o bodies é o corpo;
        this.link = Constraint.create({//o constraint cria a ligação pra this.link(caracteristica da classe)
            bodyA:bodyA.body.bodies[eggLink2],//aqui recebe o egg link para colocar a posição da conexão;
            pointA:{x:0,y:0},
            bodyB:bodyB,
            pointB:{x:0,y:0},
            length:-10,
            stiffness:0.01,

            
            //o bodyA é o primeiro ponto da conexão(no caso a corda);
            //o pointA ele cria a força a corda(no caso o bodyA);
            //o bodyB é o segundo corpo da conexão(no caso o ovo);
            //o pointB ele cria a força do bodyB(no caso o ovo);
            //length é o tamanho do elo e o stifness é a elasticidade em relação ao elo
            //obs:lenth e stiffness são obrigatoios no constraint;

        })
        World.add(engine.world,this.link);

        
    }
    Break(){
        World.remove(engine.world,this.link);
        

    }
}