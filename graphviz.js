// const util = require('util');
const graphviz = require('graphviz');

// Create digraph G
const g = graphviz.digraph('G');

// Add node (ID: Hello)
const n1 = g.addNode('Vehicle', { color: 'gray' });
n1.set('style', 'filled');

// Add node (ID: World)
g.addNode('Golf Cart');

// Add edge between the two nodes
let e = g.addEdge(n1, 'Golf Cart');
e.set('color', 'red');

// Add node (ID: World)
g.addNode('Automobile');

// Add edge between the two nodes
e = g.addEdge(n1, 'Automobile');
e.set('color', 'red');

// Add node (ID: World)
g.addNode('Motorcycle');

// Add edge between the two nodes
e = g.addEdge(n1, 'Motorcycle');
e.set('color', 'red');

// Print the dot script
console.log(g.to_dot());

// Set GraphViz path (if not in your path)
g.setGraphVizPath('/usr/local/bin');
// Generate a PNG output
g.output('png', 'test01.png');
