const DELTA = 50;

class Planet {

  constructor({configObject}) {
    this.name = configObject.name;
    this.x = configObject.x;
    this.y = configObject.y;
    this.Vx = configObject.Vx;
    this.Vy = configObject.Vy;
    this.mass = configObject.mass;
    this.color = configObject.color;
    this.updatePosition();
    this.append();
  }

  append(){
    $('#universe').append(`<div class="planet" id="${this.name}"></div>`);
    $(`#${this.name}`).css("position","absolute");
    $(`#${this.name}`).css("background-color",this.color);
    $(`#${this.name}`).css("top",this.y);
    $(`#${this.name}`).css("left",this.x);
    $(`#${this.name}`).css("height",this.mass * 10);
    $(`#${this.name}`).css("width",this.mass * 10);
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
  
  const earth = new Planet({name:'Earth', x:100, y:100, Vx:-3, Vy:3, mass:1, color:'blue'});
  const earth = new Planet({name:'X', x:100, y:100, Vx:-3, Vy:-3, mass:2, color:'yellow'});
});
