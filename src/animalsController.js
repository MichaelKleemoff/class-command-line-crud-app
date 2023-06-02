function create(animals, animalName) {}

function index(animals) {
	return animals.map((animal) => animal.id + ' ' + animal.name).join('\n');
}

function show(animals, animalId) {
	const animal = animals.find((animal) => animal.id === animalId);
	return animal.id + ' ' + animal.name + ' ' + animal.points + ' ' + ' points';
}

// module.exports = {
// 	create,
// 	destroy,
// 	edit,
// 	index,
// 	show,
// };
