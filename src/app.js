// Start the main app logic.
requirejs(['core/Engine', 'THREE.TrackballControls'],
function (E) {

    console.log('Engine loaded!');

    window.onload = (function() {

        console.log('WINDOW ON LOAD!');

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( 1450, 800 );
        renderer.setClearColor( 0xCCCCCC, 1);
        document.body.appendChild( renderer.domElement );

        var scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

        var camera = new THREE.PerspectiveCamera(
            35,             // Field of view
            1450 / 800,     // Aspect ratio
            0.1,            // Near plane
            10000           // Far plane
        );

        window.camera = camera;

        camera.position.set(20, 0, 100);
        camera.lookAt(new THREE.Vector3(20, 0, 0));

        var geometry = new THREE.BoxGeometry( 5, 5, 5 );
        var material = new THREE.MeshLambertMaterial( { color: 0xBDB9AF } );

        for (var i = 175; i >= 0; i--) {
            mesh = new THREE.Mesh( geometry, material );
            mesh.position.x = -50 + Math.random() * 100;
            mesh.position.y = -50 + Math.random() * 100;
            mesh.position.z = -50 + Math.random() * 100;
            scene.add( mesh );
        };

        var material = new THREE.LineBasicMaterial({
            color: 0xFFCD23
        });

        var geometry = new THREE.Geometry();
        //geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
        //geometry.vertices.push(new THREE.Vector3(300, 0, 0));

        var line = new THREE.Line( geometry, material );
        scene.add( line );

        var light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 1, 1, 1 );
        scene.add( light );

        light = new THREE.DirectionalLight( 0x002288 );
        light.position.set( -1, -1, -1 );
        scene.add( light );

        light = new THREE.DirectionalLight( 0xED23AF );
        light.position.set( 0, -20, 1 );
        scene.add( light );

        // var light = new THREE.PointLight( 0xFFFF00 );
        // light.position.set( 0, 0, 0 );
        // scene.add( light );

        renderer.render( scene, camera );

        var controls = new THREE.TrackballControls( camera );

        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;

        controls.noZoom = false;
        controls.noPan = false;

        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.3;

        controls.keys = [ 65, 83, 68 ];

        controls.addEventListener( 'change', render );

        function animate() {
            requestAnimationFrame( animate );
            controls.update();
        }

        function render() {
            renderer.render( scene, camera );
        }

        animate();
    })();
});