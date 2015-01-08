Snake3D (_very early draft_)
----

Classic Snake just became 3D and mulitplayer.

###To run: ###
```
npm start
```

and head to http://localhost/src/

###To test: ###
```
npm test
```

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
