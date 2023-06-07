const { readJSONFile, writeJSONFile } = require('./src/helpers');
const {
	create,
	destroy,
	edit,
	index,
	show,
} = require('./src/animalsController');

// Intention: `inform` is an alias for `console.log`. When developing/debugging use `console.log` (`console.log` is for the developer). When providing user feedback use `inform` (`inform` is for the user of our app).
const inform = console.log;

function run() {
	const action = process.argv[2]; // What `action` did the user type in?
	const animal = process.argv[3]; // The `animal` the user is working with.
	let animals = readJSONFile('./data', 'animals.json');
	let writeToFile = false;
	let updatedAnimals = [];

	inform('Welcome to our Animals App 🙉🙈🐵🐒\n\n');

	switch (action) {
		case 'index':
			const animalsView = index(animals);
			inform(animalsView);
			break;
		case 'create':
			updatedAnimals = create(animals, animal);
			writeToFile = true;
			break;
		case 'show':
			const animalView = show(animals, animal);
			inform(animalView);
			break;
		case 'update':
			updatedAnimals = edit(animals, animal, process.argv[4]);
			writeToFile = true;
			break;
		case 'destroy':
			updatedAnimals = destroy(animals, animal);
			writeToFile = true;
			break;
		case 'score':
			const score = animals.reduce((acc, curr) => acc + curr.points, 0);
			inform('Current score', score);
			break;
		default:
			inform('There was an error.');
	}
	// Write some logic on whether or not to write to the file after the switch statement.
	if (writeToFile) {
		writeJSONFile('data', 'animals.json', updatedAnimals);
	}
}

run();
