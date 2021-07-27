function Planet(x, y, vx, vy, mass) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.mass = mass;
}

class Planet {

  constructor(x, y, vx, vy, mass) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.mass = mass;
  }

  function gravity(planet){
    // assumes all gravity is due to the mutual attraction between
    // the planet passed in and the Sun.

    const Msun = 1000; // mass of the Sun.
    const G = 1; // gravitational constant

    const gravityVector = [];
    r = (planet.x)**2 + (planet.y)**2;
    f = G*Msun*m/(r*r);
    console.log('gravity:',f);
    return gravityVector;
  }



}

module.exports = {
  Planet
}

