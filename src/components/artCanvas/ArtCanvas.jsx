/* eslint-disable indent */
import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import PropTypes from 'prop-types';

const blankP5Canvas = () => {
  const sketch = (p5) => {
    p5.preload = () => {
      p5.img = p5.loadImage('src/assets/canvas-blank-brush_500.png');
    };
    p5.setup = () => {
      p5.bg = p5.loadImage(p5.img);
      p5.creatCanvas(500, 500);
    };
    p5.draw = () => {
      p5.background(bg);
    };
  };
  return sketch;
};
function ArtCanvas() {
  return (
    <>
      <P5Wrapper sketch={blankP5Canvas()} />
    </>
  );
}

ArtCanvas.propTypes = {};

export default ArtCanvas;
