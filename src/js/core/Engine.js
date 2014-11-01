'use strict';

define(['core/Grid', 'core/Snake'], function(Grid, Snake){

    function Engine(){
        this.grid = new Grid();
    };

    Engine.prototype = {

        addSnake: function(snake){
            //TODO: choose not-taken location for new snake
            return [1,1,1];
        },
        
        moveLeft: function(snakeID){
        },

        moveRight: function(snakeID){
        },
        
        moveUp: function(snakeID){
        },
    
        moveDown: function(snakeID){
        },
    }

    return Engine;
})