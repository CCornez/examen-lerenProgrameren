import rl from 'readline-sync';

let firstName = rl.question('Voornaam?\n> ');
let lastName = rl.question('Familienaam?\n> ');
let streetAndNumber = rl.question('Straat en huisnummer?\n> ');
let postCode = +rl.question('Postcode?\n> ');
let municipality = rl.question('Gemeente?\n> ');

let result = '';

if (
  !firstName ||
  !lastName ||
  !streetAndNumber ||
  !postCode ||
  !municipality ||
  !(postCode > 999) ||
  !(postCode < 9901)
) {
  result = 'Minstens één van de ingevulde velden is niet geldig!';
} else {
  let row1 = `${firstName.slice(0, 1).toUpperCase()}. ${lastName}`;
  let row2 = streetAndNumber;
  let row3 = `${postCode} ${municipality.toUpperCase()}`;
  let maxLength = [row1.length, row2.length, row3.length].reduce(
    (acc, el) => (acc > el ? acc : el),
    0
  );
  if (maxLength > 40) {
    result = 'Kader is te breed. Gebruik afkortingen in de breedste stukken.';
  } else {
    result = `${'-'.repeat(maxLength + 4)}
| ${row1}${' '.repeat(maxLength - row1.length)} |
| ${row2}${' '.repeat(maxLength - row2.length)} |
| ${row3}${' '.repeat(maxLength - row3.length)} |
${'-'.repeat(maxLength + 4)}`;
  }
}

console.log(result);
