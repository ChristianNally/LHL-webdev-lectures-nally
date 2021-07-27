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

  get gravity(){
    return this.calcGravity();
  }

  calcGravity(){
    // assumes all gravity is due to the mutual attraction between
    // the planet passed in and the Sun.

    const Msun = 1000; // mass of the Sun
    const G = 1; // gravitational constant

    const gravityVector = [];

    const r = sqrt((this.x)**2 + (this.y)**2);
    f = G*Msun*m/(r*r); // the force due to gravity
    console.log('gravity:',f);

    return gravityVector;
  }



}

module.exports = {
  Planet
}

