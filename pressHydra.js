class pressHydra{
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

        butHydra.mousePressed(()=>{
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
            text("HYDRA CONSTELLATION",windowWidth/2-280,windowHeight/2-340);
    
            hydra=createSprite(windowWidth/2-600,windowHeight/2,10,10);
            hydra.scale=0.7;
            hydra.addImage(hydrai);

            hydra1=createSprite(windowWidth/2+680,windowHeight/2,10,10);
            hydra1.addImage(hydra1i);
            hydra1.scale=2.2;

            butback=createButton('BACK');
            butback.position(windowWidth-(windowWidth-50),windowHeight-(windowHeight-50))
            butback.style('background','cream')
            butback.size(150,50);
    
            butback.mousePressed(()=>{
                butback.hide();
                background(sky1);
                appState=3;
                hydra.velocityX=100000;
                hydra1.velocityX=100000;
                displayHydra1=new pressCassiopeia();
                })

            textSize(35);
            fill("red");
            text("STARS:",windowWidth/2-50,windowHeight/2-285);
            fill("orange");
            textSize(30);
            text("ALPHARD",windowWidth/2-200,windowHeight/2-225);
            text("SIGMA HYDRAE",windowWidth/2-200,windowHeight/2-175);
            text("TW HYDRAE",windowWidth/2-200,windowHeight/2-125);
            text("GAMMA HYDRAE",windowWidth/2-200,windowHeight/2-75);
            text("EPSILON HYDRAE",windowWidth/2-200,windowHeight/2-25);
            text("LOTA HYDRAE",windowWidth/2-200,windowHeight/2+25);
            text("ZETA HYDRAE",windowWidth/2-200,windowHeight/2+75);
            text("R HYDRAE",windowWidth/2+90,windowHeight/2-225);
            text("DELTA HYDRAE",windowWidth/2+90,windowHeight/2-175);
            text("NU HYDRAE",windowWidth/2+90,windowHeight/2-125);
            text("PI HYDRAE",windowWidth/2+90,windowHeight/2-75);
            text("XI HYDRAE",windowWidth/2+90,windowHeight/2-25);
            text("MU HYDRAE",windowWidth/2+90,windowHeight/2+25);
            text("V HYDRAE",windowWidth/2+90,windowHeight/2+75);
            text("KAPPA HYDRAE",windowWidth/2-200,windowHeight/2+125);
            text("ETA HYDRAE",windowWidth/2+90,windowHeight/2+125);
    })
}
}