'use strict';

define(['core/Grid', 'core/Snake'], function(Grid, Snake){

    function Engine(){
        this.grid = new Grid();
        this.snake_register = {};
    };

    Engine.prototype.addSnake = function(snake){

            this.snake = snake;
            this.snake.engine = this;

            //TODO: choose not-taken location for new snake
            this.snake_register[this.snake.ID] = this.snake;    
    }
        
    Engine.prototype.move = function(snakeID, direction){

        switch(direction){
            case 'A':
                return [-1, 0, 0];
            case 'S':
                return [0, -1, 0];
            case 'D':
                return [1, 0, 0];
            case 'Q':
                return [0, 0, 1];
            case 'W':
                return [0, 1, 0];
            case 'E':
                return [0, 0, -1];
            default:
                return [0, 0, 0];
        }
    }

    return Engine;
})