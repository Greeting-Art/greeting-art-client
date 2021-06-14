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

const randomizeRatio = () => {
  return Math.round(Math.random() * 80);
};

const randomizeColor = () => {
  return Math.round(Math.random() * 254);
};

const randomizeCurve = () => {
  return Math.round(Math.random() * 640);
};

export const weirdArt = () => {
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(400, 400);
      // p5.noStroke();
      p5.stroke(randomizeColor(), randomizeColor(), randomizeColor());
      // p5.background(randomizeColor(), randomizeColor(), randomizeColor());
      p5.background(randomizeColor(), randomizeColor(), randomizeColor());
      //p5.erase(randomizeColor(), randomizeColor(), randomizeColor());
      //p5.arc(50, 50, randomizeRatio(), randomizeRatio(), 2, 5);
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

      const newDensity = randomizeRatio();
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
      p5.textSize(randomizeRatio());
      p5.text('wave', randomizeColor(), randomizeColor());
    };
  };
  return sketch;
};

export const strangeArt = () => {
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(100, 100);
      p5.background(randomizeRatio());
    };

    const draw = () => {
      p5.square(
        p5.random(p5.windowWidth),
        p5.random(p5.windowHeight),
        p5.random(newDensity)
      );
    };
    console.log('>>>', sketch);
  };
  return sketch;
};
