'use strict';

define(['core/Engine', 'core/Snake', 'core/SETTINGS'], 
    function(Engine, Snake, SETTINGS){

    function Game(){
        this.engine = new Engine();
        this.player = new Snake();

        this.engine.addSnake(this.player);
    };

    Game.prototype = {
        
        keyPress: function(event){
        },

        render: function(){
            this.engine.grid.renderer.render(this.engine.grid.scene, this.engine.grid.camera);
        },

        animate: function(){
            
            var self = this;

            var _animate = function(){
                requestAnimationFrame(_animate);
                self.engine.grid.controls.update();
                self.render();
            }

            _animate();
        },
        
    };

    return Game;
})