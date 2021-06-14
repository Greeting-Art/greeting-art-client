/* eslint-disable max-len */
/* eslint-disable indent */
const artResolution = 360;

const randomizeColor = () => {
  return Math.round(Math.random() * 254);
};

const randomizeNumber = () => {
  return Math.round(Math.random() * artResolution);
};

const shapeArray2D = ['circle', 'rect', 'triangle'];
const curveArray = ['bezier', 'vertex', 'curve'];

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
            geometricParamsArray[0].circleParams[0],
            geometricParamsArray[0].circleParams[1],
            geometricParamsArray[0].circleParams[2]
          );
        if (shape === 'rect')
          return p5.rect(
            geometricParamsArray[1].rectParams[0],
            geometricParamsArray[1].rectParams[1],
            geometricParamsArray[1].rectParams[2],
            geometricParamsArray[1].rectParams[3]
          );
        if (shape === 'triangle')
          return p5.triangle(
            geometricParamsArray[2].triangleParams[0],
            geometricParamsArray[2].triangleParams[1],
            geometricParamsArray[2].triangleParams[2],
            geometricParamsArray[2].triangleParams[3],
            geometricParamsArray[2].triangleParams[4],
            geometricParamsArray[2].triangleParams[5]
          );
      };
      randomShape();

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
