import Text from './modules/Text.js';

let text = new Text('the original string');

console.log(text.str);
console.log(text.left(5));
console.log(text.right(5));
console.log(text.charCount());
console.log(text.vowelCount());
console.log(text.capitalsCount());
console.log(text.append(' is now modified'));
console.log(text.prepend('I can add text before '));
console.log(
  text
    .prepend('and so ')
    .append(' is now modified')
    .prepend('I can add text before ')
    .append('!')
);
