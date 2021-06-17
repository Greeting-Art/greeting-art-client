/* eslint-disable max-len */
/* eslint-disable indent */
const artResolution = 500;

const randomizeColor = () => {
  return Math.round(Math.random() * 254);
};

const randomizeNumber = () => {
  return Math.round(Math.random() * artResolution);
};

const randomizeSize = () => {
  return Math.round(Math.random() * 80);
};

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
      p5.noLoop();
    };
    p5.draw = () => {
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

export const stealthyArt = () => {
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(artResolution, artResolution);
      p5.stroke(randomizeColor(), randomizeColor(), randomizeColor());
      p5.background(randomizeColor(), randomizeColor(), randomizeColor());
      p5.erase(randomizeColor(), randomizeColor(), randomizeColor());
      p5.noLoop();
    };
    p5.draw = () => {
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
    };
  };
  return sketch;
};

export const spaceyArt = () => {
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(artResolution, artResolution);
      p5.stroke(randomizeColor(), randomizeColor(), randomizeColor());
      p5.background(randomizeSize(), randomizeSize(), randomizeSize());
      p5.noLoop();
    };
    p5.draw = () => {
      const density = randomizeSize() / 2;

      p5.erase(150, 45);
      p5.ellipse(
        randomizeNumber(),
        randomizeNumber(),
        randomizeSize(),
        randomizeColor()
      );

      for (let i = 0; i < density; i++) {
        p5.fill(p5.random(255), p5.random(255), p5.random(255), p5.random(255));
        p5.stroke(randomizeColor());
        p5.strokeWeight(8);
        p5.point(randomizeNumber(), randomizeNumber());
      }

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
