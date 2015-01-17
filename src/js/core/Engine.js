'use strict';

define(['core/Grid', 'client/visual/VGrid', 'core/Snake'], function(Grid, VGrid, Snake){

    function Engine(){
        this.grid = new Grid();
        this.vgrid = new VGrid();

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
                return new THREE.Vector3(-1, 0, 0);
            case 'S':
                return new THREE.Vector3(0, -1, 0);
            case 'D':
                return new THREE.Vector3(1, 0, 0);
            case 'Q':
                return new THREE.Vector3(0, 0, 1);
            case 'W':
                return new THREE.Vector3(0, 1, 0);
            case 'E':
                return new THREE.Vector3(0, 0, -1);
            default:
                return new THREE.Vector3(0, 0, 0);
        }
    }

    return Engine;
})