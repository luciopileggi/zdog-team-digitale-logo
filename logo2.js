// Made with Zdog
let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;
  },
});

// 3D shape
new Zdog.Shape({
  addTo: illo,
  path: [
    { x: -12, y: -40},
    { x: -12, y: 40},
    { x: 10, y: 40},
    { bezier: [
    {x: 60, y: 40}, // start control point
    {x: 60, y: -40}, // end control point
    {x: 10, y: -40}, // end point
              ]},
        { x: 10, y: -40},
    { x:  -12, y:  -40},
  ],
  
  closed: false,
  stroke: 15,
  color: '#fff',
}
              
              );
new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
path:[
 {x: -50, y: 0}],
  stroke: 20,
  color: '#fff',
});



// ----- animate ----- //

var ticker = 0;
var cycleCount = 240;



function animate() {
illo.rotate.y += isSpinning ? 0.02 : 10 ;
 illo.updateRenderGraph();
 requestAnimationFrame( animate );
}

animate();

