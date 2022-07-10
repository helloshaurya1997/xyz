class pressLeo{
    constructor(){
    butOrion=createButton('ORION');
    butLeo=createButton('LEO');
    butDraco=createButton('DRACO');
    butHydra=createButton('HYDRA');
    butTaurus=createButton('TAURUS');
    butCassiopeia=createButton('CASSIOPEIA');
    butUrsaMajor=createButton('URSA MAJOR');
    butCanisMajor=createButton('CANIS MAJOR');
    }
    display(){
        butOrion.position(windowWidth/2-280,windowHeight/2-360);
        butLeo.position(windowWidth/2-280,windowHeight/2-300);
        butDraco.position(windowWidth/2-280,windowHeight/2-240);
        butHydra.position(windowWidth/2-280,windowHeight/2-180);
        butTaurus.position(windowWidth/2,windowHeight/2-360);
        butCassiopeia.position(windowWidth/2,windowHeight/2-300);
        butUrsaMajor.position(windowWidth/2,windowHeight/2-240);
        butCanisMajor.position(windowWidth/2,windowHeight/2-180);
        drawSprites();
        butOrion.size(200,50);
        butLeo.size(200,50);
        butDraco.size(200,50);
        butHydra.size(200,50);
        butTaurus.size(200,50);
        butCassiopeia.size(200,50);
        butUrsaMajor.size(200,50);
        butCanisMajor.size(200,50);

        butOrion.style('background','cream');
        butLeo.style('background','lightgreen');
        butDraco.style('background','cream');
        butHydra.style('background','lightgreen');
        butTaurus.style('background','cream');
        butCassiopeia.style('background','lightgreen');
        butUrsaMajor.style('background','cream');
        butCanisMajor.style('background','lightgreen');

        butLeo.mousePressed(()=>{
            butOrion.hide();
            butLeo.hide();
            butTaurus.hide();
            butHydra.hide();
            butDraco.hide();
            butCassiopeia.hide();
            butUrsaMajor.hide();
            butCanisMajor.hide();

            orion.velocityX=1000000;
            cassiopeia.velocityX=1000000;
            leo.velocityX=1000000;
            canismajor.velocityX=1000000;
            
            background(sky1);
            textSize(40);
            fill("lightgreen");
            stroke("black")
            strokeWeight(7)
            text("LEO CONSTELLATION",windowWidth/2-280,windowHeight/2-340);

            leo=createSprite(windowWidth/2-640,windowHeight/2,10,10);
            leo.scale=1.7;
            leo.addImage(leoi);

            leo1=createSprite(windowWidth/2+630,windowHeight/2,10,10);
            leo1.addImage(leo1i);
            leo1.scale=2.8

            butback=createButton('BACK');
            butback.position(windowWidth-(windowWidth-50),windowHeight-(windowHeight-50))
            butback.style('background','cream')
            butback.size(150,50);
    
            butback.mousePressed(()=>{
                butback.hide();
                background(sky1);
                appState=3;
                leo.velocityX=100000;
                leo1.velocityX=100000;
                displayLeo1=new pressTaurus();
                })

            textSize(35);
            fill("red");
            text("STARS:",windowWidth/2-75,windowHeight/2-285);
            fill("orange");
            textSize(30);
            text("ZOSMA",windowWidth/2-70,windowHeight/2-225);
            text("ADHAFERA",windowWidth/2-70,windowHeight/2-175);            
            text("ALGIEBA",windowWidth/2-70,windowHeight/2-125);
            text("ALGENUBI",windowWidth/2-70,windowHeight/2-75);
            text("REGULUS",windowWidth/2-70,windowHeight/2-25);
            text("RASALAS",windowWidth/2-70,windowHeight/2+25);
            text("DENEBOLA",windowWidth/2-70,windowHeight/2+75);
            text("CHERTAN",windowWidth/2-70,windowHeight/2+125);
            text("AL JABHAH",windowWidth/2-70,windowHeight/2+175);
    })
}
}