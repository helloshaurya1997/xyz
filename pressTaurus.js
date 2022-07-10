class pressTaurus{
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

        butTaurus.mousePressed(()=>{
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
            text("TAURUS CONSTELLATION",windowWidth/2-280,windowHeight/2-340);
            
            taurus=createSprite(windowWidth/2-700,windowHeight/2,10,10);
            taurus.addImage(taurusi);
            taurus.scale=1

            taurus1=createSprite(windowWidth/2+650,windowHeight/2+100,10,10);
            taurus1.addImage(taurus1i);
            taurus1.scale=0.67;

            butback=createButton('BACK');
            butback.position(windowWidth-(windowWidth-50),windowHeight-(windowHeight-50))
            butback.style('background','cream')
            butback.size(150,50);
    
            butback.mousePressed(()=>{
                butback.hide();
                background(sky1);
                appState=3;
                taurus.velocityX=100000;
                taurus1.velocityX=100000;
                displayTaurus1=new pressDraco();
                })

            textSize(35);
            fill("red");
            text("STARS:",windowWidth/2-125,windowHeight/2-285);
            fill("orange");
            textSize(30);
            text("ALDEBARAN",windowWidth/2-145,windowHeight/2-225);
            text("BETA TAURI",windowWidth/2-145,windowHeight/2-175);
            text("ZETA TAURI",windowWidth/2-145,windowHeight/2-125);
            text("EPSILON TAURI",windowWidth/2-145,windowHeight/2-75);
            text("LAMBDA TAURI",windowWidth/2-145,windowHeight/2-25);
            text("ELECTRA",windowWidth/2-145,windowHeight/2+25);
            text("PLEIONE",windowWidth/2-145,windowHeight/2+75);
            text("CELAENO",windowWidth/2-145,windowHeight/2+125);
            text("OMICRON TAURI",windowWidth/2-145,windowHeight/2+175);
    })
}
}