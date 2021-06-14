/* eslint-disable max-len */
/* eslint-disable indent */
const artResolution = 400;

const randomizeColor = () => {
  return Math.round(Math.random() * 254);
};

const randomizeNumber = () => {
  return Math.round(Math.random() * artResolution);
};

// this randomizeSize function can be controlled via user input or randomly, to say how large/small the shapes can be
const randomizeSize = () => {
  return Math.round(Math.random() * 80);
};

// const shapeArray2D = ['circle', 'rect', 'triangle'];
// const curveArray = ['bezier', 'vertex', 'curve'];

const posNegToggle = () => {
  const posNegArray = [1, -1];
  return posNegArray[Math.round(Math.random() * 1)];
};

export const geometricArt = () => {
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(artResolution, artResolution);
      p5.stroke(randomizeColor(), randomizeColor(), randomizeColor());
      p5.background(randomizeColor(), randomizeColor(), randomizeColor());
      //   const onOff = posNegToggle();
      //   console.log('oOoOo', onOff);
      //   if (onOff !== 1)
      //     return p5.erase(randomizeSize(), randomizeSize(), randomizeSize());
      //p5.erase(randomizeColor(), randomizeColor(), randomizeColor());
      p5.noLoop();
    };
    p5.draw = () => {
      //p5.background(randomizeColor());
      const density = randomizeNumber() / 2;

      const randomShape = () => {
        const triAnchorOne = randomizeNumber();
        const triAnchorTwo = triAnchorOne + randomizeSize() * posNegToggle();
        const triAnchorThree = triAnchorTwo + randomizeSize() * posNegToggle();
        const triAnchorYOne = randomizeNumber();
        const triAnchorYTwo = triAnchorYOne + randomizeSize() * posNegToggle();
        const triAnchorYThree =
          triAnchorYTwo + randomizeSize() * posNegToggle();

        p5.triangle(
          triAnchorOne,
          triAnchorYOne,
          triAnchorTwo,
          triAnchorYTwo,
          triAnchorThree,
          triAnchorYThree
        );
      };

      for (let i = 0; i < density; i++) {
        p5.fill(p5.random(255), p5.random(255), p5.random(255), p5.random(255));
        randomShape();
        randomShape();
      }

      /////// save this vertex thing for special use or 'alien language':
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
    };
  };
  return sketch;
};
