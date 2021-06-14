/* eslint-disable max-len */
/* eslint-disable indent */

const randomizeColor = () => {
  return Math.round(Math.random() * 254);
};

const randomizeRatio = () => {
  return Math.round(Math.random() * 70);
};

const randomCircle = `circle(
  ${randomizeRatio()},
  ${randomizeRatio()},
  ${randomizeRatio()}
)`;

const rC1 = randomizeRatio();
const rC2 = randomizeRatio();
const rC3 = randomizeRatio();

const randomRect = `rect(
  ${randomizeRatio()},
  ${randomizeRatio()},
  ${randomizeRatio()},
  ${randomizeRatio()}
)`;

const newRect = `rect(4, 8, 9, 33)`;

const randomTriangle = `triangle(
  ${randomizeRatio()},
  ${randomizeRatio()},
  ${randomizeRatio()},
  ${randomizeRatio()},
  ${randomizeRatio()},
  ${randomizeRatio()}
)`;

console.log('O', randomCircle);
console.log('[]', randomRect);
console.log('^', randomTriangle);

//each shape has separate parameters, so this needs to be more complex:

const randomShape = () => {
  const shapeArray2D = ['circle', 'rect', 'triangle'];
  const selector = Math.round(Math.random() * 4);
  const shape = shapeArray2D[selector];
  if (shape === 'circle') return randomCircle;
  if (shape === 'rect') return randomRect;
  if (shape === 'triangle') return randomTriangle;
};

console.log('RRR', randomShape());

const p5ShapeVariable = `p5.${randomShape()}`;

export const geometricArt = () => {
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(100, 100);
      p5.noLoop();
    };
    p5.draw = () => {
      p5.background(randomizeColor());
      const randomShape = () => {
        const shapeArray2D = ['circle', 'rect', 'triangle'];
        const selector = Math.round(Math.random() * 4);
        const shape = shapeArray2D[selector];
        if (shape === 'circle')
          return p5.circle(
            randomizeRatio(),
            randomizeRatio(),
            randomizeRatio()
          );
        if (shape === 'rect')
          return p5.rect(
            randomizeRatio(),
            randomizeRatio(),
            randomizeRatio(),
            randomizeRatio()
          );
        if (shape === 'triangle')
          return p5.triangle(
            randomizeRatio(),
            randomizeRatio(),
            randomizeRatio(),
            randomizeRatio(),
            randomizeRatio(),
            randomizeRatio()
          );
      };
      randomShape();
      //   p5ShapeVariable;
      //   p5.circle(randomizeRatio(), randomizeRatio(), randomizeRatio());
      //p5.circle(rC1, rC2, rC3);
      //   p5.triangle(30, 75, 58, 20, 86, 75);
      //   p5.circle(30, 30, 20);
    };
  };
  return sketch;
};
