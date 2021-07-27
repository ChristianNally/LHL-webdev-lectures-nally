class Planet {

  constructor(name, x, y, vx, vy, mass) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.Vx = Vx;
    this.Vy = Vy;
    this.mass = mass;

  }

  // get gravity(){
  //   return this.calcGravity();
  // }

  updatePhaseSpace(){
    console.log(`${this.name}: x=${this.x} y=${this.y} Vx=${this.Vx} Vy=${this.Vy} mass=${this.mass}`);
    const [Fx,Fy] = this.calcGravity();
    console.log(`Fx=${Fx} Fy=${Fy}`);

    const Ax = Fx / this.mass;
    const Ay = Fy / this.mass;
    
    this.Vx = this.Vx + Ax;
    this.Vy = this.Vy + Ay;

    this.x = this.x + Vx;
    this.y = this.y + Vy;

    setTimeout(()=>{
      this.updatePhaseSpace();
    },1000);    
  }

  calcGravity(){
    // assumes all gravity is due to the mutual attraction between
    // the planet passed in and the Sun.

    const Msun = 1000; // mass of the Sun
    const G = 1; // gravitational constant

    const gravityVector = []; // in x,y coordinates

    const r = sqrt((this.x)**2 + (this.y)**2);
    console.log('r:',r);

    f = G * Msun * m / (r * r); // the force due to gravity
    console.log('magnitude of gravity:',f);

    return gravityVector;
  }

}

module.exports = {
  Planet
}

