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
    { x: -32, y: -40},
    { x: -32, y: 40},
    { x: -10, y: 40},
    { bezier: [
    {x: 40, y: 40}, // start control point
    {x: 40, y: -40}, // end control point
    {x: -10, y: -40}, // end point
              ]},
        { x: -10, y: -40},
    { x:  -32, y:  -40},
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
 {x: -70, y: 0}],
  stroke: 20,
  color: '#fff',
});



function animate() {
 illo.rotate.y += isSpinning ? 0.03 : 0 ;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();

