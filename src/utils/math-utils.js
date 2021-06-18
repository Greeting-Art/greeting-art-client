const randomizeRatio = () => {
  return Math.round(Math.random() * 80);
};

const randomizeColor = () => {
  return Math.round(Math.random() * 254);
};

const randomizeCurve = () => {
  return Math.round(Math.random() * 640);
};

const randomizeSize = () => {
  return Math.round(Math.random() * 80);
};

const posNegToggle = () => {
  const posNegArray = [1, -1];
  return posNegArray[Math.round(Math.random() * 1)];
};

module.exports = {
  randomizeColor,
  randomizeCurve,
  randomizeRatio,
  randomizeSize,
  posNegToggle,
};
