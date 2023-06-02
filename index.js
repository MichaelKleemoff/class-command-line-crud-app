const { readJSONFile, writeJSONFile } = require('./src/helpers');
const {
	create,
	destroy,
	edit,
	index,
	show,
} = require('./src/animalsController');

// Intention: Alias for `console.log`. `console.log` is for the developer. `inform` is for the user of our app.
const inform = console.log;

function run() {
	const action = process.argv[2]; // What `action` did the user type in?
	const animal = process.argv[3];
	let animals = readJSONFile('./data', 'animals.json');

	console.log('List of arguments for this `process.argv`', process.argv);
	console.log('Here is our `animals` data: ', animals);

	inform('Welcome to our Animals App 🙉🙈🐵🐒\n\n');

	switch (action) {
		case 'index':
			const animalsView = index(animals);
			inform(animalsView);
			break;
		case 'show':
			const animalView = show(animals, animal);
			inform(animalView);
			break;
		default:
			inform('There was an error.');
	}
}

run();
