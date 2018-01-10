const fs = require('fs');
const cmudict = readCmudictFile('./cmudict.txt');

function readCmudictFile(file) {
  return fs.readFileSync(file, 'utf8');
}

function formatData(data) {
  const lines = data.split('\n');
  let formatted = [];

  lines.forEach(line => {
    const word = line.split('  ')[0];
    const phoneme = line.split('  ')[1];

    if (phoneme.match(/\d/)) {
      const syllables = phoneme.match(/\d/g).length;
      formatted.push({ word, phoneme, syllables });
    }
  });

  // const has5syllables = function(obj) {
  //   return obj.syllables === 5;
  // }
  // console.log(arr.find(has5syllables))

  return formatted;
}


function createHaiku(arr, structure) {
  console.log('haiku structure will be ' + structure);
}

formatData(cmudict);

module.exports = createHaiku;
