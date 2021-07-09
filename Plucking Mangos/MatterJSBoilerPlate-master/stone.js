
class Stone{
    constructor(x, y, diametre) {
        var options= {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.bodies= Bodies.circle(x, y, diametre, options);
        this.diametre= diametre;
        this.image = loadImage("stone.png")
    }
}