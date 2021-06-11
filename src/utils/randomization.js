/* eslint-disable max-len */
/* eslint-disable indent */

export const randomArt = () => {
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(400, 400);
      p5.background(255);
      // p5.noStroke();

      for (let i = 0; i < 100; i++) {
        p5.fill(p5.random(255), p5.random(255), p5.random(255), p5.random(255));

        p5.square(p5.random(400), p5.random(400), p5.random(100));

        p5.circle(p5.random(400), p5.random(400), p5.random(100));
      }
    };
    console.log('>>>', sketch);
  };
  return sketch;
};

const bezierWild = () => {
  return Math.round(Math.random() * 80);
};

const arcWild = () => {
  return Math.round(Math.random() * 254);
};

export const weirdArt = () => {
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(400, 400);
      p5.background(arcWild());
      // p5.bezier(
      //   arcWild(),
      //   arcWild(),
      //   arcWild(),
      //   arcWild(),
      //   arcWild(),
      //   arcWild(),
      //   arcWild(),
      //   arcWild()
      // );
      // p5.noStroke();

      for (let i = 0; i < 100; i++) {
        p5.fill(p5.random(255), p5.random(255), p5.random(255), p5.random(255));

        p5.triangle(p5.random(400), p5.random(400), p5.random(100));

        p5.circle(p5.random(400), p5.random(400), p5.random(100));
      }
    };

    // function draw() {
    //   p5.background(200);
    //   rotateX(frameCount * 0.01);
    //   rotateY(frameCount * 0.01);
    //   cone(40, 70);
    // }
  };
  return sketch;
};
