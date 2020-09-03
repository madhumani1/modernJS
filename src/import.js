import myCubeFunc, {RAND_NUM} from './math.js';

// run it as 
// node -r esm src/import


// other ways of calling
//const math = require('./math');
// const {cube: myCubeFunc, RAND_NUM} = math;

console.log('cube of 5: ',myCubeFunc(5));
console.log('random number: ',RAND_NUM);