'use strict';

define(['core/Engine', 'core/Snake', 'client/visual/VSnake', 'core/SETTINGS'], 
    function(Engine, Snake, VSnake, SETTINGS){

    function Game(){
        this.engine = new Engine();

        var snake = new Snake();
        this.player = new VSnake(this.engine.vgrid.scene, snake);

        this.player.refreshScene();

        this.engine.addSnake(this.player);
    };

    Game.prototype = {
        
        keyPress: function(event){
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