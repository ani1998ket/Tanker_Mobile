class Circle{
    constructor(x, y, radius){
        this.type = "CIRCLE";
        this.init(x, y, radius);
    }
    init(x, y, radius){
        this.setX(x);
        this.setY(y);
        this.setRadius(radius);
    }
    setX(x){this.x = x;}
    setY(y){this.y = y;}
    setRadius(radius){this.radius = radius;}
}