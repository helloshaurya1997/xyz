class pressOrion{
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
        drawSprites();

       
        
        butOrion.mousePressed(()=>{
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
            
            drawSprites();
            background(sky1);
            textSize(40);
            fill("lightgreen");
            stroke("black")
            strokeWeight(7)
            text("ORION CONSTELLATION",windowWidth/2-280,windowHeight/2-340);
    

            orion=createSprite(windowWidth/2-700,windowHeight/2,10,10);
            orion.addImage(orioni);
            orion.scale=1.4

            orion1=createSprite(windowWidth/2+650,windowHeight/2+80,10,10);
            orion1.addImage(orion1i);
            orion1.scale=1

            butback=createButton('BACK');
            butback.position(windowWidth-(windowWidth-50),windowHeight-(windowHeight-50))
            butback.style('background','cream')
            butback.size(150,50);
    
            butback.mousePressed(()=>{
                butback.hide();
                background(sky1);
                appState=3;
                orion.velocityX=100000;
                orion1.velocityX=100000;
                displayOrion1=new pressLeo();
                
                })

            textSize(35);
            fill("red");
            text("STARS:",windowWidth/2-125,windowHeight/2-285);
            fill("orange");
            textSize(30);
            text("SAIPH",windowWidth/2-300,windowHeight/2-225);
            text("RIGEL",windowWidth/2-300,windowHeight/2-175);
            text("MINTAKA",windowWidth/2-300,windowHeight/2-125);
            text("ALNILAM",windowWidth/2-300,windowHeight/2-75);
            text("ALNITAK",windowWidth/2-300,windowHeight/2-25);
            text("BELLATRIX",windowWidth/2-300,windowHeight/2+25);
            text("BETELGEUSE",windowWidth/2-300,windowHeight/2+75);
            text("MEISSA",windowWidth/2-300,windowHeight/2+125);
            text("MU ORIONIS",windowWidth/2,windowHeight/2-225);
            text("NU ORIONIS",windowWidth/2,windowHeight/2-175);
            text("XI ORIONIS",windowWidth/2,windowHeight/2-125);
            text("PI1 ORIOINIS:",windowWidth/2,windowHeight/2-75);
            text("PI2 ORIONIS",windowWidth/2,windowHeight/2-25);
            text("P13 ORIONIS",windowWidth/2,windowHeight/2+25);
            text("P14 ORIONIS",windowWidth/2,windowHeight/2+75);
            text("TABIT",windowWidth/2,windowHeight/2+125);
    })
}
}