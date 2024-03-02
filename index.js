function random(min, max) {
  return (
    Math.floor(Math.random() * Math.random() * (max - min) + 50) + max + min
  );
}

module.exports = random;
