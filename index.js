const csv = require('csv-parser');
const { createReadStream, createWriteStream } = require('fs');

const DATE = 'Date';
const AMOUNT = 'Amount (£)';
const DESC = 'Bank Reference';

const inFile = process.argv[2] || './transactions.csv';
const outFile = (() => {
  const p = inFile.split('.');
  p[p.length-2] = `${p[p.length-2]}-fa`;
  return p.join('.');
})()

const ws = createWriteStream(outFile);

let count = 0;

createReadStream(inFile)
  .pipe(csv())
  .on('data', d => {
    count++;
    ws.write(`${d[DATE]},${d[AMOUNT] && d[AMOUNT].replace(/,/g, '')},${d[DESC]}\n`);
  })
  .on('end', () => {
    console.log(`Written ${count} transactions to ${outFile}.`);
  })
  .on('error', e => {
    console.log(e);
  });
