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
                renderer.setClearColor(0x000000, 1);
                renderer.shadowMapEnabled = true;
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
                camera.lookAt(new THREE.Vector3(67, -100, 74));
                return camera;         
            })(); 

            this.scene = new THREE.Scene();

            // light
            var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.3 );
            this.scene.add( hemiLight );

            var dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
            dirLight.position.set( 1, 10, 1 );
            dirLight.position.multiplyScalar( 50);
            dirLight.name = "dirlight";
            // TODO dirLight.castShadow = true;
            //dirLight.shadowCameraVisible = true;
            this.scene.add(dirLight);

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
                    console.log(self.camera.position);
                });

                return controls;
            })(this);

        },

        addGrid: function(vector){

            var material = new THREE.LineBasicMaterial({
                color: 0xFFFFFF
            });

            var X = SETTINGS.GRID_DIMENSIONS[0],
                Y = SETTINGS.GRID_DIMENSIONS[1],
                Z = SETTINGS.GRID_DIMENSIONS[2];
            var cs = SETTINGS.CUBE_SIZE;

            var geometry, line;

            // TODO
            for(var x = 0; x <= X; x += X){
                for(var y = 0; y <= Y; y += Y){
                    for(var z = 0; z <= Z; z += Z){

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

            // floor
            var rectLength = X * cs, rectWidth = X * cs;
            var rectShape = new THREE.Shape();
            rectShape.moveTo(0,0 );
            rectShape.lineTo(0, rectWidth);
            rectShape.lineTo(rectLength, rectWidth);
            rectShape.lineTo(rectLength, 0);
            rectShape.lineTo(0, 0 );

            var geometry = new THREE.ShapeGeometry(rectShape);
            var material = new THREE.MeshBasicMaterial({ color: 0xCCCCCC, side: THREE.DoubleSide });

            var rectMesh = new THREE.Mesh(geometry, material);
            rectMesh.rotation.set(Math.PI / 2, 0, 0);
            this.scene.add(rectMesh);  
        },

    }

    return VGrid;
})