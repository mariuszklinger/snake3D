'use strict';

define(['core/Engine', 'core/Snake', 'client/visual/VSnake', 'client/visual/VGrid', 'core/SETTINGS'], 
    function(Engine, Snake, VSnake, VGrid, SETTINGS){

    function Game(){
        this.engine = new Engine();

        this.vgrid = new VGrid();

        var snake = new Snake();
        this.engine.addSnake(snake);

        this.player = new VSnake(this.vgrid.scene, snake);
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
            this.vgrid.render();
        },

        animate: function(){
            
            var self = this;

            var _animate = function(){
                requestAnimationFrame(_animate);
                self.vgrid.controls.update();
                self.render();
            }

            _animate();
        },
        
    };

    return Game;
})