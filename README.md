Snake3D [![Build Status](https://travis-ci.org/mariuszklinger/snake3D.svg)](https://travis-ci.org/mariuszklinger/snake3D)
=======

Classic Snake just became 3D and mulitplayer.

Preview:
----
![](https://raw.github.com/mariuszklinger/snake3D/master/preview.png)

Goals:
----
* implementing logic and engine just on top of `three.js`
* decoupling visual side from "backend"
* testable API (karma, jasmine)
* have some fun with 3D blocks

Project conventions:
----

````
js             
├───client     
│   └───visual => Classes represent 3D layer of object are prefixed "V" (VSnake, VGrid)
├───core       => Core classes used by both, server and client sides
└───server     => Connections handling, server side logic
````

* Any visual object (i. e. `VSnake`) requires during initialization appropiate "core" object (i. e. `Snake`), and scene reference. 
* In the render loop (`Game.animate()`), all objects attached to scene is shown on `VGrid`.

###To run: ###
```
npm start
```

and head to http://localhost/src/

###To test: ###
```
npm test
```
