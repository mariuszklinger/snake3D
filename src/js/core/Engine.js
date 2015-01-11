'use strict';

define(['core/Grid', 'client/visual/VGrid', 'core/Snake'], function(Grid, VGrid, Snake){

    function Engine(){
        this.grid = new Grid();
        this.vgrid = new VGrid();

        this.snake_register = {};
    };

    Engine.prototype = {

        addSnake: function(snake){
            //TODO: choose not-taken location for new snake
            this.snake_register[snake.ID] = snake;
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