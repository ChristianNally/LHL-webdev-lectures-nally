const DELTA = 200;

class Planet {

  constructor(name, x, y, Vx, Vy, mass, color) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.Vx = Vx;
    this.Vy = Vy;
    this.mass = mass;
    this.color = color;
    this.updatePosition();
    this.append();
  }

  append(){
    $('#universe').append(`<div class="planet" id="${this.name}"></div>`);
    $(`#${this.name}`).css("position","absolute");
    $(`#${this.name}`).css("background-color",this.color);
    $(`#${this.name}`).css("top",this.y);
    $(`#${this.name}`).css("left",this.x);
  };

  updatePosition(){
    if ($('#state').html() === 'Moving'){
      const [Fx,Fy] = this.calcGravity();

      const Ax = Fx / this.mass;
      const Ay = Fy / this.mass;
      
      this.Vx = this.Vx + Ax;
      this.Vy = this.Vy + Ay;
  
      this.x = this.x + this.Vx;
      this.y = this.y + this.Vy;
  
      $(`#${this.name}`).animate( {top: `${this.y}`, left: `${this.x}`}, DELTA );
      console.log(`${this.name}: x=${this.x} y=${this.y} Vx=${this.Vx} Vy=${this.Vy} mass=${this.mass}`);  
    }
    setTimeout(()=>{
      this.updatePosition();
    },DELTA);    
  }

  calcGravity(){ // assumes all gravity is due to the mutual attraction between
                 // the planet passed in and the Sun.

    const Msun = 1000; // mass of the Sun
    const G = 10; // gravitational constant

    const r = Math.sqrt((this.x)**2 + (this.y)**2);
    const f = G * Msun * this.mass / (r * r); // the force due to gravity

    return [-1 * f * this.x / r, -1 * f * this.y / r];
  }

}

// name, x, y, vx, vy, mass
$(document).ready(function(){
  $('#startstop').click(function(){
    if ($('#state').html() === 'Moving'){
      $('#state').html('Stopped');
    } else {
      $('#state').html('Moving');
    }
  });
  const earth = new Planet('Earth',100,100,-3,3,1,'blue');
  const sun = new Planet('Sun',130,130,0,0,1000,'yellow');
});
