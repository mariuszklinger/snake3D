'use strict';

define(['underscore', 'core/SETTINGS'], function(_, SETTINGS){

    function VSnake(scene, snake){
        this.scene = scene;
        this.snake = snake;
    };

    VSnake.prototype = {
        
        addBlock: function(){

        },
    
        refreshScene: function(){

            var geometry = new THREE.BoxGeometry(SETTINGS.CUBE_SIZE, SETTINGS.CUBE_SIZE, SETTINGS.CUBE_SIZE);
            var material = new THREE.MeshLambertMaterial( { color: 0xBDB9AF } );
            var mesh;
            var self = this;

            _.each(this.snake.body, function(obj){
                var mesh = new THREE.Mesh(geometry, material);
                var material = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
                mesh.position.x = obj.v[0];
                mesh.position.y = obj.v[1];
                mesh.position.z = obj.v[2];
                this.scene.add( mesh );    
            }, this);
        },
    };

    return VSnake;
})