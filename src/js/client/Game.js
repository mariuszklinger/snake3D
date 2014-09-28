'use strict';

define(['core/Engine', 'core/Snake', 'core/SETTINGS'], function(Engine, Snake, SETTINGS){

    function Game(){
        this.engine = new Engine();
        this.player = new Snake();

        this.engine.addSnake(this.player);
    };

    Game.prototype = {        
        
        keyPress: function(){
        },
        
    };

    return Game;
})