class pressNeptune{
    constructor(){
    butMer=createButton('MERCURY');
    butVen=createButton('VENUS');
    butEar=createButton('EARTH');
    butMar=createButton('MARS');
    butJup=createButton('JUPITER');
    butSat=createButton('SATURN');
    butUra=createButton('URANUS');
    butNep=createButton('NEPTUNE');
    nNep=createButton('INTERESTING FACTS')

    }
display(){
    butMer.position(windowWidth/2-250,windowHeight/2-400);
    butMer.size(200,50);
    butMer.style('background','cream');
    butVen.position(windowWidth/2-250,windowHeight/2-340);
    butEar.position(windowWidth/2-250,windowHeight/2-280);
    butMar.position(windowWidth/2-250,windowHeight/2-220);
    butJup.position(windowWidth/2+30,windowHeight/2-400);
    butSat.position(windowWidth/2+30,windowHeight/2-340);
    butUra.position(windowWidth/2+30,windowHeight/2-280);
    butNep.position(windowWidth/2+30,windowHeight/2-220);
    drawSprites();
    butVen.size(200,50);
    butEar.size(200,50);
    butMar.size(200,50);
    butJup.size(200,50);
    butSat.size(200,50);
    butUra.size(200,50);
    butNep.size(200,50);
    butVen.style('background','lightgreen');
    butEar.style('background','cream');
    butMar.style('background','lightgreen');
    butJup.style('background','cream');
    butSat.style('background','lightgreen');
    butUra.style('background','cream');
    butNep.style('background','lightgreen');
    
    butNep.mousePressed(()=>{
        butMer.hide();
        butVen.hide();
        butEar.hide();
        butMar.hide();
        butJup.hide();
        butSat.hide();
        butUra.hide();
        butNep.hide();
        venus.velocityY=-1000001;
        earth.velocityX=-1000010;
        mars.velocityY=1100000;
        jupiter.velocityX=-11000000;
        saturn.velocityX=11000000;
        uranus.velocityX=1100000;
        neptune.velocityX=1000001;
        mercury.velocityX=1000010;
        background(sky1);
        textSize(40);
        fill("lightgreen");
        stroke("black")
        strokeWeight(7)
        text("NEPTUNE",windowWidth/2-130,windowHeight/2-385)

        var nepPlanetGif=createImg("planets/neptune.gif");
        nepPlanetGif.position(335,255);
        nepPlanetGif.size(500,500);

        butback=createButton('BACK');
        butback.position(windowWidth-(windowWidth-50),windowHeight-(windowHeight-50))
        butback.style('background','cream')
        butback.size(150,50);

        butback.mousePressed(()=>{
            butback.hide();
            nNep.hide();
            background(sky1);
            appState=1;
            nepPlanetGif.hide();
            displayNeptune1=new pressNeptune();
            displayMercury1=new pressVenus();
            displayVenus1=new pressEarth();
            displayEarth1=new pressMars();
            displayMars1=new pressJupiter();
            displayJupiter1=new pressSaturn();
            displaysaturn1=new pressUranus();
            displayUranus1=new pressNeptune();
            
            })

            
        fill("lightgreen");
        rectMode(CENTER);
        rect(windowWidth/2+100,windowHeight/2-30,1400,500);

        fill("black");
        rect(windowWidth/2-370,windowHeight/2-30,500,500);

        textSize(35);
        stroke("red");
        strokeWeight(2);
        fill("red");
        text("INTERESTING INFORMATION",windowWidth/2+50,windowHeight/2-220);
        textSize(30);
        fill("black");
        stroke(0);
        strokeWeight(2);
        text("1. Average Distance from the Sun : ",windowWidth/2-90,windowHeight/2-175);
        text("2. Length of Day : ",windowWidth/2-90,windowHeight/2-125);
        text("3. Length of Year : ",windowWidth/2-90,windowHeight/2-75);
        text("4. Planet Type : ",windowWidth/2-90,windowHeight/2-25);
        text("5. Number of Moons : ",windowWidth/2-90,windowHeight/2+25);
        text("6. Average Temperature : ",windowWidth/2-90,windowHeight/2+75)
        text("7. Escape Velocity : ",windowWidth/2-90,windowHeight/2+125)
        text("8. Nickname : ",windowWidth/2-90,windowHeight/2+175)
        fill("blue");
        text("30 AU (4.5 billion km)",windowWidth/2+390,windowHeight/2-175);
        fill("purple");
        text("16 hours",windowWidth/2+160,windowHeight/2-125);
        fill("blue");
        text("165 years",windowWidth/2+160,windowHeight/2-75);
        fill("purple");
        text("Gas Giant",windowWidth/2+130,windowHeight/2-25);
        fill("blue");
        text("Fourteen (14)",windowWidth/2+210,windowHeight/2+25);
        fill("blue");
        text("-200° Celcius",windowWidth/2+270,windowHeight/2+75);
        fill("purple");
        text("23.5 km/s",windowWidth/2+180,windowHeight/2+125);
        fill("blue");
        text("Big Blue Planet",windowWidth/2+100,windowHeight/2+175);

        nNep.position(windowWidth-310,windowHeight-220)
        nNep.style('background','cream');
        nNep.size(280,50);

        nNep.mousePressed(()=>{
            background(sky1);
            
            nNep.hide();
            textSize(40);
            fill("red");
            stroke("black")
            strokeWeight(7)
            text("NEPTUNE",windowWidth/2-130,windowHeight/2-385)

            fill("red");
            rectMode(CENTER);
            rect(windowWidth/2+100,windowHeight/2-30,1400,350);

            fill("black");
            rect(windowWidth/2-390,windowHeight/2-30,450,370);

            textSize(40);
            stroke("red");
            strokeWeight(2);
            fill("white");
            text("INTERESTING FACT",windowWidth/2+130,windowHeight/2-140);
            textSize(35)
            fill("yellow");
            text("Neptune is the coldest planet and the planet with ",windowWidth/2-130,windowHeight/2-70);
            text("the highest wind speed in the Solar System, with upto",windowWidth/2-130,windowHeight/2-20);
            text("2,100 km/hr.",windowWidth/2-130,windowHeight/2+30);
        })
    })
     
}
}