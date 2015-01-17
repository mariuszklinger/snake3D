'use strict';

define(['underscore', 'core/SETTINGS'], function(_, SETTINGS){

    function VSnake(scene, snake){
        this.scene = scene;
        this.snake = snake;
        this.body = [];

        this.init();
    };

    VSnake.prototype = {

        init: function(){

            var self = this;

            _.each(this.snake.body, function(obj){
                self.addBlock(obj);  
            }, this);
        },
        
        addBlock: function(block){

            var self = this;
            var cs = SETTINGS.CUBE_SIZE;

            var geometry = new THREE.BoxGeometry(cs, cs, cs);
            var material = new THREE.MeshLambertMaterial({color: self.snake.color});
            var mesh = new THREE.Mesh(geometry, material);
            
            mesh.position.copy(block.v);
            mesh.position.multiplyScalar(cs);
            mesh.position.addScalar(cs/2);

            this.scene.add(mesh);
            this.body.push(mesh);
        },
    
        refreshScene: function(){

        },

        move: function(direction){

            var cs = SETTINGS.CUBE_SIZE;
            var head = this.body[0];

            var prev_position = new THREE.Vector3();
            prev_position.copy(head.position);

            // moving HEAD
            var shift_vector = this.snake.move(direction);
            shift_vector.multiplyScalar(cs);
            head.position.add(shift_vector);

            // moving rest of the snake's body
            // each block follow the previous
            var tmp;
            _.each(this.body.slice(1), function(block){
                tmp = new THREE.Vector3();
                tmp.copy(block.position);
                block.position.copy(prev_position);
                prev_position = tmp;
            }, this);
        },

        moveA: function(){
            this.move('A');
        },

        moveD: function(){
            this.move('D');
        },

        moveS: function(){
            this.move('S');
        },

        moveW: function(){
            this.move('W');
        },

        moveQ: function(){
            this.move('Q');
        },

        moveE: function(){
            this.move('E');
        },
    };

    return VSnake;
})