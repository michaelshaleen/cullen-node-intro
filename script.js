const cullenites = require('./cullenites');
let students = require('./cullenites');
let scream = require('./scream');
console.log('hi', scream('world!'));
//functions are firstclass citizens
// require = return value of what it's calling
// make > export it > assaign it to var > console.log it/run it

console.log('cullenites', cullenites);
console.log('hello js');
console.log('yay for node!');

// if (groceries.length > 5) {
//   console.log('going to use shopper');
//   shopper();
// }
for (let items of cullenites) {
  console.log(`welcome, ${cullenites.items}`);
}
//return value is being set to require is kittykat
let myFavoriteNumber = require('./myFavoriteNumber');
// ./ says hey this is another file
console.log('myfav number', myFavoriteNumber);
