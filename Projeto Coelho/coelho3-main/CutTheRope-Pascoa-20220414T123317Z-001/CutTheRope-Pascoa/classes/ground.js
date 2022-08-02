class ground{
constructor(x1,y1,widht1,height1){//o constructor é o construtor tudo que tiver dentro dele estão as propriedades do elemento
let Sstatic={isStatic:true};//isStatic é existente dentro da matter(função pré setada);
//let é uma variavel;
this.body=Bodies.rectangle(x1,y1,widht1,height1,Sstatic);
this.x=x1;
this.y=y1;
this.widht=widht1;
this.height=height1;

//os this são as caracteristicas dos objetos da nossa classe(variaveis) o que vem
//após o igual são seus valores(no caso as propriedades da função "rectangle" );

World.add(world,this.body);
//adicionei ao world a var world(pra aplicar ela ao mundo,vulgo o metodo da matter world)
//e adicionei o this.body que é meu corpo para entrar dentro do world;
//obs:as classes não podem interagir diretamente com bibliotecas;



}
displayGround(){
    let positionBody = this.body.position;//variavel que armazena a posição do body(linha5)
    push();//push pusha propriedades pro objeto
    rectMode(CENTER);//centraliza na tela
    noStroke();//stroke é a borda,o no stroke tira a mesma(padrão do rect)
    fill(255,222,173);//coloca a cor do sprite
    rect(positionBody.x,positionBody.y,this.widht,this.height);
    //Bodies.rectangle cria o corpo do retangulo o new ground coloca os valores das propriedas,o rect cria a imagem do retangulo
    pop();

}

}
