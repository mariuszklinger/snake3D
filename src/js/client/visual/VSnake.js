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
            var cs = SETTINGS.CUBE_SIZE;

            var geometry = new THREE.BoxGeometry(cs, cs, cs);
            var material = new THREE.MeshLambertMaterial({color: self.snake.color});
            var mesh = new THREE.Mesh(geometry, material);

            mesh.position.x = cs/2 + obj.v[0] * cs;
            mesh.position.y = cs/2 + obj.v[1] * cs;
            mesh.position.z = cs/2 + obj.v[2] * cs;
            this.scene.add(mesh);    
        },
    
        refreshScene: function(){

        },
    };

    return VSnake;
})