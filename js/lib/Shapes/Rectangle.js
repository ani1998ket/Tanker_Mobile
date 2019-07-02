class Rectangle{
    constructor(x, y, width, height){
        this.type = "RECTANGLE";
        this.init(x, y, width, height);
    }
    init(x, y, width, height){
        this.setX(x);
        this.setY(y);
        this.setWidth(width);
        this.setHeight(height);
    }
    setX(x){this.x = x;}
    setY(y){this.y = y;}
    setWidth(width){this.width = width;}
    setHeight(height){this.height = height;}

    getX(){return this.x;}
    getY(){return this.y;}
    getWidth(){return this.width;}
    getHeight(){return this.height;}
    getX2(){ return this.x + this.width;}
    getY2(){ return this.y + this.height;}
}