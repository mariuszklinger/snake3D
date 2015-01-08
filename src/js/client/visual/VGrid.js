'use strict';

define(['core/SETTINGS', 'underscore', 'THREE.TrackballControls'], 
    function(SETTINGS, _){

    function VGrid(grid){
        

        this.grid = grid;
        this.init();
        this.addGrid();
    };

    VGrid.prototype = {

        scene: null,
        camera: null,
        renderer: null,

        init: function(){

            this.renderer = (function(THREE){
                var renderer = new THREE.WebGLRenderer();
                renderer.setSize(1450, 800);
                renderer.setClearColor(0xCCCCCC, 1);
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

                camera.position.set(107, 93, 148);
                camera.lookAt(new THREE.Vector3(107, 93, 148));
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

        },

        addGrid: function(vector){

            var material = new THREE.LineBasicMaterial({
                color: 0x000000
            });

            var X = SETTINGS.GRID_DIMENSIONS[0],
                Y = SETTINGS.GRID_DIMENSIONS[1],
                Z = SETTINGS.GRID_DIMENSIONS[2];
            var cs = SETTINGS.CUBE_SIZE;

            var geometry, line;

            for(var x = 0; x <= X; x += 2){
                for(var y = 0; y <= Y; y += 2){
                    for(var z = 0; z <= Z; z += 2){

                        geometry = new THREE.Geometry();
                        geometry.vertices.push(new THREE.Vector3(cs * x, cs * y, 0));
                        geometry.vertices.push(new THREE.Vector3(cs * x, cs * y, cs * Z));
                        line = new THREE.Line(geometry, material);
                        this.scene.add(line);

                        geometry = new THREE.Geometry();
                        geometry.vertices.push(new THREE.Vector3(cs * x, 0, cs * z));
                        geometry.vertices.push(new THREE.Vector3(cs * x, cs * Z, cs * z));
                        line = new THREE.Line(geometry, material);
                        this.scene.add(line);

                        geometry = new THREE.Geometry();
                        geometry.vertices.push(new THREE.Vector3(0, cs * y, cs * z));
                        geometry.vertices.push(new THREE.Vector3(cs * X, cs * y, cs * z));
                        line = new THREE.Line(geometry, material);
                        this.scene.add(line);
                    }
                }
            }
        },

    }

    return VGrid;
})