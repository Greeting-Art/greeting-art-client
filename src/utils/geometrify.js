/* eslint-disable max-len */
/* eslint-disable indent */
const artResolution = 360;

const randomizeColor = () => {
  return Math.round(Math.random() * 254);
};

const randomizeNumber = () => {
  return Math.round(Math.random() * artResolution);
};

const randomizeSize = () => {
  return Math.round(Math.random() * 80);
};

const shapeArray2D = ['circle', 'rect', 'triangle'];
const curveArray = ['bezier', 'vertex', 'curve'];

const posNegToggle = () => {
  const posNegArray = [1, -1];
  return posNegArray[Math.round(Math.random() * 1)];
};

const triAnchorOne = randomizeNumber();
const triAnchorTwo = triAnchorOne + 70 * posNegToggle();
const triAnchorThree = triAnchorTwo + 70 * posNegToggle();
const triAnchorYOne = randomizeNumber();
const triAnchorYTwo = triAnchorYOne + 70 * posNegToggle();
const triAnchorYThree = triAnchorYTwo + 70 * posNegToggle();

//const circleThing = geometricParamsArray[0].circleParams;
//console.log('MEGACIRCLE', circleThing);

export const geometricArt = () => {
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(artResolution, artResolution);
      p5.noLoop();
    };
    p5.draw = () => {
      p5.background(randomizeColor());
      const geometricParamsArray = [
        {
          circleParams: [
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
          ],
        },
        {
          rectParams: [
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
          ],
        },
        {
          triangleParams: [
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
          ],
        },
        {
          curveParams: [
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
          ],
        },
        {
          bezierParams: [
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
            randomizeNumber(),
          ],
        },
      ];

      const randomShape = () => {
        const selector = Math.round(Math.random() * shapeArray2D.length);
        const shape = shapeArray2D[selector];

        if (shape === 'circle')
          return p5.circle(
            randomizeNumber(),
            randomizeNumber(),
            randomizeSize()
          );
        if (shape === 'rect')
          return p5.rect(
            randomizeNumber(),
            randomizeNumber(),
            randomizeSize(),
            randomizeSize()
          );
        if (shape === 'triangle')
          return p5.triangle(
            triAnchorOne,
            triAnchorYOne,
            triAnchorTwo,
            triAnchorYTwo,
            triAnchorThree,
            triAnchorYThree
          );
      };

      for (let i = 0; i < 500; i++) {
        p5.fill(p5.random(255), p5.random(255), p5.random(255), p5.random(255));

        // p5.square(p5.random(400), p5.random(400), p5.random(100));

        // p5.circle(p5.random(400), p5.random(400), p5.random(100));
        randomShape();
      }
      //randomShape();

      p5.noFill();
      p5.strokeWeight(1);
      p5.beginShape();
      p5.vertex(20, 20);
      p5.quadraticVertex(
        randomizeNumber(),
        randomizeNumber(),
        randomizeNumber(),
        randomizeNumber()
      );
      p5.quadraticVertex(
        randomizeNumber(),
        randomizeNumber(),
        randomizeNumber(),
        randomizeNumber()
      );
      p5.vertex(80, 60);
      p5.endShape();

      //   p5ShapeVariable;
      //   p5.circle(randomizeNumber(), randomizeNumber(), randomizeNumber());
      //p5.circle(rC1, rC2, rC3);
      //   p5.triangle(30, 75, 58, 20, 86, 75);
      //   p5.circle(30, 30, 20);
    };
  };
  return sketch;
};
