class SpaceObject {
  constructor(configObject) {
    this.name = configObject.name;
    this.class = configObject.class || 'space-object';
    this.x = configObject.x || 0;
    this.y = configObject.y || 0;
    this.Vx = configObject.Vx || 0;
    this.Vy = configObject.Vy || 0;
    this.mass = configObject.mass || 0;
    this.color = configObject.color || "white";
    this.zIndex = configObject.zIndex || 0;
  }

  append() {
    // ...
  }

  getCSSCoords([a, b, m]) {
    // ...
  }
}

class Planet extends SpaceObject {
  constructor(configObject) {
    super(configObject);
    this.class = 'planet';
    this.planet = configObject.planet !== undefined ? configObject.planet : true;
    this.trail = configObject.trail !== undefined ? configObject.trail : false;

    if (this.planet) {
      this.updatePosition();
      listOfPlanets.push(this);
    }
    this.append();
  }

  updatePosition() {
    // ...
  }

  calcGravity() {
    // ...
  }
}

class Breadcrumb extends SpaceObject {
  constructor(configObject) {
    super(configObject);
    this.class = 'breadcrumb';
    this.planet = false;
    this.append();
  }
}

class Sun extends SpaceObject {
  constructor(configObject) {
    super(configObject);
    this.class = 'sun';
    this.mass = 1000; // mass of the Sun
    this.append();
  }
}

