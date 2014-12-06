'use strict';

define(['core/SETTINGS'], function(SETTINGS){

    function Snake(scene){
        
        var cs = SETTINGS.CUBE_SIZE;

        this.body = [
            {v:[20,20,20 + 1 * cs]},
            {v:[20,20,20 + 2 * cs]},
            {v:[20,20,20 + 3 * cs]},
            {v:[20,20,20 + 4 * cs]},
            {v:[20,20,20 + 5 * cs]},
            {v:[20,20,20 + 6 * cs]},
        ];
    };

    Snake.prototype = {

        move: function(){
            
        },
    }

    return Snake;
})