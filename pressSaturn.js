class pressSaturn{
    constructor(){
    butMer=createButton('MERCURY');
    butVen=createButton('VENUS');
    butEar=createButton('EARTH');
    butMar=createButton('MARS');
    butJup=createButton('JUPITER');
    butSat=createButton('SATURN');
    butUra=createButton('URANUS');
    butNep=createButton('NEPTUNE');
    nSat=createButton('INTERESTING FACTS')

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
    
    butSat.mousePressed(()=>{
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
        text("SATURN",windowWidth/2-130,windowHeight/2-385)

        
        var satPlanetGif=createImg("planets/saturn gif.gif");
        satPlanetGif.position(160,260);
        satPlanetGif.size(665,500);

        butback=createButton('BACK');
        butback.position(windowWidth-(windowWidth-50),windowHeight-(windowHeight-50))
        butback.style('background','cream')
        butback.size(150,50);

        butback.mousePressed(()=>{
            butback.hide();
            nSat.hide();
            background(sky1);
            appState=1;
            satPlanetGif.hide();
            displayMercury1=new pressVenus();
            displayVenus1=new pressEarth();
            displayEarth1=new pressMars();
            displayMars1=new pressJupiter();
            displayJupiter1=new pressSaturn();
            displaysaturn1=new pressUranus();
            displayUranus1=new pressNeptune();
            displayNeptune1=new pressMercury();
            })

        fill("lightgreen");
        rectMode(CENTER);
        rect(windowWidth/2+100,windowHeight/2-30,1400,500);
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
        text("9.5 AU (1.4 billion km)",windowWidth/2+390,windowHeight/2-175);
        fill("purple");
        text("10.7 hours",windowWidth/2+160,windowHeight/2-125);
        fill("blue");
        text("29.4 years",windowWidth/2+160,windowHeight/2-75);
        fill("purple");
        text("Gas Giant",windowWidth/2+130,windowHeight/2-25);
        fill("blue");
        text("Eighty Two (82)",windowWidth/2+210,windowHeight/2+25);
        fill("blue");
        text("-178° Celcius",windowWidth/2+270,windowHeight/2+75);
        fill("purple");
        text("35.5 km/s",windowWidth/2+180,windowHeight/2+125);
        fill("blue");
        text("The Ringed Planet",windowWidth/2+100,windowHeight/2+175);

        nSat.position(windowWidth-310,windowHeight-220)
        nSat.style('background','cream');
        nSat.size(280,50);

        nSat.mousePressed(()=>{
            background(sky1);

            satPlanetGif.position(140,235);

            nSat.hide();
            textSize(40);
            fill("red");
            stroke("black")
            strokeWeight(7)
            text("SATURN",windowWidth/2-130,windowHeight/2-385)

            fill("purple");
            rectMode(CENTER);
            rect(windowWidth/2+310,windowHeight/2-60,1100,400);

            textSize(40);
            stroke("red");
            strokeWeight(2);
            fill("white");
            text("INTERESTING FACTS",windowWidth/2+130,windowHeight/2-190);
            textSize(35)
            fill("yellow");
            text("1. Saturn's density is just 0.68 gram/cm cube. This means that ",windowWidth/2-130,windowHeight/2-120);
            text("it can float on water. ",windowWidth/2-130,windowHeight/2-70);
            text("2. Like Jupiter, Saturn does not have any solid surface ",windowWidth/2-130,windowHeight/2-20);
            text("to stand on.",windowWidth/2-130,windowHeight/2+30);
        })
     })
     
}
}