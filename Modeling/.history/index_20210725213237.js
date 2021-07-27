class Planet {

  constructor(name, x, y, Vx, Vy, mass) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.Vx = Vx;
    this.Vy = Vy;
    this.mass = mass;
    this.updatePhaseSpace();
  }

  updatePhaseSpace(){
    const [Fx,Fy] = this.calcGravity();

    console.log(`${this.name} before: x=${this.x} y=${this.y} Vx=${this.Vx} Vy=${this.Vy} mass=${this.mass}`);

    const Ax = Fx / this.mass;
    const Ay = Fy / this.mass;
    
    this.Vx = this.Vx + Ax;
    this.Vy = this.Vy + Ay;

    this.x = this.x + this.Vx;
    this.y = this.y + this.Vy;

    console.log(`${this.name}  after: x=${this.x} y=${this.y} Vx=${this.Vx} Vy=${this.Vy} mass=${this.mass}`);

    setTimeout(()=>{
      this.updatePhaseSpace();
    },1000);    
  }

  calcGravity(){ // assumes all gravity is due to the mutual attraction between
                 // the planet passed in and the Sun.

    const Msun = 1000; // mass of the Sun
    const G = 1; // gravitational constant

    const r = Math.sqrt((this.x)**2 + (this.y)**2);
    const f = G * Msun * this.mass / (r * r); // the force due to gravity

    return [-1 * f * this.x / r, -1 * f * this.y / r];
  }

}

// name, x, y, vx, vy, mass
const earth = new Planet('Earth',100,100,10,10,1);
