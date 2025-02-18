const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: 'A4',
  pixelsPerInch: 300,
  //you can change the units to px, cm, in, pt, pc
  units: 'cm',
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'orange';
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width / 2, height / 2, width * 0.2, 0, Math.PI * 2, false);
    context.fillStyle = 'red';
    context.fill();

    context.lineWidth = width * 0.009;
    context.strokeStyle = 'green';
    context.stroke();
  };



};

canvasSketch(sketch, settings);
