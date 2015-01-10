'use strict';

define(['core/SETTINGS'], function(SETTINGS){

    function Snake(scene){
        
        this.color = Math.random() * 0xFFFFFF;

        this.body = [
            {v:[0, 0, 1]},
            {v:[0, 0, 2]},
            {v:[0, 0, 3]},
            {v:[0, 0, 4]},
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