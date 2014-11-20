'use strict';

define(['core/Engine', 'core/Snake', 'core/SETTINGS', 'THREE.TrackballControls'], 
    function(Engine, Snake, SETTINGS){

    function Game(){
        this.engine = new Engine();
        this.player = new Snake();

        this.engine.addSnake(this.player);

        this.init();
    };

    Game.prototype = {        
        
        keyPress: function(event){
        },

        init: function(){

            var self = this;

            var renderer = new THREE.WebGLRenderer();
            renderer.setSize( 1450, 800 );
            renderer.setClearColor( 0xCCCCCC, 1);
            document.body.appendChild( renderer.domElement );

            var camera = new THREE.PerspectiveCamera(
                35,             // Field of view
                1450 / 800,     // Aspect ratio
                0.1,            // Near plane
                10000           // Far plane
            );

            camera.position.set(20, 0, 100);
            camera.lookAt(new THREE.Vector3(20, 0, 100));    
            
            this.camera = camera; 

            this.renderer = renderer;   

            var scene = new THREE.Scene();
            //scene.fog = new THREE.FogExp2( 0xcccccc, 0.01 );

            this.scene = scene;

            var geometry = new THREE.BoxGeometry( 5, 5, 5 );
            var material = new THREE.MeshLambertMaterial( { color: 0xBDB9AF } );
            var mesh;

            for (var i = 1; i >= 0; i--) {
                mesh = new THREE.Mesh( geometry, material );
                mesh.position.x = -50 + Math.random() * 100;
                mesh.position.y = -50 + Math.random() * 100;
                mesh.position.z = -50 + Math.random() * 100;
                scene.add( mesh );
            };
            
            var createMesh = function(){
                var mesh = new THREE.Mesh( geometry, material );
                var material = new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } );
                mesh.position.x = -50 + Math.random() * 100;
                mesh.position.y = -50 + Math.random() * 100;
                mesh.position.z = -50 + Math.random() * 100;
                scene.add( mesh );
            }
            setInterval(createMesh, 1000);

            var light = new THREE.DirectionalLight( 0xffffff );
            light.position.set( 1, 1, 1 );
            scene.add( light );

            light = new THREE.DirectionalLight( 0x002288 );
            light.position.set( -1, -1, -1 );
            scene.add( light );

            light = new THREE.DirectionalLight( 0xED23AF );
            light.position.set( 0, -20, 1 );
            scene.add( light );

            var controls = new THREE.TrackballControls(camera);

            controls.rotateSpeed = 1.0;
            controls.zoomSpeed = 1.2;
            controls.panSpeed = 0.8;

            controls.noZoom = false;
            controls.noPan = false;

            controls.staticMoving = true;
            controls.dynamicDampingFactor = 0.3;

            controls.keys = [ 65, 83, 68 ];

            controls.addEventListener('change', function(){
                self.render.call(self);
            });

            this.controls = controls;
        },

        render: function(){
            this.renderer.render(this.scene, this.camera);
        },

        animate: function(){
            
            var self = this;

            var _animate = function(){
                requestAnimationFrame(_animate);
                self.controls.update();
                self.render();
            }

            _animate();
        },
        
    };

    return Game;
})