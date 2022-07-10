class pressDraco{
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

        butDraco.mousePressed(()=>{
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
            text("DRACO CONSTELLATION",windowWidth/2-280,windowHeight/2-340);
    
            draco=createSprite(windowWidth/2-600,windowHeight/2,10,10);
            draco.scale=1;
            draco.addImage(dracoi);

            draco1=createSprite(windowWidth/2+680,windowHeight/2,10,10);
            draco1.addImage(draco1i);
            draco1.scale=2.2;

            butback=createButton('BACK');
            butback.position(windowWidth-(windowWidth-50),windowHeight-(windowHeight-50))
            butback.style('background','cream')
            butback.size(150,50);
    
            butback.mousePressed(()=>{
                butback.hide();
                background(sky1);
                appState=3;
                draco.velocityX=100000;
                draco1.velocityX=100000;
                displayDraco1=new pressHydra();
                })

            textSize(35);
            fill("red");
            text("STARS:",windowWidth/2-50,windowHeight/2-285);
            fill("orange");
            textSize(30);
            text("ELTANIN",windowWidth/2-200,windowHeight/2-225);
            text("ALDIBAIN",windowWidth/2-200,windowHeight/2-175);
            text("RASTABAN",windowWidth/2-200,windowHeight/2-125);
            text("ALTAIS",windowWidth/2-200,windowHeight/2-75);
            text("ALDHIBAH",windowWidth/2-200,windowHeight/2-25);
            text("EDASICH",windowWidth/2-200,windowHeight/2+25);
            text("CHI DRACONIS",windowWidth/2-200,windowHeight/2+75);
            text("THUBAN",windowWidth/2+70,windowHeight/2-225);
            text("GRUMIUM",windowWidth/2+70,windowHeight/2-175);
            text("GIANFAR",windowWidth/2+70,windowHeight/2-125);
            text("EPSILON DRACONIS",windowWidth/2+70,windowHeight/2-75);
            text("MU DRACONIS",windowWidth/2+70,windowHeight/2-25);
            text("SIGMA DRACONIS",windowWidth/2+70,windowHeight/2+25);
            text("THETA DRACONIS",windowWidth/2+70,windowHeight/2+75);
    })
}
}