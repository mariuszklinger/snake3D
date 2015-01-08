snake3D (_very early draft_)
----

Classic Snake just become 3D and mulitplayer.

###To run: ###
```
npm start
```

and head to http://localhost/src/

###To test: ###
```
npm test
```

Project structure:
----

````
js             
├───client     
│   └───visual => Classes represent 3D layer of object are prefixed "V" (VSnake, VGrid)
├───core       => Core classes used by both, server and client sides
└───server     => Connections handling, server side logic
````
