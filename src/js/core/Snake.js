'use strict';

define(['core/SETTINGS'], function(SETTINGS){

    function Snake(scene){
        
        var cs = SETTINGS.CUBE_SIZE;

        this.body = [
            {v:[cs/2, cs/2, cs/2 + 1 * cs]},
            {v:[cs/2, cs/2, cs/2 + 2 * cs]},
            {v:[cs/2, cs/2, cs/2 + 3 * cs]},
            {v:[cs/2, cs/2, cs/2 + 4 * cs]},
            {v:[cs/2, cs/2, cs/2 + 5 * cs]},
            {v:[cs/2, cs/2, cs/2 + 6 * cs]},
        ];
    };

    Snake.prototype = {

        moveA: function(){
            
        },

        moveD: function(){
            
        },

        moveS: function(){
            
        },

        moveW: function(){
            
        },
    }

    return Snake;
})