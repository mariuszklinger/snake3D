'use strict';

define(['core/Engine', 'core/Snake', 'client/visual/VSnake', 'core/SETTINGS'], 
    function(Engine, Snake, VSnake, SETTINGS){

    function Game(){
        this.engine = new Engine();

        var snake = new Snake();
        this.player = new VSnake(this.engine.vgrid.scene, snake);

        this.player.init();

        this.engine.addSnake(this.player);
    };

    Game.prototype = {
        
        keyPress: function(event){
            var code = event.keyCode;
            switch (code) {
                // Left key
                case 65:
                case 37: 
                    this.player.moveA();
                    break; 
                // Up key
                case 87:
                case 38: 
                    this.player.moveW();
                    break;
                // Right key
                case 68:
                case 39: 
                    this.player.moveD();
                    break;
                // Down key
                case 83:
                case 40: 
                    this.player.moveS(); 
                    break;
                // Forward key
                case 81:
                    this.player.moveQ(); 
                    break;
                // Backward key
                case 69: 
                    this.player.moveE(); 
                    break;
            }
        },

        render: function(){
            this.engine.vgrid.renderer.render(this.engine.vgrid.scene, this.engine.vgrid.camera);
        },

        animate: function(){
            
            var self = this;

            var _animate = function(){
                requestAnimationFrame(_animate);
                self.engine.vgrid.controls.update();
                self.render();
            }

            _animate();
        },
        
    };

    return Game;
})