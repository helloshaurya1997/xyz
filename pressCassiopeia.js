class pressCassiopeia{
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

        butCassiopeia.mousePressed(()=>{
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
            text("CASSIOPEIA CONSTELLATION",windowWidth/2-280,windowHeight/2-340);

            cassiopeia=createSprite(windowWidth/2-650,windowHeight/2+50,10,10);
            cassiopeia.scale=2.3;
            cassiopeia.addImage(cassiopeiai);

            cassiopeia1=createSprite(windowWidth/2+680,windowHeight/2+50,10,10);
            cassiopeia1.addImage(cassiopeia1i);
            cassiopeia1.scale=3.4;

            butback=createButton('BACK');
            butback.position(windowWidth-(windowWidth-50),windowHeight-(windowHeight-50))
            butback.style('background','cream')
            butback.size(150,50);
    
            butback.mousePressed(()=>{
                butback.hide();
                background(sky1);
                appState=3;
                cassiopeia.velocityX=100000;
                cassiopeia1.velocityX=100000;
                displayCassiopeia1=new pressUrsaMajor();
                })

            textSize(35);
            fill("red");
            text("STARS:",windowWidth/2-125,windowHeight/2-285);
            fill("orange");
            textSize(30);
            text("CAPH",windowWidth/2-130,windowHeight/2-225);
            text("SCHEDAR",windowWidth/2-130,windowHeight/2-175);
            text("RUCHBAH",windowWidth/2-130,windowHeight/2-125);
            text("NAVI",windowWidth/2-130,windowHeight/2-75);
            text("SEGIN",windowWidth/2-130,windowHeight/2-25);
    })
}
}