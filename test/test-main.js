'use strict';

var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

console.log = function(){}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src/js',

    paths: {
        'THREE':                    '../../lib/three.min',
        'THREE.TrackballControls':  '../../lib/TrackballControls',
        'underscore':               '../../bower_components/underscore/underscore',
    },

    shim:{
        'THREE.TrackballControls':{
            deps: ['THREE'],
        },
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

