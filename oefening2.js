import Text from './modules/Text.js';

let text = new Text('String or some. En da');

console.log(text.str);
console.log(text.left(5));
console.log(text.right(5));
console.log(text.charCount());
console.log(text.vowelCount());
console.log(text.capitalsCount());
console.log(text.append('t is goed'));
console.log(text.prepend('using '));
// console.log(text.prepend('using ').append('t is goed'));
