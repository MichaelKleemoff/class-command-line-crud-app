const { nanoid } = require('nanoid');
const animalPoints = require('../data/animalPoints.json');

function create(animals, animalName) {
	const animal = {
		name: animalName,
		id: nanoid(4),
		points: animalPoints[animalName],
	};
	animals.push(animal);
	return animals;
}

// function index(animals) {
// 	return animals.map((animal) => animal.id + ' ' + animal.name).join('\n');
// }

// function show(animals, animalId) {
// 	const animal = animals.find((animal) => animal.id === animalId);
// 	return animal.id + ' ' + animal.name + ' ' + animal.points + ' ' + ' points';
// }

module.exports = {
	create,
};
