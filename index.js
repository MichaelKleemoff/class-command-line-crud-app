const { readJSONFile, writeJSONFile } = require('./src/helpers');

let animals = readJSONFile('./data', 'animals.json');

function run() {
	console.log('Peace');
}

run();
