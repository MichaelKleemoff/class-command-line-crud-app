const { readJSONFile, writeJSONFile } = require('./src/helpers');
const { create, index, show, destroy } = require('./src/animalsController');

// Intention: `inform` is an alias for `console.log`. When developing/debugging use `console.log` (`console.log` is for the developer). When providing user feedback use `inform` (`inform` is for the user of our app).
const inform = console.log;

function run() {
	const action = process.argv[2]; // What `action` did the user type in?
	const animal = process.argv[3]; // The `animal` the user is working with.
	let animals = readJSONFile('./data', 'animals.json');
	let writeToFile = false;
	let updatedAnimals = [];

	console.log('List of arguments for this `process.argv`', process.argv);
	console.log('Here is our `animals` data: ', animals);

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
			inform(action, animal);
			break;
		case 'destroy':
			updatedAnimals = destroy(animals, animal);
			writeToFile = true;
			break;
		case 'score':
			inform(action);
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
