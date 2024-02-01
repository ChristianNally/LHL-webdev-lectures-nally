const G = 6.67430e-11; // m^3 kg^-1 s^-2
const M = 1.989e30; // kg
const PIXELS_PER_AU = 35;
const UNIVERSE_RADIUS_PIXELS = 400;

class Sun {
	constructor() {
		this.radius = 0.5;
		this.color = 0xffffff;
		this.position = [0, 0]; // x, y 2D position of the sun
	}

	init() {
		console.log('Sun Initialized');
		$('#universe').append('<div id="sun" class="sun"></div>');
		$('#sun').css('background-color', '#' + this.color.toString(16));
		$('#sun').css('top', this.position[1] + 'px');
		$('#sun').css('left', this.position[0] + 'px');

	}
}

class Planet {
	constructor(configObject) {
		this.name = configObject.name;
		this.distance = configObject.distance;
		this.eccentricity = configObject.eccentricity;
		this.semiMajorAxis = configObject.semiMajorAxis;
		this.inclination = configObject.inclination;
		this.rotation = configObject.rotation;
		this.radius = 0.1;
		this.color = 0x0000ff;
		this.position = [configObject.distance, 0]; // x, y 2D position of the planet
	}

	transformAUPositionArraytoCSSTopAndLeft = (auArray) => {
		return [auArray[0]*PIXELS_PER_AU + UNIVERSE_RADIUS_PIXELS, auArray[1]*PIXELS_PER_AU + UNIVERSE_RADIUS_PIXELS];
	};

	init() {
		console.log(this.name + ' Initialized');
		$('#universe').append('<div id="' + this.name + '" class="planet"></div>');
		$('#' + this.name).css('background-color', '#' + this.color.toString(16));
		const pixelArray = this.transformAUPositionArraytoCSSTopAndLeft(this.position);
		$('#' + this.name).css('top', pixelArray[1] + 'px');
		$('#' + this.name).css('left', pixelArray[0] + 'px');
	}
}

class SolarSystem {
	constructor() {
		this.sun = new Sun();
		this.planets = [];
		this.planets.push(new Planet({name: "Mercury", distance: 0.39, eccentricity: 0.205, semiMajorAxis: 0.387, inclination: 0.205, rotation: 0.}));
		this.planets.push(new Planet({name: "Venus", distance: 0.72, eccentricity: 0.007, semiMajorAxis: 0.723, inclination: 0.007, rotation: 0.}));
		this.planets.push(new Planet({name: "Earth", distance: 1.0, eccentricity: 0.017, semiMajorAxis: 1.0, inclination: 0.017, rotation: 0.}));
		this.planets.push(new Planet({name: "Mars", distance: 1.52, eccentricity: 0.093, semiMajorAxis: 1.52, inclination: 0.093, rotation: 0.}));
		this.planets.push(new Planet({name: "Jupiter", distance: 5.20, eccentricity: 0.048, semiMajorAxis: 5.20, inclination: 0.048, rotation: 0.}));
		this.planets.push(new Planet({name: "Saturn", distance: 9.58, eccentricity: 0.056, semiMajorAxis: 9.58, inclination: 0.056, rotation: 0.}));
		this.planets.push(new Planet({name: "Uranus", distance: 19.22, eccentricity: 0.046, semiMajorAxis: 19.22, inclination: 0.046, rotation: 0.}));
		this.planets.push(new Planet({name: "Neptune", distance: 30.05, eccentricity: 0.010, semiMajorAxis: 30.05, inclination: 0.010, rotation: 0.}));

		// updatePlanetPositions(this.planets);
	}

	init() {
		this.sun.init();
		for (var i = 0; i < this.planets.length; i++) {
			this.planets[i].init();
		}
	}
}

$(document).ready(function() {
	var solarSystem = new SolarSystem();
	console.log('init solarSystem');
	solarSystem.init();
});
