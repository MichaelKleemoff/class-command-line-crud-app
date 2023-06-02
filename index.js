// const { readJSONFile, writeJSONFile } = require('./src/helpers');
// const {
// 	create,
// 	destroy,
// 	edit,
// 	index,
// 	show,
// } = require('./src/animalsController');

// Intention: `inform` is an alias for `console.log`. When developing/debugging use `console.log` (`console.log` is for the developer). When providing user feedback use `inform` (`inform` is for the user of our app).
const inform = console.log;

function run() {
	const action = process.argv[2]; // What `action` did the user type in?
	const animal = process.argv[3]; // The `animal` the user is working with.
	// let animals = readJSONFile('./data', 'animals.json');

	console.log('List of arguments for this `process.argv`', process.argv);
	// console.log('Here is our `animals` data: ', animals);

	inform('Welcome to our Animals App 🙉🙈🐵🐒\n\n');

	switch (action) {
		case 'index':
			inform(action);
			break;
		case 'create':
			inform(action, animal);
			break;
		case 'show':
			inform(action, animal);
			break;
		case 'update':
			inform(action, animal);
			break;
		case 'destroy':
			inform(action, animal);
			break;
		case 'score':
			inform(action);
			break;
		default:
			inform('There was an error.');
	}
}

run();
