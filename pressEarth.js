class pressEarth{
    constructor(){
    butMer=createButton('MERCURY');
    butVen=createButton('VENUS');
    butEar=createButton('EARTH');
    butMar=createButton('MARS');
    butJup=createButton('JUPITER');
    butSat=createButton('SATURN');
    butUra=createButton('URANUS');
    butNep=createButton('NEPTUNE');
    nEar=createButton('INTERESTING FACTS'); 
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
    
    butEar.mousePressed(()=>{
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
        text("EARTH",windowWidth/2-130,windowHeight/2-385)

        var earPlanetGif=createImg("planets/earth gif.gif");
        earPlanetGif.position(180,260);
        earPlanetGif.size(600,500);

        butback=createButton('BACK');
        butback.position(windowWidth-(windowWidth-50),windowHeight-(windowHeight-50))
        butback.style('background','cream')
        butback.size(150,50);

        butback.mousePressed(()=>{
            butback.hide();
            nEar.hide();
            background(sky1);
            appState=1;
            earPlanetGif.hide();
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
        rect(windowWidth/2+70,windowHeight/2-30,1400,500);
        textSize(35);
        stroke("red");
        strokeWeight(2);
        fill("red");
        text("INTERESTING INFORMATION",windowWidth/2+20,windowHeight/2-220);
        textSize(30);
        fill("black");
        stroke(0);
        strokeWeight(2);
        text("1. Average Distance from the Sun : ",windowWidth/2-120,windowHeight/2-175);
        text("2. Length of Day : ",windowWidth/2-120,windowHeight/2-125);
        text("3. Length of Year : ",windowWidth/2-120,windowHeight/2-75);
        text("4. Planet Type : ",windowWidth/2-120,windowHeight/2-25);
        text("5. Number of Moons : ",windowWidth/2-120,windowHeight/2+25);
        text("6. Radius : ",windowWidth/2-120,windowHeight/2+75)
        text("7. Escape Velocity : ",windowWidth/2-120,windowHeight/2+125)
        text("8. Nickname : ",windowWidth/2-120,windowHeight/2+175)
        fill("blue");
        text("1 AU (152 million km)",windowWidth/2+360,windowHeight/2-175);
        fill("purple");
        text("24 hours",windowWidth/2+130,windowHeight/2-125);
        fill("blue");
        text("365 days",windowWidth/2+130,windowHeight/2-75);
        fill("purple");
        text("Rocky / terrestrial",windowWidth/2+100,windowHeight/2-25);
        fill("blue");
        text("1 (one)",windowWidth/2+180,windowHeight/2+25);
        fill("blue");
        text("6371 km",windowWidth/2+30,windowHeight/2+75);
        fill("purple");
        text("11.2 km/s",windowWidth/2+150,windowHeight/2+125);
        fill("blue");
        text("The Blue Planet",windowWidth/2+70,windowHeight/2+175);

        nEar.position(windowWidth-310,windowHeight-220)
        nEar.style('background','cream');
        nEar.size(280,50);

        nEar.mousePressed(()=>{
            background(sky1);

            nEar.hide();
            textSize(40);
            fill("red");
            stroke("black")
            strokeWeight(7)
            text("EARTH",windowWidth/2-130,windowHeight/2-385)

            fill("green");
            rectMode(CENTER);
            rect(windowWidth/2+250,windowHeight/2-60,1100,400);

            textSize(40);
            stroke("red");
            strokeWeight(2);
            fill("white");
            text("INTERESTING FACTS",windowWidth/2+130,windowHeight/2-190);
            textSize(35)
            fill("yellow");
            text("1. Earth's atmosphere extends upto 10,000 kms above the  ",windowHeight/2-130,windowHeight/2-120);
            text("surface. ",windowWidth/2-130,windowHeight/2-70);
            text("2. In this vast universe, till now, Earth is the only known ",windowHeight/2-130,windowHeight/2-20);
            text("planet to have life.",windowWidth/2-130,windowHeight/2+30);
        })
     })
     
}
}