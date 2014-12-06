'use strict';

define(['core/SETTINGS', 'underscore', 'THREE.TrackballControls'], 
    function(SETTINGS, _){

    function Grid(){
        this.init();
    };

    Grid.prototype = {

        board: [],        

        init: function(){

            var X = SETTINGS.GRID_DIMENSIONS[0],
                Y = SETTINGS.GRID_DIMENSIONS[1],
                Z = SETTINGS.GRID_DIMENSIONS[2];
                    
            var dimensions = 3;
            for(var x = 0; x < X; x++){
                this.board.push([]);

                for(var y = 0; y < Y; y++){
                    this.board[x].push([]);

                    for(var z = 0; z < Z; z++){
                        this.board[x][y].push({})
                    }
                }
            }
        },

        
    }

    return Grid;
})