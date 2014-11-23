'use strict';

define(['core/SETTINGS', 'THREE.TrackballControls'], function(SETTINGS){

    function Grid(){
        this.init();
    };

    Grid.prototype = {

        scene: null,
        camera: null,
        renderer: null,

        init: function(){

            this.renderer = (function(THREE){
                var renderer = new THREE.WebGLRenderer();
                renderer.setSize( 1450, 800 );
                renderer.setClearColor( 0xCCCCCC, 1);
                document.body.appendChild(renderer.domElement);
            
                return renderer;
            })(THREE);

            this.camera = (function(){
                var camera = new THREE.PerspectiveCamera(
                    35,             // Field of view
                    1450 / 800,     // Aspect ratio
                    0.1,            // Near plane
                    10000           // Far plane
                );

                camera.position.set(20, 0, 100);
                camera.lookAt(new THREE.Vector3(20, 0, 100));
                return camera;         
            })(); 

            this.scene = new THREE.Scene();

            this.controls = (function(self){
                var controls = new THREE.TrackballControls(self.camera);

                controls.rotateSpeed = 1.0;
                controls.zoomSpeed = 1.2;
                controls.panSpeed = 0.8;

                controls.noZoom = false;
                controls.noPan = false;

                controls.staticMoving = true;
                controls.dynamicDampingFactor = 0.3;

                controls.keys = [ 65, 83, 68 ];

                controls.addEventListener('change', function(){
                    self.renderer.render.call(self);
                });

                return controls;
            })(this);

            // --- D E M O ---
            var geometry = new THREE.BoxGeometry( 5, 5, 5 );
            var material = new THREE.MeshLambertMaterial( { color: 0xBDB9AF } );
            var mesh;
            var self = this;

            var createMesh = function(){
                var mesh = new THREE.Mesh( geometry, material );
                var material = new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } );
                mesh.position.x = -50 + Math.random() * 100;
                mesh.position.y = -50 + Math.random() * 100;
                mesh.position.z = -50 + Math.random() * 100;
                self.scene.add( mesh );
            }

            setInterval(createMesh, 1000);
            // --- CUT HERE ---
        },

        putBlock: function(vector){
        },

        delBlock: function(vector){
        },

        render: function(){
        },

    }

    return Grid;
})