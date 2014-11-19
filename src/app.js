'use strict';

require.config({

    baseUrl: 'js',

    paths: {
        'THREE':                  '/bower_components/threejs/build/three.min',
        'THREE.TrackballControls':'/lib/TrackballControls',
    },

    shim:{
        'THREE.TrackballControls':{
            deps: ['THREE'],
        },
    },
});

// Start the main app logic.
define(['client/Game'], function (Game) {

    var g = new Game();
    g.animate();
});