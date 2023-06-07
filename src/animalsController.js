// Make random unique ids with the `nanoid` npm package.
const { nanoid } = require('nanoid');
// Access `animalPoints.json` to get points for when the user passes in the `score` string at the command line.
const animalPoints = require('../data/animalPoints.json');
// Inform the user in the console.
const inform = console.log;

// `create` one `animal` object and `push` it to `animals.json` into an array of `animal` objects based on the `animal` string that the user passes in at the command line (using `process.argv`).
function create(animals, animalName, points) {
	const animal = !points
		? {
				name: animalName,
				id: nanoid(4),
				points: animalPoints[animalName],
		  }
		: { name: animalName, id: nanoid(4), points };
	animals.push(animal);
	return animals;
}

// Typically, an `index` is a list of things with limited details. When you think of an online store, you usually see one image, a name, and a price. Then when you click the item, you will see more details.
function index(animals) {
	return animals.map((animal) => animal.id + ' ' + animal.name).join('\n');
}

// Thinking about an online store, you also want to see a detailed view of an item. In this case, the user would pass the `id` to see a detailed view using the `show` string in the command line.
function show(animals, animalId) {
	const animal = animals.find((animal) => animal.id === animalId);
	return animal.id + ' ' + animal.name + ' ' + animal.points + ' points';
}

// `destroy` an `animal` by the `id`. `delete` is a keyword in JavaScript. You cannot name a function of this word. Therefore, the alternative word `destroy` will be used.
function destroy(animals, animalId) {
	const index = animals.findIndex((animal) => animal.id === animalId);
	if (index > -1) {
		animals.splice(index, 1);
		inform('Animal successfully removed from collection');
		return animals;
	} else {
		inform('Animal not found. No action taken');
		return animals;
	}
}

// `update` the animal. You'll use the `id` for this action as well. Additionally, you'll need to enter the new animal name.
function edit(animals, animalId, updatedAnimal) {
	const index = animals.findIndex((animal) => animal.id === animalId);
	if (index > -1) {
		animals[index].id = animalId;
		animals[index].name = updatedAnimal;
		animals[index].points = animalPoints[updatedAnimal];
		inform('Animal successfully updated');
		return animals;
	} else {
		inform('Animal not found. No action taken');
		return animals;
	}
}

module.exports = {
	create,
	destroy,
	edit,
	index,
	show,
};
