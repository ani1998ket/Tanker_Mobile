class OnScreenController{
    constructor(layer, shape, image){
        this.layer = layer;
        this.shape = shape;
        this.image = image;
        this.isActive = false;
    }
    render(){
        ShapeRenderer.render(this.layer.context, this.shape);
    }
    update(){
        
    }
}