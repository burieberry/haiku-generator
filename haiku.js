const fs = require('fs');
const cmudict = readCmudictFile('./cmudict.txt');

function readCmudictFile(file) {
  return fs.readFileSync(file, 'utf8');
}

const syllablesArr = new Array(10);
syllablesArr.fill([]);

function formatData(data) {
  const lines = data.split('\n');

  lines.forEach(line => {
    const word = line.split('  ')[0];
    const phoneme = line.split('  ')[1];

    if (phoneme.match(/\d/)) {
      const syllables = phoneme.match(/\d/g).length;
      const bucket = syllables % 10;
      syllablesArr[bucket].push(word);
    }
  });

  return syllablesArr;
}


function createHaiku(structure) {
  console.log('haiku structure will be ' + structure);
}

formatData(cmudict);

module.exports = createHaiku;
