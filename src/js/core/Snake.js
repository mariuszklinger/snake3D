'use strict';

define(['underscore', 'core/SETTINGS'], function(_, SETTINGS){

    function Snake(scene){

        this.ID = 1;
        
        this.color = Math.random() * 0xFFFFFF;
        
        this.last_direction = false;
        this.engine = undefined;

        this.body = [
            {v: [0, 0, 1]},
            {v: [0, 0, 2]},
            {v: [0, 0, 3]},
            {v: [0, 0, 4]},
            {v: [0, 0, 5]},
            {v: [0, 0, 6]},
        ];
    };

    Snake.prototype.OPPOSITES_MOVES = {
        'A': 'D',
        'D': 'A',
        'S': 'W',
        'W': 'S',
        'Q': 'E',
        'E': 'Q',
        false: '',
    }

    Snake.prototype.move = function(direction){

        if(this.last_direction === this.OPPOSITES_MOVES[direction]){
            return;
        }

        this.last_direction = direction;
        return this.engine.move(this.ID, direction);
    }

    return Snake;
})