function setup() {
    createCanvas(1280, 760);
    background(250, 180, 0);
    noFill();
}

function draw() {
/*    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);*/

    stroke(255, 0, 100);
    line(200, 100, 250, 440);
    line(250, 440, 300, 100);
    line(300, 100, 350, 440);
    line(350, 440, 400, 100);
    line(400, 100, 450, 659.25);
    line(450, 659.25, 500, 100);
    line(500, 100, 550, 659.25);
    line(550, 659.25, 600, 100);
    line(600, 100, 650, 739.99);
    line(650,  739.99, 700, 100);
    line(700, 100, 750, 739.99);
    line(750, 739.99, 800, 100);
    line(800, 100, 850, 659.25);
    line(850, 659.25, 900, 100);

    noFill();
    beginShape();
    curveVertex(84,  91);
    curveVertex(84,  91);
    curveVertex(68,  19);
    curveVertex(21,  17);
    curveVertex(32, 100);
    curveVertex(32, 900);
    endShape();

    noFill();
    strokeWeight(4);
    beginShape();
    vertex(20, 20);
    quadraticVertex(80, 20, 50, 50);
    quadraticVertex(20, 80, 80, 80);
    vertex(80, 60);
    endShape();

}