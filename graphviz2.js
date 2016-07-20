var util = require('util'),
  graphviz = require('graphviz');

// Create digraph G
var g = graphviz.digraph("G");

// Add node (ID: Hello)
var n1 = g.addNode( "Fruit", {"color" : "gray"} );
n1.set( "style", "filled" );

// Add node (ID: World)
var n2 = g.addNode( "Orange" );
g.addNode("Mandarin");
g.addNode("Navel");

// Add edge between the two nodes
var e = g.addEdge( n1, "Orange" );
e.set( "color", "orange" );
g.addEdge(n2,"Mandarin");
g.addEdge(n2,"Navel");

// Add node (ID: World)
g.addNode( "Seedless Grape" );

// Add edge between the two nodes
var e = g.addEdge( n1, "Seedless Grape" );
e.set( "color", "purple" );



// Print the dot script
console.log( g.to_dot() );

// Set GraphViz path (if not in your path)
g.setGraphVizPath( "/usr/local/bin" );
// Generate a PNG output
g.output( "png", "test02.png" );
