'use strict';

define(['underscore', 'core/SETTINGS'], function(_, SETTINGS){

    function VSnake(scene, snake){
        this.scene = scene;
        this.snake = snake;
    };

    VSnake.prototype = {

        init: function(){

            var self = this;

            _.each(this.snake.body, function(obj){
                self.addBlock(obj);  
            }, this);
        },
        
        addBlock: function(obj){

            var self = this;

            var geometry = new THREE.BoxGeometry(SETTINGS.CUBE_SIZE, SETTINGS.CUBE_SIZE, SETTINGS.CUBE_SIZE);
            var material = new THREE.MeshLambertMaterial({color: self.snake.color});
            var mesh = new THREE.Mesh(geometry, material);

            mesh.position.x = obj.v[0];
            mesh.position.y = obj.v[1];
            mesh.position.z = obj.v[2];
            this.scene.add(mesh);    
        },
    
        refreshScene: function(){

        },
    };

    return VSnake;
})