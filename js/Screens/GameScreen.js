class GameScreen extends Scene{
    constructor(){
        super();
        // this.addNewLayers(4);
        // this.gameWorld = new World();
        // this.gameWorld.addGameObject( new Bird(this.getLayer(2), new Vector2d(50, 427), 30, 30));
        // this.gameWorld.addGameObject(new GameObject(this.getLayer(1), new Vector2d(100, 50), 50, 400));

        // let leftButtonImage = new Image();
        // let rightButtonImage = new Image();
        // let upButtonImage = new Image();
        // let downButtonImage = new Image();
        // let leftButtonPressedImage = new Image();
        // let rightButtonPressedImage = new Image();
        // let upButtonPressedImage = new Image();
        // let downButtonPressedImage = new Image();
        // let fireButtonImage = new Image();
        // let fireButtonPressedImage = new Image();

        // leftButtonImage.src   = "assets/images/tanker_control_buttons_left.png";
        // rightButtonImage.src  = "assets/images/tanker_control_buttons_right.png";
        // upButtonImage.src     = "assets/images/tanker_control_buttons_up.png";
        // downButtonImage.src   = "assets/images/tanker_control_buttons_down.png";
        // fireButtonImage.src   = "assets/images/tanker_control_buttons_fire.png";

        // leftButtonPressedImage.src   = "assets/images/tanker_control_buttons_left_pressed.png";
        // rightButtonPressedImage.src  = "assets/images/tanker_control_buttons_right_pressed.png";
        // upButtonPressedImage.src     = "assets/images/tanker_control_buttons_up_pressed.png";
        // downButtonPressedImage.src   = "assets/images/tanker_control_buttons_down_pressed.png";
        // fireButtonPressedImage.src   = "assets/images/tanker_control_buttons_fire_pressed.png";

        // let buttonWidth = GAME_WIDTH / 10;
        // let uiLayer = this.getLayer(3);

        // let upButton = new ImageButton(
        //                   uiLayer,
        //                   upButtonImage, upButtonPressedImage,
        //                   new Vector2d(2 * buttonWidth, 3/4 * GAME_HEIGHT),
        //                   buttonWidth, buttonWidth);
        // let leftButton = new ImageButton (
        //                   uiLayer,
        //                   leftButtonImage, leftButtonPressedImage,
        //                   new Vector2d(1 * buttonWidth, (3/4 * GAME_HEIGHT) + buttonWidth),
        //                   buttonWidth, buttonWidth);
        // let rightButton = new ImageButton(
        //                   uiLayer,
        //                   rightButtonImage, rightButtonPressedImage,
        //                   new Vector2d(3 * buttonWidth, (3/4 * GAME_HEIGHT) + buttonWidth),
        //                   buttonWidth, buttonWidth);
        // let downButton = new ImageButton (
        //                   uiLayer,
        //                   downButtonImage, downButtonPressedImage,
        //                   new Vector2d(2 * buttonWidth, (3/4 * GAME_HEIGHT) + (2*buttonWidth)),
        //                   buttonWidth, buttonWidth);
        // let fireButton = new ImageButton (
        //                   uiLayer,
        //                   fireButtonImage, fireButtonPressedImage,
        //                   new Vector2d(GAME_WIDTH - 2 * buttonWidth, (3/4 * GAME_HEIGHT) + (buttonWidth)),
        //                   buttonWidth, buttonWidth);
        // this.gameWorld.addGameObject(upButton);
        // this.gameWorld.addGameObject(downButton);
        // this.gameWorld.addGameObject(rightButton);
        // this.gameWorld.addGameObject(leftButton);
        // this.gameWorld.addGameObject(fireButton);
        // let bird = this.gameWorld.getGameObject(0);
        // upButton.onClick = ()=>{
        //   bird.velocity = new Vector2d(0, -5);
        // }
        // leftButton.onClick= ()=>{
        //   bird.velocity = new Vector2d(-5, 0);
        // }
        // rightButton.onClick= ()=>{
        //   bird.velocity = new Vector2d(5, 0);
        // }
        // downButton.onClick = ()=>{
        //   bird.velocity = new Vector2d(0, 5);
        // }


        let playerTank = new Image();
        let button1u = new Image();
        let button1d = new Image();

        playerTank.src = "assets/images/tankBlue_outline.png";
        button1u.src = "assets/images/Glossy01.png";
        button1d.src = "assets/images/Glossy02.png";

        this.addNewLayers(4);
        this.gameWorld = new World();
        this.gameWorld.addGameObject( new Tank(this.getLayer(2), new Vector2d(50, 427), 60, 60, playerTank));
      //  this.gameWorld.addGameObject(new GameObject(this.getLayer(1), new Vector2d(100, 50), 50, 400));

        let uiLayer = this.getLayer(3);

        let upButton = new ImageButton(uiLayer, button1u, button1d, new Vector2d(80, 3/4 * GAME_HEIGHT),  40, 40);
        let downButton = new ImageButton(uiLayer, button1u, button1d, new Vector2d(80, 3/4 * GAME_HEIGHT + 80),  40, 40);
        let leftButton = new ImageButton(uiLayer, button1u, button1d, new Vector2d(40, 3/4 * GAME_HEIGHT + 40),  40, 40);
        let rightButton = new ImageButton(uiLayer, button1u, button1d, new Vector2d(120, 3/4 * GAME_HEIGHT + 40),  40, 40);

        this.gameWorld.addGameObject(upButton);
        this.gameWorld.addGameObject(downButton);
        this.gameWorld.addGameObject(leftButton);
        this.gameWorld.addGameObject(rightButton);

        let player = this.gameWorld.gameObjects[0];

        upButton.onClick = ()=>{
         player.velocity = new Vector2d(0, -5);
        }
        leftButton.onClick= ()=>{
         player.velocity = new Vector2d(-5, 0);
        }
        rightButton.onClick= ()=>{
         player.velocity = new Vector2d(5, 0);
        }
        downButton.onClick = ()=>{
         player.velocity = new Vector2d(0, 5);
        }
    }

    update(){
        let playerLayer = this.getLayer(2);
        this.gameWorld.update();

        let player = this.gameWorld.gameObjects[0];

        if(this.gameWorld.gameObjects[1].isPressed == true){
          player.velocity = new Vector2d(0, -5);   //for up button
          playerLayer.angle = 0;
        }
        if(this.gameWorld.gameObjects[2].isPressed == true){
          player.velocity = new Vector2d(0, 5);      //for down button
          player.angle = 2 * PI/2;
        }
        if(this.gameWorld.gameObjects[3].isPressed == true){
          player.velocity = new Vector2d(-5, 0);      //for left button
          player.angle = 3 * PI/2;
        }
        if(this.gameWorld.gameObjects[4].isPressed == true){
          player.velocity = new Vector2d(5, 0);       //for right button
          player.angle = 1 * PI/2;
        }

    }

    render(){
        let background = this.getLayer(0);
        let pipeLayer = this.getLayer(1);
        let playerLayer = this.getLayer(2);
        let uiLayer = this.getLayer(3);

<<<<<<< HEAD
        background.canvas.style.backgroundColor = "blue";
=======
        background.canvas.style.backgroundColor = "white";
>>>>>>> bc9858d389b9b249910891f602a3171a5e36b83b
        playerLayer.context.clearRect(0, 0, playerLayer.canvas.width, playerLayer.canvas.height);
        this.gameWorld.render();
    }


}
