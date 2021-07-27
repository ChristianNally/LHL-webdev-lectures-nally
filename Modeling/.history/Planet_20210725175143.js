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
    r = (planet.x)**2 + (planet.y)**2;
    f = G*M*m/(r*r);
    console.log('gravity:',f);
    return gravityVector;
  }



}

module.exports = {
  Planet
}

