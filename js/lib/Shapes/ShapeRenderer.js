class ShapeRenderer{
    static render(context, shape){
        switch(shape.type){
            case "CIRCLE" :
                ShapeRenderer.renderCircle(context, shape); 
                break;
            case "RECTANGLE" :
                ShapeRenderer.renderRectangle(context, shape);
                break;
            default:
                console.error("Shape Type is invalid");
                break; 
        }
    }
    static renderCircle(context, circle){
        context.beginPath();
        context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    }
    static renderRectangle(context, rectangle){
        context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    }
}