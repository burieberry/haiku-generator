const fs = require('fs');
const cmudict = readCmudictFile('./cmudict.txt');

function readCmudictFile(file) {
  return fs.readFileSync(file, 'utf8');
}

function formatData(data) {
  const lines = data.split('\n');
  lines.forEach(line => {
    const word = line.split('  ')[0];
    const phoneme = line.split('  ')[1];
    return console.log(`the word ${word} has phoneme ${phoneme}`);
  });
}

function createHaiku(structure) {
  console.log('haiku structure will be ' + structure);
}

formatData(cmudict);

module.exports = createHaiku;
