const beginningOfTime = new Date();

const DELTA = 100; // time-step in milliseconds
const MASS_SIZE = 10; // ratio of pixel size to mass
const UNIVERSE_SIZE = 600; // in pixels

class Planet {
  constructor(configObject) {
    this.name = configObject.name;
    this.x = configObject.x || 0;
    this.y = configObject.y || 0;
    this.Vx = configObject.Vx || 0;
    this.Vy = configObject.Vy || 0;
    this.mass = configObject.mass || 1;
    this.color = configObject.color || "white";
    this.dynamic = configObject.dynamic; // set false to create a fixed point
    this.zIndex = configObject.zIndex || 0;

    if ('undefined' === typeof configObject.trail){
      this.trail = false;
    } else {
      this.trail = configObject.trail;
    }

    if (this.dynamic) {
      this.updatePosition(); // set the physical parameters before showing
    }
    this.append(); // show the new planet on the universe
  }

  append() {
    $("#universe").append(`<div class="planet" id="${this.name}"></div>`);
    $(`#${this.name}`).css("position", "absolute");
    $(`#${this.name}`).css("background-color", this.color);
    const [CSSleft, CSStop] = this.getCSSCoords([this.x, this.y, this.mass]);
    $(`#${this.name}`).css("top", CSStop);
    $(`#${this.name}`).css("left", CSSleft);
    $(`#${this.name}`).css("height", this.mass * MASS_SIZE);
    $(`#${this.name}`).css("width", this.mass * MASS_SIZE);
  }

  getCSSCoords([a, b, m]) {
    // CSS displays the object from the upper left corner of the object
    // so, we need to remove 1/2 the height and width
    // and then shift it toward the mid-point of the universe
    const left = a - 0.5 * m * MASS_SIZE + 0.5 * UNIVERSE_SIZE;
    const top = b - 0.5 * m * MASS_SIZE + 0.5 * UNIVERSE_SIZE;
    return [left, top];
  }

  updatePosition() {
    if ($("#state").html() === "Moving" && this.dynamic) {
      const [Fx, Fy] = this.calcGravity();

      const Ax = Fx / this.mass;
      const Ay = Fy / this.mass;

      this.Vx = this.Vx + Ax;
      this.Vy = this.Vy + Ay;

      this.x = this.x + this.Vx;
      this.y = this.y + this.Vy;

      const [CSSleft, CSStop] = this.getCSSCoords([this.x, this.y, this.mass]);
      console.log(
        `${this.name}: x=${this.x} y=${this.y} CSSleft=${CSSleft} CSStop=${CSStop} Vx=${this.Vx} Vy=${this.Vy} mass=${this.mass}`
      );

      const currentUTCMilliseconds = new Date().getUTCMilliseconds();
      console.log('currentUTCMilliseconds:',currentUTCMilliseconds);
      const newName = `trail${currentUTCMilliseconds}`;
      const trail = new Planet({name: newName, x: this.x, y: this.y, dynamic: false});
      $(`#${this.name}`).animate({ top: `${CSStop}`, left: `${CSSleft}` }, 0);
    }
    setTimeout(() => {
      this.updatePosition();
    }, DELTA);
  }

  calcGravity() {
    // assumes all gravity is due to the mutual attraction between
    // the planet passed in and the Sun.

    const Msun = 1000; // mass of the Sun
    const G = 10; // gravitational constant

    const r = Math.sqrt(this.x ** 2 + this.y ** 2);
    if (5 > r) {
      console.log(`${this.name}: Too close to the singularity!`);
    }
    const f = (G * Msun * this.mass) / (r * r); // the force due to gravity

    return [(-1 * f * this.x) / r, (-1 * f * this.y) / r];
  }
}

// name, x, y, vx, vy, mass
$(document).ready(function () {
  $("#startstop").click(function () {
    if ($("#state").html() === "Moving") {
      $("#state").html("Stopped");
    } else {
      $("#state").html("Moving");
    }
  });

  $("div#universe").css("width", `${UNIVERSE_SIZE}px`);
  $("div#universe").css("height", `${UNIVERSE_SIZE}px`);
  $("div#universe").css("background-color", "black");

  const earth = new Planet({name:'Earth', x:100, y:100, Vx:-3, Vy:4.4, mass:1, color:'blue', dynamic: true});
  const mars = new Planet({name:'Mars', x:120, y:120, Vx:-3, Vy:4.4, mass:1, color:'red', dynamic: true, trail: true});
  const y = new Planet({ name: "Sun", mass: 3, dynamic: false });

});
