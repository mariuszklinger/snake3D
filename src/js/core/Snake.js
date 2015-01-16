'use strict';

define(['underscore', 'core/SETTINGS'], function(_, SETTINGS){

    function Snake(scene){

        this.ID = 1;
        
        this.color = Math.random() * 0xFFFFFF;
        
        this.last_direction = false;

        this.body = [
            {v: new THREE.Vector3(0, 0, 1)},
            {v: new THREE.Vector3(0, 0, 2)},
            {v: new THREE.Vector3(0, 0, 3)},
            {v: new THREE.Vector3(0, 0, 4)},
            {v: new THREE.Vector3(0, 0, 5)},
            {v: new THREE.Vector3(0, 0, 6)},
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
            }
    }

    return Snake;
})