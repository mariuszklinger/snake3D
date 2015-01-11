'use strict';

require.config({

    baseUrl: 'js',

    paths: {
        'THREE':                    '/bower_components/threejs/build/three.min',
        'THREE.TrackballControls':  '/lib/TrackballControls',
        'underscore':               '/node_modules/underscore/underscore',
    },

    shim:{
        'THREE.TrackballControls':{
            deps: ['THREE'],
        },
    },
});

// Start the main app logic.
define(['client/Game', 'underscore'], function (Game, _) {

    var g = new Game();
    g.animate();

    window.addEventListener('keydown', _.bind(g.keyPress, g));
});