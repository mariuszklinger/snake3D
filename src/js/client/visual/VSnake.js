'use strict';

define(['underscore', 'core/SETTINGS'], function(_, SETTINGS){

    function VSnake(scene, snake){
        this.scene = scene;
        this.snake = snake;
        this.body = [];
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
            this.body.push(mesh);
        },
    
        refreshScene: function(){

        },

        move: function(direction){

            var v = new THREE.Vector3();
            v.copy(this.body[0].position);

            // moving HEAD
            switch(direction){
                case 'A': 
                    this.body[0].position.x -= SETTINGS.CUBE_SIZE;
                    this.snake.moveA();
                    break;
                case 'S':
                    this.body[0].position.y -= SETTINGS.CUBE_SIZE;
                    this.snake.moveS();
                    break;
                case 'D':
                    this.body[0].position.x += SETTINGS.CUBE_SIZE;
                    this.snake.moveD();
                    break;
                case 'W':
                    this.body[0].position.y += SETTINGS.CUBE_SIZE;
                    this.snake.moveW();
                    break;
                case 'Q':
                    this.body[0].position.z += SETTINGS.CUBE_SIZE;
                    this.snake.moveW();
                    break;
                case 'E':
                    this.body[0].position.z -= SETTINGS.CUBE_SIZE;
                    this.snake.moveW();
                    break;
            }

            // moving rest of the snake's body
            var tmp;
            _.each(this.body.slice(1), function(obj){
                tmp = new THREE.Vector3();
                tmp.copy(obj.position);
                obj.position.copy(v);
                v = tmp;
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