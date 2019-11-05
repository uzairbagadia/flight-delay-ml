const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

//For Oraclize Smart Contract
const oraclePath = path.resolve(__dirname, 'contracts', 'Oracle.sol');
const source = fs.readFileSync(oraclePath, 'utf8');
const output = solc.compile(source, 1).contracts;

//For Insurance Smart Contract

// const insurancePath = path.resolve(__dirname, 'contracts', 'Insurance.sol');
// const insurance_source = fs.readFileSync(insurancePath, 'utf8');
// const Insurance_output = solc.compile(insurance_source, 1).contracts;

fs.ensureDirSync(buildPath);


for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}




