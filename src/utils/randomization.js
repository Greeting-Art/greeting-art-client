/* eslint-disable keyword-spacing */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable indent */
import { randomizeColor, randomizeCurve, randomizeSize } from './math-utils.js';

const artResolution = 500;

export const blankP5Canvas = () => {
  const sketch = (p5) => {
    let c = p5.color(84, 113, 207);
    const centerCoords = artResolution / 2;
    p5.preload = () => {};
    p5.setup = () => {
      p5.createCanvas(artResolution, artResolution);
      p5.noLoop();
    };
    p5.draw = () => {
      p5.background(c);
      p5.textSize(48);
      p5.textAlign(p5.CENTER);
      p5.fill('white');
      p5.text('🖌', centerCoords, centerCoords);
    };
  };
  return sketch;
};

export const randomArt = () => {
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(artResolution, artResolution);
      p5.background(255);
      const density = randomizeSize();

      for (let i = 0; i < density; i++) {
        p5.fill('yellow');
        p5.square(
          p5.random(artResolution),
          p5.random(artResolution),
          p5.random(100)
        );

        p5.fill('red');
        p5.circle(
          p5.random(artResolution),
          p5.random(artResolution),
          p5.random(100)
        );

        p5.fill('blue');
        p5.square(
          p5.random(artResolution),
          p5.random(artResolution),
          p5.random(100)
        );
      }
    };
  };
  return sketch;
};

export const weirdArt = () => {
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(artResolution, artResolution);
      p5.stroke(randomizeColor(), randomizeColor(), randomizeColor());
      p5.background(randomizeColor(), randomizeColor(), randomizeColor());
      p5.bezier(
        randomizeCurve(),
        randomizeCurve(),
        randomizeCurve(),
        randomizeCurve(),
        randomizeCurve(),
        randomizeCurve(),
        randomizeCurve(),
        randomizeCurve()
      );

      p5.bezier(
        randomizeCurve(),
        randomizeCurve(),
        randomizeCurve(),
        randomizeCurve(),
        randomizeCurve(),
        randomizeCurve(),
        randomizeCurve(),
        randomizeCurve()
      );

      const newDensity = randomizeSize();
      const newColor = randomizeColor();

      for (let i = 0; i < 1000; i++) {
        p5.fill(
          p5.random(newColor),
          p5.random(newColor),
          p5.random(newColor),
          p5.random(newColor)
        );
        p5.square(
          p5.random(p5.windowWidth),
          p5.random(p5.windowHeight),
          p5.random(newDensity)
        );
        p5.circle(
          p5.random(p5.windowWidth),
          p5.random(p5.windowHeight),
          p5.random(newDensity)
        );
        p5.triangle(
          p5.random(p5.windowWidth),
          p5.random(p5.windowHeight),
          p5.random(newDensity)
        );
      }
      p5.textSize(randomizeSize());
    };
  };
  return sketch;
};
