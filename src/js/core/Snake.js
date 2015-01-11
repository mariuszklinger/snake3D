'use strict';

define(['underscore', 'core/SETTINGS'], function(_, SETTINGS){

    function Snake(scene){
        
        this.color = Math.random() * 0xFFFFFF;

        this.body = [
            {v:[0, 0, 1]},
            {v:[0, 0, 2]},
            {v:[0, 0, 3]},
            {v:[0, 0, 4]},
            {v:[0, 0, 5]},
            {v:[0, 0, 6]},
        ];
    };

    Snake.prototype = {

        moveA: function(){
            
        },

        moveD: function(){
            _.each(this.body, function(obj){
                obj[2] += 1;
            }, this);
        },

        moveS: function(){
            
        },

        moveW: function(){
            
        },
    }

    return Snake;
})